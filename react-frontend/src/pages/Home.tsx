import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import './Home.css';

export default function Home() {
    return (
        <div className="home-wrapper">
            
    <Navbar />

    {/* Quick Links for Testing */}
    <div style={{padding: '2rem', background: '#080808', borderBottom: '1px solid var(--border)', display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center'}}>
        <strong style={{color: 'white', marginRight: '1rem', display: 'flex', alignItems: 'center'}}>Dev Links:</strong>
        {[
            { path: '/login', name: 'Login' },
            { path: '/signup', name: 'Signup' },
            { path: '/dashboard', name: 'Dashboard' },
            { path: '/profile', name: 'Profile' },
            { path: '/settings', name: 'Settings' },
            { path: '/lab', name: 'Lab' },
            { path: '/tasks', name: 'Tasks' },
            { path: '/course_video', name: 'Course Video' },
            { path: '/assignment', name: 'Assignment' },
            { path: '/leaderboard', name: 'Leaderboard' },
            { path: '/teams', name: 'Teams' },
            { path: '/tournament', name: 'Tournament' },
            { path: '/download', name: 'Download' }
        ].map(link => (
            <Link key={link.path} to={link.path} style={{color: 'var(--primary)', textDecoration: 'none', padding: '0.5rem 1rem', border: '1px solid var(--primary)', borderRadius: '4px', fontSize: '0.8rem', textTransform: 'uppercase'}}>
                {link.name}
            </Link>
        ))}
    </div>

    {/*  Hero Section  */}
    <section className="hero" id="home">
        <div className="hero-content">
            <div className="hero-badge">
                <i className="fas fa-star"></i>
                Premium Tech Training Platform
            </div>
            <h1>Master Advanced Technology Skills</h1>
            <p>Transform your career with industry-leading courses in cybersecurity, AI development, and cutting-edge technologies. Join thousands of professionals advancing their expertise.</p>
            <div className="hero-cta-group">
                <a href="#courses" className="btn btn-primary">
                    Explore Courses
                    <i className="fas fa-arrow-right"></i>
                </a>
                <a href="#features" className="btn btn-secondary">
                    <i className="fas fa-play-circle"></i>
                    See Features
                </a>
            </div>
        </div>
    </section>

    {/*  Features Section  */}
    <section className="features" id="features">
        <div className="section-header">
            <div className="section-badge">Why Choose Us</div>
            <h2 className="section-title">Enterprise-Grade Learning Experience</h2>
            <p className="section-description">Built for professionals who demand excellence. Our platform combines cutting-edge technology with expert instruction to deliver unmatched results.</p>
        </div>

        <div className="features-grid">
            <div className="feature-card fade-in-up">
                <div className="feature-icon">
                    <i className="fas fa-shield-alt"></i>
                </div>
                <h3>Industry-Leading Security</h3>
                <p>Learn from real-world cybersecurity scenarios with hands-on penetration testing, threat analysis, and advanced defense strategies.</p>
            </div>

            <div className="feature-card fade-in-up">
                <div className="feature-icon">
                    <i className="fas fa-brain"></i>
                </div>
                <h3>AI-Powered Development</h3>
                <p>Master artificial intelligence and machine learning with practical projects that prepare you for the future of technology.</p>
            </div>

            <div className="feature-card fade-in-up">
                <div className="feature-icon">
                    <i className="fas fa-rocket"></i>
                </div>
                <h3>Fast-Track Career Growth</h3>
                <p>Accelerate your professional development with industry-recognized certifications and direct pathways to high-demand roles.</p>
            </div>

            <div className="feature-card fade-in-up">
                <div className="feature-icon">
                    <i className="fas fa-users"></i>
                </div>
                <h3>Expert Mentorship</h3>
                <p>Learn directly from industry veterans with years of real-world experience in leading tech companies and startups.</p>
            </div>

            <div className="feature-card fade-in-up">
                <div className="feature-icon">
                    <i className="fas fa-laptop-code"></i>
                </div>
                <h3>Hands-On Projects</h3>
                <p>Build portfolio-worthy projects that demonstrate your skills to potential employers and clients in the tech industry.</p>
            </div>

            <div className="feature-card fade-in-up">
                <div className="feature-icon">
                    <i className="fas fa-infinity"></i>
                </div>
                <h3>Lifetime Access</h3>
                <p>Get unlimited access to all course materials, updates, and community resources for continuous learning and growth.</p>
            </div>
        </div>
    </section>

    {/*  Courses Section  */}
    <section className="courses" id="courses">
        <div className="section-header">
            <h2 className="section-title">Professional Training Courses</h2>
            <p className="section-description">Comprehensive programs designed by industry experts to transform you into a sought-after technology professional.</p>
        </div>

        <div className="courses-grid">
            <div className="course-card fade-in-up">
                <div className="course-image">
                    <img src="/images/jai-bro/secure-x.png" alt="Secure X" loading="lazy" /> 
                    {/*  <div className="course-badge">Advanced</div>  */}
                </div>
                <div className="course-body">
                    <h3>Secure X</h3>
                    <p>Master advanced cybersecurity techniques and digital defense strategies. Learn to protect systems from sophisticated cyber threats and vulnerabilities.</p>
                    <button onClick={() => window.open('/course-details/secure-x.pdf', '_blank')} className="course-action">
                        View Details
                        <i className="fas fa-arrow-right"></i>
                    </button>
                </div>
            </div>

            <div className="course-card fade-in-up">
                <div className="course-image">
                    <img src="/images/jai-bro/ai.png" alt="AI Verse Web Labs" loading="lazy" /> 
                    {/*  <div className="course-badge">Professional</div>  */}
                </div>
                <div className="course-body">
                    <h3>AI Verse Web Labs</h3>
                    <p>Build intelligent web applications using AI-driven development, machine learning integration, and automated engineering workflows.</p>
                    <button onClick={() => window.open('/course-details/Ai.pdf', '_blank')} className="course-action">
                        View Details
                        <i className="fas fa-arrow-right"></i>
                    </button>
                </div>
            </div>

            <div className="course-card fade-in-up">
                <div className="course-image">
                    <img src="/images/jai-bro/hunt-elite.png" alt="Hunt Elite" loading="lazy" /> 
                    {/*  <div className="course-badge">Expert</div>  */}
                </div>
                <div className="course-body">
                    <h3>Hunt Elite</h3>
                    <p>Professional bug bounty hunting and exploit analysis. Learn advanced penetration testing and ethical hacking techniques.</p>
                    <button onClick={() => window.open('/course-details/Hunt.pdf', '_blank')} className="course-action">
                        View Details
                        <i className="fas fa-arrow-right"></i>
                    </button>
                </div>
            </div>

            <div className="course-card fade-in-up">
                <div className="course-image">
                    <img src="/images/jai-bro/creative-craft.png" alt="Creative Craft" loading="lazy" /> 
                    {/*  <div className="course-badge">Creative</div>  */}
                </div>
                <div className="course-body">
                    <h3>Creative Craft</h3>
                    <p>Master strategic visual communication design, branding, and UI/UX principles to create compelling digital experiences.</p>
                    <button onClick={() => window.open('/course-details/Canva.pdf', '_blank')} className="course-action">
                        View Details
                        <i className="fas fa-arrow-right"></i>
                    </button>
                </div>
            </div>

            <div className="course-card fade-in-up">
                <div className="course-image">
                    <img src="/images/jai-bro/py-desk.png" alt="Py Desk Systems" loading="lazy" /> 
                    {/*  <div className="course-badge">Development</div>  */}
                </div>
                <div className="course-body">
                    <h3>Py Desk Systems</h3>
                    <p>Develop enterprise-grade desktop applications with Python. Master GUI frameworks and system-level programming.</p>
                    <button onClick={() => window.open('/course-details/py.pdf', '_blank')} className="course-action">
                        View Details
                        <i className="fas fa-arrow-right"></i>
                    </button>
                </div>
            </div>

            <div className="course-card fade-in-up">
                <div className="course-image">
                    <img src="/images/jai-bro/code-f.png" alt="Code Foundry" loading="lazy" /> 
                    {/*  <div className="course-badge">Fundamental</div>  */}
                </div>
                <div className="course-body">
                    <h3>Code Foundry</h3>
                    <p>Professional programming language mastery. Deep dive into best practices and advanced software engineering concepts.</p>
                    <button onClick={() => window.open('/course-details/Code.pdf', '_blank')} className="course-action">
                        View Details
                        <i className="fas fa-arrow-right"></i>
                    </button>
                </div>
            </div>

            <div className="course-card fade-in-up">
                <div className="course-image">
                    <img src="/images/jai-bro/startup.png" alt="Startup Gene Labs" loading="lazy" /> 
                    {/*  <div className="course-badge">Entrepreneurship</div>  */}
                </div>
                <div className="course-body">
                    <h3>Startup Gene Labs</h3>
                    <p>Venture creation and startup scaling. Build, fund, and grow tech startups from idea to successful enterprise.</p>
                    <button onClick={() => window.open('/course-details/startup.pdf', '_blank')} className="course-action">
                        View Details
                        <i className="fas fa-arrow-right"></i>
                    </button>
                </div>
            </div>

            <div className="course-card fade-in-up">
                <div className="course-image">
                    <img src="/images/jai-bro/cli.png" alt="CLI++ Systems" loading="lazy" /> 
                    {/*  <div className="course-badge">Systems</div>  */}
                </div>
                <div className="course-body">
                    <h3>CLI++ Systems</h3>
                    <p>C++ command-line tool engineering for Linux. Build powerful system tools using advanced programming techniques.</p>
                    <button onClick={() => window.open('/course-details/CLI.pdf', '_blank')} className="course-action">
                        View Details
                        <i className="fas fa-arrow-right"></i>
                    </button>
                </div>
            </div>

            <div className="course-card fade-in-up">
                <div className="course-image">
                    <img src="/images/jai-bro/app.png" alt="API Man" loading="lazy" /> 
                    {/*  <div className="course-badge">Backend</div>  */}
                </div>
                <div className="course-body">
                    <h3>API Man</h3>
                    <p>Master API development and management. Build RESTful and GraphQL APIs with scalable architecture patterns.</p>
                    <button onClick={() => window.open('/course-details/api.pdf', '_blank')} className="course-action">
                        View Details
                        <i className="fas fa-arrow-right"></i>
                    </button>
                </div>
            </div>
        </div>
    </section>

    {/*  Stats Section  */}
    <section className="stats">
        <div className="stats-container">
            <div className="stat-item">
                <div className="stat-number">30K+</div>
                <div className="stat-label">Active Students</div>
            </div>
            <div className="stat-item">
                <div className="stat-number">50+</div>
                <div className="stat-label">Expert Instructors</div>
            </div>
            <div className="stat-item">
                <div className="stat-number">98%</div>
                <div className="stat-label">Success Rate</div>
            </div>
            <div className="stat-item">
                {/*  <div className="stat-number">24/7</div>  */}
                 <div style={{animation: 'none', fontSize: '3rem', background: 'linear-gradient(135deg, var(--primary-red), var(--secondary-red))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', marginBottom: '8px'}}>24/7</div>
                <div className="stat-label">Support Available</div>
            </div>
        </div>
    </section>

    {/*  CTA Section  */}
    <section className="cta-section">
        <div className="cta-content">
            <h2>Ready to Transform Your Career?</h2>
            <p>Join thousands of professionals who have already elevated their skills and secured their dream positions in the tech industry.</p>
            <div className="hero-cta-group">
                <Link to="/login" className="btn btn-primary">
                    <i className="fas fa-rocket"></i>
                    Get Started Today
                </Link>
                <a href="/contact" className="btn btn-secondary">
                    <i className="fas fa-comments"></i>
                    Talk to Our Team
                </a>
            </div>
        </div>
    </section>

    <Footer />

    

        </div>
    );
}
