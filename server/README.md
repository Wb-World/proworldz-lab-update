# SecureWorldz API

Node.js + Express backend for the React app.

## Setup

1. Create a PostgreSQL database named `secureworldz`.
2. Copy `.env.example` to `.env` and update `DATABASE_URL`.
3. Run the schema in PostgreSQL:

```sql
\i server/db/schema.sql
\i server/db/import_if0_students.sql
```

4. Start the API:

```bash
npm run api
```

The API runs on `http://127.0.0.1:4000` by default.

## Routes

- `GET /api/health`
- `GET /api/courses`
- `GET /api/workspace`
- `POST /api/contact`
- `POST /api/auth/signup`
- `POST /api/auth/login`
