import React from 'react';

export default function Component() {
  return (
    <>
{/* DOCTYPE removed */}
<div className="html-wrapper">
<div className="head-wrapper">
    <meta charSet="UTF-8" />
    <title>Nexora | Log Injection</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />
    <style dangerouslySetInnerHTML={{ __html: `body { background: #fdfdfd; font-family: 'monospace'; font-size: 0.9rem; }` }} />
</div>
<div className="body-wrapper">
    <div className="container" style={{ maxWidth: '800px' }}>
        <h4 className="fw-bold mb-4">Enterprise Log Processor [v4.1]</h4>
        
        {/* PHP code removed */}<div className="alert alert-info py-4 border-0 shadow-sm rounded-4 mb-4">{/* PHP echo removed */}</div>{/* PHP code removed */}

        <div className="card border-0 shadow-sm p-4 rounded-4 mb-4">
            <h6 className="text-muted small fw-bold mb-3">Audit Stream Monitor</h6>
            <div className="bg-black text-white p-4 rounded-4 shadow-lg" style={{ height: '400px', overflowY: 'auto', whiteSpace: 'pre-wrap' }}>
                {/* PHP echo removed */}
            </div>
        </div>

        <form method="GET" className="mt-4">
            <div className="input-group">
                <span className="input-group-text bg-light border-0">Instruction</span>
                <input type="text" name="input" className="form-control" placeholder="QUERY_STATUS" value="" />
                <button className="btn btn-dark">Log Metadata</button>
            </div>
        </form>
    </div>
</div>
</div>

    </>
  );
}
