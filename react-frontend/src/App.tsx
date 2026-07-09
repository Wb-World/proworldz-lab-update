import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/layout/Layout';

// Pages
import Lab from './pages/Lab';
import Tasks from './pages/Tasks';
import CourseVideo from './pages/CourseVideo';
import Assignment from './pages/Assignment';
import Leaderboard from './pages/Leaderboard';
import Teams from './pages/Teams';
import Tournament from './pages/Tournament';
import Download from './pages/Download';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import Setting from './pages/Setting';
import Settings from './pages/Settings';
import AboutHome from './pages/AboutHome';
import ContactHome from './pages/ContactHome';
import Ourcourse from './pages/Ourcourse';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';

function LogoutHelper() {
  useEffect(() => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.dispatchEvent(new Event('authChange'));
  }, []);
  return <Navigate to="/login" replace />;
}

function App() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const fetchProfile = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      setUser(null);
      setLoading(false);
      return;
    }

    // Synchronously set user from localStorage if available to prevent race condition redirects
    const cachedUser = localStorage.getItem('user');
    if (cachedUser) {
      try {
        setUser(JSON.parse(cachedUser));
      } catch (e) {}
    }

    try {
      const res = await fetch('/api/auth/profile', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      const data = await res.json();
      if (data.success) {
        setUser(data.user);
        localStorage.setItem('user', JSON.stringify(data.user));
      } else {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setUser(null);
      }
    } catch (err) {
      console.error('Error fetching profile:', err);
      // Fallback to cached user
      const cachedUser = localStorage.getItem('user');
      if (cachedUser) {
        setUser(JSON.parse(cachedUser));
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfile();
    
    const handleAuthChange = () => {
      fetchProfile();
    };

    window.addEventListener('storage', handleAuthChange);
    window.addEventListener('authChange', handleAuthChange);

    return () => {
      window.removeEventListener('storage', handleAuthChange);
      window.removeEventListener('authChange', handleAuthChange);
    };
  }, []);

  const layoutWrapper = (children: React.ReactNode) => {
    if (loading) {
      return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#000', color: '#fff', fontFamily: 'sans-serif' }}>
          Loading profile...
        </div>
      );
    }
    if (!user) {
      return <Navigate to="/login" replace />;
    }

    // Default avatar URL or dynamic avatar based on initials/name
    const avatarUrl = `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(user.name)}`;

    return (
      <Layout 
        userName={user.name} 
        userCoins={user.eagle_coins} 
        course={user.course || 'Beginner'} 
        activeAvatarImage={avatarUrl}
      >
        {children}
      </Layout>
    );
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/logout" element={<LogoutHelper />} />
        
        <Route path="/dashboard" element={layoutWrapper(<Dashboard />)} />
        <Route path="/profile" element={layoutWrapper(<Profile />)} />
        <Route path="/setting" element={layoutWrapper(<Setting />)} />
        <Route path="/settings" element={layoutWrapper(<Settings />)} />
        <Route path="/lab" element={layoutWrapper(<Lab />)} />
        <Route path="/tasks" element={layoutWrapper(<Tasks />)} />
        <Route path="/course_video" element={layoutWrapper(<CourseVideo />)} />
        <Route path="/assignment" element={layoutWrapper(<Assignment />)} />
        <Route path="/leaderboard" element={layoutWrapper(<Leaderboard />)} />
        <Route path="/teams" element={layoutWrapper(<Teams />)} />
        <Route path="/tournament" element={layoutWrapper(<Tournament />)} />
        <Route path="/download" element={layoutWrapper(<Download />)} />
        
        {/* Static routes */}
        <Route path="/about" element={<AboutHome />} />
        <Route path="/contact" element={<ContactHome />} />
        <Route path="/courses" element={<Ourcourse />} />
        
        {/* Admin routes */}
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
