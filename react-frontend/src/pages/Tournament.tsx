import './Tournament.css';

export default function Tournament() {
    return (
        <div className="tournament-wrapper">
            
    <div id="loader-wrapper">
        <div id="loader"></div>
        <div id="loader-text">INITIALIZING ECOSYSTEM...</div>
    </div>

    
        
<div className="desktop-container">
            

    <main className="desktop-main">
            <div className="card">
                <div className="p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="size-9 rounded bg-primary flex items-center justify-center">
                             <i className="fas fa-trophy text-primary-foreground" style={{fontSize: '1rem'}}></i>
                        </div>
                        <div>
                            <h1 className="text-3xl font-display">Battle Arena</h1>
                            <div className="text-sm text-muted-foreground uppercase">Admin Approval Required for all Battles</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="alert alert-success"></div>
            <div className="alert alert-error"></div>

            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--gap)'}}>
                {/*  1v1 Challenge: Online Only  */}
                <div className="card">
                    <div className="form-section">
                        <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem'}}>
                            <i className="fas fa-user-ninja" style={{color: 'var(--primary)'}}></i>
                            <h2 style={{fontSize: '0.9rem', fontWeight: '700', textTransform: 'uppercase'}}>1v1 Battle</h2>
                        </div>
                        <form method="POST">
                            <input type="hidden" name="action" value="challenge_1v1" />
                            <div className="input-group">
                                <label>Select Online Opponent</label>
                                <select name="challenged_id" id="challengedPlayerSelect" required>
                                    <option value="">Choose a player...</option>
                                    
                                        <option value="" data-user-id=""> (Online)</option>
                                    
                                </select>
                            </div>
                            <button type="submit" id="challenge1v1Button" className="btn btn-primary" style={{marginTop: '1rem', width: '100%'}} >
                                Request Battle
                            </button>
                        </form>
                    </div>
                </div>

                {/*  3v3 Challenge: Leader Only + Search  */}
                <div className="card">
                    <div className="form-section">
                        <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem'}}>
                            <i className="fas fa-users" style={{color: 'var(--primary)'}}></i>
                            <h2 style={{fontSize: '0.9rem', fontWeight: '700', textTransform: 'uppercase'}}>Team Battle 3v3</h2>
                        </div>
                        
                            <p style={{fontSize: '0.75rem', color: '#ff2a2f', border: '1px solid rgba(239,68,68,0.3)', padding: '0.5rem', borderRadius: '4px', background: 'rgba(239,68,68,0.05)'}}>
                                Only Team Leaders can initiate team battles.
                            </p>
                        
                            <form method="POST" id="teamBattleForm">
                                <input type="hidden" name="action" value="challenge_3v3" />
                                <div className="input-group">
                                    <label>Your Team (Auto-filled)</label>
                                    <select name="my_team_id" required>
                                        
                                            <option value=""></option>
                                        
                                    </select>
                                </div>
                                <div className="input-group" style={{marginTop: '1rem'}}>
                                    <label>Opponent Team (Searchable)</label>
                                    <div className="search-box">
                                        <i className="fas fa-search"></i>
                                        <input type="text" id="tournamentSearch" placeholder="Search tournaments..." className="search-input" onKeyUp={() => console.log('filterTeams')} />
                                    </div>
                                    <select name="opp_team_id" id="oppTeamSelect" required>
                                        <option value="">Select Target...</option>
                                        
                                            <option value=""></option>
                                        
                                    </select>
                                </div>
                                <button type="submit" className="btn btn-primary" style={{marginTop: '1rem', width: '100%'}}>Initiate Team War</button>
                            </form>
                        
                    </div>
                </div>
            </div>

            {/*  Active & Pending Challenges  */}
            <div style={{marginTop: '1rem'}}>
                <h2 style={{fontSize: '0.9rem', fontWeight: '700', textTransform: 'uppercase', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                    <i className="fas fa-fire" style={{color: '#ff2a2f'}}></i> Your Battle Dashboard
                </h2>
                <div className="battle-grid">
                    
                        <div className="card" style={{gridColumn: '1/-1', padding: '2rem', textAlign: 'center', color: 'var(--muted-foreground)', fontSize: '0.85rem'}}>
                            No active or pending battles. Start one above!
                        </div>
                    
                        
                            <div className="battle-card">
                                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem'}}>
                                    <span className="battle-type"> Battle</span>
                                    <div style={{display: 'flex', gap: '0.4rem'}}>
                                        <span className="badge badge-">Admin: </span>
                                        <span className="badge badge-">Match: </span>
                                    </div>
                                </div>
                                <div className="vs-container">
                                    <div className="participant" style={{position: 'relative'}}>
                                        <div style={{position: 'relative', display: 'inline-block'}}>
                                            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Player" onError={(e) => { (e.target as HTMLImageElement).src = '/images/default.png'; }} style={{marginBottom: '0'}} /> 
                                            <div
                                                data-online-dot
                                                data-user-id=""
                                                style={{position: 'absolute', bottom: '0', right: '0', width: '12px', height: '12px', background: '#ff2a2f', border: '2px solid #080808', borderRadius: '50%', zIndex: '10', display: ''}}>
                                            </div>
                                        </div>
                                        <div className="member-list-text" style={{marginTop: '0.5rem'}}></div>
                                    </div>
                                    <div className="vs-divider">VS</div>
                                    <div className="participant" style={{position: 'relative'}}>
                                        <div style={{position: 'relative', display: 'inline-block'}}>
                                            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Player" onError={(e) => { (e.target as HTMLImageElement).src = '/images/default.png'; }} style={{marginBottom: '0'}} /> 
                                            <div
                                                data-online-dot
                                                data-user-id=""
                                                style={{position: 'absolute', bottom: '0', right: '0', width: '12px', height: '12px', background: '#ff2a2f', border: '2px solid #080808', borderRadius: '50%', zIndex: '10', display: ''}}>
                                            </div>
                                        </div>
                                        <div className="member-list-text" style={{marginTop: '0.5rem'}}></div>
                                    </div>
                                </div>
                                
                                    <form method="POST">
                                        <input type="hidden" name="action" value="accept_battle" />
                                        <input type="hidden" name="battle_id" value="" />
                                        <button type="submit" className="btn btn-primary" style={{width: '100%'}}>Accept (50 Coins)</button>
                                    </form>
                                
                                    <div style={{textAlign: 'center', fontSize: '0.7rem', color: 'var(--muted-foreground)', paddingTop: '0.5rem', borderTop: '1px solid var(--border)'}}>
                                        Waiting for admin to verify the request...
                                    </div>
                                
                            </div>
                        
                    
                </div>
            </div>
        </main>
    </div>

    

        </div>
    );
}
