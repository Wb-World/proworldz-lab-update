import { useEffect, useState } from 'react';

export default function Dashboard() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    document.body.classList.add('dashboard-page');
    const cachedUser = localStorage.getItem('user');
    if (cachedUser) {
      setUser(JSON.parse(cachedUser));
    }
    return () => document.body.classList.remove('dashboard-page');
  }, []);

  const name = user ? user.name : 'Student';
  const coins = user ? (user.eagle_coins || 0) : 0;
  const completedCount = user ? (user.assigns_complete || 0) : 0;

  return (
    <div className="dashboard-container" style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: '1.5rem', padding: '1.5rem' }}>
      <div className="desktop-main" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <div className="welcome-header card anim-1">
          <div>
            <h1 className="welcome-title">Welcome back, <span>{name}</span>!</h1>
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
            <div className="stat-value purple">{coins.toLocaleString()}</div>
            <div className="stat-change"><span className="pos">EC</span> in your wallet</div>
          </div>
          <div className="stat-card green">
            <div className="stat-label">Completed Tasks</div>
            <div className="stat-value green">{completedCount}</div>
            <div className="stat-change">assignments complete</div>
          </div>
          <div className="stat-card yellow">
            <div className="stat-label">Course</div>
            <div className="stat-value yellow" style={{ fontSize: '1.5rem', height: '2.5rem', display: 'flex', alignItems: 'center' }}>
              {user?.course || 'Beginner'}
            </div>
            <div className="stat-change">enrolled class</div>
          </div>
        </div>

        <div className="card anim-3" style={{ padding: '1.5rem' }}>
          <h2 style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>Your Learning Overview</h2>
          <div className="assign-item">
            <div className="assign-check done"><i className="fas fa-check"></i></div>
            <div className="assign-title done-text">Welcome and Onboarding</div>
            <div className="assign-due">Completed</div>
          </div>
          <div className="assign-item">
            <div className="assign-check"><i className="fas fa-spinner"></i></div>
            <div className="assign-title">Interactive Python & Linux Practice</div>
            <div className="assign-due">Active Challenge</div>
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
