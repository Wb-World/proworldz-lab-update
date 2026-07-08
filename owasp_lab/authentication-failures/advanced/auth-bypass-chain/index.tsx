import React from 'react';

export default function Component() {
  return (
    <>
{/* DOCTYPE removed */}
<div className="html-wrapper">
<div className="head-wrapper">
    <meta charSet="UTF-8" />
    <title>Nexora IAM | Chain Auth</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />
    <style dangerouslySetInnerHTML={{ __html: `body { background: #fdfdfd; font-family: 'Inter', sans-serif; }` }} />
</div>
<div className="body-wrapper">
    <div className="container" style={{ maxWidth: '600px' }}>
        <div className="card border-0 shadow-lg p-5 rounded-5 bg-white">
            <h3 className="fw-bold mb-4">Advanced Infrastructure Logic</h3>
            {/* PHP code removed */}<div className="alert alert-danger small">{/* PHP echo removed */}</div>{/* PHP code removed */}
            
            {/* PHP code removed */}
                <form method="POST">
                    <label className="x-small fw-bold opacity-50 mb-1">GLOBAL_UID</label>
                    <input type="text" name="user" className="form-control mb-3" placeholder="rootadmin" required />
                    <label className="x-small fw-bold opacity-50 mb-1">SECURITY_KEY</label>
                    <input type="password" name="pass" className="form-control mb-4" placeholder="••••••••" required />
                    <button className="btn btn-dark w-100 py-3 fw-bold">Proceed to Layer 2</button>
                </form>
            {/* PHP code removed */}
                <form method="POST">
                    <div className="text-center mb-4">
                        <h5 className="fw-bold mt-2">Secondary MFA Protocol</h5>
                        <p className="text-muted small">Enter the 4-digit security PIN for <b>{/* PHP echo removed */}</b></p>
                    </div>
                    <input type="text" name="pin" className="form-control mb-4 text-center fs-2 fw-bold" placeholder="0000" maxLength="4" required />
                    <button className="btn btn-primary w-100 py-3 fw-bold">Verify Identity Core</button>
                </form>
            {/* PHP code removed */}
                <div className="alert alert-success p-4 border-0 shadow-sm rounded-4 text-center">
                    <h4 className="fw-bold">Root Authentication Successful</h4>
                    <p className="small opacity-75">Global Infrastructure Flag Access Granted:</p>
                    <div className="bg-white p-3 rounded border fw-bold text-danger">{/* PHP echo removed */}</div>
                </div>
                <a href="?step=1" className="btn btn-link w-100 mt-4 text-muted small">Invalidate Local Auth</a>
                {/* PHP code removed */}
            {/* PHP code removed */}
        </div>
    </div>
</div>
</div>

    </>
  );
}
