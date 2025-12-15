import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import ComingSoonModal from '../components/ComingSoonModal'
import '../App.css'

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false)
  const [storeName, setStoreName] = useState('')

  useEffect(() => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault()
        const target = document.querySelector(this.getAttribute('href'))
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      })
    })
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
        title="GroupFund - Organize Group Birthday Contributions | Member Reliability & Group Health"
        description="End birthday contribution chaos for families, churches, and groups. Track who paid, see member reliability scores, monitor group health metrics, set fixed amounts, get automatic reminders. Multi-currency support (NGN, USD, GBP). Free to start."
        keywords="birthday contributions, group payments, member reliability scores, group health metrics, birthday tracking, contribution management, group wallet, family contributions, church contributions, payment reminders, multi-currency payments, Nigeria"
        canonical="https://groupfund.app/"
      />

      {/* Hero Section */}
      <header className="hero" role="banner">
        <div className="hero-background">
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
        </div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              <span>✨ Trusted by 100+ Groups</span>
            </div>
            <h1 className="hero-headline">
              End Birthday Contribution Chaos Forever
            </h1>
            <p className="hero-subheadline">
              The smart way to organize group birthday contributions. Track payments in real-time, see member reliability scores, monitor group health metrics, set fixed amounts, and never miss a contribution with automatic reminders. Works with any currency: NGN, USD, GBP, and more.
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
              <Link to="/waitlist" className="btn btn-primary" aria-label="Start your free group">
                Start Your Free Group
              </Link>
              <Link to="/how-it-works" className="btn btn-secondary" aria-label="Learn more about features">
                See How It Works
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Problem Section */}
      <section className="problem-section" aria-labelledby="problem-heading">
        <div className="container">
          <div className="problem-content">
            <h2 id="problem-heading" className="section-title">Tired of Chasing Contributions?</h2>
            <p className="section-subtitle">
              Stop juggling WhatsApp messages, Excel spreadsheets, and forgotten payments. GroupFund brings order to group birthday contributions.
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
              <p>Replace scattered WhatsApp chats and messy spreadsheets with a single, organized platform. All your group's birthdays and contributions in one clear dashboard.</p>
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
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                  <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                </svg>
              </div>
              <h3>Smart Reminders</h3>
              <p>Automatic reminders sent 7 days before each birthday and on the deadline. Get helpful recaps like "8 out of 10 members have paid for John's birthday."</p>
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
              <h3>Birthday Calendar</h3>
              <p>Never miss a birthday with our integrated calendar view. See all upcoming birthdays at a glance and plan contributions ahead of time.</p>
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
              <p>Transform your family WhatsApp group into an organized contribution system. Fair, transparent, and stress-free birthday celebrations for everyone.</p>
            </article>
            <article className="use-case-card">
              <div className="use-case-icon">⛪</div>
              <h3>Churches</h3>
              <p>Manage church group contributions without the administrative headache. Keep track of member contributions for birthdays and special events effortlessly.</p>
            </article>
            <article className="use-case-card">
              <div className="use-case-icon">🏫</div>
              <h3>Schools</h3>
              <p>Organize class or school group contributions with ease. Set clear expectations, track payments, and ensure everyone contributes fairly.</p>
            </article>
            <article className="use-case-card">
              <div className="use-case-icon">👥</div>
              <h3>Friend Groups</h3>
              <p>Keep your friend group's birthday contributions organized. No more awkward reminders or forgotten payments, just smooth, fair celebrations.</p>
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
                <p>"Finally, no more chasing people on WhatsApp! GroupFund made our family birthday contributions so much easier."</p>
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
            <p className="cta-subtitle">Join 100+ groups already on waitlist for GroupFund to manage their birthday contributions</p>
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
            <Link to="/waitlist" className="btn btn-primary btn-large" aria-label="Start your free group now">
              Start Your Free Group Now
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

