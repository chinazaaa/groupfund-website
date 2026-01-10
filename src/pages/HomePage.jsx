import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import ComingSoonModal from '../components/ComingSoonModal'
import '../App.css'

// 🎄 CHRISTMAS MODE: Set to false after Christmas season to revert to normal mode
const NEW_YEAR_MODE= false

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false)
  const [storeName, setStoreName] = useState('')

  useEffect(() => {
    // Smooth scroll for anchor links
    const anchors = document.querySelectorAll('a[href^="#"]')
    const handleClick = (e) => {
      e.preventDefault()
      const href = e.currentTarget.getAttribute('href')
      const target = document.querySelector(href)
      if (target) {
        // Use requestAnimationFrame to avoid blocking
        requestAnimationFrame(() => {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        })
      }
    }
    
    anchors.forEach(anchor => {
      anchor.addEventListener('click', handleClick)
    })
    
    // Cleanup event listeners
    return () => {
      anchors.forEach(anchor => {
        anchor.removeEventListener('click', handleClick)
      })
    }
  }, [])

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
        title={NEW_YEAR_MODE 
          ? "GroupFund - Organize New Year 2026 Contributions & Party Funds | Group Celebration Funds"
          : "GroupFund - Best App to Manage Group Expenses for Birthdays | Group Payment App"}
        description={NEW_YEAR_MODE
          ? "🎉 Happy New Year 2026! Organize New Year contributions, party funds, and celebration expenses. Track group payments, set deadlines, coordinate event costs. Perfect for New Year's Eve! Track who paid, see member reliability scores, set fixed amounts, get automatic reminders, communicate with per-group chat. Multi-currency support (NGN, USD, GBP). Free to start."
          : "The best app to manage group expenses for birthdays, gifts, and events. Collect money from groups, track contributions, send automatic reminders. Perfect for birthday gifts, group payments, and shared expenses. Multi-currency support (NGN, USD, GBP). Free to start."}
        keywords={NEW_YEAR_MODE
          ? "New Year contributions, New Year party funds, New Year's Eve contributions, celebration group payments, New Year 2026, organize New Year party, group celebrations, New Year contribution tracking, party cost sharing, celebration contributions, group event coordination, New Year's Eve expenses, birthday contributions, subscription groups, group payments, contribution tracking, contribution management, group wallet, family contributions, church contributions, payment reminders, multi-currency payments, Nigeria"
          : "app to manage group expenses for birthdays, best app for group payments, collect money for group gift, best way to collect money from a group, group payment app, birthday expense tracker, group contribution app, manage group expenses, birthday group app, collect money from friends, pay friends easily for group events, easy way to pay friends for events, best app for splitting bills, split costs with friends, group expense tracker, split money with friends, best way to split bills, split costs app, group money app, split expenses with friends, how to split costs with friends, split bills app, collect money app, money collection app, group payment tracker, how to collect money from a group"}
        canonical="https://www.groupfund.app/"
      />

      {/* New Year Banner */}
      {NEW_YEAR_MODE && (
        <div style={{
          background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
          color: 'white',
          padding: '16px 0',
          textAlign: 'center',
          fontWeight: '600',
          fontSize: '16px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
        }}>
          <div className="container">
            🎉 <strong>Happy New Year 2026!</strong> 🎊 Organize your New Year contributions, party funds, and celebration expenses today. Track payments, set deadlines, and ensure everyone contributes fairly. <Link to="/blog/how-to-organize-new-year-contributions-party-funds-2026" style={{color: 'white', textDecoration: 'underline', marginLeft: '8px'}}>Learn More →</Link>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <header className="hero" role="banner">
        <div className="hero-background">
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
        </div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              <span>{NEW_YEAR_MODE ? '🎉 Perfect for New Year 2026 • ' : ''}✨ Trusted by 100+ Groups</span>
            </div>
            <h1 className="hero-headline">
              {NEW_YEAR_MODE 
                ? 'Organize New Year 2026 Contributions & Party Funds'
                : 'Organize Group Contributions for Any Purpose'}
            </h1>
            <p className="hero-subheadline">
              {NEW_YEAR_MODE
                ? 'The smart way to organize New Year contributions, party funds, celebration expenses, birthdays, and shared subscriptions. Track payments in real-time, set deadlines, coordinate event costs, see member reliability scores, monitor group health metrics, set fixed amounts, and never miss a contribution with automatic reminders.'
                : 'The smart way to organize group contributions for birthdays, shared subscriptions, and any purpose. Track payments in real-time, see member reliability scores, monitor group health metrics, set fixed amounts, and never miss a contribution with automatic reminders.'}
            </p>
            <div className="hero-features">
              <div className="feature-tag">
                <span className="check-icon">✓</span>
                <span>Free to Start</span>
              </div>
              <div className="feature-tag">
                <span className="check-icon">✓</span>
                <span>Multi-Currency</span>
              </div>
              <div className="feature-tag">
                <span className="check-icon">✓</span>
                <span>Auto Reminders</span>
              </div>
            </div>
            <div className="hero-cta">
            <Link to="/get-started" className="btn btn-primary" aria-label="Start your free group">
  {NEW_YEAR_MODE ? '🎉 Organize New Year Contributions Now' : 'Start Your Free Group'}
</Link>

<Link 
  to={NEW_YEAR_MODE ? "/blog/how-to-organize-new-year-contributions-party-funds-2026" : "/how-it-works"} 
  className="btn btn-secondary" 
  aria-label={NEW_YEAR_MODE ? "Learn about New Year contributions" : "Learn more about features"}
>
  {NEW_YEAR_MODE ? 'New Year Guide 2026' : 'See How It Works'}
</Link>
            </div>
            <p className="hero-learn-more">
              <Link to="/how-it-works" style={{ color: 'white', textDecoration: 'none', fontWeight: '500' }}>
                Learn how it works →
              </Link>
            </p>
          </div>
        </div>
      </header>

      {/* Problem Section */}
      <section className="problem-section" aria-labelledby="problem-heading">
        <div className="container">
          <div className="problem-content">
            <h2 id="problem-heading" className="section-title">
              {NEW_YEAR_MODE ? 'Tired of Chasing New Year Party Contributions?' : 'Tired of Chasing Contributions?'}
            </h2>
            <p className="section-subtitle">
              {NEW_YEAR_MODE
                ? 'Stop juggling WhatsApp messages, Excel spreadsheets, and forgotten payments. GroupFund brings order to New Year contributions, party funds, celebration expenses, birthdays, subscriptions, events, and more. Perfect for organizing New Year celebrations 2026!'
                : 'Stop juggling WhatsApp messages, Excel spreadsheets, and forgotten payments. GroupFund brings order to group contributions for birthdays, subscriptions, events, and more.'}
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features" aria-labelledby="features-heading">
        <div className="container">
          <div className="section-header">
            <h2 id="features-heading" className="section-title">Everything You Need, All in One Place</h2>
            <p className="section-subtitle">Powerful features designed to make group contributions effortless</p>
          </div>
          <div className="features-grid">
            <article className="feature-card">
              <div className="feature-icon-wrapper">
                <svg className="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <h3>Centralized Organization</h3>
              <p>Replace scattered WhatsApp chats and messy spreadsheets with a single, organized platform. All your group's contributions, birthdays, subscriptions, and events in one clear dashboard.</p>
            </article>
            <article className="feature-card">
              <div className="feature-icon-wrapper">
                <svg className="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="12" y1="1" x2="12" y2="23"></line>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
              </div>
              <h3>Fixed Amounts & Clear Totals</h3>
              <p>Set a fixed contribution amount per person (like 5,000) and see your group's maximum size upfront. Instantly calculate your yearly total, no surprises.</p>
            </article>
            <article className="feature-card">
              <div className="feature-icon-wrapper">
                <svg className="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <h3>Contribution Confirmation</h3>
              <p>Celebrants can confirm or reject contributions they receive, ensuring transparency and accuracy. Track confirmed payments and handle any discrepancies with clear status updates.</p>
            </article>
            <article className="feature-card">
              <div className="feature-icon-wrapper">
                <svg className="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                  <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                </svg>
              </div>
              <h3>Smart Reminders</h3>
              <p>Automatic reminders sent before deadlines for birthdays, subscriptions, and events. Get helpful recaps like "8 out of 10 members have paid" to stay informed about contribution progress.</p>
            </article>
            <article className="feature-card">
              <div className="feature-icon-wrapper">
                <svg className="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
              </div>
              <h3>Real-Time Status Tracking</h3>
              <p>See contribution statuses at a glance: Not Paid, Paid (awaiting confirmation), Confirmed, or Not Received. Know exactly who has paid and who still needs a gentle reminder.</p>
            </article>
            <article className="feature-card">
              <div className="feature-icon-wrapper">
                <svg className="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <h3>Member Reliability Scores</h3>
              <p>See member reliability scores (0-100) and ratings before joining groups. View total contributions, on-time payment rates, and make informed decisions about group participation.</p>
            </article>
            <article className="feature-card">
              <div className="feature-icon-wrapper">
                <svg className="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 3h18v18H3zM9 9h6v6H9z"/>
                </svg>
              </div>
              <h3>Group Health Metrics</h3>
              <p>Track group compliance metrics and health ratings. Preview groups before joining to see how well they maintain contribution standards and member participation.</p>
            </article>
            <article className="feature-card">
              <div className="feature-icon-wrapper">
                <svg className="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
              </div>
              <h3>Global Currency Support</h3>
              <p>Choose your group's currency: NGN, USD, GBP, EUR, and more. Local bank details are displayed automatically, making international groups seamless.</p>
            </article>
            <article className="feature-card">
              <div className="feature-icon-wrapper">
                <svg className="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
              </div>
              <h3>Multiple Group Types</h3>
              <p>Create Birthday Groups, Subscription Groups (for shared subscriptions like Netflix, Spotify), or General Groups (for weddings, events, any purpose). Each type has features tailored to your needs.</p>
            </article>
            <article className="feature-card">
              <div className="feature-icon-wrapper">
                <svg className="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </div>
              <h3>Birthday Calendar & Wishlist</h3>
              <p>Never miss a birthday with our integrated calendar view. For birthday groups, create and share wishlists with items, pictures, and prices. Group members can claim items they want to gift.</p>
            </article>
            <article className="feature-card">
              <div className="feature-icon-wrapper">
                <svg className="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
              </div>
              <h3>Per-Group Chat & Messaging</h3>
              <p>Enable optional group chat for seamless communication. Mention members with @username, get smart notifications, and customize preferences. Chat is disabled by default and can be toggled by group creators.</p>
            </article>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="use-cases" aria-labelledby="use-cases-heading">
        <div className="container">
          <div className="section-header">
            <h2 id="use-cases-heading" className="section-title">Perfect for Every Group</h2>
            <p className="section-subtitle">Whether you're organizing family contributions or managing church events</p>
          </div>
          <div className="use-cases-grid">
            <article className="use-case-card">
              <div className="use-case-icon">👨‍👩‍👧‍👦</div>
              <h3>Families</h3>
              <p>Transform your family WhatsApp group into an organized contribution system. Fair, transparent, and stress-free contributions for birthdays, subscriptions, and events.</p>
            </article>
            <article className="use-case-card">
              <div className="use-case-icon">⛪</div>
              <h3>Churches</h3>
              <p>Manage church group contributions without the administrative headache. Keep track of member contributions for birthdays, subscriptions, and special events effortlessly.</p>
            </article>
            <article className="use-case-card">
              <div className="use-case-icon">🏫</div>
              <h3>Schools</h3>
              <p>Organize class or school group contributions with ease. Set clear expectations, track payments, and ensure everyone contributes fairly for any purpose.</p>
            </article>
            <article className="use-case-card">
              <div className="use-case-icon">👥</div>
              <h3>Friend Groups</h3>
              <p>Keep your friend group's contributions organized - birthdays, shared subscriptions, events. No more awkward reminders or forgotten payments.</p>
            </article>
            <article className="use-case-card">
              <div className="use-case-icon">💼</div>
              <h3>Workplace</h3>
              <p>Organize office funds professionally - group contributions, shared subscriptions, team events. Maintain clear records and reduce administrative burden.</p>
            </article>
            <article className="use-case-card">
              <div className="use-case-icon">🏘️</div>
              <h3>Community Organizations</h3>
              <p>Perfect for neighborhood groups, alumni associations, sports clubs, and hobby organizations. Maintain transparency and fairness across diverse community groups.</p>
            </article>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      {/* <section className="social-proof" aria-labelledby="social-proof-heading">
        <div className="container">
          <div className="social-proof-content">
            <h2 id="social-proof-heading" className="section-title">Trusted by Groups Across Nigeria</h2>
            <p className="trust-stats">100+ Active Groups</p>
            <div className="testimonials">
              <blockquote className="testimonial">
                <p>"Finally, no more chasing people on WhatsApp! GroupFund made our family group contributions so much easier."</p>
                <cite>— Family Group Admin, Lagos</cite>
              </blockquote>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section id="download" className="cta-section" aria-labelledby="cta-heading">
        <div className="container">
          <div className="cta-content">
            <h2 id="cta-heading" className="cta-title">Ready to Organize Your Group?</h2>
            <p className="cta-subtitle">Join 100+ groups already using GroupFund to manage their group contributions</p>
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
            <a href="https://groupfund.app/get-started" className="btn btn-primary btn-large" aria-label="Start your free group now" target="_blank" rel="noopener noreferrer">
              Start Your Free Group Now
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

