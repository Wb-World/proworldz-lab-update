import { useState, type FormEvent, type KeyboardEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [btnState, setBtnState] = useState<'normal' | 'granted' | 'denied'>('normal');
  const navigate = useNavigate();

  const handleLogin = async (e?: FormEvent) => {
    if (e) e.preventDefault();
    if (!email || !password) return;

    setIsLoading(true);
    setError(false);

    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });
      const data = await response.json();
      setIsLoading(false);

      if (data.success) {
        setBtnState('granted');
        localStorage.setItem('user', JSON.stringify(data.user));
        setTimeout(() => navigate('/dashboard'), 1000);
      } else {
        setBtnState('denied');
        setError(true);
        setTimeout(() => setBtnState('normal'), 2000);
      }
    } catch (err) {
      console.error(err);
      setIsLoading(false);
      setBtnState('denied');
      setError(true);
      setTimeout(() => setBtnState('normal'), 2000);
    }
  };

  const handleKeyPress = (e: KeyboardEvent) => {
    if (e.key === 'Enter' && !isLoading) {
      handleLogin();
    }
  };

  return (
    <div className="login-page">
      <div className="auth-container">
        <div className="auth-box">
          <div className="brand">
            <img src="/images/eaglone/e-welcome-gen.png" alt="Secure Worldz Logo" className="logo-img" loading="lazy" />
            <h1>SECURE WORLDZ</h1>
            <p>Access your professional learning dashboard</p>
          </div>

          <div className="form-group">
            <input 
              type="email" 
              id="mail-login" 
              placeholder=" " 
              required 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <label htmlFor="mail-login">Email Address</label>
          </div>

          <div className="form-group">
            <input 
              type={showPassword ? "text" : "password"} 
              id="login-password-field" 
              placeholder=" " 
              required 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyPress={handleKeyPress}
              autoComplete="current-password"
            />
            <label htmlFor="login-password-field">Password</label>
            <button 
              type="button" 
              className="password-toggle" 
              onClick={() => setShowPassword(!showPassword)}
              style={{ color: showPassword ? 'var(--text-primary)' : 'var(--text-secondary)' }}
            >
              <i className={showPassword ? "fas fa-eye-slash" : "fas fa-eye"}></i>
            </button>
          </div>

          <div className="error" style={{ display: error ? 'block' : 'none' }}>
            <i className="fas fa-exclamation-circle"></i> Invalid credentials. Please try again.
          </div>
          
          <div className="loading" style={{ display: isLoading ? 'block' : 'none' }}>
            Authenticating...
          </div>

          <button 
            type="button" 
            className="btn-login" 
            onClick={handleLogin} 
            disabled={isLoading || btnState === 'granted'}
            style={{
              background: btnState === 'granted' ? 'var(--success)' : btnState === 'denied' ? 'var(--danger)' : ''
            }}
          >
            {btnState === 'granted' ? (
              <><i className="fas fa-check"></i> Access Granted</>
            ) : btnState === 'denied' ? (
              <><i className="fas fa-times"></i> Access Denied</>
            ) : (
              <><i className="fas fa-sign-in-alt"></i> Login</>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
