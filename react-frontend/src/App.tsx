import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';

// Mock components for pages
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
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route 
          path="/dashboard" 
          element={
            <Layout userName="John Doe" userCoins={1500} course="SecureX" activeAvatarImage="https://api.dicebear.com/7.x/avataaars/svg?seed=John">
              <Dashboard />
            </Layout>
          } 
        />
        {/* auto routes */}
        <Route path="/about" element={<AboutHome />} />
        <Route path="/contact" element={<ContactHome />} />
        <Route path="/courses" element={<Ourcourse />} />
        {/* auto routes */}
        <Route path="/signup" element={<Signup />} />
        {/* dashboard routes */}
        <Route path="/profile" element={<Layout userName="John Doe" userCoins={1500} course="SecureX" activeAvatarImage="https://api.dicebear.com/7.x/avataaars/svg?seed=John"><Profile /></Layout>} />
        <Route path="/setting" element={<Layout userName="John Doe" userCoins={1500} course="SecureX" activeAvatarImage="https://api.dicebear.com/7.x/avataaars/svg?seed=John"><Setting /></Layout>} />
        <Route path="/settings" element={<Layout userName="John Doe" userCoins={1500} course="SecureX" activeAvatarImage="https://api.dicebear.com/7.x/avataaars/svg?seed=John"><Settings /></Layout>} />
        
        <Route path="/lab" element={<Layout userName="John Doe" userCoins={1500} course="SecureX" activeAvatarImage="https://api.dicebear.com/7.x/avataaars/svg?seed=John"><Lab /></Layout>} />
        <Route path="/tasks" element={<Layout userName="John Doe" userCoins={1500} course="SecureX" activeAvatarImage="https://api.dicebear.com/7.x/avataaars/svg?seed=John"><Tasks /></Layout>} />
        <Route path="/course_video" element={<Layout userName="John Doe" userCoins={1500} course="SecureX" activeAvatarImage="https://api.dicebear.com/7.x/avataaars/svg?seed=John"><CourseVideo /></Layout>} />
        <Route path="/assignment" element={<Layout userName="John Doe" userCoins={1500} course="SecureX" activeAvatarImage="https://api.dicebear.com/7.x/avataaars/svg?seed=John"><Assignment /></Layout>} />
        <Route path="/leaderboard" element={<Layout userName="John Doe" userCoins={1500} course="SecureX" activeAvatarImage="https://api.dicebear.com/7.x/avataaars/svg?seed=John"><Leaderboard /></Layout>} />
        <Route path="/teams" element={<Layout userName="John Doe" userCoins={1500} course="SecureX" activeAvatarImage="https://api.dicebear.com/7.x/avataaars/svg?seed=John"><Teams /></Layout>} />
        <Route path="/tournament" element={<Layout userName="John Doe" userCoins={1500} course="SecureX" activeAvatarImage="https://api.dicebear.com/7.x/avataaars/svg?seed=John"><Tournament /></Layout>} />
        <Route path="/download" element={<Layout userName="John Doe" userCoins={1500} course="SecureX" activeAvatarImage="https://api.dicebear.com/7.x/avataaars/svg?seed=John"><Download /></Layout>} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin" element={<AdminDashboard />} />
        {/* other routes can be added here */}
      </Routes>
    </Router>
  );
}

export default App;
