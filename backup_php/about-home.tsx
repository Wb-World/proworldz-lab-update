import React from 'react';

export default function Component() {
  return (
    <>
{/* DOCTYPE removed */}
<div className="html-wrapper">
<div className="head-wrapper">
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>About Us | ProWorldz</title>
    
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
            /* UPDATED: Color Palette - Black & White Theme */
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
            background: rgba(0, 0, 0, 0.95);
            backdrop-filter: blur(20px);
            border-bottom: 1px solid var(--border-color);
            transition: var(--transition-smooth);
        }

        .navbar.scrolled {
            background: rgba(0, 0, 0, 0.98);
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
            z-index: 1001;
            background: none;
            border: none;
        }

        .menu-toggle span {
            width: 24px;
            height: 2px;
            background: var(--text-primary);
            transition: var(--transition-fast);
        }

        /* Mobile menu animation */
        .menu-toggle.active span:nth-child(1) {
            transform: rotate(45deg) translate(6px, 6px);
        }

        .menu-toggle.active span:nth-child(2) {
            opacity: 0;
        }

        .menu-toggle.active span:nth-child(3) {
            transform: rotate(-45deg) translate(7px, -6px);
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
            margin-top: 80px;
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

        @keyframes fadeInDown {
            from { opacity: 0; transform: translateY(-30px); }
            to { opacity: 1; transform: translateY(0); }
        }

        .hero h1 {
            font-size: clamp(2rem, 5vw, 4.5rem);
            font-weight: 900;
            margin-bottom: 1.5rem;
            background: linear-gradient(135deg, var(--text-primary) 0%, var(--secondary-red) 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            animation: fadeInUp 0.8s ease 0.2s both;
        }

        @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
        }

        .hero p {
            font-size: clamp(1rem, 2vw, 1.3rem);
            color: var(--text-secondary);
            margin-bottom: 3rem;
            line-height: 1.8;
            animation: fadeInUp 0.8s ease 0.4s both;
        }

        /* ========================================
           STATS
        ======================================== */
        .stats {
            display: flex;
            justify-content: center;
            gap: 2rem;
            margin-top: 3rem;
            flex-wrap: wrap;
            animation: fadeInUp 0.8s ease 0.6s both;
        }

        .stat-item {
            text-align: center;
        }

        .stat-number {
            font-size: clamp(1.5rem, 3vw, 3rem);
            font-weight: 800;
            background: linear-gradient(135deg, var(--text-primary) 0%, var(--secondary-red) 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: 0.5rem;
            font-family: 'Space Grotesk', sans-serif;
        }

        .stat-label {
            font-size: 0.85rem;
            color: var(--text-secondary);
            font-weight: 500;
            text-transform: uppercase;
            letter-spacing: 0.1em;
        }

        /* ========================================
           BUTTONS
        ======================================== */
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
            cursor: pointer;
            font-family: inherit;
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
           SECTIONS
        ======================================== */
        .section {
            padding: clamp(3rem, 8vw, 8rem) 2rem;
            position: relative;
        }

        .section.dark {
            background: var(--darker-bg);
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
            font-size: clamp(1.75rem, 4vw, 3rem);
            margin-bottom: 1.5rem;
            color: var(--text-primary);
        }

        .section-description {
            font-size: clamp(0.95rem, 2vw, 1.15rem);
            color: var(--text-secondary);
            line-height: 1.8;
        }

        .highlight {
            color: var(--primary-red);
        }

        /* ========================================
           FEATURES GRID
        ======================================== */
        .features-grid {
            max-width: var(--container-width);
            margin: 0 auto;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
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
            font-size: 0.95rem;
        }

        /* ========================================
           VALUES SECTION
        ======================================== */
        .values-grid {
            max-width: var(--container-width);
            margin: 0 auto;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 3rem;
            align-items: start;
        }

        .value-content h2 {
            font-size: clamp(1.75rem, 4vw, 2.5rem);
            margin-bottom: 1.5rem;
            color: var(--text-primary);
        }

        .value-content h2 span {
            color: var(--primary-red);
        }

        .value-content p {
            font-size: 1rem;
            color: var(--text-secondary);
            line-height: 1.8;
        }

        .value-list {
            display: grid;
            gap: 1.5rem;
        }

        .value-item {
            display: flex;
            align-items: flex-start;
            gap: 1rem;
        }

        .value-item i {
            color: var(--primary-red);
            font-size: 1.5rem;
            margin-top: 0.25rem;
            flex-shrink: 0;
        }

        .value-item h4 {
            font-size: 1.15rem;
            margin-bottom: 0.5rem;
            color: var(--text-primary);
        }

        .value-item p {
            color: var(--text-secondary);
            line-height: 1.6;
            font-size: 0.95rem;
        }

        /* ========================================
           ACHIEVEMENTS SECTION
        ======================================== */
        .achievements-grid {
            max-width: var(--container-width);
            margin: 0 auto;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
        }

        .achievement-card {
            background: var(--card-bg);
            padding: 2rem;
            border-radius: 12px;
            border: 1px solid var(--border-color);
            transition: var(--transition-smooth);
        }

        .achievement-card:hover {
            transform: translateY(-5px);
            border-color: var(--border-hover);
            box-shadow: var(--shadow-glow);
        }

        .achievement-card h4 {
            color: var(--primary-red);
            margin-bottom: 1rem;
            font-size: 1.1rem;
        }

        .achievement-card p {
            color: var(--text-secondary);
            line-height: 1.6;
            font-size: 0.95rem;
        }

        /* ========================================
           MESSAGE SECTION
        ======================================== */
        .message-section {
            max-width: 800px;
            margin: 0 auto;
            padding: 3rem 2rem;
            background: var(--card-bg);
            border-radius: 20px;
            border: 1px solid var(--border-color);
            position: relative;
            overflow: hidden;
        }

        .message-section::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 4px;
            height: 100%;
            background: linear-gradient(to bottom, var(--primary-red), var(--secondary-red));
        }

        .message-content {
            position: relative;
            z-index: 2;
        }

        .quote-icon {
            color: var(--primary-red);
            font-size: 2rem;
            margin-bottom: 1.5rem;
        }

        .message-text {
            font-size: clamp(1rem, 2vw, 1.3rem);
            line-height: 1.8;
            color: var(--text-secondary);
            margin-bottom: 2rem;
            font-style: italic;
        }

        .founder-info {
            display: flex;
            align-items: center;
            gap: 1rem;
            flex-wrap: wrap;
        }

        .founder-name {
            font-size: 1.1rem;
            font-weight: 600;
            color: var(--text-primary);
        }

        .founder-title {
            font-size: 0.9rem;
            color: var(--text-secondary);
        }

        /* ========================================
           EXPERTISE SECTION
        ======================================== */
        .expertise-container {
            max-width: var(--container-width);
            margin: 0 auto;
        }

        .expertise-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
            gap: 1.5rem;
            margin-top: 3rem;
        }

        .expertise-item {
            background: rgba(255, 255, 255, 0.03);
            padding: 1.5rem;
            border-radius: 12px;
            border: 1px solid var(--border-color);
            transition: var(--transition-smooth);
        }

        .expertise-item:hover {
            background: rgba(255, 255, 255, 0.06);
            border-color: var(--border-hover);
            transform: translateY(-3px);
        }

        .expertise-item i {
            color: var(--primary-red);
            margin-bottom: 1rem;
            font-size: 1.5rem;
        }

        .expertise-item h4 {
            color: var(--text-primary);
            margin-bottom: 0.5rem;
            font-size: 1rem;
        }

        .expertise-item p {
            color: var(--text-secondary);
            font-size: 0.9rem;
            line-height: 1.5;
        }

        /* ========================================
           MENTOR SLIDER SECTION
        ======================================== */
        .mentor-slider-section {
            padding: clamp(3rem, 6vw, 6rem) 2rem;
            background: var(--darker-bg);
        }

        .mentor-slider-header {
            text-align: center;
            max-width: 800px;
            margin: 0 auto 4rem;
        }

        .mentor-slider-title {
            font-size: clamp(1.5rem, 4vw, 2.5rem);
            margin-bottom: 1rem;
            color: var(--text-primary);
        }

        .mentor-slider-subtitle {
            font-size: clamp(0.95rem, 2vw, 1.1rem);
            color: var(--text-secondary);
            line-height: 1.6;
        }

        .mentor-slider-container {
            max-width: 1200px;
            margin: 0 auto;
            position: relative;
            overflow: hidden;
            border-radius: 20px;
        }

        .mentor-slider-wrapper {
            display: flex;
            transition: transform 0.5s ease;
        }

        .mentor-slide {
            min-width: 100%;
            display: flex;
            gap: 2rem;
            padding: 2rem;
            background: var(--card-bg);
            border: 1px solid var(--border-color);
            border-radius: 20px;
        }

        .mentor-image-container {
            flex: 0 0 280px;
            border-radius: 15px;
            overflow: hidden;
            height: 320px;
            background: rgba(139, 12, 16, 0.05);
        }

        .mentor-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.5s ease;
        }

        .mentor-image:hover {
            transform: scale(1.05);
        }

        .mentor-content {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

        .mentor-name {
            font-size: clamp(1.3rem, 3vw, 2rem);
            margin-bottom: 0.5rem;
            color: var(--text-primary);
        }

        .mentor-role {
            font-size: 1rem;
            color: var(--primary-red);
            margin-bottom: 1.5rem;
            font-weight: 600;
        }

        .mentor-description {
            font-size: 0.95rem;
            color: var(--text-secondary);
            line-height: 1.7;
            margin-bottom: 1.5rem;
        }

        .mentor-expertise {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
            margin-bottom: 2rem;
        }

        .expertise-tag {
            background: rgba(139, 12, 16, 0.1);
            color: var(--accent-red);
            padding: 0.5rem 1rem;
            border-radius: 20px;
            font-size: 0.8rem;
            font-weight: 500;
        }

        .mentor-quote {
            font-style: italic;
            color: var(--text-secondary);
            border-left: 3px solid var(--primary-red);
            padding-left: 1rem;
            font-size: 0.95rem;
            line-height: 1.6;
        }

        .slider-controls {
            display: flex;
            justify-content: center;
            gap: 1rem;
            margin-top: 2rem;
        }

        .slider-btn {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: rgba(139, 12, 16, 0.05);
            border: 1px solid var(--border-color);
            color: var(--text-primary);
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: var(--transition-smooth);
            font-size: 1.2rem;
        }

        .slider-btn:hover {
            background: var(--primary-red);
            color: var(--dark-bg);
            border-color: var(--primary-red);
            transform: translateY(-2px);
        }

        .slider-dots {
            display: flex;
            justify-content: center;
            gap: 0.5rem;
            margin-top: 1rem;
        }

        .slider-dot {
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background: var(--text-muted);
            cursor: pointer;
            transition: var(--transition-smooth);
        }

        .slider-dot.active {
            background: var(--primary-red);
            transform: scale(1.2);
        }

        /* ========================================
           MOTTO SECTION
        ======================================== */
        .motto-section {
            text-align: center;
            padding: clamp(2rem, 4vw, 4rem);
            background: rgba(139, 12, 16, 0.05);
            border-radius: 20px;
            margin: clamp(2rem, 4vw, 4rem) auto;
            max-width: 800px;
            border: 1px solid var(--border-color);
        }

        .motto-text {
            font-size: clamp(1.5rem, 3vw, 2.5rem);
            font-weight: 800;
            background: linear-gradient(135deg, var(--text-primary) 0%, var(--secondary-red) 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: 1rem;
            font-family: 'Space Grotesk', sans-serif;
        }

        .motto-subtext {
            color: var(--text-secondary);
            font-size: clamp(0.9rem, 1.5vw, 1.1rem);
            letter-spacing: 0.05em;
        }

        /* ========================================
           CTA SECTION
        ======================================== */
        .cta-section {
            padding: clamp(3rem, 8vw, 8rem) 2rem;
            background: var(--darker-bg);
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
            font-size: clamp(1.75rem, 4vw, 3.5rem);
            margin-bottom: 1.5rem;
            background: linear-gradient(135deg, var(--text-primary) 0%, var(--secondary-red) 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .cta-content p {
            font-size: clamp(1rem, 2vw, 1.2rem);
            color: var(--text-secondary);
            margin-bottom: 3rem;
            line-height: 1.8;
        }

        /* ========================================
           FOOTER
        ======================================== */
        .footer {
            padding: 3rem 2rem 1.5rem;
            background: var(--darker-bg);
            border-top: 1px solid var(--border-color);
        }

        .footer-container {
            max-width: var(--container-width);
            margin: 0 auto;
            text-align: center;
        }

        .footer-bottom {
            padding-top: 1.5rem;
            border-top: 1px solid rgba(139, 12, 16, 0.05);
            color: var(--text-muted);
            font-size: 0.85rem;
        }

        .footer-bottom p {
            margin-bottom: 0.5rem;
        }

        /* ========================================
           ANIMATIONS
        ======================================== */
        .fade-in-up {
            opacity: 0;
            animation: fadeInUp 0.8s ease forwards;
        }

        .fade-in-up:nth-child(1) { animation-delay: 0.1s; }
        .fade-in-up:nth-child(2) { animation-delay: 0.2s; }
        .fade-in-up:nth-child(3) { animation-delay: 0.3s; }
        .fade-in-up:nth-child(4) { animation-delay: 0.4s; }
        .fade-in-up:nth-child(5) { animation-delay: 0.5s; }
        .fade-in-up:nth-child(6) { animation-delay: 0.6s; }

        /* ========================================
           RESPONSIVE DESIGN
        ======================================== */

        /* MOBILE RESPONSIVENESS (under 768px) */
        @media (max-width: 767px) {
            /* Show mobile menu toggle */
            .menu-toggle {
                display: flex;
            }

            /* Hide desktop nav items */
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
                list-style: none;
            }

            .nav-links.active {
                right: 0;
            }

            /* Show login button in mobile menu */
            .nav-links .nav-cta {
                display: flex;
                margin-top: 1rem;
                justify-content: center;
            }

            /* Hide desktop login button */
            .nav-container > .nav-cta {
                display: none;
            }

            /* Hero section mobile adjustments */
            .hero {
                padding: 100px 1.5rem 4rem;
                min-height: 90vh;
                margin-top: 70px;
            }

            .hero h1 {
                font-size: 2.5rem;
            }

            .hero p {
                font-size: 1.1rem;
                margin-bottom: 2rem;
            }

            /* Section adjustments */
            .section {
                padding: 3.5rem 1.5rem;
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

            /* Grid adjustments */
            .features-grid {
                grid-template-columns: 1fr;
                gap: 1.5rem;
            }

            .feature-card {
                padding: 1.5rem;
            }

            /* Stats mobile */
            .stats {
                gap: 1.5rem;
                margin-top: 2rem;
            }

            .stat-number {
                font-size: 2rem;
            }

            .stat-label {
                font-size: 0.75rem;
            }

            .values-grid {
                grid-template-columns: 1fr;
                gap: 2rem;
            }

            .mentor-slide {
                flex-direction: column;
                gap: 1.5rem;
                padding: 1.5rem;
            }

            .mentor-image-container {
                flex: 0 0 auto;
                width: 100%;
                max-width: 350px;
                margin: 0 auto;
                height: 280px;
            }

            .mentor-content {
                width: 100%;
            }

            .message-section {
                padding: 2rem 1.5rem;
            }

            .achievements-grid {
                grid-template-columns: 1fr;
                gap: 1.5rem;
            }

            .cta-content {
                padding: 0 1rem;
            }

            .btn {
                padding: 0.875rem 2rem;
                font-size: 0.95rem;
            }

            .expertise-grid {
                grid-template-columns: repeat(2, 1fr);
                gap: 1rem;
            }
        }

        /* Tablet Responsiveness */
        @media (min-width: 768px) and (max-width: 1024px) {
            .nav-container {
                padding: 1rem 1.5rem;
            }

            .nav-links {
                gap: 2rem;
            }

            .hero {
                padding: 6rem 2rem 4rem;
            }

            .hero h1 {
                font-size: 3rem;
            }

            .hero p {
                font-size: 1.2rem;
            }

            .section {
                padding: 5rem 1.5rem;
            }

            .section-title {
                font-size: 2.2rem;
            }

            .features-grid {
                grid-template-columns: repeat(2, 1fr);
                gap: 1.5rem;
            }

            .mentor-slide {
                gap: 1.5rem;
                padding: 1.5rem;
            }

            .mentor-image-container {
                flex: 0 0 250px;
                height: 280px;
            }

            .values-grid {
                gap: 2rem;
            }

            .footer-top {
                grid-template-columns: repeat(2, 1fr);
                gap: 3rem;
            }
        }

        /* Small Mobile Devices (up to 480px) */
        @media (max-width: 480px) {
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

            .nav-links {
                width: 250px;
                padding: 90px 1.5rem 2rem;
            }

            .hero {
                padding: 3.5rem 1rem 2rem;
                margin-top: 60px;
            }

            .hero h1 {
                font-size: 1.8rem;
            }

            .hero p {
                font-size: 0.95rem;
            }

            .section {
                padding: 2.5rem 1rem;
            }

            .section-header {
                margin-bottom: 2rem;
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

            .stats {
                flex-direction: column;
                gap: 1rem;
            }

            .stat-number {
                font-size: 1.8rem;
            }

            .stat-label {
                font-size: 0.9rem;
            }

            /* Compact cards */
            .feature-card {
                padding: 1.25rem;
            }

            .feature-card h3 {
                font-size: 1.25rem;
            }

            .value-item i {
                font-size: 1.25rem;
            }

            .value-item h4 {
                font-size: 1rem;
            }

            .mentor-slide {
                padding: 1rem;
                gap: 1rem;
            }

            .mentor-image-container {
                height: 240px;
                max-width: 100%;
            }

            .expertise-grid {
                grid-template-columns: 1fr;
            }

            .expertise-item {
                padding: 1.25rem;
            }

            .expertise-item h4 {
                font-size: 0.95rem;
            }

            .expertise-item p {
                font-size: 0.85rem;
            }

            .message-section {
                padding: 1.5rem;
            }

            .quote-icon {
                font-size: 1.5rem;
                margin-bottom: 1rem;
            }

            .message-text {
                font-size: 1rem;
                margin-bottom: 1.5rem;
            }

            .founder-name {
                font-size: 1rem;
            }

            .founder-title {
                font-size: 0.85rem;
            }

            .motto-section {
                padding: 1.5rem;
                margin: 1.5rem auto;
            }

            .btn {
                padding: 0.75rem 1.5rem;
                font-size: 0.9rem;
                width: 100%;
            }

            .slider-btn {
                width: 40px;
                height: 40px;
                font-size: 1rem;
            }

            .footer {
                padding: 2rem 1rem 1rem;
            }

            .footer-bottom {
                padding-top: 1rem;
            }

            .footer-bottom p {
                margin-bottom: 0.5rem;
            }
        }

        /* Extra Large Screens */
        @media (min-width: 1440px) {
            .features-grid {
                grid-template-columns: repeat(3, 1fr);
                gap: 3rem;
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
                padding-top: 80px;
            }
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

        /* Touch Device Optimizations */
        @media (hover: none) and (pointer: coarse) {
            .btn,
            .nav-cta,
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
            .feature-card:hover {
                transform: translateY(-5px);
            }
        }

        /* Ensure proper container widths */
        .nav-container,
        .section-header,
        .features-grid,
        .footer-container {
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
            .features-grid,
            .footer-container {
                padding-left: 2rem;
                padding-right: 2rem;
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

        /* SCROLLBAR */
        ::-webkit-scrollbar {
            width: 8px;
        }

        ::-webkit-scrollbar-track {
            background: rgba(0, 0, 0, 0.5);
        }

        ::-webkit-scrollbar-thumb {
            background: rgba(255, 255, 255, 0.2);
            border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
            background: rgba(255, 255, 255, 0.3);
        }
` }} />
<link rel="stylesheet" href="app-theme-overrides.css?v=20260518" />
</div>
<div className="body-wrapper">
    {/*  Navigation  */}
    <nav className="navbar" id="navbar">
        <div className="nav-container">
            <a href="index" className="logo">
                <img src="images/eaglone/p-eaglone.png" alt="ProWorldz Logo" className="logo-img" loading="lazy" /> 
                <span className="logo-text">
                    PRO<span className="logo-accent">WORLDZ</span>
                </span>
            </a>

            <button className="menu-toggle" id="menuToggle" aria-label="Toggle menu">
                <span></span>
                <span></span>
                <span></span>
            </button>

            <ul className="nav-links" id="navLinks">
                <li><a href="index">Home</a></li>
                <li><a href="about-home" className="active">About</a></li>
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
            <div className="hero-badge fade-in-up">
                <i className="fas fa-info-circle"></i>
                About Our Mission
            </div>
            <h1 className="fade-in-up">Redefining Tech Education</h1>
            <p className="fade-in-up">
                To empower learners by delivering a learning model built on 95% practical, hands-on training and 5% essential theoretical knowledge, combined with continuous real-world exposure.
            </p>
            
            <div className="stats fade-in-up">
                <div className="stat-item">
                    <div className="stat-number" data-count="95">0%</div>
                    <div className="stat-label">Practical Training</div>
                </div>
                <div className="stat-item">
                    <div className="stat-number" data-count="1000">0+</div>
                    <div className="stat-label">Learners Empowered</div>
                </div>
                <div className="stat-item">
                    <div className="stat-number" data-count="4">0+</div>
                    <div className="stat-label">Major Initiatives</div>
                </div>
            </div>
        </div>
    </section>

    {/*  Who We Are  */}
    <section className="section">
        <div className="section-header fade-in-up">
            <div className="section-badge">Our Identity</div>
            <h2 className="section-title">Who <span className="highlight">We Are</span></h2>
            <p className="section-description">
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
    <section className="section dark">
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
    <section className="section">
        <div className="section-header fade-in-up">
            <div className="section-badge">Our Purpose</div>
            <h2 className="section-title">Mission & <span className="highlight">Vision</span></h2>
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
    <section className="section dark">
        <div className="section-header fade-in-up">
            <div className="section-badge">Milestones</div>
            <h2 className="section-title">Our <span className="highlight">Achievements</span></h2>
            <p className="section-description">
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
    <section className="section">
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
            <div className="mentor-slider-wrapper" id="mentorSlider">
                {/*  Slide 1  */}
                <div className="mentor-slide">
                    <div className="mentor-image-container">
                        <img src="images/outer/jg.png" className="mentor-image" alt="Mentor" loading="lazy" /> 
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
                        <img src="" className="mentor-image" alt="Mentor" loading="lazy" /> 
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
                <button className="slider-btn prev-btn" id="prevBtn">
                    <i className="fas fa-chevron-left"></i>
                </button>
                <button className="slider-btn next-btn" id="nextBtn">
                    <i className="fas fa-chevron-right"></i>
                </button>
            </div>
            
            <div className="slider-dots" id="sliderDots">
                <span className="slider-dot active" data-slide="0"></span>
                <span className="slider-dot" data-slide="1"></span>
            </div>
        </div>
    </section>

    {/*  Our Motto  */}
    <section className="section dark">
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
            <a href="index" className="btn btn-primary">
                Explore Our Programs
                <i className="fas fa-arrow-right"></i>
            </a>
        </div>
    </section>

    {/*  Footer  */}
    <footer className="footer">
        <div className="footer-container">
            <div className="footer-bottom">
                <p>&copy; 2026 ProWorldz. All rights reserved. | Empowering Future Tech Leaders</p>
                <p>Bridging the gap between education and industry through practical, hands-on training</p>
            </div>
        </div>
    </footer>

    {/* Script tags removed */}
</div>
</div>

    </>
  );
}
