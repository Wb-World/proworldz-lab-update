import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import './ContactHome.css';

export default function ContactHome() {
    return (
        <div className="contacthome-wrapper">
            
    {/*  Navigation  */}
    <Navbar />

    {/*  Hero Section  */}
    <section className="hero" id="home">
        <div className="hero-content">
            <div className="hero-badge">
                <i className="fas fa-headset"></i>
                Get in Touch
            </div>
            <h1>Contact ProWorldz</h1>
            <p>Have questions about our advanced technology courses? Our team is here to help you transform your career. Reach out to us today.</p>
        </div>
    </section>

    {/*  Contact Section  */}
    <section className="contact-section" id="contact">
        <div className="section-header fade-in-up">
            <div className="section-badge">Contact Information</div>
            <h2 className="section-title">How to Reach Us</h2>
            <p className="section-description">Choose your preferred method of communication. We're committed to providing timely and helpful responses.</p>
        </div>

        <div className="contact-cards">
            <div className="contact-card fade-in-up">
                <div className="contact-icon">
                    <i className="fas fa-envelope"></i>
                </div>
                <h3>Email</h3>
                <p>Proworldzacademy@gmail.com</p>
            </div>

            <div className="contact-card fade-in-up">
                <div className="contact-icon">
                    <i className="fas fa-phone"></i>
                </div>
                <h3>Phone</h3>
                <p>+91 78450 88387</p>
            </div>

            <div className="contact-card fade-in-up">
                <div className="contact-icon">
                    <i className="fas fa-location-dot"></i>
                </div>
                <h3>Location</h3>
                <p>Chennai, Tamil Nadu</p>
            </div>
        </div>
    </section>

    {/*  Contact Form Section  */}
    <section className="contact-form-section">
        <div className="contact-form-box fade-in-up">
            <h2>Send Us a Message</h2>

            <form className="contact-form" id="contactForm">
                <div className="input-group">
                    <div className="form-group">
                        <input type="text" placeholder="Your Name" required />
                    </div>
                    <div className="form-group">
                        <input type="email" placeholder="Your Email" required />
                    </div>
                </div>

                <div className="form-group">
                    <input type="text" placeholder="Subject" required />
                </div>

                <div className="form-group">
                    <textarea placeholder="Your Message" rows={6} required />
                </div>

                <button type="submit" className="submit-btn">
                    Send Message
                    <i className="fas fa-paper-plane"></i>
                </button>
            </form>
        </div>
    </section>

    {/*  Footer  */}
    <Footer />

    

        </div>
    );
}
