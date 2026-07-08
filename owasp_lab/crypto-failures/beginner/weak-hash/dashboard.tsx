import React from 'react';

export default function Component() {
  return (
    <>
{/* DOCTYPE removed */}
<div className="html-wrapper">
<div className="head-wrapper">
    <meta charSet="UTF-8" />
    <title>Nexora | Dashboard</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />
</div>
<div className="body-wrapper">
    <div className="container">
        <div className="alert alert-success border-0 shadow-sm p-4 rounded-4">
            <h5 className="fw-bold"><i className="bi bi-shield-check"></i> Welcome, {/* PHP echo removed */}</h5>
            <p className="mb-0">Your identity has been verified via Nexora Secure Hashing.</p>
        </div>
        
        <div className="card border-0 shadow mt-4">
            <div className="card-body">
                <h6 className="fw-bold text-muted small mb-3">SYSTEM FLAG [ENCRYPTED]</h6>
                <div className="bg-light p-3 rounded font-monospace">
                    FLAG{a04_weak_hash_01}
                </div>
            </div>
        </div>
        <a href="logout" className="btn btn-link mt-4 text-muted small">Terminate Session</a>
    </div>
</div>
</div>

    </>
  );
}
