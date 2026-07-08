import React from 'react';

export default function Component() {
  return (
    <>
{/* DOCTYPE removed */}
<div className="html-wrapper">
<div className="head-wrapper">
    <meta charSet="UTF-8" />
    <title>Nexora | File Checker</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />
    <style dangerouslySetInnerHTML={{ __html: `body { background: #f0f4f8; font-family: 'Segoe UI', serif; }` }} />
</div>
<div className="body-wrapper">
    <div className="container" style={{ maxWidth: '700px' }}>
        <div className="card border-0 shadow p-5 rounded-5 bg-white">
            <h3 className="fw-bold mb-4">Package Integrity Monitor</h3>
            <p className="text-muted small mb-4">Verify software integrity against the Nexora Global Checksum Registry.</p>
            
            {/* PHP code removed */}<div className="alert {/* PHP echo removed */} p-4 rounded-4 mb-4 small">{/* PHP echo removed */}</div>{/* PHP code removed */}

            <form method="POST">
                <div className="mb-3">
                    <label className="x-small fw-bold opacity-50 mb-1">DOWNLOADED PACKAGE</label>
                    <select name="file" className="form-select">
                        {/* PHP code removed */}
                            <option value="{/* PHP echo removed */}">{/* PHP echo removed */} ({/* PHP echo removed */})</option>
                        {/* PHP code removed */}
                    </select>
                </div>
                <div className="mb-4">
                    <label className="x-small fw-bold opacity-50 mb-1">PROVIDED CHECKSUM (MD5-HEX)</label>
                    <input type="text" name="hash" className="form-control" placeholder="d41d8cd98f00b204e9800998ecf8427e" required />
                </div>
                <button className="btn btn-dark w-100 py-2 fw-bold">Verify Binary Integrity</button>
            </form>
        </div>
        <p className="mt-4 text-center x-small text-muted opacity-50">Authorized Checksum Engine v1.0.8. Cross-verified with NIST.</p>
    </div>
</div>
</div>

    </>
  );
}
