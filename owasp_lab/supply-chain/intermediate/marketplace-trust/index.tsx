import React from 'react';

export default function Component() {
  return (
    <>
{/* DOCTYPE removed */}
<div className="html-wrapper">
<div className="head-wrapper">
    <meta charSet="UTF-8" />
    <title>Nexora | Marketplace</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />
    <style dangerouslySetInnerHTML={{ __html: `
        body { background: #f8fafc; }
        .v-check { color: #3b82f6; cursor: help; }
        .marketplace-header { background: white; border-bottom: 2px solid #e2e8f0; padding: 3rem 0; }
    ` }} />
</div>
<div className="body-wrapper">
    <div className="marketplace-header mb-5">
        <div className="container text-center">
            <h1 className="fw-bold">Nexora App Marketplace</h1>
            <p className="text-muted">Trusted integrations for your DevOps pipeline.</p>
        </div>
    </div>

    <div className="container" style={{ maxWidth: '900px' }}>
        {/* PHP code removed */}<div className="alert alert-info border-0 shadow-sm p-4 rounded-4 mb-5 text-center">{/* PHP echo removed */}</div>{/* PHP code removed */}
        
        <div className="row g-4">
            {/* PHP code removed */}
            <div className="col-md-4">
                <div className="card h-100 border-0 shadow-sm rounded-4 text-center p-4 hvr-grow">
                    <div className="fs-1 text-primary mb-3"><i className="bi bi-box-seam"></i></div>
                    <h5 className="fw-bold mb-1">{/* PHP echo removed */}</h5>
                    <p className="text-muted small mb-3">by {/* PHP echo removed */}</p>
                    
                    {/* PHP code removed */}
                        <div className="v-check small fw-bold mb-3 d-block"><i className="bi bi-patch-check-fill"></i> VERIFIED BY NEXORA</div>
                    {/* PHP code removed */}
                        <div className="text-muted x-small mb-3 d-block">COMMUNITY MODULE</div>
                    {/* PHP code removed */}
                    
                    <a href="?source=https://marketplace.nexora.dev/download/{/* PHP echo removed */}" className="btn btn-outline-primary btn-sm w-100 py-2 fw-bold">Install & Verify</a>
                </div>
            </div>
            {/* PHP code removed */}
        </div>
    </div>
</div>
</div>

    </>
  );
}
