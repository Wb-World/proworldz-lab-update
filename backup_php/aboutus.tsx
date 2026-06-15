import React from 'react';

export default function Component() {
  return (
    <>
{/* DOCTYPE removed */}
<div className="html-wrapper">
<div className="head-wrapper">
<meta charSet="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>About Us | ProWorldz</title>
<link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />
<style dangerouslySetInnerHTML={{ __html: `
/* ===== CSS RESET & BASE ===== */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border-color: rgba(229, 231, 235, 0.3);
    outline-color: rgba(156, 163, 175, 0.5);
    overscroll-behavior: none;
}

body {
    font-family: 'Roboto Mono', monospace;
    background-color: #0d1015;
    color: #f8fafc;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-height: 100vh;
    overflow-x: hidden;
}

/* ===== CUSTOM FONTS ===== */
@font-face {
    font-family: "Rebels";
    src: url("https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu4mxK.woff2") format("woff2");
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}

/* ===== CUSTOM PROPERTIES (CSS Variables) ===== */
:root {
    --radius: 0.625rem;
    --background: #0d1015;
    --foreground: #f8fafc;
    --card: #1a1d24;
    --card-foreground: #f8fafc;
    --popover: #1a1d24;
    --popover-foreground: #f8fafc;
    --primary: #6366f1;
    --primary-light: #8183f4;
    --primary-foreground: #ffffff;
    --secondary: #2d3748;
    --secondary-foreground: #f8fafc;
    --muted: #2d3748;
    --muted-foreground: #94a3b8;
    --accent: rgba(248, 250, 252, 0.05);
    --accent-foreground: #f8fafc;
    --border: rgba(255, 255, 255, 0.1);
    --input: rgba(255, 255, 255, 0.15);
    --ring: rgba(148, 163, 184, 0.5);
    
    --success: #10b981;
    --destructive: #ef4444;
    --warning: #f59e0b;
    
    --gradient-primary: linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%);
    --gradient-subtle: linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(129, 131, 244, 0.1) 100%);
    --gradient-dark: linear-gradient(135deg, var(--background) 0%, var(--card) 100%);
    
    --sidebar: #1a1d24;
    --sidebar-foreground: #f8fafc;
    --sidebar-primary: #6366f1;
    --sidebar-primary-foreground: #ffffff;
    --sidebar-accent: rgba(248, 250, 252, 0.05);
    --sidebar-accent-foreground: #f8fafc;
    --sidebar-border: rgba(255, 255, 255, 0.1);
    --sidebar-ring: rgba(148, 163, 184, 0.5);
    
    --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    --shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

/* ===== DESKTOP LAYOUT ===== */
.desktop-container {
    display: grid;
    grid-template-columns: 280px 1fr;
    gap: 1.5rem;
    min-height: 100vh;
    padding: 1.5rem;
    background-color: var(--background);
    min-width: 1280px;
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

.nav-item:hover {
    background-color: rgba(255, 255, 255, 0.05);
    color: white;
}

.nav-item.active {
    background: rgba(139, 92, 246, 0.1);
    color: #8b5cf6;
    border: 1px solid rgba(139, 92, 246, 0.2);
}

.nav-item.disabled {
    opacity: 0.5;
    cursor: not-allowed;
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

.sidebar-header {
    padding: 1.5rem;
    border-bottom: 1px solid var(--sidebar-border);
    display: flex;
    align-items: center;
    gap: 0.75rem;
}

.logo {
    font-family: 'Rebels', monospace;
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--foreground);
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.logo span {
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.logo::before {
    content: '';
    display: block;
    width: 6px;
    height: 6px;
    background: var(--primary);
    border-radius: 50%;
    animation: pulse 2s infinite;
}

@keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
}

.menu {
    list-style: none;
    padding: 1.5rem;
}

.menu li {
    margin-bottom: 0.5rem;
}

.menu li a {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.875rem 1rem;
    border-radius: calc(var(--radius) - 2px);
    color: var(--sidebar-foreground);
    text-decoration: none;
    font-size: 0.875rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
}

.menu li a::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.05), transparent);
    transition: left 0.5s;
}

.menu li a:hover::before {
    left: 100%;
}

.menu li a i {
    font-size: 1rem;
    width: 20px;
    text-align: center;
}

.menu li a:hover,
.menu li.active a {
    background-color: var(--sidebar-accent);
    color: var(--sidebar-primary);
    border-left: 3px solid var(--sidebar-primary);
}

.menu li a:hover i,
.menu li.active a i {
    color: var(--sidebar-primary);
}

.close-btn {
    display: none;
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: none;
    border: none;
    color: var(--muted-foreground);
    font-size: 1.25rem;
    cursor: pointer;
    transition: color 0.3s;
}

.close-btn:hover {
    color: var(--foreground);
}

/* ===== MAIN CONTENT ===== */
.main {
    margin-left: 260px;
    padding: 2rem;
    width: calc(100% - 260px);
    background: var(--background);
    position: relative;
}

.main::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: var(--gradient-primary);
    opacity: 0.2;
}

/* ===== PAGE HEADER ===== */
.page-header {
    text-align: center;
    margin-bottom: 4rem;
    position: relative;
}

.page-header h1 {
    font-family: 'Rebels', monospace;
    font-size: 3.5rem;
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 1rem;
    letter-spacing: -0.02em;
}

.page-header p {
    color: var(--muted-foreground);
    font-size: 1.125rem;
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
}

/* ===== ABOUT CARD ===== */
.about-card {
    background: linear-gradient(145deg, var(--card) 0%, rgba(26, 29, 36, 0.9) 100%);
    padding: 3rem;
    border-radius: var(--radius);
    border: 1px solid var(--border);
    max-width: 800px;
    margin: 0 auto 4rem;
    position: relative;
    overflow: hidden;
    box-shadow: var(--shadow-xl);
}

.about-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: var(--gradient-primary);
}

.about-card h2 {
    text-align: center;
    font-family: 'Rebels', monospace;
    font-size: 2.25rem;
    color: var(--foreground);
    margin-bottom: 1.5rem;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
}

.about-card h2::before,
.about-card h2::after {
    content: '';
    flex: 1;
    height: 1px;
    background: var(--border);
}

.about-card p {
    text-align: center;
    color: var(--muted-foreground);
    font-size: 1.125rem;
    line-height: 1.8;
    max-width: 700px;
    margin: 0 auto;
}

/* ===== INFO CARDS ===== */
.info-cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto 4rem;
}

.info-card {
    background: linear-gradient(145deg, var(--card) 0%, rgba(26, 29, 36, 0.8) 100%);
    padding: 2.5rem 2rem;
    border-radius: var(--radius);
    text-align: center;
    border: 1px solid var(--border);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
}

.info-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: var(--gradient-primary);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.info-card:hover {
    transform: translateY(-8px);
    border-color: var(--primary);
    box-shadow: var(--shadow-2xl);
}

.info-card:hover::before {
    transform: scaleX(1);
}

.info-card i {
    font-size: 2.5rem;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background: var(--gradient-subtle);
    color: var(--primary);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.5rem;
    transition: all 0.3s ease;
}

.info-card:hover i {
    transform: scale(1.1);
    background: var(--gradient-primary);
    color: var(--primary-foreground);
}

.info-card h3 {
    font-family: 'Rebels', monospace;
    font-size: 1.5rem;
    color: var(--foreground);
    margin-bottom: 1rem;
}

.info-card p {
    color: var(--muted-foreground);
    font-size: 1rem;
    line-height: 1.7;
}

/* ===== STATS ===== */
.stats {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    max-width: 900px;
    margin: 0 auto;
}

.stat-box {
    background: linear-gradient(145deg, var(--card) 0%, rgba(26, 29, 36, 0.8) 100%);
    padding: 3rem 2rem;
    border-radius: var(--radius);
    text-align: center;
    border: 1px solid var(--border);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
}

.stat-box::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--gradient-subtle);
    opacity: 0;
    transition: opacity 0.3s ease;
}

.stat-box:hover::before {
    opacity: 1;
}

.stat-box:hover {
    transform: translateY(-6px);
    border-color: var(--primary);
    box-shadow: var(--shadow-xl);
}

.stat-box h2 {
    font-family: 'Rebels', monospace;
    font-size: 3rem;
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 0.5rem;
    position: relative;
    z-index: 1;
}

.stat-box span {
    color: var(--muted-foreground);
    font-size: 0.875rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    position: relative;
    z-index: 1;
}

/* ===== MOBILE MENU ===== */
.menu-btn {
    display: none;
    position: fixed;
    top: 1rem;
    left: 1rem;
    font-size: 1.5rem;
    background: none;
    border: none;
    color: var(--foreground);
    z-index: 1100;
    cursor: pointer;
    padding: 0.5rem;
    border-radius: calc(var(--radius) - 4px);
    background: var(--card);
    border: 1px solid var(--border);
    transition: all 0.3s ease;
}

.menu-btn:hover {
    background: var(--accent);
    color: var(--primary);
}

.overlay {
    display: none;
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(4px);
    z-index: 900;
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

.animate-fadeIn {
    opacity: 0;
    animation: fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

.animate-fadeIn.delay-1 { animation-delay: 0.1s; }
.animate-fadeIn.delay-2 { animation-delay: 0.2s; }
.animate-fadeIn.delay-3 { animation-delay: 0.3s; }

/* ===== RESPONSIVE DESIGN ===== */
@media (max-width: 1024px) {
    .sidebar {
        width: 240px;
    }
    
    .main {
        margin-left: 240px;
        width: calc(100% - 240px);
        padding: 1.5rem;
    }
    
    .page-header h1 {
        font-size: 2.75rem;
    }
    
    .info-cards {
        grid-template-columns: repeat(2, 1fr);
        gap: 1.5rem;
    }
    
    .stats {
        grid-template-columns: repeat(2, 1fr);
        gap: 1.5rem;
    }
    
    .stat-box:last-child {
        grid-column: span 2;
        max-width: 300px;
        justify-self: center;
    }
}

@media (max-width: 768px) {
    .menu-btn {
        display: block;
    }
    
    .close-btn {
        display: block;
    }
    
    .sidebar {
        transform: translateX(-100%);
        width: 300px;
    }
    
    .sidebar.active {
        transform: translateX(0);
    }
    
    .overlay.active {
        display: block;
    }
    
    .main {
        margin-left: 0;
        width: 100%;
        padding: 1.25rem;
    }
    
    .page-header h1 {
        font-size: 2.25rem;
    }
    
    .page-header p {
        font-size: 1rem;
    }
    
    .about-card {
        padding: 2rem 1.5rem;
    }
    
    .about-card h2 {
        font-size: 1.875rem;
    }
    
    .info-cards {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }
    
    .stats {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }
    
    .stat-box:last-child {
        grid-column: 1;
        max-width: 100%;
    }
}

@media (max-width: 480px) {
    .main {
        padding: 1rem;
    }
    
    .page-header {
        margin-bottom: 2.5rem;
    }
    
    .page-header h1 {
        font-size: 2rem;
    }
    
    .about-card,
    .info-card,
    .stat-box {
        padding: 2rem 1.25rem;
    }
    
    .info-card i {
        width: 60px;
        height: 60px;
        font-size: 2rem;
    }
    
    .stat-box h2 {
        font-size: 2.5rem;
    }
}

@media (max-width: 360px) {
    .page-header h1 {
        font-size: 1.75rem;
    }
    
    .about-card h2 {
        font-size: 1.5rem;
    }
    
    .info-card h3 {
        font-size: 1.25rem;
    }
}

/* Landscape Mode */
@media (max-height: 600px) and (orientation: landscape) {
    .sidebar {
        overflow-y: auto;
    }
    
    .menu {
        padding: 1rem;
    }
    
    .menu li {
        margin-bottom: 0.25rem;
    }
    
    .menu li a {
        padding: 0.75rem 1rem;
    }
}

/* High DPI Screens */
@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
    .info-card,
    .stat-box,
    .about-card {
        border-width: 1.5px;
    }
}

/* Print Styles */
@media print {
    body {
        background: white;
        color: black;
    }
    
    .sidebar {
        display: none;
    }
    
    .main {
        margin-left: 0;
        width: 100%;
    }
    
    .info-card,
    .stat-box,
    .about-card {
        border: 1px solid #000;
        box-shadow: none;
    }
}
` }} />
</div>
<div className="body-wrapper">
    <div id="loader-wrapper">
        <div id="loader"></div>
        <div id="loader-text">INITIALIZING ECOSYSTEM...</div>
    </div>
    <div className="desktop-container">
        {/* Script tags removed */}
        
        <div className="desktop-sidebar">
            <div className="profile-card-section">
                <div className="p-4">
                    <div className="flex items-center gap-3">
                        <div className="size-12 flex items-center justify-center rounded-lg" style={{ position: 'relative', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', width: '3rem', height: '3rem', display: 'flex' }}>
                            <img src="{/* PHP code removed */}</div />
                            <div className="text-xs uppercase text-muted-foreground" style={{ fontSize: '0.75rem' }}>{/* PHP code removed */}</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card">
                <div className="p-3">
                    <div className="nav-section">
                        <a href="dashboard" className="nav-item">
                            <svg className="nav-icon" viewBox="0 0 20 20" fill="none">
                                <path stroke="currentColor" strokeLinecap="square" strokeWidth="1.667" d="M5.833 3.333h-2.5v13.334h2.5m8.333-13.334h2.5v13.334h-2.5"/>
                            </svg>
                            <span className="nav-label">Overview</span>
                        </a>
                        <a href="lab" className="nav-item">
                            <svg className="nav-icon" viewBox="0 0 20 20" fill="none">
                                <path stroke="currentColor" strokeWidth="1.667" d="M16.228 3.772c1.31 1.31-.416 5.16-3.856 8.6-3.44 3.44-7.29 5.167-8.6 3.856-1.31-1.31.415-5.16 3.855-8.6 3.44-3.44 7.29-5.167 8.6-3.856Z"/>
                                <path stroke="currentColor" strokeWidth="1.667" d="M16.228 16.228c-1.31 1.31-5.161-.416-8.601-3.855-3.44-3.44-5.166-7.29-3.856-8.601 1.31-1.31 5.162.416 8.601 3.855 3.44 3.44 5.166 7.29 3.856 8.601Z"/>
                            </svg>
                            <span className="nav-label">Laboratory</span>
                        </a>
                        <a href="tasks" className="nav-item">
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
                        <a href="ourcourse" className="nav-item">
                            <svg className="nav-icon" viewBox="0 0 20 20" fill="none" stroke="currentColor">
                                <path strokeWidth="1.5" d="M16.667 15V5.833a2.5 2.5 0 0 0-2.5-2.5H5.833a2.5 2.5 0 0 0-2.5 2.5v10a2.5 2.5 0 0 0 2.5 2.5h10"/>
                                <path strokeWidth="1.5" d="M6.667 3.333v13.334"/>
                                <path strokeWidth="1.5" d="M10 6.667h3.333"/>
                                <path strokeWidth="1.5" d="M10 10h3.333"/>
                            </svg>
                            <span className="nav-label">Courses</span>
                        </a>
                        <a href="course_video" className="nav-item">
                            <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2c.46-1.7.46-5.33.46-5.33a29 29 0 0 0-.46-5.33z"></path>
                                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                            </svg>
                            <span className="nav-label">Course Video</span>
                        </a>
                        <a href="assignment" className="nav-item disabled">
                            <svg className="nav-icon" viewBox="0 0 20 20" fill="none" stroke="currentColor">
                                <path strokeWidth="1.5" d="M16.667 16.667V5a2.5 2.5 0 0 0-2.5-2.5H6.667a2.5 2.5 0 0 0-2.5 2.5v11.667"/>
                                <path strokeWidth="1.5" d="M6.667 2.5v15"/>
                                <path strokeWidth="1.5" d="M11.667 4.167l4.166 4.166" strokeLinecap="round"/>
                                <path strokeWidth="1.5" d="M13.333 8.333l-2.5 2.5-2.5-2.5 2.5-2.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span className="nav-label">Assignments</span>
                        </a>
                        <a href="download" className="nav-item">
                            <svg className="nav-icon" viewBox="0 0 20 20" fill="none">
                                <path stroke="currentColor" strokeLinecap="square" strokeWidth="1.667" d="M10 4.164V2.497m3.333 1.67V2.5M6.667 4.167v-1.67M10 17.5v-1.667m3.333 1.667v-1.667M6.667 17.5v-1.667m9.166-2.5H17.5m-1.667-6.667H17.5M15.833 10H17.5m-15 0h1.667M2.5 13.334h1.667M2.5 6.666h1.667M12.5 10a2.501 2.501 0 1 1-5.002 0 2.501 2.501 0 0 1 5.002 0ZM4.167 4.167h11.666v11.666H4.167V4.167Z"/>
                            </svg>
                            <span className="nav-label">Devices</span>
                        </a>
                        <a href="leaderboard" className="nav-item">
                            <svg className="nav-icon" viewBox="0 0 20 20" fill="none">
                                <path stroke="currentColor" strokeWidth="1.667" d="M10 2.5l3.333 6.667H6.667L10 2.5z"/>
                                <path stroke="currentColor" strokeWidth="1.667" d="M3.333 10.833h13.334"/>
                                <path strokeWidth="1.667" d="M5.833 13.333h8.334"/>
                                <path strokeWidth="1.667" d="M7.5 15.833h5"/>
                            </svg>
                            <span className="nav-label">Leaderboard</span>
                        </a>
                        <a href="teams" className="nav-item">
                            <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                <circle cx="9" cy="7" r="4"></circle>
                                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                            </svg>
                            <span className="nav-label">Teams</span>
                        </a>
                        <a href="tournament" className="nav-item">
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
                        <a href="maintanance" className="nav-item disabled">
                            <svg className="nav-icon" viewBox="0 0 20 20" fill="none">
                                <path stroke="currentColor" strokeLinecap="square" strokeWidth="1.667" d="M10 3.333H4.166v7.5h11.667v-7.5H10Zm0 0V1.667m-6.667 12.5 1.25-1.25m12.083 1.25-1.25-1.25M7.5 6.667V7.5m5-.833V7.5M5 10.833V12.5a5 5 0 0 0 10 0v-1.667"/>
                            </svg>
                            <span className="nav-label">Security status</span>
                        </a>
                        <a href="contactus" className="nav-item">
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
                        <a href="eaglone_shop" className="nav-item">
                            <svg className="nav-icon" viewBox="0 0 20 20" fill="none">
                                <path stroke="currentColor" strokeWidth="1.5" d="M5 6.667h10l-1 9.166H6l-1-9.166Z"/>
                                <path stroke="currentColor" strokeWidth="1.5" d="M7.5 8.333V6.25a2.5 2.5 0 0 1 5 0v2.083"/>
                            </svg>
                            <span className="nav-label">Eaglone shop</span>
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
    {/*  HEADER  */}
    <section className="page-header animate-fadeIn">
      <h1>About ProWorldz</h1>
      <p>Empowering Students with Real-World Technology Skills</p>
    </section>

    {/*  ABOUT CARD  */}
    <section className="about-card animate-fadeIn delay-1">
      <h2>Who We Are</h2>
      <p>
        ProWorldz is a modern learning platform focused on empowering students
        with real-world skills in technology, development, and startups.
        Our goal is to bridge the gap between education and industry.
      </p>
    </section>

    {/*  INFO CARDS  */}
    <section className="info-cards">
      <div className="info-card animate-fadeIn delay-1">
        <i className="fa-solid fa-bullseye"></i>
        <h3>Our Mission</h3>
        <p>
          To provide practical, hands-on learning experiences that help students
          build confidence and job-ready skills through industry-relevant projects.
        </p>
      </div>

      <div className="info-card animate-fadeIn delay-2">
        <i className="fa-solid fa-eye"></i>
        <h3>Our Vision</h3>
        <p>
          To become a trusted digital learning ecosystem for students,
          creators, and future innovators shaping the technology landscape.
        </p>
      </div>

      <div className="info-card animate-fadeIn delay-3">
        <i className="fa-solid fa-users"></i>
        <h3>Who We Help</h3>
        <p>
          College students, beginners, and aspiring professionals who want
          to learn by doing and grow their careers in technology.
        </p>
      </div>
    </section>

    {/*  STATS  */}
    <section className="stats">
      <div className="stat-box animate-fadeIn delay-1">
        <h2>10K+</h2>
        <span>Active Students</span>
      </div>

      <div className="stat-box animate-fadeIn delay-2">
        <h2>50+</h2>
        <span>Courses Available</span>
      </div>

      <div className="stat-box animate-fadeIn delay-3">
        <h2>100+</h2>
        <span>Real Projects</span>
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
