import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function WaitlistPage() {
  return (
    <>
      <SEO
        title="Get Started with GroupFund"
        description="GroupFund is now live on Web, iOS, and Android. Start organizing your group's contributions today from any device."
        keywords="GroupFund, group contributions app, iOS app, Android app, web app, get started"
        canonical="https://www.groupfund.app/waitlist"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">GroupFund is Now Live</h1>
          <p className="page-subtitle">
            Start organizing your group contributions today on Web, iOS, or Android. No waitlist, just jump in and create your first group in minutes.
          </p>

          <div
            style={{
              marginTop: '1.5rem',
              padding: '1.25rem',
              backgroundColor: '#f0fdf4',
              border: '2px solid #22c55e',
              borderRadius: '8px',
              textAlign: 'center',
            }}
          >
            <p
              style={{
                margin: 0,
                fontSize: '1.1rem',
                fontWeight: '600',
                color: '#166534',
                marginBottom: '0.75rem',
              }}
            >
              🎉 GroupFund is Live on Web, iOS & Android
            </p>
            <p style={{ margin: 0, color: '#15803d', marginBottom: '1rem' }}>
              Create a free group, invite your people, and start collecting contributions seamlessly.
            </p>
            <Link to="/get-started" className="btn btn-primary btn-large">
              Get Started Free
            </Link>
          </div>
        </div>
      </section>

      <section className="waitlist-page">
        <div className="container">
          <div className="waitlist-content">
            <div className="waitlist-info">
              <h2>Use GroupFund on Any Device</h2>
              <p>
                GroupFund is available on Web, iOS, and Android so your whole group can contribute from wherever they are.
                No more spreadsheets, manual reminders, or scattered transfers.
              </p>

              <ul className="waitlist-benefits">
                <li>
                  <span className="benefit-icon">🌍</span>
                  <div>
                    <strong>Web App</strong>
                    <p>Access GroupFund from any browser to create and manage your groups with ease.</p>
                  </div>
                </li>
                <li>
                  <span className="benefit-icon">📱</span>
                  <div>
                    <strong>iOS & Android Apps</strong>
                    <p>Download the mobile apps so everyone in your group can stay on top of contributions on the go.</p>
                  </div>
                </li>
                <li>
                  <span className="benefit-icon">🎉</span>
                  <div>
                    <strong>Perfect for Every Occasion</strong>
                    <p>Birthdays, housewarmings, weddings, group trips, subscriptions, and more — keep every contribution organized.</p>
                  </div>
                </li>
                <li>
                  <span className="benefit-icon">⚡</span>
                  <div>
                    <strong>Fast Setup</strong>
                    <p>Create a group, set your goal, and invite members in just a few minutes.</p>
                  </div>
                </li>
              </ul>

              <div className="waitlist-cta">
                <p>
                  Want to see how it works first?{' '}
                  <Link to="/how-it-works" className="cta-link">
                    View How It Works
                  </Link>
                </p>
              </div>

              <Link to="/get-started" className="btn btn-primary btn-large">
                Start Your First Group
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
