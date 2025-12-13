import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './AdminLogin.css'

const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://groupfund-backend.onrender.com/api'

export default function AdminLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Login failed')
      }

      // Store token
      localStorage.setItem('adminToken', data.token)
      localStorage.setItem('token', data.token)

      // Verify admin status by checking user profile
      const profileResponse = await fetch(`${API_BASE_URL}/users/profile`, {
        headers: {
          'Authorization': `Bearer ${data.token}`,
        },
      })

      const profileData = await profileResponse.json()

      if (!profileData.user?.is_admin) {
        localStorage.removeItem('adminToken')
        localStorage.removeItem('token')
        throw new Error('Access denied. Admin privileges required.')
      }

      // Redirect to admin dashboard
      navigate('/admin')
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="admin-login-page">
      <div className="admin-login-container">
        <div className="admin-login-header">
          <h1 className="admin-login-logo">GroupFund</h1>
          <h2>Admin Login</h2>
          <p>Sign in to access the admin dashboard</p>
        </div>

        <form onSubmit={handleSubmit} className="admin-login-form">
          {error && <div className="admin-login-error">{error}</div>}

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="admin@example.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your password"
            />
          </div>

          <button type="submit" disabled={loading} className="admin-login-btn">
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        <div className="admin-login-footer">
          <p>Only authorized administrators can access this area.</p>
        </div>
      </div>
    </div>
  )
}

