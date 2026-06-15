import React from 'react';

export default function Component() {
  return (
    <>
{/* DOCTYPE removed */}
<div className="html-wrapper">
<div className="head-wrapper">
    <meta charSet="UTF-8" />
    <title>Nexora | Encrypted Storage</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />
    <style dangerouslySetInnerHTML={{ __html: `
        body { background: #0f172a; color: #f8fafc; font-family: 'Outfit', sans-serif; }
        .card { background: #1e293b; border: 1px solid #334155; }
    ` }} />
</div>
<div className="body-wrapper">
    <div className="container">
        <h2 className="fw-bold mb-4">Encrypted Secrets Vault</h2>
        <div className="row g-4">
            {/* PHP code removed */}
            <div className="col-md-6">
                <div className="card p-4 rounded-4">
                    <h6 className="text-info fw-bold mb-2">{/* PHP echo removed */}</h6>
                    <div className="bg-black bg-opacity-50 p-3 rounded font-monospace text-warning small">
                        {/* PHP echo removed */}
                    </div>
                    <div className="mt-3 text-muted x-small">
                        <i className="bi bi-lock-fill"></i> Algorithm: AES-B64-Enterprise
                    </div>
                </div>
            </div>
            {/* PHP code removed */}
        </div>
    </div>
</div>
</div>

    </>
  );
}
