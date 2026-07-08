import React from 'react';

export default function Component() {
  return (
    <>
{/* DOCTYPE removed */}
<div className="html-wrapper">
<div className="head-wrapper">
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Leaderboard | Proworldz</title>
    <link rel="icon" type="image/png" href="image.png" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
{/* Script tags removed */}
<style dangerouslySetInnerHTML={{ __html: `
        /* Dashboard Theme & Resets */
        * { margin:0; padding:0; box-sizing:border-box; }
        body {
            font-family: 'Space Grotesk', 'Roboto Mono', sans-serif;
            background-color: #000000;
            color: #ffffff;
            min-width: 1280px;
            overflow-x: auto;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
        }

        :root {
            --radius: 0.625rem;
            --background: #000000;
            --foreground: #ffffff;
            --card: #080808;
            --card-foreground: #ffffff;
            --primary: #ff2a2f;
            --primary-foreground: #ffffff;
            --secondary: #080808;
            --secondary-foreground: #ffffff;
            --muted-foreground: #a0a0a0;
            --border: rgba(139, 12, 16, 0.1);
            --gap: 1.5rem;
            --sides: 1.5rem;
        }

        /* Dashboard Utility Classes */
        .flex { display: flex; }
        .flex-col { flex-direction: column; }
        .items-center { align-items: center; }
        .justify-center { justify-content: center; }
        .justify-between { justify-content: space-between; }
        .flex-1 { flex: 1 1 0%; }
        .gap-3 { gap: 0.75rem; }
        .size-12 { width: 3rem; height: 3rem; }
        .size-9 { width: 2.25rem; height: 2.25rem; }
        .size-5 { width: 1.25rem; height: 1.25rem; }
        .rounded-lg { border-radius: var(--radius); }
        .rounded { border-radius: 0.25rem; }
        .p-4 { padding: 1rem; }
        .p-3 { padding: 0.75rem; }
        .text-xs { font-size: 0.75rem; line-height: 1rem; }
        .text-sm { font-size: 0.875rem; line-height: 1.25rem; }
        .text-base { font-size: 1rem; line-height: 1.5rem; }
        .text-lg { font-size: 1.125rem; line-height: 1.75rem; }
        .text-2xl { font-size: 1.5rem; line-height: 2rem; }
        .text-3xl { font-size: 1.875rem; line-height: 2.25rem; }
        .uppercase { text-transform: uppercase; }
        .text-muted-foreground { color: var(--muted-foreground); }
        .text-primary-foreground { color: #ffffff; }

        @font-face {
            font-family: "Rebels";
            src: url("https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu4mxK.woff2") format("woff2");
            font-weight: normal; font-style: normal; font-display: swap;
        }

        .desktop-container {
            display: grid;
            grid-template-columns: 280px 1fr;
            gap: var(--gap);
            min-height: 100vh;
            padding: var(--sides);
            background-color: var(--background);
        }

        

        .card {
            background-color: var(--card); border-radius: var(--radius);
            border: 1px solid var(--border); overflow: hidden;
            transition: all 0.3s ease;
        }

        
        .font-display { font-family: 'Rebels', 'Roboto Mono', monospace; font-weight: 700; letter-spacing: -0.02em; }

        /* Navigation Styles - Fix Blur & Container Fitting */
        
        
        
        
        
        
        

        body.loaded #loader-wrapper { opacity: 0; visibility: hidden; }

        .badge {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border-radius: 9999px;
            padding: 0.25rem 0.75rem;
            font-size: 0.75rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            border: 1px solid transparent;
        }

        .badge-default {
            background-color: var(--primary);
            color: var(--primary-foreground);
            border-color: var(--primary);
        }

        .badge-secondary {
            background-color: var(--secondary);
            color: var(--secondary-foreground);
            border-color: var(--border);
        }

        .badge-outline {
            background-color: transparent;
            color: currentColor;
            border-color: currentColor;
        }

        .badge-outline-success {
            background-color: transparent;
            color: var(--success);
            border-color: var(--success);
        }

        .badge-outline-warning {
            background-color: transparent;
            color: var(--warning);
            border-color: var(--warning);
        }

        .badge-destructive {
            background-color: var(--destructive);
            color: white;
            border-color: var(--destructive);
        }

        .bullet {
            width: 0.5rem;
            height: 0.5rem;
            border-radius: 50%;
            background-color: var(--muted-foreground);
        }

        .bullet-success {
            background-color: var(--success);
        }

        .bullet-sm {
            width: 0.375rem;
            height: 0.375rem;
        }

        

        .nav-title {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.5rem 0.75rem;
            margin-bottom: 0.5rem;
        }

        

        

        

        .button {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border-radius: calc(var(--radius) - 2px);
            font-weight: 500;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            transition: all 0.2s;
            cursor: pointer;
            border: 1px solid transparent;
            user-select: none;
            white-space: nowrap;
        }

        .button-ghost {
            background-color: transparent;
            color: currentColor;
        }

        .button-ghost:hover:not(:disabled) {
            background-color: var(--accent);
        }

        .button-sm {
            height: 2rem;
            padding: 0 0.75rem;
            font-size: 0.875rem;
        }

        
        .flex { display: flex; }
        .grid { display: grid; }
        .relative { position: relative; }
        .absolute { position: absolute; }
        .w-full { width: 100%; }
        .h-full { height: 100%; }
        .size-12 { width: 3rem; height: 3rem; }
        .size-16 { width: 4rem; height: 4rem; }
        .size-20 { width: 5rem; height: 5rem; }
        .size-8 { width: 2rem; height: 2rem; }
        .size-9 { width: 2.25rem; height: 2.25rem; }
        .size-10 { width: 2.5rem; height: 2.5rem; }
        .size-5 { width: 1.25rem; height: 1.25rem; }
        .size-4 { width: 1rem; height: 1rem; }
        .object-cover { object-fit: cover; }
        .object-contain { object-fit: contain; }
        .rounded-lg { border-radius: var(--radius); }
        .rounded-full { border-radius: 9999px; }
        .rounded { border-radius: 0.375rem; }
        .overflow-hidden { overflow: hidden; }
        .bg-primary { background-color: var(--primary); }
        .bg-secondary { background-color: var(--secondary); }
        .bg-card { background-color: var(--card); }
        .bg-accent { background-color: var(--accent); }
        .bg-background { background-color: var(--background); }
        .text-primary { color: var(--primary); }
        .text-secondary { color: var(--secondary); }
        .text-primary-foreground { color: var(--primary-foreground); }
        .text-secondary-foreground { color: var(--secondary-foreground); }
        .text-success { color: var(--success); }
        .text-destructive { color: var(--destructive); }
        .text-foreground { color: var(--foreground); }
        .text-muted-foreground { color: var(--muted-foreground); }
        .text-xs { font-size: 0.75rem; line-height: 1rem; }
        .text-sm { font-size: 0.875rem; line-height: 1.25rem; }
        .text-base { font-size: 1rem; line-height: 1.5rem; }
        .text-lg { font-size: 1.125rem; line-height: 1.75rem; }
        .text-xl { font-size: 1.25rem; line-height: 1.75rem; }
        .text-2xl { font-size: 1.5rem; line-height: 2rem; }
        .text-3xl { font-size: 1.875rem; line-height: 2.25rem; }
        .text-4xl { font-size: 2.25rem; line-height: 2.5rem; }
        .text-5xl { font-size: 3rem; line-height: 1; }
        .font-medium { font-weight: 500; }
        .font-semibold { font-weight: 600; }
        .font-bold { font-weight: 700; }
        .uppercase { text-transform: uppercase; }
        .opacity-50 { opacity: 0.5; }
        .opacity-0 { opacity: 0; }
        .border { border-width: 1px; border-style: solid; border-color: var(--border); }
        .border-2 { border-width: 2px; border-style: solid; }
        .border-border { border-color: var(--border); }
        .border-primary { border-color: var(--primary); }
        .border-secondary { border-color: var(--secondary); }
        .border-current { border-color: currentColor; }
        .border-b { border-bottom-width: 1px; border-bottom-style: solid; border-bottom-color: var(--border); }
        .shadow-lg { box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); }
        .gap-1 { gap: 0.25rem; }
        .gap-2 { gap: 0.5rem; }
        .gap-3 { gap: 0.75rem; }
        .gap-4 { gap: 1rem; }
        .gap-6 { gap: 1.5rem; }
        .gap-gap { gap: var(--gap); }
        .p-3 { padding: 0.75rem; }
        .p-4 { padding: 1rem; }
        .p-6 { padding: 1.5rem; }
        .px-2 { padding-left: 0.5rem; padding-right: 0.5rem; }
        .px-4 { padding-left: 1rem; padding-right: 1rem; }
        .py-1 { padding-top: 0.25rem; padding-bottom: 0.25rem; }
        .py-2 { padding-top: 0.5rem; padding-bottom: 0.5rem; }
        .py-4 { padding-top: 1rem; padding-bottom: 1rem; }
        .py-6 { padding-top: 1.5rem; padding-bottom: 1.5rem; }
        .pt-4 { padding-top: 1rem; }
        .pt-6 { padding-top: 1.5rem; }
        .pl-2 { padding-left: 0.5rem; }
        .mt-1 { margin-top: 0.25rem; }
        .mt-2 { margin-top: 0.5rem; }
        .mt-6 { margin-top: 1.5rem; }
        .mb-1 { margin-bottom: 0.25rem; }
        .mb-2 { margin-bottom: 0.5rem; }
        .mb-3 { margin-bottom: 0.75rem; }
        .mb-4 { margin-bottom: 1rem; }
        .mb-6 { margin-bottom: 1.5rem; }
        .ml-auto { margin-left: auto; }
        .mr-2 { margin-right: 0.5rem; }
        .space-y-1 > * + * { margin-top: 0.25rem; }
        .space-y-2 > * + * { margin-top: 0.5rem; }
        .space-y-3 > * + * { margin-top: 0.75rem; }
        .space-y-4 > * + * { margin-top: 1rem; }
        .space-y-6 > * + * { margin-top: 1.5rem; }
        .flex-1 { flex: 1 1 0%; }
        .flex-col { flex-direction: column; }
        .items-start { align-items: flex-start; }
        .items-center { align-items: center; }
        .items-baseline { align-items: baseline; }
        .justify-center { justify-content: center; }
        .justify-between { justify-content: space-between; }
        .justify-end { justify-content: flex-end; }
        .text-center { text-align: center; }
        .grid-cols-1 { grid-template-columns: repeat(1, minmax(0, 1fr)); }
        .grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        .grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
        .top-0 { top: 0; }
        .bottom-4 { bottom: 1rem; }
        .right-4 { right: 1rem; }
        .left-1\/2 { left: 50%; }
        .-top-3 { top: -0.75rem; }
        .transform { transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)); }
        .-translate-x-1\/2 { --tw-translate-x: -50%; }
        .line-clamp-2 { overflow: hidden; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 2; }
        .transition-colors { transition-property: color, background-color, border-color, text-decoration-color, fill, stroke; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms; }
        .transition-opacity { transition-property: opacity; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms; }
        .group:hover .group-hover\:opacity-100 { opacity: 1 !important; }
        .cursor-pointer { cursor: pointer; }
        .select-none { user-select: none; }
        .truncate { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }

        .animate-fadeIn {
            animation: fadeIn 0.3s ease-out;
        }

        .animate-slideUp {
            animation: slideUp 0.3s ease-out;
        }

        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }

        @keyframes slideUp {
            from { transform: translateY(20px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }

        
        .rank-badge {
            width: 2.5rem;
            height: 2.5rem;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            font-size: 1rem;
        }

        .rank-badge.gold {
            background: linear-gradient(45deg, #FFD700, #FFA500);
            color: #000;
        }

        .rank-badge.silver {
            background: linear-gradient(45deg, #C0C0C0, #A0A0A0);
            color: #000;
        }

        .rank-badge.bronze {
            background: linear-gradient(45deg, #CD7F32, #8B4513);
            color: #fff;
        }

        .rank-badge.other {
            background-color: var(--secondary);
            color: var(--secondary-foreground);
        }

        .user-avatar {
            width: 3rem;
            height: 3rem;
            border-radius: 50%;
            overflow: hidden;
            border: 2px solid var(--border);
        }

        .user-avatar img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        

        

        .leaderboard-table {
            width: 100%;
            border-collapse: collapse;
        }

        .leaderboard-table th {
            text-align: left;
            padding: 1rem;
            color: var(--muted-foreground);
            font-weight: 500;
            text-transform: uppercase;
            font-size: 0.75rem;
            border-bottom: 1px solid var(--border);
        }

        .leaderboard-table td {
            padding: 1rem;
            border-bottom: 1px solid rgba(139, 12, 16, 0.05);
        }

        .leaderboard-table tr:hover {
            background-color: rgba(255, 255, 255, 0.02);
        }

        .leaderboard-table tr.current-user {
            background-color: rgba(99, 102, 241, 0.1);
            border-left: 3px solid var(--primary);
        }

        ::-webkit-scrollbar {
            width: 6px;
            height: 6px;
        }

        ::-webkit-scrollbar-track {
            background: transparent;
        }

        ::-webkit-scrollbar-thumb {
            background: var(--muted);
            border-radius: 3px;
        }

        ::-webkit-scrollbar-thumb:hover {
            background: var(--muted-foreground);
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
        
                    {/* PHP code removed */}

    <div className="desktop-main">
            
            <div className="card">
                <div className="p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="size-9 rounded bg-primary flex items-center justify-center">
                            <svg className="size-5 text-primary-foreground" viewBox="0 0 20 20" fill="none">
                                <path stroke="currentColor" strokeWidth="1.667" d="M10 2.5l3.333 6.667H6.667L10 2.5z"/>
                                <path stroke="currentColor" strokeWidth="1.667" d="M3.333 10.833h13.334"/>
                                <path stroke="currentColor" strokeWidth="1.667" d="M5.833 13.333h8.334"/>
                                <path stroke="currentColor" strokeWidth="1.667" d="M7.5 15.833h5"/>
                            </svg>
                        </div>
                        <div>
                            <h1 className="text-3xl font-display">Leaderboard</h1>
                            <div className="text-sm text-muted-foreground">Global ranking based on Eagle Coins</div>
                        </div>
                    </div>
                    <div className="badge badge-outline-warning">LIVE</div>
                </div>
            </div>

            
            <div className="grid grid-cols-2 gap-4">
                <div className="card animate-fadeIn">
                    <div className="p-4 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <div className="bullet"></div>
                            <span className="text-sm font-medium uppercase">YOUR RANK</span>
                        </div>
                    </div>
                    <div className="bg-accent p-4">
                        <div className="flex items-center">
                            <span className="text-5xl font-display text-destructive" id="user-rank">#{/* PHP code removed */}</span>
                        </div>
                        <div className="mt-2">
                            <p className="text-sm font-medium text-muted-foreground tracking-wide">
                                OUT OF {/* PHP code removed */} USERS
                            </p>
                        </div>
                    </div>
                </div>

                <div className="card animate-fadeIn" style={{ animationDelay: '0.1s' }}>
                    <div className="p-4 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <div className="bullet bullet-success"></div>
                            <span className="text-sm font-medium uppercase">YOUR COINS</span>
                        </div>
                    </div>
                    <div className="bg-accent p-4">
                        <div className="flex items-center">
                            <span className="text-5xl font-display text-success" id="user-coins">{/* PHP code removed */}</span>
                            <span className="ml-3">
                                <img src="images/coin.png" alt="Eagle Coin" style={{ width: '40px', height: '40px' }} loading="lazy" /> 
                            </span>
                        </div>
                        <div className="mt-2">
                            <p className="text-sm font-medium text-muted-foreground tracking-wide">
                                TOTAL EAGLE COINS
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            
            <div className="card animate-slideUp" style={{ animationDelay: '0.3s' }}>
                <div className="p-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="bullet"></div>
                        <span className="text-sm font-medium uppercase">GLOBAL LEADERBOARD</span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                        <span id="last-updated">Updated just now</span>
                    </div>
                </div>
                <div className="bg-accent p-6">
                    {/* PHP code removed */}
                        <div className="text-center py-10 text-muted-foreground">
                            No users found
                        </div>
                    {/* PHP code removed */}
                        <div className="overflow-x-auto">
                            <table className="leaderboard-table">
                                <thead>
                                    <tr>
                                        <th className="pl-4">RANK</th>
                                        <th>USER</th>
                                        <th className="text-right pr-4">EAGLE COINS</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* PHP code removed */}
                                        {/* PHP code removed */}
                                        <tr className="{/* PHP code removed */}">
                                            <td className="pl-4">
                                                <div className="flex items-center gap-3">
                                                    <div className="rank-badge {/* PHP code removed */}">
                                                        {/* PHP code removed */}
                                                    </div>
                                                    {/* PHP code removed */}
                                                        <div className="text-sm font-medium">
                                                            {/* PHP code removed */}
                                                        </div>
                                                    {/* PHP code removed */}
                                                </div>
                                            </td>
                                            <td>
                                                <div className="flex items-center gap-3">
                                                    <div className="user-avatar" style={{ width: '40px', height: '40px', position: 'relative', flexShrink: '0', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'visible' }}>
                                                        {/* PHP code removed */}
                                                            <img src="{/* PHP code removed */}" style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '50%' }} /> 
                                                        {/* PHP code removed */}
                                                            <svg className="w-6 h-6 text-muted-foreground opacity-40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                                                <circle cx="12" cy="7" r="4"></circle>
                                                            </svg>
                                                        {/* PHP code removed */}
                                                        <div
                                                            data-online-dot
                                                            data-user-id="{/* PHP code removed */}"
                                                            style={{ position: 'absolute', bottom: '-1px', right: '-1px', width: '12px', height: '12px', background: '#ff2a2f', border: '2px solid #000000', borderRadius: '50%', zIndex: '10', boxShadow: '0 0 0 1px rgba(255,255,255,0.05)', display: '{/* PHP code removed */}' }}>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="font-medium">{/* PHP code removed */}</div>
                                                        {/* PHP code removed */}
                                                            <div className="text-xs text-primary">(You)</div>
                                                        {/* PHP code removed */}
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="text-right pr-4">
                                                <div className="flex items-center justify-end gap-2">
                                                    <span className="font-bold text-lg">{/* PHP code removed */}</span>
                                                    <img src="images/coin.png" alt="Coin" style={{ width: '20px', height: '20px' }} loading="lazy" /> 
                                                </div>
                                            </td>
                                        </tr>
                                    {/* PHP code removed */}
                                </tbody>
                            </table>
                        </div>
                    {/* PHP code removed */}
                </div>
            </div>

            
            <div className="card animate-fadeIn" style={{ animationDelay: '0.5s' }}>
                <div className="p-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="bullet"></div>
                        <span className="text-sm font-medium uppercase">HOW IT WORKS</span>
                    </div>
                </div>
                <div className="bg-accent p-4">
                    <div className="grid grid-cols-3 gap-4">
                        <div className="text-center p-4 border border-border rounded-lg">
                            <div className="text-2xl font-bold text-primary mb-2">Complete Projects</div>
                            <div className="text-sm text-muted-foreground">Earn coins by completing lab projects</div>
                        </div>
                        <div className="text-center p-4 border border-border rounded-lg">
                            <div className="text-2xl font-bold text-primary mb-2">Participate in Labs</div>
                            <div className="text-sm text-muted-foreground">Active participation earns bonus coins</div>
                        </div>
                        <div className="text-center p-4 border border-border rounded-lg">
                            <div className="text-2xl font-bold text-primary mb-2">Weekly Challenges</div>
                            <div className="text-sm text-muted-foreground">Complete challenges for extra rewards</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </div>

    {/* Script tags removed */}
</div>

<footer className="footer" style={{ textAlign: 'center', padding: '2rem', color: 'var(--muted-foreground)', borderTop: '1px solid var(--border)', marginTop: 'auto', fontSize: '0.875rem' }}>
    <p>&copy; 2026 ProWorldz Ecosystem. All rights reserved.</p>
</footer>

    </>
  );
}
