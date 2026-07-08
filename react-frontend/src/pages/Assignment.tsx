import './Assignment.css';

export default function Assignment() {
    return (
        <div className="assignment-wrapper">
            
    <div id="loader-wrapper">
        <div id="loader"></div>
        <div id="loader-text">INITIALIZING ECOSYSTEM...</div>
    </div>

    
        
<div className="desktop-container">
        {/*  Left Sidebar - Navigation  */}
                    

    <main className="desktop-main">
        
        <div className="success-message">
            <i className="fa-solid fa-circle-check" style={{marginRight: '8px'}}></i>
            
        </div>
    
    
    
        <div className="error-message" style={{backgroundColor: 'rgba(239, 68, 68, 0.1)', color: '#ff2a2f', border: '1px solid rgba(239, 68, 68, 0.3)', padding: '1rem', borderRadius: '0.625rem', textAlign: 'center', marginBottom: '1rem'}}>
            <i className="fa-solid fa-circle-exclamation" style={{marginRight: '8px'}}></i>
            
        </div>
    
        <div className="page-header">
            <h1>Projects - </h1>
            <p>Submit your course projects and earn rewards</p>
        </div>


        
            {/*  NO ASSIGNMENTS FOUND  */}
            <div className="no-assignment-container">
                <img src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png" alt="No Projects" className="assignment-image" loading="lazy" /> 
                <h2>No Projects Found</h2>
                <p>
                    You haven't enrolled in any course yet or no projects are currently available for your course.
                </p>
            </div>
        
            {/*  ASSIGNMENT LIST  */}
            <div className="assignment-list">
                
                    <div className="assignment-card" id="assignment-card-">
                        <div className="assignment-left">
                            <div className="assignment-icon">
                                <i className="fa-solid fa-file-lines"></i>
                            </div>
                            <div className="assignment-details">
                                <h3></h3>
                                <p></p>
                                
                                {/*  Coin Reward Display  */}
                                <div className="coin-reward">
                                    <span className="coin-amount"></span>
                                    <img src="/images/coin.png" alt="Coin" style={{width: '20px', height: '20px'}} loading="lazy" /> 
                                    <span className="text-muted-foreground" style={{fontSize: '0.875rem'}}>Eagle Coins Reward</span>
                                </div>
                            </div>
                        </div>
                        <div className="assignment-right">
                            
                                <div className="status-badge completed">
                                    <i className="fa-solid fa-circle-check mr-2"></i>Submitted
                                </div>
                                <button className="submit-btn completed" disabled>
                                    Submitted
                                </button>
                            
                                <button className="submit-btn" onClick={() => {console.log('openSubmitModal')}}>
                                    Submit Project
                                </button>
                            
                        </div>
                    </div>
                
            </div>
        
    </main>
</div>

{/*  Submit Modal  */}
<div id="submitModal" className="modal-overlay">
    <div className="modal-content">
        <div className="modal-header" style={{flexDirection: 'column', alignItems: 'center', gap: '1rem'}}>
            <svg className="github-logo" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            <h3 style={{fontFamily: '\'Rebels\', monospace', fontSize: '1.5rem', color: 'var(--foreground)'}}>SUBMIT PROJECT</h3>
        </div>
        <div className="modal-body">
            <input 
                type="text" 
                id="projectLink" 
                className="project-input" 
                placeholder="paste your project link"
                required
             />
        </div>
        <div className="modal-footer">
            <button className="modal-btn modal-btn-cancel" type="button" onClick={() => {console.log('closeSubmitModal')}}>Cancel</button>
            <button className="modal-btn modal-btn-submit" type="button" onClick={() => {console.log('submitAssignment')}}>Submit</button>
        </div>
    </div>
</div>

{/*  Hidden form for submission  */}
<form method="POST" id="hiddenForm" className="hidden-form">
    <input type="hidden" name="submit_assignment" value="1" />
    <input type="hidden" name="assignmentTitle" id="formAssignmentTitle" />
    <input type="hidden" name="coins" id="formCoins" />
    <input type="hidden" name="projectLink" id="formProjectLink" />
</form>


<footer className="footer" style={{textAlign: 'center', padding: '2rem', color: 'var(--muted-foreground)', borderTop: '1px solid var(--border)', marginTop: 'auto', fontSize: '0.875rem'}}>
    <p>&copy; 2026 ProWorldz Ecosystem. All rights reserved.</p>
</footer>



        </div>
    );
}
