import { useEffect, useState } from 'react'
import { adminApi } from '../../services/adminApi'
import AdminLayout from '../../components/admin/AdminLayout'
import './AdminPages.css'

export default function AdminDashboard() {
  const [stats, setStats] = useState(null)
  const [todayBirthdays, setTodayBirthdays] = useState(0)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [triggeringReminders, setTriggeringReminders] = useState(false)
  const [triggeringWishes, setTriggeringWishes] = useState(false)
  const [sendingNewsletter, setSendingNewsletter] = useState(false)
  const [triggeringOverdueReminders, setTriggeringOverdueReminders] = useState(false)
  const [sendingMerryChristmas, setSendingMerryChristmas] = useState(false)
  const [sendingBetaInvitations, setSendingBetaInvitations] = useState(false)
  const [testingBetaInvitation, setTestingBetaInvitation] = useState(false)
  const [testEmail, setTestEmail] = useState('')
  const [testName, setTestName] = useState('')
  const [actionMessage, setActionMessage] = useState(null)

  useEffect(() => {
    loadStats()
    loadTodayBirthdays()
  }, [])

  const loadStats = async () => {
    try {
      setLoading(true)
      const data = await adminApi.getStats()
      setStats(data)
      setError(null)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const loadTodayBirthdays = async () => {
    try {
      const data = await adminApi.getTodayBirthdays({ limit: 1 })
      setTodayBirthdays(data.pagination?.total || 0)
    } catch (err) {
      // Silently fail for birthdays - don't break the dashboard
      console.error('Failed to load today\'s birthdays:', err)
    }
  }

  const handleTriggerReminders = async () => {
    try {
      setTriggeringReminders(true)
      setActionMessage(null)
      await adminApi.triggerReminders()
      setActionMessage({ type: 'success', text: 'Reminders triggered successfully!' })
    } catch (err) {
      setActionMessage({ type: 'error', text: err.message || 'Failed to trigger reminders' })
    } finally {
      setTriggeringReminders(false)
      setTimeout(() => setActionMessage(null), 5000)
    }
  }

  const handleTriggerBirthdayWishes = async () => {
    try {
      setTriggeringWishes(true)
      setActionMessage(null)
      await adminApi.triggerBirthdayWishes()
      setActionMessage({ type: 'success', text: 'Birthday wishes triggered successfully!' })
    } catch (err) {
      setActionMessage({ type: 'error', text: err.message || 'Failed to trigger birthday wishes' })
    } finally {
      setTriggeringWishes(false)
      setTimeout(() => setActionMessage(null), 5000)
    }
  }

  const handleSendMonthlyNewsletter = async () => {
    try {
      setSendingNewsletter(true)
      setActionMessage(null)
      await adminApi.sendMonthlyNewsletter()
      setActionMessage({ type: 'success', text: 'Monthly newsletter sent successfully!' })
    } catch (err) {
      setActionMessage({ type: 'error', text: err.message || 'Failed to send monthly newsletter' })
    } finally {
      setSendingNewsletter(false)
      setTimeout(() => setActionMessage(null), 5000)
    }
  }

  const handleTriggerOverdueReminders = async () => {
    try {
      setTriggeringOverdueReminders(true)
      setActionMessage(null)
      await adminApi.triggerOverdueReminders()
      setActionMessage({ type: 'success', text: 'Overdue reminders triggered successfully!' })
    } catch (err) {
      setActionMessage({ type: 'error', text: err.message || 'Failed to trigger overdue reminders' })
    } finally {
      setTriggeringOverdueReminders(false)
      setTimeout(() => setActionMessage(null), 5000)
    }
  }

  const handleSendMerryChristmas = async () => {
    try {
      setSendingMerryChristmas(true)
      setActionMessage(null)
      await adminApi.sendMerryChristmas()
      setActionMessage({ type: 'success', text: 'Merry Christmas notifications sent successfully!' })
    } catch (err) {
      setActionMessage({ type: 'error', text: err.message || 'Failed to send Merry Christmas notifications' })
    } finally {
      setSendingMerryChristmas(false)
      setTimeout(() => setActionMessage(null), 5000)
    }
  }

  const handleSendBetaInvitations = async () => {
    try {
      setSendingBetaInvitations(true)
      setActionMessage(null)
      await adminApi.sendBetaInvitations()
      setActionMessage({ type: 'success', text: 'Beta invitations sent successfully!' })
    } catch (err) {
      setActionMessage({ type: 'error', text: err.message || 'Failed to send beta invitations' })
    } finally {
      setSendingBetaInvitations(false)
      setTimeout(() => setActionMessage(null), 5000)
    }
  }

  const handleTestBetaInvitation = async () => {
    if (!testEmail.trim()) {
      setActionMessage({ type: 'error', text: 'Email is required' })
      setTimeout(() => setActionMessage(null), 5000)
      return
    }

    try {
      setTestingBetaInvitation(true)
      setActionMessage(null)
      const data = {
        email: testEmail.trim(),
        ...(testName.trim() && { name: testName.trim() })
      }
      await adminApi.testBetaInvitation(data)
      setActionMessage({ type: 'success', text: 'Test beta invitation sent successfully!' })
      setTestEmail('')
      setTestName('')
    } catch (err) {
      setActionMessage({ type: 'error', text: err.message || 'Failed to send test beta invitation' })
    } finally {
      setTestingBetaInvitation(false)
      setTimeout(() => setActionMessage(null), 5000)
    }
  }

  if (loading) {
    return (
      <AdminLayout>
        <div className="admin-loading">Loading dashboard...</div>
      </AdminLayout>
    )
  }

  if (error) {
    return (
      <AdminLayout>
        <div className="admin-error">Error: {error}</div>
      </AdminLayout>
    )
  }

  return (
    <AdminLayout>
      <div className="admin-page">
        <div className="admin-page-header">
          <div className="admin-page-header-content">
            <div>
              <h1>Admin Dashboard</h1>
              <p>System overview and statistics</p>
            </div>
            <div className="header-actions">
              <button
                onClick={handleTriggerReminders}
                disabled={triggeringReminders}
                className="btn-sm btn-primary"
              >
                {triggeringReminders ? 'Triggering...' : 'Trigger Reminders'}
              </button>
              <button
                onClick={handleTriggerBirthdayWishes}
                disabled={triggeringWishes}
                className="btn-sm btn-primary"
              >
                {triggeringWishes ? 'Triggering...' : 'Trigger Birthday Wishes'}
              </button>
              <button
                onClick={handleSendMonthlyNewsletter}
                disabled={sendingNewsletter}
                className="btn-sm btn-primary"
              >
                {sendingNewsletter ? 'Sending...' : 'Send Monthly Newsletter'}
              </button>
              <button
                onClick={handleTriggerOverdueReminders}
                disabled={triggeringOverdueReminders}
                className="btn-sm btn-primary"
              >
                {triggeringOverdueReminders ? 'Triggering...' : 'Trigger Overdue Reminders'}
              </button>
              <button
                onClick={handleSendMerryChristmas}
                disabled={sendingMerryChristmas}
                className="btn-sm btn-primary"
              >
                {sendingMerryChristmas ? 'Sending...' : 'Send Merry Christmas'}
              </button>
              <button
                onClick={handleSendBetaInvitations}
                disabled={sendingBetaInvitations}
                className="btn-sm btn-primary"
              >
                {sendingBetaInvitations ? 'Sending...' : 'Send Beta Invitations'}
              </button>
            </div>
          </div>
          <div className="test-beta-invitation-form" style={{ marginTop: '1rem', padding: '1rem', backgroundColor: '#f5f5f5', borderRadius: '8px', display: 'flex', gap: '0.5rem', alignItems: 'flex-end', flexWrap: 'wrap' }}>
            <div style={{ flex: '1', minWidth: '200px' }}>
              <label style={{ display: 'block', marginBottom: '0.25rem', fontSize: '0.875rem', fontWeight: '500' }}>
                Test Email <span style={{ color: 'red' }}>*</span>
              </label>
              <input
                type="email"
                value={testEmail}
                onChange={(e) => setTestEmail(e.target.value)}
                placeholder="nazaalistic@gmail.com"
                style={{ width: '100%', padding: '0.5rem', border: '1px solid #ddd', borderRadius: '4px', fontSize: '0.875rem' }}
                disabled={testingBetaInvitation}
              />
            </div>
            <div style={{ flex: '1', minWidth: '150px' }}>
              <label style={{ display: 'block', marginBottom: '0.25rem', fontSize: '0.875rem', fontWeight: '500' }}>
                Name (optional)
              </label>
              <input
                type="text"
                value={testName}
                onChange={(e) => setTestName(e.target.value)}
                placeholder="Chinaza"
                style={{ width: '100%', padding: '0.5rem', border: '1px solid #ddd', borderRadius: '4px', fontSize: '0.875rem' }}
                disabled={testingBetaInvitation}
              />
            </div>
            <button
              onClick={handleTestBetaInvitation}
              disabled={testingBetaInvitation || !testEmail.trim()}
              className="btn-sm btn-primary"
            >
              {testingBetaInvitation ? 'Sending...' : 'Test Beta Invitation'}
            </button>
          </div>
          {actionMessage && (
            <div className={`action-message ${actionMessage.type}`}>
              {actionMessage.text}
            </div>
          )}
        </div>

        <div className="stats-grid">
          {/* Users Stats */}
          <div className="stat-card">
            <div className="stat-icon users">👥</div>
            <div className="stat-content">
              <h3>Total Users</h3>
              <div className="stat-value">{stats?.users?.total || 0}</div>
              <div className="stat-details">
                <span className="stat-detail-item">
                  ✓ Verified: {stats?.users?.verified || 0}
                </span>
                <span className="stat-detail-item">
                  👑 Admins: {stats?.users?.admins || 0}
                </span>
                <span className="stat-detail-item highlight">
                  📈 New (30d): {stats?.users?.recent_30_days || 0}
                </span>
              </div>
            </div>
          </div>

          {/* Groups Stats */}
          <div className="stat-card">
            <div className="stat-icon groups">👨‍👩‍👧‍👦</div>
            <div className="stat-content">
              <h3>Groups</h3>
              <div className="stat-value">{stats?.groups?.total || 0}</div>
              <div className="stat-details">
                <span className="stat-detail-item">
                  ✓ Active: {stats?.groups?.active || 0}
                </span>
                <span className="stat-detail-item highlight">
                  📈 New (30d): {stats?.groups?.recent_30_days || 0}
                </span>
              </div>
            </div>
          </div>

          {/* Contributions Stats */}
          <div className="stat-card">
            <div className="stat-icon contributions">🎁</div>
            <div className="stat-content">
              <h3>Contributions</h3>
              <div className="stat-value">{stats?.contributions?.total || 0}</div>
              <div className="stat-details">
                <span className="stat-detail-item">
                  ❌ Not Received: {stats?.contributions?.not_received || 0}
                </span>
                <span className="stat-detail-item">
                  ⏳ Paid (Awaiting Confirmation): {stats?.contributions?.paid || 0}
                </span>
                <span className="stat-detail-item highlight">
                  ✓ Confirmed: {stats?.contributions?.confirmed || 0}
                </span>
              </div>
            </div>
          </div>

          {/* Today's Birthdays Stats */}
          <div className="stat-card">
            <div className="stat-icon birthdays">🎂</div>
            <div className="stat-content">
              <h3>Today's Birthday</h3>
              <div className="stat-value">{todayBirthdays}</div>
              <div className="stat-details">
                <span className="stat-detail-item highlight">
                  🎉 Celebrating Today
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </AdminLayout>
  )
}

function formatCurrency(amount) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 2,
  }).format(amount)
}

