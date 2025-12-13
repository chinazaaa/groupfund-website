import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function FeaturesPage() {
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
      title: "Automatic Reminders",
      description: "Get smart reminders 7 days before each birthday and on the deadline day. Never miss a contribution deadline again.",
      icon: "🔔"
    },
    {
      title: "Real-Time Payment Tracking",
      description: "See payment statuses at a glance: Not Paid, Paid, or Confirmed. Know exactly who has contributed and who still needs to.",
      icon: "📊"
    },
    {
      title: "Payment Progress Recaps",
      description: "Get helpful updates like '8 out of 10 members have paid for John's birthday.' Stay informed about contribution progress.",
      icon: "📈"
    },
    {
      title: "Birthday Calendar",
      description: "Never miss a birthday with our integrated calendar view. See all upcoming birthdays and plan contributions ahead of time.",
      icon: "📅"
    },
    {
      title: "Transparent History",
      description: "View complete contribution history for each member. Export records for your own record-keeping and transparency.",
      icon: "📋"
    },
    {
      title: "Easy Group Management",
      description: "Add or remove members, update birthdays, and manage group settings all in one place. Simple and intuitive.",
      icon: "⚙️"
    }
  ]

  return (
    <>
      <SEO
        title="GroupFund Features - Multi-Currency, Reminders, Payment Tracking & More"
        description="Discover GroupFund's powerful features: multi-currency support, automatic reminders, real-time payment tracking, fixed amounts, max group size, and more. Perfect for organizing birthday contributions."
        keywords="groupfund features, birthday app features, multi-currency payments, payment tracking, automatic reminders, group contribution app, Nigeria"
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
              <a href="#download" className="btn btn-primary btn-large">Download App</a>
            </div>
            <div className="app-store-badges">
              <a 
                href="#" 
                className="app-badge" 
                aria-label="Download GroupFund on the App Store"
                rel="noopener noreferrer"
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

