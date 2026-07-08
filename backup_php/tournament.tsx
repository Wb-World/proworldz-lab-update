import React from 'react';

export default function Component() {
  return (
    <>
{/* DOCTYPE removed */}
<div className="html-wrapper">
<div className="head-wrapper">
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Tournament - Proworldz</title>
    <link rel="icon" type="image/webp" href="image.png" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />
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

        .battle-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
            gap: 1.5rem;
        }
        .battle-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
            gap: 1.5rem;
        }

        .battle-card {
            padding: 1.5rem;
            background: rgba(255, 255, 255, 0.02);
            border: 1px solid var(--border);
            border-radius: var(--radius);
        }

        .battle-type {
            font-size: 0.65rem;
            text-transform: uppercase;
            font-weight: 800;
            padding: 0.2rem 0.5rem;
            border-radius: 4px;
            background: var(--primary);
            color: white;
        }

        /* Fixed Visibility for members */
        .member-list-text { color: #a0a0a0 !important; font-size: 0.85rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.02em; }

        .vs-container {
            display: flex; align-items: center; justify-content: space-between; padding: 1rem 0;
        }

        .participant { text-align: center; flex: 1; }
        .participant img { width: 50px; height: 50px; border-radius: 50%; border: 2px solid var(--primary); margin-bottom: 0.5rem; background: #000; }
        .vs-divider { font-size: 1.1rem; font-weight: 900; color: var(--muted-foreground); padding: 0 0.5rem; }

        .btn {
            padding: 0.7rem 1rem; border-radius: 6px; border: none; cursor: pointer; font-weight: 600;
            text-transform: uppercase; font-size: 0.75rem; transition: all 0.2s;
        }
        .btn-primary { background: var(--primary); color: white; }
        .btn:disabled { opacity: 0.5; cursor: not-allowed; }

        .form-section { padding: 1.5rem; display: flex; flex-direction: column; gap: 1rem; }
        .input-group { display: flex; flex-direction: column; gap: 0.4rem; }
        .input-group label { font-size: 0.7rem; font-weight: 700; text-transform: uppercase; color: var(--muted-foreground); }

        select, input {
            background: rgba(139, 12, 16, 0.05); color: #fff; border: 1px solid var(--border);
            padding: 0.75rem; border-radius: 6px; font-family: inherit; font-size: 0.85rem;
        }
        select option { background: #080808; color: #fff; }

        .alert { padding: 1rem; border-radius: 6px; margin-bottom: 1.5rem; font-size: 0.85rem; }
        .alert-success { background: rgba(16, 185, 129, 0.1); border: 1px solid #ff2a2f; color: #ff2a2f; }
        .alert-error { background: rgba(239, 68, 68, 0.1); border: 1px solid #ff2a2f; color: #ff2a2f; }

        .badge { padding: 2px 8px; border-radius: 99px; font-size: 0.6rem; text-transform: uppercase; font-weight: 700; }
        .badge-pending_admin { color: #ff2a2f; border: 1px solid #ff2a2f; }
        .badge-pending { color: #8b0c10; border: 1px solid #8b0c10; }
        .badge-accepted { color: #ff2a2f; border: 1px solid #ff2a2f; }
        .badge-rejected { color: #ff2a2f; border: 1px solid #ff2a2f; }

        .search-box { position: relative; margin-bottom: 0.5rem; }
        .search-box i { position: absolute; left: 10px; top: 50%; transform: translateY(-50%); color: var(--muted-foreground); font-size: 0.8rem; }
        .search-box input { padding-left: 30px; width: 100%; font-size: 0.8rem; }

        
        

        
        

        

        

        

        

        
        

        

        

        

        

        

        

        

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

    <main className="desktop-main">
            <div className="card">
                <div className="p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="size-9 rounded bg-primary flex items-center justify-center">
                             <i className="fas fa-trophy text-primary-foreground" style={{ fontSize: '1rem' }}></i>
                        </div>
                        <div>
                            <h1 className="text-3xl font-display">Battle Arena</h1>
                            <div className="text-sm text-muted-foreground uppercase">Admin Approval Required for all Battles</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* PHP code removed */}<div className="alert alert-success">{/* PHP code removed */}</div>{/* PHP code removed */}
            {/* PHP code removed */}<div className="alert alert-error">{/* PHP code removed */}</div>{/* PHP code removed */}

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--gap)' }}>
                {/*  1v1 Challenge: Online Only  */}
                <div className="card">
                    <div className="form-section">
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                            <i className="fas fa-user-ninja" style={{ color: 'var(--primary)' }}></i>
                            <h2 style={{ fontSize: '0.9rem', fontWeight: '700', textTransform: 'uppercase' }}>1v1 Battle</h2>
                        </div>
                        <form method="POST">
                            <input type="hidden" name="action" value="challenge_1v1" />
                            <div className="input-group">
                                <label>Select Online Opponent</label>
                                <select name="challenged_id" id="challengedPlayerSelect" required>
                                    <option value="">Choose a player...</option>
                                    {/* PHP code removed */}
                                        <option defaultValue="" data-user-id="{/* PHP code removed */}">{/* PHP code removed */} (Online)</option>
                                    {/* PHP code removed */}
                                </select>
                            </div>
                            <button type="submit" id="challenge1v1Button" className="btn btn-primary" style={{ marginTop: '1rem', width: '100%' }} {/* PHP code removed */}>
                                Request Battle
                            </button>
                        </form>
                    </div>
                </div>

                {/*  3v3 Challenge: Leader Only + Search  */}
                <div className="card">
                    <div className="form-section">
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                            <i className="fas fa-users" style={{ color: 'var(--primary)' }}></i>
                            <h2 style={{ fontSize: '0.9rem', fontWeight: '700', textTransform: 'uppercase' }}>Team Battle 3v3</h2>
                        </div>
                        {/* PHP code removed */}
                            <p style={{ fontSize: '0.75rem', color: '#ff2a2f', border: '1px solid rgba(239,68,68,0.3)', padding: '0.5rem', borderRadius: '4px', background: 'rgba(239,68,68,0.05)' }}>
                                Only Team Leaders can initiate team battles.
                            </p>
                        {/* PHP code removed */}
                            <form method="POST" id="teamBattleForm">
                                <input type="hidden" name="action" value="challenge_3v3" />
                                <div className="input-group">
                                    <label>Your Team (Auto-filled)</label>
                                    <select name="my_team_id" required>
                                        {/* PHP code removed */}
                                            <option defaultValue="">{/* PHP code removed */}</option>
                                        {/* PHP code removed */}
                                    </select>
                                </div>
                                <div className="input-group" style={{ marginTop: '1rem' }}>
                                    <label>Opponent Team (Searchable)</label>
                                    <div className="search-box">
                                        <i className="fas fa-search"></i>
                                        <input type="text" id="oppTeamSearch" placeholder="Search teams..." onkeyup="filterTeams()" />
                                    </div>
                                    <select name="opp_team_id" id="oppTeamSelect" required>
                                        <option value="">Select Target...</option>
                                        {/* PHP code removed */}
                                            <option defaultValue="">{/* PHP code removed */}</option>
                                        {/* PHP code removed */}
                                    </select>
                                </div>
                                <button type="submit" className="btn btn-primary" style={{ marginTop: '1rem', width: '100%' }}>Initiate Team War</button>
                            </form>
                        {/* PHP code removed */}
                    </div>
                </div>
            </div>

            {/*  Active & Pending Challenges  */}
            <div style={{ marginTop: '1rem' }}>
                <h2 style={{ fontSize: '0.9rem', fontWeight: '700', textTransform: 'uppercase', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <i className="fas fa-fire" style={{ color: '#ff2a2f' }}></i> Your Battle Dashboard
                </h2>
                <div className="battle-grid">
                    {/* PHP code removed */}
                        <div className="card" style={{ gridColumn: '1/-1', padding: '2rem', textAlign: 'center', color: 'var(--muted-foreground)', fontSize: '0.85rem' }}>
                            No active or pending battles. Start one above!
                        </div>
                    {/* PHP code removed */}
                        {/* PHP code removed */}
                            <div className="battle-card">
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                                    <span className="battle-type">{/* PHP code removed */} Battle</span>
                                    <div style={{ display: 'flex', gap: '0.4rem' }}>
                                        <span className="badge badge-{/* PHP code removed */}">Admin: {/* PHP code removed */}</span>
                                        <span className="badge badge-{/* PHP code removed */}">Match: {/* PHP code removed */}</span>
                                    </div>
                                </div>
                                <div className="vs-container">
                                    <div className="participant" style={{ position: 'relative' }}>
                                        <div style={{ position: 'relative', display: 'inline-block' }}>
                                            <img src="api/get_avatar_img.php?id={/* PHP code removed */}"
                                                style={{ position: 'absolute', bottom: '0', right: '0', width: '12px', height: '12px', background: '#ff2a2f', border: '2px solid #080808', borderRadius: '50%', zIndex: '10', display: '{/* PHP code removed */}' }} />
                                            </div>
                                        </div>
                                        <div className="member-list-text" style={{ marginTop: '0.5rem' }}>{/* PHP code removed */}</div>
                                    </div>
                                    <div className="vs-divider">VS</div>
                                    <div className="participant" style={{ position: 'relative' }}>
                                        <div style={{ position: 'relative', display: 'inline-block' }}>
                                            <img src="api/get_avatar_img.php?id={/* PHP code removed */}"
                                                style={{ position: 'absolute', bottom: '0', right: '0', width: '12px', height: '12px', background: '#ff2a2f', border: '2px solid #080808', borderRadius: '50%', zIndex: '10', display: '{/* PHP code removed */}' }} />
                                            </div>
                                        </div>
                                        <div className="member-list-text" style={{ marginTop: '0.5rem' }}>{/* PHP code removed */}</div>
                                    </div>
                                </div>
                                {/* PHP code removed */}
                                    <form method="POST">
                                        <input type="hidden" name="action" value="accept_battle" />
                                        <input type="hidden" name="battle_id" value="{/* PHP code removed */}
                                    <div style={{ textAlign: 'center', fontSize: '0.7rem', color: 'var(--muted-foreground)', paddingTop: '0.5rem', borderTop: '1px solid var(--border)' }} />
                                        Waiting for admin to verify the request...
                                    </div>
                                {/* PHP code removed */}
                            </div>
                        {/* PHP code removed */}
                    {/* PHP code removed */}
                </div>
            </div>
        </div>
    </div>

    {/* Script tags removed */}
</div>
</div>

    </>
  );
}
