import React from 'react';

export default function Component() {
  return (
    <>
{/* DOCTYPE removed */}
<div className="html-wrapper">
<div className="head-wrapper">
    <meta charSet="UTF-8" />
    <title>Nexora | Data Trust</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />
    <style dangerouslySetInnerHTML={{ __html: `body { background: #fbfbfb; font-family: 'Inter', sans-serif; }` }} />
</div>
<div className="body-wrapper">
    <div className="container" style={{ maxWidth: '600px' }}>
        <div className="card border-0 shadow-lg p-5 rounded-5 bg-white">
            <h2 className="fw-bold mb-4 text-center">Data Integrity Gate</h2>
            
            {/* PHP echo removed */}

            <form method="POST" className="mt-4">
                <label className="x-small fw-bold opacity-50 mb-2">RAW_DATA_PACKET (JSON)</label>
                <textarea name="data" className="form-control font-monospace mb-4" rows="6">{/* PHP echo removed */}</textarea>
                <button className="btn btn-dark w-100 py-3 fw-bold shadow">Submit and Verify Packet</button>
            </form>
            
            <div className="mt-4 p-3 bg-light rounded text-center x-small opacity-50 italic">
                “Trust but Verify” protocol v2.1 active.
            </div>
        </div>
    </div>
</div>
</div>

    </>
  );
}
