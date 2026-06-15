import React from 'react';

export default function Component() {
  return (
    <>
{/* DOCTYPE removed */}
<div className="html-wrapper">
<div className="head-wrapper">
    <meta charSet="UTF-8" />
    <title>Nexora | Identity Gateway</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />
    <style dangerouslySetInnerHTML={{ __html: `
        body { background: #f8fafc; font-family: 'Inter', sans-serif; }
        .login-card { max-width: 400px; margin: 100px auto; border: none; border-radius: 12px; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1); }
    ` }} />
</div>
<div className="body-wrapper">
    <div className="card login-card">
        <div className="card-body p-4 text-center">
            <h4 className="fw-bold mb-4">Identity Access</h4>
            {/* PHP code removed */}<div className="alert alert-danger small">{/* PHP echo removed */}</div>{/* PHP code removed */}
            <form method="POST">
                <input type="text" name="username" className="form-control mb-3" placeholder="Administrator ID" required />
                <input type="password" name="password" className="form-control mb-4" placeholder="Master Password" required />
                <button className="btn btn-dark w-100 py-2">Decrypt & Authorize</button>
            </form>
            <p className="mt-4 text-muted x-small opacity-50">Authorized by Nexora Crypcore v2.1</p>
        </div>
    </div>
</div>
</div>

    </>
  );
}
