import React from 'react';

export default function Component() {
  return (
    <>
{/* DOCTYPE removed */}
<div className="html-wrapper">
<div className="head-wrapper">
<meta charSet="UTF-8" /><meta name="viewport" content="width=device-width,initial-scale=1" />
<title>Linux Learning — EduPortal</title>
<link rel="stylesheet" href="style.css" />
<style dangerouslySetInnerHTML={{ __html: `
.search-sticky{position:sticky;top:0;z-index:200;background:rgba(10,10,20,.90);backdrop-filter:blur(16px);padding:20px 36px;border-bottom:1px solid var(--border)}
.cmds-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;padding:28px 36px;max-width:1300px}
.cmd-card{background:var(--bg-card);border:1px solid var(--border);border-radius:var(--r-lg);padding:18px 16px;cursor:pointer;transition:all var(--t-norm)}
.cmd-card:hover{border-color:var(--border-hover);transform:translateY(-3px);box-shadow:var(--shadow-md);background:var(--bg-card-hover)}
.cmd-name{font-family:var(--font-code);font-size:17px;font-weight:700;color:var(--secondary);margin-bottom:5px}
.cmd-card-desc{font-size:12px;color:var(--text-muted);line-height:1.4}
/* Command manual modal */
.cmd-modal-box{background:var(--bg-card-solid);border:1px solid var(--border);border-radius:var(--r-xl);width:92%;max-width:740px;max-height:88vh;overflow-y:auto;transform:scale(.88) translateY(16px);opacity:0;transition:transform var(--t-spring),opacity var(--t-slow)}
.modal-overlay.open .cmd-modal-box{transform:scale(1) translateY(0);opacity:1}
.cmd-syntax-box{background:#0c0c0c;border:1px solid rgba(255,255,255,.06);border-radius:var(--r-md);padding:14px 18px;font-family:var(--font-code);font-size:14px;color:var(--secondary);margin:10px 0}
.flags-table{width:100%;border-collapse:collapse;font-size:13px;margin:10px 0}
.flags-table th{text-align:left;padding:7px 12px;border-bottom:1px solid var(--border);font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.8px;color:var(--text-muted)}
.flags-table td{padding:8px 12px;border-bottom:1px solid rgba(255,255,255,.03);color:var(--text-secondary)}
.flags-table td:first-child{font-family:var(--font-code);color:var(--primary-light);width:26%}
.flags-table td:last-child{color:var(--text-muted);font-size:12px}
.ex-box{background:#0c0c0c;border:1px solid rgba(255,255,255,.05);border-radius:var(--r-sm);padding:10px 14px;margin-bottom:8px;display:flex;gap:12px;align-items:flex-start}
.ex-cmd{font-family:var(--font-code);font-size:12px;color:#00ff41;min-width:210px;flex-shrink:0}
.ex-desc{font-size:12px;color:var(--text-muted)}
.related{display:flex;flex-wrap:wrap;gap:8px;padding:14px 28px}
.rel-pill{background:rgba(108,99,255,.1);border:1px solid rgba(108,99,255,.2);color:var(--primary-light);padding:4px 12px;border-radius:var(--r-full);font-family:var(--font-code);font-size:12px;cursor:pointer;transition:all var(--t-fast)}
.rel-pill:hover{background:rgba(108,99,255,.2)}
` }} />
</div>
<div className="body-wrapper">
<div className="orb orb-2"></div>
{/* PHP code removed */}
<main className="main">
  <div className="topbar">
    <div className="topbar-content">
      <div className="topbar-left">
        <h1 style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <svg style={{ width: '24px', height: '24px', color: 'var(--primary-light)' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>
          Command Manual reference
        </h1>
        <p style={{ paddingLeft: '39px' }}>Interactive documentation for core bash utilities</p>
      </div>
      <div className="topbar-right">
        <a href="terminal" target="_blank" className="btn btn-success btn-sm">▶ Launch Terminal</a>
        <a href="profile" className="topbar-avatar">{/* PHP echo removed */}</a>
      </div>
    </div>
  </div>

  <div className="content-wrap">
    <div className="search-sticky">
    <div className="search-wrap" style={{ maxWidth: '520px', margin: '0 auto' }}>
      <span className="s-icon"><svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg></span>
      <input type="text" id="lx-search" className="search-input" placeholder="Search commands… (e.g. grep, chmod, tar)" />
    </div>
  </div>

  {/* PHP code removed */}

  <div className="cmds-grid" id="cmds-grid">
    {/* PHP code removed */}
    <div className="cmd-card" data-reveal="up" data-cmd="{/* PHP echo removed */}"
      onClick="showCmd({/* PHP echo removed */})">
      <div className="cmd-name">{/* PHP echo removed */}</div>
      <div className="cmd-card-desc">{/* PHP echo removed */}</div>
    </div>
    {/* PHP code removed */}
  </div>

  <div style={{ textAlign: 'center', paddingBottom: '44px' }}>
    <a href="terminal" target="_blank" className="btn btn-success btn-lg btn-pulse">
      <svg style={{ width: '18px', height: '18px', marginRight: '8px', verticalAlign: 'text-top' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="m7 8 3 3-3 3"/><path d="M12 14h4"/></svg>
      Practice in Terminal
    </a>
  </div>
    </div>
</main>

{/*  Command Manual Modal  */}
<div className="modal-overlay" id="cmd-modal">
  <div className="cmd-modal-box">
    <div className="modal-head">
      <h2 className="modal-title" id="cmd-title" style={{ fontFamily: 'var(--font-code)', color: 'var(--secondary)' }}></h2>
      <button className="modal-close" onClick="closeModal('cmd-modal')">✕</button>
    </div>
    <div className="modal-body" id="cmd-body"></div>
    <div id="cmd-related" className="related"></div>
  </div>
</div>


{/* Script tags removed */}
{/* Script tags removed */}
</div></div>

    </>
  );
}
