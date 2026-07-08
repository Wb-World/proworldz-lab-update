import { useState, useEffect, useRef } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import './AboutHome.css';

export default function AboutHome() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = 2; // Assuming 2 slides for now

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
    };

    // For the counter animation
    const statsRef = useRef<HTMLDivElement>(null);
    const [statsVisible, setStatsVisible] = useState(false);
    const [counts, setCounts] = useState([0, 0, 0]);
    const finalCounts = [95, 1000, 4];

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                setStatsVisible(true);
            }
        });
        if (statsRef.current) {
            observer.observe(statsRef.current);
        }
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (statsVisible) {
            const duration = 2000;
            const steps = 60;
            const stepTime = duration / steps;
            let currentStep = 0;

            const timer = setInterval(() => {
                currentStep++;
                setCounts(finalCounts.map(target => Math.min(target, Math.floor((target / steps) * currentStep))));
                
                if (currentStep >= steps) {
                    clearInterval(timer);
                    setCounts(finalCounts);
                }
            }, stepTime);

            return () => clearInterval(timer);
        }
    }, [statsVisible]);

    return (
        <div className="abouthome-wrapper">
            
    {/*  Navigation  */}
    <Navbar />

    {/*  Hero Section  */}
    <section className="about-hero" id="home">
        <div className="about-hero-content">
            <div className="about-hero-badge fade-in-up">
                <i className="fas fa-info-circle"></i>
                About Our Mission
            </div>
            <h1 className="fade-in-up">Redefining Tech Education</h1>
            <p className="fade-in-up">
                To empower learners by delivering a learning model built on 95% practical, hands-on training and 5% essential theoretical knowledge, combined with continuous real-world exposure.
            </p>
            
            <div className="stats fade-in-up" ref={statsRef}>
                <div className="stat-item">
                    <div className="stat-number" data-count="95">{counts[0]}%</div>
                    <div className="stat-label">Practical Training</div>
                </div>
                <div className="stat-item">
                    <div className="stat-number" data-count="1000">{counts[1]}+</div>
                    <div className="stat-label">Learners Empowered</div>
                </div>
                <div className="stat-item">
                    <div className="stat-number" data-count="4">{counts[2]}+</div>
                    <div className="stat-label">Major Initiatives</div>
                </div>
            </div>
        </div>
    </section>

    {/*  Who We Are  */}
    <section className="about-section">
        <div className="about-section-header fade-in-up">
            <div className="about-section-badge">Our Identity</div>
            <h2 className="about-section-title">Who <span className="highlight">We Are</span></h2>
            <p className="about-section-description">
                ProWorldz is a technology learning and innovation platform, focused on hands-on training and real-world skills. We believe technology should be learned by doing, not just studying.
            </p>
        </div>

        <div className="expertise-container fade-in-up">
            <div className="expertise-grid">
                <div className="expertise-item">
                    <i className="fas fa-shield-alt"></i>
                    <h4>Cybersecurity & Ethical Hacking</h4>
                    <p>Comprehensive security training with real-world penetration testing</p>
                </div>
                <div className="expertise-item">
                    <i className="fas fa-code"></i>
                    <h4>Web & App Development</h4>
                    <p>Full-stack development with modern frameworks and technologies</p>
                </div>
                <div className="expertise-item">
                    <i className="fas fa-robot"></i>
                    <h4>AI & IoT Solutions</h4>
                    <p>Cutting-edge artificial intelligence and internet of things applications</p>
                </div>
                <div className="expertise-item">
                    <i className="fas fa-desktop"></i>
                    <h4>Customized Operating Systems</h4>
                    <p>Specialized OS development and customization for specific needs</p>
                </div>
                <div className="expertise-item">
                    <i className="fas fa-chalkboard-teacher"></i>
                    <h4>Workshops & Academic Collaborations</h4>
                    <p>Industry-academia partnerships and practical workshops</p>
                </div>
                <div className="expertise-item">
                    <i className="fas fa-bug"></i>
                    <h4>Bug Hunter Elite Program</h4>
                    <p>Flagship cybersecurity training for advanced threat detection</p>
                </div>
            </div>
        </div>
    </section>

    {/*  Our Values  */}
    <section className="about-section dark">
        <div className="values-grid">
            <div className="value-content fade-in-up">
                <h2>Our Core <span>Values</span></h2>
                <p>We are committed to building a strong ecosystem of skilled learners, innovators, and problem solvers who can confidently apply technology in real-world scenarios.</p>
            </div>
            
            <div className="value-list fade-in-up">
                <div className="value-item">
                    <i className="fas fa-star"></i>
                    <div>
                        <h4>Excellence</h4>
                        <p>We are committed to delivering the highest standards in technology education and training. Through quality teaching, hands-on learning, and continuous improvement, we strive to help every learner achieve their best potential.</p>
                    </div>
                </div>
                <div className="value-item">
                    <i className="fas fa-lightbulb"></i>
                    <div>
                        <h4>Innovation</h4>
                        <p>We embrace change and emerging technologies. By encouraging creativity, experimentation, and real-world problem solving, we ensure our learners stay ahead in a rapidly evolving tech industry.</p>
                    </div>
                </div>
                <div className="value-item">
                    <i className="fas fa-users"></i>
                    <div>
                        <h4>Community</h4>
                        <p>We believe growth happens together. ProWorldz fosters a supportive community of students, mentors, and professionals who collaborate, share knowledge, and grow collectively toward a stronger digital future.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/*  Mission & Vision  */}
    <section className="about-section">
        <div className="about-section-header fade-in-up">
            <div className="about-section-badge">Our Purpose</div>
            <h2 className="about-section-title">Mission & <span className="highlight">Vision</span></h2>
        </div>

        <div className="features-grid">
            <div className="feature-card fade-in-up">
                <div className="feature-icon">
                    <i className="fas fa-bullseye"></i>
                </div>
                <h3>Our Mission</h3>
                <p>To empower learners by delivering a learning model built on 95% practical, hands-on training and 5% essential theoretical knowledge, combined with continuous real-world exposure. We bridge the gap between education and industry through project-based learning, real-time problem solving, and expert mentorship.</p>
            </div>

            <div className="feature-card fade-in-up">
                <div className="feature-icon">
                    <i className="fas fa-eye"></i>
                </div>
                <h3>Our Vision</h3>
                <p>To create a world where technology empowers individuals rather than intimidates them, by delivering practical, hands-on, and industry-focused education. We envision building a strong ecosystem of skilled learners, innovators, and problem solvers who contribute meaningfully to the future of the digital industry.</p>
            </div>
        </div>
    </section>

    {/*  Achievements  */}
    <section className="about-section dark">
        <div className="about-section-header fade-in-up">
            <div className="about-section-badge">Milestones</div>
            <h2 className="about-section-title">Our <span className="highlight">Achievements</span></h2>
            <p className="about-section-description">
                Recognized partnerships and impactful initiatives that demonstrate our commitment to technology education.
            </p>
        </div>

        <div className="achievements-grid fade-in-up">
            <div className="achievement-card">
                <h4>Prince Sri Venkateshwara College</h4>
                <p>Successfully organized and executed comprehensive cybersecurity training events and workshops for students.</p>
            </div>
            <div className="achievement-card">
                <h4>AMET University</h4>
                <p>Implemented structured cybersecurity programs to enhance students' practical skills and industry readiness.</p>
            </div>
            <div className="achievement-card">
                <h4>Women's Safety & Cyber Awareness</h4>
                <p>Conducted specialized training programs focusing on digital safety and cybersecurity awareness for women.</p>
            </div>
            <div className="achievement-card">
                <h4>Education Trust Initiatives</h4>
                <p>Collaborated with educational trusts to deliver cybersecurity training to underprivileged communities.</p>
            </div>
        </div>
    </section>

    {/*  Message from Founder  */}
    <section className="about-section">
        <div className="message-section fade-in-up">
            <div className="message-content">
                <div className="quote-icon">
                    <i className="fas fa-quote-left"></i>
                </div>
                <p className="message-text">
                    "Technology isn't difficult when taught the right way. At ProWorldz, we focus on building skills, confidence, and the right mindset to transform learners into industry-ready professionals."
                </p>
                <div className="founder-info">
                    <div>
                        <div className="founder-name">Jaiganesh Lakshmanan</div>
                        <div className="founder-title">Founder & CEO, ProWorldz</div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/*  Mentors Slider  */}
    <section className="mentor-slider-section">
        <div className="mentor-slider-header fade-in-up">
            <h2 className="mentor-slider-title">Meet Our Expert <span className="highlight">Mentors</span></h2>
            <p className="mentor-slider-subtitle">Learn from industry professionals with years of hands-on experience in cutting-edge technologies.</p>
        </div>

        <div className="mentor-slider-container fade-in-up">
            <div className="mentor-slider-wrapper" id="mentorSlider" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {/*  Slide 1  */}
                <div className="mentor-slide">
                    <div className="mentor-image-container">
                        <img src="/images/outer/jg.png" className="mentor-image" alt="Mentor" loading="lazy" /> 
                    </div>
                    <div className="mentor-content">
                        <h3 className="mentor-name">Jaiganesh.L</h3>
                        <div className="mentor-role">Founder and CEO of Secure Worldz</div>
                        <div className="mentor-expertise">
                            <span className="expertise-tag">Technology speaker</span>
                            <span className="expertise-tag">Ethical hacker</span>
                            <span className="expertise-tag">AI developer</span>
                            <span className="expertise-tag">Business growth speaker</span>
                        </div>
                        <p className="mentor-description">
                            With over 10+ years of experience in cybersecurity, Alex has worked with Fortune 500 companies to strengthen their security infrastructure. He holds multiple certifications including CISSP, CEH, and OSCP. Alex specializes in vulnerability assessment and penetration testing, having discovered critical security flaws in major financial institutions.
                        </p>
                        <div className="mentor-quote">
                            "Security is not a product, but a process. My goal is to teach students how to think like both defender and attacker."
                        </div>
                    </div>
                </div>
                
                {/*  Slide 2  */}
                <div className="mentor-slide">
                    <div className="mentor-image-container">
                        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Unknown" className="mentor-image" alt="Mentor" loading="lazy" /> 
                    </div>
                    <div className="mentor-content">
                        <h3 className="mentor-name">Mohamed hathim.A</h3>
                        <div className="mentor-role">SD of Secure Worldz</div>
                        <div className="mentor-expertise">
                            <span className="expertise-tag">Network Security</span>
                            <span className="expertise-tag">Penetration Testing</span>
                            <span className="expertise-tag">Ethical Hacking</span>
                            <span className="expertise-tag">Incident Response</span>
                        </div>
                        <p className="mentor-description">
                            Sarah has 8+ years of experience building scalable web applications for startups and enterprise clients. She's passionate about modern JavaScript frameworks and cloud-native development. Sarah has contributed to open-source projects and regularly speaks at tech conferences about web development best practices.
                        </p>
                        <div className="mentor-quote">
                            "Great code is not just about solving problems, but about creating solutions that are maintainable and scalable for years to come."
                        </div>
                    </div>
                </div>
            </div>

            <div className="slider-controls">
                <button className="slider-btn prev-btn" id="prevBtn" onClick={prevSlide}>
                    <i className="fas fa-chevron-left"></i>
                </button>
                <button className="slider-btn next-btn" id="nextBtn" onClick={nextSlide}>
                    <i className="fas fa-chevron-right"></i>
                </button>
            </div>
            
            <div className="slider-dots" id="sliderDots">
                <span className={`slider-dot ${currentSlide === 0 ? 'active' : ''}`} onClick={() => setCurrentSlide(0)} data-slide="0"></span>
                <span className={`slider-dot ${currentSlide === 1 ? 'active' : ''}`} onClick={() => setCurrentSlide(1)} data-slide="1"></span>
            </div>
        </div>
    </section>

    {/*  Our Motto  */}
    <section className="about-section dark">
        <div className="motto-section fade-in-up">
            <div className="motto-text">"Think Smart. Build Skills. Own the Future."</div>
            <div className="motto-subtext">Our guiding principle for transforming tech education</div>
        </div>
    </section>

    {/*  CTA Section  */}
    <section className="cta-section">
        <div className="cta-content fade-in-up">
            <h2>Start Your Learning Journey</h2>
            <p>Join thousands of successful professionals who transformed their careers with our industry-focused education. Bridge the gap between education and industry with ProWorldz.</p>
            <a href="/" className="btn btn-primary">
                Explore Our Programs
                <i className="fas fa-arrow-right"></i>
            </a>
        </div>
    </section>

    {/*  Footer  */}
    <Footer />

    

        </div>
    );
}
