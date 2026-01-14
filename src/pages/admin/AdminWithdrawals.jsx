import { useEffect, useState } from 'react'
import { adminApi } from '../../services/adminApi'
import AdminLayout from '../../components/admin/AdminLayout'
import './AdminPages.css'

export default function AdminWithdrawals() {
  const [withdrawals, setWithdrawals] = useState([])
  const [pagination, setPagination] = useState({ page: 1, limit: 50, total: 0, totalPages: 0 })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [filters, setFilters] = useState({ status: '', userId: '' })
  const [selectedWithdrawal, setSelectedWithdrawal] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const [processingWithdrawals, setProcessingWithdrawals] = useState(false)
  const [actionMessage, setActionMessage] = useState(null)

  useEffect(() => {
    loadWithdrawals()
  }, [pagination.page, filters])

  const loadWithdrawals = async () => {
    try {
      setLoading(true)
      const params = {
        page: pagination.page,
        limit: pagination.limit,
        ...(filters.status && { status: filters.status }),
        ...(filters.userId && { userId: filters.userId }),
      }
      const data = await adminApi.getWithdrawals(params)
      setWithdrawals(data.withdrawals || [])
      setPagination(data.pagination || pagination)
      setError(null)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const handleViewDetails = async (withdrawalId) => {
    try {
      const data = await adminApi.getWithdrawal(withdrawalId)
      setSelectedWithdrawal(data.withdrawal)
      setShowModal(true)
    } catch (err) {
      setError(err.message)
    }
  }

  const handleProcessPendingWithdrawals = async () => {
    if (!window.confirm('Are you sure you want to process all pending withdrawals? This action cannot be undone.')) {
      return
    }

    try {
      setProcessingWithdrawals(true)
      setActionMessage(null)
      const result = await adminApi.processPendingWithdrawals()
      setActionMessage({ 
        type: 'success', 
        text: result.message || 'Pending withdrawals processed successfully!' 
      })
      // Reload withdrawals to see updated status
      await loadWithdrawals()
    } catch (err) {
      setActionMessage({ 
        type: 'error', 
        text: err.message || 'Failed to process pending withdrawals' 
      })
    } finally {
      setProcessingWithdrawals(false)
      setTimeout(() => setActionMessage(null), 5000)
    }
  }

  return (
    <AdminLayout>
      <div className="admin-page">
        <div className="admin-page-header">
          <div className="admin-page-header-content">
            <div>
              <h1>Withdrawals</h1>
              <p>View and manage withdrawal requests</p>
            </div>
            <div className="header-actions">
              <button
                onClick={handleProcessPendingWithdrawals}
                disabled={processingWithdrawals}
                className="btn-sm btn-primary"
              >
                {processingWithdrawals ? 'Processing...' : 'Process Pending Withdrawals'}
              </button>
            </div>
          </div>
        </div>

        {actionMessage && (
          <div className={`admin-message ${actionMessage.type === 'success' ? 'admin-success' : 'admin-error'}`}>
            {actionMessage.text}
          </div>
        )}

        <div className="admin-filters">
          <select
            value={filters.status}
            onChange={(e) => {
              setFilters(prev => ({ ...prev, status: e.target.value }))
              setPagination(prev => ({ ...prev, page: 1 }))
            }}
            className="admin-filter-select"
          >
            <option value="">All Status</option>
            <option value="pending">Pending</option>
            <option value="processing">Processing</option>
            <option value="completed">Completed</option>
            <option value="failed">Failed</option>
          </select>
          <input
            type="text"
            placeholder="Filter by User ID"
            value={filters.userId}
            onChange={(e) => {
              setFilters(prev => ({ ...prev, userId: e.target.value }))
              setPagination(prev => ({ ...prev, page: 1 }))
            }}
            className="admin-filter-input"
          />
        </div>

        {error && <div className="admin-error">Error: {error}</div>}

        {loading ? (
          <div className="admin-loading">Loading withdrawals...</div>
        ) : (
          <>
            <div className="admin-stats">
              <div className="stat-card">
                <span className="stat-label">Total Withdrawals</span>
                <span className="stat-value">{pagination.total || withdrawals.length}</span>
              </div>
            </div>

            <div className="admin-table-container">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>User</th>
                    <th>Amount</th>
                    <th>Currency</th>
                    <th>Fee</th>
                    <th>Net Amount</th>
                    <th>Status</th>
                    <th>Provider</th>
                    <th>Bank Account</th>
                    <th>Scheduled At</th>
                    <th>Processed At</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {withdrawals.length === 0 ? (
                    <tr>
                      <td colSpan="11" style={{ textAlign: 'center', padding: '32px' }}>
                        No withdrawals found
                      </td>
                    </tr>
                  ) : (
                    withdrawals.map(withdrawal => (
                      <tr key={withdrawal.id}>
                        <td>
                          <div>
                            <div style={{ fontWeight: 600 }}>{withdrawal.user?.name || 'N/A'}</div>
                            <div style={{ fontSize: '0.875rem', color: '#64748b' }}>
                              {withdrawal.user?.email || 'N/A'}
                            </div>
                          </div>
                        </td>
                        <td>{formatCurrency(withdrawal.amount, withdrawal.currency)}</td>
                        <td>{withdrawal.currency}</td>
                        <td>{formatCurrency(withdrawal.fee || 0, withdrawal.currency)}</td>
                        <td>{formatCurrency(withdrawal.net_amount || withdrawal.amount, withdrawal.currency)}</td>
                        <td>
                          <span className={`badge badge-${getStatusBadge(withdrawal.status)}`}>
                            {withdrawal.status}
                          </span>
                        </td>
                        <td>{withdrawal.payment_provider || 'N/A'}</td>
                        <td>
                          {withdrawal.bank_account ? (
                            <div style={{ fontSize: '0.875rem' }}>
                              <div>{withdrawal.bank_account.account_name}</div>
                              <div style={{ color: '#64748b' }}>
                                {withdrawal.bank_account.bank_name} - {withdrawal.bank_account.account_number}
                              </div>
                            </div>
                          ) : (
                            'N/A'
                          )}
                        </td>
                        <td>{formatDate(withdrawal.scheduled_at)}</td>
                        <td>{formatDate(withdrawal.processed_at)}</td>
                        <td>
                          <button
                            onClick={() => handleViewDetails(withdrawal.id)}
                            className="btn-sm btn-primary"
                          >
                            View Details
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
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

      {/* Details Modal */}
      {showModal && selectedWithdrawal && (
        <div className="admin-modal-overlay" onClick={() => setShowModal(false)}>
          <div className="admin-modal" onClick={(e) => e.stopPropagation()}>
            <div className="admin-modal-header">
              <h2>Withdrawal Details</h2>
              <button className="admin-modal-close" onClick={() => setShowModal(false)}>
                ✕
              </button>
            </div>
            <div className="admin-modal-body">
              <div className="admin-detail-section">
                <h3>User Information</h3>
                <div className="admin-detail-grid">
                  <div>
                    <span className="detail-label">Name:</span>
                    <span className="detail-value">{selectedWithdrawal.user?.name || 'N/A'}</span>
                  </div>
                  <div>
                    <span className="detail-label">Email:</span>
                    <span className="detail-value">{selectedWithdrawal.user?.email || 'N/A'}</span>
                  </div>
                </div>
              </div>

              <div className="admin-detail-section">
                <h3>Withdrawal Information</h3>
                <div className="admin-detail-grid">
                  <div>
                    <span className="detail-label">Amount:</span>
                    <span className="detail-value">
                      {formatCurrency(selectedWithdrawal.amount, selectedWithdrawal.currency)}
                    </span>
                  </div>
                  <div>
                    <span className="detail-label">Currency:</span>
                    <span className="detail-value">{selectedWithdrawal.currency}</span>
                  </div>
                  <div>
                    <span className="detail-label">Fee:</span>
                    <span className="detail-value">
                      {formatCurrency(selectedWithdrawal.fee || 0, selectedWithdrawal.currency)}
                    </span>
                  </div>
                  <div>
                    <span className="detail-label">Net Amount:</span>
                    <span className="detail-value">
                      {formatCurrency(selectedWithdrawal.net_amount || selectedWithdrawal.amount, selectedWithdrawal.currency)}
                    </span>
                  </div>
                  <div>
                    <span className="detail-label">Status:</span>
                    <span className={`badge badge-${getStatusBadge(selectedWithdrawal.status)}`}>
                      {selectedWithdrawal.status}
                    </span>
                  </div>
                  <div>
                    <span className="detail-label">Payment Provider:</span>
                    <span className="detail-value">{selectedWithdrawal.payment_provider || 'N/A'}</span>
                  </div>
                  <div>
                    <span className="detail-label">Transaction ID:</span>
                    <span className="detail-value">{selectedWithdrawal.provider_transaction_id || 'N/A'}</span>
                  </div>
                </div>
              </div>

              {selectedWithdrawal.bank_account && (
                <div className="admin-detail-section">
                  <h3>Bank Account Details</h3>
                  <div className="admin-detail-grid">
                    <div>
                      <span className="detail-label">Account Name:</span>
                      <span className="detail-value">{selectedWithdrawal.bank_account.account_name}</span>
                    </div>
                    <div>
                      <span className="detail-label">Account Number:</span>
                      <span className="detail-value">{selectedWithdrawal.bank_account.account_number}</span>
                    </div>
                    <div>
                      <span className="detail-label">Bank Name:</span>
                      <span className="detail-value">{selectedWithdrawal.bank_account.bank_name}</span>
                    </div>
                  </div>
                </div>
              )}

              <div className="admin-detail-section">
                <h3>Timestamps</h3>
                <div className="admin-detail-grid">
                  <div>
                    <span className="detail-label">Created At:</span>
                    <span className="detail-value">{formatDate(selectedWithdrawal.created_at)}</span>
                  </div>
                  <div>
                    <span className="detail-label">Scheduled At:</span>
                    <span className="detail-value">{formatDate(selectedWithdrawal.scheduled_at)}</span>
                  </div>
                  <div>
                    <span className="detail-label">Processed At:</span>
                    <span className="detail-value">{formatDate(selectedWithdrawal.processed_at)}</span>
                  </div>
                  <div>
                    <span className="detail-label">Updated At:</span>
                    <span className="detail-value">{formatDate(selectedWithdrawal.updated_at)}</span>
                  </div>
                </div>
              </div>

              {selectedWithdrawal.error_message && (
                <div className="admin-detail-section">
                  <h3>Error Message</h3>
                  <div className="admin-error-message">{selectedWithdrawal.error_message}</div>
                </div>
              )}
            </div>
            <div className="admin-modal-footer">
              <button className="btn btn-secondary" onClick={() => setShowModal(false)}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </AdminLayout>
  )
}

function getStatusBadge(status) {
  const badges = {
    completed: 'success',
    processing: 'info',
    pending: 'warning',
    failed: 'danger',
  }
  return badges[status] || 'secondary'
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
    hour: '2-digit',
    minute: '2-digit',
  })
}
