import React from 'react';

export default function Component() {
  return (
    <>
{/* DOCTYPE removed */}
<div className="html-wrapper">
<div className="head-wrapper">
    <meta charSet="UTF-8" />
    <title>Nexora | Alert Monitor</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />
    <style dangerouslySetInnerHTML={{ __html: `body { background: #0f172a; color: #cbd5e1; font-family: 'Inter', sans-serif; }` }} />
</div>
<div className="body-wrapper">
    <div className="container" style={{ maxWidth: '700px' }}>
        <h3 className="fw-bold mb-4 text-white">Central Security Monitoring</h3>
        
        {/* PHP code removed */}
            <div className="alert alert-danger border-0 shadow-lg p-5 rounded-5 animate__animated animate__shakeX">
                <h4 className="fw-bold"><i className="bi bi-exclamation-triangle-fill"></i> INTRUSION ALERT</h4>
                <p className="mb-0 small">{/* PHP echo removed */}</p>
            </div>
        {/* PHP code removed */}
            <div className="card p-5 bg-slate-800 border-0 rounded-5 shadow text-center" style={{ background: '#1e293b' }}>
                <h5 className="text-white fw-bold mb-3">Monitoring Status: <span className="text-success">NOMINAL</span></h5>
                <p className="small text-muted mb-4 text-break">Attempted failures in current window: {/* PHP echo removed */} / 5</p>
                
                <div className="d-flex justify-content-center gap-3">
                    <a href="?retry=1" className="btn btn-outline-light btn-sm px-4">Perform Secure Trial</a>
                    <a href="?retry=1&bypass_bypass=1" className="btn btn-outline-primary btn-sm px-4 fw-bold">Manual Probe (Logged)</a>
                </div>
            </div>
        {/* PHP code removed */}

        <div className="mt-5 p-4 bg-primary bg-opacity-10 border border-primary border-opacity-10 rounded-4 text-center x-small">
             <i className="bi bi-info-circle me-1"></i> Admin Hinweis: Internal testing requires bypassing the alert counter via <code>reset_counter=1</code>.
             {/* PHP code removed */}
                 <br /><br /><span className="text-success fw-bold">BYPASS_SUCCESS: FLAG{a09_alert_bypass_04}</span>
             {/* PHP code removed */}
        </div>
    </div>
</div>
</div>

    </>
  );
}
