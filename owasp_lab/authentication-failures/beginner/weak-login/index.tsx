import React from 'react';

export default function Component() {
  return (
    <>
{/* DOCTYPE removed */}
<div className="html-wrapper">
<div className="head-wrapper">
    <meta charSet="UTF-8" />
    <title>Nexora IAM | Access</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />
    <style dangerouslySetInnerHTML={{ __html: `
        body { background: #0f172a; color: #f8fafc; font-family: 'Inter', sans-serif; }
        .login-card { background: #1e293b; border: 1px solid #334155; max-width: 450px; margin: 100px auto; }
    ` }} />
</div>
<div className="body-wrapper">
    <div className="card login-card p-5 rounded-5 shadow-2xl">
        <h3 className="fw-bold mb-4 text-center">Identity Portal</h3>
        {/* PHP code removed */}<div className="alert alert-danger font-monospace small">{/* PHP echo removed */}</div>{/* PHP code removed */}
        <form method="POST">
            <div className="mb-3">
                <label className="x-small fw-bold opacity-50">ENT_ID</label>
                <input type="text" name="username" className="form-control bg-dark border-secondary text-white" placeholder="admin" required />
            </div>
            <div className="mb-4">
                <label className="x-small fw-bold opacity-50">SECURITY_KEY</label>
                <input type="password" name="password" className="form-control bg-dark border-secondary text-white" placeholder="••••••••" required />
            </div>
            <button className="btn btn-primary w-100 py-3 fw-bold">Authenticate Session</button>
        </form>
        <div className="mt-4 text-center x-small text-muted opacity-30">
            Internal Note: Session protected by Nexora Zero-Trust v1.4
        </div>
    </div>
</div>
</div>

    </>
  );
}
