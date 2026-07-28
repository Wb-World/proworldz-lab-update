import React from 'react';

export default function Component() {
  return (
    <>
{/* DOCTYPE removed */}
<div className="html-wrapper">
<div className="head-wrapper">
<meta charSet="UTF-8" /><meta name="viewport" content="width=device-width,initial-scale=1" />
<title>Python Learning — EduPortal</title>
<link rel="stylesheet" href="style.css" />
<style dangerouslySetInnerHTML={{ __html: `
.search-sticky{position:sticky;top:0;z-index:200;background:rgba(10,10,20,.9);backdrop-filter:blur(16px);padding:20px 36px;border-bottom:1px solid var(--border)}
.concepts-grid{display:grid;grid-template-columns:repeat(auto-fill, minmax(300px, 1fr));gap:20px;padding:28px 36px;max-width:1100px;margin:0 auto}
.concept-card{background:var(--bg-card);border:1px solid var(--border);border-radius:var(--r-xl);padding:26px;transition:all var(--t-norm);cursor:pointer;position:relative;overflow:hidden}
.concept-card:hover{border-color:var(--primary);transform:translateY(-4px);box-shadow:var(--shadow-xl)}
.concept-icon{margin-bottom:14px; color: var(--primary-light)}
.concept-icon svg{width:28px;height:28px}
.concept-title{font-size:17px;font-weight:700;color:var(--text-white);margin-bottom:8px;text-transform:capitalize}
.concept-desc{font-size:13px;color:var(--text-muted);line-height:1.65;margin-bottom:18px}
.read-more{font-size:12px;font-weight:700;color:var(--primary-light);background:none;border:none;cursor:pointer;padding:0;font-family:var(--font-ui);display:flex;align-items:center;gap:4px}
.read-more:hover{color:var(--primary)}
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
          <svg style={{ width: '24px', height: '24px', color: 'var(--primary-light)' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
          Resource Library
        </h1>
        <p style={{ paddingLeft: '39px' }}>Python built-in modules & functional references</p>
      </div>
      <div className="topbar-right"><a href="profile" className="topbar-avatar">{/* PHP echo removed */}</a></div>
    </div>
  </div>

  <div className="content-wrap">
    <div className="search-sticky">
      <div className="search-wrap" style={{ maxWidth: '580px', margin: '0 auto' }}>
        <span className="s-icon"><svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg></span>
        <input type="text" id="py-search" className="search-input" placeholder="Search built-ins (e.g. print, len) or modules (e.g. math)..." />
        <button id="py-search-btn" className="btn btn-primary btn-sm" style={{ position: 'absolute', right: '6px', top: '50%', transform: 'translateY(-50%)' }}>Search</button>
      </div>
    </div>

    <div className="concepts-grid">
      {/* PHP code removed */}
      <div className="concept-card" data-reveal="up" data-delay="{/* PHP echo removed */}s" onClick="openModuleDocs('{/* PHP echo removed */}')">
        <div className="concept-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{/* PHP echo removed */}</svg></div>
        <div className="concept-title">{/* PHP echo removed */}</div>
        <div className="concept-desc">{/* PHP echo removed */}</div>
        <button className="read-more">Learn Module →</button>
      </div>
      {/* PHP code removed */}
    </div>
  </div>
</main>

<div className="modal-overlay" id="fn-modal">
  <div className="fn-modal-box">
    <div className="modal-head">
      <h2 className="modal-title" id="fn-modal-title">Documentation</h2>
      <button className="modal-close" onClick="closeModal('fn-modal')" aria-label="Close">✕</button>
    </div>
    <div className="modal-body" id="fn-modal-body"></div>
  </div>
</div>

{/* Script tags removed */}
</div></div>

    </>
  );
}
