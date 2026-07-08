import React from 'react';

export default function Component() {
  return (
    <>
{/* DOCTYPE removed */}
<div className="html-wrapper">
<div className="head-wrapper">
    <meta charSet="UTF-8" />
    <title>Nexora | Action Validation</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />
    <style dangerouslySetInnerHTML={{ __html: `body { background: #f1f5f9; font-family: 'Segoe UI', serif; }` }} />
</div>
<div className="body-wrapper">
    <div className="container" style={{ maxWidth: '600px' }}>
        <div className="card border-0 shadow-lg p-5 rounded-5 bg-white text-center">
            <h3 className="fw-bold mb-4">Request Validation Engine</h3>
            <p className="text-muted small mb-5">Enter your unique Process ID to begin execution cycle.</p>
            
            {/* PHP echo removed */}

            <form method="GET" className="mt-4">
                <input type="text" name="proc_id" className="form-control text-center mb-4 py-3 fw-bold fs-4" placeholder="0000" required />
                <button className="btn btn-primary w-100 py-2 fw-bold shadow">Initiate Process</button>
            </form>
        </div>

        <div className="mt-4 p-3 border border-dashed rounded text-center x-small opacity-50">
            Note: Process IDs must be valid Nexora-assigned integers.
        </div>
    </div>
</div>
</div>

    </>
  );
}
