import { Link, useLocation, useNavigate } from 'react-router-dom'
import './AdminLayout.css'

export default function AdminLayout({ children }) {
  const location = useLocation()
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('adminToken')
    localStorage.removeItem('token')
    navigate('/admin/login')
  }

  const isActive = (path) => location.pathname === path

  return (
    <div className="admin-layout">
      {/* Sidebar */}
      <aside className="admin-sidebar">
        <div className="admin-sidebar-header">
          <h2 className="admin-logo">GroupFund</h2>
          <span className="admin-badge">Admin</span>
        </div>
        
        <nav className="admin-nav">
          <Link 
            to="/admin" 
            className={`admin-nav-item ${isActive('/admin') ? 'active' : ''}`}
          >
            <span className="nav-icon">📊</span>
            <span>Dashboard</span>
          </Link>
          
          <Link 
            to="/admin/users" 
            className={`admin-nav-item ${isActive('/admin/users') ? 'active' : ''}`}
          >
            <span className="nav-icon">👥</span>
            <span>Users</span>
          </Link>
          
          <Link 
            to="/admin/groups" 
            className={`admin-nav-item ${isActive('/admin/groups') ? 'active' : ''}`}
          >
            <span className="nav-icon">👨‍👩‍👧‍👦</span>
            <span>Groups</span>
          </Link>
          
          <Link 
            to="/admin/contributions" 
            className={`admin-nav-item ${isActive('/admin/contributions') ? 'active' : ''}`}
          >
            <span className="nav-icon">🎁</span>
            <span>Contributions</span>
          </Link>
          
          <Link 
            to="/admin/birthdays" 
            className={`admin-nav-item ${isActive('/admin/birthdays') ? 'active' : ''}`}
          >
            <span className="nav-icon">🎂</span>
            <span>Today's Birthdays</span>
          </Link>
          
          <Link 
            to="/admin/contact-submissions" 
            className={`admin-nav-item ${isActive('/admin/contact-submissions') ? 'active' : ''}`}
          >
            <span className="nav-icon">📧</span>
            <span>Contact Submissions</span>
          </Link>
          
          <Link 
            to="/admin/waitlist" 
            className={`admin-nav-item ${isActive('/admin/waitlist') ? 'active' : ''}`}
          >
            <span className="nav-icon">📋</span>
            <span>Waitlist</span>
          </Link>
          
          <Link 
            to="/admin/notifications" 
            className={`admin-nav-item ${isActive('/admin/notifications') ? 'active' : ''}`}
          >
            <span className="nav-icon">🔔</span>
            <span>Notifications</span>
          </Link>
        </nav>

        <div className="admin-sidebar-footer">
          <button onClick={handleLogout} className="admin-logout-btn">
            <span className="nav-icon">🚪</span>
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="admin-main">
        <div className="admin-content">
          {children}
        </div>
      </main>
    </div>
  )
}

