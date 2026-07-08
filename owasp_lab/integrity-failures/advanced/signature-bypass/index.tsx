import React from 'react';

export default function Component() {
  return (
    <>
{/* DOCTYPE removed */}
<div className="html-wrapper">
<div className="head-wrapper">
    <meta charSet="UTF-8" />
    <title>Nexora | Signature Core</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />
    <style dangerouslySetInnerHTML={{ __html: `body { background: #0f172a; color: #94a3b8; font-family: 'Inter', sans-serif; }` }} />
</div>
<div className="body-wrapper">
    <div className="container" style={{ maxWidth: '800px' }}>
        <div className="card p-5 bg-slate-900 border border-slate-800 rounded-5 shadow-2xl">
            <div className="d-flex justify-content-between align-items-center mb-5">
                <h2 className="text-white fw-bold m-0">Cryptographic Instruction Center</h2>
                <span className="badge {/* PHP echo removed */} p-2 px-3">{/* PHP echo removed */}</span>
            </div>

            <form method="POST">
                <div className="mb-4">
                    <label className="x-small fw-bold mb-2 opacity-50">INSTRUCTION_SET (PAYLOAD)</label>
                    <input type="text" name="payload" className="form-control bg-transparent border-slate-700 text-white font-monospace" value="standard_ping_request" required />
                </div>
                <div className="mb-4">
                    <label className="x-small fw-bold mb-2 opacity-50">DIGITAL_SIGNATURE (MD5)</label>
                    <input type="text" name="sig" className="form-control bg-transparent border-slate-700 text-primary font-monospace" placeholder="md5_of_payload" required />
                </div>
                <button className="btn btn-primary w-100 py-3 fw-bold shadow-lg">Verify & Execute Instruction</button>
            </form>

            {/* PHP echo removed */}

            <div className="mt-5 p-4 bg-slate-950 rounded-4 border border-slate-800 text-center x-small opacity-50 font-monospace">
                Developer Debugging Key: Use <code>md5()</code> for manual signature calculation.
            </div>
        </div>
    </div>
</div>
</div>

    </>
  );
}
