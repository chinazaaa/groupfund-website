import { useEffect, useState } from 'react'
import { adminApi } from '../../services/adminApi'
import AdminLayout from '../../components/admin/AdminLayout'
import './AdminPages.css'

export default function AdminWaitlist() {
  const [entries, setEntries] = useState([])
  const [pagination, setPagination] = useState({ page: 1, limit: 50, total: 0, totalPages: 0 })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [filters, setFilters] = useState({ groupType: '' })
  const [selectedEntry, setSelectedEntry] = useState(null)
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    loadEntries()
  }, [pagination.page, filters])

  const loadEntries = async () => {
    try {
      setLoading(true)
      const params = {
        page: pagination.page,
        limit: pagination.limit,
        ...(filters.groupType && { group_type: filters.groupType }),
      }
      const data = await adminApi.getWaitlistEntries(params)
      setEntries(data.entries || data.waitlist || [])
      setPagination(data.pagination || pagination)
      setError(null)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this waitlist entry?')) {
      return
    }
    try {
      await adminApi.deleteWaitlistEntry(id)
      loadEntries()
      alert('Waitlist entry deleted successfully')
    } catch (err) {
      alert('Error deleting entry: ' + err.message)
    }
  }

  const handleViewEntry = (entry) => {
    setSelectedEntry(entry)
    setShowModal(true)
  }

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A'
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  const getGroupTypeLabel = (type) => {
    if (!type) return 'Not specified'
    const labels = {
      family: 'Family',
      friends: 'Friends',
      church: 'Church',
      work: 'Work/Colleagues',
      school: 'School',
      other: 'Other'
    }
    return labels[type] || type
  }

  return (
    <AdminLayout>
      <div className="admin-page">
        <div className="admin-page-header">
          <h1>Waitlist Entries</h1>
          <p>View and manage waitlist signups</p>
        </div>

        <div className="admin-filters">
          <select
            value={filters.groupType}
            onChange={(e) => {
              setFilters({ ...filters, groupType: e.target.value })
              setPagination({ ...pagination, page: 1 })
            }}
          >
            <option value="">All Group Types</option>
            <option value="family">Family</option>
            <option value="friends">Friends</option>
            <option value="church">Church</option>
            <option value="work">Work/Colleagues</option>
            <option value="school">School</option>
            <option value="other">Other</option>
          </select>

          <button onClick={loadEntries} className="btn btn-secondary">
            Refresh
          </button>
        </div>

        {error && (
          <div className="admin-error">
            Error: {error}
          </div>
        )}

        {loading ? (
          <div className="admin-loading">Loading waitlist entries...</div>
        ) : (
          <>
            <div className="admin-stats">
              <div className="stat-card">
                <span className="stat-label">Total Entries</span>
                <span className="stat-value">{pagination.total || entries.length}</span>
              </div>
            </div>

            <div className="admin-table-container">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Group Type</th>
                    <th>Date Joined</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {entries.length === 0 ? (
                    <tr>
                      <td colSpan="6" className="admin-empty">
                        No waitlist entries found
                      </td>
                    </tr>
                  ) : (
                    entries.map((entry) => (
                      <tr key={entry.id}>
                        <td>{entry.name}</td>
                        <td>
                          <a href={`mailto:${entry.email}`} className="admin-link">
                            {entry.email}
                          </a>
                        </td>
                        <td>{entry.phone || 'N/A'}</td>
                        <td>
                          <span className="admin-badge-small">
                            {getGroupTypeLabel(entry.group_type)}
                          </span>
                        </td>
                        <td>{formatDate(entry.created_at)}</td>
                        <td>
                          <div className="admin-actions">
                            <button
                              onClick={() => handleViewEntry(entry)}
                              className="btn btn-small btn-secondary"
                            >
                              View
                            </button>
                            <button
                              onClick={() => handleDelete(entry.id)}
                              className="btn btn-small btn-danger"
                            >
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

            {pagination.totalPages > 1 && (
              <div className="admin-pagination">
                <button
                  onClick={() => setPagination({ ...pagination, page: pagination.page - 1 })}
                  disabled={pagination.page === 1}
                  className="btn btn-secondary"
                >
                  Previous
                </button>
                <span>
                  Page {pagination.page} of {pagination.totalPages}
                </span>
                <button
                  onClick={() => setPagination({ ...pagination, page: pagination.page + 1 })}
                  disabled={pagination.page >= pagination.totalPages}
                  className="btn btn-secondary"
                >
                  Next
                </button>
              </div>
            )}
          </>
        )}

        {/* View Entry Modal */}
        {showModal && selectedEntry && (
          <div className="admin-modal-overlay" onClick={() => setShowModal(false)}>
            <div className="admin-modal" onClick={(e) => e.stopPropagation()}>
              <div className="admin-modal-header">
                <h2>Waitlist Entry Details</h2>
                <button
                  onClick={() => setShowModal(false)}
                  className="admin-modal-close"
                >
                  ×
                </button>
              </div>
              <div className="admin-modal-body">
                <div className="admin-detail-item">
                  <strong>Name:</strong>
                  <span>{selectedEntry.name}</span>
                </div>
                <div className="admin-detail-item">
                  <strong>Email:</strong>
                  <span>
                    <a href={`mailto:${selectedEntry.email}`} className="admin-link">
                      {selectedEntry.email}
                    </a>
                  </span>
                </div>
                <div className="admin-detail-item">
                  <strong>Phone:</strong>
                  <span>{selectedEntry.phone || 'Not provided'}</span>
                </div>
                <div className="admin-detail-item">
                  <strong>Group Type:</strong>
                  <span>{getGroupTypeLabel(selectedEntry.group_type)}</span>
                </div>
                <div className="admin-detail-item">
                  <strong>Date Joined:</strong>
                  <span>{formatDate(selectedEntry.created_at)}</span>
                </div>
              </div>
              <div className="admin-modal-footer">
                <button
                  onClick={() => {
                    setShowModal(false)
                    handleDelete(selectedEntry.id)
                  }}
                  className="btn btn-danger"
                >
                  Delete Entry
                </button>
                <button
                  onClick={() => setShowModal(false)}
                  className="btn btn-secondary"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  )
}
