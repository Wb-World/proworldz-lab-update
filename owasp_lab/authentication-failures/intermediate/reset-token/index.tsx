import React from 'react';

export default function Component() {
  return (
    <>
{/* DOCTYPE removed */}
<div className="html-wrapper">
<div className="head-wrapper">
    <meta charSet="UTF-8" />
    <title>Nexora IAM | Recovery</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />
    <style dangerouslySetInnerHTML={{ __html: `body { background: #fdfdfd; font-family: 'Segoe UI', sans-serif; }` }} />
</div>
<div className="body-wrapper">
    <div className="container" style={{ maxWidth: '600px' }}>
        <div className="card border-0 shadow-sm p-5 rounded-5 bg-white">
            <h3 className="fw-bold mb-4">Enterprise Account Recovery</h3>
            
            {/* PHP code removed */}
                <div className="alert alert-dark p-4 rounded-4 font-monospace small">{/* PHP echo removed */}</div>
                <a href="index" className="btn btn-link">Back to Recovery Home</a>
            {/* PHP code removed */}
                {/* PHP code removed */}<div className="alert alert-success small">{/* PHP echo removed */}</div>{/* PHP code removed */}
                <form method="POST">
                    <label className="x-small fw-bold opacity-50 mb-2">CORPORATE EMAIL ADDRESS</label>
                    <input type="email" name="email" className="form-control mb-4" placeholder="user@nexora.internal" required />
                    <button className="btn btn-info text-white w-100 py-2 fw-bold">Request Access Reset</button>
                </form>
                <div className="mt-4 p-3 bg-light rounded text-center x-small text-muted border border-dashed">
                    Note: Tokens are cryptographically tied to your identity and timestamp (v8.1).
                </div>
            {/* PHP code removed */}
        </div>
    </div>
</div>
</div>

    </>
  );
}
