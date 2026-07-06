import './Ourcourse.css';

export default function Ourcourse() {
    return (
        <div className="ourcourse-wrapper">
            

<div className="tv-noise"></div>
    <div id="loader-wrapper">
        <div id="loader"></div>
        <div id="loader-text">INITIALIZING ECOSYSTEM...</div>
    </div>

    

<div className="desktop-container">
    
                    

    <div className="desktop-main">
        
        <section className="page-header animate-fadeIn">
            <h1>Our Courses</h1>
            <p>Comprehensive programs designed by industry experts to transform you into a sought-after technology professional.</p>
        </section>

        
        <div className="courses-container">
            
            <div className="course-card animate-fadeIn">
                <div className="course-image">
                    <img src="/images/jai-bro/secure-x.png" alt="Secure X" loading="lazy" /> 
                    <div className="course-badge">Advanced</div>
                </div>
                <div className="course-body">
                    <h3>Secure X</h3>
                    <p>Master advanced cybersecurity techniques and digital defense strategies. Learn to protect systems from sophisticated cyber threats and vulnerabilities.</p>
                    <button onClick={() => {window.location.href='/course-details/secure-x.pdf'}} className="course-action">
                        View Details
                        <i className="fas fa-arrow-right"></i>
                    </button>
                </div>
            </div>

            
            <div className="course-card animate-fadeIn">
                <div className="course-image">
                    <img src="/images/jai-bro/ai.png" alt="AI Verse Web Labs" loading="lazy" /> 
                    <div className="course-badge">Professional</div>
                </div>
                <div className="course-body">
                    <h3>AI Verse Web Labs</h3>
                    <p>Build intelligent web applications using AI-driven development, machine learning integration, and automated engineering workflows.</p>
                    <button onClick={() => {window.location.href='/course-details/Ai.pdf'}} className="course-action">
                        View Details
                        <i className="fas fa-arrow-right"></i>
                    </button>
                </div>
            </div>

            
            <div className="course-card animate-fadeIn">
                <div className="course-image">
                    <img src="/images/jai-bro/hunt-elite.png" alt="Hunt Elite" loading="lazy" /> 
                    <div className="course-badge">Expert</div>
                </div>
                <div className="course-body">
                    <h3>Hunt Elite</h3>
                    <p>Professional bug bounty hunting and exploit analysis. Learn advanced penetration testing and ethical hacking techniques.</p>
                    <button onClick={() => {window.location.href='/course-details/Bug.pdf'}} className="course-action">
                        View Details
                        <i className="fas fa-arrow-right"></i>
                    </button>
                </div>
            </div>

            
            <div className="course-card animate-fadeIn">
                <div className="course-image">
                    <img src="/images/jai-bro/creative-craft.png" alt="Creative Craft" loading="lazy" /> 
                    <div className="course-badge">Creative</div>
                </div>
                <div className="course-body">
                    <h3>Creative Craft</h3>
                    <p>Master strategic visual communication design, branding, and UI/UX principles to create compelling digital experiences.</p>
                    <button onClick={() => {window.location.href='/course-details/Canva.pdf'}} className="course-action">
                        View Details
                        <i className="fas fa-arrow-right"></i>
                    </button>
                </div>
            </div>

            
            <div className="course-card animate-fadeIn">
                <div className="course-image">
                    <img src="/images/jai-bro/py-desk.png" alt="Py Desk Systems" loading="lazy" /> 
                    <div className="course-badge">Development</div>
                </div>
                <div className="course-body">
                    <h3>Py Desk Systems</h3>
                    <p>Develop enterprise-grade desktop applications with Python. Master GUI frameworks and system-level programming.</p>
                    <button onClick={() => {window.location.href='/course-details/py.pdf'}} className="course-action">
                        View Details
                        <i className="fas fa-arrow-right"></i>
                    </button>
                </div>
            </div>

            
            <div className="course-card animate-fadeIn">
                <div className="course-image">
                    <img src="/images/jai-bro/code-f.png" alt="Code Foundry" loading="lazy" /> 
                    <div className="course-badge">Fundamental</div>
                </div>
                <div className="course-body">
                    <h3>Code Foundry</h3>
                    <p>Professional programming language mastery. Deep dive into best practices and advanced software engineering concepts.</p>
                    <button onClick={() => {window.location.href='/course-details/Code.pdf'}} className="course-action">
                        View Details
                        <i className="fas fa-arrow-right"></i>
                    </button>
                </div>
            </div>

            
            <div className="course-card animate-fadeIn">
                <div className="course-image">
                    <img src="/images/jai-bro/startup.png" alt="Startup Gene Labs" loading="lazy" /> 
                    <div className="course-badge">Entrepreneurship</div>
                </div>
                <div className="course-body">
                    <h3>Startup Gene Labs</h3>
                    <p>Venture creation and startup scaling. Build, fund, and grow tech startups from idea to successful enterprise.</p>
                    <button onClick={() => {window.location.href='/course-details/startup.pdf'}} className="course-action">
                        View Details
                        <i className="fas fa-arrow-right"></i>
                    </button>
                </div>
            </div>

            
            <div className="course-card animate-fadeIn">
                <div className="course-image">
                    <img src="/images/jai-bro/cli.png" alt="CLI++ Systems" loading="lazy" /> 
                    <div className="course-badge">Systems</div>
                </div>
                <div className="course-body">
                    <h3>CLI++ Systems</h3>
                    <p>C++ command-line tool engineering for Linux. Build powerful system tools using advanced programming techniques.</p>
                    <button onClick={() => {window.location.href='/course-details/CLI.pdf'}} className="course-action">
                        View Details
                        <i className="fas fa-arrow-right"></i>
                    </button>
                </div>
            </div>

            
            <div className="course-card animate-fadeIn">
                <div className="course-image">
                    <img src="/images/jai-bro/app.png" alt="API Man" loading="lazy" /> 
                    <div className="course-badge">Backend</div>
                </div>
                <div className="course-body">
                    <h3>API Man</h3>
                    <p>Master API development and management. Build RESTful and GraphQL APIs with scalable architecture patterns.</p>
                    <button onClick={() => {window.location.href='/course-details/api.pdf'}} className="course-action">
                        View Details
                        <i className="fas fa-arrow-right"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>

</div>



        </div>
    );
}
