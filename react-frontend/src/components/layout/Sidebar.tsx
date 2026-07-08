import { NavLink } from 'react-router-dom';
import { type MouseEvent } from 'react';
import './Sidebar.css';

interface SidebarProps {
  userName?: string;
  userCoins?: number;
  course?: string;
  activeAvatarImage?: string;
}

export function Sidebar({ 
  userName = 'Guest', 
  userCoins = 0, 
  course = 'Member', 
  activeAvatarImage = '' 
}: SidebarProps) {
  const userInitials = userName ? userName.charAt(0).toUpperCase() : '?';

  const handleRipple = (e: MouseEvent<HTMLAnchorElement>) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const ripple = document.createElement('span');
    ripple.className = 'ripple';
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    el.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  };

  return (
    <>
      {/* Mobile Dashboard Nav Container */}
      <div className="dashboard-nav-container anim-1">
        <div className="sidebar-logo mobile-only" style={{ padding: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem', borderBottom: '1px solid var(--border)' }}>
            <img src="/eaglone.png" alt="ProWorldz Logo" style={{ width: '32px', height: '32px' }} loading="lazy" /> 
            <span style={{ fontSize: '1.25rem', fontWeight: 'bold', fontFamily: 'Rebels, sans-serif' }}>
                PRO<span style={{ color: '#ff2a2f' }}>WORLDZ</span>
            </span>
        </div>
        <div className="mobile-profile-header">
          <img 
            src={activeAvatarImage} 
            className="mobile-profile-avatar" 
            alt="Profile" 
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              e.currentTarget.parentElement!.textContent = userInitials;
            }} 
          />
          <div className="mobile-profile-info">
            <div className="mobile-profile-name">{userName}</div>
            <div className="mobile-profile-stats">
              <i className="fas fa-coins"></i> {userCoins.toLocaleString()} EC
            </div>
          </div>
          <NavLink to="/logout" style={{ color: 'var(--destructive)', fontSize: '1.1rem' }}>
            <i className="fas fa-power-off"></i>
          </NavLink>
        </div>
        
        <div className="dashboard-nav-scroll">
          <div className="dashboard-nav-wrapper">
            <NavLink to="/dashboard" className="nav-item ripple-container" onClick={handleRipple}>
              <i className="fas fa-th-large nav-icon"></i>
              <span>Dashboard</span>
            </NavLink>
            <NavLink to="/lab" className="nav-item ripple-container" onClick={handleRipple}>
              <i className="fas fa-flask nav-icon"></i>
              <span>Laboratory</span>
            </NavLink>
            <NavLink to="/owasp-lab" className="nav-item ripple-container" onClick={handleRipple}>
              <i className="fas fa-shield-halved nav-icon"></i>
              <span>OWASP Lab</span>
            </NavLink>
            {course.toLowerCase().replace(/[^a-z0-9]/gi, '') === 'securex' && (
              <NavLink to="/vulnerable-saas-app" className="nav-item ripple-container" onClick={handleRipple}>
                <i className="fas fa-box-open nav-icon"></i>
                <span>SaaS App</span>
              </NavLink>
            )}
            <NavLink to="/tasks" className="nav-item ripple-container" onClick={handleRipple}>
              <i className="fas fa-tasks nav-icon"></i>
              <span>Tasks</span>
            </NavLink>
            <NavLink to="/ourcourse" className="nav-item ripple-container" onClick={handleRipple}>
              <i className="fas fa-book nav-icon"></i>
              <span>Courses</span>
            </NavLink>
            <NavLink to="/assignment" className="nav-item ripple-container" onClick={handleRipple}>
              <i className="fas fa-file-alt nav-icon"></i>
              <span>Projects</span>
            </NavLink>
            <NavLink to="/leaderboard" className="nav-item ripple-container" onClick={handleRipple}>
              <i className="fas fa-medal nav-icon"></i>
              <span>Leaderboard</span>
            </NavLink>
            <NavLink to="/teams" className="nav-item ripple-container" onClick={handleRipple}>
              <i className="fas fa-user-friends nav-icon"></i>
              <span>Teams</span>
            </NavLink>
            <NavLink to="/tournament" className="nav-item ripple-container" onClick={handleRipple}>
              <i className="fas fa-trophy nav-icon"></i>
              <span>Tournament</span>
            </NavLink>
            <NavLink to="/contactus" className="nav-item ripple-container" onClick={handleRipple}>
              <i className="fas fa-headset nav-icon"></i>
              <span>Support</span>
            </NavLink>
            <a href="https://dragotool.shop/" className="nav-item ripple-container" target="_blank" rel="noreferrer" onClick={handleRipple}>
              <i className="fas fa-dragon nav-icon"></i>
              <span>Drago Tool</span>
            </a>
            <NavLink to="/eaglone_shop" className="nav-item ripple-container" onClick={handleRipple}>
              <i className="fas fa-store nav-icon"></i>
              <span>Shop</span>
            </NavLink>
            {course.toLowerCase().replace(/[^a-z0-9]/gi, '') === 'securex' && (
              <a href="https://ctf-page.vercel.app/" className="nav-item ripple-container" target="_blank" rel="noreferrer" onClick={handleRipple}>
                <i className="fas fa-flag nav-icon"></i>
                <span>CTF Page</span>
              </a>
            )}
            <NavLink to="/download" className="nav-item ripple-container" onClick={handleRipple}>
              <i className="fas fa-laptop-code nav-icon"></i>
              <span>IDE</span>
            </NavLink>
            <NavLink to="/logout" className="nav-item ripple-container" style={{ color: 'var(--destructive)' }} onClick={handleRipple}>
              <i className="fas fa-sign-out-alt nav-icon"></i>
              <span>Logout</span>
            </NavLink>
          </div>
        </div>
      </div>

      {/* Desktop Sidebar */}
      <aside className="desktop-sidebar">
        <div className="sidebar-logo" style={{ padding: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', borderBottom: '1px solid var(--border)' }}>
            <img src="/eaglone.png" alt="ProWorldz Logo" style={{ width: '32px', height: '32px' }} loading="lazy" /> 
            <span style={{ fontSize: '1.25rem', fontWeight: 'bold', fontFamily: 'Rebels, sans-serif' }}>
                PRO<span style={{ color: '#ff2a2f' }}>WORLDZ</span>
            </span>
        </div>
        <div className="card anim-1">
          <div className="profile-card">
            <div className="avatar-ring">
              <img 
                src={activeAvatarImage} 
                alt="Avatar" 
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement!.textContent = userInitials;
                }} 
              />
            </div>
            <div>
              <div className="profile-name">{userName}</div>
              <div className="profile-role">{course}</div>
            </div>
            <div className="coins-badge">
              <i className="fas fa-coins"></i>
              <span>{userCoins.toLocaleString()}</span> EC
            </div>
          </div>
        </div>

        <div className="card anim-2">
          <div style={{ padding: '1rem 0.75rem' }}>
            <div className="nav-label">Main Menu</div>
            <div className="nav-section">
              <NavLink to="/dashboard" className="nav-item" onClick={handleRipple}>
                <i className="fas fa-th-large nav-icon"></i>
                <span>Dashboard</span>
              </NavLink>
              <NavLink to="/lab" className="nav-item" onClick={handleRipple}>
                <i className="fas fa-flask nav-icon"></i>
                <span>Laboratory</span>
              </NavLink>
              {course.toLowerCase().replace(/[^a-z0-9]/gi, '') === 'securex' && (
                <>
                  <NavLink to="/owasp-lab" className="nav-item" onClick={handleRipple}>
                    <i className="fas fa-shield-halved nav-icon"></i>
                    <span>OWASP Lab</span>
                  </NavLink>
                  <NavLink to="/vulnerable-saas-app" className="nav-item" onClick={handleRipple}>
                    <i className="fas fa-box-open nav-icon"></i>
                    <span>Vulnerable SaaS app</span>
                  </NavLink>
                </>
              )}
              <NavLink to="/tasks" className="nav-item" onClick={handleRipple}>
                <i className="fas fa-tasks nav-icon"></i>
                <span>Tasks</span>
              </NavLink>
              <NavLink to="/ourcourse" className="nav-item" onClick={handleRipple}>
                <i className="fas fa-book nav-icon"></i>
                <span>Courses</span>
              </NavLink>
              <NavLink to="/assignment" className="nav-item" onClick={handleRipple}>
                <i className="fas fa-file-alt nav-icon"></i>
                <span>Projects</span>
              </NavLink>
              <NavLink to="/leaderboard" className="nav-item" onClick={handleRipple}>
                <i className="fas fa-medal nav-icon"></i>
                <span>Leaderboard</span>
              </NavLink>
              <NavLink to="/teams" className="nav-item" onClick={handleRipple}>
                <i className="fas fa-user-friends nav-icon"></i>
                <span>Teams</span>
              </NavLink>
              <NavLink to="/tournament" className="nav-item" onClick={handleRipple}>
                <i className="fas fa-trophy nav-icon"></i>
                <span>Tournament</span>
              </NavLink>
            </div>

            <div className="nav-label" style={{ marginTop: '0.75rem' }}>Tools & Support</div>
            <div className="nav-section">
              <NavLink to="/contactus" className="nav-item" onClick={handleRipple}>
                <i className="fas fa-headset nav-icon"></i>
                <span>Support</span>
              </NavLink>
              <a href="https://dragotool.shop/" className="nav-item" target="_blank" rel="noreferrer" onClick={handleRipple}>
                <i className="fas fa-dragon nav-icon"></i>
                <span>Drago Tool</span>
              </a>
              <NavLink to="/eaglone_shop" className="nav-item" onClick={handleRipple}>
                <i className="fas fa-store nav-icon"></i>
                <span>Shop</span>
              </NavLink>
              {course.toLowerCase().replace(/[^a-z0-9]/gi, '') === 'securex' && (
                <a href="https://ctf-page.vercel.app/" className="nav-item" target="_blank" rel="noreferrer" onClick={handleRipple}>
                  <i className="fas fa-flag nav-icon"></i>
                  <span>CTF Page</span>
                </a>
              )}
              <NavLink to="/download" className="nav-item" onClick={handleRipple}>
                <i className="fas fa-laptop-code nav-icon"></i>
                <span>IDE</span>
              </NavLink>
            </div>

            <div className="nav-label" style={{ marginTop: '0.75rem' }}>Account</div>
            <div className="nav-section">
              <NavLink to="/logout" className="nav-item" onClick={handleRipple}>
                <i className="fas fa-sign-out-alt nav-icon"></i>
                <span>Logout</span>
              </NavLink>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
