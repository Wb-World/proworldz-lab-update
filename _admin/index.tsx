import React, { useState } from 'react';

export default function Component() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    
    // Simulate network delay
    setTimeout(() => {
      setLoading(false);
      if (username === 'admin' && password === 'admin123') {
        setIsLoggedIn(true);
      } else {
        setError(true);
      }
    }, 1500);
  };

  const handleLogout = (e) => {
    e.preventDefault();
    setIsLoggedIn(false);
    setUsername('');
    setPassword('');
  };
  return (
    <>
{/* DOCTYPE removed */}
<div className="html-wrapper">
<div className="head-wrapper">
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>ProWorldz - Admin Dashboard</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
    <link rel="icon" type="image/png" href="../images/eaglone/p-eaglone.png" />
    <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        :root {
            --primary: #e5191e;
            --secondary: #ffffff;
            --accent: #ff2a2f;
            --text-primary: #ffffff;
            --text-secondary: #a0a0a0;
            --success: #ff2a2f;
            --danger: #e5191e;
            --shadow-sm: 0 2px 8px rgba(0,0,0,0.12);
            --shadow-md: 0 4px 16px rgba(0,0,0,0.15);
            --shadow-lg: 0 8px 32px rgba(0,0,0,0.2);
            --transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
            --font-body: 'Poppins', sans-serif;
        }

        body {
            background: linear-gradient(135deg, #000000 0%, #0f0f0f 100%);
            color: var(--text-primary);
            line-height: 1.6;
            min-height: 100vh;
            font-family: var(--font-body);
            overflow-x: hidden;
        }

        .login-wrapper {
            display: flex;
            min-height: 100vh;
            align-items: center;
            justify-content: center;
            padding: 20px;
            animation: fadeIn 0.6s ease;
        }

        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }

        .login-container {
            width: 100%;
            max-width: 400px;
            background: rgba(255, 255, 255, 0.02);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 20px;
            overflow: hidden;
            box-shadow: var(--shadow-lg);
            animation: slideUpFade 0.6s ease 0.1s both;
        }

        @keyframes slideUpFade {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .login-header {
            background: linear-gradient(135deg, #000000 0%, #080808 100%);
            padding: 40px 30px;
            text-align: center;
            border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .login-logo {
            font-size: 48px;
            margin-bottom: 20px;
            display: inline-block;
            background: linear-gradient(135deg, #ffffff 0%, #a0a0a0 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            animation: logoFloat 3s ease-in-out infinite;
        }

        @keyframes logoFloat {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-8px); }
        }

        .login-header h1 {
            font-size: 28px;
            font-weight: 700;
            margin-bottom: 8px;
        }

        .login-header p {
            color: var(--text-secondary);
            font-size: 13px;
            letter-spacing: 1px;
            text-transform: uppercase;
            font-weight: 500;
        }

        .login-body {
            padding: 40px 30px;
        }

        .form-group {
            margin-bottom: 20px;
        }

        .form-label {
            display: block;
            margin-bottom: 8px;
            font-size: 13px;
            font-weight: 600;
            letter-spacing: 0.5px;
            text-transform: uppercase;
            color: var(--text-primary);
        }

        .form-input {
            width: 100%;
            padding: 12px 16px;
            background: rgba(255, 255, 255, 0.04);
            border: 1px solid rgba(255, 255, 255, 0.12);
            border-radius: 10px;
            color: var(--text-primary);
            font-family: var(--font-body);
            font-size: 14px;
            transition: var(--transition);
            outline: none;
        }

        .form-input::placeholder {
            color: rgba(255, 255, 255, 0.4);
        }

        .form-input:focus {
            border-color: rgba(255, 255, 255, 0.3);
            background: rgba(255, 255, 255, 0.06);
            box-shadow: 0 0 0 3px rgba(139, 12, 16, 0.05);
        }

        .btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            padding: 12px 24px;
            border: none;
            border-radius: 10px;
            font-family: var(--font-body);
            font-size: 14px;
            font-weight: 600;
            cursor: pointer;
            transition: var(--transition);
            outline: none;
            text-decoration: none;
        }

        .btn-primary {
            width: 100%;
            background: linear-gradient(135deg, #ffffff 0%, #d0d0d0 100%);
            color: #000000;
            border: none;
        }

        .btn-primary:hover:not(:disabled) {
            background: linear-gradient(135deg, #ffffff 0%, #e0e0e0 100%);
            transform: translateY(-2px);
            box-shadow: var(--shadow-md);
        }

        .btn-primary:disabled {
            opacity: 0.6;
            cursor: not-allowed;
        }

        .btn-sm {
            padding: 8px 16px;
            font-size: 12px;
            width: auto;
        }

        .btn-danger {
            background: rgba(239, 68, 68, 0.1);
            color: #e5191e;
            border: 1px solid rgba(239, 68, 68, 0.3);
        }

        .btn-danger:hover {
            background: rgba(239, 68, 68, 0.2);
            border-color: rgba(239, 68, 68, 0.5);
        }

        .btn-success {
            background: rgba(16, 185, 129, 0.1);
            color: #ff2a2f;
            border: 1px solid rgba(16, 185, 129, 0.3);
        }

        .btn-success:hover {
            background: rgba(16, 185, 129, 0.2);
            border-color: rgba(16, 185, 129, 0.5);
        }

        .spinner {
            width: 16px;
            height: 16px;
            border: 2px solid rgba(0, 0, 0, 0.2);
            border-top-color: #000000;
            border-radius: 50%;
            animation: spin 0.8s linear infinite;
        }

        @keyframes spin {
            to { transform: rotate(360deg); }
        }

        .alert {
            padding: 12px 16px;
            border-radius: 10px;
            margin-bottom: 20px;
            display: flex;
            align-items: center;
            gap: 12px;
            font-size: 13px;
            animation: slideDownAlert 0.3s ease;
        }

        @keyframes slideDownAlert {
            from {
                opacity: 0;
                transform: translateY(-10px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .alert-danger {
            background: rgba(239, 68, 68, 0.1);
            border: 1px solid rgba(239, 68, 68, 0.3);
            color: #fecaca;
        }

        .alert-success {
            background: rgba(16, 185, 129, 0.1);
            border: 1px solid rgba(16, 185, 129, 0.3);
            color: #ff2a2f;
        }

        .hidden {
            display: none !important;
        }

        .dashboard-wrapper {
            display: flex;
            min-height: 100vh;
        }

        .sidebar {
            width: 280px;
            background: rgba(0, 0, 0, 0.6);
            border-right: 1px solid rgba(255, 255, 255, 0.08);
            padding: 30px 0;
            position: fixed;
            left: 0;
            top: 0;
            height: 100vh;
            overflow-y: auto;
            z-index: 1000;
        }

        .sidebar-logo {
            padding: 0 25px 30px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.08);
            margin-bottom: 30px;
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .sidebar-logo-icon {
            font-size: 28px;
            background: linear-gradient(135deg, #ffffff 0%, #a0a0a0 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .sidebar-logo-text h2 {
            font-size: 16px;
            font-weight: 700;
        }

        .sidebar-logo-text p {
            font-size: 12px;
            color: var(--text-secondary);
        }

        .nav-section {
            margin-bottom: 30px;
            padding: 0 15px;
        }

        .nav-section-title {
            font-size: 11px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 1px;
            color: rgba(255, 255, 255, 0.4);
            padding: 0 10px;
            margin-bottom: 12px;
        }

        .nav-link {
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 12px 16px;
            border-radius: 10px;
            color: var(--text-secondary);
            text-decoration: none;
            transition: var(--transition);
            font-size: 14px;
            font-weight: 500;
            position: relative;
            margin-bottom: 6px;
            cursor: pointer;
            border: none;
            background: none;
            width: 100%;
            text-align: left;
        }

        .nav-link:hover {
            color: var(--text-primary);
            background: rgba(255, 255, 255, 0.06);
        }

        .nav-link.active {
            color: var(--text-primary);
            background: rgba(139, 12, 16, 0.1);
        }

        .nav-link.active::before {
            content: '';
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
            width: 4px;
            height: 24px;
            background: linear-gradient(135deg, #ffffff 0%, #a0a0a0 100%);
            border-radius: 0 2px 2px 0;
        }

        .main-content {
            flex: 1;
            margin-left: 280px;
            padding: 40px;
            overflow-y: auto;
        }

        .top-bar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 40px;
            padding-bottom: 30px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .top-bar-title h1 {
            font-size: 28px;
            font-weight: 700;
            margin-bottom: 4px;
        }

        .top-bar-title p {
            font-size: 14px;
            color: var(--text-secondary);
        }

        .user-menu {
            display: flex;
            align-items: center;
            gap: 20px;
        }

        .user-info {
            text-align: right;
        }

        .user-name {
            font-size: 14px;
            font-weight: 600;
        }

        .user-role {
            font-size: 12px;
            color: var(--text-secondary);
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        .user-avatar {
            width: 44px;
            height: 44px;
            border-radius: 10px;
            background: linear-gradient(135deg, rgba(139, 12, 16, 0.1) 0%, rgba(139, 12, 16, 0.05) 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 600;
            border: 1px solid rgba(139, 12, 16, 0.1);
        }

        .content-section {
            display: none;
        }

        .content-section.active {
            display: block;
            animation: fadeIn 0.3s ease;
        }

        .section-title {
            font-size: 24px;
            font-weight: 700;
            margin-bottom: 30px;
            color: var(--text-primary);
        }

        .form-container {
            background: rgba(255, 255, 255, 0.02);
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 16px;
            padding: 30px;
            margin-bottom: 30px;
        }

        .form-row {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
            margin-bottom: 20px;
        }

        .form-group-full {
            margin-bottom: 20px;
        }

        .form-group-full textarea {
            min-height: 100px;
            font-family: var(--font-body);
            padding: 12px 16px;
        }

        .table-container {
            background: rgba(255, 255, 255, 0.02);
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 16px;
            padding: 30px;
            margin-bottom: 30px;
            overflow-x: auto;
        }

        .data-table {
            width: 100%;
            border-collapse: collapse;
        }

        .data-table thead {
            border-bottom: 2px solid rgba(139, 12, 16, 0.1);
        }

        .data-table th {
            padding: 16px;
            text-align: left;
            font-weight: 600;
            color: var(--text-secondary);
            font-size: 12px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        .data-table td {
            padding: 16px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.06);
            font-size: 14px;
        }

        .data-table tbody tr:hover {
            background: rgba(255, 255, 255, 0.03);
        }

        .modal {
            display: none;
            position: fixed;
            z-index: 2000;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.8);
            animation: fadeIn 0.3s ease;
        }

        .modal.show {
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .modal-content {
            background: rgba(0, 0, 0, 0.95);
            border: 1px solid rgba(139, 12, 16, 0.1);
            border-radius: 16px;
            padding: 40px;
            width: 90%;
            max-width: 600px;
            max-height: 90vh;
            overflow-y: auto;
        }

        .modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 30px;
            padding-bottom: 20px;
            border-bottom: 1px solid rgba(139, 12, 16, 0.1);
        }

        .modal-header h2 {
            font-size: 22px;
            font-weight: 700;
        }

        .close-btn {
            background: none;
            border: none;
            color: var(--text-primary);
            font-size: 24px;
            cursor: pointer;
            transition: var(--transition);
        }

        .close-btn:hover {
            color: var(--danger);
        }

        .info-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            margin-bottom: 20px;
        }

        .info-item {
            background: rgba(255, 255, 255, 0.03);
            padding: 15px;
            border-radius: 10px;
            border: 1px solid rgba(255, 255, 255, 0.06);
        }

        .info-label {
            font-size: 12px;
            color: var(--text-secondary);
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 8px;
            display: block;
        }

        .info-value {
            font-size: 15px;
            color: var(--text-primary);
            font-weight: 500;
            word-break: break-word;
        }

        .logout-btn {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            padding: 12px 20px;
            background: rgba(239, 68, 68, 0.1);
            color: #e5191e;
            border: 1px solid rgba(239, 68, 68, 0.3);
            border-radius: 10px;
            text-decoration: none;
            font-size: 14px;
            font-weight: 500;
            transition: var(--transition);
        }

        .logout-btn:hover {
            background: rgba(239, 68, 68, 0.2);
            border-color: rgba(239, 68, 68, 0.5);
        }

        .action-buttons {
            display: flex;
            gap: 10px;
            justify-content: flex-end;
        }

        .empty-state {
            text-align: center;
            padding: 60px 20px;
            color: var(--text-secondary);
        }

        .empty-state i {
            font-size: 48px;
            margin-bottom: 20px;
            opacity: 0.5;
        }

        @media (max-width: 768px) {
            .main-content {
                margin-left: 0;
                padding: 20px;
            }

            .sidebar {
                width: 250px;
                transform: translateX(-100%);
                transition: var(--transition);
            }

            .sidebar.show {
                transform: translateX(0);
            }

            .info-grid {
                grid-template-columns: 1fr;
            }

            .form-row {
                grid-template-columns: 1fr;
            }
        }
    ` }} />
</div>
<div className="body-wrapper">

{/* PHP code removed */}
{!isLoggedIn ? (
<div className="login-wrapper">
    <div className="login-container">
        <div className="login-header">
            <div className="login-logo">
                <i className="fas fa-graduation-cap"></i>
            </div>
            <h1>ProWorldz Admin</h1>
            <p>Student Management System</p>
        </div>
        <div className="login-body">
            <div id="login-error" className={`alert alert-danger ${error ? '' : 'hidden'}`}>
                <i className="fas fa-circle-exclamation"></i>
                <span id="error-text">Invalid credentials</span>
            </div>

            <div id="login-success" className="alert alert-success hidden">
                <i className="fas fa-check-circle"></i>
                <span id="success-text">Login successful!</span>
            </div>

            <form id="login-form" onSubmit={handleLogin}>
                <div className="form-group">
                    <label className="form-label" htmlFor="username">Username</label>
                    <input type="text" id="username" name="username" className="form-input" placeholder="Enter username" required value={username} onChange={e => setUsername(e.target.value)} />
                </div>

                <div className="form-group">
                    <label className="form-label" htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" className="form-input" placeholder="Enter password" required value={password} onChange={e => setPassword(e.target.value)} />
                </div>

                <button type="submit" className="btn btn-primary" id="login-button" disabled={loading}>
                    <span id="button-text">{loading ? 'Logging in...' : 'Login'}</span>
                    {loading && <div id="spinner" className="spinner"></div>}
                </button>
            </form>

        </div>
    </div>
</div>
) : (
<>
<div className="dashboard-wrapper">
    <div className="sidebar">
        <div className="sidebar-logo">
            <div className="sidebar-logo-icon">
                <i className="fas fa-graduation-cap"></i>
            </div>
            <div className="sidebar-logo-text">
                <h2>ProWorldz</h2>
                <p>Admin Panel</p>
            </div>
        </div>

        <nav className="nav-section">
            <div className="nav-section-title">Menu</div>
            
            {/* PHP code removed */}
                <button className="nav-link active" data-section="student-entry">
                    <i className="fas fa-user-plus"></i>
                    Student Entry
                </button>
                <button className="nav-link" data-section="student-management">
                    <i className="fas fa-users"></i>
                    Student Management
                </button>
                <button className="nav-link" data-section="admin-management">
                    <i className="fas fa-shield-alt"></i>
                    Admin Management
                </button>
            {/* PHP code removed */}
                <button className="nav-link active" data-section="student-entry">
                    <i className="fas fa-user-plus"></i>
                    Student Entry
                </button>
                <button className="nav-link" data-section="student-management">
                    <i className="fas fa-users"></i>
                    Student Management
                </button>
            {/* PHP code removed */}

            <div className="nav-section-title" style={{ marginTop: '30px' }}>Account</div>
            <a href="#" onClick={handleLogout} className="nav-link">
                <i className="fas fa-sign-out-alt"></i>
                Logout
            </a>
        </nav>
    </div>

    <div className="main-content">
        <div className="top-bar">
            <div className="top-bar-title">
                <h1 id="page-title">Dashboard</h1>
                <p id="page-subtitle">Manage your system</p>
            </div>
            <div className="user-menu">
                <div className="user-info">
                    <div className="user-name">Data Needed</div>
                    <div className="user-role">Data Needed</div>
                </div>
                <div className="user-avatar">Data Needed</div>
            </div>
        </div>

        <div id="student-entry" className="content-section active">
            <h2 className="section-title">Add New Student</h2>
            <div className="form-container">
                <form id="student-form" onSubmit="addStudent(event)">
                    <div className="form-row">
                        <div className="form-group">
                            <label className="form-label">Student ID</label>
                            <input type="text" name="id" className="form-input" placeholder="Enter student ID" required />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Full Name</label>
                            <input type="text" name="name" className="form-input" placeholder="Enter student name" required />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label className="form-label">Email</label>
                            <input type="email" name="email" className="form-input" placeholder="Enter email" required />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Phone</label>
                            <input type="text" name="phone" className="form-input" placeholder="Enter phone number" />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label className="form-label">Date of Birth</label>
                            <input type="date" name="dob" className="form-input" />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Gender</label>
                            <select name="gender" className="form-input">
                                <option value="Male" style={{ color: 'black' }}>Male</option>
                                <option value="Female" style={{ color: 'black' }}>Female</option>
                                <option value="Other" style={{ color: 'black' }}>Other</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label className="form-label">Course</label>
                            <select name="course" className="form-input">
                                <option value="" style={{ color: 'black' }}>Select Course</option>
                                <option value="Secure X" style={{ color: 'black' }}>Secure X</option>
                                <option value="AI Verse Web Labs" style={{ color: 'black' }}>AI Verse Web Labs</option>
                                <option value="Hunt Elite" style={{ color: 'black' }}>Hunt Elite</option>
                                <option value="Creative Craft" style={{ color: 'black' }}>Creative Craft</option>
                                <option value="Py Desk Systems" style={{ color: 'black' }}>Py Desk Systems</option>
                                <option value="Biz Dev" style={{ color: 'black' }}>Biz Dev</option>
                                <option value="Code Foundry" style={{ color: 'black' }}>Code Foundry</option>
                                <option value="Startup Gene Labs" style={{ color: 'black' }}>Startup Gene Labs</option>
                                <option value="CLI++ Systems" style={{ color: 'black' }}>CLI++ Systems</option>
                                <option value="APMAN" style={{ color: 'black' }}>APMAN</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label className="form-label">Eagle Coins</label>
                            <input type="number" name="eagle_coins" className="form-input" placeholder="0" value="0" />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label className="form-label">Mother Name</label>
                            <input type="text" name="mother_name" className="form-input" placeholder="Enter mother's name" />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Mother Phone</label>
                            <input type="text" name="mother_phone" className="form-input" placeholder="Enter mother's phone" />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label className="form-label">Father Name</label>
                            <input type="text" name="father_name" className="form-input" placeholder="Enter father's name" />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Father Phone</label>
                            <input type="text" name="father_phone" className="form-input" placeholder="Enter father's phone" />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label className="form-label">Access</label>
                            <select name="access" className="form-input" style={{ backgroundColor: '#000000', color: 'white' }}>
                                <option value="false">False</option>
                                <option value="true">True</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-group-full">
                        <label className="form-label">Address</label>
                        <textarea name="address" className="form-input" placeholder="Enter student address"></textarea>
                    </div>

                    <div className="action-buttons">
                        <button type="submit" className="btn btn-success btn-sm">
                            <i className="fas fa-plus"></i> Add Student
                        </button>
                    </div>
                </form>
            </div>
        </div>

        <div id="student-management" className="content-section">
            <h2 className="section-title">Student Management</h2>
            <div id="students-alert"></div>
            <div className="table-container">
                <table className="data-table" id="students-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Course</th>
                            <th>Eagle Coins</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody id="students-tbody">
                        <tr>
                            <td colSpan="7" style={{ textAlign: 'center', padding: '40px' }}>Loading...</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        {/* PHP code removed */}
        <div id="admin-management" className="content-section">
            <h2 className="section-title">Admin Management</h2>
            
            <div className="form-container">
                <h3 style={{ marginBottom: '20px', fontSize: '18px' }}>Add New Admin</h3>
                <form id="admin-form" onSubmit="addAdmin(event)">
                    <div className="form-row">
                        <div className="form-group">
                            <label className="form-label">Username</label>
                            <input type="text" name="username" className="form-input" placeholder="Enter username" required />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Password</label>
                            <input type="password" name="password" className="form-input" placeholder="Enter password" required />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label className="form-label">Role</label>
                            <select name="role" className="form-input" style={{ backgroundColor: '#000000' }}>
                                <option value="admin" style={{ color: 'white' }}>Admin</option>
                                <option value="root" style={{ color: 'white' }}>Root</option>
                            </select>
                        </div>
                    </div>

                    <div className="action-buttons">
                        <button type="submit" className="btn btn-success btn-sm">
                            <i className="fas fa-plus"></i> Add Admin
                        </button>
                    </div>
                </form>
            </div>

            <div id="admins-alert"></div>
            <div className="table-container">
                <table className="data-table" id="admins-table">
                    <thead>
                        <tr>
                            <th>Username</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody id="admins-tbody">
                        <tr>
                            <td colSpan="3" style={{ textAlign: 'center', padding: '40px' }}>Loading...</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        {/* PHP code removed */}
    </div>
</div>

<div id="student-modal" className="modal">
    <div className="modal-content">
        <div className="modal-header">
            <h2>Student Information</h2>
            <button className="close-btn" onClick="closeModal('student-modal')">×</button>
        </div>
        <div id="modal-body"></div>
        <div className="action-buttons" style={{ marginTop: '30px' }}>
            {/* PHP code removed */}
                <button className="btn btn-danger btn-sm" id="delete-btn" onClick="deleteStudent()">
                    <i className="fas fa-trash"></i> Delete Student
                </button>
            {/* PHP code removed */}
            {/* PHP code removed */}
                <button className="btn btn-success btn-sm" id="edit-btn" onClick="editStudent()">
                    <i className="fas fa-edit"></i> Edit Student
                </button>
            {/* PHP code removed */}
            <button className="btn btn-primary btn-sm" onClick="closeModal('student-modal')">Close</button>
        </div>
    </div>
</div>

<div id="edit-modal" className="modal">
    <div className="modal-content">
        <div className="modal-header">
            <h2>Edit Student</h2>
            <button className="close-btn" onClick="closeModal('edit-modal')">×</button>
        </div>
        <form id="edit-form" onSubmit="saveEditedStudent(event)">
            <div className="form-row">
                <div className="form-group">
                    <label className="form-label">Student ID</label>
                    <input type="text" name="id" className="form-input" readonly />
                </div>
                <div className="form-group">
                    <label className="form-label">Full Name</label>
                    <input type="text" name="name" className="form-input" required />
                </div>
            </div>

            <div className="form-row">
                <div className="form-group">
                    <label className="form-label">Email</label>
                    <input type="email" name="email" className="form-input" required />
                </div>
                <div className="form-group">
                    <label className="form-label">Phone</label>
                    <input type="text" name="phone" className="form-input" />
                </div>
            </div>

            <div className="form-row">
                <div className="form-group">
                    <label className="form-label">Date of Birth</label>
                    <input type="date" name="dob" className="form-input" />
                </div>
                <div className="form-group">
                    <label className="form-label">Gender</label>
                    <select name="gender" className="form-input">
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
            </div>

            <div className="form-row">
                <div className="form-group">
                    <label className="form-label">Course</label>
                    <input type="text" name="course" className="form-input" />
                </div>
                <div className="form-group">
                    <label className="form-label">Eagle Coins</label>
                    <input type="number" name="eagle_coins" className="form-input" />
                </div>
            </div>

            <div className="form-row">
                <div className="form-group">
                    <label className="form-label">Access</label>
                    <select name="access" className="form-input" style={{ backgroundColor: '#000000', color: 'white' }}>
                        <option value="false">False</option>
                        <option value="true">True</option>
                    </select>
                </div>
            </div>

            <div className="form-row">
                <div className="form-group">
                    <label className="form-label">Mother Name</label>
                    <input type="text" name="mother_name" className="form-input" />
                </div>
                <div className="form-group">
                    <label className="form-label">Mother Phone</label>
                    <input type="text" name="mother_phone" className="form-input" />
                </div>
            </div>

            <div className="form-row">
                <div className="form-group">
                    <label className="form-label">Father Name</label>
                    <input type="text" name="father_name" className="form-input" />
                </div>
                <div className="form-group">
                    <label className="form-label">Father Phone</label>
                    <input type="text" name="father_phone" className="form-input" />
                </div>
            </div>

            <div className="form-group-full">
                <label className="form-label">Address</label>
                <textarea name="address" className="form-input"></textarea>
            </div>

            <div className="action-buttons" style={{ marginTop: '30px' }}>
                <button type="submit" className="btn btn-success btn-sm">
                    <i className="fas fa-save"></i> Save Changes
                </button>
                <button type="button" className="btn btn-danger btn-sm" onClick="closeModal('edit-modal')">
                    Cancel
                </button>
            </div>
        </form>
    </div>
</div>

{/* Script tags removed */}

{/* PHP code removed */}
</>
)}
</div>
</div>
    </>
  );
}
