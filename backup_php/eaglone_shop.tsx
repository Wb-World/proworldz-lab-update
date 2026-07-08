import React from 'react';

export default function Component() {
  return (
    <>
{/* DOCTYPE removed */}
<div className="html-wrapper">
<div className="head-wrapper">
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Eaglone Shop | Proworldz</title>
    <link rel="icon" type="image/png" href="image.png" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
{/* Script tags removed */}
<style dangerouslySetInnerHTML={{ __html: `
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            border-color: rgba(229, 231, 235, 0.3);
            outline-color: rgba(156, 163, 175, 0.5);
            overscroll-behavior: auto;
        }

        body {
            font-family: 'Roboto Mono', monospace;
            background-color: #000000;
            color: #ffffff;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            min-width: 1280px;
            overflow-x: auto;
        }

        @font-face {
            font-family: "Rebels";
            src: url("https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu4mxK.woff2") format("woff2");
            font-weight: normal;
            font-style: normal;
            font-display: swap;
        }

        :root {
            --sides: 1.5rem;
            --radius: 0.625rem;
            --background: #000000;
            --foreground: #ffffff;
            --card: #080808;
            --card-foreground: #ffffff;
            --popover: #080808;
            --popover-foreground: #ffffff;
            --primary: #ff2a2f;
            --primary-foreground: #ffffff;
            --secondary: #080808;
            --secondary-foreground: #ffffff;
            --muted: #080808;
            --muted-foreground: #a0a0a0;
            --accent: rgba(248, 250, 252, 0.05);
            --accent-foreground: #ffffff;
            --border: rgba(139, 12, 16, 0.1);
            --pop: rgba(255, 255, 255, 0.025);
            --input: rgba(139, 12, 16, 0.15);
            --ring: rgba(148, 163, 184, 0.5);
            --success: #ff2a2f;
            --destructive: #ff2a2f;
            --warning: #8b0c10;
            --sidebar: #080808;
            --sidebar-foreground: #ffffff;
            --sidebar-primary: #ff2a2f;
            --sidebar-primary-foreground: #ffffff;
            --sidebar-accent: rgba(248, 250, 252, 0.05);
            --sidebar-accent-foreground: #ffffff;
            --sidebar-border: rgba(139, 12, 16, 0.1);
            --sidebar-ring: rgba(148, 163, 184, 0.5);
            --gap: 1.5rem;
            --shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
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

        

        /* ===== DESKTOP LAYOUT ===== */
        .desktop-container {
            display: grid;
            grid-template-columns: 280px 1fr;
            gap: var(--gap, 1.5rem);
            min-height: 100vh;
            padding: var(--sides, 1.5rem);
            background-color: var(--background);
        }

        

        .desktop-main {
            display: flex;
            flex-direction: column;
            gap: var(--gap);
        }

        .font-display {
            font-family: 'Rebels', 'Roboto Mono', monospace;
            font-weight: 700;
            letter-spacing: -0.02em;
        }

        .flex { display: flex; }
        .items-center { align-items: center; }
        .justify-center { justify-content: center; }
        .flex-1 { flex: 1 1 0%; }
        .gap-3 { gap: 0.75rem; }
        .p-4 { padding: 1rem; }
        .p-3 { padding: 0.75rem; }
        .rounded-lg { border-radius: var(--radius); }
        .size-12 { width: 3rem; height: 3rem; }
        .size-8 { width: 2rem; height: 2rem; }
        .bg-primary { background-color: var(--primary); }
        .text-primary-foreground { color: var(--primary-foreground); }
        .text-2xl { font-size: 1.5rem; line-height: 2rem; }
        .text-xs { font-size: 0.75rem; line-height: 1rem; }
        .uppercase { text-transform: uppercase; }
        .text-muted-foreground { color: var(--muted-foreground); }

        .card {
            background-color: var(--card);
            border-radius: var(--radius);
            border: 1px solid var(--border);
            overflow: hidden;
        }

        
        
        
        
        .space-y-1 > * + * { margin-top: 0.25rem; }

        /* shop body */
        .shop-wrapper {
            display: flex;
            flex-direction: column;
            gap: 1.25rem;
        }
        .coin-pill {
            display: inline-flex;
            align-items: center;
            gap: 0.35rem;
            padding: 0.4rem 0.75rem;
            border-radius: 9999px;
            background: rgba(99, 102, 241, 0.15);
            border: 1px solid var(--border);
            font-weight: 700;
            width: fit-content;
        }
        .coin-pill img {
            width: 18px;
            height: 18px;
        }
        .active-avatar-pill {
            display: inline-flex;
            align-items: center;
            gap: 0.4rem;
            padding: 0.4rem 0.75rem;
            border-radius: 9999px;
            background: rgba(148, 163, 184, 0.12);
            border: 1px solid var(--border);
            font-weight: 700;
            width: fit-content;
        }
        .shop-header h1 {
            font-size: 2rem;
            letter-spacing: -0.01em;
            margin-bottom: 0.35rem;
        }
        .shop-header p {
            color: var(--muted-foreground);
            font-size: 0.95rem;
        }
        .section-title {
            font-size: 1.1rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.04em;
            color: var(--muted-foreground);
        }
        .avatar-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
            gap: 1rem;
        }
        .avatar-card {
            background: transparent;
            border: none;
            border-radius: 0;
            padding: 0;
            display: flex;
            flex-direction: column;
            gap: 0.6rem;
            box-shadow: none;
            align-items: center;
            text-align: center;
        }
        .avatar-thumb {
            display: block;
            width: 100%;
            height: auto;
            max-height: 260px;
            object-fit: contain;
            border-radius: 0;
            background: transparent;
            border: none;
            box-shadow: none;
        }
        .avatar-thumb-wrap {
            position: relative;
            width: 100%;
        }
        .set-avatar-btn {
            position: absolute;
            inset: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            background: rgba(0,0,0,0.5);
            color: #fff;
            opacity: 0;
            transition: opacity 0.2s ease;
            text-decoration: none;
            font-weight: 700;
            border-radius: 0;
        }
        .avatar-thumb-wrap:hover .set-avatar-btn {
            opacity: 1;
        }
        .avatar-name {
            font-weight: 700;
            font-size: 1rem;
        }
        .avatar-price {
            font-weight: 600;
            color: var(--warning);
            font-size: 0.95rem;
        }
        .avatar-status {
            font-weight: 700;
            color: var(--success);
            font-size: 0.9rem;
        }
        .buy-btn {
            margin-top: auto;
            display: block;
            width: 60%;
            min-width: 160px;
            max-width: 100%;
            text-align: center;
            margin-left: auto;
            margin-right: auto;
            padding: 0.65rem 0.9rem;
            border-radius: calc(var(--radius) - 2px);
            background: var(--primary);
            color: var(--primary-foreground);
            text-decoration: none;
            font-weight: 600;
            border: 1px solid var(--border);
            transition: transform 0.15s ease, box-shadow 0.2s ease;
        }
        .buy-btn:hover {
            transform: translateY(-1px);
            box-shadow: 0 12px 30px rgba(99,102,241,0.25);
        }

        ::-webkit-scrollbar { width: 6px; height: 6px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: var(--muted); border-radius: 3px; }
        ::-webkit-scrollbar-thumb:hover { background: var(--muted-foreground); }

        
        

        
        

        

        

        

        

        
        

        

        

        

        

        

        

        

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
            <div className="shop-wrapper">
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
                    <div className="shop-header">
                        <h1 className="font-display">Welcome to the Shop</h1>
                        <p>Pick an avatar and purchase with your Eagle Coins.</p>
                    </div>
                    <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                        <div className="active-avatar-pill">
                            <img src="{/* PHP code removed */}</span />
                        </div>
                        <div className="coin-pill">
                            <img src="images/coin.png" alt="coin" loading="lazy" /> 
                            <span>{/* PHP code removed */} Eagle Coins</span>
                        </div>
                    </div>
                </div>

                {/* PHP code removed */}
                    <div className="avatar-status" style={{ color: 'var(--success)', fontWeight: '700', textAlign: 'left' }}>{/* PHP code removed */}</div>
                {/* PHP code removed */}
                {/* PHP code removed */}
                    <div className="avatar-status" style={{ color: 'var(--destructive)', fontWeight: '700', textAlign: 'left' }}>{/* PHP code removed */}</div>
                {/* PHP code removed */}

                <div className="section-title">Available Avatars</div>

                <div className="avatar-grid">
                    {/* PHP code removed */}
                        <div className="avatar-card" style={{ gridColumn: '1 / -1', alignItems: 'center', textAlign: 'center', padding: '2rem' }}>
                            <div className="avatar-name" style={{ color: 'var(--muted-foreground)' }}>No new avatars are available in the shop right now.</div>
                        </div>
                    {/* PHP code removed */}
                        {/* PHP code removed */}
                        <div className="avatar-card">
                            <div className="avatar-thumb-wrap">
                                <img className="avatar-thumb" src="{/* PHP code removed */} avatar" /> 
                                {/* PHP code removed */}
                                <a className="set-avatar-btn" href="#" onClick="event.preventDefault(); document.getElementById('set-avatar-{/* PHP code removed */}').submit();">Set as avatar</a>
                                <form id="set-avatar-{/* PHP code removed */}" method="post" style={{ display: 'none' }}>
                                    <input type="hidden" name="set_avatar" value="{/* PHP code removed */}
                            </div />
                            <div className="avatar-name">Name : {/* PHP code removed */}</div>
                            <div className="avatar-price">Eagle Coin : {/* PHP code removed */}</div>
                            {/* PHP code removed */}
                                <div className="avatar-status">Purchased{/* PHP code removed */}</div>
                            {/* PHP code removed */}
                                <form method="post" style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                                    <input type="hidden" name="purchase_avatar" value="{/* PHP code removed */}
                        </div />
                        {/* PHP code removed */}
                    {/* PHP code removed */}
                </div>

                <div className="section-title" style={{ marginTop: '1rem' }}>Your Avatars</div>
                <div className="avatar-grid">
                    {/* PHP code removed */}
                        <div className="avatar-card" style={{ alignItems: 'center', textAlign: 'center' }}>
                            <div className="avatar-name" style={{ color: 'var(--muted-foreground)' }}>You haven’t purchased any avatars yet.</div>
                        </div>
                    {/* PHP code removed */}
                        {/* PHP code removed */}
                        <div className="avatar-card">
                            <div className="avatar-thumb-wrap">
                                <img className="avatar-thumb" src="{/* PHP code removed */} avatar" /> 
                                {/* PHP code removed */}
                                <a className="set-avatar-btn" href="#" onClick="event.preventDefault(); document.getElementById('set-avatar-owned-{/* PHP code removed */}').submit();">Set as avatar</a>
                                <form id="set-avatar-owned-{/* PHP code removed */}" method="post" style={{ display: 'none' }}>
                                    <input type="hidden" name="set_avatar" value="{/* PHP code removed */}
                            </div />
                            <div className="avatar-name">Name : {/* PHP code removed */}</div>
                            <div className="avatar-price" style={{ color: 'var(--success)' }}>Eagle Coin : Free</div>
                            <div className="avatar-status">Purchased{/* PHP code removed */}</div>
                        </div>
                        {/* PHP code removed */}
                    {/* PHP code removed */}
                </div>
            </div>
        </div>
    </div>
    </div>
</div>

<footer className="footer" style={{ textAlign: 'center', padding: '2rem', color: 'var(--muted-foreground)', borderTop: '1px solid var(--border)', marginTop: 'auto', fontSize: '0.875rem' }}>
    <p>&copy; 2026 ProWorldz Ecosystem. All rights reserved.</p>
</footer>

{/* Script tags removed */}

    </>
  );
}
