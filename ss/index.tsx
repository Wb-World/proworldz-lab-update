import React from 'react';

export default function Component() {
  return (
    <>
{/* DOCTYPE removed */}
<div className="html-wrapper">
<div className="head-wrapper">
<meta charSet="UTF-8" /><meta name="viewport" content="width=device-width,initial-scale=1" />
<title>Login — EduPortal</title>
<meta name="description" content="Student learning portal login." />
<link rel="stylesheet" href="style.css" />
<style dangerouslySetInnerHTML={{ __html: `
body{display:flex;align-items:center;justify-content:center;min-height:100vh;padding:20px}
.login-wrap{width:100%;max-width:420px;animation:pageEnter .6s ease both}
.login-card{background:var(--bg-card);border:1px solid var(--border);border-radius:var(--r-xl);padding:40px;backdrop-filter:blur(20px);position:relative;overflow:hidden}
.login-card::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,var(--primary),var(--secondary),var(--primary))}
.login-logo{width:56px;height:56px;border-radius:var(--r-lg);background:linear-gradient(135deg,var(--primary),var(--primary-dark));display:flex;align-items:center;justify-content:center;margin:0 auto 20px;box-shadow:0 6px 20px var(--primary-glow)}
.login-logo svg{width:28px;height:28px;stroke:white;fill:none;stroke-width:1.75;stroke-linecap:round;stroke-linejoin:round}
.login-title{font-size:24px;font-weight:800;color:var(--text-white);text-align:center;letter-spacing:-.5px;margin-bottom:4px}
.login-sub{font-size:14px;color:var(--text-muted);text-align:center;margin-bottom:28px}
.form-group{margin-bottom:16px}
.form-label{display:block;font-size:13px;font-weight:600;color:var(--text-secondary);margin-bottom:7px}
.form-input{width:100%;background:rgba(255,255,255,.04);border:1.5px solid var(--border);border-radius:var(--r-md);padding:12px 16px;color:var(--text-primary);font-family:var(--font-ui);font-size:14px;outline:none;transition:all var(--t-norm)}
.form-input::placeholder{color:var(--text-muted)}
.form-input:focus{border-color:var(--primary);box-shadow:0 0 0 3px rgba(108,99,255,.15);background:rgba(255,255,255,.06)}
.form-error{background:rgba(239,68,68,.1);border:1px solid rgba(239,68,68,.25);border-radius:var(--r-md);padding:10px 14px;font-size:13px;color:var(--danger);margin-bottom:16px;display:flex;align-items:center;gap:8px}
.login-submit{width:100%;padding:13px;border-radius:var(--r-md);background:linear-gradient(135deg,var(--primary),var(--primary-dark));color:#fff;font-size:15px;font-weight:700;border:none;cursor:pointer;font-family:var(--font-ui);transition:all var(--t-norm);letter-spacing:-.1px;position:relative;overflow:hidden}
.login-submit:hover{transform:translateY(-1px);box-shadow:0 8px 25px var(--primary-glow)}
.demo-hint{margin-top:18px;text-align:center;font-size:12px;color:var(--text-muted);background:rgba(255,255,255,.03);border-radius:var(--r-sm);padding:10px;border:1px solid var(--border)}
.demo-hint code{color:var(--primary-light);font-family:var(--font-code)}
` }} />
</div>
<div className="body-wrapper">
<div className="orb orb-1"></div><div className="orb orb-2"></div>
<div className="login-wrap">
  <div className="login-card">
    <div className="login-logo">
      <svg viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
    </div>
    <h1 className="login-title">EduPortal</h1>
    <p className="login-sub">Sign in to your student account</p>
    {/* PHP code removed */}
    {/* Error banner removed for UI placeholder */}
    {/* PHP code removed */}
    <form method="POST" id="login-form">
      <div className="form-group">
        <label className="form-label" htmlFor="username">Username</label>
        <input type="text" id="username" name="username" className="form-input" placeholder="Enter your username" required autoComplete="username" defaultValue="" />
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="password">Password</label>
        <input type="password" id="password" name="password" className="form-input" placeholder="Enter your password" required autoComplete="current-password" />
      </div>
      <button type="submit" className="login-submit btn">Sign In →</button>
    </form>
    <div className="demo-hint">Demo credentials: <code>student</code> / <code>password</code></div>
  </div>
</div>
{/* Script tags removed */}
</div></div>

    </>
  );
}
