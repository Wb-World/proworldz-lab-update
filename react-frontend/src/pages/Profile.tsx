import './Profile.css';

export default function Profile() {
    return (
        <div className="profile-wrapper">
            

    <div className="profile-container">
        <div className="glass-card">
            <div className="avatar-section">
                <div className="avatar-wrapper">
                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Unknown" alt="Avatar" className="user-avatar" />
                    <div className="online-status"></div>
                </div>
            </div>

            <div className="info-section">
                <div className="username-input-group">
                    <span className="username-display" id="display-name"></span>
                    <button className="edit-btn" onClick={() => {console.log('openModal')}}><i className="fas fa-edit"></i></button>
                </div>
                <div>
                    <span className="course-badge"></span>
                </div>
            </div>

            <div className="stats-grid">
                <div className="stat-card">
                    <div className="stat-value">#</div>
                    <div className="stat-label">Global Rank</div>
                </div>
                <div className="stat-card">
                    <div className="stat-value"></div>
                    <div className="stat-label">Eagle Coins</div>
                </div>
                <div className="stat-card">
                    <div className="stat-value" style={{fontSize: '0.8rem'}}></div>
                    <div className="stat-label">IP Address</div>
                </div>
            </div>

            <div className="footer-btns">
                <a href="/dashboard" className="btn btn-outline">Back to Dashboard</a>
                <a href="/login" className="btn btn-primary">Logout Session</a>
            </div>
        </div>
    </div>

    {/*  Edit Profile Modal  */}
    <div id="editModal" className="modal">
        <div className="modal-content">
            <h3 style={{marginBottom: '20px'}}>Update Username</h3>
            <div className="input-group">
                <label>New Username</label>
                <input type="text" id="newUsername" value="" />
            </div>
            <div className="modal-btns">
                <button className="btn btn-outline" onClick={() => {console.log('closeModal')}}>Cancel</button>
                <button className="btn btn-primary" onClick={() => {console.log('updateUsername')}}>Save Changes</button>
            </div>
        </div>
    </div>

    

        </div>
    );
}
