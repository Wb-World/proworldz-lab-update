import { useEffect } from 'react';
export default function Dashboard() {
  useEffect(() => {
    document.body.classList.add('dashboard-page');
    return () => document.body.classList.remove('dashboard-page');
  }, []);
  return (
    <div className="dashboard-container" style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: '1.5rem', padding: '1.5rem' }}>
      <div className="desktop-main" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <div className="welcome-header card anim-1">
          <div>
            <h1 className="welcome-title">Welcome back, <span>John Doe</span>!</h1>
            <p className="welcome-sub">Here's your learning progress for today.</p>
          </div>
          <div className="header-actions">
            <button className="notif-btn">
              <i className="fas fa-bell"></i>
              <span className="notif-dot"></span>
            </button>
          </div>
        </div>

        <div className="stats-grid anim-2" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
          <div className="stat-card purple">
            <div className="stat-label">Eagle Coins</div>
            <div className="stat-value purple">1,500</div>
            <div className="stat-change"><span className="pos">+100</span> since last login</div>
          </div>
          <div className="stat-card green">
            <div className="stat-label">Completed Tasks</div>
            <div className="stat-value green">12</div>
            <div className="stat-change"><span className="pos">+2</span> this week</div>
          </div>
          <div className="stat-card yellow">
            <div className="stat-label">Global Rank</div>
            <div className="stat-value yellow">#42</div>
            <div className="stat-change"><span className="pos">+5</span> positions up</div>
          </div>
        </div>

        <div className="card anim-3" style={{ padding: '1.5rem' }}>
          <h2 style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>Recent Assignments</h2>
          <div className="assign-item">
            <div className="assign-check done"><i className="fas fa-check"></i></div>
            <div className="assign-title done-text">Secure web server</div>
            <div className="assign-due">Completed</div>
          </div>
          <div className="assign-item">
            <div className="assign-check"></div>
            <div className="assign-title">Log security monitoring CLI tool</div>
            <div className="assign-due">Due in 14 days</div>
          </div>
        </div>
      </div>

      <div className="desktop-right-sidebar">
        <div className="card anim-4">
          <div className="section-header-inner">
            <span>Leaderboard</span>
            <a href="/leaderboard">View All</a>
          </div>
          <div style={{ padding: '1rem' }}>
            <p style={{ color: 'var(--muted-fg)', fontSize: '0.875rem' }}>Leaderboard loading...</p>
          </div>
        </div>
      </div>
    </div>
  );
}
