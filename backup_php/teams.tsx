import React from 'react';

export default function Component() {
  return (
    <>
{/* DOCTYPE removed */}
<div className="html-wrapper">
<div className="head-wrapper">
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Teams - Proworldz</title>
    <link rel="icon" type="image/webp" href="image.png" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />
{/* Script tags removed */}
<style dangerouslySetInnerHTML={{ __html: `
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            border-color: rgba(229, 231, 235, 0.3);
            outline-color: rgba(156, 163, 175, 0.5);
        }

        body {
            font-family: 'Roboto Mono', monospace;
            background-color: #000000;
            color: #ffffff;
            -webkit-font-smoothing: antialiased;
            overflow-x: hidden;
        }

        :root {
            --radius: 0.625rem;
            --background: #000000;
            --foreground: #ffffff;
            --card: #080808;
            --primary: #ff2a2f; /* Professional Blue */
            --sidebar: #080808;
            --sidebar-foreground: #ffffff;
            --sidebar-accent: rgba(248, 250, 252, 0.05);
            --sidebar-primary: #ff2a2f;
            --border: rgba(139, 12, 16, 0.1);
            --muted-foreground: #a0a0a0;
            --success: #ff2a2f;
            --gap: 1.5rem;
            --sides: 1.5rem;
        }

        #loader-wrapper {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: #000000;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            z-index: 99999;
            transition: opacity 0.5s ease, visibility 0.5s;
        }

        #loader {
            width: 50px;
            height: 50px;
            border: 3px solid rgba(139, 92, 246, 0.1);
            border-top-color: #ff2a2f;
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin-bottom: 20px;
        }

        #loader-text {
            font-family: 'Roboto Mono', monospace;
            font-size: 0.75rem;
            color: #ff2a2f;
            letter-spacing: 0.2em;
            animation: pulse-loader 1.5s infinite;
        }

        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes pulse-loader { 0%, 100% { opacity: 0.5; } 50% { opacity: 1; } }

        body.loaded #loader-wrapper {
            opacity: 0;
            visibility: hidden;
        }

        
        
        
        

        .desktop-container {
            display: grid;
            grid-template-columns: 280px 1fr;
            gap: var(--gap, 1.5rem);
            min-height: 100vh;
            padding: var(--sides, 1.5rem);
            background-color: var(--background);
        }

        
        

        .card {
            background-color: var(--card);
            border-radius: var(--radius);
            border: 1px solid var(--border);
            overflow: hidden;
            transition: all 0.3s ease;
        }

        .p-4 { padding: 1rem; }
        .p-3 { padding: 0.75rem; }
        .flex { display: flex; }
        .items-center { align-items: center; }
        .gap-3 { gap: 0.75rem; }
        .size-12 { width: 3rem; height: 3rem; }
        .flex-1 { flex: 1; }
        .text-2xl { font-size: 1.5rem; }
        .text-xs { font-size: 0.75rem; }
        .uppercase { text-transform: uppercase; }
        .text-muted-foreground { color: var(--muted-foreground); }
        .space-y-1 > * + * { margin-top: 0.25rem; }

        

        

        

        

        .desktop-main {
            display: flex;
            flex-direction: column;
            gap: var(--gap);
        }

        .header-card {
            padding: 1.5rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .search-container {
            position: relative;
            max-width: 400px;
            width: 100%;
        }

        .search-input {
            width: 100%;
            background-color: rgba(139, 12, 16, 0.05);
            border: 1px solid var(--border);
            border-radius: calc(var(--radius) - 2px);
            padding: 0.75rem 1rem 0.75rem 2.5rem;
            color: white;
            font-family: inherit;
            outline: none;
            transition: border-color 0.2s;
        }

        .search-input:focus {
            border-color: var(--primary);
        }

        .search-icon {
            position: absolute;
            left: 0.875rem;
            top: 50%;
            transform: translateY(-50%);
            color: var(--muted-foreground);
            font-size: 0.875rem;
        }

        .create-btn {
            background: var(--primary);
            color: white;
            border: none;
            padding: 0.75rem 1.5rem;
            border-radius: calc(var(--radius) - 2px);
            font-weight: 700;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            transition: transform 0.2s;
            text-transform: uppercase;
            font-size: 0.8rem;
        }

        .create-btn:hover {
            transform: scale(1.05);
            filter: brightness(1.1);
        }

        .form-group {
            margin-bottom: 1rem;
        }

        .form-group label {
            display: block;
            font-size: 0.75rem;
            color: var(--muted-foreground);
            margin-bottom: 0.5rem;
            text-transform: uppercase;
            font-weight: 700;
        }

        .form-input {
            width: 100%;
            background: #000000;
            border: 1px solid var(--border);
            padding: 0.75rem;
            border-radius: 4px;
            color: white;
            font-family: inherit;
            appearance: none;
            cursor: pointer;
        }

        select.form-input option {
            background: #080808;
            color: white;
            padding: 10px;
        }

        .leader-modal {
            max-width: 900px;
        }

        .stats-table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 1rem;
        }

        .stats-table th {
            text-align: left;
            font-size: 0.75rem;
            text-transform: uppercase;
            color: var(--muted-foreground);
            padding: 1rem;
            border-bottom: 2px solid var(--border);
        }

        .stats-table td {
            padding: 1rem;
            border-bottom: 1px solid rgba(255,255,255,0.05);
        }

        .coin-amount {
            color: #8b0c10;
            font-weight: bold;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        .members-picker {
            border: 1px solid var(--border);
            border-radius: 4px;
            max-height: 200px;
            overflow-y: auto;
            background: rgba(255,255,255,0.02);
            padding: 0.5rem;
        }

        .picker-item {
            padding: 0.5rem;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            cursor: pointer;
            border-bottom: 1px solid var(--border);
        }

        .picker-item:hover {
            background: rgba(255,255,255,0.05);
        }

        .picker-item input {
            cursor: pointer;
        }

        .alert {
            padding: 1rem;
            border-radius: 4px;
            margin-bottom: 1.5rem;
            font-size: 0.875rem;
        }

        .alert-success { background: rgba(16, 185, 129, 0.1); border: 1px solid var(--success); color: var(--success); }
        .alert-error { background: rgba(239, 68, 68, 0.1); border: 1px solid #ff2a2f; color: #ff2a2f; }

        .create-modal-content {
            max-width: 500px;
        }

        .teams-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 1.5rem;
        }

        .team-card {
            cursor: pointer;
            position: relative;
            overflow: hidden;
        }

        .team-card:hover {
            transform: translateY(-4px);
            border-color: var(--primary);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        .team-profile {
            height: 120px;
            background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(16, 185, 129, 0.1));
            display: flex;
            align-items: center;
            justify-content: center;
            border-bottom: 1px solid var(--border);
        }

        .team-profile img {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            object-fit: cover;
            border: 2px solid var(--primary);
        }

        .team-info {
            padding: 1rem;
        }

        .team-name {
            font-size: 1.125rem;
            font-weight: 700;
            margin-bottom: 0.5rem;
            color: white;
        }

        .team-meta {
            display: flex;
            justify-content: space-between;
            font-size: 0.75rem;
            color: var(--muted-foreground);
        }

        .section-header {
            display: flex;
            align-items: center;
            gap: 1rem;
            margin: 2rem 0 1rem 0;
            padding-bottom: 0.5rem;
            border-bottom: 1px solid var(--border);
        }

        .section-header h2 {
            font-size: 1rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            color: var(--primary);
        }

        .section-header .line {
            flex: 1;
            height: 1px;
            background: var(--border);
        }

        /* Modal Styles */
        .modal-overlay {
            position: fixed;
            top: 0; left: 0; right: 0; bottom: 0;
            background: rgba(0, 0, 0, 0.85);
            backdrop-filter: blur(8px);
            z-index: 1000;
            display: none;
            align-items: center;
            justify-content: center;
            padding: 1.5rem;
        }

        .modal-content {
            background: var(--card);
            border: 1px solid var(--border);
            border-radius: var(--radius);
            max-width: 600px;
            width: 100%;
            max-height: 90vh;
            overflow-y: auto;
            position: relative;
            animation: slideUp 0.3s ease-out;
        }

        @keyframes slideUp {
            from { transform: translateY(20px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }

        .modal-header {
            padding: 1.5rem;
            border-bottom: 1px solid var(--border);
            display: flex;
            align-items: center;
            gap: 1.5rem;
        }

        .modal-body {
            padding: 1.5rem;
        }

        .close-modal {
            position: absolute;
            top: 1rem; right: 1rem;
            background: none;
            border: none;
            color: var(--muted-foreground);
            cursor: pointer;
            font-size: 1.25rem;
        }

        .member-list {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
            margin-top: 1rem;
        }

        .member-item {
            padding: 0.75rem;
            background: rgba(255, 255, 255, 0.03);
            border: 1px solid var(--border);
            border-radius: 0.5rem;
            display: flex;
            align-items: center;
            gap: 0.75rem;
        }

        .member-item.leader {
            border-color: #8b0c10;
            background: rgba(251, 191, 36, 0.05);
        }

        .member-item.co-leader {
            border-color: #60a5fa;
            background: rgba(96, 165, 250, 0.05);
        }

        .role-tag {
            font-size: 0.6rem;
            padding: 0.1rem 0.4rem;
            border-radius: 4px;
            text-transform: uppercase;
            font-weight: 700;
        }

        .role-leader { background: #8b0c10; color: #000; }
        .role-co-leader { background: #60a5fa; color: #000; }
        .role-member { background: #4b5563; color: #fff; }

        .empty-state {
            text-align: center;
            padding: 4rem;
            color: var(--muted-foreground);
        }

        .animate-fadeIn {
            animation: fadeIn 0.4s ease-out;
        }

        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }

        
        

        
        

        

        

        

        

        
        

        

        

        

        

        

        

        

        .ripple-container {
            position: relative;
            overflow: hidden;
        }

` }} />
<link rel="stylesheet" href="app-theme-overrides.css?v=20260518" />
</div>
<div className="body-wrapper">
    <div id="loader-wrapper">
        <div id="loader"></div>
        <div id="loader-text">INITIALIZING ECOSYSTEM...</div>
    </div>

    
        {/* Script tags removed */}
<div className="desktop-container">
        {/*  Left Sidebar - Navigation  */}
                    {/* PHP code removed */}

    <div className="desktop-main">
            <div className="card header-card animate-fadeIn">
                <div>
                    <h1 className="text-2xl font-bold">Teams</h1>
                    <p className="text-xs text-muted-foreground uppercase">Discover and collaborate with specialized squads</p>
                </div>
                <div className="search-container">
                    <i className="fas fa-search search-icon"></i>
                    <input type="text" id="teamSearch" className="search-input" placeholder="Search team name..." />
                </div>
                <button className="create-btn" onClick="openCreateModal()">
                    <i className="fas fa-plus"></i> Create Team
                </button>
            </div>

            {/* PHP code removed */}
                <div className="alert alert-success animate-fadeIn">
                    <i className="fas fa-check-circle"></i> {/* PHP code removed */}
                </div>
            {/* PHP code removed */}
                <div className="alert alert-error animate-fadeIn">
                    <i className="fas fa-exclamation-triangle"></i> {/* PHP code removed */}
                </div>
            {/* PHP code removed */}

            {/* PHP code removed */}

            {/*  Your Team Section  */}
            <div className="section-header">
                <h2>Your Team</h2>
                <div className="line"></div>
            </div>
            
            <div className="teams-grid" style={{ marginBottom: '3rem' }}>
                {/* PHP code removed */}
                    <div className="card empty-state" style={{ gridColumn: '1 / -1', padding: '2rem' }}>
                        <p style={{ fontSize: '0.8rem' }}>You haven't created a squad yet.</p>
                    </div>
                {/* PHP code removed */}
                    {/* PHP code removed */}
                        <div className="card team-card animate-fadeIn" onClick="openTeamByDataId('{/* PHP code removed */}')" style={{ borderLeft: '4px solid var(--primary)' }}>
                            <div className="team-profile">
                                {/* PHP code removed */}
                                    <img src="api/get_team_img.php?id={/* PHP code removed */}
                                    <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold' }} />
                                        {/* PHP code removed */}
                                    </div>
                                {/* PHP code removed */}
                            </div>
                            <div className="team-info">
                                <div className="team-name">{/* PHP code removed */}</div>
                                <div className="team-meta">
                                    <span><i className="fas fa-crown" style={{ color: '#8b0c10' }}></i> {/* PHP code removed */}</span>
                                    <span><i className="fas fa-calendar-alt"></i> {/* PHP code removed */}</span>
                                </div>
                            </div>
                        </div>
                    {/* PHP code removed */}
                {/* PHP code removed */}
            </div>

            {/*  All Teams Section  */}
            <div className="section-header">
                <h2>Global Alliances</h2>
                <div className="line"></div>
            </div>

            <div className="teams-grid" id="teamsList">
                {/* PHP code removed */}
                    <div className="card empty-state" style={{ gridColumn: '1 / -1', borderColor: '#ff2a2f' }}>
                        <i className="fas fa-exclamation-circle" style={{ fontSize: '3rem', color: '#ff2a2f', marginBottom: '1rem' }}></i>
                        <p>Connection Error</p>
                    </div>
                {/* PHP code removed */}
                    <div className="card empty-state" style={{ gridColumn: '1 / -1' }}>
                        <i className="fas fa-users-slash" style={{ fontSize: '3rem', opacity: '0.3', marginBottom: '1rem' }}></i>
                        <p>No teams found</p>
                    </div>
                {/* PHP code removed */}
                    {/* PHP code removed */}
                        <div className="card team-card animate-fadeIn" onClick="openTeamByDataId('{/* PHP code removed */}')">
                            <div className="team-profile">
                                {/* PHP code removed */}
                                    <img src="api/get_team_img.php?id={/* PHP code removed */}
                                    <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold' }} />
                                        {/* PHP code removed */}
                                    </div>
                                {/* PHP code removed */}
                            </div>
                            <div className="team-info">
                                <div className="team-name">{/* PHP code removed */}</div>
                                <div className="team-meta">
                                    <span><i className="fas fa-crown" style={{ color: '#8b0c10' }}></i> {/* PHP code removed */}</span>
                                    <span><i className="fas fa-calendar-alt"></i> {/* PHP code removed */}</span>
                                </div>
                            </div>
                        </div>
                    {/* PHP code removed */}
                {/* PHP code removed */}
            </div>
        </div>


    </div>

    {/*  Modal  */}
    <div id="teamModal" className="modal-overlay" onClick="closeTeamModal(event)">
        <div className="modal-content" onClick="event.stopPropagation()">
            <button className="close-modal" onClick="closeTeamModal(event)">&times;</button>
            <div className="modal-header" id="modalHeader">
                {/*  Dynamic Content  */}
            </div>
            <div className="modal-body">
                <h3 className="uppercase text-xs text-muted-foreground font-bold" style={{ marginBottom: '1rem' }}>Squad Roster (3 Members)</h3>
                <div className="member-list" id="memberList">
                    {/*  Dynamic Content  */}
                </div>
            </div>
        </div>
    </div>

    {/*  Create Team Modal  */}
    <div id="createModal" className="modal-overlay" onClick="closeCreateModal(event)">
        <div className="modal-content create-modal-content" onClick="event.stopPropagation()">
            <button className="close-modal" onClick="closeCreateModal(event)">&times;</button>
            <div className="modal-header">
                <i className="fas fa-users-crown text-2xl text-primary" style={{ fontSize: '2rem' }}></i>
                <div>
                    <h2 className="text-2xl font-bold">Forge Your Squad</h2>
                    <p className="text-xs text-muted-foreground uppercase">Assemble 3 elite members</p>
                </div>
            </div>
            <div className="modal-body">
                <form action="" method="POST" enctype="multipart/form-data" id="createTeamForm">
                    <div className="form-group">
                        <label>Team Name</label>
                        <input type="text" name="team_name" className="form-input" placeholder="Epic Squad Name" required />
                    </div>

                    <div className="form-group">
                        <label>Team Profile Image</label>
                        <input type="file" name="team_profile" className="form-input" accept="image/*" />
                    </div>

                    <div className="form-group">
                        <label>Select 2 Members <span id="memberCountText">(1/3)</span></label>
                        <p className="text-xs text-muted-foreground" style={{ marginBottom: '0.5rem' }}>You are automatically set as the Leader.</p>
                        <div className="members-picker" id="membersPicker">
                            {/* PHP code removed */}
                                <label className="picker-item">
                                    <input type="checkbox" name="members[]" value="{/* PHP code removed */}</span />
                                </label>
                            {/* PHP code removed */}
                        </div>
                    </div>

                    <input type="hidden" name="create_team" value="1" />
                    <button type="submit" name="confirm_creation" id="submitTeam" className="create-btn" style={{ width: '100%', justifyContent: 'center', marginTop: '1.5rem' }} disabled>
                        Confirm Creation
                    </button>
                </form>
            </div>
        </div>
    </div>

    {/*  Leader Dashboard Modal (Big Popup)  */}
    <div id="leaderModal" className="modal-overlay" onClick="closeLeaderModal(event)">
        <div className="modal-content leader-modal" onClick="event.stopPropagation()">
            <button className="close-modal" onClick="closeLeaderModal(event)">&times;</button>
            <div className="modal-header">
                <i className="fas fa-crown text-2xl" style={{ color: '#8b0c10', fontSize: '2rem' }}></i>
                <div>
                    <h2 className="text-2xl font-bold">Commander Dashboard</h2>
                    <p className="text-xs text-muted-foreground uppercase" id="leaderModalSubtitle">Full Roster Management</p>
                </div>
            </div>
            <div className="modal-body">
                <table className="stats-table">
                    <thead>
                        <tr>
                            <th>User</th>
                            <th>Status</th>
                            <th>Eagle Coins</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* PHP code removed */}
                            <tr>
                                <td className="flex items-center gap-3">
                                    <div style={{ width: '32px', height: '32px', borderRadius: '50%', overflow: 'hidden', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--primary)' }}>
                                        <img src="api/get_avatar_img.php?name={/* PHP code removed */}</span />
                                </td>
                                <td>
                                    <span className="role-tag role-member">Active</span>
                                </td>
                                <td>
                                    <div className="coin-amount">
                                        <i className="fas fa-coins"></i> {/* PHP code removed */}
                                    </div>
                                </td>
                            </tr>
                        {/* PHP code removed */}
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    {/* Script tags removed */}
</div>

<footer className="footer" style={{ textAlign: 'center', padding: '2rem', color: 'var(--muted-foreground)', borderTop: '1px solid var(--border)', marginTop: 'auto', fontSize: '0.875rem' }}>
    <p>&copy; 2026 ProWorldz Ecosystem. All rights reserved.</p>
</footer>

{/* Script tags removed */}

    </>
  );
}
