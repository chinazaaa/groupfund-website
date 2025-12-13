import { useEffect, useState } from 'react'
import { adminApi } from '../../services/adminApi'
import AdminLayout from '../../components/admin/AdminLayout'
import './AdminPages.css'

export default function AdminDashboard() {
  const [stats, setStats] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    loadStats()
  }, [])

  const loadStats = async () => {
    try {
      setLoading(true)
      const data = await adminApi.getStats()
      setStats(data)
      setError(null)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <AdminLayout>
        <div className="admin-loading">Loading dashboard...</div>
      </AdminLayout>
    )
  }

  if (error) {
    return (
      <AdminLayout>
        <div className="admin-error">Error: {error}</div>
      </AdminLayout>
    )
  }

  return (
    <AdminLayout>
      <div className="admin-page">
        <div className="admin-page-header">
          <h1>Admin Dashboard</h1>
          <p>System overview and statistics</p>
        </div>

        <div className="stats-grid">
          {/* Users Stats */}
          <div className="stat-card">
            <div className="stat-icon users">👥</div>
            <div className="stat-content">
              <h3>Total Users</h3>
              <div className="stat-value">{stats?.users?.total || 0}</div>
              <div className="stat-details">
                <span className="stat-detail-item">
                  ✓ Verified: {stats?.users?.verified || 0}
                </span>
                <span className="stat-detail-item">
                  👑 Admins: {stats?.users?.admins || 0}
                </span>
                <span className="stat-detail-item highlight">
                  📈 New (30d): {stats?.users?.recent_30_days || 0}
                </span>
              </div>
            </div>
          </div>

          {/* Groups Stats */}
          <div className="stat-card">
            <div className="stat-icon groups">👨‍👩‍👧‍👦</div>
            <div className="stat-content">
              <h3>Groups</h3>
              <div className="stat-value">{stats?.groups?.total || 0}</div>
              <div className="stat-details">
                <span className="stat-detail-item">
                  ✓ Active: {stats?.groups?.active || 0}
                </span>
                <span className="stat-detail-item highlight">
                  📈 New (30d): {stats?.groups?.recent_30_days || 0}
                </span>
              </div>
            </div>
          </div>

          {/* Contributions Stats */}
          <div className="stat-card">
            <div className="stat-icon contributions">🎁</div>
            <div className="stat-content">
              <h3>Contributions</h3>
              <div className="stat-value">{stats?.contributions?.total || 0}</div>
              <div className="stat-details">
                <span className="stat-detail-item">
                  ❌ Not Received: {stats?.contributions?.not_received || 0}
                </span>
                <span className="stat-detail-item">
                  ⏳ Paid (Awaiting Confirmation): {stats?.contributions?.paid || 0}
                </span>
                <span className="stat-detail-item highlight">
                  ✓ Confirmed: {stats?.contributions?.confirmed || 0}
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </AdminLayout>
  )
}

function formatCurrency(amount) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 2,
  }).format(amount)
}

