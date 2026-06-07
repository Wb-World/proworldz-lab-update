const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { Pool } = require("pg");
const courses = require("./data/courses");

dotenv.config();

const app = express();
const port = Number(process.env.PORT || 4000);
const jwtSecret = process.env.JWT_SECRET || "dev-only-change-me";
const adminEmails = new Set(
  (process.env.ADMIN_EMAILS || "admin@proworldz.com")
    .split(",")
    .map((email) => email.trim().toLowerCase())
    .filter(Boolean)
);

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.DATABASE_SSL === "true" ? { rejectUnauthorized: false } : false,
});

app.use(cors({ origin: process.env.CLIENT_ORIGIN || "http://127.0.0.1:5173" }));
app.use(express.json({ limit: "1mb" }));

function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function publicUser(user) {
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role || "student",
    createdAt: user.created_at,
  };
}

function importedStudentRole(student) {
  return new Set(["PWZ-001", "PWZ-210", "PWZ-301"]).has(student.student_id) ? "admin" : "student";
}

function signToken(user) {
  return jwt.sign({ sub: user.id, email: user.email, role: user.role || "student" }, jwtSecret, { expiresIn: "7d" });
}

function publicImportedStudent(student) {
  return {
    id: student.student_id,
    name: student.name,
    email: student.email,
    role: importedStudentRole(student),
    course: student.course,
    eagleCoins: student.eagle_coins,
    assignments: student.assignments,
    assignsComplete: student.assigns_complete,
    waitingAssigns: student.waiting_assigns,
    avatars: student.avatars,
    access: student.access,
    lastActive: student.last_active,
  };
}

function signImportedStudent(student) {
  return jwt.sign({ sub: student.student_id, email: student.email, role: importedStudentRole(student) }, jwtSecret, { expiresIn: "7d" });
}

async function isLegacyPasswordMatch(password, legacyPassword) {
  if (!legacyPassword) return false;
  if (legacyPassword.startsWith("$2y$")) {
    return bcrypt.compare(password, legacyPassword.replace("$2y$", "$2a$"));
  }
  if (legacyPassword.startsWith("$2a$") || legacyPassword.startsWith("$2b$")) {
    return bcrypt.compare(password, legacyPassword);
  }
  return password === legacyPassword;
}

app.get("/api/health", async (_req, res) => {
  try {
    await pool.query("select 1");
    res.json({ ok: true, service: "secureworldz-api", database: "connected" });
  } catch (error) {
    res.status(503).json({
      ok: false,
      service: "secureworldz-api",
      database: "unavailable",
      message: "Check DATABASE_URL and run server/db/schema.sql in PostgreSQL.",
    });
  }
});

app.get("/api/courses", (_req, res) => {
  res.json({ courses });
});

app.get("/api/workspace", async (req, res) => {
  try {
    const email = String(req.query.email || "").trim().toLowerCase();
    const [studentsResult, tasksResult, teamsResult] = await Promise.all([
      pool.query(
        `select student_id, name, email, course, eagle_coins, assignments, assigns_complete,
          waiting_assigns, avatars, access, last_active
         from imported_students
         order by eagle_coins desc, name asc`
      ),
      pool.query("select task_id, tasks, description, completed from imported_tasks order by task_id asc"),
      pool.query("select team_id, team_name, created_at, members, leader, co_leader from imported_teams order by team_name asc"),
    ]);

    const students = studentsResult.rows.map(publicImportedStudent);
    const activeStudents = students.filter((student) => student.access).length;
    const completedAssignments = students.reduce((total, student) => total + Number(student.assignsComplete || 0), 0);
    const currentStudent = email ? students.find((student) => student.email.toLowerCase() === email) || null : null;

    res.json({
      stats: [
        [String(students.length), "Students", "fa-users"],
        [String(new Set(students.map((student) => student.course).filter(Boolean)).size), "Courses", "fa-graduation-cap"],
        [String(tasksResult.rows.length), "Task Sets", "fa-list-check"],
        [String(completedAssignments), "Completed", "fa-chart-line"],
      ],
      students,
      currentStudent,
      tasks: tasksResult.rows.map((task) => ({
        id: task.task_id,
        title: Array.isArray(task.tasks) && task.tasks.length ? task.tasks[0] : task.task_id,
        description: task.description,
        count: Array.isArray(task.tasks) ? task.tasks.length : 0,
        status: task.completed ? "Completed" : "Open",
      })),
      teams: teamsResult.rows.map((team) => ({
        id: team.team_id,
        name: team.team_name,
        size: Array.isArray(team.members) ? team.members.length : 0,
        focus: team.leader ? `Lead: ${team.leader}` : "General",
        members: team.members,
        coLeader: team.co_leader,
      })),
      summary: { activeStudents },
    });
  } catch (error) {
    res.status(500).json({ message: "Could not load imported student workspace data. Run server/db/import_if0_students.sql." });
  }
});

app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "Name, email, and message are required." });
  }

  if (!isEmail(email)) {
    return res.status(400).json({ message: "Use a valid email address." });
  }

  try {
    const result = await pool.query(
      "insert into contact_messages (name, email, message) values ($1, $2, $3) returning id, created_at",
      [name.trim(), email.trim().toLowerCase(), message.trim()]
    );

    res.status(201).json({
      message: "Message received.",
      contactMessage: result.rows[0],
    });
  } catch (error) {
    res.status(500).json({ message: "Could not save your message. Check PostgreSQL setup." });
  }
});

app.post("/api/auth/signup", async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: "Name, email, and password are required." });
  }

  if (!isEmail(email)) {
    return res.status(400).json({ message: "Use a valid email address." });
  }

  if (password.length < 8) {
    return res.status(400).json({ message: "Password must be at least 8 characters." });
  }

  try {
    const passwordHash = await bcrypt.hash(password, 12);
    const normalizedEmail = email.trim().toLowerCase();
    const role = adminEmails.has(normalizedEmail) ? "admin" : "student";
    const result = await pool.query(
      "insert into users (name, email, password_hash, role) values ($1, $2, $3, $4) returning id, name, email, role, created_at",
      [name.trim(), normalizedEmail, passwordHash, role]
    );
    const user = result.rows[0];

    res.status(201).json({ user: publicUser(user), token: signToken(user) });
  } catch (error) {
    if (error.code === "23505") {
      return res.status(409).json({ message: "An account with this email already exists." });
    }

    res.status(500).json({ message: "Could not create account. Check PostgreSQL setup." });
  }
});

app.post("/api/auth/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required." });
  }

  try {
    const result = await pool.query("select * from users where email = $1", [email.trim().toLowerCase()]);
    const user = result.rows[0];

    if (user && (await bcrypt.compare(password, user.password_hash))) {
      return res.json({ user: publicUser(user), token: signToken(user) });
    }

    const importedResult = await pool.query(
      `select student_id, name, email, legacy_password, course, eagle_coins, assignments,
        assigns_complete, waiting_assigns, avatars, access, last_active
       from imported_students
       where email = $1`,
      [email.trim().toLowerCase()]
    );
    const importedStudent = importedResult.rows[0];

    if (!importedStudent || !(await isLegacyPasswordMatch(password, importedStudent.legacy_password))) {
      return res.status(401).json({ message: "Invalid email or password." });
    }

    res.json({ user: publicImportedStudent(importedStudent), token: signImportedStudent(importedStudent) });
  } catch (error) {
    res.status(500).json({ message: "Could not log in. Check PostgreSQL setup." });
  }
});

app.use((_req, res) => {
  res.status(404).json({ message: "API route not found." });
});

app.listen(port, () => {
  console.log(`SecureWorldz API running at http://127.0.0.1:${port}`);
});
