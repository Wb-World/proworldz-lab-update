import React from 'react';

export default function Component() {
  return (
    <>
<div className="dashboard-nav-container anim-1">
    {/*  Profile Info for Mobile  */}
    <div className="mobile-profile-header">
        {/* PHP code removed */}
        <img src="{/* PHP code removed */}'" />
        <div className="mobile-profile-info">
            <div className="mobile-profile-name">{/* PHP code removed */}</div>
            <div className="mobile-profile-stats">
                <i className="fas fa-coins"></i> {/* PHP code removed */} EC
            </div>
        </div>
        <a href="logout" style={{ color: 'var(--destructive)', fontSize: '1.1rem' }}><i className="fas fa-power-off"></i></a>
    </div>
    
    <div className="dashboard-nav-scroll">
        <div className="dashboard-nav-wrapper">
        <a href="dashboard" className="nav-item {/* PHP code removed */} ripple-container">
            <i className="fas fa-th-large nav-icon"></i>
            <span>Dashboard</span>
        </a>
        <a href="lab" className="nav-item {/* PHP code removed */} ripple-container">
            <i className="fas fa-flask nav-icon"></i>
            <span>Laboratory</span>
        </a>
        <a href="owasp-lab" className="nav-item {/* PHP code removed */} ripple-container">
            <i className="fas fa-shield-halved nav-icon"></i>
            <span>OWASP Lab</span>
        </a>
        {/* PHP code removed */}
        <a href="vulnerable-saas-app" className="nav-item {/* PHP code removed */} ripple-container">
            <i className="fas fa-box-open nav-icon"></i>
            <span>SaaS App</span>
        </a>
        {/* PHP code removed */}
        <a href="tasks" className="nav-item {/* PHP code removed */} ripple-container">
            <i className="fas fa-tasks nav-icon"></i>
            <span>Tasks</span>
        </a>
        <a href="ourcourse" className="nav-item {/* PHP code removed */} ripple-container">
            <i className="fas fa-book nav-icon"></i>
            <span>Courses</span>
        </a>
        <a href="assignment" className="nav-item {/* PHP code removed */} ripple-container">
            <i className="fas fa-file-alt nav-icon"></i>
            <span>Projects</span>
        </a>
        <a href="leaderboard" className="nav-item {/* PHP code removed */} ripple-container">
            <i className="fas fa-medal nav-icon"></i>
            <span>Leaderboard</span>
        </a>
        <a href="teams" className="nav-item {/* PHP code removed */} ripple-container">
            <i className="fas fa-user-friends nav-icon"></i>
            <span>Teams</span>
        </a>
        <a href="tournament" className="nav-item {/* PHP code removed */} ripple-container">
            <i className="fas fa-trophy nav-icon"></i>
            <span>Tournament</span>
        </a>
        <a href="contactus" className="nav-item {/* PHP code removed */} ripple-container">
            <i className="fas fa-headset nav-icon"></i>
            <span>Support</span>
        </a>
        <a href="https://dragotool.shop/" className="nav-item ripple-container" target="_blank">
            <i className="fas fa-dragon nav-icon"></i>
            <span>Drago Tool</span>
        </a>
        <a href="eaglone_shop" className="nav-item {/* PHP code removed */} ripple-container">
            <i className="fas fa-store nav-icon"></i>
            <span>Shop</span>
        </a>
        {/* PHP code removed */}
        <a href="https://ctf-page.vercel.app/" className="nav-item ripple-container" target="_blank">
            <i className="fas fa-flag nav-icon"></i>
            <span>CTF Page</span>
        </a>
        {/* PHP code removed */}
        <a href="download" className="nav-item ripple-container">
            <i className="fas fa-laptop-code nav-icon"></i>
            <span>IDE</span>
        </a>
        <a href="logout" className="nav-item ripple-container" style={{ color: 'var(--destructive)' }}>
            <i className="fas fa-sign-out-alt nav-icon"></i>
            <span>Logout</span>
        </a>
    </div>
</div>
</div>

<aside className="desktop-sidebar">
    {/*  Profile Card  */}
    <div className="card anim-1">
        <div className="profile-card">
            <div className="avatar-ring">
                {/* PHP code removed */}
                <img src="{/* PHP code removed */}'" />
            </div>
            <div>
                <div className="profile-name">{/* PHP code removed */}</div>
                <div className="profile-role">{/* PHP code removed */}</div>
            </div>
            <div className="coins-badge">
                <i className="fas fa-coins"></i>
                <span id="coinDisplay">{/* PHP code removed */}</span> EC
            </div>
        </div>
    </div>

    {/*  Navigation Menu  */}
    <div className="card anim-2">
        <div style={{ padding: '1rem 0.75rem' }}>
            <div className="nav-label">Main Menu</div>
            <div className="nav-section">
                <a href="dashboard" className="nav-item">
                    <i className="fas fa-th-large nav-icon"></i>
                    <span>Dashboard</span>
                </a>
                <a href="lab" className="nav-item">
                    <i className="fas fa-flask nav-icon"></i>
                    <span>Laboratory</span>
                </a>
                {/* PHP code removed */}
                <a href="owasp-lab" className="nav-item">
                    <i className="fas fa-shield-halved nav-icon"></i>
                    <span>OWASP Lab</span>
                </a>
                <a href="vulnerable-saas-app" className="nav-item">
                    <i className="fas fa-box-open nav-icon"></i>
                    <span>vulnerable Saas app</span>
                </a>
                {/* PHP code removed */}
                <a href="tasks" className="nav-item">
                    <i className="fas fa-tasks nav-icon"></i>
                    <span>Tasks</span>
                </a>
                <a href="ourcourse" className="nav-item">
                    <i className="fas fa-book nav-icon"></i>
                    <span>Courses</span>
                </a>
                <a href="assignment" className="nav-item">
                    <i className="fas fa-file-alt nav-icon"></i>
                    <span>Projects</span>
                </a>
                <a href="leaderboard" className="nav-item">
                    <i className="fas fa-medal nav-icon"></i>
                    <span>Leaderboard</span>
                </a>
                <a href="teams" className="nav-item">
                    <i className="fas fa-user-friends nav-icon"></i>
                    <span>Teams</span>
                </a>
                <a href="tournament" className="nav-item">
                    <i className="fas fa-trophy nav-icon"></i>
                    <span>Tournament</span>
                </a>
            </div>

            <div className="nav-label" style={{ marginTop: '0.75rem' }}>Tools & Support</div>
            <div className="nav-section">
                <a href="contactus" className="nav-item">
                    <i className="fas fa-headset nav-icon"></i>
                    <span>Support</span>
                </a>
                <a href="https://dragotool.shop/" className="nav-item" target="_blank">
                    <i className="fas fa-dragon nav-icon"></i>
                    <span>Drago Tool</span>
                </a>
                <a href="eaglone_shop" className="nav-item">
                    <i className="fas fa-store nav-icon"></i>
                    <span>Shop</span>
                </a>
                {/* PHP code removed */}
                <a href="https://ctf-page.vercel.app/" className="nav-item" target="_blank">
                    <i className="fas fa-flag nav-icon"></i>
                    <span>CTF Page</span>
                </a>
                {/* PHP code removed */}
                <a href="download" className="nav-item">
                    <i className="fas fa-laptop-code nav-icon"></i>
                    <span>IDE</span>
                </a>
            </div>

            <div className="nav-label" style={{ marginTop: '0.75rem' }}>Account</div>
            <div className="nav-section">
                <a href="logout" className="nav-item">
                    <i className="fas fa-sign-out-alt nav-icon"></i>
                    <span>Logout</span>
                </a>
            </div>
        </div>
    </div>
</aside>

{/* Script tags removed */}

    </>
  );
}
