import React from 'react';

export default function Component() {
  return (
    <>
{/* DOCTYPE removed */}
<div className="html-wrapper">
<div className="head-wrapper">
    <meta charSet="UTF-8" />
    <title>Nexora | Signature Verify</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />
</div>
<div className="body-wrapper">
    <div className="container" style={{ maxWidth: '650px' }}>
        <h2 className="fw-bold mb-4 text-white">Digital Signature Validator</h2>
        
        <div className="card p-4 rounded-4 border-0 shadow-lg">
            <h6 className="text-muted fw-bold small mb-4">API STATUS</h6>
            <div className="alert {/* PHP echo removed */} p-4 text-center">
                <span className="fs-4 fw-bold">{/* PHP echo removed */}</span>
            </div>
            
            <hr className="my-4 opacity-10" />
            
            <h6 className="fw-bold mb-3 small">Generate Signature (Developer Console)</h6>
            <form method="GET">
                <div className="mb-3">
                    <label className="x-small fw-bold">Identity Name</label>
                    <input type="text" name="user" className="form-control" value="{/* PHP echo removed */}&sig={/* PHP echo removed */}" />Sign '{/* PHP echo removed */}'</a>
                </div>
            {/* PHP code removed */}
        </div>
    </div>
</div>
</div>

    </>
  );
}
