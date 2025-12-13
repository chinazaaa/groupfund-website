import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function ThankYouPage() {
  return (
    <>
      <SEO
        title="Thank You - We'll Get Back to You Soon | GroupFund"
        description="Thank you for contacting GroupFund. We've received your message and will get back to you as soon as possible."
        keywords="thank you, contact confirmation, GroupFund support"
        canonical="https://groupfund.app/thank-you"
      />

      <section className="page-hero">
        <div className="container">
          <div className="thank-you-content">
            <div className="thank-you-icon">✓</div>
            <h1 className="page-title">Thank You!</h1>
            <p className="page-subtitle">
              We've received your message and will get back to you as soon as possible.
            </p>
          </div>
        </div>
      </section>

      <section className="thank-you-page">
        <div className="container">
          <div className="thank-you-box">
            <h2>What's Next?</h2>
            <p>While you wait, here are some helpful resources:</p>
            
            <div className="thank-you-actions">
              <div className="thank-you-card">
                <div className="thank-you-card-icon">📚</div>
                <h3>Learn More</h3>
                <p>Explore our features and see how GroupFund can help organize your group's birthday contributions.</p>
                <Link to="/features" className="btn btn-secondary">
                  View Features
                </Link>
              </div>

              <div className="thank-you-card">
                <div className="thank-you-card-icon">❓</div>
                <h3>Get Help</h3>
                <p>Check out our FAQ or help center for answers to common questions.</p>
                <Link to="/help" className="btn btn-secondary">
                  Visit Help Center
                </Link>
              </div>

              <div className="thank-you-card">
                <div className="thank-you-card-icon">📖</div>
                <h3>Read Our Blog</h3>
                <p>Learn tips and best practices for organizing group contributions.</p>
                <Link to="/blog" className="btn btn-secondary">
                  Read Blog
                </Link>
              </div>
            </div>

            <div className="thank-you-cta">
              <Link to="/" className="btn btn-primary btn-large">
                Return to Homepage
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
