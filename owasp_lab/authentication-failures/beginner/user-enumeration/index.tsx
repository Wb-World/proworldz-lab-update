import React from 'react';

export default function Component() {
  return (
    <>
{/* DOCTYPE removed */}
<div className="html-wrapper">
<div className="head-wrapper">
    <meta charSet="UTF-8" />
    <title>Nexora IAM | Identity Lookup</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />
    <style dangerouslySetInnerHTML={{ __html: `body { background: #f0f2f5; font-family: 'Segoe UI', sans-serif; }` }} />
</div>
<div className="body-wrapper">
    <div className="container" style={{ maxWidth: '500px' }}>
        <div className="card border-0 shadow-sm p-4 rounded-4 mb-4">
            <h5 className="fw-bold mb-4">Identity Verification Gateway</h5>
            {/* PHP code removed */}<div className="alert {/* PHP echo removed */} small font-monospace">{/* PHP echo removed */}</div>{/* PHP code removed */}
            <form method="POST">
                <input type="text" name="user_id" className="form-control mb-3" placeholder="Employee ID (e.g. jdoe_66)" required />
                <input type="password" name="pass" className="form-control mb-4" placeholder="Corporate Password" required />
                <button className="btn btn-dark w-100 py-2">Query Vault</button>
            </form>
        </div>
        <p className="text-center x-small text-muted opacity-50">Information Disclosure Policy: All login attempts are audited for metadata intelligence.</p>
    </div>
</div>
</div>

    </>
  );
}
