import React from 'react';

export default function Component() {
  return (
    <>
{/* DOCTYPE removed */}
<div className="html-wrapper">
<div className="head-wrapper">
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Programming Tasks | Proworldz</title>
  <link rel="icon" type="image/png" href="image.png" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
{/* Script tags removed */}
<style dangerouslySetInnerHTML={{ __html: `
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            border-color: rgba(229, 231, 235, 0.3);
            outline-color: rgba(156, 163, 175, 0.5);
            overscroll-behavior: auto;
        }

        body {
            font-family: 'Roboto Mono', monospace;
            background-color: #000000;
            color: #ffffff;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            min-width: 1280px;
            overflow-x: auto;
        }

        @font-face {
            font-family: "Rebels";
            src: url("https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu4mxK.woff2") format("woff2");
            font-weight: normal;
            font-style: normal;
            font-display: swap;
        }

        :root {
            --radius: 0.625rem;
            --background: #000000;
            --foreground: #ffffff;
            --card: #080808;
            --card-foreground: #ffffff;
            --popover: #080808;
            --popover-foreground: #ffffff;
            --primary: #ff2a2f;
            --primary-foreground: #ffffff;
            --secondary: #080808;
            --secondary-foreground: #ffffff;
            --muted: #080808;
            --muted-foreground: #a0a0a0;
            --accent: rgba(248, 250, 252, 0.05);
            --accent-foreground: #ffffff;
            --border: rgba(139, 12, 16, 0.1);
            --pop: rgba(255, 255, 255, 0.025);
            --input: rgba(139, 12, 16, 0.15);
            --ring: rgba(148, 163, 184, 0.5);
            
            --success: #ff2a2f;
            --destructive: #ff2a2f;
            --warning: #8b0c10;
            
            --chart-1: #ff2a2f;
            --chart-2: #ff2a2f;
            --chart-3: #8b0c10;
            --chart-4: #ff2a2f;
            --chart-5: #ff2a2f;
            
            --sidebar: #080808;
            --sidebar-foreground: #ffffff;
            --sidebar-primary: #ff2a2f;
            --sidebar-primary-foreground: #ffffff;
            --sidebar-accent: rgba(248, 250, 252, 0.05);
            --sidebar-accent-foreground: #ffffff;
            --sidebar-border: rgba(139, 12, 16, 0.1);
            --sidebar-ring: rgba(148, 163, 184, 0.5);
            
            --gap: 1.5rem;
            --sides: 1.5rem;
            --header-mobile: 3.8rem;
        }

        .desktop-container {
            display: grid;
            grid-template-columns: 280px 1fr;
            gap: var(--gap, 1.5rem);
            min-height: 100vh;
            padding: var(--sides, 1.5rem);
            background-color: var(--background);
        }

        
        

        .desktop-main {
            display: flex;
            flex-direction: column;
            gap: var(--gap);
        }

        .font-display {
            font-family: 'Rebels', 'Roboto Mono', monospace;
            font-weight: 700;
            letter-spacing: -0.02em;
        }

        .hidden { display: none !important; }
        .block { display: block; }
        .flex { display: flex; }
        .grid { display: grid; }
        .relative { position: relative; }
        .absolute { position: absolute; }
        .w-full { width: 100%; }
        .h-full { height: 100%; }
        .overflow-hidden { overflow: hidden; }
        .overflow-y-auto { overflow-y: auto; }
        .rounded-lg { border-radius: var(--radius); }
        .rounded-md { border-radius: calc(var(--radius) - 2px); }
        .rounded-sm { border-radius: calc(var(--radius) - 4px); }
        .rounded-full { border-radius: 9999px; }
        .border { border-width: 1px; }
        .border-2 { border-width: 2px; }
        .border-b { border-bottom-width: 1px; }
        .border-t { border-top-width: 1px; }

        .bg-background { background-color: var(--background); }
        .bg-foreground { background-color: var(--foreground); }
        .bg-primary { background-color: var(--primary); }
        .bg-secondary { background-color: var(--secondary); }
        .bg-muted { background-color: var(--muted); }
        .bg-accent { background-color: var(--accent); }
        .bg-card { background-color: var(--card); }
        .bg-success { background-color: var(--success); }
        .bg-warning { background-color: var(--warning); }
        .bg-destructive { background-color: var(--destructive); }
        .bg-sidebar { background-color: var(--sidebar); }
        .bg-sidebar-primary { background-color: var(--sidebar-primary); }
        .bg-sidebar-accent { background-color: var(--sidebar-accent); }

        .text-foreground { color: var(--foreground); }
        .text-primary { color: var(--primary); }
        .text-primary-foreground { color: var(--primary-foreground); }
        .text-secondary { color: var(--secondary); }
        .text-secondary-foreground { color: var(--secondary-foreground); }
        .text-muted { color: var(--muted); }
        .text-muted-foreground { color: var(--muted-foreground); }
        .text-success { color: var(--success); }
        .text-warning { color: var(--warning); }
        .text-destructive { color: var(--destructive); }
        .text-sidebar-foreground { color: var(--sidebar-foreground); }
        .text-sidebar-primary { color: var(--sidebar-primary); }
        .text-sidebar-primary-foreground { color: var(--sidebar-primary-foreground); }

        .text-xs { font-size: 0.75rem; line-height: 1rem; }
        .text-sm { font-size: 0.875rem; line-height: 1.25rem; }
        .text-base { font-size: 1rem; line-height: 1.5rem; }
        .text-lg { font-size: 1.125rem; line-height: 1.75rem; }
        .text-xl { font-size: 1.25rem; line-height: 1.75rem; }
        .text-2xl { font-size: 1.5rem; line-height: 2rem; }
        .text-3xl { font-size: 1.875rem; line-height: 2.25rem; }
        .text-4xl { font-size: 2.25rem; line-height: 2.5rem; }
        .text-5xl { font-size: 3rem; line-height: 1; }

        .font-normal { font-weight: 400; }
        .font-medium { font-weight: 500; }
        .font-semibold { font-weight: 600; }
        .font-bold { font-weight: 700; }

        .uppercase { text-transform: uppercase; }
        .italic { font-style: italic; }
        .text-center { text-align: center; }
        .text-right { text-align: right; }

        .opacity-0 { opacity: 0; }
        .opacity-50 { opacity: 0.5; }
        .opacity-100 { opacity: 1; }

        .cursor-pointer { cursor: pointer; }
        .select-none { user-select: none; }

        .transition-all { transition: all 0.3s ease; }
        .transition-colors { transition: background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease; }
        .transition-opacity { transition: opacity 0.3s ease; }
        .transition-transform { transition: transform 0.3s ease; }

        .grid-cols-1 { grid-template-columns: repeat(1, minmax(0, 1fr)); }
        .grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        .grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
        .grid-cols-4 { grid-template-columns: repeat(4, minmax(0, 1fr)); }

        .gap-2 { gap: 0.5rem; }
        .gap-3 { gap: 0.75rem; }
        .gap-4 { gap: 1rem; }
        .gap-6 { gap: 1.5rem; }
        .gap-gap { gap: var(--gap); }

        .p-0 { padding: 0; }
        .p-1 { padding: 0.25rem; }
        .p-2 { padding: 0.5rem; }
        .p-3 { padding: 0.75rem; }
        .p-4 { padding: 1rem; }
        .p-6 { padding: 1.5rem; }
        .px-2 { padding-left: 0.5rem; padding-right: 0.5rem; }
        .px-3 { padding-left: 0.75rem; padding-right: 0.75rem; }
        .px-4 { padding-left: 1rem; padding-right: 1rem; }
        .px-6 { padding-left: 1.5rem; padding-right: 1.5rem; }
        .py-1 { padding-top: 0.25rem; padding-bottom: 0.25rem; }
        .py-2 { padding-top: 0.5rem; padding-bottom: 0.5rem; }
        .py-3 { padding-top: 0.75rem; padding-bottom: 0.75rem; }
        .py-4 { padding-top: 1rem; padding-bottom: 1rem; }
        .py-6 { padding-top: 1.5rem; padding-bottom: 1.5rem; }
        .py-8 { padding-top: 2rem; padding-bottom: 2rem; }

        .mt-1 { margin-top: 0.25rem; }
        .mt-2 { margin-top: 0.5rem; }
        .mt-auto { margin-top: auto; }
        .mb-1 { margin-bottom: 0.25rem; }
        .mb-2 { margin-bottom: 0.5rem; }
        .mb-4 { margin-bottom: 1rem; }
        .mb-6 { margin-bottom: 1.5rem; }
        .ml-auto { margin-left: auto; }
        .mr-1 { margin-right: 0.25rem; }
        .mr-2 { margin-right: 0.5rem; }
        .mr-3 { margin-right: 0.75rem; }

        .space-y-1 > * + * { margin-top: 0.25rem; }
        .space-y-2 > * + * { margin-top: 0.5rem; }
        .space-y-3 > * + * { margin-top: 0.75rem; }
        .space-y-4 > * + * { margin-top: 1rem; }

        .flex-1 { flex: 1 1 0%; }
        .flex-col { flex-direction: column; }
        .flex-row { flex-direction: row; }
        .items-start { align-items: flex-start; }
        .items-center { align-items: center; }
        .items-baseline { align-items: baseline; }
        .items-stretch { align-items: stretch; }
        .justify-start { justify-content: flex-start; }
        .justify-center { justify-content: center; }
        .justify-between { justify-content: space-between; }
        .justify-end { justify-content: flex-end; }

        .min-w-0 { min-width: 0; }
        .max-w-xs { max-width: 20rem; }
        .max-w-sm { max-width: 24rem; }
        .max-w-md { max-width: 28rem; }
        .max-w-max { max-width: max-content; }

        .w-14 { width: 3.5rem; }
        .w-16 { width: 4rem; }
        .w-56 { width: 14rem; }
        .w-80 { width: 20rem; }

        .h-5 { height: 1.25rem; }
        .h-6 { height: 1.5rem; }
        .h-7 { height: 1.75rem; }
        .h-8 { height: 2rem; }
        .h-10 { height: 2.5rem; }
        .h-12 { height: 3rem; }
        .h-14 { height: 3.5rem; }
        .h-32 { height: 8rem; }

        .size-3 { width: 0.75rem; height: 0.75rem; }
        .size-4 { width: 1rem; height: 1rem; }
        .size-5 { width: 1.25rem; height: 1.25rem; }
        .size-6 { width: 1.5rem; height: 1.5rem; }
        .size-7 { width: 1.75rem; height: 1.75rem; }
        .size-9 { width: 2.25rem; height: 2.25rem; }
        .size-10 { width: 2.5rem; height: 2.5rem; }
        .size-12 { width: 3rem; height: 3rem; }
        .size-14 { width: 3.5rem; height: 3.5rem; }
        .size-16 { width: 4rem; height: 4rem; }

        .line-clamp-2 {
            overflow: hidden;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
        }

        .truncate {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        .card {
            background-color: var(--card);
            border-radius: var(--radius);
            border: 1px solid var(--border);
            overflow: hidden;
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

        .badge-secondary {
            background-color: var(--secondary);
            color: var(--secondary-foreground);
            border-color: var(--border);
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

        .badge-outline-warning {
            background-color: transparent;
            color: var(--warning);
            border-color: var(--warning);
        }

        .badge-destructive {
            background-color: var(--destructive);
            color: white;
            border-color: var(--destructive);
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

        .button-outline {
            background-color: transparent;
            color: currentColor;
            border-color: currentColor;
        }

        .button-outline:hover:not(:disabled) {
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

        .button-icon {
            width: 2.5rem;
            height: 2.5rem;
            padding: 0;
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

        

        

        

        .bullet {
            width: 0.5rem;
            height: 0.5rem;
            border-radius: 50%;
            background-color: var(--muted-foreground);
        }

        .bullet-success {
            background-color: var(--success);
        }

        .bullet-sm {
            width: 0.375rem;
            height: 0.375rem;
        }

        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }

        @keyframes slideUp {
            from { transform: translateY(20px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }

        @keyframes slideDown {
            from { transform: translateY(-20px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }

        .animate-fadeIn {
            animation: fadeIn 0.3s ease-out;
        }

        .animate-slideUp {
            animation: slideUp 0.3s ease-out;
        }

        .animate-slideDown {
            animation: slideDown 0.3s ease-out;
        }

        

        

        

        
        

        

        

        

        

        

        

        

        .ripple-container {
            position: relative;
            overflow: hidden;
        }

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

        .task-card {
            background-color: var(--card);
            border: 1px solid var(--border);
            border-radius: var(--radius);
            padding: 1.5rem;
            transition: all 0.3s ease;
            display: flex;
            flex-direction: column;
            gap: 1rem;
            height: 20cap;
        }

        .task-card:hover {
            border-color: var(--primary);
            box-shadow: 0 0 20px rgba(99, 102, 241, 0.2);
        }

        .task-difficulty-easy {
            background-color: rgba(16, 185, 129, 0.15);
            color: var(--success);
        }

        .task-difficulty-medium {
            background-color: rgba(245, 158, 11, 0.15);
            color: var(--warning);
        }

        .task-difficulty-hard {
            background-color: rgba(239, 68, 68, 0.15);
            color: var(--destructive);
        }

        .task-points {
            background: linear-gradient(45deg, var(--primary), var(--chart-2));
            color: white;
            padding: 0.5rem 1rem;
            border-radius: 9999px;
            font-weight: 600;
            font-size: 0.875rem;
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            width: fit-content;
        }

        .task-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            gap: 1rem;
        }

        .task-actions {
            display: flex;
            gap: 0.75rem;
            margin-top: auto;
        }

        .task-actions .button {
            flex: 1;
        }

        .completed-badge {
            background: rgba(16, 185, 129, 0.15);
            color: var(--success);
            padding: 0.75rem 1rem;
            border-radius: 9999px;
            font-weight: 600;
            font-size: 0.875rem;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            width: 100%;
        }
        
        .eagle-coins {
            
            color: white;
            padding: 0.5rem 1rem;
            border-radius: 9999px;
            font-weight: 600;
            font-size: 0.875rem;
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            width: fit-content;
        }

        
        

        
        

        
` }} />
<link rel="stylesheet" href="app-theme-overrides.css?v=20260518" />
</div>
<div className="body-wrapper">
    <div id="loader-wrapper">
        <div id="loader"></div>
        <div id="loader-text">INITIALIZING ECOSYSTEM...</div>
    </div>

    
        {/* Script tags removed */}
<div className="desktop-container">
        {/*  Left Sidebar - Navigation  */}
                {/* PHP code removed */}

    <div className="desktop-main">
            <div className="card animate-fadeIn">
                <div className="p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="size-9 rounded bg-primary flex items-center justify-center">
                            <svg className="size-5 text-primary-foreground" viewBox="0 0 20 20" fill="none" stroke="currentColor">
                                <path strokeWidth="1.5" d="M16.667 16.667V5a2.5 2.5 0 0 0-2.5-2.5H6.667a2.5 2.5 0 0 0-2.5 2.5v11.667"/>
                                <path strokeWidth="1.5" d="M6.667 2.5v15"/>
                                <path strokeWidth="1.5" d="M11.667 4.167l4.166 4.166" strokeLinecap="round"/>
                                <path strokeWidth="1.5" d="M13.333 8.333l-2.5 2.5-2.5-2.5 2.5-2.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                        <div>
                            <h1 className="text-3xl font-display">Programming Tasks</h1>
                            <div className="text-sm text-muted-foreground">Complete challenges to earn Eagle Points</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
                <div className="card animate-fadeIn">
                    <div className="p-4 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <div className="bullet"></div>
                            <span className="text-sm font-medium uppercase">Total Tasks</span>
                        </div>
                    </div>
                    <div className="bg-accent p-4">
                        <div className="flex items-center">
                            <span id="total-tasks" className="text-5xl font-display text-primary">0</span>
                        </div>
                        <div className="mt-2">
                            <p className="text-sm font-medium text-muted-foreground tracking-wide">AVAILABLE TASKS</p>
                        </div>
                    </div>
                </div>

                <div className="card animate-fadeIn" style={{ animationDelay: '0.1s' }}>
                    <div className="p-4 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <div className="bullet bullet-success"></div>
                            <span className="text-sm font-medium uppercase">Completed</span>
                        </div>
                    </div>
                    <div className="bg-accent p-4">
                        <div className="flex items-center">
                            <span id="completed-tasks" className="text-5xl font-display text-success">0</span>
                        </div>
                        <div className="mt-2">
                            <p className="text-sm font-medium text-muted-foreground tracking-wide">TASKS SOLVED</p>
                        </div>
                    </div>
                </div>

                <div className="card animate-fadeIn" style={{ animationDelay: '0.2s' }}>
                    <div className="p-4 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <div className="bullet"></div>
                            <span className="text-sm font-medium uppercase">Pendings</span>
                        </div>
                    </div>
                    <div className="bg-accent p-4">
                        <div className="flex items-center">
                            <span id="pendings" className="text-5xl font-display text-warning">0</span>
                        </div>
                        <div className="mt-2">
                            <p className="text-sm font-medium text-muted-foreground tracking-wide">Pending tasks</p>
                        </div>
                    </div>
                </div>
            </div>

            <div id="showall">

            </div>
        </div>
    </div>

</div>

{/* Script tags removed */}

{/*  ===== LANGUAGE SELECTION MODAL =====  */}
<div id="langModalOverlay" style={{ display: 'none', position: 'fixed', inset: '0', background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(8px)', zIndex: '9999', alignItems: 'center', justifyContent: 'center', padding: '24px' }}>
    <div style={{ width: '100%', maxWidth: '700px', background: '#0d1117', border: '1px solid var(--primary)', borderRadius: '12px', overflow: 'hidden', animation: 'modalIn 0.3s cubic-bezier(0.23, 1, 0.32, 1)' }}>
        <div style={{ background: 'linear-gradient(to right, rgba(255,42,47,0.2), transparent)', padding: '24px', borderBottom: '1px solid rgba(255,255,255,0.08)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
                <div style={{ fontSize: '0.7rem', fontWeight: '800', color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '4px' }}>Choose Language</div>
                <h3 id="langModalTaskName" style={{ fontFamily: '\'Roboto Mono\',monospace', fontSize: '1rem', fontWeight: '700', color: '#fff', textTransform: 'uppercase' }}></h3>
            </div>
            <button onClick="closeLangModal()" style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer', fontSize: '1.2rem' }}>&#10005;</button>
        </div>
        <div style={{ padding: '28px' }}>
            <p style={{ color: '#94a3b8', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '20px' }}>Select the programming language you want to use:</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '14px' }}>
                {/*  Python  */}
                <button className="lang-choice-btn" onClick="selectLang('lab/codings/pythoni')" style={{ background: 'rgba(49,112,143,0.1)', border: '1px solid rgba(49,112,143,0.3)', borderRadius: '10px', padding: '18px 12px', cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', transition: 'all 0.2s', color: '#fff' }}>
                    <i className="fab fa-python" style={{ fontSize: '2.5rem', color: '#3b8ab8' }}></i>
                    <span style={{ fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Python</span>
                </button>
                {/*  JavaScript  */}
                <button className="lang-choice-btn" onClick="selectLang('lab/codings/js')" style={{ background: 'rgba(247,223,30,0.05)', border: '1px solid rgba(247,223,30,0.2)', borderRadius: '10px', padding: '18px 12px', cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', transition: 'all 0.2s', color: '#fff' }}>
                    <i className="fab fa-js-square" style={{ fontSize: '2.5rem', color: '#f7df1e' }}></i>
                    <span style={{ fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em' }}>JavaScript</span>
                </button>
                {/*  C++  */}
                <button className="lang-choice-btn" onClick="selectLang('lab/codings/cpp')" style={{ background: 'rgba(0,85,164,0.08)', border: '1px solid rgba(0,85,164,0.25)', borderRadius: '10px', padding: '18px 12px', cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', transition: 'all 0.2s', color: '#fff' }}>
                    <i className="fas fa-cogs" style={{ fontSize: '2.5rem', color: '#6495ed' }}></i>
                    <span style={{ fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em' }}>C++</span>
                </button>
                {/*  PHP  */}
                <button className="lang-choice-btn" onClick="selectLang('lab/codings/php')" style={{ background: 'rgba(119,123,180,0.08)', border: '1px solid rgba(119,123,180,0.25)', borderRadius: '10px', padding: '18px 12px', cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', transition: 'all 0.2s', color: '#fff' }}>
                    <i className="fab fa-php" style={{ fontSize: '2.5rem', color: '#777bb4' }}></i>
                    <span style={{ fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em' }}>PHP</span>
                </button>
            </div>
            <p style={{ color: '#555', fontSize: '0.7rem', textAlign: 'center', marginTop: '18px' }}>You can switch language anytime from your lab environment.</p>
        </div>
    </div>
</div>

<style dangerouslySetInnerHTML={{ __html: `
@keyframes modalIn { from { opacity: 0; transform: scale(0.9) translateY(20px); } to { opacity:1; transform:scale(1) translateY(0); } }
.lang-choice-btn:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(255,42,47,0.2);
    border-color: var(--primary) !important;
    background: rgba(255,42,47,0.08) !important;
}
` }} />

{/* Script tags removed */}

<footer className="footer" style={{ textAlign: 'center', padding: '2rem', color: 'var(--muted-foreground)', borderTop: '1px solid var(--border)', marginTop: 'auto', fontSize: '0.875rem' }}>
    <p>&copy; 2026 ProWorldz Ecosystem. All rights reserved.</p>
</footer>

{/* Script tags removed */}
</div>
</div>

    </>
  );
}
