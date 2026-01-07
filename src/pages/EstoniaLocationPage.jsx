import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function EstoniaLocationPage() {
  useEffect(() => {
    const localBusinessStructuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "GroupFund",
      "description": "Organize group contributions in Estonia with GroupFund. Perfect for Estonian families, communities, schools, and groups.",
      "url": "https://groupfund.app/locations/estonia",
      "logo": "https://groupfund.app/logo.png",
      "areaServed": { "@type": "Country", "name": "Estonia" },
      "serviceType": "Group Contribution Management",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "EUR" },
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
        title="GroupFund Estonia - Group Contributions App for Estonia"
        description="Organize group contributions in Estonia with GroupFund. Perfect for Estonian families, communities, schools, and groups. Support for EUR (Euro). Free to start."
        keywords="group contributions Estonia, Estonia contribution app, groupfund Estonia, group contributions app Estonia, EUR contribution tracker, Estonia group payments"
        canonical="https://www.groupfund.app/locations/estonia"
      />
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">GroupFund for Estonia 🇪🇪</h1>
          <p className="page-subtitle">
            Organize group contributions in Estonia with GroupFund. Perfect for Estonian families, communities, schools, and groups.
          </p>
        </div>
      </section>
      <section className="location-detail-page">
        <div className="container">
          <div className="location-content">
            <div className="location-section">
              <h2>Why GroupFund Works Great in Estonia</h2>
              <p>
                Estonia is a Baltic country in Northern Europe with a highly digital society and strong community ties in cities like Tallinn and Tartu.
              </p>
              <p>
                With support for the Euro (EUR) and local bank details, GroupFund is designed to work seamlessly for Estonian groups of all sizes.
              </p>
            </div>

            <div className="location-section">
              <h2>Key Features for Estonia</h2>
              <div className="features-list">
                <div className="feature-item">
                  <h3>🇪🇪 Euro (EUR) Support</h3>
                  <p>
                    Full support for the Euro. Set contribution amounts in EUR so everyone contributes in Estonia’s official currency.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>🏦 Local Bank Transfers</h3>
                  <p>
                    Works with local Euro transfers and SEPA payments; members send money using their bank and then mark payments as completed in GroupFund.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>👨‍👩‍👧‍👦 Perfect for Estonian Families</h3>
                  <p>
                    Organize contributions for extended Estonian families, whether in Tallinn, Tartu, or smaller towns.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>🏘 Community & Village Groups</h3>
                  <p>
                    Ideal for local community groups coordinating shared support for events and needs across Estonia.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>🏫 Schools & Universities</h3>
                  <p>
                    Great for schools, universities, and student organizations managing shared contributions for events and staff.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>📱 Digital-First Experience</h3>
                  <p>
                    A mobile-friendly experience that fits Estonia’s advanced digital infrastructure and high internet usage.
                  </p>
                </div>
              </div>
            </div>

            <div className="location-section">
              <h2>Common Use Cases in Estonia</h2>
              <ul className="scenarios-list">
                <li>
                  <strong>Family Group Contributions:</strong> Organize contributions for birthdays, weddings, and other family events.
                </li>
                <li>
                  <strong>Community Funds:</strong> Manage shared contributions for local community or village projects.
                </li>
                <li>
                  <strong>School Groups:</strong> Collect contributions for teachers, staff, and student activities.
                </li>
                <li>
                  <strong>Alumni Associations:</strong> Coordinate contributions among alumni from Estonian schools and universities.
                </li>
                <li>
                  <strong>Workplace Groups:</strong> Organize office birthday and support funds in Estonian companies.
                </li>
                <li>
                  <strong>Friend Groups:</strong> Keep friend circles organized for shared gifting and celebrations.
                </li>
              </ul>
            </div>

            <div className="location-section">
              <h2>How It Works in Estonia</h2>
              <ol className="steps-list">
                <li>
                  <strong>Create Your Group:</strong> Set up a group with Euro (EUR) as the currency.
                </li>
                <li>
                  <strong>Set Contribution Amounts:</strong> Choose EUR amounts per person that fit your group.
                </li>
                <li>
                  <strong>Add Member Birthdays or Events:</strong> Add all key dates and events to the calendar.
                </li>
                <li>
                  <strong>Track Contributions:</strong> Members mark contributions as paid after sending via their preferred transfer method.
                </li>
                <li>
                  <strong>Automatic Reminders:</strong> GroupFund sends reminders before deadlines so fewer people forget to contribute.
                </li>
                <li>
                  <strong>Focus on the Celebration:</strong> Spend more time enjoying the event and less time chasing payments.
                </li>
              </ol>
            </div>

            <div className="location-section">
              <h2>Why Estonian Groups Choose GroupFund</h2>
              <ul className="benefits-list">
                <li>Support for Euro (EUR)</li>
                <li>Clear tracking of who has paid and who has not</li>
                <li>Digital-first, mobile-friendly experience</li>
                <li>Free to use with no hidden fees</li>
                <li>Works for small and large groups</li>
                <li>Transparent records that build trust</li>
                <li>Automatic reminders reduce manual follow-ups</li>
                <li>Member reliability scores help organizers plan better</li>
              </ul>
            </div>

            <div className="cta-box">
              <h2>Ready to Organize Group Contributions in Estonia?</h2>
              <p>Join Estonian groups using GroupFund to make contributions organized and stress-free.</p>
              <div className="cta-buttons">
                <Link to="/get-started" className="btn btn-primary btn-large">
                  Start Your Estonia Group
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
