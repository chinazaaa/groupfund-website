import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function SingaporeLocationPage() {
  useEffect(() => {
    const localBusinessStructuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "GroupFund",
      "description": "Organize group contributions in Singapore with GroupFund. Perfect for Singaporean families, communities, schools, and groups.",
      "url": "https://groupfund.app/locations/singapore",
      "logo": "https://groupfund.app/logo.png",
      "areaServed": { "@type": "Country", "name": "Singapore" },
      "serviceType": "Group Contribution Management",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "SGD" },
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
        title="GroupFund Singapore - Group Contributions App for Singapore"
        description="Organize group contributions in Singapore with GroupFund. Perfect for Singaporean families, communities, schools, and groups. Support for SGD (Singapore dollar). Free to start."
        keywords="group contributions Singapore, Singapore contribution app, groupfund Singapore, group contributions app Singapore, SGD contribution tracker, Singapore group payments"
        canonical="https://www.groupfund.app/locations/singapore"
      />
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">GroupFund for Singapore 🇸🇬</h1>
          <p className="page-subtitle">
            Organize group contributions in Singapore with GroupFund. Perfect for Singaporean families, communities, schools, and groups. [web:581][web:584][web:587]
          </p>
        </div>
      </section>

      <section className="location-detail-page">
        <div className="container">
          <div className="location-content">
            <div className="location-section">
              <h2>Why GroupFund Works Great in Singapore</h2>
              <p>
                Singapore is a highly developed city‑state and island nation in Southeast Asia, with one main island and dozens of smaller islets and one of the busiest ports in the world. [web:584][web:587][web:590]
              </p>
              <p>
                With support for the Singapore dollar (SGD) and local payment habits, GroupFund fits how Singaporeans already handle digital payments, savings, and shared expenses. [web:576][web:579][web:580][web:586]
              </p>
            </div>

            <div className="location-section">
              <h2>Key Features for Singapore</h2>
              <div className="features-list">
                <div className="feature-item">
                  <h3>🇸🇬 Singapore Dollar (SGD) Support</h3>
                  <p>
                    Full support for the Singapore dollar, so contribution amounts are set in SGD with values that match everyday prices and salaries. [web:576][web:579][web:583]
                  </p>
                </div>
                <div className="feature-item">
                  <h3>🏦 Digital‑First Payments</h3>
                  <p>
                    Works smoothly with bank transfers and common digital payment methods; members pay as usual and then mark contributions as completed in GroupFund. [web:578][web:586][web:592]
                  </p>
                </div>
                <div className="feature-item">
                  <h3>👨‍👩‍👧‍👦 Perfect for Singaporean Families</h3>
                  <p>
                    Organize contributions for extended families across the island for birthdays, weddings, baby showers, and other occasions. [web:581][web:584]
                  </p>
                </div>
                <div className="feature-item">
                  <h3>🏘 Community & Interest Groups</h3>
                  <p>
                    Ideal for neighbourhood, hobby, and volunteer groups coordinating shared funds and regular collections. [web:581][web:593]
                  </p>
                </div>
                <div className="feature-item">
                  <h3>🏫 Schools & Alumni Networks</h3>
                  <p>
                    Great for schools, university clubs, and alumni groups managing collections for events, staff gifts, and student support.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>📱 Mobile-Optimised</h3>
                  <p>
                    Designed for a highly connected, smartphone‑first population with fast internet and frequent on‑the‑go usage. [web:581][web:587]
                  </p>
                </div>
              </div>
            </div>

            <div className="location-section">
              <h2>Common Use Cases in Singapore</h2>
              <ul className="scenarios-list">
                <li>
                  <strong>Family Group Contributions:</strong> Organize contributions for birthdays, weddings, new baby gifts, and shared celebrations.
                </li>
                <li>
                  <strong>Community & RC Groups:</strong> Track collections for Residents’ Committees, volunteer activities, and neighbourhood events.
                </li>
                <li>
                  <strong>School & CCA Groups:</strong> Collect for teachers, coaches, class events, and co‑curricular activities.
                </li>
                <li>
                  <strong>Alumni & Professional Networks:</strong> Coordinate contributions for reunions, gifts, and charitable drives.
                </li>
                <li>
                  <strong>Workplace Teams:</strong> Run birthday, farewell, and support funds in offices and teams.
                </li>
                <li>
                  <strong>Friend Groups:</strong> Keep friend circles organised for shared gifting, trips, and outings.
                </li>
              </ul>
            </div>

            <div className="location-section">
              <h2>How It Works in Singapore</h2>
              <ol className="steps-list">
                <li>
                  <strong>Create Your Group:</strong> Set up a group with Singapore dollar (SGD) as the currency. [web:576][web:579][web:583]
                </li>
                <li>
                  <strong>Set Contribution Amounts:</strong> Choose SGD amounts per person that fit your group’s norms and budget.
                </li>
                <li>
                  <strong>Add Events & Members:</strong> Add key events and invite members via links or existing chats.
                </li>
                <li>
                  <strong>Members Pay & Confirm:</strong> Members pay using their usual method, then mark their contribution as paid in GroupFund.
                </li>
                <li>
                  <strong>Automatic Reminders:</strong> Scheduled reminders help reduce missed payments without manual chasing.
                </li>
                <li>
                  <strong>See Clear Status:</strong> View who has paid, the total collected, and what is still outstanding at any time.
                </li>
              </ol>
            </div>

            <div className="location-section">
              <h2>Why Singaporean Groups Choose GroupFund</h2>
              <ul className="benefits-list">
                <li>Local currency support for Singapore dollar (SGD)</li>
                <li>Simple tracking of who has paid and who has not</li>
                <li>Works alongside existing bank and wallet flows</li>
                <li>Free to start with no hidden platform fees</li>
                <li>Useful for families, offices, schools, and communities</li>
                <li>Transparent records that reduce money misunderstandings</li>
                <li>Automatic reminders reduce manual follow‑ups</li>
                <li>Member reliability scores help organisers plan better</li>
              </ul>
            </div>

            <div className="cta-box">
              <h2>Ready to Organize Group Contributions in Singapore?</h2>
              <p>Join Singaporean groups using GroupFund to make contributions organised and stress‑free.</p>
              <div className="cta-buttons">
                <Link to="/waitlist" className="btn btn-primary btn-large">
                  Start Your Singapore Group
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
