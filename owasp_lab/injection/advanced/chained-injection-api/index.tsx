import React from 'react';

export default function Component() {
  return (
    <>
{/* DOCTYPE removed */}
<div className="html-wrapper">
<div className="head-wrapper">
    <meta charSet="UTF-8" />
    <title>Nexora | Advanced API</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />
    <style dangerouslySetInnerHTML={{ __html: `
        body { background: #f0f2f5; font-family: 'Consolas', monospace; }
        .api-card { border: 1px solid #e2e8f0; border-top: 5px solid #3b82f6; }
    ` }} />
</div>
<div className="body-wrapper">
    <div className="container" style={{ maxWidth: '800px' }}>
        <div className="card p-5 api-card shadow-lg rounded-4">
            <h4 className="fw-bold text-dark mb-4"><i className="bi bi-cpu-fill text-primary"></i> Nexora Intel API Interface</h4>
            <p className="text-muted small mb-5">Interface for secondary intelligence nodes to fetch sector-specific analytics data.</p>
            
            <form method="GET" className="row g-3 mb-5">
                <div className="col-md-6">
                    <label className="x-small fw-bold mb-1 opacity-50">API_KEY</label>
                    <input type="text" name="api_key" className="form-control" placeholder="X-NEX-0091" value="{/* PHP echo removed */}</span />
                </div>
                {/* PHP echo removed */}
            </div>
            
            <div className="mt-4 text-center x-small text-muted opacity-50">
                Internal Documentation: <code>/api/v2/docs?token=predictable</code>
            </div>
        </div>
    </div>
</div>
</div>

    </>
  );
}
