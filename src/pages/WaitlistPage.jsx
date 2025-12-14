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
      const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://groupfund-backend.onrender.com/api'
      const response = await fetch(`${API_BASE_URL}/waitlist`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

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
        description="Join the GroupFund waitlist and be among the first to organize your group's birthday contributions. Get early access when we launch."
        keywords="GroupFund waitlist, early access, join waitlist, group contribution app"
        canonical="https://groupfund.app/waitlist"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Join the Waitlist</h1>
          <p className="page-subtitle">
            Be among the first to experience GroupFund. We'll notify you as soon as the app is available!
          </p>
        </div>
      </section>

      <section className="waitlist-page">
        <div className="container">
          <div className="waitlist-content">
            <div className="waitlist-info">
              <h2>Why Join the Waitlist?</h2>
              <ul className="waitlist-benefits">
                <li>
                  <span className="benefit-icon">🚀</span>
                  <div>
                    <strong>Early Access</strong>
                    <p>Be among the first to use GroupFund when we launch</p>
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
                    <p>Receive updates on our progress and launch date</p>
                  </div>
                </li>
                <li>
                  <span className="benefit-icon">💬</span>
                  <div>
                    <strong>Shape the Product</strong>
                    <p>Your feedback helps us build the best experience</p>
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
                  <h2>Get Early Access</h2>
                  <p className="waitlist-form-subtitle">
                    Fill out the form below and we'll notify you when GroupFund is ready.
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
