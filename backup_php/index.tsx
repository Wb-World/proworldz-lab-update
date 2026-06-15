import React from 'react';

export default function Component() {
  return (
    <>
{/* DOCTYPE removed */}
<div className="html-wrapper">
<div className="head-wrapper">
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>ProWorldz | Advanced Technology Training</title>
    
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />
    
    <style dangerouslySetInnerHTML={{ __html: `
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        :root {
            --gap: 1.5rem;
            --sides: 1.5rem;
            /* UPDATED: Color Palette - Black & White Theme (like admin panel) */
            --primary-red: #ff2a2f;
            --primary-red-hover: #ff2a2f;
            --secondary-red: #ff2a2f;
            --accent-red: #ff2a2f;
            --dark-bg: #000000;
            --darker-bg: #000000;
            --card-bg: #080808;
            --card-hover: #080808;
            --text-primary: #ffffff;
            --text-secondary: #a3a3a3;
            --text-muted: #737373;
            --border-color: rgba(139, 12, 16, 0.1);
            --border-hover: rgba(255, 255, 255, 0.2);
            
            /* Spacing */
            --container-width: 1280px;
            --section-padding: 8rem 2rem;
            --card-padding: 2rem;
            
            /* Effects */
            --transition-smooth: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            --transition-fast: all 0.2s ease;
            --shadow-glow: 0 0 40px rgba(139, 12, 16, 0.1);
            --shadow-intense: 0 20px 60px rgba(139, 12, 16, 0.15);
        }

        html {
            scroll-behavior: smooth;
        }

        body {
            font-family: 'Inter', sans-serif;
            background: var(--dark-bg);
            color: var(--text-primary);
            line-height: 1.6;
            overflow-x: hidden;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
        }

        h1, h2, h3, h4, h5, h6 {
            font-family: 'Space Grotesk', sans-serif;
            font-weight: 700;
            line-height: 1.2;
        }

        /* ========================================
           NAVIGATION
        ======================================== */
        .navbar {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 1000;
            background: rgba(0, 0, 0, 0.8);
            backdrop-filter: blur(20px);
            border-bottom: 1px solid var(--border-color);
            transition: var(--transition-smooth);
        }

        .navbar.scrolled {
            background: rgba(0, 0, 0, 0.95);
            border-bottom: 1px solid var(--border-hover);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
        }

        .nav-container {
            max-width: var(--container-width);
            margin: 0 auto;
            padding: 1.25rem 2rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .logo {
            font-size: 1.75rem;
            font-weight: 800;
            font-family: 'Space Grotesk', sans-serif;
            color: var(--text-primary);
            text-decoration: none;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            transition: var(--transition-fast);
        }

        .logo:hover {
            transform: translateY(-2px);
        }

        .logo-accent {
            color: var(--primary-red);
        }

        .logo-icon {
            width: 8px;
            height: 8px;
            background: var(--primary-red);
            border-radius: 50%;
            box-shadow: 0 0 20px var(--primary-red);
            animation: pulse-dot 2s infinite;
        }

        @keyframes pulse-dot {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.6; transform: scale(1.2); }
        }

        .nav-links {
            display: flex;
            list-style: none;
            gap: 3rem;
            align-items: center;
        }

        .nav-links a {
            color: var(--text-secondary);
            text-decoration: none;
            font-size: 0.9rem;
            font-weight: 500;
            letter-spacing: 0.02em;
            position: relative;
            transition: var(--transition-fast);
        }

        .nav-links a::before {
            content: '';
            position: absolute;
            bottom: -4px;
            left: 0;
            width: 0;
            height: 2px;
            background: var(--primary-red);
            transition: width 0.3s ease;
        }

        .nav-links a:hover,
        .nav-links a.active {
            color: var(--text-primary);
        }

        .nav-links a:hover::before,
        .nav-links a.active::before {
            width: 100%;
        }

        .nav-cta {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.75rem 1.75rem;
            background: var(--primary-red);
            color: var(--dark-bg);
            text-decoration: none;
            font-weight: 600;
            font-size: 0.9rem;
            border-radius: 8px;
            transition: var(--transition-smooth);
            border: 1px solid transparent;
        }

        .nav-cta:hover {
            background: var(--primary-red-hover);
            box-shadow: var(--shadow-glow);
            transform: translateY(-2px);
            color: var(--dark-bg);
        }

        .menu-toggle {
            display: none;
            flex-direction: column;
            gap: 5px;
            cursor: pointer;
            padding: 0.5rem;
        }

        .menu-toggle span {
            width: 24px;
            height: 2px;
            background: var(--text-primary);
            transition: var(--transition-fast);
        }

        /* ========================================
           HERO SECTION
        ======================================== */
        .hero {
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            overflow: hidden;
            padding: 8rem 2rem 6rem;
            background: 
                radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.08) 0%, transparent 50%),
                radial-gradient(circle at 80% 80%, rgba(139, 12, 16, 0.05) 0%, transparent 50%),
                var(--darker-bg);
        }

        .hero::before {
            content: '';
            position: absolute;
            inset: 0;
            background: 
                linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.03) 50%, transparent 100%),
                repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255, 255, 255, 0.01) 2px, rgba(255, 255, 255, 0.01) 4px);
            pointer-events: none;
        }

        .hero-content {
            max-width: 900px;
            text-align: center;
            position: relative;
            z-index: 2;
        }

        .hero-badge {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.5rem 1.25rem;
            background: rgba(139, 12, 16, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 50px;
            font-size: 0.85rem;
            font-weight: 600;
            color: var(--secondary-red);
            margin-bottom: 2rem;
            animation: fadeInDown 0.8s ease;
        }

        .hero-badge i {
            animation: sparkle 1.5s infinite;
        }

        @keyframes sparkle {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
        }

        .hero h1 {
            font-size: 4.5rem;
            font-weight: 900;
            margin-bottom: 1.5rem;
            background: linear-gradient(135deg, var(--text-primary) 0%, var(--secondary-red) 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            animation: fadeInUp 0.8s ease 0.2s both;
        }

        .hero p {
            font-size: 1.3rem;
            color: var(--text-secondary);
            margin-bottom: 3rem;
            line-height: 1.8;
            animation: fadeInUp 0.8s ease 0.4s both;
        }

        .hero-cta-group {
            display: flex;
            gap: 1.5rem;
            justify-content: center;
            flex-wrap: wrap;
            animation: fadeInUp 0.8s ease 0.6s both;
        }

        .btn {
            display: inline-flex;
            align-items: center;
            gap: 0.75rem;
            padding: 1rem 2.5rem;
            font-size: 1rem;
            font-weight: 600;
            border-radius: 10px;
            text-decoration: none;
            transition: var(--transition-smooth);
            position: relative;
            overflow: hidden;
            border: 2px solid transparent;
        }

        .btn-primary {
            background: var(--primary-red);
            color: var(--dark-bg);
            box-shadow: 0 4px 20px rgba(255, 255, 255, 0.2);
        }

        .btn-primary:hover {
            background: var(--primary-red-hover);
            box-shadow: var(--shadow-intense);
            transform: translateY(-3px);
            color: var(--dark-bg);
        }

        .btn-secondary {
            background: transparent;
            color: var(--text-primary);
            border-color: rgba(255, 255, 255, 0.2);
        }

        .btn-secondary:hover {
            background: rgba(139, 12, 16, 0.05);
            border-color: var(--primary-red);
            transform: translateY(-3px);
        }

        /* ========================================
           FEATURES SECTION
        ======================================== */
        .features {
            padding: var(--section-padding);
            background: var(--dark-bg);
            position: relative;
        }

        .section-header {
            text-align: center;
            max-width: 800px;
            margin: 0 auto 5rem;
        }

        .section-badge {
            display: inline-block;
            padding: 0.5rem 1.25rem;
            background: rgba(139, 12, 16, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 50px;
            font-size: 0.85rem;
            font-weight: 600;
            color: var(--secondary-red);
            margin-bottom: 1.5rem;
            text-transform: uppercase;
            letter-spacing: 0.1em;
        }

        .section-title {
            font-size: 3rem;
            margin-bottom: 1.5rem;
            color: var(--text-primary);
        }

        .section-description {
            font-size: 1.15rem;
            color: var(--text-secondary);
            line-height: 1.8;
        }

        .features-grid {
            max-width: var(--container-width);
            margin: 0 auto;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 2rem;
        }

        .feature-card {
            background: var(--card-bg);
            padding: 2.5rem;
            border-radius: 16px;
            border: 1px solid var(--border-color);
            transition: var(--transition-smooth);
            position: relative;
            overflow: hidden;
        }

        .feature-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 3px;
            background: linear-gradient(90deg, var(--primary-red), var(--secondary-red));
            transform: scaleX(0);
            transform-origin: left;
            transition: transform 0.5s ease;
        }

        .feature-card:hover {
            background: var(--card-hover);
            border-color: var(--border-hover);
            transform: translateY(-8px);
            box-shadow: var(--shadow-glow);
        }

        .feature-card:hover::before {
            transform: scaleX(1);
        }

        .feature-icon {
            width: 60px;
            height: 60px;
            background: rgba(139, 12, 16, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 1.5rem;
            transition: var(--transition-smooth);
        }

        .feature-card:hover .feature-icon {
            background: rgba(255, 255, 255, 0.2);
            transform: scale(1.1) rotate(5deg);
        }

        .feature-icon i {
            font-size: 1.75rem;
            color: var(--text-primary);
        }

        .feature-card h3 {
            font-size: 1.5rem;
            margin-bottom: 1rem;
            color: var(--text-primary);
        }

        .feature-card p {
            color: var(--text-secondary);
            line-height: 1.7;
        }

        /* ========================================
           COURSES SECTION
        ======================================== */
        .courses {
            padding: var(--section-padding);
            background: var(--darker-bg);
            position: relative;
        }

        .courses-grid {
            max-width: var(--container-width);
            margin: 0 auto;
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
            gap: 2.5rem;
        }

        .course-card {
            background: var(--card-bg);
            border-radius: 20px;
            border: 1px solid var(--border-color);
            overflow: hidden;
            transition: var(--transition-smooth);
            position: relative;
            display: flex;
            flex-direction: column;
        }

        .course-card::after {
            content: '';
            position: absolute;
            inset: 0;
            background: radial-gradient(circle at center, rgba(139, 12, 16, 0.1) 0%, transparent 70%);
            opacity: 0;
            transition: opacity 0.5s ease;
            pointer-events: none;
        }

        .course-card:hover {
            border-color: var(--primary-red);
            transform: translateY(-10px);
            box-shadow: var(--shadow-intense);
        }

        .course-card:hover::after {
            opacity: 1;
        }

        .course-image {
            position: relative;
            height: 220px;
            overflow: hidden;
            background: linear-gradient(135deg, rgba(139, 12, 16, 0.1) 0%, rgba(139, 12, 16, 0.05) 100%);
        }

        .course-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .course-card:hover .course-image img {
            transform: scale(1.1);
        }

        .course-badge {
            position: absolute;
            top: 1rem;
            right: 1rem;
            padding: 0.5rem 1rem;
            background: rgba(0, 0, 0, 0.9);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.3);
            border-radius: 50px;
            font-size: 0.75rem;
            font-weight: 600;
            color: var(--text-primary);
            text-transform: uppercase;
        }

        .course-body {
            padding: 2rem;
            flex-grow: 1;
            display: flex;
            flex-direction: column;
        }

        .course-body h3 {
            font-size: 1.6rem;
            margin-bottom: 1rem;
            color: var(--text-primary);
            transition: color 0.3s ease;
        }

        .course-card:hover .course-body h3 {
            color: var(--secondary-red);
        }

        .course-body p {
            color: var(--text-secondary);
            line-height: 1.7;
            margin-bottom: 2rem;
            flex-grow: 1;
        }

        .course-footer {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding-top: 1.5rem;
            border-top: 1px solid rgba(139, 12, 16, 0.05);
        }

        .course-action {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.875rem 2rem;
            background: var(--primary-red);
            color: var(--dark-bg);
            text-decoration: none;
            font-weight: 600;
            font-size: 0.9rem;
            border-radius: 10px;
            transition: var(--transition-smooth);
            width: 100%;
            justify-content: center;
        }

        .course-action:hover {
            background: var(--primary-red-hover);
            box-shadow: var(--shadow-glow);
            transform: translateX(5px);
            color: var(--dark-bg);
        }

        .course-action i {
            transition: transform 0.3s ease;
        }

        .course-action:hover i {
            transform: translateX(5px);
        }

        /* ========================================
           STATS SECTION
        ======================================== */
        .stats {
            padding: 6rem 2rem;
            background: var(--card-bg);
            border-top: 1px solid var(--border-color);
            border-bottom: 1px solid var(--border-color);
        }

        .stats-container {
            max-width: var(--container-width);
            margin: 0 auto;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 3rem;
        }

        .stat-item {
            text-align: center;
        }

        .stat-number {
            font-size: 3rem;
            font-weight: 800;
            background: linear-gradient(135deg, var(--primary-red), var(--secondary-red));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: 0.5rem;
            font-family: 'Space Grotesk', sans-serif;
        }

        .stat-label {
            font-size: 1rem;
            color: var(--text-secondary);
            font-weight: 500;
        }

        /* ========================================
           CTA SECTION
        ======================================== */
        .cta-section {
            padding: 8rem 2rem;
            background: 
                radial-gradient(circle at center, rgba(139, 12, 16, 0.1) 0%, transparent 70%),
                var(--darker-bg);
            text-align: center;
            position: relative;
            overflow: hidden;
        }

        .cta-section::before {
            content: '';
            position: absolute;
            inset: 0;
            background: 
                repeating-linear-gradient(90deg, transparent, transparent 80px, rgba(255, 255, 255, 0.03) 80px, rgba(255, 255, 255, 0.03) 82px);
            pointer-events: none;
        }

        .cta-content {
            max-width: 700px;
            margin: 0 auto;
            position: relative;
            z-index: 2;
        }

        .cta-content h2 {
            font-size: 3.5rem;
            margin-bottom: 1.5rem;
            background: linear-gradient(135deg, var(--text-primary) 0%, var(--secondary-red) 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .cta-content p {
            font-size: 1.2rem;
            color: var(--text-secondary);
            margin-bottom: 3rem;
            line-height: 1.8;
        }

        /* ========================================
           FOOTER
        ======================================== */
        .footer {
            padding: 4rem 2rem 2rem;
            background: var(--darker-bg);
            border-top: 1px solid var(--border-color);
        }

        .footer-container {
            max-width: var(--container-width);
            margin: 0 auto;
        }

        .footer-top {
            display: grid;
            grid-template-columns: 2fr 1fr 1fr 1fr;
            gap: 4rem;
            margin-bottom: 3rem;
        }

        .footer-brand h3 {
            font-size: 1.75rem;
            margin-bottom: 1rem;
        }

        .footer-brand .logo-accent {
            color: var(--primary-red);
        }

        .footer-brand p {
            color: var(--text-secondary);
            line-height: 1.7;
            margin-bottom: 1.5rem;
        }

        .social-links {
            display: flex;
            gap: 1rem;
        }

        .social-link {
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: rgba(139, 12, 16, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 8px;
            color: var(--text-secondary);
            text-decoration: none;
            transition: var(--transition-smooth);
        }

        .social-link:hover {
            background: var(--primary-red);
            color: var(--dark-bg);
            transform: translateY(-3px);
        }

        .footer-column h4 {
            font-size: 1.1rem;
            margin-bottom: 1.5rem;
            color: var(--text-primary);
        }

        .footer-links {
            list-style: none;
        }

        .footer-links li {
            margin-bottom: 0.75rem;
        }

        .footer-links a {
            color: var(--text-secondary);
            text-decoration: none;
            transition: var(--transition-fast);
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
        }

        .footer-links a:hover {
            color: var(--primary-red);
            transform: translateX(5px);
        }

        .footer-bottom {
            padding-top: 2rem;
            border-top: 1px solid rgba(139, 12, 16, 0.05);
            text-align: center;
            color: var(--text-muted);
            font-size: 0.9rem;
        }

        /* ========================================
           ANIMATIONS
        ======================================== */
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @keyframes fadeInDown {
            from {
                opacity: 0;
                transform: translateY(-30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .fade-in-up {
            opacity: 0;
            animation: fadeInUp 0.8s ease forwards;
        }

        /* Stagger animations */
        .feature-card:nth-child(1) { animation-delay: 0.1s; }
        .feature-card:nth-child(2) { animation-delay: 0.2s; }
        .feature-card:nth-child(3) { animation-delay: 0.3s; }
        .feature-card:nth-child(4) { animation-delay: 0.4s; }
        .feature-card:nth-child(5) { animation-delay: 0.5s; }
        .feature-card:nth-child(6) { animation-delay: 0.6s; }

        .course-card:nth-child(1) { animation-delay: 0.1s; }
        .course-card:nth-child(2) { animation-delay: 0.2s; }
        .course-card:nth-child(3) { animation-delay: 0.3s; }
        .course-card:nth-child(4) { animation-delay: 0.4s; }
        .course-card:nth-child(5) { animation-delay: 0.5s; }
        .course-card:nth-child(6) { animation-delay: 0.6s; }
        .course-card:nth-child(7) { animation-delay: 0.7s; }
        .course-card:nth-child(8) { animation-delay: 0.8s; }
        .course-card:nth-child(9) { animation-delay: 0.9s; }
        .course-card:nth-child(10) { animation-delay: 1s; }

        /* ===== LOGO STYLES WITH IMAGE ===== */
        .logo {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            font-size: 1.75rem;
            font-weight: 800;
            font-family: 'Space Grotesk', sans-serif;
            color: var(--text-primary);
            text-decoration: none;
            transition: var(--transition-fast);
        }

        .logo-img {
            width: 40px;
            height: 40px;
            object-fit: contain;
            filter: brightness(1.2);
            transition: var(--transition-smooth);
        }

        .logo:hover .logo-img {
            transform: rotate(10deg) scale(1.1);
            filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.5));
        }

        .logo-text {
            display: flex;
            align-items: center;
            gap: 0.1rem;
        }

        .logo-icon {
            display: none;
        }

        body, h1, h2, h3, h4, h5, h6, p, span, div, li, a {
            font-weight: 700 !important;
        }

        /* ========================================
           RESPONSIVE ENHANCEMENTS
           (Add this at the end of your CSS)
        ======================================== */

        /* Course Grid Improvements */
        @media (min-width: 1200px) {
            .courses-grid {
                grid-template-columns: repeat(3, 1fr);
            }
            
            /* Center the last course card */
            .courses-grid .course-card:last-child:nth-child(3n+1) {
                grid-column: 2;
                justify-self: center;
            }
        }

        @media (min-width: 768px) and (max-width: 1199px) {
            .courses-grid {
                grid-template-columns: repeat(2, 1fr);
            }
            
            /* Center the last course card on tablet */
            .courses-grid .course-card:last-child:nth-child(2n+1) {
                grid-column: 1 / span 2;
                justify-self: center;
                max-width: 380px;
            }
        }

        /* Enhanced Mobile Responsiveness */
       @media (max-width: 767px) {
    .menu-toggle {
        display: flex;
        z-index: 1001;
    }

    .nav-links {
        position: fixed;
        top: 0;
        right: -100%;
        width: 280px;
        height: 100vh;
        background: rgba(0, 0, 0, 0.98);
        backdrop-filter: blur(20px);
        flex-direction: column;
        padding: 100px 2rem 2rem;
        gap: 1.5rem;
        transition: right 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        border-left: 1px solid var(--border-color);
        z-index: 1000;
    }

    .nav-links.active {
        right: 0;
    }

    .nav-cta {
        display: none;
    }

    .hero {
        padding: 100px 1.5rem 4rem;
        min-height: 90vh;
    }

    .hero h1 {
        font-size: 2.5rem;
    }

    .hero p {
        font-size: 1.1rem;
        margin-bottom: 2rem;
    }

    .hero-cta-group {
        flex-direction: column;
        gap: 1rem;
    }

    .btn {
        width: 100%;
        justify-content: center;
    }

    .section-header {
        margin-bottom: 3rem;
    }

    .section-title {
        font-size: 2rem;
    }

    .section-description {
        font-size: 1rem;
    }

    .features-grid,
    .courses-grid {
        grid-template-columns: 1fr;
        gap: 1.5rem;
        padding: 0;
    }

    .feature-card {
        padding: 1.5rem;
    }

    .course-body {
        padding: 1.5rem;
    }

    .stats-container {
        grid-template-columns: repeat(2, 1fr);
        gap: 2rem;
        padding: 0 1rem;
    }

    .stat-number {
        font-size: 2.5rem;
    }

    .cta-section {
        padding: 4rem 1.5rem;
    }

    .cta-content h2 {
        font-size: 2.5rem;
    }

    .footer {
        padding: 3rem 1.5rem 1.5rem;
    }

    .footer-top {
        grid-template-columns: 1fr;
        gap: 2rem;
    }
}
        /* Tablet Responsiveness */
        @media (min-width: 768px) and (max-width: 1024px) {
            .hero h1 {
                font-size: 3rem;
            }
            
            .hero p {
                font-size: 1.2rem;
            }
            
            .section-title {
                font-size: 2.2rem;
            }
            
            .features-grid {
                grid-template-columns: repeat(2, 1fr);
                gap: 1.5rem;
            }
            
            .footer-top {
                grid-template-columns: repeat(2, 1fr);
                gap: 3rem;
            }
            
            /* Tablet hero spacing */
            .hero {
                padding: 6rem 2rem 4rem;
            }
            
            /* Tablet section spacing */
            .features,
            .courses,
            .cta-section {
                padding: 6rem 2rem;
            }
            
            /* Tablet navigation */
            .nav-links {
                gap: 2rem;
            }
        }

        /* Small Mobile Devices (up to 480px) */
        @media (max-width: 480px) {
            .hero h1 {
                font-size: 1.8rem;
            }
            
            .hero p {
                font-size: 0.95rem;
            }
            
            .section-title {
                font-size: 1.5rem;
            }
            
            .section-description {
                font-size: 0.9rem;
            }
            
            .hero-badge,
            .section-badge {
                font-size: 0.75rem;
                padding: 0.4rem 1rem;
            }
            
            .stat-number {
                font-size: 1.8rem;
            }
            
            .stat-label {
                font-size: 0.9rem;
            }
            
            /* Ultra-compact mobile menu */
            .nav-container {
                padding: 1rem;
            }
            
            .logo {
                font-size: 1.5rem;
            }
            
            .logo-img {
                width: 32px;
                height: 32px;
            }
            
            /* Compact feature cards */
            .feature-card {
                padding: 1.25rem;
            }
            
            .feature-card h3 {
                font-size: 1.25rem;
            }
            
            /* Compact course cards */
            .course-body {
                padding: 1.5rem;
            }
            
            .course-body h3 {
                font-size: 1.4rem;
            }
            
            .course-action {
                padding: 0.75rem 1.5rem;
                font-size: 0.85rem;
            }
        }

        /* Extra Large Screens (1440px and above) */
        @media (min-width: 1440px) {
            .courses-grid {
                grid-template-columns: repeat(3, 400px);
                justify-content: center;
                gap: 3rem;
            }
            
            /* Center the last card */
            .courses-grid .course-card:last-child:nth-child(3n+1) {
                grid-column: 2;
            }
        }

        /* Landscape Mobile Devices */
        @media (max-height: 600px) and (orientation: landscape) {
            .hero {
                min-height: 120vh;
                padding: 4rem 2rem;
            }
            
            .hero h1 {
                font-size: 2rem;
            }
            
            .nav-links {
                max-height: 80vh;
                overflow-y: auto;
            }
        }

        /* Fix for iOS Safari 100vh issue */
        @supports (-webkit-touch-callout: none) {
            .hero {
                min-height: -webkit-fill-available;
            }
        }

        /* Touch Device Optimizations */
        @media (hover: none) and (pointer: coarse) {
            .btn,
            .course-action,
            .nav-cta,
            .social-link {
                min-height: 44px;
                min-width: 44px;
            }
            
            .nav-links a {
                padding: 0.5rem;
                display: inline-block;
                min-height: 44px;
                line-height: 44px;
            }
            
            /* Remove hover effects on touch devices */
            .course-card:hover,
            .feature-card:hover {
                transform: none;
            }
            
            .btn:hover,
            .course-action:hover,
            .social-link:hover {
                transform: none;
            }
        }

        /* Fixed Positioning for Mobile */
        @media (max-width: 768px) {
            .navbar {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                z-index: 1000;
                background: rgba(0, 0, 0, 0.95);
                backdrop-filter: blur(10px);
            }
            
            /* Prevent horizontal scroll */
            body {
                overflow-x: hidden;
                width: 100%;
            }
            
            /* Ensure content doesn't hide behind fixed navbar */
            .hero {
                padding-top: 80px;
            }
        }

        .courses-grid {
    max-width: var(--container-width);
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2.5rem;
    padding: 0 1rem;
}

/* Tablet: 2 columns */
@media (min-width: 768px) and (max-width: 1199px) {
    .courses-grid {
        grid-template-columns: repeat(2, 1fr);
    }
    
    /* Center the last course card on tablet when odd number */
    .courses-grid .course-card:last-child:nth-child(odd) {
        grid-column: 1 / span 2;
        justify-self: center;
        max-width: 380px;
    }
}

/* Desktop: 3 columns */
@media (min-width: 1200px) {
    .courses-grid {
        grid-template-columns: repeat(3, 1fr);
        justify-content: center;
    }
    
    /* Center the last course card when 10 items */
    .courses-grid:has(.course-card:nth-child(10):last-child) .course-card:last-child {
        grid-column: 2;
        justify-self: center;
    }
}
        /* Smooth scroll snap for sections */
        @media (min-width: 1024px) {
            .hero,
            .features,
            .courses,
            .cta-section {
                scroll-snap-align: start;
            }
        }
        .menu-toggle.active span:nth-child(1) {
    transform: rotate(45deg) translate(6px, 6px);
}

.menu-toggle.active span:nth-child(2) {
    opacity: 0;
}

.menu-toggle.active span:nth-child(3) {
    transform: rotate(-45deg) translate(7px, -6px);
}

/* iOS Safari Fixes */
@supports (-webkit-touch-callout: none) {
    .hero {
        min-height: -webkit-fill-available;
    }
    
    .nav-links {
        padding-top: 120px;
    }
}

/* Prevent horizontal scroll on mobile */
@media (max-width: 767px) {
    body {
        overflow-x: hidden;
        width: 100%;
        position: relative;
    }
    
    .navbar {
        position: fixed;
        width: 100%;
    }
    
    .hero {
        padding-top: 80px;
    }
}

/* Touch device optimizations */
@media (hover: none) and (pointer: coarse) {
    .btn,
    .course-action,
    .nav-cta,
    .social-link,
    .nav-links a {
        min-height: 44px;
        min-width: 44px;
    }
    
    .nav-links a {
        display: flex;
        align-items: center;
        padding: 10px 0;
    }
    
    /* Reduce hover effects on touch devices */
    .course-card:hover,
    .feature-card:hover {
        transform: translateY(-5px);
    }
}

/* Fix for images on mobile */
img {
    max-width: 100%;
    height: auto;
    display: block;
}

.course-image {
    position: relative;
    height: 200px;
    overflow: hidden;
}

@media (max-width: 480px) {
    .course-image {
        height: 180px;
    }
    
    .hero h1 {
        font-size: 2rem;
        line-height: 1.1;
    }
    
    .hero p {
        font-size: 1rem;
    }
}

/* Ensure proper container widths */
.nav-container,
.section-header,
.courses-grid,
.features-grid,
.footer-container,
.stats-container {
    width: 100%;
    max-width: var(--container-width);
    margin-left: auto;
    margin-right: auto;
    padding-left: 1rem;
    padding-right: 1rem;
}

@media (min-width: 768px) {
    .nav-container,
    .section-header,
    .courses-grid,
    .features-grid,
    .footer-container,
    .stats-container {
        padding-left: 2rem;
        padding-right: 2rem;
    }
}
` }} />
<link rel="stylesheet" href="app-theme-overrides.css?v=20260518" />
</div>
<div className="body-wrapper">
    {/*  Navigation  */}
    <nav className="navbar" id="navbar">
        <div className="nav-container">
            <a href="#" className="logo">
                {/*  Add logo image here  */}
                <img src="images/eaglone/p-eaglone.png" alt="ProWorldz Logo" className="logo-img" loading="lazy" /> 
                <span className="logo-text">
                    PRO<span className="logo-accent">WORLDZ</span>
                </span>
            </a>

            <div className="menu-toggle" id="menuToggle">
                <span></span>
                <span></span>
                <span></span>
            </div>

            <ul className="nav-links" id="navLinks">
                <li><a href="index" className="active">Home</a></li>
                <li><a href="about-home">About</a></li>
                <li><a href="contact-home">Contact</a></li>
            </ul>

            <a href="login" className="nav-cta">
                <i className="fas fa-sign-in-alt"></i>
                Login
            </a>
        </div>
    </nav>

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
                    <img src="images/jai-bro/secure-x.png" alt="Secure X" loading="lazy" /> 
                    {/*  <div className="course-badge">Advanced</div>  */}
                </div>
                <div className="course-body">
                    <h3>Secure X</h3>
                    <p>Master advanced cybersecurity techniques and digital defense strategies. Learn to protect systems from sophisticated cyber threats and vulnerabilities.</p>
                    <a href="course-details/secure-x.pdf" className="course-action">
                        View Details
                        <i className="fas fa-arrow-right"></i>
                    </a>
                </div>
            </div>

            <div className="course-card fade-in-up">
                <div className="course-image">
                    <img src="images/jai-bro/ai.png" alt="AI Verse Web Labs" loading="lazy" /> 
                    {/*  <div className="course-badge">Professional</div>  */}
                </div>
                <div className="course-body">
                    <h3>AI Verse Web Labs</h3>
                    <p>Build intelligent web applications using AI-driven development, machine learning integration, and automated engineering workflows.</p>
                    <a href="course-details/Ai.pdf" className="course-action">
                        View Details
                        <i className="fas fa-arrow-right"></i>
                    </a>
                </div>
            </div>

            <div className="course-card fade-in-up">
                <div className="course-image">
                    <img src="images/jai-bro/hunt-elite.png" alt="Hunt Elite" loading="lazy" /> 
                    {/*  <div className="course-badge">Expert</div>  */}
                </div>
                <div className="course-body">
                    <h3>Hunt Elite</h3>
                    <p>Professional bug bounty hunting and exploit analysis. Learn advanced penetration testing and ethical hacking techniques.</p>
                    <a href="course-details/Hunt.pdf" className="course-action">
                        View Details
                        <i className="fas fa-arrow-right"></i>
                    </a>
                </div>
            </div>

            <div className="course-card fade-in-up">
                <div className="course-image">
                    <img src="images/jai-bro/creative-craft.png" alt="Creative Craft" loading="lazy" /> 
                    {/*  <div className="course-badge">Creative</div>  */}
                </div>
                <div className="course-body">
                    <h3>Creative Craft</h3>
                    <p>Master strategic visual communication design, branding, and UI/UX principles to create compelling digital experiences.</p>
                    <a href="course-details/Canva.pdf" className="course-action">
                        View Details
                        <i className="fas fa-arrow-right"></i>
                    </a>
                </div>
            </div>

            <div className="course-card fade-in-up">
                <div className="course-image">
                    <img src="images/jai-bro/py-desk.png" alt="Py Desk Systems" loading="lazy" /> 
                    {/*  <div className="course-badge">Development</div>  */}
                </div>
                <div className="course-body">
                    <h3>Py Desk Systems</h3>
                    <p>Develop enterprise-grade desktop applications with Python. Master GUI frameworks and system-level programming.</p>
                    <a href="course-details/py.pdf" className="course-action">
                        View Details
                        <i className="fas fa-arrow-right"></i>
                    </a>
                </div>
            </div>

            <div className="course-card fade-in-up">
                <div className="course-image">
                    <img src="images/jai-bro/code-f.png" alt="Code Foundry" loading="lazy" /> 
                    {/*  <div className="course-badge">Fundamental</div>  */}
                </div>
                <div className="course-body">
                    <h3>Code Foundry</h3>
                    <p>Professional programming language mastery. Deep dive into best practices and advanced software engineering concepts.</p>
                    <a href="course-details/Code.pdf" className="course-action">
                        View Details
                        <i className="fas fa-arrow-right"></i>
                    </a>
                </div>
            </div>

            <div className="course-card fade-in-up">
                <div className="course-image">
                    <img src="images/jai-bro/startup.png" alt="Startup Gene Labs" loading="lazy" /> 
                    {/*  <div className="course-badge">Entrepreneurship</div>  */}
                </div>
                <div className="course-body">
                    <h3>Startup Gene Labs</h3>
                    <p>Venture creation and startup scaling. Build, fund, and grow tech startups from idea to successful enterprise.</p>
                    <a href="course-details/startup.pdf" className="course-action">
                        View Details
                        <i className="fas fa-arrow-right"></i>
                    </a>
                </div>
            </div>

            <div className="course-card fade-in-up">
                <div className="course-image">
                    <img src="images/jai-bro/cli.png" alt="CLI++ Systems" loading="lazy" /> 
                    {/*  <div className="course-badge">Systems</div>  */}
                </div>
                <div className="course-body">
                    <h3>CLI++ Systems</h3>
                    <p>C++ command-line tool engineering for Linux. Build powerful system tools using advanced programming techniques.</p>
                    <a href="course-details/CLI.pdf" className="course-action">
                        View Details
                        <i className="fas fa-arrow-right"></i>
                    </a>
                </div>
            </div>

            <div className="course-card fade-in-up">
                <div className="course-image">
                    <img src="images/jai-bro/app.png" alt="API Man" loading="lazy" /> 
                    {/*  <div className="course-badge">Backend</div>  */}
                </div>
                <div className="course-body">
                    <h3>API Man</h3>
                    <p>Master API development and management. Build RESTful and GraphQL APIs with scalable architecture patterns.</p>
                    <a href="course-details/api.pdf" className="course-action">
                        View Details
                        <i className="fas fa-arrow-right"></i>
                    </a>
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
                 <div style={{ animation: 'none !important', fontSize: '3rem !important', background: 'linear-gradient(135deg, var(--primary-red), var(--secondary-red)) !important', WebkitBackgroundClip: 'text !important', WebkitTextFillColor: 'transparent !important', backgroundClip: 'text !important', marginBottom: '8px' }}>24/7</div>
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
                <a href="login" className="btn btn-primary">
                    <i className="fas fa-rocket"></i>
                    Get Started Today
                </a>
                <a href="contact-home" className="btn btn-secondary">
                    <i className="fas fa-comments"></i>
                    Talk to Our Team
                </a>
            </div>
        </div>
    </section>

    {/*  Footer  */}
    <footer className="footer">
        <div className="footer-container">
            <div className="footer-bottom">
                <p>&copy; 2026 ProWorldz. All rights reserved. | Privacy Policy | Terms of Service</p>
            </div>
        </div>
    </footer>

    {/* Script tags removed */}
</div>
</div>

    </>
  );
}
