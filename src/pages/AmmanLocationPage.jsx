import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function AmmanLocationPage() {
  useEffect(() => {
    const localBusinessStructuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "GroupFund",
      "description": "Organize group contributions in Amman, Jordan with GroupFund. Perfect for Amman families, churches, schools, and groups.",
      "url": "https://groupfund.app/locations/amman",
      "logo": "https://groupfund.app/logo.png",
      "areaServed": [
        { "@type": "City", "name": "Amman" },
        { "@type": "Country", "name": "Jordan" }
      ],
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
        title="GroupFund Amman - Group Contributions App for Amman, Jordan"
        description="Organize group contributions in Amman, Jordan with GroupFund. Perfect for Amman families, churches, schools, and groups. Support for JOD. Free to start."
        keywords="group contributions Amman, Amman contribution app, groupfund Amman, group contributions app Amman Jordan, Amman group payments, JOD contribution tracker Amman"
        canonical="https://www.groupfund.app/locations/amman"
      />
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">GroupFund for Amman, Jordan 🇯🇴</h1>
          <p className="page-subtitle">
            Organize group contributions in Amman with GroupFund. Perfect for Amman families, churches, schools, and groups.
          </p>
        </div>
      </section>

      <section className="location-detail-page">
        <div className="container">
          <div className="location-content">
            <div className="location-section">
              <h2>Why GroupFund Works Great in Amman</h2>
              <p>
                Amman is the capital and largest city of Jordan, a modern metropolis spread over rolling hills between the desert and the fertile Jordan Valley, and home to the king and seat of government.
              </p>
              <p>
                The city mixes ancient sites like the Citadel and Roman Theatre with busy commercial areas, so families, workplaces, and communities often pool money for events, support, and shared projects.
              </p>
            </div>

            <div className="location-section">
              <h2>Currency Support for JOD</h2>
              <div className="features-list">
                <div className="feature-item">
                  <h3>💰 Jordanian Dinar (JOD)</h3>
                  <p>
                    GroupFund supports the Jordanian dinar (JOD), Jordan’s official currency, with common banknote denominations such as 1, 5, 10, 20, and 50 dinars.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>📈 Stable Peg</h3>
                  <p>
                    JOD is stably pegged to the US dollar, which helps keep local pricing predictable for Amman groups setting contribution amounts.
                  </p>
                </div>
              </div>
            </div>

            <div className="location-section">
              <h2>Perfect for Amman Groups</h2>
              <div className="features-list">
                <div className="feature-item">
                  <h3>🏙️ Amman Families</h3>
                  <p>Organize contributions for weddings, family support, and celebrations across Amman’s diverse neighbourhoods.</p>
                </div>
                <div className="feature-item">
                  <h3>⛪ Churches & Mosques</h3>
                  <p>Manage regular contributions and special collections for mosques, churches, and local charities.</p>
                </div>
                <div className="feature-item">
                  <h3>🏢 Workplaces & Offices</h3>
                  <p>Run birthday, farewell, and emergency support funds in Amman’s businesses and organisations.</p>
                </div>
                <div className="feature-item">
                  <h3>🏫 Schools & Universities</h3>
                  <p>Track contributions for teachers, school improvements, student trips, and campus groups across the city.</p>
                </div>
                <div className="feature-item">
                  <h3>📱 Mobile-Friendly</h3>
                  <p>Mobile‑friendly experience that fits Amman’s growing, connected urban population.</p>
                </div>
              </div>
            </div>

            <div className="location-section">
              <h2>How Amman Groups Use GroupFund</h2>
              <ul className="scenarios-list">
                <li>
                  <strong>Family Support Funds:</strong> Monthly contributions from relatives for shared family costs and emergencies.
                </li>
                <li>
                  <strong>Religious & Community Collections:</strong> Shared funds for mosques, churches, and neighbourhood initiatives.
                </li>
                <li>
                  <strong>Office Group Pots:</strong> Pooled money for colleagues’ birthdays, weddings, and condolences.
                </li>
                <li>
                  <strong>School & Student Groups:</strong> Collections for teacher gifts, class trips, and student projects.
                </li>
                <li>
                  <strong>Diaspora‑Linked Groups:</strong> Coordinated giving from Jordanians abroad to trusted organisers in Amman.
                </li>
              </ul>
            </div>

            <div className="cta-box">
              <h2>Ready to Organize Group Contributions in Amman?</h2>
              <p>Join Amman groups using GroupFund to keep contributions transparent, fair, and organised.</p>
              <div className="cta-buttons">
                <Link to="/waitlist" className="btn btn-primary btn-large">Start Your Amman Group</Link>
                <Link to="/how-it-works" className="btn btn-secondary btn-large">See How It Works</Link>
              </div>
            </div>

            <div className="related-links">
              <h3>Explore More</h3>
              <div className="related-links-grid">
                <Link to="/locations/jordan">Jordan →</Link>
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
