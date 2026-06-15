import React from 'react';

export default function Component() {
  return (
    <>
{/* DOCTYPE removed */}
<div className="html-wrapper">
<div className="head-wrapper">
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Broken Access Control Lab</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />
    <style dangerouslySetInnerHTML={{ __html: `
        body { background-color: #f8f9fa; }
        .navbar { background-color: #212529; }
        .card { border-radius: 15px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
    ` }} />
</div>
<div className="body-wrapper">
<nav className="navbar navbar-expand-lg navbar-dark mb-4">
    <div className="container">
        <a className="navbar-brand" href="index">🛡️ OWASP A01 Lab</a>
        <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto">
                {/* PHP code removed */}
                    <li className="nav-item"><a className="nav-link" href="dashboard">Dashboard</a></li>
                    <li className="nav-item"><a className="nav-link text-danger" href="login?logout=1">Logout</a></li>
                {/* PHP code removed */}
                    <li className="nav-item"><a className="nav-link" href="login">Login</a></li>
                {/* PHP code removed */}
            </ul>
        </div>
    </div>
</nav>
<div className="container">

    </>
  );
}
