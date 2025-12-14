import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function ContactPage() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://groupfund-backend.onrender.com/api'
      const response = await fetch(`${API_BASE_URL}/contact/submit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit form')
      }

      setSubmitted(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
      // Redirect to thank you page after 1 second
      setTimeout(() => {
        navigate('/thank-you')
      }, 1000)
    } catch (err) {
      setError(err.message || 'Failed to submit form. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <SEO
        title="Contact GroupFund - Get Help, Support & Feedback"
        description="Contact GroupFund for support, questions, or feedback. We're here to help you organize your group birthday contributions. Get in touch today."
        keywords="contact groupfund, groupfund support, customer support, help center, feedback"
        canonical="https://groupfund.app/contact"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Get in Touch</h1>
          <p className="page-subtitle">
            Have questions, feedback, or need support? We're here to help. Reach out to us and we'll get back to you within 24 hours.
          </p>
        </div>
      </section>

      <section className="contact-page">
        <div className="container">
          <div className="contact-content">
            <div className="contact-info">
              <h2>Contact Information</h2>
              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon">📧</div>
                  <div>
                    <h3>Email</h3>
                    <p>support@groupfund.app</p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">💬</div>
                  <div>
                    <h3>Response Time</h3>
                    <p>We typically respond within 24 hours</p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">🌍</div>
                  <div>
                    <h3>Location</h3>
                    <p>Worldwide</p>
                  </div>
                </div>
              </div>

              {/* <div className="social-links">
                <h3>Follow Us</h3>
                <div className="social-icons">
                  <a href="#" aria-label="Twitter" rel="noopener noreferrer">Twitter</a>
                  <a href="#" aria-label="Facebook" rel="noopener noreferrer">Facebook</a>
                  <a href="#" aria-label="LinkedIn" rel="noopener noreferrer">LinkedIn</a>
                </div>
              </div> */}
            </div>

            <div className="contact-form-container">
              <h2>Send Us a Message</h2>
              {error && (
                <div style={{ 
                  padding: '12px 16px', 
                  background: '#fff5f5', 
                  color: '#ff6b6b', 
                  borderRadius: '8px', 
                  marginBottom: '20px',
                  border: '1px solid #ffcccc'
                }}>
                  {error}
                </div>
              )}
              {submitted ? (
                <div className="form-success">
                  <p>✓ Thank you for your message! We'll get back to you soon.</p>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject">Subject *</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="6"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary btn-large" disabled={loading}>
                    {loading ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

