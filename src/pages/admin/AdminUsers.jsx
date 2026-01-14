import { useEffect, useState } from 'react'
import { adminApi } from '../../services/adminApi'
import AdminLayout from '../../components/admin/AdminLayout'
import './AdminPages.css'

export default function AdminUsers() {
  const [users, setUsers] = useState([])
  const [pagination, setPagination] = useState({ page: 1, limit: 50, total: 0, totalPages: 0 })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [search, setSearch] = useState('')
  const [filters, setFilters] = useState({ is_verified: '', is_admin: '', is_active: '' })
  const [selectedUser, setSelectedUser] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const [confirmModal, setConfirmModal] = useState({ show: false, message: '', onConfirm: null, action: '' })
  const [notification, setNotification] = useState({ show: false, message: '', type: 'success' })

  useEffect(() => {
    loadUsers()
  }, [pagination.page, search, filters])

  const loadUsers = async () => {
    try {
      setLoading(true)
      const params = {
        page: pagination.page,
        limit: pagination.limit,
        ...(search && { search }),
        ...(filters.is_verified && { is_verified: filters.is_verified }),
        ...(filters.is_admin && { is_admin: filters.is_admin }),
        ...(filters.is_active && { is_active: filters.is_active }),
      }
      const data = await adminApi.getUsers(params)
      setUsers(data.users || [])
      setPagination(data.pagination || pagination)
      setError(null)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const handleSearch = (e) => {
    setSearch(e.target.value)
    setPagination(prev => ({ ...prev, page: 1 }))
  }

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }))
    setPagination(prev => ({ ...prev, page: 1 }))
  }

  const showNotification = (message, type = 'success') => {
    setNotification({ show: true, message, type })
    setTimeout(() => {
      setNotification({ show: false, message: '', type: 'success' })
    }, 3000)
  }

  const handleUserClick = async (userId) => {
    try {
      const user = await adminApi.getUser(userId)
      setSelectedUser(user)
      setShowModal(true)
    } catch (err) {
      showNotification('Error loading user: ' + err.message, 'error')
    }
  }

  const handleUpdateUser = async (userId, updates) => {
    try {
      await adminApi.updateUser(userId, updates)
      setShowModal(false)
      loadUsers()
      showNotification('User updated successfully', 'success')
    } catch (err) {
      showNotification('Error updating user: ' + err.message, 'error')
    }
  }

  const handleDeactivateUser = async (userId, isActive) => {
    const action = isActive ? 'deactivate' : 'activate'
    setConfirmModal({
      show: true,
      message: `Are you sure you want to ${action} this user?`,
      action: action,
      onConfirm: async () => {
        try {
          await adminApi.deactivateUser(userId)
          setConfirmModal({ show: false, message: '', onConfirm: null, action: '' })
          loadUsers()
          showNotification(`User ${action}d successfully`, 'success')
        } catch (err) {
          showNotification(`Error ${action}ing user: ` + err.message, 'error')
        }
      }
    })
  }

  return (
    <AdminLayout>
      <div className="admin-page">
        <div className="admin-page-header">
          <h1>Users Management</h1>
          <p>View and manage all users</p>
        </div>

        {/* Filters */}
        <div className="admin-filters">
          <input
            type="text"
            placeholder="Search by name, email, or phone..."
            value={search}
            onChange={handleSearch}
            className="admin-search-input"
          />
          <select
            value={filters.is_verified}
            onChange={(e) => handleFilterChange('is_verified', e.target.value)}
            className="admin-filter-select"
          >
            <option value="">All Verification Status</option>
            <option value="true">Verified</option>
            <option value="false">Unverified</option>
          </select>
          <select
            value={filters.is_admin}
            onChange={(e) => handleFilterChange('is_admin', e.target.value)}
            className="admin-filter-select"
          >
            <option value="">All Users</option>
            <option value="true">Admins</option>
            <option value="false">Regular Users</option>
          </select>
          <select
            value={filters.is_active}
            onChange={(e) => handleFilterChange('is_active', e.target.value)}
            className="admin-filter-select"
          >
            <option value="">All Status</option>
            <option value="true">Active</option>
            <option value="false">Inactive</option>
          </select>
        </div>

        {error && <div className="admin-error">Error: {error}</div>}

        {loading ? (
          <div className="admin-loading">Loading users...</div>
        ) : (
          <>
            <div className="admin-stats">
              <div className="stat-card">
                <span className="stat-label">Total Users</span>
                <span className="stat-value">{pagination.total || users.length}</span>
              </div>
            </div>

            <div className="admin-table-container">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Verified</th>
                    <th>Admin</th>
                    <th>Status</th>
                    <th>Groups</th>
                    <th>Joined</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map(user => (
                    <tr key={user.id}>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.phone}</td>
                      <td>
                        <span className={`badge ${user.is_verified ? 'badge-success' : 'badge-warning'}`}>
                          {user.is_verified ? '✓' : '✗'}
                        </span>
                      </td>
                      <td>
                        {user.is_admin && <span className="badge badge-admin">👑</span>}
                      </td>
                      <td>
                        <span className={`badge ${user.is_active !== false ? 'badge-success' : 'badge-danger'}`}>
                          {user.is_active !== false ? 'Active' : 'Inactive'}
                        </span>
                      </td>
                      <td>{user.group_count || 0}</td>
                      <td>{formatDate(user.created_at)}</td>
                      <td>
                        <div className="admin-actions">
                          <button
                            onClick={() => handleUserClick(user.id)}
                            className="btn btn-small btn-secondary"
                          >
                            View
                          </button>
                          {!user.is_admin && (
                            <button
                              onClick={() => handleDeactivateUser(user.id, user.is_active !== false)}
                              className={`btn btn-small ${user.is_active !== false ? 'btn-danger' : 'btn-primary'}`}
                            >
                              {user.is_active !== false ? 'Deactivate' : 'Activate'}
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
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

        {/* User Detail Modal */}
        {showModal && selectedUser && (
          <UserDetailModal
            user={selectedUser}
            onClose={() => setShowModal(false)}
            onUpdate={handleUpdateUser}
            onDeactivate={handleDeactivateUser}
          />
        )}

        {/* Confirmation Modal */}
        {confirmModal.show && (
          <ConfirmModal
            message={confirmModal.message}
            onConfirm={confirmModal.onConfirm}
            onCancel={() => setConfirmModal({ show: false, message: '', onConfirm: null, action: '' })}
            action={confirmModal.action}
          />
        )}

        {/* Notification Toast */}
        {notification.show && (
          <NotificationToast
            message={notification.message}
            type={notification.type}
            onClose={() => setNotification({ show: false, message: '', type: 'success' })}
          />
        )}
      </div>
    </AdminLayout>
  )
}

function UserDetailModal({ user, onClose, onUpdate, onDeactivate }) {
  const [isVerified, setIsVerified] = useState(user.user?.is_verified || false)
  const [isAdmin, setIsAdmin] = useState(user.user?.is_admin || false)
  const [isActive, setIsActive] = useState(user.user?.is_active !== false)

  const handleSave = () => {
    onUpdate(user.user.id, {
      is_verified: isVerified,
      is_admin: isAdmin,
      is_active: isActive,
    })
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>User Details</h2>
          <button onClick={onClose} className="modal-close">×</button>
        </div>
        <div className="modal-body">
          <div className="user-detail-section">
            <h3>Basic Information</h3>
            <p><strong>Name:</strong> {user.user?.name}</p>
            <p><strong>Email:</strong> {user.user?.email}</p>
            <p><strong>Phone:</strong> {user.user?.phone}</p>
            <p><strong>Birthday:</strong> {user.user?.birthday || 'Not set'}</p>
            <p><strong>Joined:</strong> {formatDate(user.user?.created_at)}</p>
          </div>

          <div className="user-detail-section">
            <h3>Status</h3>
            <label>
              <input
                type="checkbox"
                checked={isVerified}
                onChange={(e) => setIsVerified(e.target.checked)}
              />
              Verified
            </label>
            <label>
              <input
                type="checkbox"
                checked={isAdmin}
                onChange={(e) => setIsAdmin(e.target.checked)}
              />
              Admin
            </label>
            <label>
              <input
                type="checkbox"
                checked={isActive}
                onChange={(e) => setIsActive(e.target.checked)}
              />
              Active
            </label>
          </div>

          <div className="user-detail-section">
            <h3>Groups ({user.groups?.length || 0})</h3>
            {user.groups?.map(group => (
              <div key={group.id} className="group-item">
                {group.name} ({group.role}) - {group.status}
              </div>
            ))}
          </div>

          <div className="user-detail-section">
            <h3>Statistics</h3>
            <p><strong>Contributions:</strong> {user.transaction_count || 0}</p>
            {user.reports && (
              <div className="reports-section">
                <p style={{ marginBottom: '12px' }}><strong>Reports:</strong> {user.reports.total || 0}</p>
                {user.reports.by_status && (
                  <div className="reports-display">
                    <h4 className="reports-status-title">Report Status</h4>
                    <div className="reports-status-items">
                      <div className="reports-status-item">
                        <span className="reports-status-label">Pending</span>
                        <span className="reports-badge reports-badge-pending">{user.reports.by_status.pending || 0}</span>
                      </div>
                      <div className="reports-status-item">
                        <span className="reports-status-label">Reviewed</span>
                        <span className="reports-badge reports-badge-reviewed">{user.reports.by_status.reviewed || 0}</span>
                      </div>
                      <div className="reports-status-item">
                        <span className="reports-status-label">Resolved</span>
                        <span className="reports-badge reports-badge-resolved">{user.reports.by_status.resolved || 0}</span>
                      </div>
                      <div className="reports-status-item">
                        <span className="reports-status-label">Dismissed</span>
                        <span className="reports-badge reports-badge-dismissed">{user.reports.by_status.dismissed || 0}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
        <div className="modal-footer">
          <button onClick={handleSave} className="btn btn-primary">Save Changes</button>
          {!isAdmin && (
            <button onClick={() => onDeactivate(user.user.id, isActive)} className={`btn ${isActive ? 'btn-danger' : 'btn-primary'}`}>
              {isActive ? 'Deactivate User' : 'Activate User'}
            </button>
          )}
          <button onClick={onClose} className="btn btn-secondary">Close</button>
        </div>
      </div>
    </div>
  )
}

function formatCurrency(amount) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 2,
  }).format(amount)
}

function ConfirmModal({ message, onConfirm, onCancel, action }) {
  return (
    <div className="admin-modal-overlay" onClick={onCancel}>
      <div className="admin-confirm-modal" onClick={(e) => e.stopPropagation()}>
        <div className="admin-confirm-header">
          <h3>Confirm Action</h3>
        </div>
        <div className="admin-confirm-body">
          <p>{message}</p>
        </div>
        <div className="admin-confirm-footer">
          <button onClick={onCancel} className="btn btn-secondary">
            Cancel
          </button>
          <button 
            onClick={onConfirm} 
            className={`btn ${action === 'deactivate' ? 'btn-danger' : 'btn-primary'}`}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  )
}

function NotificationToast({ message, type, onClose }) {
  return (
    <div className={`admin-toast admin-toast-${type}`}>
      <div className="admin-toast-content">
        <span className="admin-toast-message">{message}</span>
        <button onClick={onClose} className="admin-toast-close">×</button>
      </div>
    </div>
  )
}

function formatDate(dateString) {
  if (!dateString) return 'N/A'
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

