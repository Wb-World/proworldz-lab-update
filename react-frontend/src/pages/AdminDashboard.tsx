import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminDashboard.css';

export default function AdminDashboard() {
  const [students, setStudents] = useState<any[]>([]);
  const [activeTab, setActiveTab] = useState('students');
  const navigate = useNavigate();

  useEffect(() => {
    const role = localStorage.getItem('adminRole');
    if (!role) {
      navigate('/admin-login');
      return;
    }
    fetchStudents();
  }, [navigate]);

  const fetchStudents = async () => {
    try {
      const res = await fetch('/admin/students');
      const data = await res.json();
      if (data.success) {
        setStudents(data.data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this student?')) return;
    try {
      const res = await fetch(`/admin/students/${id}`, {
        method: 'DELETE'
      });
      const data = await res.json();
      if (data.success) {
        fetchStudents();
      } else {
        alert(data.message);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminRole');
    localStorage.removeItem('adminUsername');
    navigate('/admin-login');
  };

  return (
    <div className="admin-dashboard-wrapper">
      <div className="admin-sidebar">
        <div className="admin-sidebar-header">
          Admin Panel
        </div>
        <ul className="admin-sidebar-menu">
          <li className={activeTab === 'students' ? 'active' : ''} onClick={() => setActiveTab('students')}>Students</li>
          <li onClick={handleLogout}>Logout</li>
        </ul>
      </div>
      <div className="admin-main-content">
        <div className="admin-top-bar">
          <h2>Manage Students</h2>
          <button className="admin-btn admin-btn-primary">Add Student</button>
        </div>
        
        {activeTab === 'students' && (
          <table className="admin-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Course</th>
                <th>Coins</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {students.map(student => (
                <tr key={student.id}>
                  <td>{student.id}</td>
                  <td>{student.name}</td>
                  <td>{student.email}</td>
                  <td>{student.course}</td>
                  <td>{student.eagle_coins}</td>
                  <td>
                    <button className="admin-btn admin-btn-danger" onClick={() => handleDelete(student.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
