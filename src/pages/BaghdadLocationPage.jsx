import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function BaghdadLocationPage() {
  useEffect(() => {
    const localBusinessStructuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "GroupFund",
      "description": "Organize group contributions in Baghdad, Iraq with GroupFund. Perfect for Baghdad families, communities, schools, and groups.",
      "url": "https://groupfund.app/locations/baghdad",
      "logo": "https://groupfund.app/logo.png",
      "areaServed": [
        { "@type": "City", "name": "Baghdad" },
        { "@type": "Country", "name": "Iraq" }
      ],
      "serviceType": "Group Contribution Management",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "IQD" },
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
        title="GroupFund Baghdad - Group Contributions App for Baghdad, Iraq"
        description="Organize group contributions in Baghdad, Iraq with GroupFund. Perfect for Baghdad families, communities, schools, and groups. Support for IQD. Free to start."
        keywords="group contributions Baghdad, Baghdad contribution app, groupfund Baghdad, group contributions app Baghdad Iraq, Baghdad group payments, IQD contribution tracker Baghdad"
        canonical="https://www.groupfund.app/locations/baghdad"
      />
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">GroupFund for Baghdad, Iraq 🇮🇶</h1>
          <p className="page-subtitle">
            Organize group contributions in Baghdad with GroupFund. Perfect for Baghdad families, communities, schools, and groups. [web:862][web:863][web:866]
          </p>
        </div>
      </section>

      <section className="location-detail-page">
        <div className="container">
          <div className="location-content">
            <div className="location-section">
              <h2>Why GroupFund Works Great in Baghdad</h2>
              <p>
                Baghdad is the capital and largest city of Iraq, located on the banks of the Tigris River in central Iraq and long regarded as a major political, economic, and cultural centre of the Arab and Islamic world. [web:862][web:863][web:864][web:866]
              </p>
              <p>
                The city remains Iraq’s main governmental and commercial hub, so many families, workplaces, and community groups regularly pool money for support, celebrations, and shared needs. [web:862][web:864][web:868]
              </p>
            </div>

            <div className="location-section">
              <h2>Currency Support for IQD</h2>
              <div className="features-list">
                <div className="feature-item">
                  <h3>💰 Iraqi Dinar (IQD)</h3>
                  <p>
                    GroupFund supports the Iraqi dinar (IQD), the national currency issued by the Central Bank of Iraq and formerly divided into 1,000 fils, though fils are no longer used due to inflation. [web:516][web:518][web:523]
                  </p>
                </div>
                <div className="feature-item">
                  <h3>📊 Local Value Tracking</h3>
                  <p>
                    Contribution amounts are stored in IQD so organisers can focus on who has paid and totals collected, regardless of external exchange‑rate movements. [web:516][web:523][web:532][web:867]
                  </p>
                </div>
              </div>
            </div>

            <div className="location-section">
              <h2>Perfect for Baghdad Groups</h2>
              <div className="features-list">
                <div className="feature-item">
                  <h3>🏙️ Extended Families</h3>
                  <p>Organize contributions for weddings, medical support, funerals, and ongoing family assistance across Baghdad’s neighbourhoods. [web:864][web:870]</p>
                </div>
                <div className="feature-item">
                  <h3>🕌 Community & Religious Groups</h3>
                  <p>Coordinate shared funds for mosques, local charities, and neighbourhood projects across the city. [web:862][web:866]</p>
                </div>
                <div className="feature-item">
                  <h3>🏫 Schools & Local Initiatives</h3>
                  <p>Track contributions for teachers, school needs, and community-led programmes and events. [web:864][web:868]</p>
                </div>
                <div className="feature-item">
                  <h3>🏢 Workplaces & Offices</h3>
                  <p>Run birthday, farewell, and emergency support funds for teams in Baghdad’s government and private‑sector offices. [web:862][web:868]</p>
                </div>
                <div className="feature-item">
                  <h3>📱 Mobile-Friendly</h3>
                  <p>Designed so organisers can update contribution status and check who has paid even with limited connectivity. [web:864][web:869]</p>
                </div>
              </div>
            </div>

            <div className="location-section">
              <h2>How Baghdad Groups Use GroupFund</h2>
              <ul className="scenarios-list">
                <li>
                  <strong>Family Support Funds:</strong> Regular monthly contributions from relatives in Baghdad and abroad.
                </li>
                <li>
                  <strong>Religious & Community Collections:</strong> Shared funds for mosques, religious occasions, and local aid.
                </li>
                <li>
                  <strong>Office Group Pots:</strong> Pooled money for colleagues’ celebrations, condolences, or emergencies.
                </li>
                <li>
                  <strong>School & Student Groups:</strong> Class collections for teacher gifts, trips, and activities.
                </li>
                <li>
                  <strong>Diaspora‑Linked Groups:</strong> Coordinated giving from Iraqi diaspora directly to trusted organisers in Baghdad.</li>
              </ul>
            </div>

            <div className="cta-box">
              <h2>Ready to Organize Group Contributions in Baghdad?</h2>
              <p>Join Baghdad groups using GroupFund to keep contributions transparent, fair, and organised.</p>
              <div className="cta-buttons">
                <Link to="/waitlist" className="btn btn-primary btn-large">Start Your Baghdad Group</Link>
                <Link to="/how-it-works" className="btn btn-secondary btn-large">See How It Works</Link>
              </div>
            </div>

            <div className="related-links">
              <h3>Explore More</h3>
              <div className="related-links-grid">
                <Link to="/locations/iraq">Iraq →</Link>
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
