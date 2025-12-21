import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const API_BASE_URL = import.meta.env.VITE_API_URL || import.meta.env.API_URL;

if (!API_BASE_URL) {
  console.error('API_BASE_URL is not defined. Please set VITE_API_URL in your environment variables.');
} 

export default function ProtectedRoute({ children }) {
  const [isAuthorized, setIsAuthorized] = useState(false)
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    checkAuth()
  }, [])

  const checkAuth = async () => {
    const token = localStorage.getItem('adminToken') || localStorage.getItem('token')
    
    if (!token) {
      navigate('/admin/login')
      return
    }

    try {
      // Verify token and check admin status
      const response = await fetch(`${API_BASE_URL}/users/profile`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      })

      if (!response.ok) {
        throw new Error('Unauthorized')
      }

      const text = await response.text();
      let data;
      try {
        data = text ? JSON.parse(text) : {};
      } catch (parseError) {
        throw new Error('Invalid response from server');
      }

      if (!data.user?.is_admin) {
        localStorage.removeItem('adminToken')
        localStorage.removeItem('token')
        navigate('/admin/login')
        return
      }

      setIsAuthorized(true)
    } catch (error) {
      localStorage.removeItem('adminToken')
      localStorage.removeItem('token')
      navigate('/admin/login')
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        fontSize: '1.1rem',
        color: '#64748b'
      }}>
        Loading...
      </div>
    )
  }

  if (!isAuthorized) {
    return null
  }

  return children
}

