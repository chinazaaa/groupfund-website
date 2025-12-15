import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import ComingSoonModal from '../components/ComingSoonModal'
import '../App.css'

export default function FeaturesPage() {
  const [modalOpen, setModalOpen] = useState(false)
  const [storeName, setStoreName] = useState('')

  const handleAppStoreClick = (e, name) => {
    e.preventDefault()
    setStoreName(name)
    setModalOpen(true)
  }

  const features = [
    {
      title: "Multi-Currency Support",
      description: "Choose from NGN, USD, GBP, EUR, and more. Each group can set its preferred currency, and local bank details are displayed automatically.",
      icon: "🌍"
    },
    {
      title: "Fixed Contribution Amounts",
      description: "Set a fixed amount per person (e.g., ₦5,000) so everyone knows exactly what to contribute. No confusion, no surprises.",
      icon: "💰"
    },
    {
      title: "Maximum Group Size",
      description: "Set and display your group's maximum size upfront. Instantly calculate your yearly total contribution commitment.",
      icon: "👥"
    },
    {
      title: "Member Reliability Metrics",
      description: "See member reliability scores (0-100) before joining groups. View total contributions, on-time payment rates, and member ratings (excellent/good/moderate/poor/new) to make informed decisions.",
      icon: "⭐"
    },
    {
      title: "Group Health Scoring",
      description: "Track group compliance metrics and health ratings. See how well groups maintain contribution standards and make data-driven decisions about which groups to join.",
      icon: "📈"
    },
    {
      title: "Preview Groups Before Joining",
      description: "Preview group details, member reliability scores, and group health metrics before requesting to join. Make informed decisions about group participation.",
      icon: "👀"
    },
    {
      title: "Advanced Group Controls",
      description: "Pause or resume accepting new member requests, close groups to freeze all activity, or reopen closed groups. Full control over your group's status and membership.",
      icon: "🎛️"
    },
    {
      title: "Automatic Reminders",
      description: "Get smart reminders 7 days before each birthday, 1 day before, and on the deadline day. Never miss a contribution deadline again.",
      icon: "🔔"
    },
    {
      title: "In-App & Push Notifications",
      description: "Receive in-app notifications and push notifications for birthday wishes, reminders, overdue contributions, member requests, confirmations, and group updates. Mark as read and manage preferences.",
      icon: "📱"
    },
    {
      title: "Email Notifications",
      description: "Get email notifications for OTP verification, password resets, birthday wishes, reminders (7 days, 1 day, same day), overdue contributions, and comprehensive birthday summaries.",
      icon: "📧"
    },
    {
      title: "Real-Time Payment Tracking",
      description: "See payment statuses at a glance: Not Paid, Paid (awaiting confirmation), Confirmed, or Not Received. Know exactly who has contributed and who still needs to.",
      icon: "📊"
    },
    {
      title: "Payment Progress Recaps",
      description: "Get helpful updates like '8 out of 10 members have paid for John's birthday.' Stay informed about contribution progress in real-time.",
      icon: "📈"
    },
    {
      title: "Contribution Confirmation System",
      description: "Members mark contributions as 'Paid', then celebrants can confirm receipt or reject if not received. Two-step verification ensures accuracy and transparency.",
      icon: "✅"
    },
    {
      title: "Birthday Calendar & History",
      description: "Never miss a birthday with our integrated calendar view. See all upcoming and past birthdays, plan contributions ahead of time, and track contribution history.",
      icon: "📅"
    },
    {
      title: "Overdue Contributions Tracking",
      description: "Automatically track overdue contributions and send reminders. See which members have missed deadlines and get notified about overdue payments.",
      icon: "⏰"
    },
    {
      title: "Transparent History",
      description: "View complete contribution history for each member. See received contributions, payment confirmations, and export records for your own record-keeping and transparency.",
      icon: "📋"
    },
    {
      title: "Secure Authentication",
      description: "Sign up with email or phone, verify with OTP, and login with secure JWT authentication. Reset passwords via OTP and manage your profile securely.",
      icon: "🔐"
    },
    {
      title: "User Profile Management",
      description: "View and update your profile information, manage account settings, and control your verification status. Full control over your account details.",
      icon: "👤"
    },
    {
      title: "Easy Group Management",
      description: "Approve or reject member requests, update group settings (name, amount, max members), remove members, and let members add their own birthdays. Simple and intuitive.",
      icon: "⚙️"
    }
  ]

  return (
    <>
      <ComingSoonModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        storeName={storeName}
      />
      <SEO
        title="GroupFund Features - Member Reliability, Group Health, Multi-Currency & More"
        description="Discover GroupFund's powerful features: member reliability scores, group health metrics, multi-currency support, automatic reminders, real-time payment tracking, advanced group management, and more. Perfect for organizing birthday contributions."
        keywords="groupfund features, birthday app features, member reliability scores, group health metrics, multi-currency payments, payment tracking, automatic reminders, group contribution app, Nigeria"
        canonical="https://groupfund.app/features"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Powerful Features for Organized Contributions</h1>
          <p className="page-subtitle">
            Everything you need to organize group birthday contributions effortlessly. No more WhatsApp chaos or Excel spreadsheets.
          </p>
        </div>
      </section>

      <section className="features-page">
        <div className="container">
          <div className="features-grid">
            {features.map((feature, index) => (
              <article key={index} className="feature-card">
                <div className="feature-icon-large">{feature.icon}</div>
                <h2 className="feature-title">{feature.title}</h2>
                <p className="feature-description">{feature.description}</p>
              </article>
            ))}
          </div>

          <div className="cta-box">
            <h2>Ready to Experience These Features?</h2>
            <p>Start organizing your group's birthday contributions today. It's free to get started!</p>
            <div className="cta-buttons">
              <Link to="/how-it-works" className="btn btn-secondary btn-large">See How It Works</Link>
              <Link to="/download" className="btn btn-primary btn-large">Download App</Link>
            </div>
            <p style={{ marginTop: '24px', fontSize: '0.95rem', color: '#64748b' }}>
              <Link to="/coming-soon-features" style={{ color: '#6366f1', textDecoration: 'none', fontWeight: '500' }}>
                View upcoming features in our pipeline →
              </Link>
            </p>
            <div className="app-store-badges">
              <a 
                href="#" 
                className="app-badge" 
                aria-label="Download GroupFund on the App Store"
                rel="noopener noreferrer"
                onClick={(e) => handleAppStoreClick(e, 'the App Store')}
              >
                <img 
                  src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&releaseDate=1276560000&type=ios10" 
                  alt="Download on the App Store" 
                  width="180"
                  height="60"
                  loading="lazy"
                />
              </a>
              <a 
                href="#" 
                className="app-badge" 
                aria-label="Get GroupFund on Google Play"
                rel="noopener noreferrer"
                onClick={(e) => handleAppStoreClick(e, 'Google Play')}
              >
                <img 
                  src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" 
                  alt="Get it on Google Play" 
                  width="200"
                  height="77"
                  loading="lazy"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

