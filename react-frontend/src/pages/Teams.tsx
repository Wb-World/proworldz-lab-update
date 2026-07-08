import './Teams.css';

export default function Teams() {
    return (
        <div className="teams-wrapper">
            
    <div id="loader-wrapper">
        <div id="loader"></div>
        <div id="loader-text">INITIALIZING ECOSYSTEM...</div>
    </div>

    
        
<div className="desktop-container">
        {/*  Left Sidebar - Navigation  */}
                    

    <div className="desktop-main">
            <div className="card header-card animate-fadeIn">
                <div>
                    <h1 className="text-2xl font-bold">Teams</h1>
                    <p className="text-xs text-muted-foreground uppercase">Discover and collaborate with specialized squads</p>
                </div>
                <div className="search-container">
                    <i className="fas fa-search search-icon"></i>
                    <input type="text" id="teamSearch" className="search-input" placeholder="Search team name..." />
                </div>
                <button className="create-btn" onClick={() => {console.log('openCreateModal')}}>
                    <i className="fas fa-plus"></i> Create Team
                </button>
            </div>

            
                <div className="alert alert-success animate-fadeIn">
                    <i className="fas fa-check-circle"></i> 
                </div>
            
                <div className="alert alert-error animate-fadeIn">
                    <i className="fas fa-exclamation-triangle"></i> 
                </div>
            

            

            {/*  Your Team Section  */}
            <div className="section-header">
                <h2>Your Team</h2>
                <div className="line"></div>
            </div>
            
            <div className="teams-grid" style={{marginBottom: '3rem'}}>
                
                    <div className="card empty-state" style={{gridColumn: '1 / -1', padding: '2rem'}}>
                        <p style={{fontSize: '0.8rem'}}>You haven't created a squad yet.</p>
                    </div>
                
                    
                        <div className="card team-card animate-fadeIn" onClick={() => {console.log('openTeamByDataId')}} style={{borderLeft: '4px solid var(--primary)'}}>
                            <div className="team-profile">
                                
                                    <img src="https://api.dicebear.com/7.x/initials/svg?seed=Team" alt="Team Profile" style={{objectFit: 'cover', width: '60px', height: '60px', borderRadius: '50%'}} />
                                
                                    <div style={{width: '60px', height: '60px', borderRadius: '50%', background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold'}}>
                                        
                                    </div>
                                
                            </div>
                            <div className="team-info">
                                <div className="team-name"></div>
                                <div className="team-meta">
                                    <span><i className="fas fa-crown" style={{color: '#8b0c10'}}></i> </span>
                                    <span><i className="fas fa-calendar-alt"></i> </span>
                                </div>
                            </div>
                        </div>
                    
                
            </div>

            {/*  All Teams Section  */}
            <div className="section-header">
                <h2>Global Alliances</h2>
                <div className="line"></div>
            </div>

            <div className="teams-grid" id="teamsList">
                
                    <div className="card empty-state" style={{gridColumn: '1 / -1', borderColor: '#ff2a2f'}}>
                        <i className="fas fa-exclamation-circle" style={{fontSize: '3rem', color: '#ff2a2f', marginBottom: '1rem'}}></i>
                        <p>Connection Error</p>
                    </div>
                
                    <div className="card empty-state" style={{gridColumn: '1 / -1'}}>
                        <i className="fas fa-users-slash" style={{fontSize: '3rem', opacity: '0.3', marginBottom: '1rem'}}></i>
                        <p>No teams found</p>
                    </div>
                
                    
                        <div className="card team-card animate-fadeIn" onClick={() => {console.log('openTeamByDataId')}}>
                            <div className="team-profile">
                                
                                    <img src="https://api.dicebear.com/7.x/initials/svg?seed=Team" alt="Team Profile" style={{objectFit: 'cover', width: '60px', height: '60px', borderRadius: '50%'}} />
                                
                                    <div style={{width: '60px', height: '60px', borderRadius: '50%', background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold'}}>
                                        
                                    </div>
                                
                            </div>
                            <div className="team-info">
                                <div className="team-name"></div>
                                <div className="team-meta">
                                    <span><i className="fas fa-crown" style={{color: '#8b0c10'}}></i> </span>
                                    <span><i className="fas fa-calendar-alt"></i> </span>
                                </div>
                            </div>
                        </div>
                    
                
            </div>
        </div>


    </div>

    {/*  Modal  */}
    <div id="teamModal" className="modal-overlay" onClick={() => {console.log('closeTeamModal')}}>
        <div className="modal-content" onClick={(e) => {e.stopPropagation()}}>
            <button className="close-modal" onClick={() => {console.log('closeTeamModal')}}>&times;</button>
            <div className="modal-header" id="modalHeader">
                {/*  Dynamic Content  */}
            </div>
            <div className="modal-body">
                <h3 className="uppercase text-xs text-muted-foreground font-bold" style={{marginBottom: '1rem'}}>Squad Roster (3 Members)</h3>
                <div className="member-list" id="memberList">
                    {/*  Dynamic Content  */}
                </div>
            </div>
        </div>
    </div>

    {/*  Create Team Modal  */}
    <div id="createModal" className="modal-overlay" onClick={() => {console.log('closeCreateModal')}}>
        <div className="modal-content create-modal-content" onClick={(e) => {e.stopPropagation()}}>
            <button className="close-modal" onClick={() => {console.log('closeCreateModal')}}>&times;</button>
            <div className="modal-header">
                <i className="fas fa-users-crown text-2xl text-primary" style={{fontSize: '2rem'}}></i>
                <div>
                    <h2 className="text-2xl font-bold">Forge Your Squad</h2>
                    <p className="text-xs text-muted-foreground uppercase">Assemble 3 elite members</p>
                </div>
            </div>
            <div className="modal-body">
                <form action="" method="POST" encType="multipart/form-data" id="createTeamForm">
                    <div className="form-group">
                        <label>Team Name</label>
                        <input type="text" name="team_name" className="form-input" placeholder="Epic Squad Name" required />
                    </div>

                    <div className="form-group">
                        <label>Team Profile Image</label>
                        <input type="file" name="team_profile" className="form-input" accept="image/*" />
                    </div>

                    <div className="form-group">
                        <label>Select 2 Members <span id="memberCountText">(1/3)</span></label>
                        <p className="text-xs text-muted-foreground" style={{marginBottom: '0.5rem'}}>You are automatically set as the Leader.</p>
                        <div className="members-picker" id="membersPicker">
                            
                                <label className="picker-item">
                                    <input type="checkbox" name="members[]" value="" onClick={() => console.log('updateSelection')} />
                                    <span></span>
                                </label>
                            
                        </div>
                    </div>

                    <input type="hidden" name="create_team" value="1" />
                    <button type="submit" name="confirm_creation" id="submitTeam" className="create-btn" style={{width: '100%', justifyContent: 'center', marginTop: '1.5rem'}} disabled>
                        Confirm Creation
                    </button>
                </form>
            </div>
        </div>
    </div>

    {/*  Leader Dashboard Modal (Big Popup)  */}
    <div id="leaderModal" className="modal-overlay" onClick={() => {console.log('closeLeaderModal')}}>
        <div className="modal-content leader-modal" onClick={(e) => {e.stopPropagation()}}>
            <button className="close-modal" onClick={() => {console.log('closeLeaderModal')}}>&times;</button>
            <div className="modal-header">
                <i className="fas fa-crown text-2xl" style={{color: '#8b0c10', fontSize: '2rem'}}></i>
                <div>
                    <h2 className="text-2xl font-bold">Commander Dashboard</h2>
                    <p className="text-xs text-muted-foreground uppercase" id="leaderModalSubtitle">Full Roster Management</p>
                </div>
            </div>
            <div className="modal-body">
                <table className="stats-table">
                    <thead>
                        <tr>
                            <th>User</th>
                            <th>Status</th>
                            <th>Eagle Coins</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                            <tr>
                                <td className="flex items-center gap-3">
                                    <div style={{width: '32px', height: '32px', borderRadius: '50%', overflow: 'hidden', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--primary)'}}>
                                        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Player" style={{width: '100%', height: '100%', objectFit: 'contain'}} onError={(e) => { (e.target as HTMLImageElement).src = '/images/default.png'; }} />
                                    </div>
                                    <span className="font-bold"></span>
                                </td>
                                <td>
                                    <span className="role-tag role-member">Active</span>
                                </td>
                                <td>
                                    <div className="coin-amount">
                                        <i className="fas fa-coins"></i> 
                                    </div>
                                </td>
                            </tr>
                        
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    
<footer className="footer" style={{textAlign: 'center', padding: '2rem', color: 'var(--muted-foreground)', borderTop: '1px solid var(--border)', marginTop: 'auto', fontSize: '0.875rem'}}>
    <p>&copy; 2026 ProWorldz Ecosystem. All rights reserved.</p>
</footer>



        </div>
    );
}
