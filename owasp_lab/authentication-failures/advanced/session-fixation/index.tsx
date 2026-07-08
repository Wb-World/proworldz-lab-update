import React from 'react';

export default function Component() {
  return (
    <>
{/* DOCTYPE removed */}
<div className="html-wrapper">
<div className="head-wrapper">
    <meta charSet="UTF-8" />
    <title>Nexora IAM | Fixation Portal</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />
    <style dangerouslySetInnerHTML={{ __html: `body { background: #0b0e14; color: #94a3b8; font-family: 'Inter', sans-serif; }` }} />
</div>
<div className="body-wrapper">
    <div className="container" style={{ maxWidth: '500px' }}>
        {/* PHP code removed */}
            <div className="card border-0 shadow-lg p-5 bg-dark text-white rounded-5">
                <h4 className="fw-bold mb-4">Authorized: {/* PHP echo removed */}</h4>
                <div className="bg-success bg-opacity-10 p-3 rounded text-info small mb-4">
                    VAULT_DATA: {/* PHP echo removed */}
                </div>
                <a href="?logout=1" className="btn btn-outline-danger btn-sm">Discard Identity</a>
            </div>
            {/* PHP code removed */}
        {/* PHP code removed */}
            <div className="card border-0 shadow p-5 rounded-5 bg-white text-dark">
                <h4 className="fw-bold mb-4 text-center">Infrastructure Login</h4>
                {/* PHP code removed */}<div className="alert alert-danger small">{/* PHP echo removed */}</div>{/* PHP code removed */}
                <form method="POST">
                    <input type="text" name="u" className="form-control mb-3" placeholder="Director ID" required />
                    <input type="password" name="p" className="form-control mb-4" placeholder="Security Key" required />
                    <button className="btn btn-dark w-100 py-3 fw-bold">Login to IAM Node</button>
                </form>
                <div className="mt-4 text-center x-small text-muted opacity-50">
                    URL Tracking ID: <code>{/* PHP echo removed */}</code>
                </div>
            </div>
        {/* PHP code removed */}
    </div>
</div>
</div>

    </>
  );
}
