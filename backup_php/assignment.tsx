import React from 'react';

export default function Component() {
  return (
    <>
{/* DOCTYPE removed */}
<div className="html-wrapper">
<div className="head-wrapper">
<meta charSet="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Projects | ProWorldz</title>
<link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />
{/* Script tags removed */}
<style dangerouslySetInnerHTML={{ __html: `
/* ===== CSS RESET & BASE ===== */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border-color: rgba(229, 231, 235, 0.3);
    outline-color: rgba(156, 163, 175, 0.5);
}

body {
    font-family: 'Roboto Mono', monospace;
    background-color: #000000;
    color: #ffffff;
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

/* ===== CUSTOM PROPERTIES ===== */
:root {
            --gap: 1.5rem;
            --sides: 1.5rem;
    --radius: 0.625rem;
    --background: #000000;
    --foreground: #ffffff;
    --card: #080808;
    --border: rgba(139, 12, 16, 0.1);
    --primary: #ff2a2f;
    --primary-light: #8183f4;
    --primary-foreground: #ffffff;
    --muted-foreground: #a0a0a0;
    --success: #ff2a2f;
    --warning: #8b0c10;
    
    --gradient-primary: linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%);
    --gradient-subtle: linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(129, 131, 244, 0.1) 100%);
    
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

/* ===== SIDEBAR STYLES ===== */


.card {
    background-color: var(--card);
    border-radius: var(--radius);
    border: 1px solid var(--border);
    overflow: hidden;
}

.p-4 { padding: 1rem; }
.p-3 { padding: 0.75rem; }

.flex { display: flex; }
.items-center { align-items: center; }
.gap-3 { gap: 0.75rem; }
.size-12 { width: 3rem; height: 3rem; }
.bg-primary { background-color: var(--primary); }
.rounded-lg { border-radius: var(--radius); }
.text-primary-foreground { color: var(--primary-foreground); }
.text-2xl { font-size: 1.5rem; line-height: 2rem; }
.font-display { font-family: 'Rebels', monospace; font-weight: 700; }
.text-xs { font-size: 0.75rem; line-height: 1rem; }
.text-muted-foreground { color: var(--muted-foreground); }
.uppercase { text-transform: uppercase; }
.flex-1 { flex: 1 1 0%; }
.flex-shrink-0 { flex-shrink: 0; }

/* Navigation Styles */


.space-y-1 > * + * {
    margin-top: 0.25rem;
}











/* ===== MAIN CONTENT ===== */
.desktop-main {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    overflow-y: auto;
    max-height: calc(100vh - 3rem);
    padding-right: 0.5rem;
}

/* Page Header */
.page-header {
    text-align: center;
    margin-bottom: 2rem;
    position: relative;
}

.page-header h1 {
    font-family: 'Rebels', monospace;
    font-size: 3rem;
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 0.5rem;
    letter-spacing: -0.02em;
    text-transform: uppercase;
}

.page-header p {
    color: var(--muted-foreground);
    font-size: 1.125rem;
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
}

/* Success Message */
.success-message {
    background-color: rgba(16, 185, 129, 0.1);
    color: var(--success);
    border: 1px solid rgba(16, 185, 129, 0.3);
    padding: 1rem;
    border-radius: var(--radius);
    text-align: center;
    margin-bottom: 1rem;
    animation: fadeIn 0.5s ease-in;
}

@keyframes fadeIn {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
}

/* ===== ASSIGNMENT LIST ===== */
.assignment-list {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.assignment-card {
    background: linear-gradient(145deg, var(--card) 0%, rgba(8, 8, 8, 0.9) 100%);
    border-radius: var(--radius);
    border: 1px solid var(--border);
    padding: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
}

.assignment-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: var(--gradient-primary);
    opacity: 0;
    transition: opacity 0.3s ease;
}

.assignment-card:hover::before {
    opacity: 1;
}

.assignment-card:hover {
    transform: translateY(-6px);
    border-color: var(--primary);
    box-shadow: var(--shadow-xl);
}

/* Assignment Left Content */
.assignment-left {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    flex: 1;
}

.assignment-icon {
    width: 56px;
    height: 56px;
    border-radius: calc(var(--radius) - 2px);
    background: var(--gradient-primary);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
}

.assignment-icon i {
    font-size: 1.5rem;
    color: var(--primary-foreground);
}

.assignment-details {
    flex: 1;
}

.assignment-details h3 {
    font-family: 'Rebels', monospace;
    font-size: 1.5rem;
    color: var(--foreground);
    margin-bottom: 0.5rem;
}

.assignment-details p {
    color: var(--muted-foreground);
    font-size: 0.95rem;
    margin-bottom: 0.5rem;
}

/* Coin Reward Styles */
.coin-reward {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-top: 0.75rem;
}

.coin-reward .coin-amount {
    font-size: 1.125rem;
    font-weight: 700;
    color: var(--warning);
}

.coin-reward img {
    width: 20px;
    height: 20px;
    object-fit: contain;
}

/* Assignment Right Content */
.assignment-right {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 1rem;
    min-width: 180px;
}

/* ===== BUTTONS ===== */
.submit-btn {
    padding: 0.875rem 2rem;
    background: var(--gradient-primary);
    color: var(--primary-foreground);
    border: none;
    border-radius: calc(var(--radius) - 4px);
    font-size: 0.875rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    width: 100%;
    text-align: center;
}

.submit-btn:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-xl);
}

.submit-btn.completed {
    background: var(--success);
    cursor: default;
    opacity: 0.7;
}

.submit-btn.completed:hover {
    transform: none;
    box-shadow: none;
}

/* Status Badge */
.status-badge {
    padding: 0.25rem 0.75rem;
    border-radius: 9999px;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    text-align: center;
    width: 100%;
}

.status-badge.pending {
    background-color: rgba(245, 158, 11, 0.1);
    color: var(--warning);
    border: 1px solid rgba(245, 158, 11, 0.3);
}

.status-badge.completed {
    background-color: rgba(16, 185, 129, 0.1);
    color: var(--success);
    border: 1px solid rgba(16, 185, 129, 0.3);
}

/* ===== NO ASSIGNMENT PAGE ===== */
.no-assignment-container {
    text-align: center;
    padding: 4rem 2rem;
    position: relative;
    overflow: hidden;
    margin-top: 2rem;
}

.assignment-image {
    width: 300px;
    height: 300px;
    margin: 0 auto 2rem;
    object-fit: contain;
    filter: drop-shadow(0 0 20px rgba(99, 102, 241, 0.3));
}

.no-assignment-container h2 {
    font-family: 'Rebels', monospace;
    font-size: 2.5rem;
    color: var(--foreground);
    margin-bottom: 1rem;
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.no-assignment-container p {
    color: var(--muted-foreground);
    font-size: 1.125rem;
    max-width: 500px;
    margin: 0 auto 2rem;
    line-height: 1.6;
}

/* ===== MODAL STYLES ===== */
.modal-overlay {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(4px);
    z-index: 1000;
    align-items: center;
    justify-content: center;
}

.modal-overlay.active {
    display: flex;
}

.modal-content {
    background: linear-gradient(145deg, var(--card) 0%, rgba(8, 8, 8, 0.95) 100%);
    border-radius: var(--radius);
    border: 1px solid var(--border);
    padding: 2rem;
    width: 90%;
    max-width: 400px;
    box-shadow: var(--shadow-2xl);
    animation: slideUp 0.3s ease-out;
}

@keyframes slideUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.modal-header {
    display: flex;
    justify-content: center;
    margin-bottom: 1.5rem;
}

.github-logo {
    width: 48px;
    height: 48px;
    color: var(--foreground);
    filter: drop-shadow(0 0 10px rgba(99, 102, 241, 0.2));
}

.modal-body {
    margin-bottom: 1.5rem;
}

.project-input {
    width: 100%;
    padding: 0.875rem 1rem;
    background-color: rgba(248, 250, 252, 0.05);
    border: 1px solid var(--border);
    border-radius: calc(var(--radius) - 2px);
    color: var(--foreground);
    font-family: 'Roboto Mono', monospace;
    font-size: 0.95rem;
    transition: all 0.2s ease;
}

.project-input::placeholder {
    color: var(--muted-foreground);
}

.project-input:focus {
    outline: none;
    background-color: rgba(248, 250, 252, 0.08);
    border-color: var(--primary);
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
}

.modal-footer {
    display: flex;
    gap: 1rem;
    justify-content: flex-end;
}

.modal-btn {
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: calc(var(--radius) - 4px);
    font-size: 0.875rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    cursor: pointer;
    transition: all 0.2s ease;
    font-family: 'Roboto Mono', monospace;
}

.modal-btn-cancel {
    background-color: rgba(248, 250, 252, 0.05);
    color: var(--foreground);
    border: 1px solid var(--border);
}

.modal-btn-cancel:hover {
    background-color: rgba(248, 250, 252, 0.1);
}

.modal-btn-submit {
    background: var(--gradient-primary);
    color: var(--primary-foreground);
}

.modal-btn-submit:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-xl);
}

.modal-btn-submit:active {
    transform: translateY(0);
}

/* Hidden form for submission */
.hidden-form {
    display: none;
}

/* ===== RESPONSIVE DESIGN ===== */
@media (max-width: 1024px) {
    .desktop-container {
            display: grid;
            grid-template-columns: 280px 1fr;
            gap: var(--gap, 1.5rem);
            min-height: 100vh;
            padding: var(--sides, 1.5rem);
            background-color: var(--background);
        }
    
    
    
    .page-header h1 {
        font-size: 2.5rem;
    }
}

@media (max-width: 768px) {
    .page-header h1 {
        font-size: 2rem;
    }
    
    .page-header p {
        font-size: 1rem;
        padding: 0 1rem;
    }
    
    .assignment-card {
        flex-direction: column;
        gap: 1.5rem;
        align-items: stretch;
    }
    
    .assignment-left {
        width: 100%;
    }
    
    .assignment-right {
        width: 100%;
        align-items: stretch;
    }
    
    .submit-btn {
        width: 100%;
    }
}

@media (max-width: 480px) {
    .desktop-container {
            display: grid;
            grid-template-columns: 280px 1fr;
            gap: var(--gap, 1.5rem);
            min-height: 100vh;
            padding: var(--sides, 1.5rem);
            background-color: var(--background);
        }
    
    .page-header {
        margin-bottom: 1.5rem;
    }
    
    .page-header h1 {
        font-size: 1.75rem;
    }
    
    .assignment-card {
        padding: 1.5rem;
    }
    
    .submit-btn {
        padding: 0.75rem 1.5rem;
    }
    
    .assignment-image {
        width: 200px;
        height: 200px;
    }
    
    .assignment-details h3 {
        font-size: 1.25rem;
    }

    .modal-content {
        width: 95%;
        padding: 1.5rem;
    }
    
    .modal-footer {
        flex-direction: column;
    }
    
    .modal-btn {
        width: 100%;
    }
}

/* Custom Scrollbar */
.desktop-main::-webkit-scrollbar {
    width: 6px;
}

.desktop-main::-webkit-scrollbar-track {
    background: transparent;
}

.desktop-main::-webkit-scrollbar-thumb {
    background: var(--muted-foreground);
    border-radius: 3px;
}

/* Utility Classes */
.gap-2 { gap: 0.5rem; }
.mt-2 { margin-top: 0.5rem; }
.font-bold { font-weight: 700; }
.text-lg { font-size: 1.125rem; }

        
        

        
        

        

        

        

        

        
        

        

        

        

        

        

        

        

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

    <main className="desktop-main">
        {/* PHP code removed */}
        <div className="success-message">
            <i className="fa-solid fa-circle-check" style={{ marginRight: '8px' }}></i>
            {/* PHP code removed */}
        </div>
    {/* PHP code removed */}
    
    {/* PHP code removed */}
        <div className="error-message" style={{ backgroundColor: 'rgba(239, 68, 68, 0.1)', color: '#ff2a2f', border: '1px solid rgba(239, 68, 68, 0.3)', padding: '1rem', borderRadius: '0.625rem', textAlign: 'center', marginBottom: '1rem' }}>
            <i className="fa-solid fa-circle-exclamation" style={{ marginRight: '8px' }}></i>
            {/* PHP code removed */}
        </div>
    {/* PHP code removed */}
        <div className="page-header">
            <h1>Projects - {/* PHP code removed */}</h1>
            <p>Submit your course projects and earn rewards</p>
        </div>


        {/* PHP code removed */}
            {/*  NO ASSIGNMENTS FOUND  */}
            <div className="no-assignment-container">
                <img src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png" alt="No Projects" className="assignment-image" loading="lazy" /> 
                <h2>No Projects Found</h2>
                <p>
                    You haven't enrolled in any course yet or no projects are currently available for your course.
                </p>
            </div>
        {/* PHP code removed */}
            {/*  ASSIGNMENT LIST  */}
            <div className="assignment-list">
                {/* PHP code removed */}
                    <div className="assignment-card" id="assignment-card-{/* PHP code removed */}">
                        <div className="assignment-left">
                            <div className="assignment-icon">
                                <i className="fa-solid fa-file-lines"></i>
                            </div>
                            <div className="assignment-details">
                                <h3>{/* PHP code removed */}</h3>
                                <p>{/* PHP code removed */}</p>
                                
                                {/*  Coin Reward Display  */}
                                <div className="coin-reward">
                                    <span className="coin-amount">{/* PHP code removed */}</span>
                                    <img src="images/coin.png" alt="Coin" style={{ width: '20px', height: '20px' }} loading="lazy" /> 
                                    <span className="text-muted-foreground" style={{ fontSize: '0.875rem' }}>Eagle Coins Reward</span>
                                </div>
                            </div>
                        </div>
                        <div className="assignment-right">
                            {/* PHP code removed */}
                                <div className="status-badge completed">
                                    <i className="fa-solid fa-circle-check mr-2"></i>Submitted
                                </div>
                                <button className="submit-btn completed" disabled>
                                    Submitted
                                </button>
                            {/* PHP code removed */}
                                <button className="submit-btn" onClick="openSubmitModal('{/* PHP code removed */}', {/* PHP code removed */})">
                                    Submit Project
                                </button>
                            {/* PHP code removed */}
                        </div>
                    </div>
                {/* PHP code removed */}
            </div>
        {/* PHP code removed */}
    </main>
</div>

{/*  Submit Modal  */}
<div id="submitModal" className="modal-overlay">
    <div className="modal-content">
        <div className="modal-header" style={{ flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
            <svg className="github-logo" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            <h3 style={{ fontFamily: '\'Rebels\', monospace', fontSize: '1.5rem', color: 'var(--foreground)' }}>SUBMIT PROJECT</h3>
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
            <button className="modal-btn modal-btn-cancel" type="button" onClick="closeSubmitModal()">Cancel</button>
            <button className="modal-btn modal-btn-submit" type="button" onClick="submitAssignment()">Submit</button>
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

{/* Script tags removed */}
</div>

<footer className="footer" style={{ textAlign: 'center', padding: '2rem', color: 'var(--muted-foreground)', borderTop: '1px solid var(--border)', marginTop: 'auto', fontSize: '0.875rem' }}>
    <p>&copy; 2026 ProWorldz Ecosystem. All rights reserved.</p>
</footer>

{/* Script tags removed */}
</div>
</div>
```
    </>
  );
}
