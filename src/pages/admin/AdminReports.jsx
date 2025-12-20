import { useEffect, useState } from 'react'
import { adminApi } from '../../services/adminApi'
import AdminLayout from '../../components/admin/AdminLayout'
import './AdminPages.css'

export default function AdminReports() {
  const [reports, setReports] = useState([])
  const [pagination, setPagination] = useState({ page: 1, limit: 50, total: 0, totalPages: 0 })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [filters, setFilters] = useState({
    status: '',
    report_type: '',
    reason: '',
    group_id: '',
    user_id: ''
  })
  const [selectedReport, setSelectedReport] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const [updatingStatus, setUpdatingStatus] = useState(false)
  const [adminNotes, setAdminNotes] = useState('')
  const [newStatus, setNewStatus] = useState('')
  const [notification, setNotification] = useState({ show: false, message: '', type: 'success' })

  useEffect(() => {
    loadReports()
  }, [pagination.page, filters])

  const loadReports = async () => {
    try {
      setLoading(true)
      const params = {
        page: pagination.page,
        limit: pagination.limit,
        ...(filters.status && { status: filters.status }),
        ...(filters.report_type && { report_type: filters.report_type }),
        ...(filters.reason && { reason: filters.reason }),
        ...(filters.group_id && { group_id: filters.group_id }),
        ...(filters.user_id && { user_id: filters.user_id }),
      }
      const data = await adminApi.getReports(params)
      setReports(data.reports || [])
      setPagination(data.pagination || pagination)
      setError(null)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
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

  const handleReportClick = async (reportId) => {
    try {
      const report = await adminApi.getReport(reportId)
      setSelectedReport(report)
      setNewStatus(report.status || 'pending')
      setAdminNotes(report.admin_notes || '')
      setShowModal(true)
    } catch (err) {
      showNotification('Error loading report: ' + err.message, 'error')
    }
  }

  const handleUpdateStatus = async () => {
    if (!selectedReport) return

    try {
      setUpdatingStatus(true)
      await adminApi.updateReportStatus(selectedReport.id, {
        status: newStatus,
        ...(adminNotes && { admin_notes: adminNotes }),
      })
      setShowModal(false)
      setSelectedReport(null)
      setAdminNotes('')
      setNewStatus('')
      loadReports()
      showNotification('Report status updated successfully', 'success')
    } catch (err) {
      showNotification('Error updating report: ' + err.message, 'error')
    } finally {
      setUpdatingStatus(false)
    }
  }

  const getStatusBadge = (status) => {
    const badges = {
      pending: { class: 'badge-warning', label: 'Pending' },
      reviewed: { class: 'badge-info', label: 'Reviewed' },
      resolved: { class: 'badge-success', label: 'Resolved' },
      dismissed: { class: 'badge-secondary', label: 'Dismissed' }
    }
    const badge = badges[status] || badges.pending
    return <span className={`badge ${badge.class}`}>{badge.label}</span>
  }

  const getReasonBadge = (reason) => {
    const badges = {
      spam: { class: 'badge-warning', label: 'Spam' },
      inappropriate: { class: 'badge-danger', label: 'Inappropriate' },
      fraud: { class: 'badge-danger', label: 'Fraud' },
      harassment: { class: 'badge-danger', label: 'Harassment' },
      other: { class: 'badge-secondary', label: 'Other' }
    }
    const badge = badges[reason] || badges.other
    return <span className={`badge ${badge.class}`}>{badge.label}</span>
  }

  const getReportTypeBadge = (type) => {
    return type === 'group' 
      ? <span className="badge badge-info">Group</span>
      : <span className="badge badge-primary">Member</span>
  }

  return (
    <AdminLayout>
      <div className="admin-page">
        <div className="admin-page-header">
          <h1>Reports Management</h1>
          <p>View and manage reports for groups and members</p>
        </div>

        {notification.show && (
          <div className={`action-message ${notification.type}`}>
            {notification.message}
          </div>
        )}

        <div className="admin-filters">
          <select
            value={filters.status}
            onChange={(e) => handleFilterChange('status', e.target.value)}
            className="admin-filter-select"
          >
            <option value="">All Status</option>
            <option value="pending">Pending</option>
            <option value="reviewed">Reviewed</option>
            <option value="resolved">Resolved</option>
            <option value="dismissed">Dismissed</option>
          </select>

          <select
            value={filters.report_type}
            onChange={(e) => handleFilterChange('report_type', e.target.value)}
            className="admin-filter-select"
          >
            <option value="">All Types</option>
            <option value="group">Group Reports</option>
            <option value="member">Member Reports</option>
          </select>

          <select
            value={filters.reason}
            onChange={(e) => handleFilterChange('reason', e.target.value)}
            className="admin-filter-select"
          >
            <option value="">All Reasons</option>
            <option value="spam">Spam</option>
            <option value="inappropriate">Inappropriate</option>
            <option value="fraud">Fraud</option>
            <option value="harassment">Harassment</option>
            <option value="other">Other</option>
          </select>

          <input
            type="text"
            placeholder="Filter by Group ID"
            value={filters.group_id}
            onChange={(e) => handleFilterChange('group_id', e.target.value)}
            className="admin-filter-input"
          />

          <input
            type="text"
            placeholder="Filter by User ID"
            value={filters.user_id}
            onChange={(e) => handleFilterChange('user_id', e.target.value)}
            className="admin-filter-input"
          />
        </div>

        {error && <div className="admin-error">Error: {error}</div>}

        {loading ? (
          <div className="admin-loading">Loading reports...</div>
        ) : (
          <>
            <div className="admin-stats">
              <div className="stat-card">
                <span className="stat-label">Total Reports</span>
                <span className="stat-value">{pagination.total || reports.length}</span>
              </div>
              <div className="stat-card">
                <span className="stat-label">Pending</span>
                <span className="stat-value">
                  {reports.filter(r => r.status === 'pending').length}
                </span>
              </div>
              <div className="stat-card">
                <span className="stat-label">Reviewed</span>
                <span className="stat-value">
                  {reports.filter(r => r.status === 'reviewed').length}
                </span>
              </div>
            </div>

            <div className="admin-table-container">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Type</th>
                    <th>Reason</th>
                    <th>Reporter</th>
                    <th>Reported</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Reviewed By</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {reports.length === 0 ? (
                    <tr>
                      <td colSpan="9" style={{ textAlign: 'center', padding: '2rem' }}>
                        No reports found
                      </td>
                    </tr>
                  ) : (
                    reports.map(report => (
                      <tr key={report.id}>
                        <td>#{report.id}</td>
                        <td>{getReportTypeBadge(report.report_type)}</td>
                        <td>{getReasonBadge(report.reason)}</td>
                        <td>
                          {report.reporter_name || report.reporter_email || 'Anonymous'}
                          {report.reporter_email && (
                            <div style={{ fontSize: '0.75rem', color: '#666' }}>
                              {report.reporter_email}
                            </div>
                          )}
                        </td>
                        <td>
                          {report.report_type === 'group' 
                            ? (report.reported_group_name || `Group #${report.group_id}`)
                            : (report.reported_user_name || `User #${report.user_id}`)
                          }
                        </td>
                        <td>{formatDate(report.created_at)}</td>
                        <td>{getStatusBadge(report.status)}</td>
                        <td>
                          {report.reviewed_by_name || report.reviewed_by_email || '-'}
                          {report.reviewed_at && (
                            <div style={{ fontSize: '0.75rem', color: '#666' }}>
                              {formatDate(report.reviewed_at)}
                            </div>
                          )}
                        </td>
                        <td>
                          <button
                            onClick={() => handleReportClick(report.id)}
                            className="btn-sm btn-primary"
                          >
                            View/Update
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            {pagination.totalPages > 1 && (
              <div className="admin-pagination">
                <button
                  onClick={() => setPagination(prev => ({ ...prev, page: prev.page - 1 }))}
                  disabled={pagination.page === 1}
                  className="btn-sm"
                >
                  Previous
                </button>
                <span>
                  Page {pagination.page} of {pagination.totalPages} ({pagination.total} total)
                </span>
                <button
                  onClick={() => setPagination(prev => ({ ...prev, page: prev.page + 1 }))}
                  disabled={pagination.page >= pagination.totalPages}
                  className="btn-sm"
                >
                  Next
                </button>
              </div>
            )}
          </>
        )}

        {/* Report Detail Modal */}
        {showModal && selectedReport && (
          <div className="admin-modal-overlay" onClick={() => setShowModal(false)}>
            <div className="admin-modal" onClick={(e) => e.stopPropagation()}>
              <div className="admin-modal-header">
                <h2>Report Details #{selectedReport.id}</h2>
                <button
                  onClick={() => setShowModal(false)}
                  className="admin-modal-close"
                >
                  ✕
                </button>
              </div>

              <div className="admin-modal-body">
                <div className="admin-detail-section">
                  <h3>Report Information</h3>
                  <div className="admin-detail-grid">
                    <div>
                      <strong>Type:</strong> {getReportTypeBadge(selectedReport.report_type)}
                    </div>
                    <div>
                      <strong>Reason:</strong> {getReasonBadge(selectedReport.reason)}
                    </div>
                    <div>
                      <strong>Status:</strong> {getStatusBadge(selectedReport.status)}
                    </div>
                    <div>
                      <strong>Created:</strong> {formatDate(selectedReport.created_at)}
                    </div>
                  </div>
                </div>

                <div className="admin-detail-section">
                  <h3>Reporter Information</h3>
                  <div className="admin-detail-grid">
                    <div>
                      <strong>Name:</strong> {selectedReport.reporter_name || 'N/A'}
                    </div>
                    <div>
                      <strong>Email:</strong> {selectedReport.reporter_email || 'N/A'}
                    </div>
                    <div>
                      <strong>User ID:</strong> {selectedReport.reporter_id || 'N/A'}
                    </div>
                  </div>
                </div>

                {selectedReport.report_type === 'group' ? (
                  <div className="admin-detail-section">
                    <h3>Reported Group</h3>
                    <div className="admin-detail-grid">
                      <div>
                        <strong>Group Name:</strong> {selectedReport.reported_group_name || 'N/A'}
                      </div>
                      <div>
                        <strong>Group ID:</strong> {selectedReport.group_id || 'N/A'}
                      </div>
                      <div>
                        <strong>Group Type:</strong> {selectedReport.group_type || 'N/A'}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="admin-detail-section">
                    <h3>Reported Member</h3>
                    <div className="admin-detail-grid">
                      <div>
                        <strong>User Name:</strong> {selectedReport.reported_user_name || 'N/A'}
                      </div>
                      <div>
                        <strong>User ID:</strong> {selectedReport.user_id || 'N/A'}
                      </div>
                      <div>
                        <strong>Group ID:</strong> {selectedReport.group_id || 'N/A'}
                      </div>
                    </div>
                  </div>
                )}

                <div className="admin-detail-section">
                  <h3>Description</h3>
                  <p style={{ padding: '1rem', backgroundColor: '#f5f5f5', borderRadius: '4px', whiteSpace: 'pre-wrap' }}>
                    {selectedReport.description || 'No description provided'}
                  </p>
                </div>

                {selectedReport.reviewed_by_name && (
                  <div className="admin-detail-section">
                    <h3>Review Information</h3>
                    <div className="admin-detail-grid">
                      <div>
                        <strong>Reviewed By:</strong> {selectedReport.reviewed_by_name}
                      </div>
                      <div>
                        <strong>Reviewed At:</strong> {formatDate(selectedReport.reviewed_at)}
                      </div>
                    </div>
                  </div>
                )}

                {selectedReport.admin_notes && (
                  <div className="admin-detail-section">
                    <h3>Admin Notes</h3>
                    <p style={{ padding: '1rem', backgroundColor: '#f5f5f5', borderRadius: '4px', whiteSpace: 'pre-wrap' }}>
                      {selectedReport.admin_notes}
                    </p>
                  </div>
                )}

                <div className="admin-detail-section">
                  <h3>Update Status</h3>
                  <div style={{ marginBottom: '1rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
                      Status <span style={{ color: '#ef4444' }}>*</span>
                    </label>
                    <select
                      value={newStatus}
                      onChange={(e) => setNewStatus(e.target.value)}
                      style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid #d1d5db', fontSize: '1rem' }}
                    >
                      <option value="pending">Pending</option>
                      <option value="reviewed">Reviewed</option>
                      <option value="resolved">Resolved</option>
                      <option value="dismissed">Dismissed</option>
                    </select>
                  </div>

                  <div style={{ marginBottom: '1rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
                      Admin Notes (Optional)
                    </label>
                    <textarea
                      value={adminNotes}
                      onChange={(e) => setAdminNotes(e.target.value)}
                      placeholder="Add notes about this report..."
                      rows="4"
                      style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid #d1d5db', fontSize: '1rem', fontFamily: 'inherit' }}
                    />
                  </div>

                  <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
                    <button
                      onClick={() => setShowModal(false)}
                      className="btn-sm btn-secondary"
                      disabled={updatingStatus}
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleUpdateStatus}
                      className="btn-sm btn-primary"
                      disabled={updatingStatus || !newStatus}
                    >
                      {updatingStatus ? 'Updating...' : 'Update Status'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  )
}

function formatDate(dateString) {
  if (!dateString) return 'N/A'
  try {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  } catch {
    return dateString
  }
}

