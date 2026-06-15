import React from 'react';

export default function Component() {
  return (
    <>
{/* DOCTYPE removed */}
<div className="html-wrapper">
<div className="head-wrapper">
<meta charSet="UTF-8" /><meta name="viewport" content="width=device-width,initial-scale=1" />
<title>Linux — EduPortal</title>
<link rel="stylesheet" href="style.css" />
<style dangerouslySetInnerHTML={{ __html: `
.lx-hero{padding:44px 36px 28px}
.lx-hero h1{font-size:34px;font-weight:900;color:var(--text-white);letter-spacing:-1px;margin-bottom:8px}
.lx-cards{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;padding:0 36px;max-width:1200px}
.lx-card{background:var(--bg-card);border:1px solid var(--border);border-radius:var(--r-xl);padding:32px 28px;display:flex;flex-direction:column;align-items:center;text-align:center;transition:all var(--t-norm);position:relative;overflow:hidden;backdrop-filter:blur(12px)}
.lx-card::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;border-radius:var(--r-xl) var(--r-xl) 0 0}
.lx-card:nth-child(1)::before{background:linear-gradient(90deg,var(--primary),var(--primary-light))}
.lx-card:nth-child(2)::before{background:linear-gradient(90deg,var(--success),#4ADE80)}
.lx-card:nth-child(3)::before{background:linear-gradient(90deg,var(--secondary),var(--info))}
.lx-card:hover{border-color:var(--border-hover);transform:translateY(-5px);box-shadow:var(--shadow-xl)}
.lx-card-icon{width:72px;height:72px;border-radius:var(--r-lg);display:flex;align-items:center;justify-content:center;font-size:36px;margin-bottom:18px}
.lx-card:nth-child(1) .lx-card-icon{background:rgba(108,99,255,.15)}
.lx-card:nth-child(2) .lx-card-icon{background:rgba(34,197,94,.15)}
.lx-card:nth-child(3) .lx-card-icon{background:rgba(0,212,170,.15)}
.lx-card-title{font-size:19px;font-weight:800;color:var(--text-white);margin-bottom:12px}
.lx-card-text{font-size:14px;color:var(--text-secondary);line-height:1.75;flex:1}
.lx-card-text strong{color:var(--text-primary)}
.cmd-pill{display:inline-block;background:rgba(108,99,255,.12);border:1px solid rgba(108,99,255,.2);color:var(--primary-light);padding:1px 8px;border-radius:4px;font-family:var(--font-code);font-size:12px;margin:1px}
.lx-actions{display:flex;align-items:center;justify-content:center;gap:0;padding:40px 36px;flex-wrap:wrap}
.or-divider{padding:0 20px;color:var(--text-muted);font-size:13px}
/* Terminal */
.terminal-box{background:#0c0c0c;border-radius:var(--r-xl);overflow:hidden;display:flex;flex-direction:column;width:92%;max-width:900px;height:560px;border:1px solid #2a2a2a;box-shadow:0 24px 80px rgba(0,0,0,.85);transform:scale(.88);opacity:0;transition:transform var(--t-spring),opacity var(--t-slow);resize:both;min-width:380px;min-height:280px}
.modal-overlay.open .terminal-box{transform:scale(1);opacity:1}
` }} />
</div>
<div className="body-wrapper">
<div className="orb orb-1"></div>
{/* PHP code removed */}
<main className="main">
  <div className="topbar">
    <div className="topbar-content">
      <div className="topbar-left"><h1>Linux</h1><p>Documentation, commands &amp; interactive terminal</p></div>
      <div className="topbar-right"><a href="profile" className="topbar-avatar">{/* PHP echo removed */}</a></div>
    </div>
  </div>

  <div className="content-wrap">
    <div className="lx-hero">
    <h1>🐧 Linux fundamentals</h1>
    <p style={{ color: 'var(--text-muted)', fontSize: '15px' }}>Understand the OS that powers the internet, then practice in a real terminal.</p>
  </div>

  <div className="lx-cards">
    <div className="lx-card" data-reveal="left" data-delay="1">
      <div className="lx-card-icon">🐧</div>
      <div className="lx-card-title">What is Linux?</div>
      <div className="lx-card-text">
        Linux is an open-source, Unix-like operating system kernel first released by <strong>Linus Torvalds</strong> in 1991. It forms the core of distributions (distros) like <strong>Ubuntu, Fedora, and Debian</strong>. Known for its stability, security, and flexibility, Linux allows users to view, modify, and distribute its source code freely. It powers everything from smartphones (Android) to supercomputers, web servers, and IoT devices.
      </div>
    </div>

    <div className="lx-card" data-reveal="up" data-delay="2">
      <div className="lx-card-icon">🖥️</div>
      <div className="lx-card-title">Purpose &amp; Uses</div>
      <div className="lx-card-text">
        Linux serves as the backbone of modern computing. Primary uses include: <strong>Web Servers</strong> (90%+ of websites run Apache/Nginx on Linux), <strong>Cloud Computing</strong> (AWS, GCP, Azure all use Linux), <strong>Development</strong> (Python, Java, Node.js work natively), <strong>Cybersecurity</strong> (Kali Linux for pen testing), and <strong>Embedded Systems</strong> (routers, smart TVs, autonomous vehicles). Its modular design makes it adaptable for any need.
      </div>
    </div>

    <div className="lx-card" data-reveal="right" data-delay="3">
      <div className="lx-card-icon">💻</div>
      <div className="lx-card-title">Commands &amp; Why?</div>
      <div className="lx-card-text">
        Commands give precise, scriptable control over the OS. Key categories:<br /><br />
        <strong>File Mgmt:</strong> <span className="cmd-pill">ls</span><span className="cmd-pill">cd</span><span className="cmd-pill">cp</span><span className="cmd-pill">mv</span><span className="cmd-pill">rm</span><br />
        <strong>Info:</strong> <span className="cmd-pill">top</span><span className="cmd-pill">uname</span><span className="cmd-pill">df</span><span className="cmd-pill">free</span><br />
        <strong>Network:</strong> <span className="cmd-pill">ssh</span><span className="cmd-pill">ping</span><span className="cmd-pill">wget</span><br />
        <strong>Security:</strong> <span className="cmd-pill">chmod</span><span className="cmd-pill">passwd</span><span className="cmd-pill">sudo</span><br /><br />
        Commands enable remote server management, automation with bash scripts, and faster operations than any GUI.
      </div>
    </div>
  </div>

  <div className="lx-actions">
    <a href="linux-learning" className="btn btn-primary btn-lg">Learn Commands →</a>
    <span className="or-divider">or</span>
    <a href="terminal" target="_blank" className="btn btn-success btn-lg btn-pulse">Launch Terminal &gt;_</a>
    </div>
  </div>
</main>


{/* Script tags removed */}
{/* Script tags removed */}
</div></div>

    </>
  );
}
