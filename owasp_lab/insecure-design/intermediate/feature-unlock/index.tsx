import React from 'react';

export default function Component() {
  return (
    <>
{/* DOCTYPE removed */}
<div className="html-wrapper">
<div className="head-wrapper">
    <meta charSet="UTF-8" />
    <title>Nexora | Feature Activation</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />
    <style dangerouslySetInnerHTML={{ __html: `
        body { background: #0f172a; color: #f8fafc; font-family: 'Inter', sans-serif; }
    ` }} />
</div>
<div className="body-wrapper">
    <div className="container py-5">
        <h1 className="fw-bold mb-4">Nexora Feature Roadmap</h1>
        
        <div className="row g-4">
            <div className="col-md-6">
                <div className="card p-5 bg-dark text-white border-secondary h-100 rounded-5">
                    <h4 className="fw-bold">Standard Analytics</h4>
                    <p className="text-secondary small">Access to basic infrastructure metrics and logs.</p>
                    <button className="btn btn-outline-secondary disabled w-100 mt-auto">Active</button>
                </div>
            </div>
            <div className="col-md-6">
                <div className="card p-5 {/* PHP echo removed */} h-100 rounded-5 transition">
                    <h4 className="{/* PHP echo removed */} fw-bold">Enterprise Predictive AI</h4>
                    <p className="small">Real-time threat detection and AI-powered forecasting.</p>
                    
                    {/* PHP code removed */}
                        <div className="mt-4 p-3 bg-primary bg-opacity-10 border border-primary text-primary rounded small">
                            <b>PREMIUM ACCESS ACTIVATED</b><br />
                            SEC_KEY: FLAG{a06_feature_unlock_04}
                        </div>
                        <button className="btn btn-primary w-100 mt-auto py-2 fw-bold">Explore Analytics</button>
                    {/* PHP code removed */}
                        <p className="text-danger fw-bold x-small p-2 bg-danger bg-opacity-10 rounded text-center">UPGRADE REQUIRED</p>
                        <button className="btn btn-outline-secondary w-100 mt-auto" disabled>Purchase Upgrade</button>
                    {/* PHP code removed */}
                </div>
            </div>
        </div>

        <div className="mt-5 p-4 border border-secondary border-dashed rounded-4 text-center text-muted small">
            <i className="bi bi-info-circle me-1"></i> Developer Notice: Test enterprise features by enabling the <code>premium</code> operational flag in the debug URL.
        </div>
    </div>
</div>
</div>

    </>
  );
}
