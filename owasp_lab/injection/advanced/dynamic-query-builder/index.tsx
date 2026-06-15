import React from 'react';

export default function Component() {
  return (
    <>
{/* DOCTYPE removed */}
<div className="html-wrapper">
<div className="head-wrapper">
    <meta charSet="UTF-8" />
    <title>Nexora | Logic Builder</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />
    <style dangerouslySetInnerHTML={{ __html: `
        body { background: #0f172a; color: #f8fafc; font-family: 'Outfit', sans-serif; }
        .logic-card { background: #1e293b; border: 2px solid #334155; }
    ` }} />
</div>
<div className="body-wrapper">
    <div className="container" style={{ maxWidth: '800px' }}>
        <div className="card logic-card p-5 rounded-5 shadow-2l">
            <h2 className="fw-bold mb-4">Enterprise Logic Orchestration</h2>
            <p className="text-muted small mb-5">Define custom dynamic filtering logic for direct access to the intelligence cluster data streams.</p>
            
            <div className="p-4 bg-black bg-opacity-30 rounded-4 border border-dark mb-4">
                <form method="GET">
                    <label className="x-small fw-bold mb-2 text-primary opacity-75">DYNAMIC_LOGIC_EXPRESSION</label>
                    <textarea name="condition" className="form-control bg-transparent border-secondary text-white font-monospace" rows="3" placeholder="sector_id == 'HQ' AND metric_limit < 500">{/* PHP echo removed */}</textarea>
                    <button className="btn btn-primary w-100 mt-3 py-3 fw-bold">Evaluate & Query Cluster</button>
                </form>
            </div>

            <div className="p-4 bg-light bg-opacity-5 rounded-4 border border-secondary border-opacity-20 font-monospace small">
                <div className="mb-2 opacity-50 x-small fw-bold">EVAL_ENGINE_OUTPUT</div>
                <div className="{/* PHP echo removed */}">{/* PHP echo removed */}</div>
            </div>

            <div className="mt-5 p-3 bg-primary bg-opacity-10 border border-primary border-opacity-10 rounded-4 x-small text-center">
                <i className="bi bi-info-circle me-1"></i> Nexora Logic Engine v4 matches patterns against official NIST-32 logic standard.
            </div>
        </div>
    </div>
</div>
</div>

    </>
  );
}
