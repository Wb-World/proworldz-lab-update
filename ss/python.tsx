import React from 'react';

export default function Component() {
  return (
    <>
{/* DOCTYPE removed */}
<div className="html-wrapper">
<div className="head-wrapper">
<meta charSet="UTF-8" /><meta name="viewport" content="width=device-width,initial-scale=1" />
<title>Python — EduPortal</title>
<meta name="description" content="Python programming documentation with interactive interpreter." />
<link rel="stylesheet" href="style.css" />
</div>
<div className="body-wrapper">
<div className="orb orb-1"></div>
{/* PHP code removed */}
<main className="main">
  <div className="topbar">
    <div className="topbar-content">
      <div className="topbar-left"><h1>Python</h1><p>Documentation &amp; interactive interpreter</p></div>
      <div className="topbar-right"><a href="profile" className="topbar-avatar">{/* PHP echo removed */}</a></div>
    </div>
  </div>

  <div className="content-wrap">
    <div className="py-hero">
    <h1>Python Environment<span className="cursor-blink"></span></h1>
    <p style={{ color: 'var(--text-muted)', fontSize: '15px' }}>Browse docs below, then jump into the live interpreter to practice.</p>
  </div>

  <div className="doc-wrap">
    {/* PHP code removed */}
    <div className="doc-card" data-reveal="up" data-delay="{/* PHP echo removed */}">
      <div className="doc-card-head {/* PHP echo removed */}" onClick="toggleDoc(this)">
        <div className="doc-card-icon" style={{ background: '{/* PHP echo removed */}' }}>{/* PHP echo removed */}</div>
        <div className="doc-card-title">{/* PHP echo removed */}</div>
        <span className="doc-card-arrow">▼</span>
      </div>
      <div className="doc-body {/* PHP echo removed */}">{/* PHP echo removed */}</div>
    </div>
    {/* PHP code removed */}
  </div>

  <div className="py-actions">
    <a href="python-learning" className="btn btn-primary btn-lg">Start Learning →</a>
    <span className="or-divider">or</span>
    <button className="btn btn-secondary btn-lg" onClick="openModal('interp-modal')">Open Interpreter &gt;_</button>
    </div>
  </div>
</main>

{/*  Professional Interpreter Modal  */}
<div className="modal-overlay" id="interp-modal">
  <div className="interp-box">
    {/*  Top Bar  */}
    <div className="interp-bar">
      <div className="terminal-dots">
        <span className="t-dot red" onClick="closeModal('interp-modal')"></span>
        <span className="t-dot yellow"></span>
        <span className="t-dot green" id="interp-max-btn"></span>
      </div>
      <div className="interp-bar-title">
        <svg viewBox="0 0 24 24" style={{ width: '16px', height: '16px', marginRight: '8px', verticalAlign: 'middle', fill: 'var(--primary-light)' }}><path d="M12 2C8.5 2 7 3.5 7 5v2h5v1H5.5C3.6 8 2 9.6 2 12s1.6 4 3.5 4H7v-2.5C7 11.5 8.5 10 12 10s5 1.5 5 3.5V17c0 2.8-1.2 5-5 5s-5-2.2-5-5"/></svg>
        main.py — Python 3.10
      </div>
      <button className="modal-close" onClick="closeModal('interp-modal')">✕</button>
    </div>

    {/*  Main Workspace  */}
    <div className="interp-main">
      {/*  Editor Side  */}
      <div className="interp-editor-pane">
        <div className="editor-toolbar">
          <button className="btn btn-primary btn-sm" id="interp-run-btn" style={{ padding: '4px 14px', fontSize: '12px' }}>▶ Run Code</button>
          <div style={{ width: '1px', height: '20px', background: 'rgba(255,255,255,0.1)' }}></div>
          <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Auto-save enabled</span>
        </div>
        <div className="editor-container">
          <div id="interp-line-nums">1</div>
          <div className="interp-backdrop" id="interp-backdrop"></div>
          <textarea id="interp-editor" spellcheck="false" oninput="updateEditor()"># Professional Python Environment
import math

def greet(name):
    print(f"Hello, {name}!")
    print(f"The square root of 16 is {math.sqrt(16)}")

greet("Student")</textarea>
        </div>
      </div>

      {/*  Console Side  */}
      <div className="interp-console-pane">
        <div className="console-header">
          <span>Output Console</span>
          <button onClick="document.getElementById('interp-output').innerHTML=''" style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer' }}>Clear</button>
        </div>
        <div id="interp-output">// Click Run to execute code...</div>
      </div>
    </div>
  </div>
</div>

{/* Script tags removed */}
{/* Script tags removed */}
</div></div>

    </>
  );
}
