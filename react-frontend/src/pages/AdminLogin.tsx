import { useState, type FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminLogin.css';

export default function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const response = await fetch('/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });
      const data = await response.json();
      
      if (data.success) {
        localStorage.setItem('adminRole', data.role);
        localStorage.setItem('adminUsername', data.username);
        navigate('/admin');
      } else {
        setError(data.message || 'Login failed');
      }
    } catch (err) {
      setError('Network error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="admin-login-wrapper">
      <div className="admin-login-container">
        <div className="admin-login-header">
          <div className="admin-login-logo">
            <i className="fas fa-shield-alt"></i>
          </div>
          <h1>ProWorldz</h1>
          <p>Admin Control Panel</p>
        </div>
        <div className="admin-login-body">
          {error && <div style={{ color: '#ff2a2f', marginBottom: '15px' }}>{error}</div>}
          <form onSubmit={handleLogin}>
            <div className="admin-form-group">
              <label className="admin-form-label">Username</label>
              <input 
                type="text" 
                className="admin-form-input" 
                placeholder="Enter admin username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required 
              />
            </div>
            <div className="admin-form-group">
              <label className="admin-form-label">Password</label>
              <input 
                type="password" 
                className="admin-form-input" 
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required 
              />
            </div>
            <button type="submit" className="admin-btn-primary" disabled={isLoading}>
              {isLoading ? 'Authenticating...' : 'Login to Dashboard'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
