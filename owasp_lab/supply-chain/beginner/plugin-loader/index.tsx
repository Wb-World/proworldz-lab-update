import React from 'react';

export default function Component() {
  return (
    <>
{/* DOCTYPE removed */}
<div className="html-wrapper">
<div className="head-wrapper">
    <meta charSet="UTF-8" />
    <title>Nexora | Plugin Loader</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />
    <style dangerouslySetInnerHTML={{ __html: `
        body { background: #f8fafc; font-family: 'Inter', sans-serif; }
        .dev-header { background: #0f172a; color: white; padding: 2rem; border-bottom: 4px solid #3b82f6; }
    ` }} />
</div>
<div className="body-wrapper">
    <div className="head-wrapper">
        <div className="container">
            <h2 className="fw-bold m-0"><i className="bi bi-cpu"></i> Nexora Hot-Load Portal</h2>
            <p className="m-0 opacity-50 small">Automated DevOps Integration Layer v4.1</p>
        </div>
    </div>

    <div className="container py-5">
        <div className="row g-4">
            <div className="col-md-7">
                <div className="card border-0 shadow-sm p-4 rounded-4 mb-4">
                    <h5 className="fw-bold mb-4">Dynamic Module Injection</h5>
                    <p className="text-muted small">Enter the official mirror URL for the plugin package you wish to deploy to the Nexora environment.</p>
                    <form method="GET">
                        <div className="input-group">
                            <input type="text" name="plugin_url" className="form-control" placeholder="https://mirrors.nexora.dev/plugins/legacy_log.php" />
                            <button className="btn btn-primary px-4">Deploy Module</button>
                        </div>
                    </form>
                    <div className="mt-4 p-3 bg-light rounded text-center x-small text-muted">
                        <i className="bi bi-shield-check me-1"></i> Nexora Signature Verification Service Active
                    </div>
                </div>

                {/* PHP code removed */}
                <div className="card border-0 shadow-sm p-4 rounded-4 bg-dark text-light font-monospace small">
                    <div className="d-flex justify-content-between border-bottom border-secondary pb-2 mb-3">
                        <span>TERMINAL OUTPUT</span>
                        <span className="text-success">[ONLINE]</span>
                    </div>
                    {/* PHP echo removed */}
                </div>
                {/* PHP code removed */}
            </div>
            
            <div className="col-md-5">
                <div className="card border-0 shadow-sm p-4 rounded-4 bg-primary text-white">
                    <h6 className="fw-bold mb-3">Developer Quick-Links</h6>
                    <ul className="list-unstyled mb-0 small opacity-75">
                        <li className="mb-2">Official Mirror: <code>https://mirrors.nexora.dev/v1</code></li>
                        <li className="mb-2">Legacy Assets: <code>https://cdn.legacy.nexora.dev/</code></li>
                        <li>Support: <code>dev-ops@nexora.internal</code></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
</div>

    </>
  );
}
