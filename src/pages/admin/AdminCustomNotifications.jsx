import { useState, useEffect, useRef } from 'react'
import { adminApi } from '../../services/adminApi'
import AdminLayout from '../../components/admin/AdminLayout'
import './AdminPages.css'

export default function AdminCustomNotifications() {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [recipientType, setRecipientType] = useState('waitlist')
  const [selectedUsers, setSelectedUsers] = useState([])
  const [userSearch, setUserSearch] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [showDropdown, setShowDropdown] = useState(false)
  const [loading, setLoading] = useState(false)
  const [searchLoading, setSearchLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [sendResults, setSendResults] = useState(null)
  const [showConfirmModal, setShowConfirmModal] = useState(false)
  const dropdownRef = useRef(null)
  const searchInputRef = useRef(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  // Search users when typing
  useEffect(() => {
    if (recipientType === 'selected_users' && userSearch.trim().length >= 2) {
      const timeoutId = setTimeout(() => {
        searchUsers(userSearch.trim())
      }, 300) // Debounce search

      return () => clearTimeout(timeoutId)
    } else {
      setSearchResults([])
      setShowDropdown(false)
    }
  }, [userSearch, recipientType])

  const searchUsers = async (searchTerm) => {
    try {
      setSearchLoading(true)
      const results = await adminApi.searchUsers({ search: searchTerm, limit: 50 })
      setSearchResults(results.users || [])
      setShowDropdown(true)
    } catch (err) {
      console.error('Search error:', err)
      setSearchResults([])
    } finally {
      setSearchLoading(false)
    }
  }

  const handleUserSelect = (user) => {
    // Check if user is already selected
    if (!selectedUsers.find(u => u.id === user.id)) {
      setSelectedUsers([...selectedUsers, user])
    }
    setUserSearch('')
    setShowDropdown(false)
    searchInputRef.current?.focus()
  }

  const handleRemoveUser = (userId) => {
    setSelectedUsers(selectedUsers.filter(u => u.id !== userId))
  }

  const handleSend = () => {
    if (!title.trim()) {
      setError('Title is required')
      setTimeout(() => setError(''), 5000)
      return
    }
    if (!body.trim()) {
      setError('Body is required')
      setTimeout(() => setError(''), 5000)
      return
    }
    if (recipientType === 'selected_users' && selectedUsers.length === 0) {
      setError('Please select at least one user')
      setTimeout(() => setError(''), 5000)
      return
    }

    // Show confirmation modal
    setShowConfirmModal(true)
  }

  const handleConfirmSend = async () => {
    setShowConfirmModal(false)

    try {
      setLoading(true)
      setError('')
      setSuccess('')
      setSendResults(null)

      const userIds = recipientType === 'selected_users' 
        ? selectedUsers.map(u => u.id)
        : undefined

      const result = await adminApi.sendCustomNotification(
        title,
        body,
        recipientType,
        userIds
      )

      setSuccess(result.message || 'Notification sent successfully!')
      setSendResults(result.results || null)
      
      // Reset form after successful send
      setTitle('')
      setBody('')
      setRecipientType('waitlist')
      setSelectedUsers([])
      setUserSearch('')
      
      setTimeout(() => {
        setSuccess('')
        setSendResults(null)
      }, 10000)
    } catch (err) {
      setError(err.message || 'Failed to send notification')
      setTimeout(() => setError(''), 5000)
    } finally {
      setLoading(false)
    }
  }

  const getRecipientDisplay = () => {
    if (recipientType === 'selected_users') {
      if (selectedUsers.length === 0) {
        return 'No users selected'
      }
      if (selectedUsers.length === 1) {
        return selectedUsers[0].name || selectedUsers[0].email
      }
      return `${selectedUsers.length} selected users`
    }
    return {
      waitlist: 'All waitlist members',
      group_admins: 'All group admins',
      everyone: 'Everyone in the database'
    }[recipientType]
  }

  const getRecipientCountLabel = () => {
    switch (recipientType) {
      case 'waitlist':
        return 'Users who have accounts and are on the waitlist'
      case 'group_admins':
        return 'All users who are admins of groups'
      case 'everyone':
        return 'All users in the database'
      case 'selected_users':
        return 'Select specific users from the dropdown'
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
              <h1>Custom Notifications</h1>
              <p>Send in-app and push notifications to selected recipients</p>
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
                {sendResults.failed_user_ids && sendResults.failed_user_ids.length > 0 && (
                  <div style={{ marginTop: '8px', fontSize: '0.85rem' }}>
                    <strong>Failed user IDs:</strong>
                    <ul style={{ margin: '4px 0', paddingLeft: '20px' }}>
                      {sendResults.failed_user_ids.map((id, idx) => (
                        <li key={idx}>{id}</li>
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
                if (e.target.value !== 'selected_users') {
                  setSelectedUsers([])
                  setUserSearch('')
                  setShowDropdown(false)
                }
              }}
              className="admin-filter-select"
              style={{ width: '100%', maxWidth: '400px' }}
            >
              <option value="waitlist">Waitlist Members</option>
              <option value="group_admins">Group Admins</option>
              <option value="everyone">Everyone in Database</option>
              <option value="selected_users">Selected Users</option>
            </select>
            <p style={{ marginTop: '8px', fontSize: '0.875rem', color: '#64748b' }}>
              {getRecipientCountLabel()}
            </p>
          </div>

          {/* User Search and Selection */}
          {recipientType === 'selected_users' && (
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#0f172a' }}>
                Search and Select Users <span style={{ color: 'red' }}>*</span>
              </label>
              <div style={{ position: 'relative' }} ref={dropdownRef}>
                <input
                  ref={searchInputRef}
                  type="text"
                  value={userSearch}
                  onChange={(e) => setUserSearch(e.target.value)}
                  onFocus={() => {
                    if (userSearch.trim().length >= 2 && searchResults.length > 0) {
                      setShowDropdown(true)
                    }
                  }}
                  placeholder="Type to search users by name, email, or phone..."
                  className="admin-search-input"
                  style={{ width: '100%', maxWidth: '600px' }}
                />
                {searchLoading && (
                  <div style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)' }}>
                    <span style={{ fontSize: '0.875rem', color: '#64748b' }}>Searching...</span>
                  </div>
                )}
                
                {/* Search Results Dropdown */}
                {showDropdown && searchResults.length > 0 && (
                  <div className="admin-user-dropdown">
                    {searchResults.map((user) => (
                      <div
                        key={user.id}
                        className="admin-user-dropdown-item"
                        onClick={() => handleUserSelect(user)}
                      >
                        <div style={{ flex: 1 }}>
                          <div style={{ fontWeight: '600', color: '#0f172a', marginBottom: '4px' }}>
                            {user.name || 'No name'}
                          </div>
                          <div style={{ fontSize: '0.875rem', color: '#64748b' }}>
                            {user.email}
                            {user.phone && ` • ${user.phone}`}
                          </div>
                          <div style={{ fontSize: '0.75rem', color: '#94a3b8', marginTop: '4px' }}>
                            {user.group_count || 0} group{user.group_count !== 1 ? 's' : ''}
                            {user.is_verified && (
                              <span style={{ marginLeft: '8px', color: '#10b981' }}>✓ Verified</span>
                            )}
                          </div>
                        </div>
                        {selectedUsers.find(u => u.id === user.id) && (
                          <div style={{ color: '#10b981', fontSize: '1.2rem' }}>✓</div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
                
                {showDropdown && !searchLoading && userSearch.trim().length >= 2 && searchResults.length === 0 && (
                  <div className="admin-user-dropdown">
                    <div style={{ padding: '16px', textAlign: 'center', color: '#64748b' }}>
                      No users found
                    </div>
                  </div>
                )}
              </div>

              {/* Selected Users */}
              {selectedUsers.length > 0 && (
                <div style={{ marginTop: '16px' }}>
                  <div style={{ marginBottom: '8px', fontSize: '0.875rem', fontWeight: '500', color: '#0f172a' }}>
                    Selected Users ({selectedUsers.length}):
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {selectedUsers.map((user) => (
                      <div key={user.id} className="admin-selected-user-tag">
                        <span>{user.name || user.email}</span>
                        <button
                          type="button"
                          onClick={() => handleRemoveUser(user.id)}
                          className="admin-selected-user-remove"
                          aria-label={`Remove ${user.name || user.email}`}
                        >
                          ×
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Title Input */}
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#0f172a' }}>
              Title <span style={{ color: 'red' }}>*</span>
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Notification title"
              className="admin-search-input"
            />
          </div>

          {/* Body Input */}
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#0f172a' }}>
              Body <span style={{ color: 'red' }}>*</span>
            </label>
            <textarea
              value={body}
              onChange={(e) => setBody(e.target.value)}
              placeholder="Notification message body"
              rows={8}
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid #e0e0e0',
                borderRadius: '8px',
                fontSize: '0.95rem',
                resize: 'vertical',
              }}
            />
            <p style={{ marginTop: '8px', fontSize: '0.875rem', color: '#64748b' }}>
              This message will be sent as both in-app and push notifications (push if user has token).
            </p>
          </div>

          {/* Action Buttons */}
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <button
              onClick={handleSend}
              disabled={loading || !title.trim() || !body.trim() || (recipientType === 'selected_users' && selectedUsers.length === 0)}
              className="btn-sm btn-primary"
            >
              {loading ? 'Sending...' : 'Send Notification'}
            </button>
          </div>
        </div>
      </div>

      {/* Notification Confirmation Modal */}
      {showConfirmModal && (
        <NotificationConfirmModal
          recipient={getRecipientDisplay()}
          recipientType={recipientType}
          selectedUsers={selectedUsers}
          title={title}
          body={body}
          onConfirm={handleConfirmSend}
          onCancel={() => setShowConfirmModal(false)}
        />
      )}
    </AdminLayout>
  )
}

function NotificationConfirmModal({ recipient, recipientType, selectedUsers, title, body, onConfirm, onCancel }) {
  return (
    <div className="admin-modal-overlay" onClick={onCancel}>
      <div className="admin-email-confirm-modal" onClick={(e) => e.stopPropagation()}>
        <div className="admin-email-confirm-header">
          <div className="admin-email-confirm-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 9V13M12 17H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h3>Confirm Notification Send</h3>
        </div>
        <div className="admin-email-confirm-body">
          <p className="admin-email-confirm-question">
            Are you sure you want to send this notification?
          </p>
          
          <div className="admin-email-confirm-details">
            <div className="admin-email-confirm-detail-row">
              <span className="admin-email-confirm-label">To:</span>
              <span className="admin-email-confirm-value">
                {recipientType === 'selected_users' && selectedUsers.length > 0 ? (
                  <div>
                    <div>{selectedUsers.length} selected user{selectedUsers.length !== 1 ? 's' : ''}</div>
                    {selectedUsers.length <= 5 && (
                      <div style={{ marginTop: '8px', fontSize: '0.875rem', color: '#64748b' }}>
                        {selectedUsers.map(u => u.name || u.email).join(', ')}
                      </div>
                    )}
                  </div>
                ) : (
                  recipient
                )}
              </span>
            </div>
            <div className="admin-email-confirm-detail-row">
              <span className="admin-email-confirm-label">Title:</span>
              <span className="admin-email-confirm-value">{title || '(No title)'}</span>
            </div>
            <div className="admin-email-confirm-detail-row">
              <span className="admin-email-confirm-label">Body:</span>
              <span className="admin-email-confirm-value" style={{ whiteSpace: 'pre-wrap' }}>
                {body || '(No body)'}
              </span>
            </div>
          </div>

          <div className="admin-email-confirm-warning">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 6V8M8 10H8.01M15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>This action cannot be undone.</span>
          </div>
        </div>
        <div className="admin-email-confirm-footer">
          <button onClick={onCancel} className="btn btn-secondary">
            Cancel
          </button>
          <button onClick={onConfirm} className="btn btn-primary">
            Send Notification
          </button>
        </div>
      </div>
    </div>
  )
}

