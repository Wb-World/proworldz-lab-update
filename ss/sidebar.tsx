import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../react-frontend/src/components/layout/Sidebar.css';

export default function Sidebar() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <>
<div className="dashboard-nav-container anim-1">
    {/*  Profile Info for Mobile  */}
    <div className="mobile-profile-header">
        <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>{user?.name?.charAt(0) || 'U'}</div>
        <div className="mobile-profile-info">
            <div className="mobile-profile-name">{user?.name || 'Student'}</div>
            <div className="mobile-profile-stats">
                <i className="fas fa-coins"></i> {user?.eagle_coins || 0} EC
            </div>
        </div>
        <a href="logout" style={{ color: 'var(--destructive)', fontSize: '1.1rem' }}><i className="fas fa-power-off"></i></a>
    </div>
    
    <div className="dashboard-nav-scroll">
        <div className="dashboard-nav-wrapper">
        <a href="/ss/dashboard" className="nav-item ripple-container">
            <i className="fas fa-th-large nav-icon"></i>
            <span>Dashboard</span>
        </a>
        <a href="/ss/lab" className="nav-item ripple-container">
            <i className="fas fa-flask nav-icon"></i>
            <span>Laboratory</span>
        </a>
        <a href="/ss/owasp-lab" className="nav-item ripple-container">
            <i className="fas fa-shield-halved nav-icon"></i>
            <span>OWASP Lab</span>
        </a>
        <a href="/ss/vulnerable-saas-app" className="nav-item ripple-container">
            <i className="fas fa-box-open nav-icon"></i>
            <span>SaaS App</span>
        </a>
        <a href="/ss/tasks" className="nav-item ripple-container">
            <i className="fas fa-tasks nav-icon"></i>
            <span>Tasks</span>
        </a>
        <a href="/ss/ourcourse" className="nav-item ripple-container">
            <i className="fas fa-book nav-icon"></i>
            <span>Courses</span>
        </a>
        <a href="/ss/assignment" className="nav-item ripple-container">
            <i className="fas fa-file-alt nav-icon"></i>
            <span>Projects</span>
        </a>
        <a href="/ss/leaderboard" className="nav-item ripple-container">
            <i className="fas fa-medal nav-icon"></i>
            <span>Leaderboard</span>
        </a>
        <a href="/ss/teams" className="nav-item ripple-container">
            <i className="fas fa-user-friends nav-icon"></i>
            <span>Teams</span>
        </a>
        <a href="/ss/tournament" className="nav-item ripple-container">
            <i className="fas fa-trophy nav-icon"></i>
            <span>Tournament</span>
        </a>
        <a href="/ss/contactus" className="nav-item ripple-container">
            <i className="fas fa-headset nav-icon"></i>
            <span>Support</span>
        </a>
        <a href="https://dragotool.shop/" className="nav-item ripple-container" target="_blank">
            <i className="fas fa-dragon nav-icon"></i>
            <span>Drago Tool</span>
        </a>
        <a href="/ss/eaglone_shop" className="nav-item ripple-container">
            <i className="fas fa-store nav-icon"></i>
            <span>Shop</span>
        </a>
        <a href="https://ctf-page.vercel.app/" className="nav-item ripple-container" target="_blank">
            <i className="fas fa-flag nav-icon"></i>
            <span>CTF Page</span>
        </a>
        <a href="/ss/download" className="nav-item ripple-container">
            <i className="fas fa-laptop-code nav-icon"></i>
            <span>IDE</span>
        </a>
        <a href="/login" className="nav-item ripple-container" style={{ color: 'var(--destructive)' }}>
            <i className="fas fa-sign-out-alt nav-icon"></i>
            <span>Logout</span>
        </a>
    </div>
</div>
</div>

<aside className="desktop-sidebar">
    {/*  Profile Card  */}
    <div className="card anim-1" style={{ background: 'transparent', border: 'none', boxShadow: 'none' }}>
        <div className="profile-card" style={{ padding: '0', paddingTop: '1rem' }}>
            <div className="avatar-ring" style={{ width: '100px', height: '100px', background: 'transparent', animation: 'none', marginBottom: '0.5rem' }}>
                <img src="/eaglone.png" alt="Avatar" style={{ width: '100%', height: '100%', borderRadius: '50%', border: '2px solid var(--primary)', objectFit: 'cover', background: 'var(--primary)' }} />
            </div>
            <div>
                <div className="profile-name" style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{user?.name || 'Mohamed'}</div>
                <div className="profile-role" style={{ color: 'var(--muted-fg)', letterSpacing: '2px', fontSize: '0.75rem', marginTop: '0.2rem' }}>{user?.role || 'SECURE X'}</div>
            </div>
            <div className="coins-badge" style={{ background: 'transparent', border: '1px solid rgba(245, 158, 11, 0.5)', borderRadius: '20px', padding: '0.4rem 1.2rem', marginTop: '0.5rem' }}>
                <i className="fas fa-coins" style={{ color: 'var(--warning)', animation: 'none' }}></i>
                <span id="coinDisplay" style={{ color: 'var(--warning)', fontWeight: 'bold' }}>{user?.eagle_coins || 200}</span> <span style={{ color: 'var(--warning)', fontWeight: 'bold' }}>EC</span>
            </div>
        </div>
    </div>

    {/*  Navigation Menu  */}
    <div className="card anim-2" style={{ background: 'transparent', border: 'none', boxShadow: 'none' }}>
        <div style={{ padding: '1rem 0' }}>
            <div className="nav-label" style={{ paddingLeft: '0.75rem' }}>Main Menu</div>
            <div className="nav-section" style={{ padding: '0' }}>
                <a href="/ss/dashboard" className="nav-item active" style={{ background: 'var(--primary)', color: '#fff' }}>
                    <i className="fas fa-th-large nav-icon"></i>
                    <span>Dashboard</span>
                </a>
                <a href="/ss/lab" className="nav-item">
                    <i className="fas fa-flask nav-icon"></i>
                    <span>Laboratory</span>
                </a>
                <a href="/ss/owasp-lab" className="nav-item">
                    <i className="fas fa-shield-halved nav-icon"></i>
                    <span>OWASP Lab</span>
                </a>
                <a href="/ss/vulnerable-saas-app" className="nav-item">
                    <i className="fas fa-box-open nav-icon"></i>
                    <span>SaaS App</span>
                </a>
                <a href="/ss/tasks" className="nav-item">
                    <i className="fas fa-tasks nav-icon"></i>
                    <span>Tasks</span>
                </a>
                <a href="/ss/ourcourse" className="nav-item">
                    <i className="fas fa-book nav-icon"></i>
                    <span>Courses</span>
                </a>
                <a href="/ss/assignment" className="nav-item">
                    <i className="fas fa-file-alt nav-icon"></i>
                    <span>Projects</span>
                </a>
                <a href="/ss/leaderboard" className="nav-item">
                    <i className="fas fa-medal nav-icon"></i>
                    <span>Leaderboard</span>
                </a>
                <a href="/ss/teams" className="nav-item">
                    <i className="fas fa-user-friends nav-icon"></i>
                    <span>Teams</span>
                </a>
                <a href="/ss/tournament" className="nav-item">
                    <i className="fas fa-trophy nav-icon"></i>
                    <span>Tournament</span>
                </a>
            </div>

            <div className="nav-label" style={{ marginTop: '0.75rem' }}>Tools & Support</div>
            <div className="nav-section">
                <a href="/ss/contactus" className="nav-item">
                    <i className="fas fa-headset nav-icon"></i>
                    <span>Support</span>
                </a>
                <a href="https://dragotool.shop/" className="nav-item" target="_blank">
                    <i className="fas fa-dragon nav-icon"></i>
                    <span>Drago Tool</span>
                </a>
                <a href="/ss/eaglone_shop" className="nav-item">
                    <i className="fas fa-store nav-icon"></i>
                    <span>Shop</span>
                </a>
                <a href="https://ctf-page.vercel.app/" className="nav-item" target="_blank">
                    <i className="fas fa-flag nav-icon"></i>
                    <span>CTF Page</span>
                </a>
                <a href="/ss/download" className="nav-item">
                    <i className="fas fa-laptop-code nav-icon"></i>
                    <span>IDE</span>
                </a>
            </div>

            <div className="nav-label" style={{ marginTop: '0.75rem' }}>Account</div>
            <div className="nav-section">
                <a href="/login" className="nav-item">
                    <i className="fas fa-sign-out-alt nav-icon"></i>
                    <span>Logout</span>
                </a>
            </div>
        </div>
    </div>
</aside>
    </>
  );
}
