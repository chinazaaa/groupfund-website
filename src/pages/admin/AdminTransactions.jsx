import { useEffect, useState } from 'react'
import { adminApi } from '../../services/adminApi'
import AdminLayout from '../../components/admin/AdminLayout'
import './AdminPages.css'

export default function AdminTransactions() {
  const [transactions, setTransactions] = useState([])
  const [pagination, setPagination] = useState({ page: 1, limit: 50, total: 0, totalPages: 0 })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [filters, setFilters] = useState({ type: '', status: '' })

  useEffect(() => {
    loadTransactions()
  }, [pagination.page, filters])

  const loadTransactions = async () => {
    try {
      setLoading(true)
      const params = {
        page: pagination.page,
        limit: pagination.limit,
        ...(filters.type && { type: filters.type }),
        ...(filters.status && { status: filters.status }),
      }
      const data = await adminApi.getTransactions(params)
      setTransactions(data.transactions || [])
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
          <h1>Transactions</h1>
          <p>View all system transactions</p>
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
            <option value="credit">Credit</option>
            <option value="debit">Debit</option>
            <option value="contribution">Contribution</option>
            <option value="birthday_gift">Birthday Gift</option>
          </select>
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
            <option value="completed">Completed</option>
            <option value="failed">Failed</option>
          </select>
        </div>

        {error && <div className="admin-error">Error: {error}</div>}

        {loading ? (
          <div className="admin-loading">Loading transactions...</div>
        ) : (
          <>
            <div className="admin-stats">
              <div className="stat-card">
                <span className="stat-label">Total Transactions</span>
                <span className="stat-value">{pagination.total || transactions.length}</span>
              </div>
            </div>

            <div className="admin-table-container">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>User</th>
                    <th>Group</th>
                    <th>Status</th>
                    <th>Description</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map(transaction => (
                    <tr key={transaction.id}>
                      <td>
                        <span className={`badge badge-${getTypeBadge(transaction.type)}`}>
                          {transaction.type}
                        </span>
                      </td>
                      <td>{formatCurrency(transaction.amount)}</td>
                      <td>{transaction.user_name} ({transaction.user_email})</td>
                      <td>{transaction.group_name || 'N/A'}</td>
                      <td>
                        <span className={`badge badge-${getStatusBadge(transaction.status)}`}>
                          {transaction.status}
                        </span>
                      </td>
                      <td>{transaction.description || 'N/A'}</td>
                      <td>{formatDate(transaction.created_at)}</td>
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

function getTypeBadge(type) {
  const badges = {
    credit: 'success',
    debit: 'danger',
    contribution: 'info',
    birthday_gift: 'primary',
  }
  return badges[type] || 'secondary'
}

function getStatusBadge(status) {
  const badges = {
    completed: 'success',
    pending: 'warning',
    failed: 'danger',
  }
  return badges[status] || 'secondary'
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
    hour: '2-digit',
    minute: '2-digit',
  })
}

