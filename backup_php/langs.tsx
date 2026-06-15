import React from 'react';

export default function Component() {
  return (
    <>
{/* DOCTYPE removed */}
<div className="html-wrapper">
<div className="head-wrapper">
<meta charSet="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Programming Labs | ProWorldz</title>

<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet" />
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />
{/* Script tags removed */}
<style dangerouslySetInnerHTML={{ __html: `
@font-face {
    font-family: "Rebels";
    src: url("https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu4mxK.woff2") format("woff2");
    font-display: swap;
}

:root {
            --gap: 1.5rem;
            --sides: 1.5rem;
    --radius: 0.625rem;
    --background: #000000;
    --foreground: #ffffff;
    --card: #080808;
    --card-foreground: #ffffff;
    --primary: #ff2a2f;
    --primary-light: #8183f4;
    --primary-foreground: #ffffff;
    --muted-foreground: #a0a0a0;
    --border: rgba(139, 12, 16, 0.1);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Roboto Mono', monospace;
    background-color: var(--background);
    color: var(--foreground);
    min-height: 100vh;
}

/* ===== DESKTOP LAYOUT ===== */
.desktop-container {
            display: grid;
            grid-template-columns: 280px 1fr;
            gap: var(--gap, 1.5rem);
            min-height: 100vh;
            padding: var(--sides, 1.5rem);
            background-color: var(--background);
        }

/* ===== SIDEBAR STYLES ===== */
.desktop-sidebar {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.profile-card-section {
    background: transparent;
    border: none;
    padding: 0;
    margin-bottom: 0.5rem;
}

.card {
    background-color: var(--card);
    border-radius: 0.625rem;
    border: 1px solid var(--border);
    overflow: hidden;
}

.nav-section {
    margin-bottom: 1.5rem;
}

.nav-item {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.75rem;
    border-radius: 0.375rem;
    text-decoration: none;
    color: var(--muted-foreground);
    transition: all 0.2s;
    margin-bottom: 0.25rem;
    cursor: pointer;
}

.nav-icon {
    width: 1.25rem;
    height: 1.25rem;
    flex-shrink: 0;
}

.nav-label {
    font-size: 0.875rem;
    font-weight: 500;
    text-transform: uppercase;
}

.desktop-main {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    overflow-y: auto;
    max-height: calc(100vh - 3rem);
    padding-right: 0.5rem;
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
    border: 3px solid rgba(139, 12, 16, 0.1);
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

.font-display { font-family: 'Rebels', monospace; font-weight: 700; }

.p-4 { padding: 1rem; }
.p-3 { padding: 0.75rem; }
.flex { display: flex; }
.items-center { align-items: center; }
.gap-3 { gap: 0.75rem; }
.size-12 { width: 3rem; height: 3rem; }
.rounded-lg { border-radius: 0.625rem; }
.flex-1 { flex: 1 1 0%; }
.text-2xl { font-size: 1.5rem; line-height: 2rem; }
.text-xs { font-size: 0.75rem; line-height: 1rem; }
.uppercase { text-transform: uppercase; }

/* BACK BUTTON STYLES */
.back-btn-container {
    display: flex;
    align-items: center;
}

.back-btn {
    display: flex;
    align-items: center;
    gap: 10px;
    background: rgba(139, 12, 16, 0.1);
    border: 1px solid rgba(139, 12, 16, 0.3);
    color: #ff2a2f;
    padding: 8px 16px;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 600;
    transition: all 0.3s ease;
    text-decoration: none;
    font-size: 0.8rem;
    text-transform: uppercase;
}

.back-btn:hover {
    background: rgba(139, 12, 16, 0.2);
    box-shadow: 0 0 15px rgba(139, 12, 16, 0.3);
    transform: translateY(-2px);
}

.back-btn i {
    font-size: 18px;
}

/* MAIN CONTENT */
.main {
    padding: 0 30px 30px;
    width: 100%;
    min-height: 100vh;
}

/* PAGE HEADER */
.page-header {
    margin-bottom: 40px;
    text-align: center;
}

.page-header h1 {
    font-size: 2.5rem;
    color: #ff2a2f;
    text-transform: uppercase;
    letter-spacing: 1px;
}

/* LABS GRID */
.lab-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    max-width: 1200px;
    margin: 0 auto;
}

/* LAB CARD */
.lab-card {
    background: #080808;
    border-radius: 20px;
    overflow: hidden;
    transition: all 0.3s ease;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    height: 100%;
    display: flex;
    flex-direction: column;
    border: 1px solid rgba(139, 12, 16, 0.05);
}

.lab-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(139, 12, 16, 0.3);
    border-color: rgba(139, 12, 16, 0.3);
}

.lab-icon {
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.2);
    overflow: hidden;
}

.lab-icon i {
    font-size: 6rem;
    transition: transform 0.3s ease;
}

.lab-card:hover .lab-icon i {
    transform: scale(1.1);
}

.lab-content {
    padding: 25px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
}

.lab-content h3 {
    font-size: 1.5rem;
    margin-bottom: 15px;
    color: #fff;
    text-align: center;
}

.lab-content p {
    color: #aaa;
    line-height: 1.6;
    margin-bottom: 20px;
    flex-grow: 1;
    text-align: center;
}

.lab-btn {
    background: linear-gradient(135deg, #ff2a2f, #ff2a2f);
    color: white;
    border: none;
    padding: 12px 25px;
    border-radius: 30px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    font-size: 0.9rem;
    width: 100%;
}

.lab-btn:hover {
    background: linear-gradient(135deg, #ff2a2f, #ff2a2f);
    box-shadow: 0 5px 15px rgba(139, 12, 16, 0.4);
    transform: translateY(-2px);
}

/* RESPONSIVE DESIGN */
@media (max-width: 1200px) {
    .lab-grid {
        grid-template-columns: repeat(3, 1fr);
        gap: 25px;
        max-width: 900px;
    }
}

@media (max-width: 1024px) {
    .lab-grid {
        grid-template-columns: repeat(2, 1fr);
        max-width: 700px;
    }
    
    .main {
        padding: 0 20px 20px;
    }
}

@media (max-width: 768px) {
    .main {
        padding: 0 15px 15px;
    }
    
    .lab-grid {
        grid-template-columns: 1fr;
        max-width: 500px;
        gap: 20px;
    }
    
    .page-header h1 {
        font-size: 2rem;
    }
    
    .back-btn-container {
        padding: 15px;
    }
}

@media (max-width: 480px) {
    .lab-content {
        padding: 20px;
    }
    
    .lab-content h3 {
        font-size: 1.3rem;
    }
    
    .lab-icon {
        height: 180px;
    }
    
    .lab-btn {
        padding: 10px 20px;
        font-size: 0.85rem;
    }
}

        
        

        
        

        
/* LOCAL_DASHBOARD_NAV_LOCK */
.desktop-container .desktop-sidebar {
    height: fit-content !important;
    min-height: 0 !important;
    align-self: start !important;
    position: sticky !important;
    top: var(--sides, 1.5rem) !important;
    max-height: calc(100vh - (var(--sides, 1.5rem) * 2)) !important;
    overflow-y: auto !important;
    overflow-x: hidden !important;
    scrollbar-width: thin;
    scrollbar-color: rgba(160, 160, 160, 0.45) transparent;
}

.desktop-container .desktop-sidebar::-webkit-scrollbar {
    width: 6px;
}

.desktop-container .desktop-sidebar::-webkit-scrollbar-track {
    background: transparent;
}

.desktop-container .desktop-sidebar::-webkit-scrollbar-thumb {
    background: rgba(160, 160, 160, 0.45);
    border-radius: 999px;
}

.desktop-container .desktop-sidebar::-webkit-scrollbar-thumb:hover {
    background: rgba(180, 180, 180, 0.7);
}

.desktop-container .desktop-sidebar > .card {
    flex: 0 0 auto !important;
    height: fit-content !important;
}

.desktop-container .desktop-sidebar .profile-card-section {
    background-color: var(--card, #080808) !important;
    border: 1px solid var(--border, rgba(139, 12, 16, 0.1)) !important;
    padding: 0 !important;
    margin-bottom: 0.5rem !important;
    overflow: hidden !important;
}

.desktop-container .desktop-sidebar .profile-card-section .p-4 {
    padding: 0.75rem !important;
}

.desktop-container .desktop-sidebar .profile-card-section .flex.items-center {
    min-width: 0 !important;
}

.desktop-container .desktop-sidebar .profile-card-section .size-12 {
    width: 3rem !important;
    height: 3rem !important;
    flex: 0 0 3rem !important;
}

.desktop-container .desktop-sidebar .profile-card-section .flex-1 {
    min-width: 0 !important;
}

.desktop-container .desktop-sidebar .profile-card-section .text-2xl,
.desktop-container .desktop-sidebar .profile-card-section .text-xs {
    width: 100% !important;
    overflow: hidden !important;
    text-overflow: ellipsis !important;
    white-space: nowrap !important;
    line-height: 1.2 !important;
}

.desktop-container .desktop-sidebar .nav-section {
    margin-bottom: 1.5rem !important;
}

.desktop-container .desktop-sidebar .nav-section .nav-item {
    display: flex !important;
    align-items: center !important;
    gap: 0.75rem !important;
    padding: 0.75rem !important;
    border-radius: calc(var(--radius, 0.625rem) - 2px) !important;
    text-decoration: none !important;
    color: var(--sidebar-foreground, #ffffff) !important;
    margin-bottom: 0.25rem !important;
    background-color: transparent !important;
    filter: none !important;
    backdrop-filter: none !important;
    box-shadow: none !important;
    opacity: 1 !important;
    pointer-events: auto !important;
    cursor: pointer !important;
    transition: none !important;
}

.desktop-container .desktop-sidebar .nav-section .nav-item:hover,
.desktop-container .desktop-sidebar .nav-section .nav-item:hover:not(.active),
.desktop-container .desktop-sidebar .nav-section .nav-item.disabled:hover {
    background-color: transparent !important;
    color: var(--sidebar-foreground, #ffffff) !important;
    filter: none !important;
    backdrop-filter: none !important;
    box-shadow: none !important;
}

.desktop-container .desktop-sidebar .nav-section .nav-item.active {
    background-color: transparent !important;
    color: #ffffff !important;
    border: 1px solid rgba(139, 12, 16, 0.1) !important;
    box-shadow: none !important;
}

.desktop-container .desktop-sidebar .nav-section .nav-item.disabled {
    opacity: 1 !important;
    pointer-events: auto !important;
    cursor: pointer !important;
    border: none !important;
    background-color: transparent !important;
}

.desktop-container .desktop-sidebar .nav-section .nav-icon {
    width: 1.25rem !important;
    height: 1.25rem !important;
    flex-shrink: 0 !important;
}

.desktop-container .desktop-sidebar .nav-section .nav-label {
    font-size: 0.875rem !important;
    font-weight: 500 !important;
    text-transform: uppercase !important;
}
` }} />
<link rel="stylesheet" href="app-theme-overrides.css?v=20260518" />
</div>
<div className="body-wrapper">
    <div id="loader-wrapper">
        <div id="loader"></div>
        <div id="loader-text">INITIALIZING LABS...</div>
    </div>
    
        {/* Script tags removed */}
<div className="desktop-container">
        
                        <div className="desktop-sidebar" style={{ height: 'fit-content', minHeight: '0', paddingBottom: '2rem' }}>
            <div className="profile-card-section card">
    <div className="p-4">
        <div className="flex items-center gap-3">
            <div className="size-12 flex items-center justify-center rounded-lg" style={{ position: 'relative' }}>
                <img src="{/* PHP code removed */}</div />
                <div className="text-xs uppercase text-muted-foreground" style={{ fontSize: '0.75rem' }}>{/* PHP code removed */}</div>
            </div>
        </div>
    </div>
</div>

<div className="card" style={{ height: 'fit-content' }}>
    <div className="p-3">
        <div className="nav-section" style={{ display: 'flex', flexDirection: 'column' }}>
            <a href="dashboard" className="nav-item {/* PHP echo removed */}">
                <svg className="nav-icon" viewBox="0 0 20 20" fill="none">
                    <path stroke="currentColor" strokeLinecap="square" strokeWidth="1.667" d="M5.833 3.333h-2.5v13.334h2.5m8.333-13.334h2.5v13.334h-2.5"/>
                </svg>
                <span className="nav-label">Overview</span>
            </a>
            <a href="lab" className="nav-item {/* PHP echo removed */}">
                <svg className="nav-icon" viewBox="0 0 20 20" fill="none">
                    <path stroke="currentColor" strokeWidth="1.667" d="M16.228 3.772c1.31 1.31-.416 5.16-3.856 8.6-3.44 3.44-7.29 5.167-8.6 3.856-1.31-1.31.415-5.16 3.855-8.6 3.44-3.44 7.29-5.167 8.6-3.856Z"/>
                    <path stroke="currentColor" strokeWidth="1.667" d="M16.228 16.228c-1.31 1.31-5.161-.416-8.601-3.855-3.44-3.44-5.166-7.29-3.856-8.601 1.31-1.31 5.162.416 8.601 3.855 3.44 3.44 5.166 7.29 3.856 8.601Z"/>
                </svg>
                <span className="nav-label">Laboratory</span>
            </a>
            {/* PHP code removed */}
            <a href="owasp-lab" className="nav-item {/* PHP echo removed */}">
                <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
                <span className="nav-label">OWASP Lab</span>
            </a>
            {/* PHP code removed */}
            <a href="tasks" className="nav-item {/* PHP echo removed */}">
                <svg className="nav-icon" viewBox="0 0 20 20" fill="none" stroke="currentColor">
                    <path strokeWidth="1.5" d="M5 3.333h8.333a2.5 2.5 0 0 1 2.5 2.5v10a2.5 2.5 0 0 1-2.5 2.5H5V3.333z"/>
                    <path strokeWidth="1.5" d="M13.333 3.333v13.334"/>
                    <path strokeWidth="1.5" d="M3.333 14.167l1.667-1.667" strokeLinecap="round"/>
                    <path strokeWidth="1.5" d="M8.333 10l-3.333 3.333" strokeLinecap="round"/>
                    <path strokeWidth="1.2" d="M8.333 7.5h3.334" strokeLinecap="round"/>
                    <path strokeWidth="1.2" d="M8.333 9.167h5" strokeLinecap="round"/>
                    <path strokeWidth="1.2" d="M8.333 10.833h4.167" strokeLinecap="round"/>
                </svg>
                <span className="nav-label">Tasks</span>
            </a>
            <a href="ourcourse" className="nav-item {/* PHP echo removed */}">
                <svg className="nav-icon" viewBox="0 0 20 20" fill="none" stroke="currentColor">
                    <path strokeWidth="1.5" d="M16.667 15V5.833a2.5 2.5 0 0 0-2.5-2.5H5.833a2.5 2.5 0 0 0-2.5 2.5v10a2.5 2.5 0 0 0 2.5 2.5h10"/>
                    <path strokeWidth="1.5" d="M6.667 3.333v13.334"/>
                    <path strokeWidth="1.5" d="M10 6.667h3.333"/>
                    <path strokeWidth="1.5" d="M10 10h3.333"/>
                </svg>
                <span className="nav-label">Courses</span>
            </a>
            <a href="assignment" className="nav-item {/* PHP echo removed */}">
                <svg className="nav-icon" viewBox="0 0 20 20" fill="none" stroke="currentColor">
                    <path strokeWidth="1.5" d="M16.667 16.667V5a2.5 2.5 0 0 0-2.5-2.5H6.667a2.5 2.5 0 0 0-2.5 2.5v11.667"/>
                    <path strokeWidth="1.5" d="M6.667 2.5v15"/>
                    <path strokeWidth="1.5" d="M11.667 4.167l4.166 4.166" strokeLinecap="round"/>
                    <path strokeWidth="1.5" d="M13.333 8.333l-2.5 2.5-2.5-2.5 2.5-2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="nav-label">Assignments</span>
            </a>
            <a href="leaderboard" className="nav-item {/* PHP echo removed */}">
                <svg className="nav-icon" viewBox="0 0 20 20" fill="none">
                    <path stroke="currentColor" strokeWidth="1.667" d="M10 2.5l3.333 6.667H6.667L10 2.5z"/>
                    <path stroke="currentColor" strokeWidth="1.667" d="M3.333 10.833h13.334"/>
                    <path stroke="currentColor" strokeWidth="1.667" d="M5.833 13.333h8.334"/>
                    <path stroke="currentColor" strokeWidth="1.667" d="M7.5 15.833h5"/>
                </svg>
                <span className="nav-label">Leaderboard</span>
            </a>
            <a href="teams" className="nav-item {/* PHP echo removed */}">
                <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
                <span className="nav-label">Teams</span>
            </a>
            <a href="tournament" className="nav-item {/* PHP echo removed */}">
                <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                    <path d="M4 22h16"></path>
                    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
                    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
                    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
                </svg>
                <span className="nav-label">Tournament</span>
            </a>
            <a href="contactus" className="nav-item {/* PHP echo removed */}">
                <svg className="nav-icon" viewBox="0 0 20 20" fill="none">
                    <path fill="currentColor" d="M17.5 4.167h.833v-.834H17.5v.834Zm0 11.666v.834h.833v-.834H17.5Zm-15 0h-.833v.834H2.5v-.834Zm0-11.666v-.834h-.833v.834H2.5Zm7.5 6.666-.528.645.528.432.528-.432-.528-.645Zm7.5-6.666h-.833v11.666h1.666V4.167H17.5Zm0 11.666V15h-15V16.667h15v-.834Zm-15 0h.833V4.167H1.667v11.666H2.5Zm0-11.666V5h15V3.333h-15v.834Zm7.5 6.666.528-.645-7.084-5.795-.527.645-.528.645 7.083 5.795.528-.645Zm7.083-5.795-.527-.645-7.084 5.795.528.645.528.645 7.083-5.795-.528-.645Z"/>
                </svg>
                <span className="nav-label">Contact support</span>
            </a>
            <a href="https://dragotool.shop/" className="nav-item" target="_blank" rel="noopener noreferrer">
                <svg className="nav-icon" viewBox="0 0 640 512" fill="currentColor">
                    <path d="M18.32 255.78L192 223.96l-91.28 68.69c-10.08 10.08-2.94 27.31 11.31 27.31h222.7c.94 0 1.78-.23 2.65-.29l-79.21 88.62c-9.85 11.03-2.16 28.11 12.58 28.11 6.34 0 12.27-3.59 15.99-9.26l79.21-88.62c.39.04.78.07 1.18.07h78.65c14.26 0 21.39-17.22 11.32-27.31l-79.2-88.62c.39-.04.78-.07 1.18-.07h78.65c14.26 0 21.39-17.22 11.32-27.31L307.33 9.37c-6.01-6.76-17.64-6.76-23.65 0l-265.38 246.4c-10.08 10.08-2.94 27.31 11.31 27.31h79.21c.39 0 .78-.03 1.17-.07L18.32 255.78z"/>
                </svg>
                <span className="nav-label">Drago Tool</span>
            </a>
            <a href="eaglone_shop" className="nav-item {/* PHP echo removed */}">
                <svg className="nav-icon" viewBox="0 0 20 20" fill="none">
                    <path stroke="currentColor" strokeWidth="1.5" d="M5 6.667h10l-1 9.166H6l-1-9.166Z"/>
                    <path stroke="currentColor" strokeWidth="1.5" d="M7.5 8.333V6.25a2.5 2.5 0 0 1 5 0v2.083"/>
                </svg>
                <span className="nav-label">Eaglone shop</span>
            </a>
            {/* PHP code removed */}
            <a href="https://ctf-page.vercel.app/" className="nav-item" target="_blank">
                <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 3l8 4v6c0 5-3.5 8.7-8 10-4.5-1.3-8-5-8-10V7l8-4z"></path>
                    <path d="M9 12l2 2 4-4"></path>
                </svg>
                <span className="nav-label">CTF page</span>
            </a>
            {/* PHP code removed */}
            
            <a href="download" className="nav-item" target="_blank" rel="noopener noreferrer">
                <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                    <polyline points="2 17 12 22 22 17"></polyline>
                    <polyline points="2 12 12 17 22 12"></polyline>
                </svg>
                <span className="nav-label">Eaglone IDE</span>
            </a>
            <a href="logout" className="nav-item">
                <svg className="nav-icon" viewBox="0 0 512 512" fill="currentColor">
                    <path d="M497 273L329 441c-15 15-41 4.5-41-17v-96H152c-13.3 0-24-10.7-24-24v-96c0-13.3 10.7-24 24-24h136V88c0-21.4 25.9-32 41-17l168 168c9.3 9.4 9.3 24.6 0 34zM192 436v-40c0-6.6-5.4-12-12-12H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h84c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12H96c-53 0-96 43-96 96v192c0 53 43 96 96 96h84c6.6 0 12-5.4 12-12z"/>
                </svg>
                <span className="nav-label">Logout</span>
            </a>
        </div>
    </div>
</div>

        </div>

        

        <main className="desktop-main">
            <div className="card">
                <div className="p-4 flex items-center justify-between">
                    <div className="back-btn-container">
                        <a href="lab" className="back-btn">
                            <i className="fas fa-arrow-left"></i>
                            <span>Back to Lab</span>
                        </a>
                    </div>
                    <div className="text-xs uppercase text-muted-foreground font-display" style={{ letterSpacing: '0.1em' }}>CODING LANGUAGE LABS</div>
                </div>
            </div>

            {/*  HEADER  */}
            <section className="page-header">
                <h1 className="font-display" style={{ fontSize: '2.5rem', color: '#ff2a2f' }}>Coding Language Labs</h1>
            </section>

    {/*  LABS GRID - 2 per row for 4 cards  */}
    <section className="lab-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)', maxWidth: '900px' }}>
      
      {/*  Python Lab  */}
      <div className="lab-card">
        <div className="lab-icon" style={{ background: 'linear-gradient(135deg, rgba(49, 112, 143, 0.2), rgba(0, 0, 0, 0.2))' }}>
          <i className="fab fa-python" style={{ color: '#3b8ab8', fontSize: '7rem' }}></i>
        </div>
        <div className="lab-content">
          <h3 style={{ color: '#ff2a2f' }}>Python Lab</h3>
          <p>Write, run and debug Python code in our interactive environment. Perfect for beginners and advanced developers alike.</p>
          <button className="lab-btn" onClick="location.href='lab/codings/pythoni'" style={{ background: '#ff2a2f' }}>
            Go to Python Lab
          </button>
        </div>
      </div>

      {/*  C++ Lab  */}
      <div className="lab-card">
        <div className="lab-icon" style={{ background: 'linear-gradient(135deg, rgba(0, 85, 164, 0.2), rgba(0, 0, 0, 0.2))' }}>
          <i className="fas fa-cogs" style={{ color: '#6495ed', fontSize: '6.5rem' }}></i>
        </div>
        <div className="lab-content">
          <h3 style={{ color: '#ff2a2f' }}>C++ Lab</h3>
          <p>Compile and execute C++ programs with our dedicated lab. Supports C++11, C++14, C++17 and C++20 standards.</p>
          <button className="lab-btn" onClick="location.href='lab/codings/cpp'" style={{ background: '#ff2a2f' }}>
            Go to C++ Lab
          </button>
        </div>
      </div>

      {/*  PHP Lab  */}
      <div className="lab-card">
        <div className="lab-icon" style={{ background: 'linear-gradient(135deg, rgba(119, 123, 180, 0.2), rgba(0, 0, 0, 0.2))' }}>
          <i className="fab fa-php" style={{ color: '#777bb4', fontSize: '7rem' }}></i>
        </div>
        <div className="lab-content">
          <h3 style={{ color: '#ff2a2f' }}>PHP Lab</h3>
          <p>Compile and execute PHP scripts with our dedicated lab. Supports modern PHP versions with fast and secure execution.</p>
          <button className="lab-btn" onClick="location.href='lab/codings/php'" style={{ background: '#ff2a2f' }}>
            Go to PHP Lab
          </button>
        </div>
      </div>

      {/*  JavaScript Lab  */}
      <div className="lab-card">
        <div className="lab-icon" style={{ background: 'linear-gradient(135deg, rgba(247, 223, 30, 0.1), rgba(0, 0, 0, 0.2))' }}>
          <i className="fab fa-js-square" style={{ color: '#f7df1e', fontSize: '7rem' }}></i>
        </div>
        <div className="lab-content">
          <h3 style={{ color: '#ff2a2f' }}>JS Lab</h3>
          <p>Compile and execute JavaScript programs with our dedicated lab. Supports modern Node.js runtime for server-side execution.</p>
          <button className="lab-btn" onClick="location.href='lab/codings/js'" style={{ background: '#ff2a2f' }}>
            Go to JS Lab
          </button>
        </div>
      </div>

    </section>

        </main>
    </div>

{/* Script tags removed */}

</div>
</div>

    </>
  );
}
