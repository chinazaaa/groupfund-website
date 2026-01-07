import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function BeirutLocationPage() {
  useEffect(() => {
    const localBusinessStructuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "GroupFund",
      "description": "Organize group contributions in Beirut, Lebanon with GroupFund. Perfect for Beirut families, communities, schools, and groups.",
      "url": "https://groupfund.app/locations/beirut",
      "logo": "https://groupfund.app/logo.png",
      "areaServed": [
        { "@type": "City", "name": "Beirut" },
        { "@type": "Country", "name": "Lebanon" }
      ],
      "serviceType": "Group Contribution Management",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "LBP" },
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
        title="GroupFund Beirut - Group Contributions App for Beirut, Lebanon"
        description="Organize group contributions in Beirut, Lebanon with GroupFund. Perfect for Beirut families, communities, schools, and groups. Support for LBP. Free to start."
        keywords="group contributions Beirut, Beirut contribution app, groupfund Beirut, group contributions app Beirut Lebanon, Beirut group payments, LBP contribution tracker Beirut"
        canonical="https://www.groupfund.app/locations/beirut"
      />
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">GroupFund for Beirut, Lebanon 🇱🇧</h1>
          <p className="page-subtitle">
            Organize group contributions in Beirut with GroupFund. Perfect for Beirut families, communities, schools, and groups.
          </p>
        </div>
      </section>

      <section className="location-detail-page">
        <div className="container">
          <div className="location-content">
            <div className="location-section">
              <h2>Why GroupFund Works Great in Beirut</h2>
              <p>
                Beirut is the capital, chief port, and largest city of Lebanon, located on a peninsula along the Mediterranean coast at the foot of the Lebanon Mountains and historically a major economic and cultural hub of the Middle East.
              </p>
              <p>
                The city has endured civil war, repeated conflicts, and the 2020 port explosion yet continues to rebuild, making clear, trusted tools for shared money especially valuable for families and communities.
              </p>
            </div>

            <div className="location-section">
              <h2>Currency Support for LBP</h2>
              <div className="features-list">
                <div className="feature-item">
                  <h3>💰 Lebanese Pound (LBP)</h3>
                  <p>
                    GroupFund supports the Lebanese pound (LBP), also called the lira, the official currency of Lebanon issued by Banque du Liban and historically divided into 100 piastres.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>📉 Works With Volatile Rates</h3>
                  <p>
                    The LBP has faced severe devaluation and parallel-market rates, so GroupFund focuses on tracking contributions in LBP, while external FX tools handle conversion when needed.
                  </p>
                </div>
              </div>
            </div>

            <div className="location-section">
              <h2>Perfect for Beirut Groups</h2>
              <div className="features-list">
                <div className="feature-item">
                  <h3>🏙️ Beirut Families</h3>
                  <p>Organize contributions for weddings, medical support, funerals, rent, and monthly family assistance across Beirut’s neighbourhoods.</p>
                </div>
                <div className="feature-item">
                  <h3>🕌 Churches, Mosques & NGOs</h3>
                  <p>Coordinate shared funds for parishes, mosques, and local NGOs running relief and social projects.</p>
                </div>
                <div className="feature-item">
                  <h3>🏫 Schools & Universities</h3>
                  <p>Track contributions for teacher gifts, hardship support, school repairs, and student initiatives.</p>
                </div>
                <div className="feature-item">
                  <h3>🏢 Workplaces & Offices</h3>
                  <p>Run birthday, farewell, and emergency support funds in Beirut’s companies, media houses, and NGOs.</p>
                </div>
                <div className="feature-item">
                  <h3>📱 Mobile-Friendly</h3>
                  <p>Designed so organisers can update and review contributions even with intermittent connectivity or power cuts.</p>
                </div>
              </div>
            </div>

            <div className="location-section">
              <h2>How Beirut Groups Use GroupFund</h2>
              <ul className="scenarios-list">
                <li>
                  <strong>Family Support Funds:</strong> Regular contributions in LBP from relatives in Beirut and abroad for monthly needs.
                </li>
                <li>
                  <strong>Relief & Community Collections:</strong> Shared group pots for food parcels, rent support, and medical help.
                </li>
                <li>
                  <strong>Office & Team GroupPots:</strong> Pooled money for colleagues’ celebrations, weddings, and condolences.
                </li>
                <li>
                  <strong>School & Student Groups:</strong> Collections for teacher appreciation, events, and hardship cases.
                </li>
                <li>
                  <strong>Diaspora‑Linked Groups:</strong> Coordinated giving from the Lebanese diaspora to specific families and projects in Beirut.
                </li>
              </ul>
            </div>

            <div className="cta-box">
              <h2>Ready to Organize Group Contributions in Beirut?</h2>
              <p>Join Beirut groups using GroupFund to keep contributions transparent, fair, and organised, even in challenging times.</p>
              <div className="cta-buttons">
                <Link to="/get-started" className="btn btn-primary btn-large">Start Your Beirut Group</Link>
                <Link to="/how-it-works" className="btn btn-secondary btn-large">See How It Works</Link>
              </div>
            </div>

            <div className="related-links">
              <h3>Explore More</h3>
              <div className="related-links-grid">
                <Link to="/locations/lebanon">Lebanon →</Link>
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
