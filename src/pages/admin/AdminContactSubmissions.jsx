import { useEffect, useState } from 'react'
import { adminApi } from '../../services/adminApi'
import AdminLayout from '../../components/admin/AdminLayout'
import './AdminPages.css'

export default function AdminContactSubmissions() {
  const [submissions, setSubmissions] = useState([])
  const [pagination, setPagination] = useState({ page: 1, limit: 50, total: 0, totalPages: 0 })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [filters, setFilters] = useState({ is_read: '' })
  const [selectedSubmission, setSelectedSubmission] = useState(null)
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    loadSubmissions()
  }, [pagination.page, filters])

  const loadSubmissions = async () => {
    try {
      setLoading(true)
      const params = {
        page: pagination.page,
        limit: pagination.limit,
        ...(filters.is_read && { is_read: filters.is_read }),
      }
      const data = await adminApi.getContactSubmissions(params)
      setSubmissions(data.submissions || [])
      setPagination(data.pagination || pagination)
      setError(null)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const handleMarkRead = async (id, isRead) => {
    try {
      await adminApi.markContactSubmissionRead(id, !isRead)
      loadSubmissions()
    } catch (err) {
      alert('Error updating submission: ' + err.message)
    }
  }

  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this submission?')) {
      return
    }
    try {
      await adminApi.deleteContactSubmission(id)
      loadSubmissions()
      alert('Submission deleted successfully')
    } catch (err) {
      alert('Error deleting submission: ' + err.message)
    }
  }

  const handleViewSubmission = (submission) => {
    setSelectedSubmission(submission)
    setShowModal(true)
    // Mark as read when viewing
    if (!submission.is_read) {
      handleMarkRead(submission.id, false)
    }
  }

  return (
    <AdminLayout>
      <div className="admin-page">
        <div className="admin-page-header">
          <h1>Contact Submissions</h1>
          <p>View and manage contact form submissions</p>
        </div>

        <div className="admin-filters">
          <select
            value={filters.is_read}
            onChange={(e) => {
              setFilters(prev => ({ ...prev, is_read: e.target.value }))
              setPagination(prev => ({ ...prev, page: 1 }))
            }}
            className="admin-filter-select"
          >
            <option value="">All</option>
            <option value="false">Unread</option>
            <option value="true">Read</option>
          </select>
        </div>

        {error && <div className="admin-error">Error: {error}</div>}

        {loading ? (
          <div className="admin-loading">Loading submissions...</div>
        ) : (
          <>
            <div className="admin-table-container">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Subject</th>
                    <th>Message</th>
                    <th>Read</th>
                    <th>Date</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {submissions.map(submission => (
                    <tr key={submission.id}>
                      <td>{submission.name}</td>
                      <td>{submission.email}</td>
                      <td>{submission.subject}</td>
                      <td className="message-preview">
                        {submission.message.length > 100 
                          ? `${submission.message.substring(0, 100)}...` 
                          : submission.message}
                      </td>
                      <td>
                        <span className={`badge ${submission.is_read ? 'badge-success' : 'badge-warning'}`}>
                          {submission.is_read ? '✓ Read' : '✗ Unread'}
                        </span>
                      </td>
                      <td>{formatDate(submission.created_at)}</td>
                      <td>
                        <button
                          onClick={() => handleViewSubmission(submission)}
                          className="btn-sm btn-primary"
                          style={{ marginRight: '8px' }}
                        >
                          View
                        </button>
                        <button
                          onClick={() => handleMarkRead(submission.id, submission.is_read)}
                          className="btn-sm btn-secondary"
                          style={{ marginRight: '8px' }}
                        >
                          {submission.is_read ? 'Mark Unread' : 'Mark Read'}
                        </button>
                        <button
                          onClick={() => handleDelete(submission.id)}
                          className="btn-sm btn-danger"
                        >
                          Delete
                        </button>
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

        {/* Submission Detail Modal */}
        {showModal && selectedSubmission && (
          <div className="modal-overlay" onClick={() => setShowModal(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <h2>Contact Submission</h2>
                <button onClick={() => setShowModal(false)} className="modal-close">×</button>
              </div>
              <div className="modal-body">
                <div className="user-detail-section">
                  <h3>Contact Information</h3>
                  <p><strong>Name:</strong> {selectedSubmission.name}</p>
                  <p><strong>Email:</strong> <a href={`mailto:${selectedSubmission.email}`}>{selectedSubmission.email}</a></p>
                  <p><strong>Subject:</strong> {selectedSubmission.subject}</p>
                  <p><strong>Submitted:</strong> {formatDate(selectedSubmission.created_at)}</p>
                </div>
                <div className="user-detail-section">
                  <h3>Message</h3>
                  <p style={{ whiteSpace: 'pre-wrap', lineHeight: '1.7' }}>{selectedSubmission.message}</p>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  onClick={() => handleMarkRead(selectedSubmission.id, selectedSubmission.is_read)}
                  className={`btn ${selectedSubmission.is_read ? 'btn-secondary' : 'btn-primary'}`}
                >
                  {selectedSubmission.is_read ? 'Mark Unread' : 'Mark Read'}
                </button>
                <button
                  onClick={() => handleDelete(selectedSubmission.id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
                <button onClick={() => setShowModal(false)} className="btn btn-secondary">
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

