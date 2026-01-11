import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function IndonesiaLocationPage() {
  useEffect(() => {
    const localBusinessStructuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "GroupFund",
      "description": "Organize group contributions in Indonesia with GroupFund. Perfect for Indonesian families, communities, schools, and groups.",
      "url": "https://www.groupfund.app/locations/indonesia",
      "logo": "https://www.groupfund.app/logo.png",
      "areaServed": { "@type": "Country", "name": "Indonesia" },
      "serviceType": "Group Contribution Management",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "IDR" },
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
        title="GroupFund Indonesia - Group Contributions App for Indonesia"
        description="Organize group contributions in Indonesia with GroupFund. Perfect for Indonesian families, communities, schools, and groups. Support for IDR (Indonesian rupiah). Free to start."
        keywords="group contributions Indonesia, Indonesia contribution app, groupfund Indonesia, group contributions app Indonesia, IDR contribution tracker, Indonesia group payments"
        canonical="https://www.groupfund.app/locations/indonesia"
      />
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">GroupFund for Indonesia 🇮🇩</h1>
          <p className="page-subtitle">
            Organize group contributions in Indonesia with GroupFund. Perfect for Indonesian families, communities, schools, and groups.
          </p>
        </div>
      </section>

      <section className="location-detail-page">
        <div className="container">
          <div className="location-content">
            <div className="location-section">
              <h2>Why GroupFund Works Great in Indonesia</h2>
              <p>
                Indonesia is the world’s fourth most populous country and the largest archipelago nation, with over 17,000 islands and major cities like Jakarta, Surabaya, Bandung, and Medan.
              </p>
              <p>
                With support for Indonesian rupiah (IDR) and local bank details, GroupFund is designed to work seamlessly for Indonesian groups of all sizes.
              </p>
            </div>

            <div className="location-section">
              <h2>Key Features for Indonesia</h2>
              <div className="features-list">
                <div className="feature-item">
                  <h3>🇮🇩 Indonesian Rupiah (IDR) Support</h3>
                  <p>
                    Full support for Indonesian rupiah. Set contribution amounts in IDR so everyone contributes in the local currency.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>🏦 Local Bank Transfers</h3>
                  <p>
                    Works with local bank transfers and common payment methods in Indonesia; members send money then mark payments as completed in GroupFund.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>👨‍👩‍👧‍👦 Perfect for Indonesian Families</h3>
                  <p>
                    Organize contributions for extended Indonesian families across islands and provinces for weddings, arisans, holidays, and celebrations.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>🏘 Community & Religious Groups</h3>
                  <p>
                    Ideal for community associations and religious groups coordinating shared support and regular contributions.
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
                    Mobile-friendly experience that fits Indonesia’s fast-growing smartphone and internet usage.
                  </p>
                </div>
              </div>
            </div>

            <div className="location-section">
              <h2>Common Use Cases in Indonesia</h2>
              <ul className="scenarios-list">
                <li>
                  <strong>Family Group Contributions:</strong> Organize contributions for weddings, holidays, and family events across islands.
                </li>
                <li>
                  <strong>Community & RT/RW Funds:</strong> Manage shared contributions for neighborhood and community projects.
                </li>
                <li>
                  <strong>School & Campus Groups:</strong> Collect contributions for teachers, staff, and student activities.
                </li>
                <li>
                  <strong>Alumni Associations:</strong> Coordinate contributions among alumni from Indonesian schools and universities.
                </li>
                <li>
                  <strong>Workplace Groups:</strong> Organize office birthday, farewell, and support funds in Indonesian companies.
                </li>
                <li>
                  <strong>Friend Groups:</strong> Keep friend circles organized for shared gifting and celebrations.
                </li>
              </ul>
            </div>

            <div className="location-section">
              <h2>How It Works in Indonesia</h2>
              <ol className="steps-list">
                <li>
                  <strong>Create Your Group:</strong> Set up a group with Indonesian rupiah (IDR) as the currency.
                </li>
                <li>
                  <strong>Set Contribution Amounts:</strong> Choose IDR amounts per person that fit your group.
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
              <h2>Why Indonesian Groups Choose GroupFund</h2>
              <ul className="benefits-list">
                <li>Support for Indonesian rupiah (IDR)</li>
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
              <h2>Ready to Organize Group Contributions in Indonesia?</h2>
              <p>Join Indonesian groups using GroupFund to make contributions organized and stress-free.</p>
              <div className="cta-buttons">
                <Link to="/get-started" className="btn btn-primary btn-large">
                  Start Your Indonesia Group
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
