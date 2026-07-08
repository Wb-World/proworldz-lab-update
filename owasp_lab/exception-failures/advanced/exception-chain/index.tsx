import React from 'react';

export default function Component() {
  return (
    <>
{/* DOCTYPE removed */}
<div className="html-wrapper">
<div className="head-wrapper">
    <meta charSet="UTF-8" />
    <title>Nexora | Exception Chain</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />
    <style dangerouslySetInnerHTML={{ __html: `body { background: #0f172a; color: #f8fafc; font-family: 'Inter', sans-serif; }` }} />
</div>
<div className="body-wrapper">
    <div className="container" style={{ maxWidth: '600px' }}>
        <h2 className="fw-bold mb-4 text-white">Execution Chain Monitor</h2>

        {/* PHP code removed */}
            <div className="alert alert-success border-0 p-5 rounded-5 shadow-lg">
                <h4 className="fw-bold">CHAIN_VALIDATION_BYPASS</h4>
                <p className="small">Administrative instructions accepted skipping Step 1 validation.</p>
                <hr />
                <div className="fw-bold text-dark">CORE_FLAG: FLAG{a10_chain_break_05}</div>
            </div>
            <a href="index" className="btn btn-outline-light btn-sm mt-3">Reset Chain</a>
        {/* PHP code removed */}
            <div className="card p-5 bg-slate-900 border-slate-800 rounded-5 shadow text-white">
                <h5 className="fw-bold mb-4">Multi-Stage Instruction</h5>
                <form method="POST">
                    <div className="mb-3">
                        <label className="x-small fw-bold opacity-50 mb-1">STAGING_IDENTIFIER</label>
                        <input type="text" name="username" className="form-control bg-transparent border-slate-700 text-white" placeholder="admin" required />
                    </div>
                    <div className="mb-4">
                        <label className="x-small fw-bold opacity-50 mb-1">PAYLOAD_INPUT</label>
                        <input type="text" name="input" className="form-control bg-transparent border-slate-700 text-white" placeholder="standard_task" required />
                    </div>
                    <input type="hidden" name="process" value="1" />
                    {/*  User must manually provide 'action' to trigger the bypass  */}
                    <input type="hidden" name="action" value="DEPLOY" />
                    <button className="btn btn-primary w-100 py-3 fw-bold shadow">Initialize Deployment</button>
                </form>
            </div>
        {/* PHP code removed */}
    </div>
</div>
</div>

    </>
  );
}
