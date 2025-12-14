import { useEffect, useState } from 'react'
import { adminApi } from '../../services/adminApi'
import AdminLayout from '../../components/admin/AdminLayout'
import './AdminPages.css'

export default function AdminNotifications() {
  const [notifications, setNotifications] = useState([])
  const [pagination, setPagination] = useState({ page: 1, limit: 50, total: 0, totalPages: 0 })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [filters, setFilters] = useState({ type: '', is_read: '' })

  useEffect(() => {
    loadNotifications()
  }, [pagination.page, filters])

  const loadNotifications = async () => {
    try {
      setLoading(true)
      const params = {
        page: pagination.page,
        limit: pagination.limit,
        ...(filters.type && { type: filters.type }),
        ...(filters.is_read && { is_read: filters.is_read }),
      }
      const data = await adminApi.getNotifications(params)
      setNotifications(data.notifications || [])
      setPagination(data.pagination || pagination)
      setError(null)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <AdminLayout>
      <div className="admin-page">
        <div className="admin-page-header">
          <h1>Notifications</h1>
          <p>View all system notifications</p>
        </div>

        <div className="admin-filters">
          <select
            value={filters.type}
            onChange={(e) => {
              setFilters(prev => ({ ...prev, type: e.target.value }))
              setPagination(prev => ({ ...prev, page: 1 }))
            }}
            className="admin-filter-select"
          >
            <option value="">All Types</option>
            <option value="group_invite">Group Invite</option>
            <option value="group_approved">Group Approved</option>
            <option value="group_rejected">Group Rejected</option>
            <option value="group_removed">Group Removed</option>
            <option value="contribution_paid">Contribution Paid</option>
            <option value="contribution_not_received">Contribution Not Received</option>
            <option value="contribution_confirmed">Contribution Confirmed</option>
            <option value="birthday_reminder">Birthday Reminder</option>
            <option value="birthday_wish">Birthday Wish</option>
            <option value="monthly_newsletter">Monthly Newsletter</option>
          </select>
          <select
            value={filters.is_read}
            onChange={(e) => {
              setFilters(prev => ({ ...prev, is_read: e.target.value }))
              setPagination(prev => ({ ...prev, page: 1 }))
            }}
            className="admin-filter-select"
          >
            <option value="">All</option>
            <option value="true">Read</option>
            <option value="false">Unread</option>
          </select>
        </div>

        {error && <div className="admin-error">Error: {error}</div>}

        {loading ? (
          <div className="admin-loading">Loading notifications...</div>
        ) : (
          <>
            <div className="admin-table-container">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Type</th>
                    <th>Title</th>
                    <th>Message</th>
                    <th>User</th>
                    <th>Group</th>
                    <th>Read</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {notifications.map(notification => (
                    <tr key={notification.id}>
                      <td>
                        <span className="badge badge-info">
                          {formatNotificationType(notification.type)}
                        </span>
                      </td>
                      <td>{notification.title}</td>
                      <td className="notification-message">{notification.message}</td>
                      <td>{notification.user_name} ({notification.user_email})</td>
                      <td>{notification.group_name || 'N/A'}</td>
                      <td>
                        <span className={`badge ${notification.is_read ? 'badge-success' : 'badge-warning'}`}>
                          {notification.is_read ? '✓' : '✗'}
                        </span>
                      </td>
                      <td>{formatDate(notification.created_at)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="admin-pagination">
              <button
                onClick={() => setPagination(prev => ({ ...prev, page: prev.page - 1 }))}
                disabled={pagination.page === 1}
                className="btn-sm"
              >
                Previous
              </button>
              <span>
                Page {pagination.page} of {pagination.totalPages}
              </span>
              <button
                onClick={() => setPagination(prev => ({ ...prev, page: prev.page + 1 }))}
                disabled={pagination.page >= pagination.totalPages}
                className="btn-sm"
              >
                Next
              </button>
            </div>
          </>
        )}
      </div>
    </AdminLayout>
  )
}

function formatDate(dateString) {
  if (!dateString) return 'N/A'
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
}

function formatNotificationType(type) {
  const typeMap = {
    'group_invite': 'Group Invite',
    'group_approved': 'Group Approved',
    'group_rejected': 'Group Rejected',
    'group_removed': 'Group Removed',
    'contribution_paid': 'Contribution Paid',
    'contribution_not_received': 'Contribution Not Received',
    'contribution_confirmed': 'Contribution Confirmed',
    'birthday_reminder': 'Birthday Reminder',
    'birthday_wish': 'Birthday Wish',
    'monthly_newsletter': 'Monthly Newsletter',
  }
  return typeMap[type] || type
}

