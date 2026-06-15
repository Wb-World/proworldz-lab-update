import React from 'react';

export default function Component() {
  return (
    <>
{/* DOCTYPE removed */}
<div className="html-wrapper">
<div className="head-wrapper">
    <meta charSet="UTF-8" />
    <title>Nexora | Encryption Engine</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />
</div>
<div className="body-wrapper">
    <div className="container" style={{ maxWidth: '800px' }}>
        <h2 className="fw-bold mb-4">Nexora Encryption Console</h2>
        <div className="card bg-secondary text-white p-4 rounded-4 mb-4 border-0">
            <h6 className="fw-bold text-warning small opacity-75">ENCRYPTED SYSTEM DATA</h6>
            <div className="p-3 bg-black rounded font-monospace small my-3">
                HEX-BLOCK: {/* PHP echo removed */}
            </div>
            <p className="mb-0 small">The value above is encrypted using Nexora XOR v1.0. Unauthorized decryption is strictly prohibited.</p>
        </div>

        <div className="card p-4 rounded-4 border-0 text-dark">
            <h6 className="fw-bold mb-3">Cipher Playground</h6>
            <form method="GET">
                <div className="mb-3">
                    <input type="text" name="plaintext" className="form-control" placeholder="Enter plaintext to test engine..." value="{/* PHP echo removed */}</code />
                </div>
            {/* PHP code removed */}
        </div>
    </div>
</div>
</div>

    </>
  );
}
