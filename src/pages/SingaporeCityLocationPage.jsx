import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function SingaporeCityLocationPage() {
  useEffect(() => {
    const localBusinessStructuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "GroupFund",
      "description": "Organize group contributions in Singapore with GroupFund. Perfect for Singapore families, communities, schools, and groups.",
      "url": "https://groupfund.app/locations/singapore",
      "logo": "https://groupfund.app/logo.png",
      "areaServed": [
        { "@type": "City", "name": "Singapore" },
        { "@type": "Country", "name": "Singapore" }
      ],
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
        description="Organize group contributions in Singapore with GroupFund. Perfect for Singapore families, communities, schools, and groups. Support for SGD. Free to start."
        keywords="group contributions Singapore, Singapore contribution app, groupfund Singapore, group contributions app Singapore, Singapore group payments, SGD contribution tracker Singapore"
        canonical="https://www.groupfund.app/locations/singapore"
      />
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">GroupFund for Singapore 🇸🇬</h1>
          <p className="page-subtitle">
            Organize group contributions in Singapore with GroupFund. Ideal for families, communities, workplaces, and schools in the city‑state.
          </p>
        </div>
      </section>

      <section className="location-detail-page">
        <div className="container">
          <div className="location-content">
            <div className="location-section">
              <h2>Why GroupFund Works Great in Singapore</h2>
              <p>
                Singapore is a sovereign city‑state on an island at the southern tip of the Malay Peninsula, occupying Singapore Island and smaller islets, and serving as one of the world’s busiest ports and commercial centres.
              </p>
              <p>
                The city is known as a highly urbanised, <strong>green</strong> “Garden City” with a multicultural population and strong infrastructure, making digital tools for organising shared money a natural fit.
              </p>
            </div>

            <div className="location-section">
              <h2>Currency Support for SGD</h2>
              <div className="features-list">
                <div className="feature-item">
                  <h3>💰 Singapore Dollar (SGD)</h3>
                  <p>
                    GroupFund supports the Singapore dollar (SGD), the official currency of Singapore, issued by the Monetary Authority of Singapore and divided into 100 cents.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>📈 Stable Local Currency</h3>
                  <p>
                    The Singapore dollar is regarded as a strong, investment‑grade currency, so GroupFund tracks contributions directly in SGD while banks and FX tools handle any foreign conversions.
                  </p>
                </div>
              </div>
            </div>

            <div className="location-section">
              <h2>Perfect for Singapore Groups</h2>
              <div className="features-list">
                <div className="feature-item">
                  <h3>🏙️ Singapore Families</h3>
                  <p>Organize contributions for weddings, baby showers, funerals, and monthly family support among relatives across the island.</p>
                </div>
                <div className="feature-item">
                  <h3>⛪ Mosques, Temples & Churches</h3>
                  <p>Coordinate shared funds for religious events and community support across Singapore’s diverse faith communities.</p>
                </div>
                <div className="feature-item">
                  <h3>🏢 Workplaces & Offices</h3>
                  <p>Run birthday, farewell, and emergency support pots in Singapore’s corporate, fintech, and startup offices.</p>
                </div>
                <div className="feature-item">
                  <h3>🏫 Schools & Student Groups</h3>
                  <p>Track contributions for class gifts, CCA activities, and student initiatives across schools and universities.</p>
                </div>
                <div className="feature-item">
                  <h3>📱 Digital‑First City</h3>
                  <p>Matches Singapore’s highly connected population, where cashless payments and mobile apps are part of daily life.</p>
                </div>
              </div>
            </div>

            <div className="location-section">
              <h2>How Singapore Groups Use GroupFund</h2>
              <ul className="scenarios-list">
                <li>
                  <strong>Family Support Funds:</strong> Regular SGD contributions for parents, relatives, and shared household costs.
                </li>
                <li>
                  <strong>Community & Religious Pots:</strong> Collections for charity drives, festive events, and community projects.
                </li>
                <li>
                  <strong>Office & Team Pots:</strong> Pooled money for colleagues’ birthdays, weddings, and welfare.
                </li>
                <li>
                  <strong>School & CCA Funds:</strong> Contributions for teacher appreciation, events, and competitions.
                </li>
                <li>
                  <strong>Friend Groups:</strong> Shared pots for staycations, group dinners, and activities around the island.
                </li>
              </ul>
            </div>

            <div className="cta-box">
              <h2>Ready to Organize Group Contributions in Singapore?</h2>
              <p>Join Singapore groups using GroupFund to keep contributions transparent, fair, and organised.</p>
              <div className="cta-buttons">
                <Link to="/waitlist" className="btn btn-primary btn-large">Start Your Singapore Group</Link>
                <Link to="/how-it-works" className="btn btn-secondary btn-large">See How It Works</Link>
              </div>
            </div>

            <div className="related-links">
              <h3>Explore More</h3>
              <div className="related-links-grid">
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
