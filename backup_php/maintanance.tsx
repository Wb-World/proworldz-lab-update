import React from 'react';

export default function Component() {
  return (
    <>
{/* DOCTYPE removed */}
<div className="html-wrapper">
<div className="head-wrapper">
<meta charSet="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Maintenance | ProWorldz</title>
<link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />
{/* Script tags removed */}
<style dangerouslySetInnerHTML={{ __html: `
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Roboto Mono', monospace;
    background-color: #000000;
    color: #ffffff;
    min-height: 100vh;
}

@font-face {
    font-family: "Rebels";
    src: url("https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu4mxK.woff2") format("woff2");
    font-display: swap;
}

:root {
            --gap: 1.5rem;
            --sides: 1.5rem;
    --background: #000000;
    --foreground: #ffffff;
    --card: #080808;
    --primary: #ff2a2f;
    --primary-light: #8183f4;
    --primary-foreground: #ffffff;
    --muted-foreground: #a0a0a0;
    --border: rgba(139, 12, 16, 0.1);
    
    --gradient-primary: linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%);
    --gradient-subtle: linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(129, 131, 244, 0.1) 100%);
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

.card {
    background-color: var(--card);
    border-radius: 0.625rem;
    border: 1px solid var(--border);
    overflow: hidden;
}

.p-4 { padding: 1rem; }
.p-3 { padding: 0.75rem; }

.flex { display: flex; }
.items-center { align-items: center; }
.gap-3 { gap: 0.75rem; }
.size-12 { width: 3rem; height: 3rem; }
.bg-primary { background-color: var(--primary); }
.rounded-lg { border-radius: 0.625rem; }
.text-primary-foreground { color: var(--primary-foreground); }
.text-2xl { font-size: 1.5rem; line-height: 2rem; }
.font-display { font-family: 'Rebels', monospace; font-weight: 700; }
.text-xs { font-size: 0.75rem; line-height: 1rem; }
.text-muted-foreground { color: var(--muted-foreground); }
.uppercase { text-transform: uppercase; }
.flex-1 { flex: 1 1 0%; }
.flex-shrink-0 { flex-shrink: 0; }

/* Navigation Styles */
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
    color: #ffffff;
    transition: background-color 0.2s;
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

/* ===== MAIN CONTENT ===== */
.desktop-main {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    overflow-y: auto;
    max-height: calc(100vh - 3rem);
    padding-right: 0.5rem;
}

/* Page Header */
.page-header {
    text-align: center;
    margin-bottom: 2rem;
}

.page-header h1 {
    font-family: 'Rebels', monospace;
    font-size: 3.5rem;
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 1rem;
}

.page-header p {
    color: var(--muted-foreground);
    font-size: 1.125rem;
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
}

/* ===== MAINTENANCE CONTENT ===== */
.maintenance-content {
    background: linear-gradient(145deg, var(--card) 0%, rgba(8, 8, 8, 0.9) 100%);
    padding: 4rem;
    border-radius: 0.625rem;
    border: 1px solid var(--border);
    position: relative;
    overflow: hidden;
    margin-bottom: 2rem;
    width: 100%;
}

.maintenance-content::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: var(--gradient-primary);
}

.maintenance-content h2 {
    font-family: 'Rebels', monospace;
    font-size: 3rem;
    color: var(--foreground);
    margin-bottom: 2rem;
    text-align: center;
}

.maintenance-content > p {
    color: var(--muted-foreground);
    font-size: 1.25rem;
    line-height: 1.8;
    margin-bottom: 3rem;
    text-align: center;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
}

/* Maintenance Image Container */
.maintenance-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    max-width: 1000px;
    margin: 0 auto;
}

.maintenance-image-box {
    text-align: center;
    padding: 2rem;
    border-radius: 0.5rem;
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid transparent;
    transition: all 0.3s ease;
    width: 100%;
}

.maintenance-image-box:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: var(--primary);
    transform: translateY(-5px);
}

.maintenance-image {
    width: 300px;
    height: 200px;
    object-fit: contain;
    border-radius: 0.5rem;
    margin-bottom: 1.5rem;
}

.maintenance-status {
    color: var(--primary);
    font-size: 2rem;
    font-weight: 600;
    margin: 0;
}

/* Status Items */
.status-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    max-width: 1000px;
    margin: 0 auto;
    width: 100%;
}

.status-box {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    padding: 2rem;
    border-radius: 0.5rem;
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid transparent;
    transition: all 0.3s ease;
}

.status-box:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: var(--primary);
    transform: translateY(-5px);
}

.status-box i {
    font-size: 2rem;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background: var(--gradient-subtle);
    color: var(--primary);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    transition: all 0.3s ease;
}

.status-box:hover i {
    background: var(--gradient-primary);
    color: var(--primary-foreground);
    transform: scale(1.1);
}

.status-text {
    color: var(--foreground);
    font-size: 1.25rem;
    font-weight: 500;
    margin: 0;
}

.status-detail {
    color: var(--muted-foreground);
    font-size: 1rem;
    margin-top: 0.5rem;
}

/* ===== FOOTER ===== */
.footer {
    text-align: center;
    padding: 2rem;
    color: var(--muted-foreground);
    border-top: 1px solid var(--border);
    margin-top: auto;
    font-size: 0.875rem;
}

/* ===== TV NOISE EFFECT ===== */
.tv-noise {
    position: absolute;
    inset: 0;
    background: 
        repeating-linear-gradient(
            0deg,
            rgba(0, 0, 0, 0.1) 0px,
            rgba(0, 0, 0, 0.1) 1px,
            transparent 1px,
            transparent 2px
        ),
        repeating-linear-gradient(
            90deg,
            rgba(0, 0, 0, 0.1) 0px,
            rgba(0, 0, 0, 0.1) 1px,
            transparent 1px,
            transparent 2px
        );
    opacity: 0.1;
    pointer-events: none;
    z-index: 1;
    animation: tvNoise 0.1s infinite;
}

@keyframes tvNoise {
    0%, 100% { background-position: 0 0; }
    10% { background-position: -5% -10%; }
    20% { background-position: -15% 5%; }
    30% { background-position: 7% -25%; }
    40% { background-position: 20% 25%; }
    50% { background-position: -25% 10%; }
    60% { background-position: 15% 5%; }
    70% { background-position: 0 15%; }
    80% { background-position: 25% 35%; }
    90% { background-position: -10% 10%; }
}

/* ===== ANIMATIONS ===== */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
}

.animate-fadeIn {
    opacity: 0;
    animation: fadeInUp 0.8s ease forwards;
}

.animate-fadeIn.delay-1 { animation-delay: 0.1s; }
.animate-fadeIn.delay-2 { animation-delay: 0.2s; }
.animate-fadeIn.delay-3 { animation-delay: 0.3s; }

.pulse {
    animation: pulse 2s infinite;
}

/* ===== RESPONSIVE DESIGN ===== */
@media (max-width: 1400px) {
    .desktop-container {
            display: grid;
            grid-template-columns: 280px 1fr;
            gap: var(--gap, 1.5rem);
            min-height: 100vh;
            padding: var(--sides, 1.5rem);
            background-color: var(--background);
        }
    
    .maintenance-content {
        padding: 3rem;
    }
}

@media (max-width: 1024px) {
    .desktop-container {
            display: grid;
            grid-template-columns: 280px 1fr;
            gap: var(--gap, 1.5rem);
            min-height: 100vh;
            padding: var(--sides, 1.5rem);
            background-color: var(--background);
        }
    
    .desktop-sidebar {
        display: none;
    }
    
    .page-header h1 {
        font-size: 2.75rem;
    }
    
    .maintenance-content h2 {
        font-size: 2.5rem;
    }
}

@media (max-width: 768px) {
    .page-header h1 {
        font-size: 2.25rem;
    }
    
    .page-header p {
        font-size: 1rem;
        padding: 0 1rem;
    }
    
    .maintenance-content h2 {
        font-size: 2rem;
    }
    
    .maintenance-content {
        padding: 2rem;
    }
    
    .status-container {
        grid-template-columns: 1fr;
        gap: 1rem;
    }
    
    .status-box {
        padding: 1.5rem;
    }
    
    .status-box i {
        width: 50px;
        height: 50px;
        font-size: 1.5rem;
    }
    
    .status-text {
        font-size: 1rem;
    }
    
    .maintenance-image {
        width: 250px;
        height: 150px;
    }
}

@media (max-width: 480px) {
    .desktop-container {
            display: grid;
            grid-template-columns: 280px 1fr;
            gap: var(--gap, 1.5rem);
            min-height: 100vh;
            padding: var(--sides, 1.5rem);
            background-color: var(--background);
        }
    
    .page-header h1 {
        font-size: 2rem;
    }
    
    .maintenance-content {
        padding: 1.5rem;
    }
    
    .maintenance-content h2 {
        font-size: 1.75rem;
    }
    
    .maintenance-content > p {
        font-size: 1rem;
    }
}

/* Custom Scrollbar */
.desktop-main::-webkit-scrollbar {
    width: 6px;
}

.desktop-main::-webkit-scrollbar-track {
    background: transparent;
}

.desktop-main::-webkit-scrollbar-thumb {
    background: #080808;
    border-radius: 3px;
}

.desktop-main::-webkit-scrollbar-thumb:hover {
    background: #a0a0a0;
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
{/*  TV Noise Effect  */}
<div className="tv-noise"></div>

<div className="desktop-container">
    {/*  Left Sidebar - Navigation  */}
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
            <a href="owasp-lab" className="nav-item {/* PHP echo removed */}">
                <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
                <span className="nav-label">OWASP Lab</span>
            </a>
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

        
    <div className="desktop-main">
        {/*  HEADER  */}
        <section className="page-header animate-fadeIn">
            <h1>System Maintenance</h1>
            <p>We're working hard to improve your experience</p>
        </section>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img src="images/eaglone/maint.png" alt="maintenance" style={{ width: '700px', height: 'auto', maxWidth: '100%' }} loading="lazy" /> 
        </div>

        {/*  FOOTER  */}
        <footer className="footer animate-fadeIn delay-3">
            <p>&copy; 2026 ProWorldz. All rights reserved. | Estimated completion: 48 hours</p>
        </footer>
    </div>
</div>

{/* Script tags removed */}
</div>
</div>

    </>
  );
}
