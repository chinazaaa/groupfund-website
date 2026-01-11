import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function SanaaLocationPage() {
  useEffect(() => {
    const localBusinessStructuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "GroupFund",
      "description": "Organize group contributions in Sana’a, Yemen with GroupFund. Perfect for Sana’a families, communities, schools, and groups.",
      "url": "https://www.groupfund.app/locations/sanaa",
      "logo": "https://www.groupfund.app/logo.png",
      "areaServed": [
        { "@type": "City", "name": "Sana’a" },
        { "@type": "Country", "name": "Yemen" }
      ],
      "serviceType": "Group Contribution Management",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "YER" },
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
        title="GroupFund Sana’a - Group Contributions App for Sana’a, Yemen"
        description="Organize group contributions in Sana’a, Yemen with GroupFund. Perfect for Sana’a families, communities, schools, and groups. Support for YER. Free to start."
        keywords="group contributions Sana’a, Sanaa contribution app, groupfund Sana’a, group contributions app Sana’a Yemen, Sana’a group payments, YER contribution tracker Sana’a"
        canonical="https://www.groupfund.app/locations/sanaa"
      />
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">GroupFund for Sana’a, Yemen 🇾🇪</h1>
          <p className="page-subtitle">
            Organize group contributions in Sana’a with GroupFund. Perfect for Sana’a families, communities, schools, and groups.
          </p>
        </div>
      </section>

      <section className="location-detail-page">
        <div className="container">
          <div className="location-content">
            <div className="location-section">
              <h2>Why GroupFund Works Great in Sana’a</h2>
              <p>
                Sana’a is the capital of Yemen, one of the world’s oldest continuously inhabited cities, set in a mountain valley about 2,200 metres above sea level and renowned for its historic walled old city.
              </p>
              <p>
                Despite ongoing conflict and economic strain, everyday life and local giving continue, making a clear contribution tracker valuable for families and community groups in Sana’a.
              </p>
            </div>

            <div className="location-section">
              <h2>Currency Support for YER</h2>
              <div className="features-list">
                <div className="feature-item">
                  <h3>💰 Yemeni Rial (YER)</h3>
                  <p>
                    GroupFund supports the Yemeni rial (YER), the official currency of Yemen and the only legal tender, technically divided into 100 fils though fils are rarely used in practice.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>📉 Works With Volatile Rates</h3>
                  <p>
                    The rial has faced heavy devaluation and regionally varying exchange rates, but GroupFund focuses on tracking who has paid and how much, regardless of rate changes.
                  </p>
                </div>
              </div>
            </div>

            <div className="location-section">
              <h2>Perfect for Sana’a Groups</h2>
              <div className="features-list">
                <div className="feature-item">
                  <h3>🏙️ Extended Families</h3>
                  <p>Organize contributions for weddings, medical support, funerals, and ongoing family assistance across Sana’a’s neighbourhoods.</p>
                </div>
                <div className="feature-item">
                  <h3>🕌 Community & Religious Groups</h3>
                  <p>Coordinate shared funds for mosques, local charities, and neighbourhood projects in and around the Old City.</p>
                </div>
                <div className="feature-item">
                  <h3>🏫 Schools & Local Initiatives</h3>
                  <p>Track contributions for teachers, school needs, and community-led education or relief efforts.</p>
                </div>
                <div className="feature-item">
                  <h3>📱 Low-Bandwidth Friendly</h3>
                  <p>Designed so organisers can still keep records and update statuses when connectivity is limited or intermittent.</p>
                </div>
              </div>
            </div>

            <div className="location-section">
              <h2>How Sana’a Groups Use GroupFund</h2>
              <ul className="scenarios-list">
                <li>
                  <strong>Family Support Funds:</strong> Regular contributions from relatives in Sana’a and abroad for monthly support.
                </li>
                <li>
                  <strong>Relief & Charity Pools:</strong> Shared funds for food, medicine, and emergency help in local communities.
                </li>
                <li>
                  <strong>Event Contributions:</strong> One‑off collections for weddings, funerals, and special religious occasions.
                </li>
                <li>
                  <strong>School & Teacher Gifts:</strong> Collections for teacher appreciation and school needs.
                </li>
                <li>
                  <strong>Diaspora Groups:</strong> Coordinated giving from Yemeni diaspora directly tied to families and projects in Sana’a.
                </li>
              </ul>
            </div>

            <div className="cta-box">
              <h2>Ready to Organize Group Contributions in Sana’a?</h2>
              <p>Join Sana’a groups using GroupFund to keep contributions transparent and organised, even in difficult circumstances.</p>
              <div className="cta-buttons">
                <Link to="/get-started" className="btn btn-primary btn-large">Start Your Sana’a Group</Link>
                <Link to="/how-it-works" className="btn btn-secondary btn-large">See How It Works</Link>
              </div>
            </div>

            <div className="related-links">
              <h3>Explore More</h3>
              <div className="related-links-grid">
                <Link to="/locations/yemen">Yemen →</Link>
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
