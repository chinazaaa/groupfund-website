import { useEffect, useState } from 'react'
import { adminApi } from '../../services/adminApi'
import AdminLayout from '../../components/admin/AdminLayout'
import './AdminPages.css'

export default function AdminGroups() {
  const [groups, setGroups] = useState([])
  const [pagination, setPagination] = useState({ page: 1, limit: 50, total: 0, totalPages: 0 })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [search, setSearch] = useState('')
  const [selectedGroup, setSelectedGroup] = useState(null)
  const [members, setMembers] = useState([])
  const [loadingMembers, setLoadingMembers] = useState(false)
  const [showMembersModal, setShowMembersModal] = useState(false)
  const [confirmModal, setConfirmModal] = useState({ show: false, message: '', onConfirm: null, group: null, action: 'close' })
  const [processing, setProcessing] = useState(false)

  useEffect(() => {
    loadGroups()
  }, [pagination.page, search])

  const loadGroups = async () => {
    try {
      setLoading(true)
      const params = {
        page: pagination.page,
        limit: pagination.limit,
        ...(search && { search }),
      }
      const data = await adminApi.getGroups(params)
      setGroups(data.groups || [])
      setPagination(data.pagination || pagination)
      setError(null)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const loadGroupMembers = async (groupId) => {
    try {
      setLoadingMembers(true)
      const data = await adminApi.getGroupMembers(groupId)
      setMembers(data.members || [])
    } catch (err) {
      setError(err.message)
    } finally {
      setLoadingMembers(false)
    }
  }

  const handleViewMembers = async (group) => {
    setSelectedGroup(group)
    setShowMembersModal(true)
    await loadGroupMembers(group.id)
  }

  const closeMembersModal = () => {
    setShowMembersModal(false)
    setSelectedGroup(null)
    setMembers([])
  }

  const handleCloseGroup = (group) => {
    setConfirmModal({
      show: true,
      message: `Are you sure you want to close the group "${group.name}"? This action cannot be undone.`,
      onConfirm: async () => {
        try {
          setProcessing(true)
          setError(null)
          await adminApi.closeGroup(group.id)
          // Reload groups to reflect the updated status
          await loadGroups()
          setConfirmModal({ show: false, message: '', onConfirm: null, group: null, action: 'close' })
        } catch (err) {
          const errorMessage = err.message || 'Failed to close group'
          setError(errorMessage)
          alert(`Error: ${errorMessage}`) // Also show alert for visibility
        } finally {
          setProcessing(false)
        }
      },
      group: group,
      action: 'close'
    })
  }

  const handleReopenGroup = (group) => {
    setConfirmModal({
      show: true,
      message: `Are you sure you want to reopen the group "${group.name}"?`,
      onConfirm: async () => {
        try {
          setProcessing(true)
          setError(null)
          console.log('Reopening group:', group.id)
          const result = await adminApi.reopenGroup(group.id)
          console.log('Reopen result:', result)
          // Reload groups to reflect the updated status
          await loadGroups()
          setConfirmModal({ show: false, message: '', onConfirm: null, group: null, action: 'close' })
        } catch (err) {
          console.error('Reopen group error:', err)
          const errorMessage = err.message || 'Failed to reopen group'
          setError(errorMessage)
          alert(`Error: ${errorMessage}`) // Also show alert for visibility
        } finally {
          setProcessing(false)
        }
      },
      group: group,
      action: 'reopen'
    })
  }

  const handleDeleteGroup = (group) => {
    setConfirmModal({
      show: true,
      message: `Are you sure you want to delete the group "${group.name}"? This action is permanent and cannot be undone. All group data will be lost.`,
      onConfirm: async () => {
        try {
          setProcessing(true)
          setError(null)
          await adminApi.deleteGroup(group.id)
          // Reload groups to reflect the deletion
          await loadGroups()
          setConfirmModal({ show: false, message: '', onConfirm: null, group: null, action: 'delete' })
        } catch (err) {
          const errorMessage = err.message || 'Failed to delete group'
          setError(errorMessage)
          alert(`Error: ${errorMessage}`) // Also show alert for visibility
        } finally {
          setProcessing(false)
        }
      },
      group: group,
      action: 'delete'
    })
  }

  return (
    <AdminLayout>
      <div className="admin-page">
        <div className="admin-page-header">
          <h1>Groups Management</h1>
          <p>View all groups in the system</p>
        </div>

        <div className="admin-filters">
          <input
            type="text"
            placeholder="Search groups..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value)
              setPagination(prev => ({ ...prev, page: 1 }))
            }}
            className="admin-search-input"
          />
        </div>

        {error && <div className="admin-error">Error: {error}</div>}

        {loading ? (
          <div className="admin-loading">Loading groups...</div>
        ) : (
          <>
            <div className="admin-stats">
              <div className="stat-card">
                <span className="stat-label">Total Groups</span>
                <span className="stat-value">{pagination.total || groups.length}</span>
              </div>
            </div>

            <div className="admin-table-container">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Invite Code</th>
                    <th>Contribution</th>
                    <th>Currency</th>
                    <th>Members</th>
                    <th>Status</th>
                    <th>Admin</th>
                    <th>Created</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {groups.map(group => (
                    <tr key={group.id}>
                      <td>{group.name}</td>
                      <td>
                        <span className={`badge ${getGroupTypeBadge(group.group_type)}`}>
                          {getGroupTypeLabel(group.group_type)}
                        </span>
                      </td>
                      <td><code>{group.invite_code}</code></td>
                      <td>{formatCurrency(group.contribution_amount, group.currency || 'NGN')}</td>
                      <td>{group.currency || 'NGN'}</td>
                      <td>
                        <span className="badge badge-info">
                          {group.active_members || 0} active
                        </span>
                        {group.pending_members > 0 && (
                          <span className="badge badge-warning">
                            {group.pending_members} pending
                          </span>
                        )}
                      </td>
                      <td>
                        <span className={`badge ${
                          group.status === 'closed' ? 'badge-danger' :
                          group.status === 'active' ? 'badge-success' :
                          'badge-info'
                        }`}>
                          {group.status || 'active'}
                        </span>
                      </td>
                      <td>{group.admin_name} ({group.admin_email})</td>
                      <td>{formatDate(group.created_at)}</td>
                      <td>
                        <div className="admin-actions">
                          <button
                            onClick={() => handleViewMembers(group)}
                            className="btn-sm btn-primary"
                          >
                            View Members
                          </button>
                          {group.status === 'closed' ? (
                            <button
                              onClick={() => handleReopenGroup(group)}
                              className="btn-sm btn-success"
                            >
                              Reopen Group
                            </button>
                          ) : (
                            <button
                              onClick={() => handleCloseGroup(group)}
                              className="btn-sm btn-danger"
                            >
                              Close Group
                            </button>
                          )}
                          <button
                            onClick={() => handleDeleteGroup(group)}
                            className="btn-sm btn-danger"
                            style={{ marginLeft: '5px' }}
                          >
                            Delete
                          </button>
                        </div>
                      </td>
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

        {/* Members Modal */}
        {showMembersModal && selectedGroup && (
          <div className="modal-overlay" onClick={closeMembersModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <h2>Members - {selectedGroup.name}</h2>
                <button className="modal-close" onClick={closeMembersModal}>×</button>
              </div>
              
              {loadingMembers ? (
                <div className="admin-loading">Loading members...</div>
              ) : (
                <div className="admin-table-container" style={{ maxHeight: '60vh', overflowY: 'auto' }}>
                  <table className="admin-table">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Role</th>
                        <th>Status</th>
                        <th>Verified</th>
                        <th>Active</th>
                        <th>Joined</th>
                      </tr>
                    </thead>
                    <tbody>
                      {members.length > 0 ? (
                        members.map(member => (
                          <tr key={member.member_id}>
                            <td>{member.name}</td>
                            <td>{member.email}</td>
                            <td>{member.phone || 'N/A'}</td>
                            <td>
                              <span className={`badge ${member.role === 'admin' ? 'badge-success' : 'badge-info'}`}>
                                {member.role}
                              </span>
                            </td>
                            <td>
                              <span className={`badge ${
                                member.status === 'active' ? 'badge-success' :
                                member.status === 'pending' ? 'badge-warning' :
                                'badge-danger'
                              }`}>
                                {member.status}
                              </span>
                            </td>
                            <td>
                              <span className={`badge ${member.is_verified ? 'badge-success' : 'badge-warning'}`}>
                                {member.is_verified ? '✓' : '✗'}
                              </span>
                            </td>
                            <td>
                              <span className={`badge ${member.is_active ? 'badge-success' : 'badge-danger'}`}>
                                {member.is_active ? '✓' : '✗'}
                              </span>
                            </td>
                            <td>{formatDate(member.joined_at)}</td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="8" style={{ textAlign: 'center', padding: '20px' }}>
                            No members found
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Confirmation Modal */}
        {confirmModal.show && (
          <ConfirmModal
            message={confirmModal.message}
            onConfirm={confirmModal.onConfirm}
            onCancel={() => setConfirmModal({ show: false, message: '', onConfirm: null, group: null, action: 'close' })}
            action={confirmModal.action || 'close'}
            processing={processing}
          />
        )}
      </div>
    </AdminLayout>
  )
}

function ConfirmModal({ message, onConfirm, onCancel, action, processing }) {
  return (
    <div className="admin-modal-overlay" onClick={processing ? undefined : onCancel}>
      <div className="admin-confirm-modal" onClick={(e) => e.stopPropagation()}>
        <div className="admin-confirm-header">
          <h3>Confirm Action</h3>
        </div>
        <div className="admin-confirm-body">
          <p>{message}</p>
        </div>
        <div className="admin-confirm-footer">
          <button onClick={onCancel} className="btn btn-secondary" disabled={processing}>
            Cancel
          </button>
          <button 
            onClick={onConfirm} 
            className={`btn ${action === 'close' || action === 'delete' ? 'btn-danger' : action === 'reopen' ? 'btn-success' : 'btn-primary'}`}
            disabled={processing}
          >
            {processing ? 'Processing...' : action === 'delete' ? 'Delete' : 'Confirm'}
          </button>
        </div>
      </div>
    </div>
  )
}

function formatCurrency(amount, currency = 'NGN') {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
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

function getGroupTypeLabel(type) {
  if (!type) return 'N/A'
  const labels = {
    birthday: 'Birthday',
    subscription: 'Subscription',
    general: 'General',
  }
  return labels[type] || type.charAt(0).toUpperCase() + type.slice(1)
}

function getGroupTypeBadge(type) {
  const badges = {
    birthday: 'badge-primary',
    subscription: 'badge-info',
    general: 'badge-secondary',
  }
  return badges[type] || 'badge-secondary'
}

