import React from 'react';

export default function Component() {
  return (
    <>
{/* DOCTYPE removed */}
<div className="html-wrapper">
<div className="head-wrapper">
    <meta charSet="UTF-8" />
    <title>Nexora | Integrity Chain</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />
    <style dangerouslySetInnerHTML={{ __html: `
        body { background: #fdfdfd; font-family: 'Inter', sans-serif; }
        .step-circle { width: 35px; height: 35px; line-height: 35px; text-align: center; border-radius: 50%; background: #e2e8f0; color: #64748b; font-weight: bold; }
        .active-step { background: #0f172a; color: white; }
    ` }} />
</div>
<div className="body-wrapper">
    <div className="container" style={{ maxWidth: '700px' }}>
        <h2 className="fw-bold mb-5 text-center">Multi-Stage Integrity Pipeline</h2>
        
        <div className="d-flex justify-content-center align-items-center gap-3 mb-5">
            <div className="step-circle {/* PHP echo removed */}">1</div>
            <div className="border-top w-25"></div>
            <div className="step-circle {/* PHP echo removed */}">2</div>
            <div className="border-top w-25"></div>
            <div className="step-circle {/* PHP echo removed */}">3</div>
        </div>

        {/* PHP code removed */}
            {/* PHP echo removed */}
        {/* PHP code removed */}
            <div className="card p-5 border-0 shadow-sm rounded-5 bg-white text-center">
                {/* PHP code removed */}
                    <h4 className="fw-bold mb-3">Payload Staging</h4>
                    <p className="text-muted small">Select the infrastructure bundle to upload to the staging area.</p>
                    <a href="?step=2&source=patch_v8.bundle" className="btn btn-dark px-5 py-2">Stage Bundle</a>
                {/* PHP code removed */}
                    <h4 className="fw-bold mb-3 text-warning">Integrity Verification</h4>
                    <p className="text-muted small">The system is performing a deep-packet inspection and checksum comparison. [IN_PROGRESS]</p>
                    <div className="spinner-border text-warning mt-3 mb-4" role="status"></div>
                    <p className="x-small text-muted mb-0">System Log: Mirroring patch_v8.bundle to Secure_Vault...</p>
                    <hr className="my-4" />
                    <a href="?step=3&source=patch_v8.bundle&verified=true" className="btn btn-outline-dark btn-sm">Force Release [DEBUG ONLY]</a>
                {/* PHP code removed */}
            </div>
        {/* PHP code removed */}
        
        <div className="mt-4 text-center x-small text-muted opacity-30">
            Secure Pipeline v9.3. Integrity of intermediate stage must be maintained.
        </div>
    </div>
</div>
</div>

    </>
  );
}
