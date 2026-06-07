import { useEffect, useMemo, useState } from "react";

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || "http://127.0.0.1:4000";

async function apiRequest(path, options = {}) {
  const response = await fetch(`${apiBaseUrl}${path}`, {
    headers: { "Content-Type": "application/json", ...(options.headers || {}) },
    ...options,
  });
  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(data.message || "Request failed.");
  }

  return data;
}

const features = [
  {
    icon: "fa-shield-alt",
    title: "Industry-Leading Security",
    text: "Learn from real-world cybersecurity scenarios with hands-on penetration testing, threat analysis, and advanced defense strategies.",
  },
  {
    icon: "fa-brain",
    title: "AI-Powered Development",
    text: "Master artificial intelligence and machine learning with practical projects that prepare you for the future of technology.",
  },
  {
    icon: "fa-rocket",
    title: "Fast-Track Career Growth",
    text: "Accelerate your professional development with industry-recognized certifications and direct pathways to high-demand roles.",
  },
  {
    icon: "fa-users",
    title: "Expert Mentorship",
    text: "Learn directly from industry veterans with years of real-world experience in leading tech companies and startups.",
  },
  {
    icon: "fa-laptop-code",
    title: "Hands-On Projects",
    text: "Build portfolio-worthy projects that demonstrate your skills to potential employers and clients in the tech industry.",
  },
  {
    icon: "fa-infinity",
    title: "Lifetime Access",
    text: "Get unlimited access to all course materials, updates, and community resources for continuous learning and growth.",
  },
];

const courses = [
  {
    title: "Secure X",
    image: "images/jai-bro/secure-x.png",
    pdf: "course-details/secure-x.pdf",
    text: "Master advanced cybersecurity techniques and digital defense strategies. Learn to protect systems from sophisticated cyber threats and vulnerabilities.",
  },
  {
    title: "AI Verse Web Labs",
    image: "images/jai-bro/ai.png",
    pdf: "course-details/Ai.pdf",
    text: "Build intelligent web applications using AI-driven development, machine learning integration, and automated engineering workflows.",
  },
  {
    title: "Hunt Elite",
    image: "images/jai-bro/hunt-elite.png",
    pdf: "course-details/Hunt.pdf",
    text: "Professional bug bounty hunting and exploit analysis. Learn advanced penetration testing and ethical hacking techniques.",
  },
  {
    title: "Creative Craft",
    image: "images/jai-bro/creative-craft.png",
    pdf: "course-details/Canva.pdf",
    text: "Master strategic visual communication design, branding, and UI/UX principles to create compelling digital experiences.",
  },
  {
    title: "Py Desk Systems",
    image: "images/jai-bro/py-desk.png",
    pdf: "course-details/py.pdf",
    text: "Develop enterprise-grade desktop applications with Python. Master GUI frameworks and system-level programming.",
  },
  {
    title: "Code Foundry",
    image: "images/jai-bro/code-f.png",
    pdf: "course-details/Code.pdf",
    text: "Professional programming language mastery. Deep dive into best practices and advanced software engineering concepts.",
  },
  {
    title: "Startup Gene Labs",
    image: "images/jai-bro/startup.png",
    pdf: "course-details/startup.pdf",
    text: "Venture creation and startup scaling. Build, fund, and grow tech startups from idea to successful enterprise.",
  },
  {
    title: "CLI++ Systems",
    image: "images/jai-bro/cli.png",
    pdf: "course-details/CLI.pdf",
    text: "C++ command-line tool engineering for Linux. Build powerful system tools using advanced programming techniques.",
  },
  {
    title: "API Man",
    image: "images/jai-bro/app.png",
    pdf: "course-details/api.pdf",
    text: "Master API development and management. Build RESTful and GraphQL APIs with scalable architecture patterns.",
  },
];

const stats = [
  ["30K+", "Active Students"],
  ["50+", "Expert Instructors"],
  ["98%", "Success Rate"],
];

const workspaceRoutes = new Set([
  "/admin",
  "/dashboard",
  "/tasks",
  "/teams",
  "/leaderboard",
  "/profile",
  "/settings",
  "/lab",
  "/shop",
]);

const fallbackDashboardStats = [
  ["30K+", "Students", "fa-users"],
  ["9", "Courses", "fa-graduation-cap"],
  ["128", "Tasks", "fa-list-check"],
  ["98%", "Success", "fa-chart-line"],
];

const taskRows = [
  ["Secure X Recon", "Cybersecurity", "Advanced", "Open"],
  ["AI Prompt Lab", "AI Verse", "Intermediate", "Review"],
  ["CLI Parser Build", "CLI++ Systems", "Beginner", "Open"],
  ["API Auth Flow", "API Man", "Advanced", "Draft"],
];

const teamRows = [
  ["Red Core", "12 members", "Cybersecurity"],
  ["AI Builders", "9 members", "AI Verse"],
  ["Code Foundry", "16 members", "Programming"],
  ["Startup Circle", "7 members", "Business"],
];

const leaderboardRows = [
  ["Adhithya", "9,820", "Secure X"],
  ["Nikhil", "8,940", "Hunt Elite"],
  ["Diya", "8,420", "AI Verse"],
  ["Kiran", "7,900", "Code Foundry"],
];

const fallbackWorkspaceData = {
  stats: fallbackDashboardStats,
  currentStudent: null,
  tasks: taskRows.map(([title, course, level, status], index) => ({
    id: `fallback-${index}`,
    title,
    description: `${course} - ${level}`,
    count: 1,
    status,
  })),
  teams: teamRows.map(([name, size, focus], index) => ({
    id: `fallback-${index}`,
    name,
    size: Number.parseInt(size, 10) || 0,
    focus,
  })),
  students: leaderboardRows.map(([name, score, course], index) => ({
    id: `fallback-${index}`,
    name,
    eagleCoins: Number.parseInt(score.replace(/,/g, ""), 10) || 0,
    course,
    assignsComplete: 0,
  })),
};

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [route, setRoute] = useState(() => window.location.pathname);
  const [currentUser, setCurrentUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("secureworldz_user"));
    } catch {
      return null;
    }
  });

  const navItems = useMemo(
    () => [
      ["Home", "/"],
      ["Courses", "/courses"],
      ["About", "/about"],
      ["Contact", "/contact"],
      ["Dashboard", "/dashboard"],
    ],
    []
  );

  const isHomeRoute = route === "/" || route === "/index.html";
  const isWorkspaceRoute = workspaceRoutes.has(route);

  useEffect(() => {
    const onPopState = () => setRoute(window.location.pathname);
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMenuOpen(false);
  }, [route]);

  useEffect(() => {
    if (!isHomeRoute) {
      setScrolled(true);
      return undefined;
    }

    const onScroll = () => {
      setScrolled(window.scrollY > 50);

      let current = "home";
      document.querySelectorAll("section[id]").forEach((section) => {
        if (window.scrollY >= section.offsetTop - 200) {
          current = section.getAttribute("id");
        }
      });
      setActiveSection(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHomeRoute]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    document.querySelectorAll(".fade-in-up").forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const navigate = (event, href) => {
    if (href.startsWith("#")) {
      scrollToSection(event, href);
      return;
    }

    event.preventDefault();
    window.history.pushState({}, "", href);
    setRoute(href);
  };

  const scrollToSection = (event, href) => {
    event.preventDefault();
    if (!isHomeRoute) {
      window.history.pushState({}, "", "/");
      setRoute("/");
      setTimeout(() => {
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 50);
      return;
    }
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  };

  const renderPage = () => {
    if (route === "/about") return <AboutPage />;
    if (route === "/contact") return <ContactPage />;
    if (route === "/login") return <LoginPage navigate={navigate} setCurrentUser={setCurrentUser} />;
    if (route === "/signup") return <SignupPage navigate={navigate} setCurrentUser={setCurrentUser} />;
    if (route === "/courses") return <CoursesPage />;
    if (workspaceRoutes.has(route)) {
      return <WorkspacePage route={route} navigate={navigate} currentUser={currentUser} setCurrentUser={setCurrentUser} />;
    }
    return <HomePage scrollToSection={scrollToSection} />;
  };

  return (
    <>
      {!isWorkspaceRoute && <nav className={`navbar${scrolled ? " scrolled" : ""}`} id="navbar">
        <div className="nav-container">
          <a href="/" className="logo" onClick={(event) => navigate(event, "/")}>
            <img src="images/eaglone/p-eaglone.png" alt="ProWorldz Logo" className="logo-img" loading="lazy" />
            <span className="logo-text">
              PRO<span className="logo-accent">WORLDZ</span>
            </span>
          </a>

          <button
            className={`menu-toggle${menuOpen ? " active" : ""}`}
            id="menuToggle"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            type="button"
          >
            <span />
            <span />
            <span />
          </button>

          <ul className={`nav-links${menuOpen ? " active" : ""}`} id="navLinks">
            {navItems.map(([label, href]) => (
              <li key={label}>
                <a
                  href={href}
                  className={
                    (href === "/" && isHomeRoute) ||
                    href === route ||
                    (isHomeRoute && href === "/courses" && activeSection === "courses")
                      ? "active"
                      : ""
                  }
                  onClick={(event) => navigate(event, href)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <a href="/login" className="nav-cta" onClick={(event) => navigate(event, "/login")}>
            <i className="fas fa-sign-in-alt" />
            Login
          </a>
        </div>
      </nav>}

      {renderPage()}

      {!isWorkspaceRoute && <Footer />}
    </>
  );
}

function HomePage({ scrollToSection }) {
  return (
    <main>
      <section className="hero" id="home">
          <div className="hero-content">
            <div className="hero-badge">
              <i className="fas fa-star" />
              Premium Tech Training Platform
            </div>
            <h1>Master Advanced Technology Skills</h1>
            <p>
              Transform your career with industry-leading courses in cybersecurity, AI development, and
              cutting-edge technologies. Join thousands of professionals advancing their expertise.
            </p>
            <div className="hero-cta-group">
              <a href="#courses" className="btn btn-primary" onClick={(event) => scrollToSection(event, "#courses")}>
                Explore Courses
                <i className="fas fa-arrow-right" />
              </a>
              <a href="#features" className="btn btn-secondary" onClick={(event) => scrollToSection(event, "#features")}>
                <i className="fas fa-play-circle" />
                See Features
              </a>
            </div>
          </div>
        </section>

        <section className="features" id="features">
          <div className="section-header">
            <div className="section-badge">Why Choose Us</div>
            <h2 className="section-title">Enterprise-Grade Learning Experience</h2>
            <p className="section-description">
              Built for professionals who demand excellence. Our platform combines cutting-edge technology
              with expert instruction to deliver unmatched results.
            </p>
          </div>

          <div className="features-grid">
            {features.map((feature) => (
              <article className="feature-card fade-in-up" key={feature.title}>
                <div className="feature-icon">
                  <i className={`fas ${feature.icon}`} />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="courses" id="courses">
          <div className="section-header">
            <h2 className="section-title">Professional Training Courses</h2>
            <p className="section-description">
              Comprehensive programs designed by industry experts to transform you into a sought-after
              technology professional.
            </p>
          </div>

          <div className="courses-grid">
            {courses.map((course) => (
              <article className="course-card fade-in-up" key={course.title}>
                <div className="course-image">
                  <img src={course.image} alt={course.title} loading="lazy" />
                </div>
                <div className="course-body">
                  <h3>{course.title}</h3>
                  <p>{course.text}</p>
                  <a href={course.pdf} className="course-action">
                    View Details
                    <i className="fas fa-arrow-right" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="stats">
          <div className="stats-container">
            {stats.map(([number, label]) => (
              <div className="stat-item" key={label}>
                <div className="stat-number">{number}</div>
                <div className="stat-label">{label}</div>
              </div>
            ))}
            <div className="stat-item">
              <div className="stat-number stat-number-static">24/7</div>
              <div className="stat-label">Support Available</div>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="cta-content">
            <h2>Ready to Transform Your Career?</h2>
            <p>
              Join thousands of professionals who have already elevated their skills and secured their dream
              positions in the tech industry.
            </p>
            <div className="hero-cta-group">
              <a href="/login" className="btn btn-primary" onClick={(event) => {
                event.preventDefault();
                window.history.pushState({}, "", "/login");
                window.dispatchEvent(new PopStateEvent("popstate"));
              }}>
                <i className="fas fa-rocket" />
                Get Started Today
              </a>
              <a href="/contact" className="btn btn-secondary" onClick={(event) => {
                event.preventDefault();
                window.history.pushState({}, "", "/contact");
                window.dispatchEvent(new PopStateEvent("popstate"));
              }}>
                <i className="fas fa-comments" />
                Talk to Our Team
              </a>
            </div>
          </div>
        </section>
      </main>
  );
}

function CoursesPage() {
  const [apiCourses, setApiCourses] = useState(courses);

  useEffect(() => {
    apiRequest("/api/courses")
      .then((data) => {
        if (Array.isArray(data.courses)) {
          setApiCourses(
            data.courses.map((course) => ({
              title: course.title,
              image: course.image,
              pdf: course.pdf,
              text: course.description,
            }))
          );
        }
      })
      .catch(() => {
        setApiCourses(courses);
      });
  }, []);

  return (
    <main className="page-shell">
      <section className="courses page-section" id="courses">
        <div className="section-header">
          <div className="section-badge">Courses</div>
          <h1 className="section-title">Professional Training Courses</h1>
          <p className="section-description">
            Browse the same course catalog in a React-only page. Course PDFs remain static assets and can later become database-backed records.
          </p>
        </div>
        <div className="courses-grid">
          {apiCourses.map((course) => (
            <article className="course-card fade-in-up" key={course.title}>
              <div className="course-image">
                <img src={course.image} alt={course.title} loading="lazy" />
              </div>
              <div className="course-body">
                <h3>{course.title}</h3>
                <p>{course.text}</p>
                <a href={course.pdf} className="course-action">
                  View Details
                  <i className="fas fa-arrow-right" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

function AboutPage() {
  return (
    <main className="page-shell">
      <section className="page-section">
        <div className="section-header">
          <div className="section-badge">About ProWorldz</div>
          <h1 className="section-title">Technology training built for practical growth</h1>
          <p className="section-description">
            ProWorldz helps learners build career-ready skills in cybersecurity, AI, software engineering, systems, design, and startup building.
          </p>
        </div>
        <div className="features-grid">
          {[
            ["fa-terminal", "Practical Labs", "Hands-on exercises, real tools, and project-based learning across every course."],
            ["fa-user-shield", "Security Mindset", "Cybersecurity and secure development principles are woven into the platform."],
            ["fa-chart-line", "Career Focus", "Programs are structured around portfolios, confidence, and industry-ready outcomes."],
          ].map(([icon, title, text]) => (
            <article className="feature-card fade-in-up" key={title}>
              <div className="feature-icon">
                <i className={`fas ${icon}`} />
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

function ContactPage() {
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitContact = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus("");
    const formData = new FormData(event.currentTarget);

    try {
      await apiRequest("/api/contact", {
        method: "POST",
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
        }),
      });
      event.currentTarget.reset();
      setStatus("Message sent successfully.");
    } catch (error) {
      setStatus(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="page-shell">
      <section className="page-section split-page">
        <div>
          <div className="section-badge">Contact</div>
          <h1 className="section-title">Talk to Our Team</h1>
          <p className="section-description left-text">
            Send a message about courses, labs, mentoring, or partnerships. This React form is ready to connect to an Express API endpoint.
          </p>
          <div className="contact-list">
            <span><i className="fas fa-envelope" /> support@proworldz.com</span>
            <span><i className="fas fa-clock" /> 24/7 learner support</span>
            <span><i className="fas fa-location-dot" /> India</span>
          </div>
        </div>
        <form className="app-form" onSubmit={submitContact}>
          <label>
            Name
            <input name="name" type="text" placeholder="Your name" required />
          </label>
          <label>
            Email
            <input name="email" type="email" placeholder="you@example.com" required />
          </label>
          <label>
            Message
            <textarea name="message" rows="5" placeholder="How can we help?" required />
          </label>
          <button className="btn btn-primary" type="submit" disabled={isSubmitting}>
            <i className="fas fa-paper-plane" />
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
          {status && <p className="form-status">{status}</p>}
        </form>
      </section>
    </main>
  );
}

function LoginPage({ navigate, setCurrentUser }) {
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitLogin = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus("");
    const formData = new FormData(event.currentTarget);

    try {
      const data = await apiRequest("/api/auth/login", {
        method: "POST",
        body: JSON.stringify({
          email: formData.get("email"),
          password: formData.get("password"),
        }),
      });
      localStorage.setItem("secureworldz_token", data.token);
      localStorage.setItem("secureworldz_user", JSON.stringify(data.user));
      setCurrentUser(data.user);
      const nextRoute = data.user.role === "admin" ? "/admin" : "/dashboard";
      window.history.pushState({}, "", nextRoute);
      window.dispatchEvent(new PopStateEvent("popstate"));
    } catch (error) {
      setStatus(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="page-shell auth-page">
      <form className="app-form auth-form" onSubmit={submitLogin}>
        <div className="section-badge">Login</div>
        <h1>Welcome Back</h1>
        <label>
          Email
          <input name="email" type="email" placeholder="you@example.com" required />
        </label>
        <label>
          Password
          <input name="password" type="password" placeholder="Password" required />
        </label>
        <button className="btn btn-primary" type="submit" disabled={isSubmitting}>
          <i className="fas fa-sign-in-alt" />
          {isSubmitting ? "Logging in..." : "Login"}
        </button>
        {status && <p className="form-status">{status}</p>}
        <p>
          New here? <a href="/signup" onClick={(event) => navigate(event, "/signup")}>Create an account</a>
        </p>
      </form>
    </main>
  );
}

function SignupPage({ navigate, setCurrentUser }) {
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitSignup = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus("");
    const formData = new FormData(event.currentTarget);

    try {
      const data = await apiRequest("/api/auth/signup", {
        method: "POST",
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          password: formData.get("password"),
        }),
      });
      localStorage.setItem("secureworldz_token", data.token);
      localStorage.setItem("secureworldz_user", JSON.stringify(data.user));
      setCurrentUser(data.user);
      const nextRoute = data.user.role === "admin" ? "/admin" : "/dashboard";
      window.history.pushState({}, "", nextRoute);
      window.dispatchEvent(new PopStateEvent("popstate"));
    } catch (error) {
      setStatus(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="page-shell auth-page">
      <form className="app-form auth-form" onSubmit={submitSignup}>
        <div className="section-badge">Signup</div>
        <h1>Create Account</h1>
        <label>
          Full name
          <input name="name" type="text" placeholder="Your name" required />
        </label>
        <label>
          Email
          <input name="email" type="email" placeholder="you@example.com" required />
        </label>
        <label>
          Password
          <input name="password" type="password" placeholder="Create a password" minLength="8" required />
        </label>
        <button className="btn btn-primary" type="submit" disabled={isSubmitting}>
          <i className="fas fa-user-plus" />
          {isSubmitting ? "Creating..." : "Signup"}
        </button>
        {status && <p className="form-status">{status}</p>}
        <p>
          Already registered? <a href="/login" onClick={(event) => navigate(event, "/login")}>Login</a>
        </p>
      </form>
    </main>
  );
}

function WorkspacePage({ route, navigate, currentUser, setCurrentUser }) {
  const page = route.replace("/", "") || "dashboard";
  const title = page === "admin" ? "Admin Control" : page.charAt(0).toUpperCase() + page.slice(1);
  const isAdminRoute = route === "/admin";
  const isAdmin = currentUser?.role === "admin";
  const [workspaceData, setWorkspaceData] = useState(fallbackWorkspaceData);
  const [workspaceStatus, setWorkspaceStatus] = useState("");
  const menuItems = [
    ["Dashboard", "/dashboard", "fa-table-columns"],
    ["Admin", "/admin", "fa-user-shield"],
    ["Tasks", "/tasks", "fa-list-check"],
    ["Teams", "/teams", "fa-people-group"],
    ["Leaderboard", "/leaderboard", "fa-trophy"],
    ["Lab", "/lab", "fa-terminal"],
    ["Shop", "/shop", "fa-store"],
    ["Profile", "/profile", "fa-user"],
    ["Settings", "/settings", "fa-gear"],
  ];

  const logout = () => {
    localStorage.removeItem("secureworldz_token");
    localStorage.removeItem("secureworldz_user");
    setCurrentUser(null);
    window.history.pushState({}, "", "/login");
    window.dispatchEvent(new PopStateEvent("popstate"));
  };

  useEffect(() => {
    let ignore = false;

    if (!currentUser) {
      setWorkspaceData(fallbackWorkspaceData);
      return undefined;
    }

    const loadWorkspace = async () => {
      try {
        const query = currentUser.email ? `?email=${encodeURIComponent(currentUser.email)}` : "";
        const data = await apiRequest(`/api/workspace${query}`);
        if (!ignore) {
          setWorkspaceData(data);
          setWorkspaceStatus("");
        }
      } catch (error) {
        if (!ignore) {
          setWorkspaceStatus(error.message);
          setWorkspaceData(fallbackWorkspaceData);
        }
      }
    };

    loadWorkspace();
    return () => {
      ignore = true;
    };
  }, [currentUser]);

  if (!currentUser) {
    return (
      <main className="page-shell auth-page">
        <section className="app-form auth-form">
          <div className="section-badge">Login Required</div>
          <h1>Access Workspace</h1>
          <p className="form-status">Please login before opening this page.</p>
          <a className="btn btn-primary" href="/login" onClick={(event) => navigate(event, "/login")}>
            <i className="fas fa-sign-in-alt" />
            Login
          </a>
        </section>
      </main>
    );
  }

  if (isAdminRoute && !isAdmin) {
    return (
      <main className="page-shell auth-page">
        <section className="app-form auth-form">
          <div className="section-badge">Admin Only</div>
          <h1>Restricted Page</h1>
          <p className="form-status">Your account does not have admin access.</p>
          <a className="btn btn-primary" href="/dashboard" onClick={(event) => navigate(event, "/dashboard")}>
            <i className="fas fa-table-columns" />
            Go to Dashboard
          </a>
        </section>
      </main>
    );
  }

  return (
    <main className="workspace">
      <aside className="workspace-sidebar">
        <a className="workspace-brand" href="/dashboard" onClick={(event) => navigate(event, "/dashboard")}>
          <img src="images/eaglone/p-eaglone.png" alt="ProWorldz" />
          <span>PRO<span>WORLDZ</span></span>
        </a>
        <nav className="workspace-menu">
          {menuItems.map(([label, href, icon]) => (
            <a
              key={href}
              href={href}
              className={route === href ? "active" : ""}
              onClick={(event) => navigate(event, href)}
            >
              <i className={`fas ${icon}`} />
              <span>{label}</span>
            </a>
          ))}
        </nav>
      </aside>

      <section className="workspace-main">
        <header className="workspace-topbar">
          <div>
            <p>{page === "admin" ? "Platform management" : "Learning workspace"}</p>
            <h1>{title}</h1>
          </div>
          <label className="workspace-search">
            <i className="fas fa-search" />
            <input placeholder="Search" />
          </label>
          <div className="workspace-profile">
            <div>
              <strong>{currentUser.name}</strong>
              <span>{currentUser.role}</span>
            </div>
            <img src="images/eaglone/p-eaglone.png" alt="Admin avatar" />
          </div>
          <button className="workspace-logout" type="button" onClick={logout}>
            <i className="fas fa-right-from-bracket" />
          </button>
        </header>

        {workspaceStatus && <p className="form-status">{workspaceStatus}</p>}
        {page === "admin" && <AdminPanel workspaceData={workspaceData} />}
        {page === "dashboard" && <DashboardPanel workspaceData={workspaceData} />}
        {page === "tasks" && (
          <TablePanel
            title="Task Center"
            rows={workspaceData.tasks.map((task) => [task.id, task.title, `${task.count} tasks`, task.status])}
            headers={["Set", "First Task", "Count", "Status"]}
          />
        )}
        {page === "teams" && (
          <TablePanel
            title="Teams"
            rows={workspaceData.teams.map((team) => [team.name, `${team.size} members`, team.focus])}
            headers={["Team", "Size", "Focus"]}
          />
        )}
        {page === "leaderboard" && (
          <TablePanel
            title="Leaderboard"
            rows={workspaceData.students.slice(0, 10).map((student) => [
              student.name,
              String(student.eagleCoins ?? 0),
              student.course || "Unassigned",
            ])}
            headers={["Learner", "Eagle Coins", "Track"]}
          />
        )}
        {page === "lab" && <LabPanel />}
        {page === "shop" && <ShopPanel />}
        {page === "profile" && <ProfilePanel currentUser={currentUser} student={workspaceData.currentStudent} />}
        {page === "settings" && <SettingsPanel />}
      </section>
    </main>
  );
}

function DashboardPanel({ workspaceData }) {
  const activeCourses = workspaceData.students
    .map((student) => student.course)
    .filter(Boolean)
    .filter((course, index, all) => all.indexOf(course) === index);

  return (
    <>
      <section className="workspace-welcome">
        <span>Welcome back</span>
        <h2>Continue building advanced technology skills.</h2>
        <p>Your courses, labs, tasks, teams, and rankings live in one React workspace.</p>
      </section>
      <MetricGrid stats={workspaceData.stats} />
      <section className="workspace-grid two">
        <Panel title="Active Courses">
          <div className="mini-course-list">
            {courses.filter((course) => activeCourses.includes(course.title)).slice(0, 5).map((course) => (
              <article key={course.title}>
                <img src={course.image} alt="" />
                <div>
                  <strong>{course.title}</strong>
                  <span>{course.text.slice(0, 72)}...</span>
                </div>
              </article>
            ))}
          </div>
        </Panel>
        <TablePanel
          title="Recent Tasks"
          rows={workspaceData.tasks.slice(0, 3).map((task) => [task.id, task.title, task.status])}
          headers={["Set", "First Task", "Status"]}
          compact
        />
      </section>
    </>
  );
}

function AdminPanel({ workspaceData }) {
  return (
    <>
      <section className="workspace-welcome admin">
        <span>Admin panel</span>
        <h2>Manage learners, courses, teams, tasks, and platform activity.</h2>
        <p>Use this React admin workspace to control the platform experience.</p>
      </section>
      <MetricGrid stats={workspaceData.stats} />
      <section className="workspace-grid three">
        {[
          ["Students", `${workspaceData.students.length} imported learner records`],
          ["Courses", "Imported course enrollment totals"],
          ["Tasks", `${workspaceData.tasks.length} challenge sets from tasksdb`],
          ["Teams", `${workspaceData.teams.length} imported team records`],
          ["Lab Modules", "React lab modules are ready"],
          ["Reports", "Assignment progress and coins"],
        ].map(([item, description], index) => (
          <article className="admin-action-card" key={item}>
            <i className={`fas ${["fa-users", "fa-book-open", "fa-credit-card", "fa-bell", "fa-flask", "fa-chart-pie"][index]}`} />
            <h3>{item}</h3>
            <p>{description}</p>
          </article>
        ))}
      </section>
    </>
  );
}

function MetricGrid({ stats }) {
  return (
    <section className="workspace-metrics">
      {stats.map(([value, label, icon]) => (
        <article key={label}>
          <i className={`fas ${icon}`} />
          <strong>{value}</strong>
          <span>{label}</span>
        </article>
      ))}
    </section>
  );
}

function Panel({ title, children }) {
  return (
    <section className="workspace-panel">
      <h2>{title}</h2>
      {children}
    </section>
  );
}

function TablePanel({ title, rows, headers, compact = false }) {
  return (
    <Panel title={title}>
      <div className={`workspace-table${compact ? " compact" : ""}`}>
        <div className="workspace-table-head" style={{ gridTemplateColumns: `repeat(${headers.length}, minmax(0, 1fr))` }}>
          {headers.map((header) => <span key={header}>{header}</span>)}
        </div>
        {rows.map((row) => (
          <div className="workspace-table-row" style={{ gridTemplateColumns: `repeat(${headers.length}, minmax(0, 1fr))` }} key={row.join("-")}>
            {row.map((cell, index) => <span key={`${cell}-${index}`}>{cell}</span>)}
          </div>
        ))}
      </div>
    </Panel>
  );
}

function LabPanel() {
  return (
    <section className="workspace-grid three">
      {["Linux Terminal", "Python Lab", "Coding Validator", "OWASP Practice", "Mentor Mode", "Secure Console"].map((item, index) => (
        <article className="admin-action-card" key={item}>
          <i className={`fas ${["fa-terminal", "fa-code", "fa-check-double", "fa-shield-halved", "fa-user-graduate", "fa-lock"][index]}`} />
          <h3>{item}</h3>
          <p>Open a React-based lab module designed for hands-on practice.</p>
        </article>
      ))}
    </section>
  );
}

function ShopPanel() {
  const products = ["Eaglone X", "Cyber Eaglone", "Code Eaglone", "Byte Hawk", "Securewing X", "Vortex X"];
  return (
    <section className="workspace-grid three">
      {products.map((product) => (
        <article className="shop-card" key={product}>
          <img src={`eagleshop/${product}.png`} alt={product} />
          <h3>{product}</h3>
          <button type="button">View Item</button>
        </article>
      ))}
    </section>
  );
}

function ProfilePanel({ currentUser, student }) {
  return (
    <Panel title="Profile">
      <form className="workspace-form">
        <label>Name<input defaultValue={student?.name || currentUser.name} /></label>
        <label>Email<input defaultValue={student?.email || currentUser.email} /></label>
        <label>Role<input defaultValue={currentUser.role} /></label>
        <label>Course<input defaultValue={student?.course || "Not assigned"} /></label>
        <label>Eagle Coins<input defaultValue={String(student?.eagleCoins ?? 0)} /></label>
        <button type="button">Save Profile</button>
      </form>
    </Panel>
  );
}

function SettingsPanel() {
  return (
    <Panel title="Settings">
      <form className="workspace-form">
        <label>Platform Name<input defaultValue="ProWorldz" /></label>
        <label>Support Email<input defaultValue="support@proworldz.com" /></label>
        <label>API URL<input defaultValue={apiBaseUrl} /></label>
        <button type="button">Save Settings</button>
      </form>
    </Panel>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-bottom">
          <p>&copy; 2026 ProWorldz. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
}

export default App;
