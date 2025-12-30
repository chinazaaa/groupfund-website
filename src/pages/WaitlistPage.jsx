import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function WaitlistPage() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    groupType: ''
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const API_BASE_URL = import.meta.env.VITE_API_URL || import.meta.env.API_URL;
      
      if (!API_BASE_URL) {
        throw new Error('API URL is not configured. Please contact support.');
      }

      const response = await fetch(`${API_BASE_URL}/waitlist`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const text = await response.text();
      let data;
      try {
        data = text ? JSON.parse(text) : {};
      } catch (parseError) {
        throw new Error('Invalid response from server');
      }

      if (!response.ok) {
        // Handle validation errors
        if (data.errors && Array.isArray(data.errors)) {
          const errorMessages = data.errors.map(err => err.msg || err.message).join(', ')
          throw new Error(errorMessages)
        }
        throw new Error(data.error || 'Failed to join waitlist')
      }

      setSubmitted(true)
      setFormData({ name: '', email: '', phone: '', groupType: '' })
      
      // Redirect to thank you page after 2 seconds
      setTimeout(() => {
        navigate('/thank-you')
      }, 2000)
    } catch (err) {
      setError(err.message || 'Failed to join waitlist. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <SEO
        title="Join the Waitlist - GroupFund"
        description="GroupFund is now available on web! Join the waitlist to be notified when iOS and Android apps launch. Start organizing your group's contributions today at app.groupfund.app."
        keywords="GroupFund waitlist, mobile app waitlist, iOS app, Android app, group contribution app, web app available"
        canonical="https://www.groupfund.app/waitlist"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Join the Waitlist</h1>
          <p className="page-subtitle">
            GroupFund is now available on web! iOS and Android apps coming soon. Join the waitlist to be notified when mobile apps launch.
          </p>
          <div style={{ 
            marginTop: '1.5rem', 
            padding: '1.25rem', 
            backgroundColor: '#f0fdf4', 
            border: '2px solid #22c55e', 
            borderRadius: '8px',
            textAlign: 'center'
          }}>
            <p style={{ margin: 0, fontSize: '1.1rem', fontWeight: '600', color: '#166534', marginBottom: '0.75rem' }}>
              🎉 GroupFund is Now Live on Web!
            </p>
            <p style={{ margin: 0, color: '#15803d', marginBottom: '1rem' }}>
              Start organizing your group contributions today at <strong>app.groupfund.app</strong>
            </p>
            <a 
              href="https://app.groupfund.app/signup" 
              className="btn btn-primary" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ display: 'inline-block', textDecoration: 'none' }}
            >
              Get Started on Web
            </a>
          </div>
        </div>
      </section>

      <section className="waitlist-page">
        <div className="container">
          <div className="waitlist-content">
            <div className="waitlist-info">
              <h2>Why Join the Waitlist?</h2>
              <div style={{ 
                marginBottom: '2rem', 
                padding: '1.25rem', 
                backgroundColor: '#fef3c7', 
                borderLeft: '4px solid #f59e0b', 
                borderRadius: '4px' 
              }}>
                <p style={{ margin: 0, fontSize: '1rem', color: '#92400e' }}>
                  <strong>📱 Mobile Apps Coming Soon:</strong> While GroupFund is already available on web and android, we're working on iOS app. Join the waitlist to be notified when mobile apps launch!
                </p>
              </div>
              <ul className="waitlist-benefits">
                <li>
                  <span className="benefit-icon">📱</span>
                  <div>
                    <strong>Mobile App Launch</strong>
                    <p>Be notified when iOS app are available</p>
                  </div>
                </li>
                <li>
                  <span className="benefit-icon">🎁</span>
                  <div>
                    <strong>Exclusive Benefits</strong>
                    <p>Get special perks and features for early adopters</p>
                  </div>
                </li>
                <li>
                  <span className="benefit-icon">📧</span>
                  <div>
                    <strong>Stay Updated</strong>
                    <p>Receive updates on mobile app progress and launch dates</p>
                  </div>
                </li>
                <li>
                  <span className="benefit-icon">💬</span>
                  <div>
                    <strong>Shape the Product</strong>
                    <p>Your feedback helps us build the best mobile experience</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="waitlist-form-container">
              {submitted ? (
                <div className="waitlist-success">
                  <div className="success-icon">✓</div>
                  <h2>You're on the List!</h2>
                  <p>Thank you for joining the waitlist. We'll be in touch soon!</p>
                </div>
              ) : (
                <>
                  <h2>Get Notified for Mobile Apps</h2>
                  <p className="waitlist-form-subtitle">
                    GroupFund is already available on web and android! Fill out the form below to be notified when iOS app launch.
                  </p>
                  
                  <div className="waitlist-cta">
                    <p>
                      Want to know more about GroupFund?{' '}
                      <Link to="/how-it-works" className="cta-link">
                        Visit How It Works
                      </Link>
                    </p>
                  </div>
                  
                  <form className="waitlist-form" onSubmit={handleSubmit}>
                    {error && (
                      <div className="form-error">
                        {error}
                      </div>
                    )}

                    <div className="form-group">
                      <label htmlFor="name">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="Enter your email address"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="phone">Phone Number (Optional)</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter your phone number"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="groupType">What type of group are you organizing? (Optional)</label>
                      <select
                        id="groupType"
                        name="groupType"
                        value={formData.groupType}
                        onChange={handleChange}
                      >
                        <option value="">Select a group type</option>
                        <option value="family">Family</option>
                        <option value="friends">Friends</option>
                        <option value="church">Church</option>
                        <option value="work">Work/Colleagues</option>
                        <option value="school">School</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <button 
                      type="submit" 
                      className="btn btn-primary btn-large"
                      disabled={loading}
                    >
                      {loading ? 'Joining Waitlist...' : 'Join Waitlist'}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
