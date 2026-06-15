import React from 'react';

export default function Component() {
  return (
    <>
{/* DOCTYPE removed */}
<div className="html-wrapper">
<div className="head-wrapper">
    <meta charSet="UTF-8" />
    <title>Nexora | Task Logging</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />
    <style dangerouslySetInnerHTML={{ __html: `body { background: #f1f5f9; font-family: 'Segoe UI', serif; }` }} />
</div>
<div className="body-wrapper">
    <div className="container" style={{ maxWidth: '650px' }}>
        <div className="card border-0 shadow-sm p-4 rounded-4 mb-4">
            <h4 className="fw-bold mb-3 text-center">Development Task Runner</h4>
            <p className="text-muted small text-center mb-4">Select a system task to execute within the Nexora environment.</p>
            
            <div className="d-flex gap-2 justify-content-center mb-4">
                <a href="?task=SYNC_DATA" className="btn btn-dark btn-sm px-4">Sync Data</a>
                <a href="?task=RELOAD_NODES" className="btn btn-dark btn-sm px-4">Reload Nodes</a>
                <a href="?task=GET_SECRET_KEY" className="btn btn-primary btn-sm px-4 fw-bold">Reveal Secret</a>
            </div>

            {/* PHP code removed */}<div className="alert alert-info py-2 small text-center">{/* PHP echo removed */}</div>{/* PHP code removed */}
        </div>

        <div className="card border-0 shadow-sm rounded-4 overflow-hidden">
            <div className="bg-dark text-success p-3 small font-monospace" style={{ height: '200px', overflowY: 'auto' }}>
                <div className="opacity-50 mb-2 border-bottom border-secondary pb-1">[SYSTEM_ACTIVITY_LOG]</div>
                {/* PHP echo removed */}
                {/* PHP code removed */}
                    <div className="text-warning fw-bold mt-2"> UNAUTHORIZED_REVEAL: FLAG{a09_weak_logging_02}</div>
                {/* PHP code removed */}
            </div>
        </div>

        <p className="mt-4 text-center x-small text-muted opacity-50">Note: All tasks are logged for non-repudiation purposes.</p>
    </div>
</div>
</div>

    </>
  );
}
