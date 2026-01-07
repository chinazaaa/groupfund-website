import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function ChinaLocationPage() {
  useEffect(() => {
    const localBusinessStructuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "GroupFund",
      "description": "Organize group contributions in China with GroupFund. Perfect for Chinese families, churches, schools, and groups.",
      "url": "https://groupfund.app/locations/china",
      "logo": "https://groupfund.app/logo.png",
      "areaServed": { "@type": "Country", "name": "China" },
      "serviceType": "Group Contribution Management",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "CNY" },
      "sameAs": ["https://groupfund.app"]
    }
    const existingScript = document.querySelector('script[data-localbusiness-schema]')
    if (existingScript) existingScript.remove()
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.setAttribute('data-localbusiness-schema', 'true')
    script.textContent = JSON.stringify(localBusinessStructuredData)
    document.head.appendChild(script)
    return () => {
      const scriptToRemove = document.querySelector('script[data-localbusiness-schema]')
      if (scriptToRemove) scriptToRemove.remove()
    }
  }, [])

  return (
    <>
      <SEO
        title="GroupFund China - Group Contributions App for China"
        description="Organize group contributions in China with GroupFund. Perfect for Chinese families, churches, schools, and groups. Support for CNY (Chinese Yuan Renminbi). Free to start."
        keywords="group contributions China, China contribution app, groupfund China, group contributions app China, CNY contribution tracker, China group payments"
        canonical="https://www.groupfund.app/locations/china"
      />
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">GroupFund for China 🇨🇳</h1>
          <p className="page-subtitle">
            Organize group contributions in China with GroupFund. Perfect for Chinese families, churches, schools, and groups.
          </p>
        </div>
      </section>
      <section className="location-detail-page">
        <div className="container">
          <div className="location-content">
            <div className="location-section">
              <h2>Why GroupFund Works Great in China</h2>
              <p>
                GroupFund is perfect for organizing group contributions in China. Whether you're managing contributions for your extended family,
                church members, school groups, or friend circles, GroupFund makes it simple and transparent.
              </p>
              <p>
                With support for Chinese Yuan Renminbi (CNY) and local bank details, GroupFund is designed to work seamlessly for Chinese groups.
              </p>
            </div>

            <div className="location-section">
              <h2>Key Features for China</h2>
              <div className="features-list">
                <div className="feature-item">
                  <h3>🇨🇳 Chinese Yuan (CNY) Support</h3>
                  <p>
                    Full support for Chinese Yuan Renminbi. Set contribution amounts in CNY, and local bank details are displayed automatically.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>🏦 Local Bank Transfers</h3>
                  <p>
                    Works with common Chinese bank transfer methods. Members can transfer directly to celebrants' bank accounts.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>👨‍👩‍👧‍👦 Perfect for Chinese Families</h3>
                  <p>
                    Organize contributions for extended Chinese families. Track who has contributed across multiple family members.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>⛪ Community & Church Groups</h3>
                  <p>
                    Ideal for Chinese community groups and churches organizing group contributions for members.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>🏫 Schools & Universities</h3>
                  <p>
                    Perfect for Chinese schools, universities, and student groups organizing group contributions.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>📱 Mobile-First</h3>
                  <p>
                    Native mobile app suited to China’s mobile-first culture. Access from anywhere and get push notifications.
                  </p>
                </div>
              </div>
            </div>

            <div className="location-section">
              <h2>Common Use Cases in China</h2>
              <ul className="scenarios-list">
                <li>
                  <strong>Family Group Contributions:</strong> Organize contributions for extended Chinese families.
                </li>
                <li>
                  <strong>Community Contributions:</strong> Manage group contributions for local community groups and associations.
                </li>
                <li>
                  <strong>School Groups:</strong> Organize contributions for teachers, staff, and students in Chinese schools.
                </li>
                <li>
                  <strong>Alumni Associations:</strong> Manage contributions for Chinese university and school alumni groups.
                </li>
                <li>
                  <strong>Workplace Groups:</strong> Organize office birthday funds for companies and organizations in China.
                </li>
                <li>
                  <strong>Friend Groups:</strong> Keep friend groups organized for birthday celebrations and events in China.
                </li>
              </ul>
            </div>

            <div className="location-section">
              <h2>How It Works in China</h2>
              <ol className="steps-list">
                <li>
                  <strong>Create Your Group:</strong> Set up a group with Chinese Yuan (CNY) as the currency.
                </li>
                <li>
                  <strong>Set Contribution Amounts:</strong> Set amounts in CNY (e.g., ¥50, ¥100, or ¥200 per person).
                </li>
                <li>
                  <strong>Add Member Birthdays:</strong> Add all group member birthdays to the calendar.
                </li>
                <li>
                  <strong>Track Contributions:</strong> Members mark payments as paid after transferring via their preferred bank method.
                </li>
                <li>
                  <strong>Automatic Reminders:</strong> Get reminders 7 days before, 1 day before, and on deadline day.
                </li>
                <li>
                  <strong>Celebrate Together:</strong> Focus on celebrating birthdays instead of managing contributions.
                </li>
              </ol>
            </div>

            <div className="location-section">
              <h2>Why Chinese Groups Choose GroupFund</h2>
              <ul className="benefits-list">
                <li>Support for Chinese Yuan (CNY)</li>
                <li>Works with common Chinese bank transfer methods</li>
                <li>Mobile-first design</li>
                <li>Free to use - no hidden fees</li>
                <li>Works for groups of any size</li>
                <li>Transparent tracking builds trust</li>
                <li>Automatic reminders reduce follow-ups</li>
                <li>Member reliability scores help make informed decisions</li>
              </ul>
            </div>

            <div className="cta-box">
              <h2>Ready to Organize Group Contributions in China?</h2>
              <p>Join Chinese groups using GroupFund to make contributions organized and stress-free.</p>
              <div className="cta-buttons">
                <Link to="/get-started" className="btn btn-primary btn-large">
                  Start Your China Group
                </Link>
                <Link to="/how-it-works" className="btn btn-secondary btn-large">
                  See How It Works
                </Link>
              </div>
            </div>

            <div className="related-links">
              <h3>Explore More</h3>
              <div className="related-links-grid">
                <Link to="/locations">All Locations →</Link>
                <Link to="/use-cases">View Use Cases →</Link>
                <Link to="/features">View Features →</Link>
                <Link to="/pricing">See Pricing →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
