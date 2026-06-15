import React from 'react';

export default function Component() {
  return (
    <>
{/* DOCTYPE removed */}
<div className="html-wrapper">
<div className="head-wrapper">
    <meta charSet="UTF-8" />
    <title>Nexora | Verbose Errors</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />
    <style dangerouslySetInnerHTML={{ __html: `body { background: #f8fafc; font-family: 'Inter', sans-serif; }` }} />
</div>
<div className="body-wrapper">
    <div className="container" style={{ maxWidth: '800px' }}>
        <h2 className="fw-bold mb-4">Application Runtime Mirror</h2>
        <div className="card border-0 shadow-sm p-4 rounded-4 mb-4">
            <h6 className="text-muted small fw-bold mb-3">RESOURCE_QUERY_INTERFACE</h6>
            <form method="GET" className="mb-0">
                <div className="input-group">
                    <input type="text" name="source" className="form-control" placeholder="app_module.json" value="{/* PHP echo removed */}" />
                </div>
            </form>
        </div>
        <div className="mt-5 text-center x-small text-muted opacity-50">
           Platform Error Level: E_ALL | Log: NEX_RUNTIME.log
        </div>
    </div>
</div>
</div>

    </>
  );
}
