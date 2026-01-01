import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function JapanLocationPage() {
  useEffect(() => {
    const localBusinessStructuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "GroupFund",
      "description": "Organize group contributions in Japan with GroupFund. Perfect for Japanese families, communities, schools, and groups.",
      "url": "https://groupfund.app/locations/japan",
      "logo": "https://groupfund.app/logo.png",
      "areaServed": { "@type": "Country", "name": "Japan" },
      "serviceType": "Group Contribution Management",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "JPY" },
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
        title="GroupFund Japan - Group Contributions App for Japan"
        description="Organize group contributions in Japan with GroupFund. Perfect for Japanese families, communities, schools, and groups. Support for JPY (Japanese Yen). Free to start."
        keywords="group contributions Japan, Japan contribution app, groupfund Japan, group contributions app Japan, JPY contribution tracker, Japan group payments"
        canonical="https://www.groupfund.app/locations/japan"
      />
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">GroupFund for Japan 🇯🇵</h1>
          <p className="page-subtitle">
            Organize group contributions in Japan with GroupFund. Perfect for Japanese families, communities, schools, and groups.
          </p>
        </div>
      </section>
      <section className="location-detail-page">
        <div className="container">
          <div className="location-content">
            <div className="location-section">
              <h2>Why GroupFund Works Great in Japan</h2>
              <p>
                GroupFund is ideal for organizing group contributions in Japan. Whether you're managing contributions for your extended family,
                community groups, school groups, or friend circles, GroupFund makes it simple and transparent.
              </p>
              <p>
                With support for Japanese Yen (JPY) and local bank details, GroupFund is designed to work seamlessly for Japanese groups.
              </p>
            </div>

            <div className="location-section">
              <h2>Key Features for Japan</h2>
              <div className="features-list">
                <div className="feature-item">
                  <h3>🇯🇵 Japanese Yen (JPY) Support</h3>
                  <p>
                    Full support for Japanese Yen. Set contribution amounts in JPY, and local bank details are displayed automatically.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>🏦 Local Bank Transfers</h3>
                  <p>
                    Works with common Japanese bank transfer methods such as furikomi. Members can transfer directly to celebrants' bank accounts.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>👨‍👩‍👧‍👦 Perfect for Japanese Families</h3>
                  <p>
                    Organize contributions for extended Japanese families. Track who has contributed across multiple family members.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>🏘 Community Groups</h3>
                  <p>
                    Ideal for Japanese community organizations and local groups managing shared contributions for members.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>🏫 Schools & Universities</h3>
                  <p>
                    Perfect for Japanese schools, universities, and student groups organizing group contributions.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>📱 Mobile-First</h3>
                  <p>
                    Native mobile app suited to Japan’s mobile users. Access from anywhere and get push notifications.
                  </p>
                </div>
              </div>
            </div>

            <div className="location-section">
              <h2>Common Use Cases in Japan</h2>
              <ul className="scenarios-list">
                <li>
                  <strong>Family Group Contributions:</strong> Organize contributions for extended Japanese families.
                </li>
                <li>
                  <strong>Community Contributions:</strong> Manage group contributions for local neighborhood and community groups.
                </li>
                <li>
                  <strong>School Groups:</strong> Organize contributions for teachers, staff, and students in Japanese schools.
                </li>
                <li>
                  <strong>Alumni Associations:</strong> Manage contributions for Japanese university and school alumni groups.
                </li>
                <li>
                  <strong>Workplace Groups:</strong> Organize office birthday funds for companies and organizations in Japan.
                </li>
                <li>
                  <strong>Friend Groups:</strong> Keep friend groups organized for birthday celebrations and events in Japan.
                </li>
              </ul>
            </div>

            <div className="location-section">
              <h2>How It Works in Japan</h2>
              <ol className="steps-list">
                <li>
                  <strong>Create Your Group:</strong> Set up a group with Japanese Yen (JPY) as the currency.
                </li>
                <li>
                  <strong>Set Contribution Amounts:</strong> Set amounts in JPY (e.g., ¥1,000, ¥3,000, or ¥5,000 per person).
                </li>
                <li>
                  <strong>Add Member Birthdays:</strong> Add all group member birthdays to the calendar.
                </li>
                <li>
                  <strong>Track Contributions:</strong> Members mark payments as paid after sending via their preferred bank transfer method.
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
              <h2>Why Japanese Groups Choose GroupFund</h2>
              <ul className="benefits-list">
                <li>Support for Japanese Yen (JPY)</li>
                <li>Works with local Japanese bank transfers</li>
                <li>Mobile-first design</li>
                <li>Free to use - no hidden fees</li>
                <li>Works for groups of any size</li>
                <li>Transparent tracking builds trust</li>
                <li>Automatic reminders reduce follow-ups</li>
                <li>Member reliability scores help make informed decisions</li>
              </ul>
            </div>

            <div className="cta-box">
              <h2>Ready to Organize Group Contributions in Japan?</h2>
              <p>Join Japanese groups using GroupFund to make contributions organized and stress-free.</p>
              <div className="cta-buttons">
                <Link to="/waitlist" className="btn btn-primary btn-large">
                  Start Your Japan Group
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
