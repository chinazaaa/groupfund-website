import { useEffect, useState } from 'react'
import { adminApi } from '../../services/adminApi'
import AdminLayout from '../../components/admin/AdminLayout'
import './AdminPages.css'

export default function AdminAutopay() {
  const [activeTab, setActiveTab] = useState('attempts')
  const [attempts, setAttempts] = useState([])
  const [status, setStatus] = useState(null)
  const [preferences, setPreferences] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [pagination, setPagination] = useState({ page: 1, limit: 50, total: 0, totalPages: 0 })
  const [filters, setFilters] = useState({
    status: '',
    userId: '',
    groupId: '',
    contributionType: '',
    autoPayEnabled: '',
  })
  const [processingAll, setProcessingAll] = useState(false)
  const [processingBirthday, setProcessingBirthday] = useState(false)
  const [processingSubscription, setProcessingSubscription] = useState(false)
  const [processingGeneral, setProcessingGeneral] = useState(false)
  const [actionMessage, setActionMessage] = useState(null)
  const [showBirthdayModal, setShowBirthdayModal] = useState(false)
  const [showSubscriptionModal, setShowSubscriptionModal] = useState(false)
  const [showGeneralModal, setShowGeneralModal] = useState(false)
  const [birthdayUserId, setBirthdayUserId] = useState('')
  const [birthdayGroupId, setBirthdayGroupId] = useState('')
  const [subscriptionGroupId, setSubscriptionGroupId] = useState('')
  const [generalGroupId, setGeneralGroupId] = useState('')

  useEffect(() => {
    loadData()
  }, [activeTab, pagination.page, filters])

  const loadData = async () => {
    try {
      setLoading(true)
      setError(null)

      if (activeTab === 'attempts') {
        const params = {
          page: pagination.page,
          limit: pagination.limit,
          ...(filters.status && { status: filters.status }),
          ...(filters.userId && { userId: filters.userId }),
          ...(filters.groupId && { groupId: filters.groupId }),
          ...(filters.contributionType && { contributionType: filters.contributionType }),
        }
        const data = await adminApi.getAutopayAttempts(params)
        setAttempts(data.attempts || [])
        setPagination(data.pagination || pagination)
      } else if (activeTab === 'status') {
        const data = await adminApi.getAutopayStatus()
        setStatus(data.summary)
      } else if (activeTab === 'preferences') {
        const params = {
          page: pagination.page,
          limit: pagination.limit,
          ...(filters.userId && { userId: filters.userId }),
          ...(filters.groupId && { groupId: filters.groupId }),
          ...(filters.autoPayEnabled && { autoPayEnabled: filters.autoPayEnabled }),
        }
        const data = await adminApi.getAutopayPreferences(params)
        setPreferences(data.preferences || [])
        setPagination(data.pagination || pagination)
      }
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

  const handleProcessAllPayments = async () => {
    if (!window.confirm('Are you sure you want to process all automatic payments? This may take a while.')) {
      return
    }

    try {
      setProcessingAll(true)
      setActionMessage(null)
      const result = await adminApi.processAllPayments()
      setActionMessage({ 
        type: 'success', 
        text: result.message || 'All automatic payments processed successfully!' 
      })
      // Reload data to see updated status
      await loadData()
    } catch (err) {
      setActionMessage({ 
        type: 'error', 
        text: err.message || 'Failed to process all payments' 
      })
    } finally {
      setProcessingAll(false)
      setTimeout(() => setActionMessage(null), 5000)
    }
  }

  const handleProcessBirthdayPayments = async () => {
    if (!birthdayUserId || !birthdayGroupId) {
      setActionMessage({ type: 'error', text: 'Please provide both User ID and Group ID' })
      setTimeout(() => setActionMessage(null), 3000)
      return
    }

    try {
      setProcessingBirthday(true)
      setActionMessage(null)
      const result = await adminApi.processBirthdayPayments(birthdayUserId, birthdayGroupId)
      setActionMessage({ 
        type: 'success', 
        text: result.message || 'Birthday payments processed successfully!' 
      })
      setShowBirthdayModal(false)
      setBirthdayUserId('')
      setBirthdayGroupId('')
      await loadData()
    } catch (err) {
      setActionMessage({ 
        type: 'error', 
        text: err.message || 'Failed to process birthday payments' 
      })
    } finally {
      setProcessingBirthday(false)
      setTimeout(() => setActionMessage(null), 5000)
    }
  }

  const handleProcessSubscriptionPayments = async () => {
    if (!subscriptionGroupId) {
      setActionMessage({ type: 'error', text: 'Please provide a Group ID' })
      setTimeout(() => setActionMessage(null), 3000)
      return
    }

    try {
      setProcessingSubscription(true)
      setActionMessage(null)
      const result = await adminApi.processSubscriptionPayments(subscriptionGroupId)
      setActionMessage({ 
        type: 'success', 
        text: result.message || 'Subscription payments processed successfully!' 
      })
      setShowSubscriptionModal(false)
      setSubscriptionGroupId('')
      await loadData()
    } catch (err) {
      setActionMessage({ 
        type: 'error', 
        text: err.message || 'Failed to process subscription payments' 
      })
    } finally {
      setProcessingSubscription(false)
      setTimeout(() => setActionMessage(null), 5000)
    }
  }

  const handleProcessGeneralPayments = async () => {
    if (!generalGroupId) {
      setActionMessage({ type: 'error', text: 'Please provide a Group ID' })
      setTimeout(() => setActionMessage(null), 3000)
      return
    }

    try {
      setProcessingGeneral(true)
      setActionMessage(null)
      const result = await adminApi.processGeneralPayments(generalGroupId)
      setActionMessage({ 
        type: 'success', 
        text: result.message || 'General group payments processed successfully!' 
      })
      setShowGeneralModal(false)
      setGeneralGroupId('')
      await loadData()
    } catch (err) {
      setActionMessage({ 
        type: 'error', 
        text: err.message || 'Failed to process general payments' 
      })
    } finally {
      setProcessingGeneral(false)
      setTimeout(() => setActionMessage(null), 5000)
    }
  }

  return (
    <AdminLayout>
      <div className="admin-page">
        <div className="admin-page-header">
          <div className="admin-page-header-content">
            <div>
              <h1>Autopay Management</h1>
              <p>Monitor automatic payment attempts and preferences</p>
            </div>
            <div className="header-actions">
              <button
                onClick={handleProcessAllPayments}
                disabled={processingAll}
                className="btn-sm btn-primary"
              >
                {processingAll ? 'Processing...' : 'Process All Payments'}
              </button>
              <button
                onClick={() => setShowBirthdayModal(true)}
                disabled={processingBirthday}
                className="btn-sm btn-primary"
              >
                Process Birthday
              </button>
              <button
                onClick={() => setShowSubscriptionModal(true)}
                disabled={processingSubscription}
                className="btn-sm btn-primary"
              >
                Process Subscription
              </button>
              <button
                onClick={() => setShowGeneralModal(true)}
                disabled={processingGeneral}
                className="btn-sm btn-primary"
              >
                Process General
              </button>
            </div>
          </div>
        </div>

        {actionMessage && (
          <div className={`admin-message ${actionMessage.type === 'success' ? 'admin-success' : 'admin-error'}`}>
            {actionMessage.text}
          </div>
        )}

        {/* Tabs */}
        <div className="admin-tabs">
          <button
            className={`admin-tab ${activeTab === 'attempts' ? 'active' : ''}`}
            onClick={() => setActiveTab('attempts')}
          >
            Payment Attempts
          </button>
          <button
            className={`admin-tab ${activeTab === 'status' ? 'active' : ''}`}
            onClick={() => setActiveTab('status')}
          >
            Status Summary
          </button>
          <button
            className={`admin-tab ${activeTab === 'preferences' ? 'active' : ''}`}
            onClick={() => setActiveTab('preferences')}
          >
            User Preferences
          </button>
        </div>

        {error && <div className="admin-error">Error: {error}</div>}

        {loading ? (
          <div className="admin-loading">Loading...</div>
        ) : (
          <>
            {/* Payment Attempts Tab */}
            {activeTab === 'attempts' && (
              <>
                <div className="admin-filters">
                  <select
                    value={filters.status}
                    onChange={(e) => handleFilterChange('status', e.target.value)}
                    className="admin-filter-select"
                  >
                    <option value="">All Status</option>
                    <option value="pending">Pending</option>
                    <option value="success">Success</option>
                    <option value="failed">Failed</option>
                    <option value="retry">Retry</option>
                  </select>
                  <select
                    value={filters.contributionType}
                    onChange={(e) => handleFilterChange('contributionType', e.target.value)}
                    className="admin-filter-select"
                  >
                    <option value="">All Types</option>
                    <option value="birthday">Birthday</option>
                    <option value="subscription">Subscription</option>
                    <option value="general">General</option>
                  </select>
                  <input
                    type="text"
                    placeholder="Filter by User ID"
                    value={filters.userId}
                    onChange={(e) => handleFilterChange('userId', e.target.value)}
                    className="admin-filter-input"
                  />
                  <input
                    type="text"
                    placeholder="Filter by Group ID"
                    value={filters.groupId}
                    onChange={(e) => handleFilterChange('groupId', e.target.value)}
                    className="admin-filter-input"
                  />
                </div>

                <div className="admin-stats">
                  <div className="stat-card">
                    <span className="stat-label">Total Attempts</span>
                    <span className="stat-value">{pagination.total || attempts.length}</span>
                  </div>
                </div>

                <div className="admin-table-container">
                  <table className="admin-table">
                    <thead>
                      <tr>
                        <th>User</th>
                        <th>Group</th>
                        <th>Type</th>
                        <th>Amount</th>
                        <th>Currency</th>
                        <th>Status</th>
                        <th>Provider</th>
                        <th>Transaction ID</th>
                        <th>Retry Count</th>
                        <th>Attempted At</th>
                        <th>Error</th>
                      </tr>
                    </thead>
                    <tbody>
                      {attempts.length === 0 ? (
                        <tr>
                          <td colSpan="11" style={{ textAlign: 'center', padding: '32px' }}>
                            No payment attempts found
                          </td>
                        </tr>
                      ) : (
                        attempts.map(attempt => (
                          <tr key={attempt.id}>
                            <td>
                              <div>
                                <div style={{ fontWeight: 600 }}>{attempt.user?.name || 'N/A'}</div>
                                <div style={{ fontSize: '0.875rem', color: '#64748b' }}>
                                  {attempt.user?.email || 'N/A'}
                                </div>
                              </div>
                            </td>
                            <td>
                              {attempt.group ? (
                                <div>
                                  <div style={{ fontWeight: 600 }}>{attempt.group.name}</div>
                                  <div style={{ fontSize: '0.875rem', color: '#64748b' }}>
                                    {attempt.group.group_type}
                                  </div>
                                </div>
                              ) : (
                                'N/A'
                              )}
                            </td>
                            <td>
                              <span className={`badge badge-${getTypeBadge(attempt.contribution_type)}`}>
                                {attempt.contribution_type}
                              </span>
                            </td>
                            <td>{formatCurrency(attempt.amount, attempt.currency)}</td>
                            <td>{attempt.currency}</td>
                            <td>
                              <span className={`badge badge-${getStatusBadge(attempt.status)}`}>
                                {attempt.status}
                              </span>
                            </td>
                            <td>{attempt.payment_provider || 'N/A'}</td>
                            <td style={{ fontSize: '0.875rem', fontFamily: 'monospace' }}>
                              {attempt.provider_transaction_id || 'N/A'}
                            </td>
                            <td>{attempt.retry_count || 0}</td>
                            <td>{formatDate(attempt.attempted_at)}</td>
                            <td>
                              {attempt.error_message ? (
                                <span style={{ color: '#dc2626', fontSize: '0.875rem' }}>
                                  {attempt.error_message.substring(0, 50)}
                                  {attempt.error_message.length > 50 ? '...' : ''}
                                </span>
                              ) : (
                                'N/A'
                              )}
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

            {/* Status Summary Tab */}
            {activeTab === 'status' && status && (
              <div className="admin-stats-grid">
                <div className="stat-card">
                  <span className="stat-label">Pending</span>
                  <span className="stat-value">{status.by_status?.pending || 0}</span>
                </div>
                <div className="stat-card">
                  <span className="stat-label">Success</span>
                  <span className="stat-value">{status.by_status?.success || 0}</span>
                </div>
                <div className="stat-card">
                  <span className="stat-label">Failed</span>
                  <span className="stat-value">{status.by_status?.failed || 0}</span>
                </div>
                <div className="stat-card">
                  <span className="stat-label">Retry</span>
                  <span className="stat-value">{status.by_status?.retry || 0}</span>
                </div>
                <div className="stat-card">
                  <span className="stat-label">Recent Failures (24h)</span>
                  <span className="stat-value">{status.recent_failures_24h || 0}</span>
                </div>
                <div className="stat-card">
                  <span className="stat-label">Users with Auto-pay</span>
                  <span className="stat-value">{status.auto_pay_enabled?.users || 0}</span>
                </div>
                <div className="stat-card">
                  <span className="stat-label">Groups with Auto-pay</span>
                  <span className="stat-value">{status.auto_pay_enabled?.groups || 0}</span>
                </div>
              </div>
            )}

            {activeTab === 'status' && status && (
              <>
                <div className="admin-detail-section" style={{ marginTop: '32px' }}>
                  <h3>By Contribution Type</h3>
                  <div className="admin-stats-grid">
                    <div className="stat-card">
                      <span className="stat-label">Birthday</span>
                      <span className="stat-value">{status.by_type?.birthday || 0}</span>
                    </div>
                    <div className="stat-card">
                      <span className="stat-label">Subscription</span>
                      <span className="stat-value">{status.by_type?.subscription || 0}</span>
                    </div>
                    <div className="stat-card">
                      <span className="stat-label">General</span>
                      <span className="stat-value">{status.by_type?.general || 0}</span>
                    </div>
                  </div>
                </div>

                {status.total_processed && status.total_processed.length > 0 && (
                  <div className="admin-detail-section" style={{ marginTop: '32px' }}>
                    <h3>Total Processed by Currency</h3>
                    <div className="admin-table-container">
                      <table className="admin-table">
                        <thead>
                          <tr>
                            <th>Currency</th>
                            <th>Total Amount</th>
                            <th>Count</th>
                          </tr>
                        </thead>
                        <tbody>
                          {status.total_processed.map((item, idx) => (
                            <tr key={idx}>
                              <td>{item.currency}</td>
                              <td>{formatCurrency(item.total_amount, item.currency)}</td>
                              <td>{item.count}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </>
            )}

            {/* Preferences Tab */}
            {activeTab === 'preferences' && (
              <>
                <div className="admin-filters">
                  <select
                    value={filters.autoPayEnabled}
                    onChange={(e) => handleFilterChange('autoPayEnabled', e.target.value)}
                    className="admin-filter-select"
                  >
                    <option value="">All Preferences</option>
                    <option value="true">Auto-pay Enabled</option>
                    <option value="false">Auto-pay Disabled</option>
                  </select>
                  <input
                    type="text"
                    placeholder="Filter by User ID"
                    value={filters.userId}
                    onChange={(e) => handleFilterChange('userId', e.target.value)}
                    className="admin-filter-input"
                  />
                  <input
                    type="text"
                    placeholder="Filter by Group ID"
                    value={filters.groupId}
                    onChange={(e) => handleFilterChange('groupId', e.target.value)}
                    className="admin-filter-input"
                  />
                </div>

                <div className="admin-stats">
                  <div className="stat-card">
                    <span className="stat-label">Total Preferences</span>
                    <span className="stat-value">{pagination.total || preferences.length}</span>
                  </div>
                </div>

                <div className="admin-table-container">
                  <table className="admin-table">
                    <thead>
                      <tr>
                        <th>User</th>
                        <th>Group</th>
                        <th>Auto-pay Enabled</th>
                        <th>Payment Method</th>
                        <th>Provider</th>
                        <th>Payment Timing</th>
                        <th>Updated At</th>
                      </tr>
                    </thead>
                    <tbody>
                      {preferences.length === 0 ? (
                        <tr>
                          <td colSpan="7" style={{ textAlign: 'center', padding: '32px' }}>
                            No preferences found
                          </td>
                        </tr>
                      ) : (
                        preferences.map(pref => (
                          <tr key={pref.id}>
                            <td>
                              <div>
                                <div style={{ fontWeight: 600 }}>{pref.user?.name || 'N/A'}</div>
                                <div style={{ fontSize: '0.875rem', color: '#64748b' }}>
                                  {pref.user?.email || 'N/A'}
                                </div>
                              </div>
                            </td>
                            <td>
                              {pref.group ? (
                                <div>
                                  <div style={{ fontWeight: 600 }}>{pref.group.name}</div>
                                  <div style={{ fontSize: '0.875rem', color: '#64748b' }}>
                                    {pref.group.group_type}
                                  </div>
                                </div>
                              ) : (
                                'All Groups'
                              )}
                            </td>
                            <td>
                              <span className={`badge badge-${pref.auto_pay_enabled ? 'success' : 'secondary'}`}>
                                {pref.auto_pay_enabled ? 'Enabled' : 'Disabled'}
                              </span>
                            </td>
                            <td>{pref.payment_method_type || 'N/A'}</td>
                            <td>{pref.provider || 'N/A'}</td>
                            <td>{pref.payment_timing || 'N/A'}</td>
                            <td>{formatDate(pref.updated_at)}</td>
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
          </>
        )}
      </div>

      {/* Birthday Payment Modal */}
      {showBirthdayModal && (
        <div className="admin-modal-overlay" onClick={() => setShowBirthdayModal(false)}>
          <div className="admin-modal" onClick={(e) => e.stopPropagation()}>
            <div className="admin-modal-header">
              <h2>Process Birthday Payments</h2>
              <button className="admin-modal-close" onClick={() => setShowBirthdayModal(false)}>
                ✕
              </button>
            </div>
            <div className="admin-modal-body">
              <div className="admin-form-group">
                <label>User ID *</label>
                <input
                  type="text"
                  value={birthdayUserId}
                  onChange={(e) => setBirthdayUserId(e.target.value)}
                  placeholder="Enter user ID"
                  className="admin-form-input"
                />
              </div>
              <div className="admin-form-group">
                <label>Group ID *</label>
                <input
                  type="text"
                  value={birthdayGroupId}
                  onChange={(e) => setBirthdayGroupId(e.target.value)}
                  placeholder="Enter group ID"
                  className="admin-form-input"
                />
              </div>
            </div>
            <div className="admin-modal-footer">
              <button 
                className="btn btn-secondary" 
                onClick={() => {
                  setShowBirthdayModal(false)
                  setBirthdayUserId('')
                  setBirthdayGroupId('')
                }}
              >
                Cancel
              </button>
              <button 
                className="btn btn-primary" 
                onClick={handleProcessBirthdayPayments}
                disabled={processingBirthday || !birthdayUserId || !birthdayGroupId}
              >
                {processingBirthday ? 'Processing...' : 'Process Payments'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Subscription Payment Modal */}
      {showSubscriptionModal && (
        <div className="admin-modal-overlay" onClick={() => setShowSubscriptionModal(false)}>
          <div className="admin-modal" onClick={(e) => e.stopPropagation()}>
            <div className="admin-modal-header">
              <h2>Process Subscription Payments</h2>
              <button className="admin-modal-close" onClick={() => setShowSubscriptionModal(false)}>
                ✕
              </button>
            </div>
            <div className="admin-modal-body">
              <div className="admin-form-group">
                <label>Group ID *</label>
                <input
                  type="text"
                  value={subscriptionGroupId}
                  onChange={(e) => setSubscriptionGroupId(e.target.value)}
                  placeholder="Enter group ID"
                  className="admin-form-input"
                />
              </div>
            </div>
            <div className="admin-modal-footer">
              <button 
                className="btn btn-secondary" 
                onClick={() => {
                  setShowSubscriptionModal(false)
                  setSubscriptionGroupId('')
                }}
              >
                Cancel
              </button>
              <button 
                className="btn btn-primary" 
                onClick={handleProcessSubscriptionPayments}
                disabled={processingSubscription || !subscriptionGroupId}
              >
                {processingSubscription ? 'Processing...' : 'Process Payments'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* General Payment Modal */}
      {showGeneralModal && (
        <div className="admin-modal-overlay" onClick={() => setShowGeneralModal(false)}>
          <div className="admin-modal" onClick={(e) => e.stopPropagation()}>
            <div className="admin-modal-header">
              <h2>Process General Group Payments</h2>
              <button className="admin-modal-close" onClick={() => setShowGeneralModal(false)}>
                ✕
              </button>
            </div>
            <div className="admin-modal-body">
              <div className="admin-form-group">
                <label>Group ID *</label>
                <input
                  type="text"
                  value={generalGroupId}
                  onChange={(e) => setGeneralGroupId(e.target.value)}
                  placeholder="Enter group ID"
                  className="admin-form-input"
                />
              </div>
            </div>
            <div className="admin-modal-footer">
              <button 
                className="btn btn-secondary" 
                onClick={() => {
                  setShowGeneralModal(false)
                  setGeneralGroupId('')
                }}
              >
                Cancel
              </button>
              <button 
                className="btn btn-primary" 
                onClick={handleProcessGeneralPayments}
                disabled={processingGeneral || !generalGroupId}
              >
                {processingGeneral ? 'Processing...' : 'Process Payments'}
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
    success: 'success',
    pending: 'warning',
    failed: 'danger',
    retry: 'info',
  }
  return badges[status] || 'secondary'
}

function getTypeBadge(type) {
  const badges = {
    birthday: 'primary',
    subscription: 'info',
    general: 'success',
  }
  return badges[type] || 'secondary'
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
