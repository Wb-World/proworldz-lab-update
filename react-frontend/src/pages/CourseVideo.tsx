import './CourseVideo.css';

export default function CourseVideo() {
    return (
        <div className="coursevideo-wrapper">
            
    <div id="loader-wrapper">
        <div id="loader"></div>
        <div id="loader-text">INITIALIZING CONTENT...</div>
    </div>

    
        
<div className="desktop-container">

        {/*  Left Sidebar  */}
            

    <div className="desktop-main">
            <div className="card">
                <div className="p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="size-9 rounded bg-primary flex items-center justify-center">
                             <i className="fas fa-video text-primary-foreground" style={{fontSize: '1rem'}}></i>
                        </div>
                        <div>
                            <h1 className="text-3xl font-display">Course Content</h1>
                            <div className="text-sm text-muted-foreground uppercase">STREAMING CURRICULUM VIDEOS</div>
                        </div>
                    </div>
                </div>
            </div>

            
                <div className="card" style={{padding: '4rem', textAlign: 'center'}}>
                    <i className="fas fa-video-slash" style={{fontSize: '3rem', color: 'var(--primary)', marginBottom: '1.5rem', opacity: '0.5'}}></i>
                    <h3 style={{color: 'white', marginBottom: '0.5rem'}}>No Videos Available</h3>
                    <p style={{color: 'var(--muted-foreground)'}}>There are no videos uploaded for your current course yet.</p>
                </div>
            
                <div className="video-grid">
                    <div className="player-section">
                        <div className="video-wrapper">
                            <div className="video-watermark">ID: </div>
                            <div id="videoDisplay" style={{position: 'absolute', inset: '0', zIndex: '1'}}>
                                <div style={{position: 'absolute', inset: '0', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#000'}}>
                                    <p style={{color: 'var(--muted-foreground)'}}>Select a video to play</p>
                                </div>
                            </div>
                        </div>
                        <div className="video-details">
                            <h2 id="videoTitle" style={{color: 'white', marginBottom: '0.5rem', fontFamily: '\'Rebels\', monospace'}}>Select a video</h2>
                            <p id="videoDesc" style={{color: 'var(--muted-foreground)', fontSize: '0.875rem', lineHeight: '1.6', marginBottom: '1.5rem'}}>Choose a video from the playlist to start learning.</p>
                            <div id="docContainer" style={{display: 'none'}}>
                                <a href="#" id="docLink" className="doc-link" target="_blank">
                                    <i className="fas fa-file-pdf"></i> View Document
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="playlist-section">
                        <div className="playlist-header">
                            <h3 style={{fontSize: '0.9rem', color: 'white', textTransform: 'uppercase'}}>Curriculum Playlist</h3>
                            <p style={{fontSize: '0.7rem', color: '#a0a0a0'}}> lessons found</p>
                        </div>
                        <div className="playlist-items">
                            
                                <div className="playlist-item" onClick={() => {}}>
                                    <div className="item-thumb">
                                        <i className="fas fa-play"></i>
                                    </div>
                                    <div className="item-info">
                                        <h4></h4>
                                        <span>Lesson </span>
                                    </div>
                                </div>
                            
                        </div>
                    </div>
                </div>
            
    </div>

    

        </div>
        </div>
    );
}
