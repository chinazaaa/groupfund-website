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

  const handleUserClick = async (userId) => {
    try {
      const user = await adminApi.getUser(userId)
      setSelectedUser(user)
      setShowModal(true)
    } catch (err) {
      alert('Error loading user: ' + err.message)
    }
  }

  const handleUpdateUser = async (userId, updates) => {
    try {
      await adminApi.updateUser(userId, updates)
      setShowModal(false)
      loadUsers()
      alert('User updated successfully')
    } catch (err) {
      alert('Error updating user: ' + err.message)
    }
  }

  const handleDeactivateUser = async (userId, isActive) => {
    const action = isActive ? 'deactivate' : 'activate'
    if (!confirm(`Are you sure you want to ${action} this user?`)) {
      return
    }
    try {
      await adminApi.deactivateUser(userId)
      loadUsers()
      alert(`User ${action}d successfully`)
    } catch (err) {
      alert(`Error ${action}ing user: ` + err.message)
    }
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
                        <button
                          onClick={() => handleUserClick(user.id)}
                          className="btn-sm btn-primary"
                          style={{ marginRight: '8px' }}
                        >
                          View
                        </button>
                        {!user.is_admin && (
                          <button
                            onClick={() => handleDeactivateUser(user.id, user.is_active !== false)}
                            className={`btn-sm ${user.is_active !== false ? 'btn-danger' : 'btn-primary'}`}
                          >
                            {user.is_active !== false ? 'Deactivate' : 'Activate'}
                          </button>
                        )}
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
            <p><strong>Transactions:</strong> {user.transaction_count || 0}</p>
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

function formatDate(dateString) {
  if (!dateString) return 'N/A'
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

