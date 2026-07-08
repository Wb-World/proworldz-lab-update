import './Lab.css';

export default function Lab() {
    return (
        <div className="lab-wrapper">
            
    <div id="loader-wrapper">
        <div id="loader"></div>
        <div id="loader-text">INITIALIZING ECOSYSTEM...</div>
    </div>

    
        
<div className="desktop-container">
        {/*  Left Sidebar - Navigation  */}
        

    <div className="desktop-main">
            {/*  Dashboard Header  */}
            <div className="card">
                <div className="p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="size-9 rounded bg-primary flex items-center justify-center">
                            <svg className="size-5 text-primary-foreground" viewBox="0 0 20 20" fill="none">
                                <path stroke="currentColor" strokeWidth="1.667" d="M16.228 3.772c1.31 1.31-.416 5.16-3.856 8.6-3.44 3.44-7.29 5.167-8.6 3.856-1.31-1.31.415-5.16 3.855-8.6 3.44-3.44 7.29-5.167 8.6-3.856Z"/>
                                <path stroke="currentColor" strokeWidth="1.667" d="M16.228 16.228c-1.31 1.31-5.161-.416-8.601-3.855-3.44-3.44-5.166-7.29-3.856-8.601 1.31-1.31 5.162.416 8.601 3.855 3.44 3.44 5.166 7.29 3.856 8.601Z"/>
                            </svg>
                        </div>
                        <div>
                            <h1 className="text-3xl font-display">Laboratory</h1>
                            <div className="text-sm text-muted-foreground">Access interactive coding environments and Linux terminal</div>
                        </div>
                    </div>
                </div>
            </div>

            {/*  Lab Grid  */}
            <section className="lab-grid fade-in">

                <div className="lab-card animate-fadeIn">
                    <div className="lab-img" style={{height: '30cap'}}>
                        <img src="/images/eaglone/ep.png" alt="Compilers" loading="lazy" /> 
                    </div>
                    <div className="lab-content">
                        <h3>Compilers and Interpreters</h3>
                        <p>Unleash your programming skills with our inbuilt compilers and interpreters. Code, compile, and test in multiple languages in a seamless environment designed for learning and experimentation.</p>
                        <button className="lab-btn" onClick={() => window.location.href='/lab/langs'}>
                            Go to lab
                        </button>
                    </div>
                </div>

                <div className="lab-card animate-fadeIn" style={{animationDelay: '0.1s'}}>
                    <div className="lab-img" style={{height: '30cap'}}>
                        <img src="/images/eaglone/es.png" alt="linux terminal" loading="lazy" /> 
                    </div>
                    <div className="lab-content">
                        <h3>Linux Terminal</h3>
                        <p>Master Linux commands with our inbuilt terminal. Practice shell scripting, system administration, and learn essential Linux skills in a safe, interactive environment.</p>
                        <button className="lab-btn" onClick={() => window.location.href='/lab/lin_term'}>
                            Go to lab
                        </button>
                    </div>
                </div>
            </section>
    </div>
</div>

    

        </div>
    );
}
