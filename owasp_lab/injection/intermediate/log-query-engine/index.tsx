import React from 'react';

export default function Component() {
  return (
    <>
{/* DOCTYPE removed */}
<div className="html-wrapper">
<div className="head-wrapper">
    <meta charSet="UTF-8" />
    <title>Nexora | Log Engine</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />
    <style dangerouslySetInnerHTML={{ __html: `
        body { background: #0b0e14; color: #a9b1d6; font-family: 'JetBrains Mono', monospace; }
        .log-box { background: #1a1b26; border: 1px solid #24283b; height: 500px; overflow-y: auto; padding: 20px; }
        .command-input { background: #24283b; border: none; color: #7aa2f7; }
    ` }} />
</div>
<div className="body-wrapper">
    <div className="container" style={{ maxWidth: '900px' }}>
        <h4 className="mb-4 text-white fw-bold"><i className="bi bi-terminal"></i> NEXORA INTEL LOG_ENGINE [v3.1]</h4>
        
        <div className="log-box rounded-4 mb-4 shadow-2xl">
            {/* PHP code removed */}
                <div className="mb-1 small opacity-75">> {/* PHP echo removed */}</div>
            {/* PHP code removed */}
        </div>

        <form method="POST" className="mt-4">
            <div className="input-group">
                <span className="input-group-text command-input border-0 text-success opacity-50">$</span>
                <input type="text" name="command" className="form-control command-input" placeholder="Execute analyzer command..." required autofocus />
                <button className="btn btn-primary px-4 fw-bold shadow-lg">Submit Command</button>
            </div>
        </form>
        <p className="mt-4 x-small text-muted text-center opacity-30">Identity verified by hardware security module. Commands logged for compliance.</p>
    </div>
</div>
</div>

    </>
  );
}
