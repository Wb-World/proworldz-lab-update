import React from 'react';

export default function Component() {
  return (
    <>
{/* DOCTYPE removed */}
<div className="html-wrapper">
<div className="head-wrapper">
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>OWASP-2025 HUB</title>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;700;800&family=Space+Grotesk:wght@500;700&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />
    <link rel="stylesheet" href="app-theme-overrides.css?v=20260518" />
    {/* Script tags removed */}
    <style dangerouslySetInnerHTML={{ __html: `
        :root {
            --bg: #06080c;
            --surface: rgba(255, 255, 255, 0.02);
            --border: rgba(255, 255, 255, 0.08);
            --accent: #c0151a;
            --accent-glow: rgba(192, 21, 26, 0.25);
            --text: #f8fafc;
            --text-muted: #94a3b8;
            --radius: 14px;
            --font-main: 'Plus Jakarta Sans', sans-serif;
            --font-heading: 'Space Grotesk', sans-serif;
        }
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            background-color: var(--bg);
            background-image: 
                radial-gradient(circle at 50% -20%, #1a0505 0%, var(--bg) 100%),
                repeating-linear-gradient(0deg, rgba(255,255,255,0.01) 0px, rgba(255,255,255,0.01) 1px, transparent 1px, transparent 2px);
            background-size: 100% 100%, 100% 4px;
            color: var(--text);
            font-family: var(--font-main);
            overflow-x: hidden;
            padding-bottom: 50px;
        }

        .container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }
        header { padding: 60px 0; text-align: center; }
        .hub-title {
            font-family: var(--font-heading);
            font-size: 3rem;
            font-weight: 800;
            text-transform: uppercase;
            background: linear-gradient(to right, #fff, var(--accent));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            margin-bottom: 8px;
        }
        .hub-subtitle { color: var(--text-muted); font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.3em; font-weight: 700; }
        
        .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 20px; }
        .card {
            aspect-ratio: 1 / 1;
            background: var(--surface);
            border: 1px solid var(--border);
            border-radius: var(--radius);
            padding: 20px;
            transition: all 0.25s;
            cursor: pointer;
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
        .card:hover { border-color: var(--accent); background: rgba(255, 255, 255, 0.05); transform: translateY(-5px); }
        .card i { font-size: 2.5rem; margin-bottom: 20px; color: var(--accent); }
        .vuln-name { font-size: 1rem; font-weight: 700; color: #fff; line-height: 1.4; }

        #hubPage, #detailPage { transition: opacity 0.3s ease; }
        #detailPage { display: none; padding-top: 40px; }
        .back-link { display: inline-flex; align-items: center; gap: 10px; color: var(--text-muted); text-decoration: none; margin-bottom: 30px; font-weight: 700; cursor: pointer; }
        .back-link:hover { color: var(--accent); }
        
        .mission-panel { background: rgba(13, 17, 23, 0.8); border: 1px solid var(--border); border-radius: 20px; padding: 40px; margin-bottom: 30px; }
        .mission-title { font-family: var(--font-heading); font-size: 2.2rem; font-weight: 800; margin-bottom: 20px; color: #fff; }
        .doc-section { margin-bottom: 20px; }
        .doc-label { font-size: 0.75rem; font-weight: 800; color: var(--accent); text-transform: uppercase; display: block; margin-bottom: 5px; }
        .doc-text { color: var(--text-muted); font-size: 0.95rem; }

        .challenge-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; margin-top: 30px; }
        .level-col { background: rgba(0,0,0,0.2); border-radius: 12px; padding: 20px; }
        .level-label { font-size: 0.75rem; font-weight: 800; text-transform: uppercase; margin-bottom: 15px; display: block; }
        .beg-label { color: #00ff9d; } .int-label { color: #ffcc00; } .adv-label { color: var(--accent); }
        
        .ch-card { background: #06080c; border: 1px solid var(--border); border-radius: 8px; padding: 15px; margin-bottom: 10px; cursor: pointer; transition: 0.2s; display: flex; justify-content: space-between; align-items: center; }
        .ch-card:hover { border-color: var(--accent); transform: translateX(5px); }
        .ch-card.finished { border-color: #00ff9d; color: #00ff9d; }
        
        /* Modal */
        .modal-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.9); backdrop-filter: blur(10px); z-index: 1000; display: none; align-items: center; justify-content: center; padding: 20px; }
        .modal-container { width: 100%; max-width: 600px; background: #0d1117; border: 1px solid var(--accent); border-radius: 16px; overflow: hidden; }
        .modal-header { padding: 20px; border-bottom: 1px solid var(--border); display: flex; justify-content: space-between; align-items: center; }
        .modal-body { padding: 30px; }
        .scenario-box { background: rgba(255,255,255,0.03); padding: 20px; border-radius: 8px; border-left: 4px solid var(--accent); margin-bottom: 25px; }
        .btn-action { display: inline-block; background: var(--accent); color: #fff; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-weight: 800; text-transform: uppercase; border: none; cursor: pointer; }
        .btn-lab { background: #00ff9d; color: #000; display: none; margin-top: 10px; }
        .flag-box { margin-top: 30px; padding-top: 20px; border-top: 1px solid var(--border); }
        .flag-input-group { display: flex; gap: 10px; margin-top: 10px; }
        .flag-input { flex: 1; background: #06080c; border: 1px solid var(--border); padding: 12px; color: #fff; border-radius: 6px; }
        .btn-submit { background: #fff; color: #000; padding: 0 20px; border-radius: 6px; border: none; font-weight: 800; cursor: pointer; }
    ` }} />
</div>
<div className="body-wrapper">

<div className="container">
    <div id="hubPage">
        <div style={{ paddingTop: '28px' }}>
            <a href="dashboard" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.82rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em', transition: 'color 0.2s' }} onmouseover="this.style.color='var(--accent)'" onmouseout="this.style.color='var(--text-muted)'">
                <i className="fa-solid fa-arrow-left"></i> Back to Dashboard
            </a>
        </div>
        <div className="head-wrapper">
            <h1 className="hub-title">OWASP-2025 HUB</h1>
            <p className="hub-subtitle">Enterprise Discovery Platform</p>
        </header>
        <div className="grid">
            {/* PHP code removed */}
                <div className="card" onClick="showDetail({/* PHP echo removed */})">
                    <i className="fa-solid {/* PHP echo removed */}"></i>
                    <span className="vuln-name" style={{ display: 'block' }}>{/* PHP echo removed */}</span>
                    <span style={{ fontSize: '0.6rem', color: 'var(--text-muted)', opacity: '0.5' }}>{/* PHP echo removed */} MODULE</span>
                </div>
            {/* PHP code removed */}
        </div>
    </div>

    <div id="detailPage">
        <div className="back-link" onClick="showHub()"><i className="fa-solid fa-arrow-left"></i> ESCAPE TO HUB</div>
        <div id="detailContent"></div>
    </div>
</div>

<div className="modal-overlay" id="modalOverlay" onClick="closeModal(event)">
    <div className="modal-container" onClick="event.stopPropagation()">
        <div className="modal-header">
            <h3 id="modalTitle">Mission Name</h3>
            <button style={{ background: 'none', border: 'none', color: '#fff' }} onClick="document.getElementById('modalOverlay').style.display='none'"><i className="fa-solid fa-xmark"></i></button>
        </div>
        <div className="modal-body">
            <div className="scenario-box">
                <span className="doc-label"><i className="fa-solid fa-briefcase"></i> Mission Scenario</span>
                <p id="modalScenario" style={{ fontSize: '0.95rem', lineHeight: '1.6', color: 'var(--text-muted)' }}></p>
            </div>
            <button className="btn-action" id="btnStart" onClick="startChallenge()">Initial Access</button>
            <a href="#" id="btnAccessLab" className="btn-action btn-lab" target="_blank">Access Lab Professional</a>
            
            <div className="flag-box">
                <span id="flagStatus" style={{ fontSize: '0.75rem', fontWeight: '800', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Flag Validation</span>
                <div className="flag-input-group">
                    <input type="text" id="flagInput" className="flag-input" placeholder="FLAG{...}" />
                    <button className="btn-submit" onClick="submitFlag()">Check</button>
                </div>
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
