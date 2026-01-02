import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function JordanLocationPage() {
  useEffect(() => {
    const localBusinessStructuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "GroupFund",
      "description": "Organize group contributions in Jordan with GroupFund. Perfect for Jordanian families, communities, schools, and groups.",
      "url": "https://groupfund.app/locations/jordan",
      "logo": "https://groupfund.app/logo.png",
      "areaServed": { "@type": "Country", "name": "Jordan" },
      "serviceType": "Group Contribution Management",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "JOD" },
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
        title="GroupFund Jordan - Group Contributions App for Jordan"
        description="Organize group contributions in Jordan with GroupFund. Perfect for Jordanian families, communities, schools, and groups. Support for JOD (Jordanian dinar). Free to start."
        keywords="group contributions Jordan, Jordan contribution app, groupfund Jordan, group contributions app Jordan, JOD contribution tracker, Jordan group payments"
        canonical="https://www.groupfund.app/locations/jordan"
      />
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">GroupFund for Jordan 🇯🇴</h1>
          <p className="page-subtitle">
            Organize group contributions in Jordan with GroupFund. Perfect for Jordanian families, communities, schools, and groups. [web:541][web:544][web:547]
          </p>
        </div>
      </section>

      <section className="location-detail-page">
        <div className="container">
          <div className="location-content">
            <div className="location-section">
              <h2>Why GroupFund Works Great in Jordan</h2>
              <p>
                Jordan is a West Asian country in the Southern Levant, bordered by Syria, Iraq, Saudi Arabia, Israel, and Palestine, with Amman as its capital and largest city. [web:541][web:544][web:550]
              </p>
              <p>
                With support for Jordanian dinar (JOD) and local payment details, GroupFund is designed to work smoothly for Jordanian groups that rely on shared giving and regular contributions. [web:536][web:539][web:543][web:549]
              </p>
            </div>

            <div className="location-section">
              <h2>Key Features for Jordan</h2>
              <div className="features-list">
                <div className="feature-item">
                  <h3>🇯🇴 Jordanian Dinar (JOD) Support</h3>
                  <p>
                    Full support for Jordanian dinar. Set contribution amounts in JOD so everyone contributes in the official national currency. [web:536][web:539][web:543][web:549]
                  </p>
                </div>
                <div className="feature-item">
                  <h3>🏦 Local Bank & Cash Payments</h3>
                  <p>
                    Works with Jordanian bank transfers, cards, and cash workflows; members pay using their usual method and then mark contributions as completed in GroupFund. [web:537][web:538][web:546]
                  </p>
                </div>
                <div className="feature-item">
                  <h3>👨‍👩‍👧‍👦 Perfect for Jordanian Families</h3>
                  <p>
                    Organize contributions for extended families in Amman, Irbid, Zarqa, Aqaba, and other cities for weddings, holidays, and support needs. [web:541][web:544][web:553]
                  </p>
                </div>
                <div className="feature-item">
                  <h3>🏘 Community & Religious Groups</h3>
                  <p>
                    Ideal for local communities, mosques, churches, and neighborhood groups coordinating ongoing support and charity funds. [web:541][web:550]
                  </p>
                </div>
                <div className="feature-item">
                  <h3>🏫 Schools & Universities</h3>
                  <p>
                    Great for schools, universities, and student societies managing shared contributions for events, teachers, and staff.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>📱 Mobile-First</h3>
                  <p>
                    Mobile-friendly experience that fits Jordan’s growing internet and smartphone usage, including younger, urban populations. [web:547][web:553]
                  </p>
                </div>
              </div>
            </div>

            <div className="location-section">
              <h2>Common Use Cases in Jordan</h2>
              <ul className="scenarios-list">
                <li>
                  <strong>Family Group Contributions:</strong> Organize contributions for weddings, holidays, and important family occasions.
                </li>
                <li>
                  <strong>Community & Charity Funds:</strong> Manage shared contributions for mosque or church funds and local charity projects.
                </li>
                <li>
                  <strong>School & University Groups:</strong> Collect contributions for teachers, staff gifts, and student activities.
                </li>
                <li>
                  <strong>Alumni Associations:</strong> Coordinate contributions among alumni from Jordanian schools and universities.
                </li>
                <li>
                  <strong>Workplace Groups:</strong> Organize office birthday, farewell, and support funds in Jordanian companies.
                </li>
                <li>
                  <strong>Friend Groups:</strong> Keep friend circles organized for shared gifting and celebrations.
                </li>
              </ul>
            </div>

            <div className="location-section">
              <h2>How It Works in Jordan</h2>
              <ol className="steps-list">
                <li>
                  <strong>Create Your Group:</strong> Set up a group with Jordanian dinar (JOD) as the currency. [web:536][web:538][web:552]
                </li>
                <li>
                  <strong>Set Contribution Amounts:</strong> Choose JOD amounts per person that fit your group.
                </li>
                <li>
                  <strong>Add Member Birthdays or Events:</strong> Add all key dates and occasions to the calendar.
                </li>
                <li>
                  <strong>Track Contributions:</strong> Members mark contributions as paid after sending via their preferred transfer or cash method.
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
              <h2>Why Jordanian Groups Choose GroupFund</h2>
              <ul className="benefits-list">
                <li>Support for Jordanian dinar (JOD)</li>
                <li>Clear tracking of who has paid and who has not</li>
                <li>Works with digital payments and cash workflows</li>
                <li>Free to use with no hidden fees</li>
                <li>Suitable for small and large groups</li>
                <li>Transparent records that build trust</li>
                <li>Automatic reminders reduce manual follow‑ups</li>
                <li>Member reliability scores help organizers plan better</li>
              </ul>
            </div>

            <div className="cta-box">
              <h2>Ready to Organize Group Contributions in Jordan?</h2>
              <p>Join Jordanian groups using GroupFund to make contributions organized and stress-free.</p>
              <div className="cta-buttons">
                <Link to="/waitlist" className="btn btn-primary btn-large">
                  Start Your Jordan Group
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
