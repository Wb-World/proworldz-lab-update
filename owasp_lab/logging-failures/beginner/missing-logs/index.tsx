import React from 'react';

export default function Component() {
  return (
    <>
{/* DOCTYPE removed */}
<div className="html-wrapper">
<div className="head-wrapper">
    <meta charSet="UTF-8" />
    <title>Nexora | Audit Events</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />
    <style dangerouslySetInnerHTML={{ __html: `
        body { background: #f8fafc; font-family: 'Inter', sans-serif; }
        .log-viewer { background: #1e293b; color: #94a3b8; font-family: 'Consolas', monospace; height: 350px; overflow-y: auto; padding: 20px; border-radius: 12px; }
    ` }} />
</div>
<div className="body-wrapper">
    <div className="container" style={{ maxWidth: '800px' }}>
        <h2 className="fw-bold mb-4">Security Event Collector</h2>
        
        {/* PHP code removed */}
            <div className="alert alert-success border-0 shadow-sm p-4 rounded-4 mb-4">
                <h5 className="fw-bold text-dark">ADMINISTRATIVE ACCESS GRANTED</h5>
                <p className="mb-0 small text-muted">You have reached the unrestricted audit core.</p>
                <hr />
                <div className="fw-bold text-danger">SYSTEM_FLAG: FLAG{a09_missing_logs_01}</div>
            </div>
        {/* PHP code removed */}

        <div className="card border-0 shadow-sm p-4 rounded-4 mb-4">
            <h6 className="text-muted small fw-bold mb-3">CONSOLIDATED AUDIT TRAIL</h6>
            <div className="log-viewer mb-4">
                {/* PHP code removed */}
                    <div className="mb-1 small"> {/* PHP echo removed */}</div>
                {/* PHP code removed */}
            </div>
            
            <div className="d-flex justify-content-between align-items-center">
                <span className="x-small text-muted italic">Total events captured: {/* PHP echo removed */}</span>
                <a href="?action=escalate" className="btn btn-outline-dark btn-sm">Request Root Elevation</a>
            </div>
        </div>

        <div className="mt-5 text-center x-small text-muted opacity-50">
            Audit logging powered by Nexora LogStream v8.2.3
        </div>
    </div>
</div>
</div>

    </>
  );
}
