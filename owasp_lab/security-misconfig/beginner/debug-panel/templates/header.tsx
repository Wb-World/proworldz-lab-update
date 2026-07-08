import React from 'react';

export default function Component() {
  return (
    <>
{/* DOCTYPE removed */}
<div className="html-wrapper">
<div className="head-wrapper">
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>A02 - Security Misconfiguration</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />
    <style dangerouslySetInnerHTML={{ __html: `
        body { background-color: #f4f7f6; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; }
        .navbar { background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%); }
        .card { border: none; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.05); }
        .btn-primary { background: #2a5298; border: none; }
        .btn-primary:hover { background: #1e3c72; }
    ` }} />
</div>
<div className="body-wrapper">
<nav className="navbar navbar-expand-lg navbar-dark shadow-sm mb-4">
    <div className="container">
        <a className="navbar-brand fw-bold" href="index">🛡️ OWASP Lab A02</a>
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
</div></div></div>
    </>
  );
}
