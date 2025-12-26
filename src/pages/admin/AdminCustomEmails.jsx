import { useState } from 'react'
import { adminApi } from '../../services/adminApi'
import AdminLayout from '../../components/admin/AdminLayout'
import './AdminPages.css'

export default function AdminCustomEmails() {
  const [subject, setSubject] = useState('')
  const [html, setHtml] = useState('')
  const [recipientType, setRecipientType] = useState('waitlist')
  const [customEmail, setCustomEmail] = useState('')
  const [previewHtml, setPreviewHtml] = useState('')
  const [showPreview, setShowPreview] = useState(false)
  const [loading, setLoading] = useState(false)
  const [previewLoading, setPreviewLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [sendResults, setSendResults] = useState(null)

  const handlePreview = async () => {
    if (!subject.trim()) {
      setError('Subject is required')
      setTimeout(() => setError(''), 5000)
      return
    }
    if (!html.trim()) {
      setError('HTML content is required')
      setTimeout(() => setError(''), 5000)
      return
    }

    try {
      setPreviewLoading(true)
      setError('')
      const result = await adminApi.previewEmail(subject, html)
      setPreviewHtml(result.preview || result.html || html)
      setShowPreview(true)
    } catch (err) {
      setError(err.message || 'Failed to preview email')
      setTimeout(() => setError(''), 5000)
    } finally {
      setPreviewLoading(false)
    }
  }

  const handleSend = async () => {
    if (!subject.trim()) {
      setError('Subject is required')
      setTimeout(() => setError(''), 5000)
      return
    }
    if (!html.trim()) {
      setError('HTML content is required')
      setTimeout(() => setError(''), 5000)
      return
    }
    if (recipientType === 'custom' && !customEmail.trim()) {
      setError('Custom email address is required')
      setTimeout(() => setError(''), 5000)
      return
    }
    if (recipientType === 'custom' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(customEmail.trim())) {
      setError('Please enter a valid email address')
      setTimeout(() => setError(''), 5000)
      return
    }

    // Confirm before sending
    const recipientLabel = {
      waitlist: 'all waitlist members',
      group_admins: 'all group admins',
      everyone: 'everyone in the database',
      custom: `the email address: ${customEmail}`
    }[recipientType]

    const confirmed = window.confirm(
      `Are you sure you want to send this email to ${recipientLabel}?\n\nSubject: ${subject}\n\nThis action cannot be undone.`
    )

    if (!confirmed) {
      return
    }

    try {
      setLoading(true)
      setError('')
      setSuccess('')
      setSendResults(null)

      const result = await adminApi.sendCustomEmail(
        subject,
        html,
        recipientType,
        recipientType === 'custom' ? customEmail : undefined
      )

      setSuccess(result.message || 'Email sent successfully!')
      setSendResults(result.results || null)
      
      // Reset form after successful send
      setSubject('')
      setHtml('')
      setRecipientType('waitlist')
      setCustomEmail('')
      
      setTimeout(() => {
        setSuccess('')
        setSendResults(null)
      }, 10000)
    } catch (err) {
      setError(err.message || 'Failed to send email')
      setTimeout(() => setError(''), 5000)
    } finally {
      setLoading(false)
    }
  }

  const getRecipientCountLabel = () => {
    switch (recipientType) {
      case 'waitlist':
        return 'All waitlist members'
      case 'group_admins':
        return 'All group admins'
      case 'everyone':
        return 'Everyone in the database'
      case 'custom':
        return 'Custom email address'
      default:
        return ''
    }
  }

  return (
    <AdminLayout>
      <div className="admin-page">
        <div className="admin-page-header">
          <div className="admin-page-header-content">
            <div>
              <h1>Custom Email</h1>
              <p>Send custom email messages to selected recipients</p>
            </div>
          </div>
        </div>

        {error && (
          <div className="admin-notification error">
            {error}
          </div>
        )}

        {success && (
          <div className="admin-notification success">
            {success}
            {sendResults && (
              <div style={{ marginTop: '12px', fontSize: '0.9rem' }}>
                <div>Total: {sendResults.total || 0}</div>
                <div style={{ color: '#059669' }}>Sent: {sendResults.sent || 0}</div>
                {sendResults.failed > 0 && (
                  <div style={{ color: '#dc2626' }}>Failed: {sendResults.failed || 0}</div>
                )}
                {sendResults.failed_emails && sendResults.failed_emails.length > 0 && (
                  <div style={{ marginTop: '8px', fontSize: '0.85rem' }}>
                    <strong>Failed emails:</strong>
                    <ul style={{ margin: '4px 0', paddingLeft: '20px' }}>
                      {sendResults.failed_emails.map((email, idx) => (
                        <li key={idx}>{email}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {/* Recipient Selection */}
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#0f172a' }}>
              Recipient Type <span style={{ color: 'red' }}>*</span>
            </label>
            <select
              value={recipientType}
              onChange={(e) => {
                setRecipientType(e.target.value)
                if (e.target.value !== 'custom') {
                  setCustomEmail('')
                }
              }}
              className="admin-filter-select"
              style={{ width: '100%', maxWidth: '400px' }}
            >
              <option value="waitlist">Waitlist Members</option>
              <option value="group_admins">Group Admins</option>
              <option value="everyone">Everyone in Database</option>
              <option value="custom">Custom Email</option>
            </select>
            <p style={{ marginTop: '8px', fontSize: '0.875rem', color: '#64748b' }}>
              {getRecipientCountLabel()}
            </p>
          </div>

          {/* Custom Email Input */}
          {recipientType === 'custom' && (
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#0f172a' }}>
                Email Address <span style={{ color: 'red' }}>*</span>
              </label>
              <input
                type="email"
                value={customEmail}
                onChange={(e) => setCustomEmail(e.target.value)}
                placeholder="user@example.com"
                className="admin-search-input"
                style={{ maxWidth: '400px' }}
              />
            </div>
          )}

          {/* Subject Input */}
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#0f172a' }}>
              Subject <span style={{ color: 'red' }}>*</span>
            </label>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Email subject line"
              className="admin-search-input"
            />
          </div>

          {/* HTML Content Input */}
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#0f172a' }}>
              HTML Content <span style={{ color: 'red' }}>*</span>
            </label>
            <textarea
              value={html}
              onChange={(e) => setHtml(e.target.value)}
              placeholder="<html><body><h1>Your email content here</h1></body></html>"
              rows={15}
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid #e0e0e0',
                borderRadius: '8px',
                fontFamily: 'monospace',
                fontSize: '0.9rem',
                resize: 'vertical',
              }}
            />
            <p style={{ marginTop: '8px', fontSize: '0.875rem', color: '#64748b' }}>
              Enter your HTML email content. You can use HTML tags for formatting.
            </p>
          </div>

          {/* Action Buttons */}
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <button
              onClick={handlePreview}
              disabled={previewLoading || !subject.trim() || !html.trim()}
              className="btn-sm btn-secondary"
            >
              {previewLoading ? 'Loading Preview...' : 'Preview Email'}
            </button>
            <button
              onClick={handleSend}
              disabled={loading || !subject.trim() || !html.trim() || (recipientType === 'custom' && !customEmail.trim())}
              className="btn-sm btn-primary"
            >
              {loading ? 'Sending...' : 'Send Email'}
            </button>
          </div>
        </div>
      </div>

      {/* Preview Modal */}
      {showPreview && (
        <div className="admin-modal-overlay" onClick={() => setShowPreview(false)}>
          <div className="admin-modal" onClick={(e) => e.stopPropagation()}>
            <div className="admin-modal-header">
              <h2>Email Preview</h2>
              <button
                className="admin-modal-close"
                onClick={() => setShowPreview(false)}
                aria-label="Close preview"
              >
                ×
              </button>
            </div>
            <div className="admin-modal-body">
              <div style={{ marginBottom: '16px' }}>
                <strong style={{ display: 'block', marginBottom: '8px', color: '#0f172a' }}>Subject:</strong>
                <div style={{ padding: '8px 12px', backgroundColor: '#f8fafc', borderRadius: '6px', color: '#1e293b' }}>
                  {subject}
                </div>
              </div>
              <div>
                <strong style={{ display: 'block', marginBottom: '8px', color: '#0f172a' }}>Content:</strong>
                <div
                  style={{
                    border: '1px solid #e0e0e0',
                    borderRadius: '8px',
                    padding: '16px',
                    backgroundColor: '#fff',
                    minHeight: '200px',
                  }}
                  dangerouslySetInnerHTML={{ __html: previewHtml }}
                />
              </div>
            </div>
            <div className="admin-modal-footer">
              <button
                className="btn btn-secondary"
                onClick={() => setShowPreview(false)}
              >
                Close
              </button>
              <button
                className="btn btn-primary"
                onClick={() => {
                  setShowPreview(false)
                  handleSend()
                }}
                disabled={loading || !subject.trim() || !html.trim() || (recipientType === 'custom' && !customEmail.trim())}
              >
                {loading ? 'Sending...' : 'Send Email'}
              </button>
            </div>
          </div>
        </div>
      )}
    </AdminLayout>
  )
}

