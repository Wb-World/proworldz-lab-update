import React from 'react';

export default function Component() {
  return (
    <>
{/* DOCTYPE removed */}
<div className="html-wrapper">
<div className="head-wrapper">
<meta charSet="UTF-8" /><meta name="viewport" content="width=device-width,initial-scale=1" />
<title>Tasks — EduPortal</title>
<link rel="stylesheet" href="style.css" />
<style dangerouslySetInnerHTML={{ __html: `
.tasks-wrap{padding:28px 36px;max-width:940px}
.tasks-head{margin-bottom:28px}
.tasks-head h1{font-size:28px;font-weight:800;color:var(--text-white);margin-bottom:4px}
.tasks-head p{color:var(--text-muted);font-size:14px}
.tasks-tabs{margin-bottom:24px;display:flex;align-items:center;justify-content:space-between;gap:16px;flex-wrap:wrap}
.section-progress{display:flex;align-items:center;gap:12px;font-size:13px;color:var(--text-muted)}
.section-progress strong{color:var(--text-primary)}
.prog-mini{width:140px;height:6px;background:rgba(255,255,255,.06);border-radius:var(--r-full);overflow:hidden}
.prog-mini-fill{height:100%;border-radius:var(--r-full);width:0%;transition:width 1.1s cubic-bezier(.4,0,.2,1)}
` }} />
</div>
<div className="body-wrapper">
<div className="orb orb-1"></div>
{/* PHP code removed */}

<main className="main">
  <div className="topbar">
    <div className="topbar-content">
      <div className="topbar-left"><h1>Tasks</h1><p>Track your learning progress</p></div>
      <div className="topbar-right">
        <a href="profile" className="topbar-avatar">{/* PHP echo removed */}</a>
      </div>
    </div>
  </div>

  <div className="content-wrap">
    <div className="tasks-wrap" data-tabs-wrap>
    <div className="tasks-head">
      <h1>🚀 Learning Tasks</h1>
      <p>Select a task to enter the interactive environment and start practice.</p>
    </div>

    <div className="tasks-tabs">
      <div className="tabs">
        <button className="tab-btn active" data-tab="python">
          <svg viewBox="0 0 18 18" style={{ width: '15px', height: '15px', stroke: 'currentColor', fill: 'none', strokeWidth: '1.75' }}><path d="M9 1.5C6.38 1.5 5.25 2.63 5.25 3.75v1.5H9v.75H4.13C2.7 6 1.5 7.2 1.5 9s1.2 3 2.63 3H5.25V10.5C5.25 8.63 6.38 7.5 9 7.5s3.75 1.13 3.75 3V12c0 2.1-.9 3.75-3.75 3.75"/><circle cx="7.13" cy="3.75" r=".75"/></svg>
          Python Tasks
        </button>
        <button className="tab-btn" data-tab="linux">
          <svg viewBox="0 0 18 18" style={{ width: '15px', height: '15px', stroke: 'currentColor', fill: 'none', strokeWidth: '1.75' }}><rect x="2" y="3" width="14" height="10" rx="1"/><polyline points="2 13 9 8 16 13"/></svg>
          Linux Tasks
        </button>
      </div>
    </div>

    {/*  Python Tab  */}
    <div className="tab-content active" data-tab-content="python">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }} id="py-task-list">
        {/* PHP code removed */}
        <div className="task-card" data-id="{/* PHP echo removed */}" data-reveal="up" data-delay="{/* PHP echo removed */}">
          <div className="task-num">{/* PHP echo removed */}</div>
          <div className="task-body">
            <div className="task-title">{/* PHP echo removed */}</div>
            <div className="task-desc">{/* PHP echo removed */}</div>
            <div className="task-meta">
              <span className="badge {/* PHP echo removed */}">{/* PHP echo removed */}</span>
            </div>
          </div>
          <div className="task-actions">
            <button className="complete-btn" onClick="location='{/* PHP echo removed */}'">Enter Task</button>
          </div>
        </div>
        {/* PHP code removed */}
      </div>
    </div>

    {/*  Linux Tab  */}
    <div className="tab-content" data-tab-content="linux">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }} id="lx-task-list">
        {/* PHP code removed */}
        <div className="task-card" data-id="{/* PHP echo removed */}" data-reveal="up" data-delay="{/* PHP echo removed */}">
          <div className="task-num">{/* PHP echo removed */}</div>
          <div className="task-body">
            <div className="task-title">{/* PHP echo removed */}</div>
            <div className="task-desc">{/* PHP echo removed */}</div>
            <div className="task-meta">
              <span className="badge {/* PHP echo removed */}">{/* PHP echo removed */}</span>
            </div>
          </div>
          <div className="task-actions">
            <button className="complete-btn" onClick="location='{/* PHP echo removed */}'">Enter Task</button>
          </div>
        </div>
        {/* PHP code removed */}
      </div>
    </div>
    </div>
  </div>
</main>
{/* Script tags removed */}
</div></div>

    </>
  );
}
