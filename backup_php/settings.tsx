import React from 'react';

export default function Component() {
  return (
    <>
{/* DOCTYPE removed */}
<div className="html-wrapper">
<div className="head-wrapper">
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Settings - M.O.N.K.Y OS</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
    <style dangerouslySetInnerHTML={{ __html: `
        /* ===== CSS RESET & BASE ===== */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            border-color: rgba(229, 231, 235, 0.3);
            outline-color: rgba(156, 163, 175, 0.5);
            overscroll-behavior: none;
        }

        body {
            font-family: 'Roboto Mono', monospace;
            background-color: #0d1015;
            color: #f8fafc;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            min-width: 1280px;
            overflow-x: auto;
        }

        /* ===== CUSTOM FONTS ===== */
        @font-face {
            font-family: "Rebels";
            src: url("https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu4mxK.woff2") format("woff2");
            font-weight: normal;
            font-style: normal;
            font-display: swap;
        }

        /* ===== CUSTOM PROPERTIES (CSS Variables) ===== */
        :root {
            --radius: 0.625rem;
            --background: #0d1015;
            --foreground: #f8fafc;
            --card: #1a1d24;
            --card-foreground: #f8fafc;
            --popover: #1a1d24;
            --popover-foreground: #f8fafc;
            --primary: #6366f1;
            --primary-foreground: #ffffff;
            --secondary: #2d3748;
            --secondary-foreground: #f8fafc;
            --muted: #2d3748;
            --muted-foreground: #94a3b8;
            --accent: rgba(248, 250, 252, 0.05);
            --accent-foreground: #f8fafc;
            --border: rgba(255, 255, 255, 0.1);
            --pop: rgba(255, 255, 255, 0.025);
            --input: rgba(255, 255, 255, 0.15);
            --ring: rgba(148, 163, 184, 0.5);
            
            --success: #10b981;
            --destructive: #ef4444;
            --warning: #f59e0b;
            
            --chart-1: #6366f1;
            --chart-2: #10b981;
            --chart-3: #f59e0b;
            --chart-4: #8b5cf6;
            --chart-5: #ec4899;
            
            --sidebar: #1a1d24;
            --sidebar-foreground: #f8fafc;
            --sidebar-primary: #6366f1;
            --sidebar-primary-foreground: #ffffff;
            --sidebar-accent: rgba(248, 250, 252, 0.05);
            --sidebar-accent-foreground: #f8fafc;
            --sidebar-border: rgba(255, 255, 255, 0.1);
            --sidebar-ring: rgba(148, 163, 184, 0.5);
            
            --gap: 1.5rem;
            --sides: 1.5rem;
            --header-mobile: 3.8rem;
        }

        /* ===== DESKTOP-ONLY LAYOUT ===== */
        .desktop-container {
            display: grid;
            grid-template-columns: 280px 1fr;
            gap: var(--gap);
            min-height: 100vh;
            padding: var(--sides);
            background-color: var(--background);
            min-width: 1280px;
        }

        .profile-card-section {
            background-color: transparent;
            border: none;
            padding: 0;
            margin-bottom: 0.5rem;
        }

        /* Left Sidebar - Navigation */
        .desktop-sidebar {
            display: flex;
            flex-direction: column;
            gap: var(--gap);
        }

        /* Main Content Area */
        .desktop-main {
            display: flex;
            flex-direction: column;
            gap: var(--gap);
        }

        /* ===== TYPOGRAPHY ===== */
        .font-display {
            font-family: 'Rebels', 'Roboto Mono', monospace;
            font-weight: 700;
            letter-spacing: -0.02em;
        }

        /* ===== UTILITY CLASSES ===== */
        .hidden {
            display: none !important;
        }

        .flex {
            display: flex;
        }

        .grid {
            display: grid;
        }

        .relative {
            position: relative;
        }

        .w-full {
            width: 100%;
        }

        .h-full {
            height: 100%;
        }

        .rounded-lg {
            border-radius: var(--radius);
        }

        .border {
            border-width: 1px;
        }

        .bg-background {
            background-color: var(--background);
        }

        .bg-card {
            background-color: var(--card);
        }

        .bg-accent {
            background-color: var(--accent);
        }

        .text-foreground {
            color: var(--foreground);
        }

        .text-primary {
            color: var(--primary);
        }

        .text-muted-foreground {
            color: var(--muted-foreground);
        }

        .text-success {
            color: var(--success);
        }

        .text-destructive {
            color: var(--destructive);
        }

        .text-xs {
            font-size: 0.75rem;
            line-height: 1rem;
        }

        .text-sm {
            font-size: 0.875rem;
            line-height: 1.25rem;
        }

        .text-base {
            font-size: 1rem;
            line-height: 1.5rem;
        }

        .text-lg {
            font-size: 1.125rem;
            line-height: 1.75rem;
        }

        .text-xl {
            font-size: 1.25rem;
            line-height: 1.75rem;
        }

        .text-2xl {
            font-size: 1.5rem;
            line-height: 2rem;
        }

        .text-3xl {
            font-size: 1.875rem;
            line-height: 2.25rem;
        }

        .font-medium {
            font-weight: 500;
        }

        .font-semibold {
            font-weight: 600;
        }

        .font-bold {
            font-weight: 700;
        }

        .uppercase {
            text-transform: uppercase;
        }

        .cursor-pointer {
            cursor: pointer;
        }

        .transition-all {
            transition: all 0.3s ease;
        }

        .transition-colors {
            transition: background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease;
        }

        /* ===== LAYOUT ===== */
        .grid-cols-2 {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .gap-2 {
            gap: 0.5rem;
        }

        .gap-3 {
            gap: 0.75rem;
        }

        .gap-4 {
            gap: 1rem;
        }

        .gap-6 {
            gap: 1.5rem;
        }

        .gap-gap {
            gap: var(--gap);
        }

        .p-2 {
            padding: 0.5rem;
        }

        .p-3 {
            padding: 0.75rem;
        }

        .p-4 {
            padding: 1rem;
        }

        .p-6 {
            padding: 1.5rem;
        }

        .px-4 {
            padding-left: 1rem;
            padding-right: 1rem;
        }

        .px-6 {
            padding-left: 1.5rem;
            padding-right: 1.5rem;
        }

        .py-2 {
            padding-top: 0.25rem;
            padding-bottom: 0.25rem;
        }

        .py-3 {
            padding-top: 0.75rem;
            padding-bottom: 0.75rem;
        }

        .py-4 {
            padding-top: 1rem;
            padding-bottom: 1rem;
        }

        .py-6 {
            padding-top: 1.5rem;
            padding-bottom: 1.5rem;
        }

        .mb-2 {
            margin-bottom: 0.5rem;
        }

        .mb-4 {
            margin-bottom: 1rem;
        }

        .mb-6 {
            margin-bottom: 1.5rem;
        }

        .space-y-2 > * + * {
            margin-top: 0.5rem;
        }

        .space-y-4 > * + * {
            margin-top: 1rem;
        }

        .space-y-6 > * + * {
            margin-top: 1.5rem;
        }

        .flex-1 {
            flex: 1 1 0%;
        }

        .flex-col {
            flex-direction: column;
        }

        .items-start {
            align-items: flex-start;
        }

        .items-center {
            align-items: center;
        }

        .items-stretch {
            align-items: stretch;
        }

        .justify-start {
            justify-content: flex-start;
        }

        .justify-center {
            justify-content: center;
        }

        .justify-between {
            justify-content: space-between;
        }

        .justify-end {
            justify-content: flex-end;
        }

        .h-10 {
            height: 2.5rem;
        }

        .h-12 {
            height: 3rem;
        }

        .h-14 {
            height: 3.5rem;
        }

        .h-32 {
            height: 8rem;
        }

        .size-12 {
            width: 3rem;
            height: 3rem;
        }

        .size-14 {
            width: 3.5rem;
            height: 3.5rem;
        }

        .size-32 {
            width: 8rem;
            height: 8rem;
        }

        .overflow-hidden {
            overflow: hidden;
        }

        .object-cover {
            object-fit: cover;
        }

        .object-contain {
            object-fit: contain;
        }

        /* ===== CUSTOM COMPONENT STYLES ===== */
        .card {
            background-color: var(--card);
            border-radius: var(--radius);
            border: 1px solid var(--border);
            overflow: hidden;
        }

        .button {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border-radius: calc(var(--radius) - 2px);
            font-weight: 500;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            transition: all 0.2s;
            cursor: pointer;
            border: 1px solid transparent;
            user-select: none;
            white-space: nowrap;
        }

        .button:disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }

        .button-default {
            background-color: var(--primary);
            color: var(--primary-foreground);
        }

        .button-default:hover:not(:disabled) {
            background-color: color-mix(in srgb, var(--primary) 90%, black);
        }

        .button-secondary {
            background-color: var(--secondary);
            color: var(--secondary-foreground);
            border-color: var(--border);
        }

        .button-secondary:hover:not(:disabled) {
            background-color: color-mix(in srgb, var(--secondary) 90%, black);
        }

        .button-ghost {
            background-color: transparent;
            color: currentColor;
        }

        .button-ghost:hover:not(:disabled) {
            background-color: var(--accent);
        }

        .button-sm {
            height: 2rem;
            padding: 0 0.75rem;
            font-size: 0.875rem;
        }

        .button-md {
            height: 2.5rem;
            padding: 0 1rem;
            font-size: 0.875rem;
        }

        .button-lg {
            height: 3rem;
            padding: 0 1.5rem;
            font-size: 1rem;
        }

        .input {
            width: 100%;
            height: 2.5rem;
            padding: 0 0.75rem;
            background-color: var(--input);
            border: 1px solid var(--border);
            border-radius: calc(var(--radius) - 2px);
            color: var(--foreground);
            font-family: inherit;
            font-size: 0.875rem;
            transition: border-color 0.2s;
        }

        .input:focus {
            outline: none;
            border-color: var(--ring);
        }

        .input:disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }

        .input::placeholder {
            color: var(--muted-foreground);
            opacity: 0.7;
        }

        .badge {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border-radius: 9999px;
            padding: 0.25rem 0.75rem;
            font-size: 0.75rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            border: 1px solid transparent;
        }

        .badge-default {
            background-color: var(--primary);
            color: var(--primary-foreground);
            border-color: var(--primary);
        }

        .badge-outline {
            background-color: transparent;
            color: currentColor;
            border-color: currentColor;
        }

        .badge-outline-success {
            background-color: transparent;
            color: var(--success);
            border-color: var(--success);
        }

        .separator {
            width: 100%;
            height: 1px;
            background-color: var(--border);
        }

        .bullet {
            width: 0.5rem;
            height: 0.5rem;
            border-radius: 50%;
            background-color: var(--muted-foreground);
        }

        /* ===== SIDEBAR NAVIGATION STYLES ===== */
        .nav-item {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            padding: 0.75rem;
            border-radius: calc(var(--radius) - 2px);
            text-decoration: none;
            color: var(--sidebar-foreground);
            transition: all 0.2s;
            margin-bottom: 0.25rem;
        }

        .nav-item:hover {
            background-color: var(--sidebar-accent);
        }

        .nav-item.active {
            background-color: var(--sidebar-primary);
            color: var(--sidebar-primary-foreground);
        }

        .nav-item.disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }

        .nav-icon {
            width: 1.25rem;
            height: 1.25rem;
            flex-shrink: 0;
        }

        .nav-label {
            font-size: 0.875rem;
            font-weight: 500;
            text-transform: uppercase;
        }

        .nav-title {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.5rem 0.75rem;
            margin-bottom: 0.5rem;
        }

        .nav-title span {
            font-size: 0.75rem;
            font-weight: 600;
            text-transform: uppercase;
            color: var(--muted-foreground);
        }

        /* ===== PROFILE IMAGE UPLOAD ===== */
        .profile-image-upload {
            position: relative;
            width: 8rem;
            height: 8rem;
            border-radius: 50%;
            overflow: hidden;
            border: 2px solid var(--primary);
            background-color: var(--secondary);
        }

        .profile-image-upload img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .profile-image-overlay {
            position: absolute;
            inset: 0;
            background-color: rgba(0, 0, 0, 0.7);
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            transition: opacity 0.3s ease;
            cursor: pointer;
        }

        .profile-image-upload:hover .profile-image-overlay {
            opacity: 1;
        }

        .profile-image-overlay span {
            color: white;
            font-size: 0.875rem;
            font-weight: 500;
            text-transform: uppercase;
        }

        /* ===== ANIMATIONS ===== */
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }

        @keyframes slideUp {
            from { transform: translateY(20px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }

        .animate-fadeIn {
            animation: fadeIn 0.3s ease-out;
        }

        .animate-slideUp {
            animation: slideUp 0.3s ease-out;
        }

        /* ===== LOADING STATES ===== */
        .loading {
            position: relative;
            pointer-events: none;
        }

        .loading::after {
            content: "";
            position: absolute;
            top: 50%;
            left: 50%;
            width: 20px;
            height: 20px;
            margin: -10px 0 0 -10px;
            border: 2px solid var(--border);
            border-top-color: var(--primary);
            border-radius: 50%;
            animation: spin 1s linear infinite;
        }

        @keyframes spin {
            to { transform: rotate(360deg); }
        }

        /* ===== TOAST NOTIFICATIONS ===== */
        .toast {
            position: fixed;
            bottom: 2rem;
            right: 2rem;
            padding: 1rem 1.5rem;
            background-color: var(--card);
            border: 1px solid var(--border);
            border-radius: var(--radius);
            display: flex;
            align-items: center;
            gap: 0.75rem;
            z-index: 100;
            transform: translateY(100%);
            opacity: 0;
            transition: transform 0.3s ease, opacity 0.3s ease;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
        }

        .toast.show {
            transform: translateY(0);
            opacity: 1;
        }

        .toast.success {
            border-left: 4px solid var(--success);
        }

        .toast.error {
            border-left: 4px solid var(--destructive);
        }

        .toast.warning {
            border-left: 4px solid var(--warning);
        }

        .toast-icon {
            width: 1.25rem;
            height: 1.25rem;
            flex-shrink: 0;
        }

        /* ===== CUSTOM SCROLLBAR ===== */
        ::-webkit-scrollbar {
            width: 6px;
            height: 6px;
        }

        ::-webkit-scrollbar-track {
            background: transparent;
        }

        ::-webkit-scrollbar-thumb {
            background: var(--muted);
            border-radius: 3px;
        }

        ::-webkit-scrollbar-thumb:hover {
            background: var(--muted-foreground);
        }
    ` }} />
</div>
<div className="body-wrapper">
    <div className="desktop-container">
        {/*  Left Sidebar - Navigation  */}
        <div className="desktop-sidebar">
            {/*  Logo Section  */}
            <div className="profile-card-section">
                <div className="p-4">
                    <div className="flex items-center gap-3">
                        <div className="size-12 flex items-center justify-center rounded-lg" style={{ position: 'relative', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
                            <img src="{/* PHP code removed */}</div />
                            <div className="text-xs uppercase text-muted-foreground">Settings Dashboard</div>
                        </div>
                    </div>
                </div>
            </div>

            {/*  Navigation Sections  */}
            <div className="card">
                <div className="p-3">
                    <nav className="nav-section">
                        <a href="dashboard" className="nav-item">
                            <svg className="nav-icon" viewBox="0 0 20 20" fill="none">
                                <path stroke="currentColor" strokeLinecap="square" strokeWidth="1.667" d="M5.833 3.333h-2.5v13.334h2.5m8.333-13.334h2.5v13.334h-2.5"/>
                            </svg>
                            <span className="nav-label">Overview</span>
                        </a>
                        <a href="lab" className="nav-item">
                            <svg className="nav-icon" viewBox="0 0 20 20" fill="none">
                                <path stroke="currentColor" strokeWidth="1.667" d="M16.228 3.772c1.31 1.31-.416 5.16-3.856 8.6-3.44 3.44-7.29 5.167-8.6 3.856-1.31-1.31.415-5.16 3.855-8.6 3.44-3.44 7.29-5.167 8.6-3.856Z"/>
                                <path stroke="currentColor" strokeWidth="1.667" d="M16.228 16.228c-1.31 1.31-5.161-.416-8.601-3.855-3.44-3.44-5.166-7.29-3.856-8.601 1.31-1.31 5.162.416 8.601 3.855 3.44 3.44 5.166 7.29 3.856 8.601Z"/>
                            </svg>
                            <span className="nav-label">Laboratory</span>
                        </a>
                        <a href="tasks" className="nav-item">
                            <svg className="nav-icon" viewBox="0 0 20 20" fill="none" stroke="currentColor">
                                <path strokeWidth="1.5" d="M5 3.333h8.333a2.5 2.5 0 0 1 2.5 2.5v10a2.5 2.5 0 0 1-2.5 2.5H5V3.333z"/>
                                <path strokeWidth="1.5" d="M13.333 3.333v13.334"/>
                                <path strokeWidth="1.5" d="M3.333 14.167l1.667-1.667" strokeLinecap="round"/>
                                <path strokeWidth="1.5" d="M8.333 10l-3.333 3.333" strokeLinecap="round"/>
                                <path strokeWidth="1.2" d="M8.333 7.5h3.334" strokeLinecap="round"/>
                                <path strokeWidth="1.2" d="M8.333 9.167h5" strokeLinecap="round"/>
                                <path strokeWidth="1.2" d="M8.333 10.833h4.167" strokeLinecap="round"/>
                            </svg>
                            <span className="nav-label">Tasks</span>
                        </a>
                        <a href="ourcourse" className="nav-item">
                            <svg className="nav-icon" viewBox="0 0 20 20" fill="none" stroke="currentColor">
                                <path strokeWidth="1.5" d="M16.667 15V5.833a2.5 2.5 0 0 0-2.5-2.5H5.833a2.5 2.5 0 0 0-2.5 2.5v10a2.5 2.5 0 0 0 2.5 2.5h10"/>
                                <path strokeWidth="1.5" d="M6.667 3.333v13.334"/>
                                <path strokeWidth="1.5" d="M10 6.667h3.333"/>
                                <path strokeWidth="1.5" d="M10 10h3.333"/>
                            </svg>
                            <span className="nav-label">Courses</span>
                        </a>
                        <a href="course_video" className="nav-item">
                            <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2c.46-1.7.46-5.33.46-5.33a29 29 0 0 0-.46-5.33z"></path>
                                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                            </svg>
                            <span className="nav-label">Course Video</span>
                        </a>
                        <a href="assignment" className="nav-item disabled">
                            <svg className="nav-icon" viewBox="0 0 20 20" fill="none" stroke="currentColor">
                                <path strokeWidth="1.5" d="M16.667 16.667V5a2.5 2.5 0 0 0-2.5-2.5H6.667a2.5 2.5 0 0 0-2.5 2.5v11.667"/>
                                <path strokeWidth="1.5" d="M6.667 2.5v15"/>
                                <path strokeWidth="1.5" d="M11.667 4.167l4.166 4.166" strokeLinecap="round"/>
                                <path strokeWidth="1.5" d="M13.333 8.333l-2.5 2.5-2.5-2.5 2.5-2.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span className="nav-label">Assignments</span>
                        </a>
                        <a href="download" className="nav-item">
                            <svg className="nav-icon" viewBox="0 0 20 20" fill="none">
                                <path stroke="currentColor" strokeLinecap="square" strokeWidth="1.667" d="M10 4.164V2.497m3.333 1.67V2.5M6.667 4.167v-1.67M10 17.5v-1.667m3.333 1.667v-1.667M6.667 17.5v-1.667m9.166-2.5H17.5m-1.667-6.667H17.5M15.833 10H17.5m-15 0h1.667M2.5 13.334h1.667M2.5 6.666h1.667M12.5 10a2.501 2.501 0 1 1-5.002 0 2.501 2.501 0 0 1 5.002 0ZM4.167 4.167h11.666v11.666H4.167V4.167Z"/>
                            </svg>
                            <span className="nav-label">Devices</span>
                        </a>
                        <a href="leaderboard" className="nav-item">
                            <svg className="nav-icon" viewBox="0 0 20 20" fill="none">
                                <path stroke="currentColor" strokeWidth="1.667" d="M10 2.5l3.333 6.667H6.667L10 2.5z"/>
                                <path stroke="currentColor" strokeWidth="1.667" d="M3.333 10.833h13.334"/>
                                <path strokeWidth="1.667" d="M5.833 13.333h8.334"/>
                                <path stroke="currentColor" strokeWidth="1.667" d="M7.5 15.833h5"/>
                            </svg>
                            <span className="nav-label">Leaderboard</span>
                        </a>
                        <a href="teams" className="nav-item">
                            <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                <circle cx="9" cy="7" r="4"></circle>
                                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                            </svg>
                            <span className="nav-label">Teams</span>
                        </a>
                        <a href="tournament" className="nav-item">
                            <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                                <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                                <path d="M4 22h16"></path>
                                <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
                                <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
                                <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
                            </svg>
                            <span className="nav-label">Tournament</span>
                        </a>
                        <a href="maintanance" className="nav-item disabled">
                            <svg className="nav-icon" viewBox="0 0 20 20" fill="none">
                                <path stroke="currentColor" strokeLinecap="square" strokeWidth="1.667" d="M10 3.333H4.166v7.5h11.667v-7.5H10Zm0 0V1.667m-6.667 12.5 1.25-1.25m12.083 1.25-1.25-1.25M7.5 6.667V7.5m5-.833V7.5M5 10.833V12.5a5 5 0 0 0 10 0v-1.667"/>
                            </svg>
                            <span className="nav-label">Security status</span>
                        </a>
                        <a href="contactus" className="nav-item">
                            <svg className="nav-icon" viewBox="0 0 20 20" fill="none">
                                <path fill="currentColor" d="M17.5 4.167h.833v-.834H17.5v.834Zm0 11.666v.834h.833v-.834H17.5Zm-15 0h-.833v.834H2.5v-.834Zm0-11.666v-.834h-.833v.834H2.5Zm7.5 6.666-.528.645.528.432.528-.432-.528-.645Zm7.5-6.666h-.833v11.666h1.666V4.167H17.5Zm0 11.666V15h-15V16.667h15v-.834Zm-15 0h.833V4.167H1.667v11.666H2.5Zm0-11.666V5h15V3.333h-15v.834Zm7.5 6.666.528-.645-7.084-5.795-.527.645-.528.645 7.083 5.795.528-.645Zm7.083-5.795-.527-.645-7.084 5.795.528.645.528.645 7.083-5.795-.528-.645Z"/>
                            </svg>
                            <span className="nav-label">Contact support</span>
                        </a>
                        <a href="https://dragotool.shop/" className="nav-item" target="_blank" rel="noopener noreferrer">
                            <svg className="nav-icon" viewBox="0 0 640 512" fill="currentColor">
                                <path d="M18.32 255.78L192 223.96l-91.28 68.69c-10.08 10.08-2.94 27.31 11.31 27.31h222.7c.94 0 1.78-.23 2.65-.29l-79.21 88.62c-9.85 11.03-2.16 28.11 12.58 28.11 6.34 0 12.27-3.59 15.99-9.26l79.21-88.62c.39.04.78.07 1.18.07h78.65c14.26 0 21.39-17.22 11.32-27.31l-79.2-88.62c.39-.04.78-.07 1.18-.07h78.65c14.26 0 21.39-17.22 11.32-27.31L307.33 9.37c-6.01-6.76-17.64-6.76-23.65 0l-265.38 246.4c-10.08 10.08-2.94 27.31 11.31 27.31h79.21c.39 0 .78-.03 1.17-.07L18.32 255.78z"/>
                            </svg>
                            <span className="nav-label">Drago Tool</span>
                        </a>
                        <a href="eaglone_shop" className="nav-item">
                            <svg className="nav-icon" viewBox="0 0 20 20" fill="none">
                                <path stroke="currentColor" strokeWidth="1.5" d="M5 6.667h10l-1 9.166H6l-1-9.166Z"/>
                                <path stroke="currentColor" strokeWidth="1.5" d="M7.5 8.333V6.25a2.5 2.5 0 0 1 5 0v2.083"/>
                            </svg>
                            <span className="nav-label">Eaglone shop</span>
                        </a>
                        <a href="logout" className="nav-item">
                            <svg className="nav-icon" viewBox="0 0 512 512" fill="currentColor">
                                <path d="M497 273L329 441c-15 15-41 4.5-41-17v-96H152c-13.3 0-24-10.7-24-24v-96c0-13.3 10.7-24 24-24h136V88c0-21.4 25.9-32 41-17l168 168c9.3 9.4 9.3 24.6 0 34zM192 436v-40c0-6.6-5.4-12-12-12H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h84c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12H96c-53 0-96 43-96 96v192c0 53 43 96 96 96h84c6.6 0 12-5.4 12-12z"/>
                            </svg>
                            <span className="nav-label">Logout</span>
                        <a href="settings" className="nav-item active">
                            <svg className="nav-icon" viewBox="0 0 20 20" fill="none">
                                <path stroke="currentColor" strokeLinecap="square" strokeWidth="1.667" d="M10 10.833a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
                                <path stroke="currentColor" strokeLinecap="square" strokeWidth="1.667" d="M15.833 6.667v-.834a2.5 2.5 0 0 0-2.5-2.5h-6.666a2.5 2.5 0 0 0-2.5 2.5v.834m-2.5 0h18.332v7.5H2.5v-7.5Zm.833 9.166a2.5 2.5 0 0 0 2.5 2.5h10a2.5 2.5 0 0 0 2.5-2.5V14.167"/>
                            </svg>
                            <span className="nav-label">Settings</span>
                        </a>
                    </nav>
                </div>
            </div>

        {/*  Main Content Area  */}
        <div className="desktop-main">
            {/*  Settings Header  */}
            <div className="card animate-fadeIn">
                <div className="p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="size-9 rounded bg-primary flex items-center justify-center">
                            <svg className="size-5 text-primary-foreground" viewBox="0 0 20 20" fill="none">
                                <path stroke="currentColor" strokeLinecap="square" strokeWidth="1.667" d="M10 10.833a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
                                <path stroke="currentColor" strokeLinecap="square" strokeWidth="1.667" d="M15.833 6.667v-.834a2.5 2.5 0 0 0-2.5-2.5h-6.666a2.5 2.5 0 0 0-2.5 2.5v.834m-2.5 0h18.332v7.5H2.5v-7.5Zm.833 9.166a2.5 2.5 0 0 0 2.5 2.5h10a2.5 2.5 0 0 0 2.5-2.5V14.167"/>
                            </svg>
                        </div>
                        <div>
                            <h1 className="text-3xl font-display">Settings</h1>
                            <div className="text-sm text-muted-foreground">Manage your profile and preferences</div>
                        </div>
                    </div>
                    <button id="save-button" className="button button-default button-lg hidden">
                        <span id="save-text">Save Changes</span>
                        <span id="save-loader" className="hidden">Saving...</span>
                    </button>
                </div>
            </div>

            {/*  Profile Settings  */}
            <div className="card animate-slideUp" style={{ animationDelay: '0.1s' }}>
                <div className="p-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="bullet"></div>
                        <span className="text-sm font-medium uppercase">PROFILE INFORMATION</span>
                    </div>
                    <span className="badge badge-outline-success" id="status-badge">ACTIVE</span>
                </div>
                <div className="bg-accent p-6">
                    <div className="grid grid-cols-1 gap-6">
                        {/*  Form Fields  */}
                        <div className="space-y-6">
                            {/*  ID Field  */}
                            <div className="space-y-2">
                                <label className="text-sm font-medium uppercase text-muted-foreground">ID</label>
                                <input type="text" id="user-id" className="input" disabled />
                                <div className="flex items-center gap-2">
                                    <div className="size-3 rounded-full bg-muted-foreground"></div>
                                    <p className="text-xs text-muted-foreground">Immutable identifier</p>
                                </div>
                            </div>

                            {/*  Name Field  */}
                            <div className="space-y-2">
                                <label className="text-sm font-medium uppercase text-muted-foreground">NAME</label>
                                <input type="text" id="user-name" className="input" placeholder="Enter your full name" />
                                <div className="flex items-center gap-2">
                                    <div className="size-3 rounded-full bg-primary"></div>
                                    <p className="text-xs text-muted-foreground">Editable field - Changes will be saved</p>
                                </div>
                            </div>

                            {/*  Email Field  */}
                            <div className="space-y-2">
                                <label className="text-sm font-medium uppercase text-muted-foreground">EMAIL</label>
                                <input type="email" id="user-email" className="input" disabled />
                                <div className="flex items-center gap-2">
                                    <div className="size-3 rounded-full bg-muted-foreground"></div>
                                    <p className="text-xs text-muted-foreground">Contact support to change email</p>
                                </div>
                            </div>

                            {/*  Gender Field  */}
                            <div className="space-y-2">
                                <label className="text-sm font-medium uppercase text-muted-foreground">GENDER</label>
                                <input type="text" id="user-gender" className="input" disabled />
                                <div className="flex items-center gap-2">
                                    <div className="size-3 rounded-full bg-muted-foreground"></div>
                                    <p className="text-xs text-muted-foreground">System-defined parameter</p>
                                </div>
                            </div>

                            {/*  Phone Field  */}
                            <div className="space-y-2">
                                <label className="text-sm font-medium uppercase text-muted-foreground">PHONE</label>
                                <input type="tel" id="user-phone" className="input" disabled />
                                <div className="flex items-center gap-2">
                                    <div className="size-3 rounded-full bg-muted-foreground"></div>
                                    <p className="text-xs text-muted-foreground">Administrator modification required</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*  Session Info  */}
            <div className="card animate-slideUp" style={{ animationDelay: '0.2s' }}>
                <div className="p-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="bullet"></div>
                        <span className="text-sm font-medium uppercase">SESSION INFORMATION</span>
                    </div>
                    <span className="badge badge-outline">LIVE</span>
                </div>
                <div className="bg-accent p-6">
                    <div className="grid grid-cols-2 gap-6">
                        {/*  IP Address  */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium uppercase text-muted-foreground">IP ADDRESS</label>
                            <input type="text" id="user-ip" className="input" disabled />
                            <p className="text-xs text-muted-foreground">Current session IP</p>
                        </div>

                        {/*  Last Active  */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium uppercase text-muted-foreground">LAST ACTIVE</label>
                            <input type="text" id="last-active" className="input" value="Just now" disabled />
                            <p className="text-xs text-muted-foreground">Real-time tracking</p>
                        </div>
                    </div>
                </div>
            </div>

            {/*  System Status  */}
            <div className="card animate-slideUp" style={{ animationDelay: '0.3s' }}>
                <div className="p-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="bullet"></div>
                        <span className="text-sm font-medium uppercase">SYSTEM STATUS</span>
                    </div>
                    <span className="badge badge-outline-success">OPERATIONAL</span>
                </div>
                <div className="bg-accent p-6">
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <span className="text-sm">API Connection</span>
                            <span className="badge badge-outline-success" id="api-status">CONNECTED</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-sm">Database Status</span>
                            <span className="badge badge-outline-success" id="db-status">ONLINE</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-sm">Profile Sync</span>
                            <span className="badge badge-outline-success" id="sync-status">SYNCED</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    {/*  Toast Notification  */}
    <div id="toast" className="toast">
        <svg className="toast-icon" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
        </svg>
        <span id="toast-message"></span>
    </div>

    {/* Script tags removed */}
</div>
</div>
    </>
  );
}
