import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function KabulLocationPage() {
  useEffect(() => {
    const localBusinessStructuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "GroupFund",
      "description": "Organize group contributions in Kabul, Afghanistan with GroupFund. Perfect for Kabul families, communities, schools, and groups.",
      "url": "https://groupfund.app/locations/kabul",
      "logo": "https://groupfund.app/logo.png",
      "areaServed": [
        { "@type": "City", "name": "Kabul" },
        { "@type": "Country", "name": "Afghanistan" }
      ],
      "serviceType": "Group Contribution Management",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "AFN" }
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
        title="GroupFund Kabul - Group Contributions App for Kabul, Afghanistan"
        description="Organize group contributions in Kabul, Afghanistan with GroupFund. Perfect for Kabul families, communities, schools, and groups. Support for AFN. Free to start."
        keywords="group contributions Kabul, Kabul contribution app, groupfund Kabul, group contributions app Kabul Afghanistan, Kabul group payments, AFN contribution tracker Kabul"
        canonical="https://www.groupfund.app/locations/kabul"
      />
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">GroupFund for Kabul, Afghanistan 🇦🇫</h1>
          <p className="page-subtitle">
            Organize group contributions in Kabul with GroupFund. Perfect for Kabul families, communities, schools, and groups.
          </p>
        </div>
      </section>

      <section className="location-detail-page">
        <div className="container">
          <div className="location-content">
            <div className="location-section">
              <h2>Why GroupFund Works Great in Kabul</h2>
              <p>
                Kabul is the capital and largest city of Afghanistan, located in a high valley in the Hindu Kush mountains and serving as the country’s political and economic center.
              </p>
              <p>
                With support for Afghan afghani (AFN) and flexible workflows that match local payment realities, GroupFund helps Kabul groups keep shared money transparent and organised.
              </p>
            </div>

            <div className="location-section">
              <h2>Perfect for Kabul Groups</h2>
              <div className="features-list">
                <div className="feature-item">
                  <h3>🏙️ Kabul Families</h3>
                  <p>Organize group contributions for extended Kabul families across different neighbourhoods and districts.</p>
                </div>
                <div className="feature-item">
                  <h3>🕌 Community & Religious Groups</h3>
                  <p>Manage group support funds for local mosques, community committees, and neighbourhood initiatives.</p>
                </div>
                <div className="feature-item">
                  <h3>🏫 Kabul Schools</h3>
                  <p>Perfect for schools and education groups in Kabul organising contributions for teachers, staff, and students.</p>
                </div>
                <div className="feature-item">
                  <h3>🏢 Kabul Workplaces</h3>
                  <p>Organize office birthday, farewell, and support funds for teams in Kabul-based organisations.</p>
                </div>
                <div className="feature-item">
                  <h3>💰 AFN Support</h3>
                  <p>Full support for Afghan afghani (AFN), so contribution amounts are set in the local currency.</p>
                </div>
                <div className="feature-item">
                  <h3>📱 Mobile Access</h3>
                  <p>Simple mobile-friendly experience so members can update payments whenever they have internet access.</p>
                </div>
              </div>
            </div>

            <div className="location-section">
              <h2>How Kabul Groups Use GroupFund</h2>
              <ul className="scenarios-list">
                <li>
                  <strong>Kabul Family Groups:</strong> Coordinate support for weddings, medical needs, and key family events.
                </li>
                <li>
                  <strong>Local Community Committees:</strong> Track contributions for neighbourhood projects and shared expenses.
                </li>
                <li>
                  <strong>School & Student Groups:</strong> Manage contributions for teachers, class events, and student activities.
                </li>
                <li>
                  <strong>Workplace Teams:</strong> Run birthday and support funds in offices and NGOs operating in Kabul.
                </li>
                <li>
                  <strong>Friend Circles:</strong> Keep friend groups organised for shared celebrations and gatherings.</li>
              </ul>
            </div>

            <div className="cta-box">
              <h2>Ready to Organize Group Contributions in Kabul?</h2>
              <p>Join Kabul groups using GroupFund to make contributions organised and stress‑free.</p>
              <div className="cta-buttons">
                <Link to="/get-started" className="btn btn-primary btn-large">Start Your Kabul Group</Link>
                <Link to="/how-it-works" className="btn btn-secondary btn-large">See How It Works</Link>
              </div>
            </div>

            <div className="related-links">
              <h3>Explore More</h3>
              <div className="related-links-grid">
                <Link to="/locations/afghanistan">Afghanistan →</Link>
                <Link to="/locations">All Locations →</Link>
                <Link to="/use-cases">View Use Cases →</Link>
                <Link to="/features">View Features →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
