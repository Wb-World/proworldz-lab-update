import React from 'react';

export default function Component() {
  return (
    <>
{/* DOCTYPE removed */}
<div className="html-wrapper">
<div className="head-wrapper">
    <meta charSet="UTF-8" />
    <title>Nexora | Update Center</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />
    <style dangerouslySetInnerHTML={{ __html: `
        body { background: #111827; color: white; font-family: 'Consolas', monospace; }
        .update-box { border: 1px solid #374151; background: #1f2937; margin-top: 50px; }
    ` }} />
</div>
<div className="body-wrapper">
    <div className="container" style={{ maxWidth: '800px' }}>
        <div className="card update-box rounded-4 overflow-hidden border-0 shadow-lg">
            <div className="bg-primary bg-opacity-20 p-4 border-bottom border-primary border-opacity-30">
                <h4 className="m-0 fw-bold"><i className="bi bi-arrow-repeat"></i> Nexora OS Update Center</h4>
            </div>
            <div className="card-body p-4">
                <p className="text-muted small">Supply an authorized Nexora update mirror host to pull the latest infrastructure patches.</p>
                
                <form method="POST" className="mb-4">
                    <div className="input-group">
                        <input type="text" name="update_host" className="form-control bg-dark border-secondary text-white" placeholder="https://cdn.nexora.dev" required />
                        <button className="btn btn-primary px-4 fw-bold">Pull Update</button>
                    </div>
                </form>

                <div className="bg-black bg-opacity-50 rounded-3 p-4 small" style={{ minHeight: '200px' }}>
                    {/* PHP code removed */}
                        <span className="opacity-25">Ready to receive update instructions...</span>
                    {/* PHP code removed */}
                        {/* PHP code removed */}
                            <div className="mb-2 text-info"> {/* PHP echo removed */}</div>
                        {/* PHP code removed */}
                    {/* PHP code removed */}
                </div>
            </div>
            <div className="card-footer bg-black bg-opacity-30 border-0 p-3 text-center opacity-50 small">
                <i className="bi bi-shield-check"></i> FIPS 140-2 Cryptographic Validation Active
            </div>
        </div>
    </div>
</div>
</div>

    </>
  );
}
