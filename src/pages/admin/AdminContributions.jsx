import { useEffect, useState } from 'react'
import { adminApi } from '../../services/adminApi'
import AdminLayout from '../../components/admin/AdminLayout'
import './AdminPages.css'

export default function AdminContributions() {
  const [contributions, setContributions] = useState([])
  const [pagination, setPagination] = useState({ page: 1, limit: 50, total: 0, totalPages: 0 })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [filters, setFilters] = useState({ status: '' })

  useEffect(() => {
    loadContributions()
  }, [pagination.page, filters])

  const loadContributions = async () => {
    try {
      setLoading(true)
      const params = {
        page: pagination.page,
        limit: pagination.limit,
        ...(filters.status && { status: filters.status }),
      }
      const data = await adminApi.getContributions(params)
      setContributions(data.contributions || [])
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
          <h1>Group Contributions</h1>
          <p>View all group contributions - birthdays, subscriptions, and general groups</p>
        </div>

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
            <option value="not_paid">Not Paid</option>
            <option value="paid">Paid - Awaiting Confirmation</option>
            <option value="confirmed">Confirmed</option>
            <option value="not_received">Not Received</option>
          </select>
        </div>

        {error && <div className="admin-error">Error: {error}</div>}

        {loading ? (
          <div className="admin-loading">Loading contributions...</div>
        ) : (
          <>
            <div className="admin-stats">
              <div className="stat-card">
                <span className="stat-label">Total Contributions</span>
                <span className="stat-value">{pagination.total || contributions.length}</span>
              </div>
            </div>

            <div className="admin-table-container">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Amount</th>
                    <th>Type</th>
                    <th>User</th>
                    <th>Contributor</th>
                    <th>Group</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Payment Method</th>
                    <th>Note</th>
                  </tr>
                </thead>
                <tbody>
                  {contributions.map(contribution => (
                    <tr key={contribution.id}>
                      <td>{formatCurrency(contribution.amount, contribution.currency || 'NGN')}</td>
                      <td>
                        <span className={`badge ${getGroupTypeBadge(contribution.group_type)}`}>
                          {getGroupTypeLabel(contribution.group_type)}
                        </span>
                      </td>
                      <td>{contribution.birthday_user_name}</td>
                      <td>{contribution.contributor_name}</td>
                      <td>{contribution.group_name}</td>
                      <td>{formatDate(contribution.contribution_date)}</td>
                      <td>
                        <span className={`badge badge-${getStatusBadge(contribution.status)}`}>
                          {getStatusLabel(contribution.status)}
                        </span>
                      </td>
                      <td>
                        {contribution.payment_info ? (
                          <div>
                            <div>
                              <span className={`badge ${contribution.payment_info.is_auto_pay ? 'badge-success' : 'badge-secondary'}`}>
                                {contribution.payment_info.is_auto_pay ? 'Auto-pay' : 'Manual'}
                              </span>
                            </div>
                            {contribution.payment_info.provider && (
                              <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '4px' }}>
                                {contribution.payment_info.provider}
                              </div>
                            )}
                          </div>
                        ) : (
                          <span className="badge badge-secondary">Manual</span>
                        )}
                      </td>
                      <td>{contribution.note || 'N/A'}</td>
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

function getStatusBadge(status) {
  const badges = {
    not_paid: 'warning',
    paid: 'warning',
    confirmed: 'success',
    not_received: 'danger',
  }
  return badges[status] || 'secondary'
}

function getStatusLabel(status) {
  const labels = {
    not_paid: 'Not Paid',
    paid: 'Paid - Awaiting Confirmation',
    confirmed: 'Confirmed',
    not_received: 'Not Received',
  }
  return labels[status] || status
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

