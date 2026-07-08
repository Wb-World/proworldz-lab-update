import './Tasks.css';

export default function Tasks() {
    return (
        <div className="tasks-wrapper">
            
    <div id="loader-wrapper">
        <div id="loader"></div>
        <div id="loader-text">INITIALIZING ECOSYSTEM...</div>
    </div>

    
        
<div className="desktop-container">
        {/*  Left Sidebar - Navigation  */}
                

    <div className="desktop-main">
            <div className="card animate-fadeIn">
                <div className="p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="size-9 rounded bg-primary flex items-center justify-center">
                            <svg className="size-5 text-primary-foreground" viewBox="0 0 20 20" fill="none" stroke="currentColor">
                                <path strokeWidth="1.5" d="M16.667 16.667V5a2.5 2.5 0 0 0-2.5-2.5H6.667a2.5 2.5 0 0 0-2.5 2.5v11.667"/>
                                <path strokeWidth="1.5" d="M6.667 2.5v15"/>
                                <path strokeWidth="1.5" d="M11.667 4.167l4.166 4.166" strokeLinecap="round"/>
                                <path strokeWidth="1.5" d="M13.333 8.333l-2.5 2.5-2.5-2.5 2.5-2.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                        <div>
                            <h1 className="text-3xl font-display">Programming Tasks</h1>
                            <div className="text-sm text-muted-foreground">Complete challenges to earn Eagle Points</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
                <div className="card animate-fadeIn">
                    <div className="p-4 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <div className="bullet"></div>
                            <span className="text-sm font-medium uppercase">Total Tasks</span>
                        </div>
                    </div>
                    <div className="bg-accent p-4">
                        <div className="flex items-center">
                            <span id="total-tasks" className="text-5xl font-display text-primary">0</span>
                        </div>
                        <div className="mt-2">
                            <p className="text-sm font-medium text-muted-foreground tracking-wide">AVAILABLE TASKS</p>
                        </div>
                    </div>
                </div>

                <div className="card animate-fadeIn" style={{animationDelay: '0.1s'}}>
                    <div className="p-4 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <div className="bullet bullet-success"></div>
                            <span className="text-sm font-medium uppercase">Completed</span>
                        </div>
                    </div>
                    <div className="bg-accent p-4">
                        <div className="flex items-center">
                            <span id="completed-tasks" className="text-5xl font-display text-success">0</span>
                        </div>
                        <div className="mt-2">
                            <p className="text-sm font-medium text-muted-foreground tracking-wide">TASKS SOLVED</p>
                        </div>
                    </div>
                </div>

                <div className="card animate-fadeIn" style={{animationDelay: '0.2s'}}>
                    <div className="p-4 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <div className="bullet"></div>
                            <span className="text-sm font-medium uppercase">Pendings</span>
                        </div>
                    </div>
                    <div className="bg-accent p-4">
                        <div className="flex items-center">
                            <span id="pendings" className="text-5xl font-display text-warning">0</span>
                        </div>
                        <div className="mt-2">
                            <p className="text-sm font-medium text-muted-foreground tracking-wide">Pending tasks</p>
                        </div>
                    </div>
                </div>
            </div>

            <div id="showall">

            </div>
        </div>
    </div>
{/*  ===== LANGUAGE SELECTION MODAL =====  */}
<div id="langModalOverlay" style={{display: 'none', position: 'fixed', inset: '0', background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(8px)', zIndex: '9999', alignItems: 'center', justifyContent: 'center', padding: '24px'}}>
    <div style={{width: '100%', maxWidth: '700px', background: '#0d1117', border: '1px solid var(--primary)', borderRadius: '12px', overflow: 'hidden', animation: 'modalIn 0.3s cubic-bezier(0.23, 1, 0.32, 1)'}}>
        <div style={{background: 'linear-gradient(to right, rgba(255,42,47,0.2), transparent)', padding: '24px', borderBottom: '1px solid rgba(255,255,255,0.08)', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <div>
                <div style={{fontSize: '0.7rem', fontWeight: '800', color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '4px'}}>Choose Language</div>
                <h3 id="langModalTaskName" style={{fontFamily: '\'Roboto Mono\',monospace', fontSize: '1rem', fontWeight: '700', color: '#fff', textTransform: 'uppercase'}}></h3>
            </div>
            <button onClick={() => {console.log('closeLangModal')}} style={{background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer', fontSize: '1.2rem'}}>&#10005;</button>
        </div>
        <div style={{padding: '28px'}}>
            <p style={{color: '#94a3b8', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '20px'}}>Select the programming language you want to use:</p>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '14px'}}>
                {/*  Python  */}
                <button className="lang-choice-btn" onClick={() => ((...args) => console.log("selectLang", ...args))('/lab/codings/pythoni')} style={{background: 'rgba(49,112,143,0.1)', border: '1px solid rgba(49,112,143,0.3)', borderRadius: '10px', padding: '18px 12px', cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', transition: 'all 0.2s', color: '#fff'}}>
                    <i className="fab fa-python" style={{fontSize: '2.5rem', color: '#3b8ab8'}}></i>
                    <span style={{fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em'}}>Python</span>
                </button>
                {/*  JavaScript  */}
                <button className="lang-choice-btn" onClick={() => ((...args) => console.log("selectLang", ...args))('/lab/codings/js')} style={{background: 'rgba(247,223,30,0.05)', border: '1px solid rgba(247,223,30,0.2)', borderRadius: '10px', padding: '18px 12px', cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', transition: 'all 0.2s', color: '#fff'}}>
                    <i className="fab fa-js-square" style={{fontSize: '2.5rem', color: '#f7df1e'}}></i>
                    <span style={{fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em'}}>JavaScript</span>
                </button>
                {/*  C++  */}
                <button className="lang-choice-btn" onClick={() => ((...args) => console.log("selectLang", ...args))('/lab/codings/cpp')} style={{background: 'rgba(0,85,164,0.08)', border: '1px solid rgba(0,85,164,0.25)', borderRadius: '10px', padding: '18px 12px', cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', transition: 'all 0.2s', color: '#fff'}}>
                    <i className="fas fa-cogs" style={{fontSize: '2.5rem', color: '#6495ed'}}></i>
                    <span style={{fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em'}}>C++</span>
                </button>
                {/*  PHP  */}
                <button className="lang-choice-btn" onClick={() => ((...args) => console.log("selectLang", ...args))('/lab/codings/php')} style={{background: 'rgba(119,123,180,0.08)', border: '1px solid rgba(119,123,180,0.25)', borderRadius: '10px', padding: '18px 12px', cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', transition: 'all 0.2s', color: '#fff'}}>
                    <i className="fab fa-php" style={{fontSize: '2.5rem', color: '#777bb4'}}></i>
                    <span style={{fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em'}}>PHP</span>
                </button>
            </div>
            <p style={{color: '#555', fontSize: '0.7rem', textAlign: 'center', marginTop: '18px'}}>You can switch language anytime from your lab environment.</p>
        </div>
    </div>
</div>

{/* CSS moved to Tasks.css */}



<footer className="footer" style={{textAlign: 'center', padding: '2rem', color: 'var(--muted-foreground)', borderTop: '1px solid var(--border)', marginTop: 'auto', fontSize: '0.875rem'}}>
    <p>&copy; 2026 ProWorldz Ecosystem. All rights reserved.</p>
</footer>



        </div>
    );
}
