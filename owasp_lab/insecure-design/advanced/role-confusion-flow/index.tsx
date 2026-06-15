import React from 'react';

export default function Component() {
  return (
    <>
{/* DOCTYPE removed */}
<div className="html-wrapper">
<div className="head-wrapper">
    <meta charSet="UTF-8" />
    <title>Nexora | Account Management</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />
    <style dangerouslySetInnerHTML={{ __html: `body { background: #f4f6f8; font-family: 'Inter', sans-serif; }` }} />
</div>
<div className="body-wrapper">
    <div className="container" style={{ maxWidth: '800px' }}>
        {/* PHP echo removed */}
        <div className="row g-4">
             <div className="col-md-6">
                <div className="card p-4 border-0 shadow-sm rounded-4 h-100">
                    <h6 className="fw-bold small opacity-50 mb-3">SYSTEM STATUS</h6>
                    <p className="mb-0 small">Authorization Module: <b>Active</b></p>
                    <p className="mb-0 small">Hybrid Role Engine: <span className="text-success fw-bold">v3.4-PRO</span></p>
                </div>
             </div>
             <div className="col-md-6">
                <div className="card p-4 border-0 shadow-sm rounded-4 h-100">
                    <h6 className="fw-bold small opacity-50 mb-3">USER CONTEXT</h6>
                    <p className="mb-0 small">Current Identity: <code>{/* PHP echo removed */}</code></p>
                    <p className="mb-0 small">Active Role: <span className="badge bg-dark">{/* PHP echo removed */}</span></p>
                </div>
             </div>
        </div>
    </div>
</div>
</div>

    </>
  );
}
