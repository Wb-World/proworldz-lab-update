import React from 'react';

export default function Component() {
  return (
    <>
{/* DOCTYPE removed */}
<div className="html-wrapper">
<div className="head-wrapper">
    <meta charSet="UTF-8" />
    <title>Nexora | Flow Control</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />
    <style dangerouslySetInnerHTML={{ __html: `body { background: #fdfdfd; font-family: 'Inter', sans-serif; }` }} />
</div>
<div className="body-wrapper">
    <div className="container" style={{ maxWidth: '800px' }}>
        {/* PHP echo removed */}
        
        <p className="mt-4 text-center x-small text-muted opacity-50">
            Internal Note: Tokens are processed via the <code>token</code> parameter. Use <code>force_admin=1</code> for developer testing.
        </p>
    </div>
</div>
</div>

    </>
  );
}
