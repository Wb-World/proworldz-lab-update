import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar" id="navbar">
        <div className="nav-container">
            <Link to="/" className="logo">
                <img src="/eaglone.png" alt="ProWorldz Logo" className="logo-img" loading="lazy" /> 
                <span className="logo-text">
                    PRO<span className="logo-accent">WORLDZ</span>
                </span>
            </Link>

            <div className="menu-toggle" id="menuToggle">
                <span></span>
                <span></span>
                <span></span>
            </div>

            <ul className="nav-links" id="navLinks">
                <li><Link to="/" className="active">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>

            <Link to="/login" className="nav-cta">
                <i className="fas fa-sign-in-alt"></i>
                Login
            </Link>
        </div>
    </nav>
  );
}
