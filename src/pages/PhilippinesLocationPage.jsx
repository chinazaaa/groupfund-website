import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function PhilippinesLocationPage() {
  useEffect(() => {
    const localBusinessStructuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "GroupFund",
      "description": "Organize group contributions in the Philippines with GroupFund. Perfect for Filipino families, churches, schools, and groups.",
      "url": "https://www.groupfund.app/locations/philippines",
      "logo": "https://www.groupfund.app/logo.png",
      "areaServed": { "@type": "Country", "name": "Philippines" },
      "serviceType": "Group Contribution Management",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "PHP" },
      "sameAs": ["https://www.groupfund.app"]
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
        title="GroupFund Philippines - Group Contributions App for the Philippines"
        description="Organize group contributions in the Philippines with GroupFund. Perfect for Filipino families, churches, schools, and groups. Support for PHP (Philippine Peso). Free to start."
        keywords="group contributions Philippines, Philippines contribution app, groupfund Philippines, group contributions app Philippines, PHP contribution tracker, Philippines group payments"
        canonical="https://www.groupfund.app/locations/philippines"
      />
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">GroupFund for the Philippines 🇵🇭</h1>
          <p className="page-subtitle">
            Organize group contributions in the Philippines with GroupFund. Perfect for Filipino families, churches, schools, and groups.
          </p>
        </div>
      </section>
      <section className="location-detail-page">
        <div className="container">
          <div className="location-content">
            <div className="location-section">
              <h2>Why GroupFund Works Great in the Philippines</h2>
              <p>
                The Philippines is an archipelagic country in Southeast Asia with strong family ties and active church and community life, where shared contributions are common.
              </p>
              <p>
                With support for Philippine Peso (PHP) and local bank details, GroupFund is designed to work seamlessly for Filipino groups across Luzon, Visayas, and Mindanao.
              </p>
            </div>
            <div className="location-section">
              <h2>Key Features for the Philippines</h2>
              <div className="features-list">
                <div className="feature-item">
                  <h3>🇵🇭 Philippine Peso (PHP) Support</h3>
                  <p>
                    Full support for Philippine Peso. Set contribution amounts in PHP so everyone contributes in the local currency.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>🏦 Local Bank Transfers</h3>
                  <p>
                    Works with local bank transfers and popular payment methods in the Philippines; members transfer then mark payments as paid.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>👨‍👩‍👧‍👦 Perfect for Filipino Families</h3>
                  <p>
                    Organize contributions for extended Filipino families at home or across different islands.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>⛪ Church Groups</h3>
                  <p>
                    Ideal for church communities coordinating group support, offerings, and special collections throughout the Philippines.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>🏫 Schools & Universities</h3>
                  <p>
                    Great for schools, universities, and student organizations managing shared contributions for events and staff.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>📱 Mobile-First</h3>
                  <p>
                    Mobile-friendly experience so members can join, contribute, and track payments from their phones.
                  </p>
                </div>
              </div>
            </div>
            <div className="location-section">
              <h2>Common Use Cases in the Philippines</h2>
              <ul className="scenarios-list">
                <li>
                  <strong>Family Group Contributions:</strong> Organize support for birthdays, weddings, and other family events.
                </li>
                <li>
                  <strong>Church Member Contributions:</strong> Manage group contributions for church members and ministries.
                </li>
                <li>
                  <strong>School Groups:</strong> Collect contributions for teachers, staff, and student activities.
                </li>
                <li>
                  <strong>Alumni Associations:</strong> Coordinate contributions among university and school alumni groups.
                </li>
                <li>
                  <strong>Workplace Groups:</strong> Organize office birthday or support funds in Philippine companies.
                </li>
                <li>
                  <strong>Friend Groups:</strong> Keep barkadas organized for shared gifting and celebrations.
                </li>
              </ul>
            </div>
            <div className="location-section">
              <h2>How It Works in the Philippines</h2>
              <ol className="steps-list">
                <li>
                  <strong>Create Your Group:</strong> Set up a group with Philippine Peso (PHP) as the currency.
                </li>
                <li>
                  <strong>Set Contribution Amounts:</strong> Choose PHP amounts per person that fit your group.
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
              <h2>Why Filipino Groups Choose GroupFund</h2>
              <ul className="benefits-list">
                <li>Support for Philippine Peso (PHP)</li>
                <li>Clear tracking of who has paid and who has not</li>
                <li>Mobile-first design for busy members</li>
                <li>Free to use with no hidden fees</li>
                <li>Works for small and large groups</li>
                <li>Transparent records that build trust</li>
                <li>Automatic reminders reduce manual follow-ups</li>
                <li>Member reliability scores help organizers plan better</li>
              </ul>
            </div>
            <div className="cta-box">
              <h2>Ready to Organize Group Contributions in the Philippines?</h2>
              <p>Join Filipino groups using GroupFund to make contributions organized and stress-free.</p>
              <div className="cta-buttons">
                <Link to="/get-started" className="btn btn-primary btn-large">
                  Start Your Philippines Group
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
