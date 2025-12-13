import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import ComingSoonModal from '../components/ComingSoonModal'
import '../App.css'

export default function DownloadPage() {
  const [modalOpen, setModalOpen] = useState(false)
  const [storeName, setStoreName] = useState('')

  const handleAppStoreClick = (e, name) => {
    e.preventDefault()
    setStoreName(name)
    setModalOpen(true)
  }

  return (
    <>
      <ComingSoonModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        storeName={storeName}
      />
      <SEO
        title="Download GroupFund App - iOS & Android | GroupFund"
        description="Download GroupFund app for iOS and Android. Organize group birthday contributions effortlessly. Track payments, set reminders, manage multiple groups. Free to start."
        keywords="download GroupFund, GroupFund app, iOS download, Android download, group contribution app, birthday tracking app"
        canonical="https://groupfund.app/download"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Download GroupFund</h1>
          <p className="page-subtitle">
            Get the app and start organizing your group's birthday contributions today. Available for iOS and Android.
          </p>
        </div>
      </section>

      <section className="download-page">
        <div className="container">
          <div className="download-content">
            <div className="download-features">
              <h2>Why Download the App?</h2>
              <div className="download-features-grid">
                <div className="download-feature-card">
                  <div className="download-feature-icon">📱</div>
                  <h3>Mobile-First Experience</h3>
                  <p>Optimized for your smartphone with an intuitive interface designed for quick contribution tracking on the go.</p>
                </div>
                <div className="download-feature-card">
                  <div className="download-feature-icon">🔔</div>
                  <h3>Push Notifications</h3>
                  <p>Get instant reminders about upcoming birthdays and payment deadlines directly on your device.</p>
                </div>
                <div className="download-feature-card">
                  <div className="download-feature-icon">📅</div>
                  <h3>Calendar Integration</h3>
                  <p>Sync with your device calendar to never miss a birthday or contribution deadline.</p>
                </div>
                <div className="download-feature-card">
                  <div className="download-feature-icon">⚡</div>
                  <h3>Offline Access</h3>
                  <p>View your groups and contribution status even when you're offline. Syncs automatically when you're back online.</p>
                </div>
                <div className="download-feature-card">
                  <div className="download-feature-icon">🔒</div>
                  <h3>Secure & Private</h3>
                  <p>Your data is encrypted and secure. We never store your payment information—only contribution tracking.</p>
                </div>
                <div className="download-feature-card">
                  <div className="download-feature-icon">🌍</div>
                  <h3>Multi-Currency Support</h3>
                  <p>Works with NGN, USD, GBP, and more. Perfect for international groups and families.</p>
                </div>
              </div>
            </div>

            <div className="download-cta-section">
              <h2>Get Started in Minutes</h2>
              <p>Download the app, create your first group, and start organizing birthday contributions today. It's free to get started!</p>
              
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

              <div className="download-alternative">
                <p>Don't have a smartphone? <Link to="/features">Use GroupFund on the web</Link></p>
              </div>
            </div>

            <div className="download-steps">
              <h2>How to Get Started</h2>
              <div className="steps-grid">
                <div className="step-card">
                  <div className="step-number">1</div>
                  <h3>Download the App</h3>
                  <p>Get GroupFund from the App Store or Google Play Store. It's free to download.</p>
                </div>
                <div className="step-card">
                  <div className="step-number">2</div>
                  <h3>Create Your Account</h3>
                  <p>Sign up with your email or phone number. No credit card required.</p>
                </div>
                <div className="step-card">
                  <div className="step-number">3</div>
                  <h3>Create Your First Group</h3>
                  <p>Add your group members and set up your first birthday contribution.</p>
                </div>
                <div className="step-card">
                  <div className="step-number">4</div>
                  <h3>Start Organizing</h3>
                  <p>Invite members, set contribution amounts, and let GroupFund handle the rest!</p>
                </div>
              </div>
            </div>

            <div className="download-faq">
              <h2>Frequently Asked Questions</h2>
              <div className="faq-list">
                <div className="faq-item">
                  <h3>Is the app free?</h3>
                  <p>Yes! GroupFund is free to download and free to start. You can create your first group and start organizing contributions at no cost.</p>
                </div>
                <div className="faq-item">
                  <h3>Do I need to create an account?</h3>
                  <p>Yes, you'll need to create a free account to use GroupFund. This allows you to create groups, track contributions, and access your data across devices.</p>
                </div>
                <div className="faq-item">
                  <h3>Can I use GroupFund on multiple devices?</h3>
                  <p>Absolutely! Your account syncs across all your devices, so you can access your groups from your phone, tablet, or computer.</p>
                </div>
                <div className="faq-item">
                  <h3>What if the app isn't available in my country?</h3>
                  <p>You can still use GroupFund through our web app. Visit <Link to="/">groupfund.app</Link> to get started.</p>
                </div>
              </div>
            </div>

            <div className="download-cta-box">
              <h2>Ready to Get Started?</h2>
              <p>Join 100+ groups already using GroupFund to organize their birthday contributions.</p>
              <div className="cta-buttons">
                <Link to="/how-it-works" className="btn btn-secondary btn-large">
                  Learn How It Works
                </Link>
                <Link to="/features" className="btn btn-primary btn-large">
                  View Features
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
