import './Download.css';

export default function Download() {
    return (
        <div className="download-wrapper">
            
    <div id="loader-wrapper">
        <div id="loader"></div>
        <div id="loader-text">INITIALIZING ECOSYSTEM...</div>
    </div>

<div className="tv-noise"></div>


    
<div className="desktop-container">
                        

    <div className="desktop-main">
        
        <section className="page-header animate-fadeIn">
            <h1>Eaglone IDE</h1>
            <p>Download the latest stable desktop build for your labs and coursework.</p>
        </section>

        <div className="download-wrapper animate-fadeIn delay-1">
            <div className="download-card">
                <img className="download-image" src="/images/eagle-ide.png" alt="Eaglone IDE" loading="lazy" /> 
                <div className="download-info">
                    <h2 className="download-title">Download for Windows</h2>
                    <p className="download-desc">Secure, fast, and built for focused lab work with a streamlined developer experience.</p>
                    <div className="download-actions">
                        <a className="download-btn"
			   href=""
			   download>
			   Download Eaglone IDE
			</a>

                    </div>
                    <div className="download-meta">Latest version  • Windows installer (.exe)</div>
                </div>
            </div>
        </div>

        
        <footer className="footer animate-fadeIn delay-3">
            <p>&copy; 2026 Secure Worldz. All rights reserved.</p>
        </footer>
    </div>

    </div>
</div>




    );
}
