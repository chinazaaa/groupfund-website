import { useEffect, useState } from 'react'
import { adminApi } from '../../services/adminApi'
import AdminLayout from '../../components/admin/AdminLayout'
import './AdminPages.css'

export default function AdminBirthdays() {
  const [birthdays, setBirthdays] = useState([])
  const [pagination, setPagination] = useState({ page: 1, limit: 50, total: 0, totalPages: 0 })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    loadBirthdays()
  }, [pagination.page])

  const loadBirthdays = async () => {
    try {
      setLoading(true)
      const params = {
        page: pagination.page,
        limit: pagination.limit,
      }
      const data = await adminApi.getTodayBirthdays(params)
      setBirthdays(data.birthdays || [])
      setPagination(data.pagination || pagination)
      setError(null)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const formatBirthday = (birthdayString) => {
    if (!birthdayString) return 'N/A'
    const date = new Date(birthdayString)
    return date.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    })
  }

  const getAge = (birthdayString) => {
    if (!birthdayString) return 'N/A'
    const today = new Date()
    const birthDate = new Date(birthdayString)
    let age = today.getFullYear() - birthDate.getFullYear()
    const monthDiff = today.getMonth() - birthDate.getMonth()
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--
    }
    return age
  }

  return (
    <AdminLayout>
      <div className="admin-page">
        <div className="admin-page-header">
          <h1>Today's Birthdays 🎂</h1>
          <p>View all users celebrating their birthday today</p>
        </div>

        {error && <div className="admin-error">Error: {error}</div>}

        {loading ? (
          <div className="admin-loading">Loading birthdays...</div>
        ) : (
          <>
            {birthdays.length === 0 ? (
              <div className="admin-empty-state">
                <p>No birthdays today! 🎉</p>
              </div>
            ) : (
              <>
                <div className="admin-stats-card" style={{ marginBottom: '20px', padding: '15px' }}>
                  <strong>Total Birthdays Today: {pagination.total}</strong>
                </div>

                <div className="admin-table-container">
                  <table className="admin-table">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Birthday</th>
                        <th>Age</th>
                        <th>Verified</th>
                        <th>Status</th>
                        <th>Groups</th>
                        <th>Joined</th>
                      </tr>
                    </thead>
                    <tbody>
                      {birthdays.map(user => (
                        <tr key={user.id}>
                          <td>
                            <strong>{user.name}</strong>
                          </td>
                          <td>{user.email}</td>
                          <td>{user.phone || 'N/A'}</td>
                          <td>{formatBirthday(user.birthday)}</td>
                          <td>
                            <span className="badge badge-info">
                              {getAge(user.birthday)} years
                            </span>
                          </td>
                          <td>
                            <span className={`badge ${user.is_verified ? 'badge-success' : 'badge-warning'}`}>
                              {user.is_verified ? '✓ Verified' : '✗ Unverified'}
                            </span>
                          </td>
                          <td>
                            <span className={`badge ${user.is_active !== false ? 'badge-success' : 'badge-danger'}`}>
                              {user.is_active !== false ? 'Active' : 'Inactive'}
                            </span>
                          </td>
                          <td>{user.group_count || 0}</td>
                          <td>{formatDate(user.created_at)}</td>
                        </tr>
                      ))}
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
                )}
              </>
            )}
          </>
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
  })
}
