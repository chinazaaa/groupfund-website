import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function ColombiaLocationPage() {
  useEffect(() => {
    const localBusinessStructuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "GroupFund",
      "description": "Organize group contributions in Colombia with GroupFund. Perfect for Colombian families, communities, schools, and groups.",
      "url": "https://www.groupfund.app/locations/colombia",
      "logo": "https://www.groupfund.app/logo.png",
      "areaServed": { "@type": "Country", "name": "Colombia" },
      "serviceType": "Group Contribution Management",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "COP" },
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
        title="GroupFund Colombia - Group Contributions App for Colombia"
        description="Organize group contributions in Colombia with GroupFund. Perfect for Colombian families, communities, schools, and groups. Support for COP (Colombian peso). Free to start."
        keywords="group contributions Colombia, Colombia contribution app, groupfund Colombia, group contributions app Colombia, COP contribution tracker, Colombia group payments"
        canonical="https://www.groupfund.app/locations/colombia"
      />
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">GroupFund for Colombia 🇨🇴</h1>
          <p className="page-subtitle">
            Organize group contributions in Colombia with GroupFund. Perfect for Colombian families, communities, schools, and groups.
          </p>
        </div>
      </section>

      <section className="location-detail-page">
        <div className="container">
          <div className="location-content">
            <div className="location-section">
              <h2>Why GroupFund Works Great in Colombia</h2>
              <p>
                Colombia is a country in northwestern South America with major cities like Bogotá, Medellín, Cali, Barranquilla, and Cartagena where group gifting and collections are common.
              </p>
              <p>
                With support for Colombian peso (COP) and local bank details, GroupFund is designed to work seamlessly for Colombian groups of all sizes.
              </p>
            </div>

            <div className="location-section">
              <h2>Key Features for Colombia</h2>
              <div className="features-list">
                <div className="feature-item">
                  <h3>🇨🇴 Colombian Peso (COP) Support</h3>
                  <p>
                    Full support for Colombian peso. Set contribution amounts in COP so everyone contributes in the local currency.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>🏦 Local Bank Transfers</h3>
                  <p>
                    Works with Colombian bank transfers and common payment methods; members send money then mark payments as completed in GroupFund.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>👨‍👩‍👧‍👦 Perfect for Colombian Families</h3>
                  <p>
                    Organize contributions for extended Colombian families for birthdays, weddings, quinceañeras, and other key occasions.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>🏘 Community & Neighborhood Groups</h3>
                  <p>
                    Ideal for local community groups coordinating shared support, charity, and neighborhood projects.
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
                    Mobile-friendly experience that fits Colombia’s growing smartphone and internet usage.
                  </p>
                </div>
              
                <div className="feature-item">
                  <h3>💬 Integrated Group Chat</h3>
                  <p>Coordinate contributions with optional per-group chat. Mention members with @username, share account details, and confirm payments - all in one place. Perfect for local groups.</p>
                </div>
</div>
            </div>

            <div className="location-section">
              <h2>Common Use Cases in Colombia</h2>
              <ul className="scenarios-list">
                <li>
                  <strong>Family Group Contributions:</strong> Organize contributions for birthdays, weddings, and family celebrations.
                </li>
                <li>
                  <strong>Community & Church Funds:</strong> Manage shared contributions for churches, community projects, and local support needs.
                </li>
                <li>
                  <strong>School & University Groups:</strong> Collect contributions for teachers, staff, and student activities.
                </li>
                <li>
                  <strong>Alumni Associations:</strong> Coordinate contributions among alumni from Colombian schools and universities.
                </li>
                <li>
                  <strong>Workplace Groups:</strong> Organize office birthday, farewell, and support funds in Colombian companies.
                </li>
                <li>
                  <strong>Friend Groups:</strong> Keep friend circles organized for shared gifting and celebrations.
                </li>
              </ul>
            </div>

            <div className="location-section">
              <h2>How It Works in Colombia</h2>
              <ol className="steps-list">
                <li>
                  <strong>Create Your Group:</strong> Set up a group with Colombian peso (COP) as the currency.
                </li>
                <li>
                  <strong>Set Contribution Amounts:</strong> Choose COP amounts per person that fit your group.
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
              <h2>Why Colombian Groups Choose GroupFund</h2>
              <ul className="benefits-list">
                <li>Support for Colombian peso (COP)</li>
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
              <h2>Ready to Organize Group Contributions in Colombia?</h2>
              <p>Join Colombian groups using GroupFund to make contributions organized and stress-free.</p>
              <div className="cta-buttons">
                <Link to="/get-started" className="btn btn-primary btn-large">
                  Start Your Colombia Group
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
