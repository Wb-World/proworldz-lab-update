import './Leaderboard.css';

export default function Leaderboard() {
    return (
        <div className="leaderboard-wrapper">
            


    <div id="loader-wrapper">
        <div id="loader"></div>
        <div id="loader-text">INITIALIZING ECOSYSTEM...</div>
    </div>
    
    <div className="desktop-container">
        
                    

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
                            <span className="text-5xl font-display text-destructive" id="user-rank">#</span>
                        </div>
                        <div className="mt-2">
                            <p className="text-sm font-medium text-muted-foreground tracking-wide">
                                OUT OF  USERS
                            </p>
                        </div>
                    </div>
                </div>

                <div className="card animate-fadeIn" style={{animationDelay: '0.1s'}}>
                    <div className="p-4 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <div className="bullet bullet-success"></div>
                            <span className="text-sm font-medium uppercase">YOUR COINS</span>
                        </div>
                    </div>
                    <div className="bg-accent p-4">
                        <div className="flex items-center">
                            <span className="text-5xl font-display text-success" id="user-coins"></span>
                            <span className="ml-3">
                                <img src="/images/coin.png" alt="Eagle Coin" style={{width: '40px', height: '40px'}} loading="lazy" /> 
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

            
            <div className="card animate-slideUp" style={{animationDelay: '0.3s'}}>
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
                    
                        <div className="text-center py-10 text-muted-foreground">
                            No users found
                        </div>
                    
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
                                    
                                        
                                        <tr className="">
                                            <td className="pl-4">
                                                <div className="flex items-center gap-3">
                                                    <div className="rank-badge ">
                                                        
                                                    </div>
                                                    
                                                        <div className="text-sm font-medium">
                                                            
                                                        </div>
                                                    
                                                </div>
                                            </td>
                                            <td>
                                                <div className="flex items-center gap-3">
                                                    <div className="user-avatar" style={{width: '40px', height: '40px', position: 'relative', flexShrink: '0', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'visible'}}>
                                                        
                                                            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Unknown" alt="" style={{width: '100%', height: '100%', objectFit: 'contain', borderRadius: '50%'}} /> 
                                                        
                                                            <svg className="w-6 h-6 text-muted-foreground opacity-40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                                                <circle cx="12" cy="7" r="4"></circle>
                                                            </svg>
                                                        
                                                        <div
                                                            data-online-dot
                                                            data-user-id=""
                                                            style={{position: 'absolute', bottom: '-1px', right: '-1px', width: '12px', height: '12px', background: '#ff2a2f', border: '2px solid #000000', borderRadius: '50%', zIndex: '10', boxShadow: '0 0 0 1px rgba(255,255,255,0.05)', display: ''}}>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="font-medium"></div>
                                                        
                                                            <div className="text-xs text-primary">(You)</div>
                                                        
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="text-right pr-4">
                                                <div className="flex items-center justify-end gap-2">
                                                    <span className="font-bold text-lg"></span>
                                                    <img src="/images/coin.png" alt="Coin" style={{width: '20px', height: '20px'}} loading="lazy" /> 
                                                </div>
                                            </td>
                                        </tr>
                                    
                                </tbody>
                            </table>
                        </div>
                    
                </div>
            </div>

            
            <div className="card animate-fadeIn" style={{animationDelay: '0.5s'}}>
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

    
<footer className="footer" style={{textAlign: 'center', padding: '2rem', color: 'var(--muted-foreground)', borderTop: '1px solid var(--border)', marginTop: 'auto', fontSize: '0.875rem'}}>
    <p>&copy; 2026 ProWorldz Ecosystem. All rights reserved.</p>
</footer>

        </div>
    );
}
