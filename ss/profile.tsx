import React from 'react';

export default function Component() {
  return (
    <>
{/* DOCTYPE removed */}
<div className="html-wrapper">
<div className="head-wrapper">
<meta charSet="UTF-8" /><meta name="viewport" content="width=device-width,initial-scale=1" />
<title>Profile — EduPortal</title>
<link rel="stylesheet" href="style.css" />
<style dangerouslySetInnerHTML={{ __html: `
.profile-main { padding: 40px; max-width: 900px; margin: 0 auto; animation: pageIn 0.5s ease both; }
.info-pcard { background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--r-xl); padding: 40px; backdrop-filter: blur(20px); box-shadow: var(--shadow-lg); }
.p-header { display: flex; align-items: center; gap: 32px; margin-bottom: 40px; padding-bottom: 32px; border-bottom: 1px solid var(--border); }
.p-avatar-large { width: 100px; height: 100px; border-radius: 50%; background: linear-gradient(135deg, var(--primary), var(--secondary)); display: flex; align-items: center; justify-content: center; font-size: 40px; box-shadow: 0 10px 30px var(--primary-glow); }
.p-title-wrap h2 { font-size: 28px; font-weight: 800; color: var(--text-white); margin-bottom: 4px; letter-spacing: -0.5px; }
.p-title-wrap p { color: var(--text-muted); font-size: 14px; }

.p-details-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 40px; }
.p-detail-item { background: rgba(255,255,255,0.02); padding: 18px 22px; border-radius: var(--r-md); border: 1px solid var(--border); }
.p-detail-label { font-size: 11px; font-weight: 700; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 6px; }
.p-detail-value { font-size: 15px; font-weight: 600; color: var(--text-white); }

.edit-actions { display: flex; gap: 12px; }

/* Edit Modal */
#edit-modal .modal-box { max-width: 460px; padding: 28px; }
.form-group { margin-bottom: 18px; }
.form-label { display: block; font-size: 13px; font-weight: 600; color: var(--text-muted); margin-bottom: 8px; }
.form-input { width: 100%; background: rgba(255,255,255,0.05); border: 1.5px solid var(--border); padding: 12px 14px; border-radius: var(--r-md); color: #fff; outline: none; transition: all var(--t-norm); font-family: var(--font-ui); }
.form-input:focus { border-color: var(--primary); background: rgba(255,255,255,0.08); }
` }} />
</div>
<div className="body-wrapper">
<div className="orb orb-1"></div><div className="orb orb-2"></div>
{/* PHP code removed */}
<main className="main">
  <div className="topbar">
    <div className="topbar-content">
      <div className="topbar-left"><h1>Profile Settings</h1><p>Update your personal information</p></div>
    </div>
  </div>

  <div className="profile-main">
    <div className="info-pcard" style={{ marginTop: '10cap' }}>
      <div className="p-header">
        <div className="p-avatar-large">👨‍💻</div>
        <div className="p-title-wrap">
          <h2 id="disp-name">{/* PHP echo removed */}</h2>
          <p id="disp-title">Computer Science & Engineering Student</p>
        </div>
      </div>

      <div className="p-details-grid">
        <div className="p-detail-item">
          <div className="p-detail-label">Full Name</div>
          <div className="p-detail-value" id="val-name">{/* PHP echo removed */}</div>
        </div>
        <div className="p-detail-item">
          <div className="p-detail-label">Student ID</div>
          <div className="p-detail-value">STU-2024-XP91</div>
        </div>
        <div className="p-detail-item">
          <div className="p-detail-label">Email Address</div>
          <div className="p-detail-value">alex.johnson@eduportal.com</div>
        </div>
        <div className="p-detail-item">
          <div className="p-detail-label">Primary Path</div>
          <div className="p-detail-value">Full-Stack Development</div>
        </div>
      </div>

      <div className="edit-actions">
        <button className="btn btn-primary" onClick="openModal('edit-modal')">Edit Profile</button>
        <button className="btn btn-secondary" onClick="showToast('Password reset sent to email','info')">Reset Password</button>
      </div>
    </div>
  </div>
</main>

<div className="modal-overlay" id="edit-modal">
  <div className="modal-box">
    <div className="modal-head">
      <h2 className="modal-title">Update Information</h2>
      <button className="modal-close" onClick="closeModal('edit-modal')">✕</button>
    </div>
    <div className="modal-body">
      <div className="form-group">
        <label className="form-label">Display Name</label>
        <input type="text" className="form-input" defaultValue="" id="edit-name" />
      </div>
      <div className="form-group">
        <label className="form-label">Professional Title</label>
        <input type="text" className="form-input" value="Computer Science & Engineering Student" id="edit-title" />
      </div>
      <button className="btn btn-primary" style={{ width: '100%', marginTop: '10px' }} onClick="saveProfile()">Apply Changes</button>
    </div>
  </div>
</div>

{/* Script tags removed */}
{/* Script tags removed */}
</div></div>

    </>
  );
}
