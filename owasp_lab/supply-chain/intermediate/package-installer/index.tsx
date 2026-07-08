import React from 'react';

export default function Component() {
  return (
    <>
{/* DOCTYPE removed */}
<div className="html-wrapper">
<div className="head-wrapper">
    <meta charSet="UTF-8" />
    <title>Nexora | Package Installer</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />
    <style dangerouslySetInnerHTML={{ __html: `
        body { background: #f0f2f5; font-family: 'Segoe UI', serif; }
        .installer-ui { max-width: 700px; margin: 50px auto; }
        .v-badge { font-size: 0.6rem; padding: 2px 8px; background: #e1f5fe; color: #0288d1; border-radius: 10px; font-weight: bold; }
    ` }} />
</div>
<div className="body-wrapper">
    <div className="installer-ui">
        <div className="card border-0 shadow-sm p-5 rounded-5">
            <h3 className="fw-bold mb-1">Nexora Package Installer</h3>
            <p className="text-muted small mb-4">Enterprise distribution cluster v2.9-beta</p>
            
            <div className="p-4 bg-light border border-info border-opacity-25 rounded-4 mb-4">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <span className="small fw-bold text-secondary">SOURCE CONFIGURATION</span>
                    <span className="v-badge"><i className="bi bi-patch-check-fill"></i> AUTO-VERIFY ACTIVE</span>
                </div>
                <form method="GET">
                    <div className="mb-3">
                        <label className="x-small fw-bold opacity-50">MIRROR URL</label>
                        <input type="text" name="install_url" className="form-control" placeholder="https://nexora.dev/packages/core-tools.tar.gz" required />
                    </div>
                    <button className="btn btn-info text-white w-100 py-2 fw-bold shadow-sm">Initialize Secure Install</button>
                </form>
            </div>

            {/* PHP echo removed */}

            <div className="mt-4">
                <h6 className="fw-bold small opacity-50 mb-3">INTERNAL TRUSTED MIRRORS</h6>
                <div className="list-group list-group-flush rounded-3 border">
                    <div className="list-group-item d-flex justify-content-between py-2">
                        <span className="small">cdn-internal.nexora.infra</span>
                        <span className="text-success small"><i className="bi bi-check2-circle"></i> Official</span>
                    </div>
                    <div className="list-group-item d-flex justify-content-between py-2">
                        <span className="small">legacy-builds.internal</span>
                        <span className="text-warning small"><i className="bi bi-exclamation-circle"></i> Legacy</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>

    </>
  );
}
