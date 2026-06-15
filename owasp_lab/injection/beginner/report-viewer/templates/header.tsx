import React from 'react';

export default function Component() {
  return (
    <>
{/* DOCTYPE removed */}
<div className="html-wrapper">
<div className="head-wrapper">
    <meta charSet="UTF-8" />
    <title>Nexora | Reports</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />
    <style dangerouslySetInnerHTML={{ __html: `
        body { background: #fdfdfd; font-family: 'Inter', sans-serif; }
    ` }} />
</div>
<div className="body-wrapper">
    <nav className="navbar navbar-dark bg-primary mb-5 p-3 shadow-sm">
        <div className="container">
            <a className="navbar-brand fw-bold" href="index">NEXORA INTEL <span className="ms-2 fw-light opacity-75 small">Analytics Vault</span></a>
        </div>
    </nav>
    <div className="container">

    </>
  );
}
