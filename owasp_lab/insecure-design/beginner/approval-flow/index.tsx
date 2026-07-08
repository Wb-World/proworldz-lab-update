import React from 'react';

export default function Component() {
  return (
    <>
{/* DOCTYPE removed */}
<div className="html-wrapper">
<div className="head-wrapper">
    <meta charSet="UTF-8" />
    <title>Nexora | Expense Approvals</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />
    <style dangerouslySetInnerHTML={{ __html: `
        body { background: #f4f7fa; font-family: 'Inter', sans-serif; }
        .workflow-step { opacity: 0.5; }
        .active-step { opacity: 1; border-left: 4px solid #0d6efd; }
    ` }} />
</div>
<div className="body-wrapper">
    <div className="container" style={{ maxWidth: '800px' }}>
        <h2 className="fw-bold mb-4">Nexora Business Workflow</h2>
        <div className="row g-4">
            <div className="col-md-4">
                <div className="card p-3 mb-2 {/* PHP echo removed */}">
                    <h6 className="fw-bold mb-0 small">Step 1</h6>
                    <span className="x-small text-muted">HR Approval</span>
                </div>
                <div className="card p-3 mb-2 workflow-step">
                    <h6 className="fw-bold mb-0 small">Step 2</h6>
                    <span className="x-small text-muted">Manager Review</span>
                </div>
                <div className="card p-3 mb-2 {/* PHP echo removed */}">
                    <h6 className="fw-bold mb-0 small">Step 3</h6>
                    <span className="x-small text-muted">CFO Finalization</span>
                </div>
            </div>
            <div className="col-md-8">
                {/* PHP echo removed */}
            </div>
        </div>
    </div>
</div>
</div>

    </>
  );
}
