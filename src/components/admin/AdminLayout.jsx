import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import './AdminLayout.css'

export default function AdminLayout({ children }) {
  const location = useLocation()
  const navigate = useNavigate()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const handleLogout = () => {
    localStorage.removeItem('adminToken')
    localStorage.removeItem('token')
    navigate('/admin/login')
  }

  const isActive = (path) => location.pathname === path

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  const closeSidebar = () => {
    setSidebarOpen(false)
  }

  return (
    <div className="admin-layout">
      {/* Mobile Menu Toggle */}
      <button className="admin-mobile-menu-toggle" onClick={toggleSidebar}>
        <span>☰</span>
      </button>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div className="admin-sidebar-overlay" onClick={closeSidebar}></div>
      )}

      {/* Sidebar */}
      <aside className={`admin-sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div className="admin-sidebar-header">
          <h2 className="admin-logo">GroupFund</h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span className="admin-badge">Admin</span>
            <button className="admin-sidebar-close" onClick={closeSidebar}>
              ✕
            </button>
          </div>
        </div>
        
        <nav className="admin-nav">
          <Link 
            to="/admin" 
            className={`admin-nav-item ${isActive('/admin') ? 'active' : ''}`}
            onClick={closeSidebar}
          >
            <span className="nav-icon">📊</span>
            <span>Dashboard</span>
          </Link>
          
          <Link 
            to="/admin/users" 
            className={`admin-nav-item ${isActive('/admin/users') ? 'active' : ''}`}
            onClick={closeSidebar}
          >
            <span className="nav-icon">👥</span>
            <span>Users</span>
          </Link>
          
          <Link 
            to="/admin/groups" 
            className={`admin-nav-item ${isActive('/admin/groups') ? 'active' : ''}`}
            onClick={closeSidebar}
          >
            <span className="nav-icon">👨‍👩‍👧‍👦</span>
            <span>Groups</span>
          </Link>
          
          <Link 
            to="/admin/contributions" 
            className={`admin-nav-item ${isActive('/admin/contributions') ? 'active' : ''}`}
            onClick={closeSidebar}
          >
            <span className="nav-icon">🎁</span>
            <span>Contributions</span>
          </Link>
          
          <Link 
            to="/admin/withdrawals" 
            className={`admin-nav-item ${isActive('/admin/withdrawals') ? 'active' : ''}`}
            onClick={closeSidebar}
          >
            <span className="nav-icon">💸</span>
            <span>Withdrawals</span>
          </Link>
          
          <Link 
            to="/admin/autopay" 
            className={`admin-nav-item ${isActive('/admin/autopay') ? 'active' : ''}`}
            onClick={closeSidebar}
          >
            <span className="nav-icon">🔄</span>
            <span>Autopay</span>
          </Link>
          
          <Link 
            to="/admin/birthdays" 
            className={`admin-nav-item ${isActive('/admin/birthdays') ? 'active' : ''}`}
            onClick={closeSidebar}
          >
            <span className="nav-icon">🎂</span>
            <span>Today's Birthdays</span>
          </Link>
          
          <Link 
            to="/admin/contact-submissions" 
            className={`admin-nav-item ${isActive('/admin/contact-submissions') ? 'active' : ''}`}
            onClick={closeSidebar}
          >
            <span className="nav-icon">📧</span>
            <span>Contact Submissions</span>
          </Link>
          
          <Link 
            to="/admin/waitlist" 
            className={`admin-nav-item ${isActive('/admin/waitlist') ? 'active' : ''}`}
            onClick={closeSidebar}
          >
            <span className="nav-icon">📋</span>
            <span>Waitlist</span>
          </Link>
          
          <Link 
            to="/admin/notifications" 
            className={`admin-nav-item ${isActive('/admin/notifications') ? 'active' : ''}`}
            onClick={closeSidebar}
          >
            <span className="nav-icon">🔔</span>
            <span>Notifications</span>
          </Link>
          
          <Link 
            to="/admin/reports" 
            className={`admin-nav-item ${isActive('/admin/reports') ? 'active' : ''}`}
            onClick={closeSidebar}
          >
            <span className="nav-icon">🛡️</span>
            <span>Reports</span>
          </Link>
          
          <Link 
            to="/admin/custom-emails" 
            className={`admin-nav-item ${isActive('/admin/custom-emails') ? 'active' : ''}`}
            onClick={closeSidebar}
          >
            <span className="nav-icon">✉️</span>
            <span>Custom Emails</span>
          </Link>
          
          <Link 
            to="/admin/custom-notifications" 
            className={`admin-nav-item ${isActive('/admin/custom-notifications') ? 'active' : ''}`}
            onClick={closeSidebar}
          >
            <span className="nav-icon">🔔</span>
            <span>Custom Notifications</span>
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

