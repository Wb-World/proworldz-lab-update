import React from 'react';

export default function Component() {
  return (
    <>
{/* DOCTYPE removed */}
<div className="html-wrapper">
<div className="head-wrapper">
    <meta charSet="UTF-8" />
    <title>Nexora IAM | Sessions</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />
    <style dangerouslySetInnerHTML={{ __html: `body { background: #f8fafc; font-family: 'Inter', sans-serif; }` }} />
</div>
<div className="body-wrapper">
    <div className="container">
        {/* PHP code removed */}
            <div className="card border-0 shadow-lg p-5 rounded-5 bg-dark text-white">
                <h2 className="fw-bold mb-4">Enterprise Profile: {/* PHP echo removed */}</h2>
                <div className="alert alert-info py-2">Session ID: <code>{/* PHP echo removed */}</code></div>
                <p>System Flag: <span className="text-warning fw-bold">{/* PHP echo removed */}</span></p>
                <a href="logout" className="btn btn-outline-light btn-sm mt-4">Invalidate Access</a>
            </div>
        {/* PHP code removed */}
            <div className="card border-0 shadow p-5 rounded-5 mt-5" style={{ maxWidth: '450px', margin: 'auto' }}>
                <h4 className="fw-bold mb-4">IAM Node Login</h4>
                <form method="POST">
                    <input type="text" name="u" className="form-control mb-3" placeholder="Username (try guest_acc)" required />
                    <input type="password" name="p" className="form-control mb-4" placeholder="Password" required />
                    <button className="btn btn-primary w-100 py-3 fw-bold">Initialize Identity</button>
                </form>
            </div>
        {/* PHP code removed */}
    </div>
</div>
</div>

    </>
  );
}
