import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function ColomboLocationPage() {
  useEffect(() => {
    const localBusinessStructuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "GroupFund",
      "description": "Organize group contributions in Colombo, Sri Lanka with GroupFund. Perfect for Colombo families, churches, schools, and groups.",
      "url": "https://groupfund.app/locations/colombo",
      "logo": "https://groupfund.app/logo.png",
      "areaServed": [
        { "@type": "City", "name": "Colombo" },
        { "@type": "Country", "name": "Sri Lanka" }
      ],
      "serviceType": "Group Contribution Management",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "LKR" },
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
        title="GroupFund Colombo - Group Contributions App for Colombo, Sri Lanka"
        description="Organize group contributions in Colombo, Sri Lanka with GroupFund. Perfect for Colombo families, churches, schools, and groups. Support for LKR. Free to start."
        keywords="group contributions Colombo, Colombo contribution app, groupfund Colombo, group contributions app Colombo Sri Lanka, Colombo group payments, LKR contribution tracker Colombo"
        canonical="https://www.groupfund.app/locations/colombo"
      />
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">GroupFund for Colombo, Sri Lanka 🇱🇰</h1>
          <p className="page-subtitle">
            Organize group contributions in Colombo with GroupFund. Perfect for Colombo families, churches, schools, and groups.
          </p>
        </div>
      </section>

      <section className="location-detail-page">
        <div className="container">
          <div className="location-content">
            <div className="location-section">
              <h2>Why GroupFund Works Great in Colombo</h2>
              <p>
                Colombo is Sri Lanka’s largest city and commercial capital, a busy Indian Ocean port on the west coast just south of the Kelani River, blending colonial architecture, temples, mosques, and modern high‑rises.
              </p>
              <p>
                The city acts as the island’s main economic hub, so families, workplaces, and community groups regularly pool money for events, support, and shared projects, making an organised tracker especially useful.
              </p>
            </div>

            <div className="location-section">
              <h2>Currency Support for LKR</h2>
              <div className="features-list">
                <div className="feature-item">
                  <h3>💰 Sri Lankan Rupee (LKR)</h3>
                  <p>
                    GroupFund supports the Sri Lankan rupee (LKR), the official currency of Sri Lanka, managed by the Central Bank and subdivided into 100 cents, though cents are rarely used in practice.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>📉 Handles Inflation</h3>
                  <p>
                    Sri Lanka has experienced periods of high inflation and currency pressure, so GroupFund focuses on tracking contributions in LKR while external tools handle any FX conversion.
                  </p>
                </div>
              </div>
            </div>

            <div className="location-section">
              <h2>Perfect for Colombo Groups</h2>
              <div className="features-list">
                <div className="feature-item">
                  <h3>🏙️ Colombo Families</h3>
                  <p>Organize contributions for weddings, almsgivings, funerals, and monthly family support across Colombo’s neighbourhoods.</p>
                </div>
                <div className="feature-item">
                  <h3>⛪ Temples, Churches & Mosques</h3>
                  <p>Manage regular contributions and special collections for Buddhist temples, Hindu kovils, churches, and mosques.</p>
                </div>
                <div className="feature-item">
                  <h3>🏢 Workplaces & Offices</h3>
                  <p>Run birthday, farewell, and emergency support funds in Colombo’s banks, offices, and businesses.</p>
                </div>
                <div className="feature-item">
                  <h3>🏫 Schools & Tuition Classes</h3>
                  <p>Track contributions for teacher gifts, school projects, and student support funds.</p>
                </div>
                <div className="feature-item">
                  <h3>📱 Mobile-Friendly</h3>
                  <p>Mobile‑friendly experience that fits Colombo’s busy, increasingly connected urban lifestyle.</p>
                </div>
              </div>
            </div>

            <div className="location-section">
              <h2>How Colombo Groups Use GroupFund</h2>
              <ul className="scenarios-list">
                <li>
                  <strong>Family Support Funds:</strong> Regular LKR contributions from relatives in Colombo and abroad for monthly needs.
                </li>
                <li>
                  <strong>Religious & Community Collections:</strong> Shared pots for religious events, charity drives, and local aid.
                </li>
                <li>
                  <strong>Office Group Pots:</strong> Pooled money for colleagues’ birthdays, weddings, and condolences.
                </li>
                <li>
                  <strong>School & Student Groups:</strong> Collections for teacher appreciation, class trips, and student projects.
                </li>
                <li>
                  <strong>Friend Circles:</strong> Contributions for shared dinners, outings, and trips along Galle Face or around the city.
                </li>
              </ul>
            </div>

            <div className="cta-box">
              <h2>Ready to Organize Group Contributions in Colombo?</h2>
              <p>Join Colombo groups using GroupFund to keep contributions transparent, fair, and organised.</p>
              <div className="cta-buttons">
                <Link to="/get-started" className="btn btn-primary btn-large">Start Your Colombo Group</Link>
                <Link to="/how-it-works" className="btn btn-secondary btn-large">See How It Works</Link>
              </div>
            </div>

            <div className="related-links">
              <h3>Explore More</h3>
              <div className="related-links-grid">
                <Link to="/locations/sri-lanka">Sri Lanka →</Link>
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
