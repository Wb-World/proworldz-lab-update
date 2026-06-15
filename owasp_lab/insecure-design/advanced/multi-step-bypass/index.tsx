import React from 'react';

export default function Component() {
  return (
    <>
{/* DOCTYPE removed */}
<div className="html-wrapper">
<div className="head-wrapper">
    <meta charSet="UTF-8" />
    <title>Nexora | Asset Allocation</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />
    <style dangerouslySetInnerHTML={{ __html: `
        body { background: #f1f5f9; font-family: 'Inter', sans-serif; }
        .step-indicator { width: 40px; height: 40px; line-height: 40px; text-align: center; border-radius: 50%; background: #cbd5e1; color: white; display: inline-block; }
        .active { background: #0f172a; }
    ` }} />
</div>
<div className="body-wrapper">
    <div className="container" style={{ maxWidth: '600px' }}>
        <h2 className="fw-bold mb-4 text-center">New Asset Allocation</h2>
        
        <div className="text-center mb-5 d-flex justify-content-center align-items-center gap-3">
             <div className="step-indicator {/* PHP echo removed */}">1</div>
             <div className="progress w-25" style={{ height: '2px' }}><div className="progress-bar bg-dark" style={{ width: '100%' }}></div></div>
             <div className="step-indicator {/* PHP echo removed */}">2</div>
             <div className="progress w-25" style={{ height: '2px' }}><div className="progress-bar bg-dark" style={{ width: '0%' }}></div></div>
             <div className="step-indicator {/* PHP echo removed */}">3</div>
        </div>

        {/* PHP code removed */}
            {/* PHP echo removed */}
        {/* PHP code removed */}
            <div className="card p-5 border-0 shadow-sm rounded-5 bg-white">
                {/* PHP code removed */}
                    <form method="POST">
                        <h4 className="fw-bold mb-4">Resource Identification</h4>
                        <div className="mb-3">
                            <label className="small fw-bold opacity-50">ASSET_ID</label>
                            <input type="text" name="asset_id" className="form-control" placeholder="NEX-771" required />
                        </div>
                        <div className="mb-4">
                            <label className="small fw-bold opacity-50">TARGET_DEPARTMENT</label>
                            <input type="text" name="department" className="form-control" placeholder="IT-Security" required />
                        </div>
                        <input type="hidden" name="step" value="2" />
                        <button className="btn btn-dark w-100 py-3 fw-bold">Next: Security Clearance</button>
                    </form>
                {/* PHP code removed */}
                    <div className="text-center py-4">
                        <i className="bi bi-clock-history fs-1 text-warning"></i>
                        <h4 className="fw-bold mt-3">Verifying Credentials</h4>
                        <p className="text-muted small">Our automated system is performing a background check on the allocation request. Please wait...</p>
                        <div className="spinner-border text-dark mt-3" role="status"></div>
                    </div>
                {/* PHP code removed */}
            </div>
        {/* PHP code removed */}
    </div>
</div>
</div>

    </>
  );
}
