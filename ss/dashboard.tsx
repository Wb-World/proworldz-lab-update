import React from 'react';

export default function Component() {
  return (
    <>
{/* DOCTYPE removed */}
<div className="html-wrapper">
<div className="head-wrapper">
<meta charSet="UTF-8" /><meta name="viewport" content="width=device-width,initial-scale=1" />
<title>Dashboard — EduPortal</title>
<meta name="description" content="Student learning analytics dashboard." />
<link rel="stylesheet" href="style.css" />
<style dangerouslySetInnerHTML={{ __html: `
.dash-wrap{padding:28px 36px;max-width:1300px}
.kpi-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;margin-bottom:24px}
.grade-letter{font-size:52px;font-weight:900;letter-spacing:-2px;line-height:1}
.ring-wrap{position:relative;display:inline-flex;align-items:center;justify-content:center}
.ring-pct{position:absolute;font-size:17px;font-weight:800;color:var(--text-white)}
.activity-card{padding:24px 26px}
.timeline{padding-top:8px}
.tl-item{display:flex;gap:14px;padding-bottom:18px;position:relative}
.tl-item:not(:last-child)::after{content:'';position:absolute;left:10px;top:22px;bottom:0;width:1px;background:var(--border)}
.tl-dot{width:20px;height:20px;border-radius:50%;background:rgba(108,99,255,.2);border:2px solid var(--primary);flex-shrink:0;position:relative;z-index:1;margin-top:3px}
.tl-dot::after{content:'';width:7px;height:7px;border-radius:50%;background:var(--primary);position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}
.tl-body{flex:1}
.tl-name{font-size:13px;font-weight:600;color:var(--text-primary)}
.tl-meta{font-size:12px;color:var(--text-muted)}
.empty-timeline{text-align:center;padding:28px;color:var(--text-muted);font-size:13px}

/* Wave Visualization */
.streak-card { position: relative; overflow: hidden; padding: 28px 36px; background: rgba(10,12,30,0.6) !important; border-color: rgba(108,99,255,0.2) !important; }
.wave-box { position: absolute; bottom: 0; left: 0; width: 100%; height: 70%; pointer-events: none; opacity: 0.35; z-index: 0; }
.wave { position: absolute; bottom: 0; left: 0; width: 200%; height: 100%; background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none"><path d="M0,30 C150,110 350,0 600,30 C850,60 1050,110 1200,30 L1200,120 L0,120 Z" fill="%236c63ff"/></svg>'); background-size: 50% 100%; animation: waveFlow 12s linear infinite; }
.wave:nth-child(2) { opacity: 0.5; height: 90%; animation: waveFlow 8s linear infinite reverse; background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none"><path d="M0,50 C150,120 350,10 600,50 C850,90 1050,120 1200,50 L1200,120 L0,120 Z" fill="%2300d4aa"/></svg>'); }
@keyframes waveFlow { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
.streak-content { position: relative; z-index: 1; display: flex; align-items: center; gap: 20px; width: 100%; }
` }} />
</div>
<div className="body-wrapper">
<div className="orb orb-1"></div><div className="orb orb-2"></div>
{/* PHP code removed */}
<main className="main">
  <div className="topbar" style={{ width: '100%' }}>
    <div className="topbar-content">
      <div className="topbar-left" style={{  }}>
        <h1>Welcome back, {/* PHP echo removed */} 👋</h1>
        <p>{/* PHP echo removed */}</p>
      </div>
      <div className="topbar-right">
        <div className="topbar-bell">
          <svg viewBox="0 0 24 24"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0"/></svg>
          <span className="topbar-bell-dot"></span>
        </div>
        <div className="topbar-avatar" title="Profile" onClick="location='profile'">{/* PHP echo removed */}</div>
      </div>
    </div>
  </div>

  <div className="content-wrap">
    <div className="dash-wrap">
    {/*  KPI Row  */}
    <div className="kpi-grid">
      <div className="kpi-card card" data-reveal="up" data-delay="1">
        <div className="kpi-card-icon kpi-icon-purple">
          <svg viewBox="0 0 24 24"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>
        </div>
        <div className="kpi-label">Total Tasks</div>
        <div className="kpi-value" data-count="20" id="kpi-total">0</div>
        <div className="kpi-trend">
          <svg viewBox="0 0 24 24" style={{ width: '13px', height: '13px', stroke: 'currentColor', fill: 'none', strokeWidth: '2.5' }}><polyline points="18 15 12 9 6 15"/></svg>
          20 available
        </div>
      </div>

      <div className="kpi-card card" data-reveal="up" data-delay="2">
        <div className="kpi-card-icon kpi-icon-blue">
          <svg viewBox="0 0 24 24"><path d="M12 2l2 7h7l-5.5 4 2 7L12 16l-5.5 4 2-7L3 9h7z"/></svg>
        </div>
        <div className="kpi-label">Python Progress</div>
        <div style={{ margin: '8px 0', display: 'flex', alignItems: 'center', gap: '14px' }}>
          <div className="ring-wrap" data-ring="0" data-ring-stat="python" data-r="38">
            <svg width="90" height="90" viewBox="0 0 90 90">
              <circle className="ring-bg" cx="45" cy="45" r="38"/>
              <circle className="ring-fill" cx="45" cy="45" r="38" stroke="var(--info)"
                style={{ strokeDasharray: '238.76', strokeDashoffset: '238.76', transformOrigin: 'center', transform: 'rotate(-90deg)' }}/>
            </svg>
            <div className="ring-pct" id="py-ring-pct">0%</div>
          </div>
          <div>
            <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Completed</div>
            <div style={{ fontSize: '22px', fontWeight: '800', color: 'var(--text-white)' }}><span data-stat-count-py>0</span>/10</div>
          </div>
        </div>
      </div>

      <div className="kpi-card card" data-reveal="up" data-delay="3">
        <div className="kpi-card-icon kpi-icon-green">
          <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
        </div>
        <div className="kpi-label">Linux Progress</div>
        <div style={{ margin: '8px 0', display: 'flex', alignItems: 'center', gap: '14px' }}>
          <div className="ring-wrap" data-ring="0" data-ring-stat="linux" data-r="38">
            <svg width="90" height="90" viewBox="0 0 90 90">
              <circle className="ring-bg" cx="45" cy="45" r="38"/>
              <circle className="ring-fill" cx="45" cy="45" r="38" stroke="var(--success)"
                style={{ strokeDasharray: '238.76', strokeDashoffset: '238.76', transformOrigin: 'center', transform: 'rotate(-90deg)' }}/>
            </svg>
            <div className="ring-pct" id="lx-ring-pct">0%</div>
          </div>
          <div>
            <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Completed</div>
            <div style={{ fontSize: '22px', fontWeight: '800', color: 'var(--text-white)' }}><span data-stat-count-lx>0</span>/10</div>
          </div>
        </div>
      </div>

      <div className="kpi-card card" data-reveal="up" data-delay="4" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <div className="kpi-card-icon kpi-icon-amber" style={{ margin: '0 auto 10px' }}>
          <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
        </div>
        <div className="kpi-label">Overall Grade</div>
        <div className="grade-letter" id="grade-letter" style={{ color: 'var(--warning)' }}>—</div>
        <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '4px' }} id="grade-sub">Complete tasks to earn</div>
      </div>
    </div>

    {/*  Activity Only (Full Width)  */}
    <div className="row-wrap" style={{ marginTop: '24px' }}>
      <div className="card activity-card" data-reveal="up" style={{ minHeight: '500px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
          <div style={{ fontSize: '18px', fontWeight: '700', color: 'var(--text-white)' }}>Recent Activity Tracking</div>
          <a href="tasks" style={{ fontSize: '13px', color: 'var(--primary-light)' }}>Browse Tasks →</a>
        </div>
        <div className="timeline" id="activity-timeline">
          <div className="empty-timeline">Start your journey to see your activity logs here.</div>
        </div>
      </div>
    </div>

    {/*  Streak with Wave Visualization  */}
    <div className="card streak-card" data-reveal="up" style={{ marginTop: '24px' }}>
      <div className="wave-box">
        <div className="wave"></div>
        <div className="wave"></div>
      </div>
      <div className="streak-content">
        <div style={{ fontSize: '42px', filter: 'drop-shadow(0 0 10px rgba(255,100,0,0.3))' }}>🔥</div>
        <div>
          <div style={{ fontSize: '16px', fontWeight: '800', color: 'var(--text-white)', textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>Daily Learning Momentum</div>
          <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)' }}>Your consistency is your superpower. Keep the wave going!</div>
        </div>
        <div style={{ marginLeft: 'auto', textAlign: 'right' }}>
          <div className="streak-num" id="streak-num" style={{ textShadow: '0 0 20px var(--primary)' }}>1</div>
          <div className="streak-label" style={{ color: 'var(--text-white)', opacity: '0.8' }}>day streak</div>
        </div>
      </div>
    </div>
    </div>
  </div>
</main>
{/* Script tags removed */}
{/* Script tags removed */}
</div></div>

    </>
  );
}
