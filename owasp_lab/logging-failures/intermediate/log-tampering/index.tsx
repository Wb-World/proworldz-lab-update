import React from 'react';

export default function Component() {
  return (
    <>
{/* DOCTYPE removed */}
<div className="html-wrapper">
<div className="head-wrapper">
    <meta charSet="UTF-8" />
    <title>Nexora | External Collector</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />
    <style dangerouslySetInnerHTML={{ __html: `body { background: #fdfdfd; font-family: 'Inter', sans-serif; }` }} />
</div>
<div className="body-wrapper">
    <div className="container" style={{ maxWidth: '800px' }}>
        <h2 className="fw-bold mb-4">Enterprise Event Sink</h2>
        
        {/* PHP code removed */}<div className="alert alert-danger font-monospace small">{/* PHP echo removed */}</div>{/* PHP code removed */}

        <div className="card border-0 shadow-sm p-4 rounded-4 mb-4">
            <h6 className="text-muted small fw-bold mb-3 text-uppercase opacity-50">Log Submit Portal</h6>
            <form method="POST">
                <div className="input-group">
                    <input type="text" name="log_entry" className="form-control" placeholder="Reporting system status: OK" required />
                    <button className="btn btn-dark">Append to Audit</button>
                </div>
            </form>
        </div>

        <div className="bg-black text-info p-4 rounded-4 shadow-lg font-monospace small" style={{ height: '350px', overflowY: 'auto' }}>
             {/* PHP echo removed */}
        </div>
    </div>
</div>
</div>

    </>
  );
}
