import React from 'react';

export default function Component() {
  return (
    <>
{/* DOCTYPE removed */}
<div className="html-wrapper">
<div className="head-wrapper">
    <meta charSet="UTF-8" />
    <title>Nexora | Config Loader</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />
    <style dangerouslySetInnerHTML={{ __html: `
        body { background: #f8fafc; font-family: 'Inter', sans-serif; }
        .config-card { border: none; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); }
    ` }} />
</div>
<div className="body-wrapper">
    <div className="container" style={{ maxWidth: '800px' }}>
        <h2 className="fw-bold mb-4">Infrastructure Config Manager</h2>
        <div className="card config-card p-4 mb-4">
            <h6 className="text-muted small fw-bold mb-3">LOADER STATUS</h6>
            <div className="alert alert-info py-2 px-3 small border-0">{/* PHP echo removed */}</div>
            
            <form method="GET" className="mt-3">
                <div className="input-group">
                    <span className="input-group-text bg-light border-0 small">Mirror Path</span>
                    <input type="text" name="file" className="form-control" value="{/* PHP echo removed */}</label />
                    <div className="fw-bold fs-5 {/* PHP echo removed */}">{/* PHP echo removed */}</div>
                </div>
            </div>
            {/* PHP code removed */}
        </div>
        {/* PHP code removed */}

        <div className="mt-5 text-center x-small text-muted opacity-50">
            System validated by Nexora Integrity Engine v4.2.1-lts
        </div>
    </div>
</div>
</div>

    </>
  );
}
