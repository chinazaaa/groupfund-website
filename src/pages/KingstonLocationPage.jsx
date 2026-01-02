import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function KingstonLocationPage() {
  useEffect(() => {
    const localBusinessStructuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "GroupFund",
      "description": "Organize group contributions in Kingston, Jamaica with GroupFund. Perfect for Kingston families, churches, schools, and groups.",
      "url": "https://groupfund.app/locations/kingston-jamaica",
      "logo": "https://groupfund.app/logo.png",
      "areaServed": [
        { "@type": "City", "name": "Kingston" },
        { "@type": "Country", "name": "Jamaica" }
      ],
      "serviceType": "Group Contribution Management",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "JMD" },
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
        title="GroupFund Kingston - Group Contributions App for Kingston, Jamaica"
        description="Organize group contributions in Kingston, Jamaica with GroupFund. Perfect for Kingston families, churches, schools, and groups. Support for JMD. Free to start."
        keywords="group contributions Kingston Jamaica, Kingston contribution app, groupfund Kingston, group contributions app Kingston Jamaica, Kingston group payments, JMD contribution tracker Kingston"
        canonical="https://www.groupfund.app/locations/kingston-jamaica"
      />
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">GroupFund for Kingston, Jamaica 🇯🇲</h1>
          <p className="page-subtitle">
            Organize group contributions in Kingston with GroupFund. Perfect for Kingston families, churches, schools, and groups.
          </p>
        </div>
      </section>

      <section className="location-detail-page">
        <div className="container">
          <div className="location-content">
            <div className="location-section">
              <h2>Why GroupFund Works Great in Kingston</h2>
              <p>
                Kingston is the capital and largest city of Jamaica, a major port on the island’s southeastern coast backed by the Blue Mountains and serving as the island’s financial, cultural, and educational centre.
              </p>
              <p>
                The city is also the heart of Jamaica’s music and creative scene, closely associated with reggae and Rastafarian culture, so groups frequently pool money for events, support, and community projects.
              </p>
            </div>

            <div className="location-section">
              <h2>Currency Support for JMD</h2>
              <div className="features-list">
                <div className="feature-item">
                  <h3>💰 Jamaican Dollar (JMD)</h3>
                  <p>
                    GroupFund supports the Jamaican dollar (JMD), Jamaica’s official currency, abbreviated J$ or JA$ and divided into 100 cents, though small coins are less used today.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>📈 Local Value Tracking</h3>
                  <p>
                    Contribution amounts are stored in JMD so organisers can focus on who has paid and totals collected, while external tools handle any FX conversion when needed.
                  </p>
                </div>
              </div>
            </div>

            <div className="location-section">
              <h2>Perfect for Kingston Groups</h2>
              <div className="features-list">
                <div className="feature-item">
                  <h3>🏙️ Kingston Families</h3>
                  <p>Organize contributions for weddings, funerals, school fees, and monthly family support across Kingston communities.</p>
                </div>
                <div className="feature-item">
                  <h3>⛪ Churches & Fellowships</h3>
                  <p>Manage regular offerings and special collections for churches and faith groups across Kingston.</p>
                </div>
                <div className="feature-item">
                  <h3>🏢 Workplaces & Offices</h3>
                  <p>Run birthday, farewell, and emergency support funds in Kingston’s businesses and public‑sector offices.</p>
                </div>
                <div className="feature-item">
                  <h3>🏫 Schools & Community Projects</h3>
                  <p>Track contributions for teacher gifts, school initiatives, sports teams, and youth programmes.</p>
                </div>
                <div className="feature-item">
                  <h3>📱 Mobile-Friendly</h3>
                  <p>Designed for Kingston’s growing smartphone‑using population, so organisers can update payments on the go.</p>
                </div>
              </div>
            </div>

            <div className="location-section">
              <h2>How Kingston Groups Use GroupFund</h2>
              <ul className="scenarios-list">
                <li>
                  <strong>Family Support Funds:</strong> Monthly contributions for household bills, remittances, and emergencies.
                </li>
                <li>
                  <strong>Church & Community Collections:</strong> Shared funds for ministries, outreach, and local charities.
                </li>
                <li>
                  <strong>Office Group Pots:</strong> Pooled money for colleagues’ birthdays, weddings, and condolences.
                </li>
                <li>
                  <strong>School & Youth Groups:</strong> Collections for trips, uniforms, and activities around Kingston.
                </li>
                <li>
                  <strong>Creative & Music Projects:</strong> Contributions to support events, shows, and community studios in the capital of reggae.</li>
              </ul>
            </div>

            <div className="cta-box">
              <h2>Ready to Organize Group Contributions in Kingston?</h2>
              <p>Join Kingston groups using GroupFund to keep contributions transparent, fair, and organised.</p>
              <div className="cta-buttons">
                <Link to="/waitlist" className="btn btn-primary btn-large">Start Your Kingston Group</Link>
                <Link to="/how-it-works" className="btn btn-secondary btn-large">See How It Works</Link>
              </div>
            </div>

            <div className="related-links">
              <h3>Explore More</h3>
              <div className="related-links-grid">
                <Link to="/locations/jamaica">Jamaica →</Link>
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
