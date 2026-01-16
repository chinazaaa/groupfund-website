import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import ComingSoonModal from '../components/ComingSoonModal'
import '../App.css'

export default function FeaturesPage() {
  const [modalOpen, setModalOpen] = useState(false)
  const [storeName, setStoreName] = useState('')

  useEffect(() => {
    const webPageStructuredData = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Features - GroupFund",
      "description": "Discover GroupFund's features for organizing group contributions: multi-currency support, automatic reminders, payment tracking, and more.",
      "url": "https://www.groupfund.app/features"
    }
    const existingScript = document.querySelector('script[data-features-schema]')
    if (existingScript) existingScript.remove()
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.setAttribute('data-features-schema', 'true')
    script.textContent = JSON.stringify(webPageStructuredData)
    document.head.appendChild(script)
    return () => {
      const scriptToRemove = document.querySelector('script[data-features-schema]')
      if (scriptToRemove) scriptToRemove.remove()
    }
  }, [])

  const handleAppStoreClick = (e, name) => {
    e.preventDefault()
    setStoreName(name)
    setModalOpen(true)
  }

  const features = [
    {
      title: "Multi-Currency Support",
      description: "Choose from NGN, USD, GBP, EUR, and more when creating groups. Each group can set its preferred currency, and local bank details are displayed automatically. Auto-pay, wallet, and withdrawals are available for USD, EUR, and GBP only. Groups using other currencies (like NGN) can still use manual payments.",
      icon: "🌍"
    },
    {
      title: "Fixed Contribution Amounts",
      description: "Set a fixed amount per person (e.g., 5,000) so everyone knows exactly what to contribute. No confusion, no surprises.",
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
      title: "Multiple Group Types",
      description: "Create Birthday Groups (for birthdays with wishlists), Subscription Groups (for shared subscriptions like Netflix, Spotify - monthly or annual), or General Groups (for weddings, events, any purpose - with optional wishlist support). Each type has features tailored to your needs.",
      icon: "🎯"
    },
    {
      title: "Automatic Reminders",
      description: "Get smart reminders before deadlines: 7 days, 1 day, and same day for birthdays; before subscription deadlines; before event deadlines. Never miss a contribution deadline again.",
      icon: "🔔"
    },
    {
      title: "In-App & Push Notifications",
      description: "Receive in-app notifications and push notifications for birthday wishes, reminders, overdue contributions, member requests, confirmations, group updates, chat mentions, wishlist notifications, withdrawal updates, and role changes. Most notification types (26 of 27) default to ON, except chat_message which defaults to OFF (can be noisy). You can customize each one. Mark notifications as read and manage your preferences in settings.",
      icon: "📱"
    },
    {
      title: "Group Links",
      description: "Invite friends and family to your groups easily! Shareable group links for easy invitations. Quick and simple way to grow your groups. No need to manually add each member. Members can preview groups (including reliability scores and health metrics) before joining.",
      icon: "🔗"
    },
    {
      title: "Chat Rooms",
      description: "Communicate with your group members directly within the app! Real-time messaging with group members. Stay connected and coordinate contributions. All group communication in one place. Enable optional group chat (disabled by default), mention members with @username, and customize notification preferences.",
      icon: "💬"
    },
    {
      title: "Email Notifications",
      description: "Get email notifications for OTP verification, password resets, birthday wishes, reminders (7 days, 1 day, same day), overdue contributions, payment transactions, withdrawal updates, group updates, and comprehensive summaries. Important notifications (payments, transactions, critical updates) default to ON, while reminders and newsletters default to OFF. Security emails (OTP, welcome, security alerts) are always sent. Customize all preferences in settings.",
      icon: "📧"
    },
    {
      title: "Full Notification Control",
      description: "Full control over your notifications. Customize email, push, and in-app notifications. Choose what matters to you - only receive notifications you want. Manage preferences for reminders, payments, withdrawals, auto-pay status, and more. Most notification types default to ON, but you can customize each one to match your preferences.",
      icon: "🔔"
    },
    {
      title: "Automatic Payment Collection (Auto-Pay)",
      description: "Enable auto-pay for groups using USD, EUR, or GBP. Your debit card is automatically charged on birthdays, subscription deadlines, or event deadlines. Choose to be charged '1 day before' or 'same day'. Payments are processed securely via Stripe and automatically confirmed. Fees are transparently displayed (contributor pays fees, recipient receives full amount).",
      icon: "💳"
    },
    {
      title: "In-App Wallet System",
      description: "Receive payments directly into your wallet balance when others contribute via auto-pay. Wallet balance can be used to receive funds and withdraw to your bank account. Wallet is only available for USD, EUR, and GBP currencies. Wallet balance cannot be used to pay contributions - you must use a debit card for that.",
      icon: "💼"
    },
    {
      title: "Easy Withdrawals",
      description: "Withdraw funds from your wallet to your bank account at any time. Withdrawals are subject to a 24-hour security hold period. Withdrawal fees: FREE for GBP and EUR, 1% fee for USD. All withdrawals are processed securely via Stripe Payouts API.",
      icon: "🏦"
    },
    {
      title: "Real-Time Payment Tracking",
      description: "See payment statuses at a glance: Not Paid, Paid (awaiting confirmation), Confirmed, or Not Received. Auto-pay payments are automatically confirmed. Manual payments require two-step confirmation. Know exactly who has contributed and who still needs to.",
      icon: "📊"
    },
    {
      title: "Payment Progress Recaps",
      description: "Get helpful updates like '8 out of 10 members have paid for John's birthday.' Stay informed about contribution progress in real-time.",
      icon: "📈"
    },
    {
      title: "Payment Confirmation System",
      description: "Auto-pay payments are automatically confirmed after successful processing by Stripe. Manual payments require two-step confirmation: members mark contributions as 'Paid', then admins/co-admins (for Subscription/General Groups) or celebrants (for Birthday Groups) can confirm receipt or reject if not received. Note: For birthday contributions, only the celebrant can confirm/reject, not admins or co-admins.",
      icon: "✅"
    },
    {
      title: "Birthday Calendar & History",
      description: "For Birthday Groups: Never miss a birthday with our integrated calendar view. See all upcoming and past birthdays, plan contributions ahead of time, and track contribution history.",
      icon: "📅"
    },
    {
      title: "Subscription Deadline Tracking",
      description: "For Subscription Groups: Track monthly or annual subscription deadlines. Set deadline day (and month for annual). Get reminders before deadlines and track overdue subscriptions.",
      icon: "📺"
    },
    {
      title: "Event Deadline Tracking",
      description: "For General Groups: Set optional deadline dates for events, weddings, or any purpose. Track upcoming deadlines and get reminders. Monitor overdue contributions if deadlines pass.",
      icon: "🎉"
    },
    {
      title: "Overdue Contributions Tracking",
      description: "Automatically track overdue contributions and send reminders. See which members have missed deadlines and get notified about overdue payments.",
      icon: "⏰"
    },
    {
      title: "Transparent History & Bank Statements",
      description: "View complete contribution history for each member. See received contributions, payment confirmations, wallet transactions, withdrawal history, and track all contributions for transparency. Access detailed transaction records and bank statements for all your financial activity.",
      icon: "📋"
    },
    {
      title: "Secure Authentication & Two-Factor Authentication",
      description: "Sign up with email, verify with OTP, and login with secure JWT authentication. Reset passwords via OTP. For critical actions (adding cards, withdrawals, bank account changes), two-factor authentication is required using authenticator apps (Google Authenticator, Authy, Microsoft Authenticator, or similar).",
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
    },
    {
      title: "Co-Admin Role",
      description: "Promote trusted members to co-admin to help manage groups. Co-admins can approve/reject members, confirm contributions, update group settings (with restrictions), and delete chat messages. Perfect for large groups or when the main admin needs help. Only full admins can promote/demote co-admins.",
      icon: "👥"
    },
    {
      title: "Wishlist Feature",
      description: "For Birthday Groups and General Groups (optional): Create and share wishlists with group members. Add items with pictures, prices, and quantities. Group members can claim items they want to gift, and you can track what's been claimed and what's still available. Mark items as done when received. For General Groups, wishlist can be enabled or disabled in group settings.",
      icon: "🎁"
    },
    {
      title: "Admin Account Details",
      description: "For Subscription and General Groups: View the group creator's (admin's) account details for making contributions. The admin is responsible for managing the subscription or funds. For Birthday Groups, see the celebrant's account details.",
      icon: "👤"
    },
  ]

  return (
    <>
      <ComingSoonModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        storeName={storeName}
      />
      <SEO
        title="GroupFund Features - Member Reliability, Group Health, Multi-Currency & Integrated Chat"
        description="Discover GroupFund's powerful features: automatic payments (auto-pay), in-app wallet system, easy withdrawals, multiple group types (birthday, subscription, general), integrated per-group chat with mentions, member reliability scores, group health metrics, multi-currency support, automatic reminders, real-time payment tracking, two-factor authentication, and customizable notifications. Everything in one place - payments AND chat."
        keywords="groupfund features, group contribution app features, group payment app with chat, group contribution app with messaging, in-app messaging for group payments, birthday groups, subscription groups, general groups, member reliability scores, group health metrics, multi-currency payments, payment tracking, automatic reminders, group chat, messaging"
        canonical="https://www.groupfund.app/features"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Powerful Features for Organized Contributions</h1>
          <p className="page-subtitle">
            Everything you need to organize group contributions effortlessly - for birthdays, subscriptions, events, and more. No more WhatsApp chaos or Excel spreadsheets.
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
            <p>Start organizing your group's contributions today - for birthdays, subscriptions, or any purpose. It's free to get started!</p>
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
                href="https://play.google.com/store/apps/details?id=com.groupfund.app"
                className="app-badge" 
                aria-label="Get GroupFund on Google Play"
                target="_blank"
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