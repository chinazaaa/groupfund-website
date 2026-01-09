import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function ZagrebLocationPage() {
  useEffect(() => {
    const localBusinessStructuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "GroupFund",
      "description": "Organize group contributions in Zagreb, Croatia with GroupFund. Perfect for Zagreb families, churches, schools, and groups.",
      "url": "https://groupfund.app/locations/zagreb",
      "logo": "https://groupfund.app/logo.png",
      "areaServed": [
        { "@type": "City", "name": "Zagreb" },
        { "@type": "Country", "name": "Croatia" }
      ],
      "serviceType": "Group Contribution Management",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "EUR" },
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
        title="GroupFund Zagreb - Group Contributions App for Zagreb, Croatia"
        description="Organize group contributions in Zagreb, Croatia with GroupFund. Perfect for Zagreb families, churches, schools, and groups. Support for EUR. Free to start."
        keywords="group contributions Zagreb, Zagreb contribution app, groupfund Zagreb, group contributions app Zagreb Croatia, Zagreb group payments, EUR contribution tracker Zagreb"
        canonical="https://www.groupfund.app/locations/zagreb"
      />
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">GroupFund for Zagreb, Croatia 🇭🇷</h1>
          <p className="page-subtitle">Organize group contributions in Zagreb with GroupFund. Perfect for Zagreb families, churches, schools, and groups.</p>
        </div>
      </section>
      <section className="location-detail-page">
        <div className="container">
          <div className="location-content">
            <div className="location-section">
              <h2>Why GroupFund Works Great in Zagreb</h2>
              <p>Zagreb is Croatia's capital and largest city. GroupFund helps Zagrebians organize group contributions effortlessly, whether for family celebrations, church groups, workplace teams, or friend circles.</p>
              <p>With support for Euro (EUR) and seamless bank transfers, GroupFund is perfect for Zagreb groups of all sizes.</p>
            </div>
            <div className="location-section">
              <h2>Perfect for Zagreb Groups</h2>
              <div className="features-list">
                <div className="feature-item"><h3>🏙️ Zagreb Families</h3><p>Organize group contributions for extended Zagreb families. Track contributions across Zagreb neighborhoods.</p></div>
                <div className="feature-item"><h3>⛪ Zagreb Churches</h3><p>Manage group contributions for Zagreb church members. Perfect for large Zagreb congregations.</p></div>
                <div className="feature-item"><h3>🏢 Zagreb Workplaces</h3><p>Organize office birthday funds for Zagreb companies. Professional and transparent system.</p></div>
                <div className="feature-item"><h3>🏫 Zagreb Schools</h3><p>Perfect for Zagreb schools, universities, and student groups organizing group contributions.</p></div>
                <div className="feature-item"><h3>💰 EUR Support</h3><p>Full support for Euro. Set amounts in EUR, perfect for Zagreb bank transfers.</p></div>
                <div className="feature-item"><h3>📱 Mobile Access</h3><p>Native mobile app perfect for Zagreb's mobile culture. Access from anywhere in Zagreb.</p></div>
              </div>
            </div>
            <div className="cta-box">
              <h2>Ready to Organize Group Contributions in Zagreb?</h2>
              <p>Join Zagreb groups using GroupFund to make contributions organized and stress-free.</p>
              <div className="cta-buttons">
                <Link to="/get-started" className="btn btn-primary btn-large">Start Your Zagreb Group</Link>
                <Link to="/how-it-works" className="btn btn-secondary btn-large">See How It Works</Link>
              </div>
            </div>
            <div className="related-links">
              <h3>Explore More</h3>
              <div className="related-links-grid">
                <Link to="/locations/croatia">Croatia →</Link>
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

