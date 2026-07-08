import React from 'react';

export default function Component() {
  return (
    <>
{/* DOCTYPE removed */}
<div className="html-wrapper">
<div className="head-wrapper">
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Linux Terminal — EduPortal</title>
    <link rel="stylesheet" href="style.css" />
    <style dangerouslySetInnerHTML={{ __html: `
        body { margin: 0; padding: 0; background: #000; overflow: hidden; height: 100vh; }
        .terminal-fullscreen {
            width: 100vw;
            height: 100vh;
            background: #0c0c0c;
            display: flex;
            flex-direction: column;
            font-family: var(--font-code);
        }
        .terminal-bar-fs {
            background: #1a1a1a;
            padding: 10px 20px;
            display: flex;
            align-items: center;
            border-bottom: 1px solid #333;
            user-select: none;
        }
        .terminal-dots-fs { display: flex; gap: 8px; margin-right: 15px; }
        .t-dot-fs { width: 12px; height: 12px; border-radius: 50%; }
        #terminal-output {
            flex: 1;
            padding: 20px 24px;
            overflow-y: auto;
            color: #ddd;
            font-size: 15px;
            line-height: 1.5;
            cursor: text;
        }
        .terminal-input-row-inline {
            display: flex;
            align-items: center;
            width: 100%;
        }
        #terminal-input {
            background: none;
            border: none;
            color: #fff;
            flex: 1;
            outline: none;
            font-family: inherit;
            font-size: inherit;
            caret-color: #00D4AA;
            padding: 0;
            margin: 0;
        }
        #terminal-prompt-display { color: #00D4AA; font-weight: 700; margin-right: 10px; white-space: nowrap; }
        .t-line { margin-bottom: 2px; white-space: pre-wrap; }
        .t-dir-str { color: #61afef; font-weight: 700; }
        .t-file-str { color: #ddd; }
        .t-cmd-str { color: #e5c07b; }
        .t-prompt-str { color: #00D4AA; font-weight: 700; margin-right: 8px; }
        .t-out-str { color: #98c379; }
        .t-err-str { color: #e06c75; }
        
        /* Ensure input is always visible at the end of the content */
        #terminal-buffer { display: flex; flex-direction: column; }
    ` }} />
</div>
<div className="body-wrapper">
    <div className="terminal-fullscreen">
        <div className="terminal-bar-fs">
            <div className="terminal-dots-fs">
                <div className="t-dot-fs" style={{ background: '#ff5f56', cursor: 'pointer' }} onClick="window.close()"></div>
                <div className="t-dot-fs" style={{ background: '#ffbd2e' }}></div>
                <div className="t-dot-fs" style={{ background: '#27c93f' }}></div>
            </div>
            <div style={{ flex: '1', textAlign: 'center', color: '#666', fontSize: '12px', fontWeight: '600' }}>student@linux-env — bash (Professional Terminal Environment)</div>
            <button onClick="window.close()" style={{ background: 'none', border: 'none', color: '#555', cursor: 'pointer', fontSize: '18px', marginLeft: '15px' }}>✕</button>
        </div>
        <div id="terminal-output" onClick="document.getElementById('terminal-input').focus()">
            <div id="terminal-buffer">
                <div className="t-line" style={{ color: '#00D4AA', fontWeight: '700', marginBottom: '10px' }}>Linux Terminal Simulator v3.0 — Practice Environment</div>
                <div className="t-line" style={{ color: '#666', marginBottom: '20px' }}>Type 'help' for available commands. Welcome to the sandbox.</div>
            </div>
            <div className="terminal-input-row-inline">
                <span id="terminal-prompt-display">student@linux-env:~$ </span>
                <input type="text" id="terminal-input" autoComplete="off" spellcheck="false" autofocus />
            </div>
        </div>
    </div>
    {/* Script tags removed */}
</div>
</div>

    </>
  );
}
