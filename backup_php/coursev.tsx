import React from 'react';

export default function Component() {
  return (
    <>
{/* DOCTYPE removed */}<div className="html-wrapper"><div className="head-wrapper"><meta charSet="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0" /><link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" /><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" /><style dangerouslySetInnerHTML={{ __html: `body{margin:0;padding:0;background:#000;display:flex;align-items:center;justify-content:center;min-height:100vh;font-family:\'Space Grotesk\',sans-serif;color:#fff;overflow:hidden}.overlay{position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:9999;display:flex;align-items:center;justify-content:center;backdrop-filter:blur(15px)}.modal{background:#000000;border:1px solid rgba(255,0,0,0.3);padding:3rem;border-radius:20px;text-align:center;box-shadow:0 0 50px rgba(255,0,0,0.15);max-width:400px;width:90%;animation:modalEntry 0.5s cubic-bezier(0.4,0,0.2,1)}@keyframes modalEntry{from{opacity:0;transform:scale(0.9) translateY(20px)}to{opacity:1;transform:scale(1) translateY(0)}}.icon{color:#ff3333;font-size:4rem;margin-bottom:1.5rem;filter:drop-shadow(0 0 10px rgba(139, 12, 16,0.4))}h2{font-size:1.75rem;margin:0 0 1rem 0;letter-spacing:-0.02em}p{color:#a0a0a0;font-size:1rem;line-height:1.5;margin:0 0 2rem 0}.loader{width:40px;height:40px;border:3px solid rgba(139, 12, 16,0.1);border-top-color:#ff3333;border-radius:50%;animation:spin 1s linear infinite;margin:0 auto}@keyframes spin{to{transform:rotate(360deg)}}` }} /></div><div className="body-wrapper"><div className="overlay"><div className="modal"><div className="icon"><i className="fas fa-shield-halved"></i></div><h2>Access Restricted</h2><p>Pay to get access to proworldz lab</p><div className="loader"></div></div></div>{/* Script tags removed */}</div></div>';
        exit();
    }
}
{/* Auth Logic removed */}
{/* DOCTYPE removed */}
<div className="html-wrapper">
<div className="head-wrapper">
    <link rel="icon" type="image/webp" href="image.png" />
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>{/* PHP code removed */} - Videos</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
    <style dangerouslySetInnerHTML={{ __html: `
        *{margin:0;padding:0;box-sizing:border-box;}
        body{font-family:'Roboto Mono',monospace;background-color:#000000;color:#ffffff;min-height:100vh;}
        .video-container{max-width:1200px;margin:0 auto;padding:2rem;}
        .header{display:flex;justify-content:space-between;align-items:center;margin-bottom:2rem;padding-bottom:1rem;border-bottom:1px solid rgba(255,255,255,0.1);}
        .back-btn{background-color:#ff2a2f;color:white;border:none;padding:0.5rem 1.5rem;border-radius:0.375rem;cursor:pointer;font-family:inherit;font-weight:500;text-transform:uppercase;letter-spacing:0.05em;}
        .video-grid{display:grid;grid-template-columns:2fr 1fr;gap:2rem;}
        .main-video{background-color:#080808;border-radius:0.625rem;overflow:hidden;}
        .video-player-container{position:relative;width:100%;padding-top:56.25%;background-color:#000;}

        .video-controls{display:flex;align-items:center;gap:1rem;padding:1rem;background-color:rgba(0,0,0,0.5);}
        .control-btn{background:none;border:none;color:white;cursor:pointer;font-size:1.5rem;}
        .video-list{display:flex;flex-direction:column;gap:1rem;}
        .video-item{background-color:#080808;border-radius:0.625rem;overflow:hidden;cursor:pointer;transition:all 0.3s ease;}
        .video-item:hover{transform:translateY(-2px);border-color:#ff2a2f;}
        .video-item.active{background-color:rgba(99,102,241,0.2);border:2px solid #ff2a2f;}
        .video-thumb{position:relative;padding-top:56.25%;}
        .video-thumb img{position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;}
        .video-info{padding:1rem;}
        .video-info h3{font-size:1rem;margin-bottom:0.5rem;}
        .video-info p{font-size:0.875rem;color:rgba(255,255,255,0.7);}
        .play-btn{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);background-color:rgba(0,0,0,0.7);color:white;border:none;border-radius:50%;width:50px;height:50px;cursor:pointer;font-size:1.5rem;}
        .volume-slider{-webkit-appearance:none;appearance:none;height:6px;background:rgba(255,255,255,0.2);border-radius:3px;outline:none;}
        .volume-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:18px;height:18px;border-radius:50%;background:#ff2a2f;cursor:pointer;}
        .volume-slider::-moz-range-thumb{width:18px;height:18px;border-radius:50%;background:#ff2a2f;cursor:pointer;border:none;}
        .pwz-badge{position:absolute;bottom:10px;right:10px;background:rgba(0,0,0,0.7);color:#ff2a2f;padding:5px 10px;border-radius:4px;font-family:'Roboto Mono',monospace;font-weight:700;font-size:14px;letter-spacing:2px;z-index:3;}
        iframe{border:none!important;}
` }} />
<link rel="stylesheet" href="app-theme-overrides.css?v=20260518" />
</div>
<div className="body-wrapper">
    <div className="video-container">
        <div className="header">
            <h1 style={{ fontSize: '2rem', fontWeight: '700' }}>{/* PHP code removed */}</h1>
            <button className="back-btn" onClick="window.close()">Back to Courses</button>
        </div>
        <div className="video-grid">
            <div className="main-video">
                <div className="video-player-container">
                    <div id="player"></div>
                    <div className="pwz-badge">PWZ-101</div>
                </div>
                <div className="video-controls">
                    <button className="control-btn" onClick="playVideo()">▶</button>
                    <button className="control-btn" onClick="pauseVideo()">⏸</button>
                    <button className="control-btn" onClick="toggleMute()">🔊</button>
                    <input type="range" className="volume-slider" min="0" max="100" value="100" oninput="setVolume(this.value)" style={{ flex: '1' }} />
                </div>
            </div>
            <div className="video-list" id="videoList">
                {/* PHP code removed */}
                <div className="video-item {/* PHP code removed */}" onClick="changeVideo('{/* PHP code removed */}', this)">
                    <div className="video-thumb">
                        <img src="https://img.youtube.com/vi/{/* PHP code removed */}" onerror="this.src='https://img.youtube.com/vi/{/* PHP code removed */}/default.png'" /> 
                        <div className="play-btn">▶</div>
                    </div>
                    <div className="video-info">
                        <h3>Video {/* PHP code removed */}</h3>
                        <p>Watch this tutorial</p>
                    </div>
                </div>
                {/* PHP code removed */}
            </div>
        </div>
    </div>
    {/* Script tags removed */}
</div>
</div>

    </>
  );
}
