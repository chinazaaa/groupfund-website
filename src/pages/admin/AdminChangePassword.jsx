import { useState } from 'react'
import { adminApi } from '../../services/adminApi'
import AdminLayout from '../../components/admin/AdminLayout'
import './AdminPages.css'

export default function AdminChangePassword() {
  const [step, setStep] = useState(1) // 1: Request OTP, 2: Change Password
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [otp, setOtp] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(false)
  const [otpSent, setOtpSent] = useState(false)

  const handleRequestOTP = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setSuccess(false)

    try {
      await adminApi.requestPasswordChangeOTP(currentPassword)
      setOtpSent(true)
      setStep(2)
    } catch (err) {
      setError(err.message || 'Failed to send OTP. Please check your current password.')
    } finally {
      setLoading(false)
    }
  }

  const handleChangePassword = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setSuccess(false)

    // Validation
    if (newPassword.length < 6) {
      setError('New password must be at least 6 characters long')
      setLoading(false)
      return
    }

    if (newPassword !== confirmPassword) {
      setError('New password and confirm password do not match')
      setLoading(false)
      return
    }

    if (newPassword === currentPassword) {
      setError('New password must be different from current password')
      setLoading(false)
      return
    }

    if (otp.length !== 6) {
      setError('OTP must be 6 digits')
      setLoading(false)
      return
    }

    try {
      await adminApi.changePassword(currentPassword, newPassword, otp)
      setSuccess(true)
      // Reset form
      setCurrentPassword('')
      setNewPassword('')
      setConfirmPassword('')
      setOtp('')
      setStep(1)
      setOtpSent(false)
    } catch (err) {
      setError(err.message || 'Failed to change password. Please check your OTP and try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleReset = () => {
    setStep(1)
    setCurrentPassword('')
    setNewPassword('')
    setConfirmPassword('')
    setOtp('')
    setError(null)
    setSuccess(false)
    setOtpSent(false)
  }

  return (
    <AdminLayout>
      <div className="admin-page">
        <div className="admin-page-header">
          <h1>Change Password</h1>
          <p>Update your admin account password</p>
        </div>

        {success && (
          <div className="admin-message admin-success" style={{ marginBottom: '24px' }}>
            Password changed successfully! You can now use your new password to log in.
          </div>
        )}

        {error && (
          <div className="admin-message admin-error" style={{ marginBottom: '24px' }}>
            {error}
          </div>
        )}

        {step === 1 ? (
          <form onSubmit={handleRequestOTP} className="admin-form">
            <div className="admin-form-group">
              <label htmlFor="currentPassword">Current Password</label>
              <input
                type="password"
                id="currentPassword"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                className="admin-form-input"
                required
                placeholder="Enter your current password"
              />
            </div>

            <div className="admin-form-actions">
              <button type="submit" className="btn btn-primary" disabled={loading}>
                {loading ? 'Sending OTP...' : 'Request OTP'}
              </button>
            </div>
          </form>
        ) : (
          <form onSubmit={handleChangePassword} className="admin-form">
            {otpSent && (
              <div className="admin-message admin-success" style={{ marginBottom: '24px' }}>
                OTP has been sent to your email. Please check your inbox.
              </div>
            )}

            <div className="admin-form-group">
              <label htmlFor="currentPasswordStep2">Current Password</label>
              <input
                type="password"
                id="currentPasswordStep2"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                className="admin-form-input"
                required
                placeholder="Enter your current password"
              />
            </div>

            <div className="admin-form-group">
              <label htmlFor="newPassword">New Password</label>
              <input
                type="password"
                id="newPassword"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="admin-form-input"
                required
                minLength={6}
                placeholder="Enter new password (min 6 characters)"
              />
              <small style={{ color: '#64748b', fontSize: '0.875rem', marginTop: '4px', display: 'block' }}>
                Password must be at least 6 characters long
              </small>
            </div>

            <div className="admin-form-group">
              <label htmlFor="confirmPassword">Confirm New Password</label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="admin-form-input"
                required
                minLength={6}
                placeholder="Confirm new password"
              />
            </div>

            <div className="admin-form-group">
              <label htmlFor="otp">OTP (6 digits)</label>
              <input
                type="text"
                id="otp"
                value={otp}
                onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
                className="admin-form-input"
                required
                maxLength={6}
                placeholder="Enter 6-digit OTP from email"
                style={{ letterSpacing: '8px', fontFamily: 'monospace', fontSize: '1.2rem', textAlign: 'center' }}
              />
              <small style={{ color: '#64748b', fontSize: '0.875rem', marginTop: '4px', display: 'block' }}>
                Check your email for the OTP code
              </small>
            </div>

            <div className="admin-form-actions">
              <button type="button" className="btn btn-secondary" onClick={handleReset} disabled={loading}>
                Cancel
              </button>
              <button type="submit" className="btn btn-primary" disabled={loading}>
                {loading ? 'Changing Password...' : 'Change Password'}
              </button>
            </div>
          </form>
        )}
      </div>
    </AdminLayout>
  )
}
