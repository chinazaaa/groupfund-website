import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function ReykjavikLocationPage() {
  useEffect(() => {
    const localBusinessStructuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "GroupFund",
      "description": "Organize group contributions in Reykjavik, Iceland with GroupFund. Perfect for Reykjavik families, churches, schools, and groups.",
      "url": "https://www.groupfund.app/locations/reykjavik",
      "logo": "https://www.groupfund.app/logo.png",
      "areaServed": [
        { "@type": "City", "name": "Reykjavik" },
        { "@type": "Country", "name": "Iceland" }
      ],
      "serviceType": "Group Contribution Management",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "ISK" },
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
        title="GroupFund Reykjavik - Group Contributions App for Reykjavik, Iceland"
        description="Organize group contributions in Reykjavik, Iceland with GroupFund. Perfect for Reykjavik families, churches, schools, and groups. Support for ISK. Free to start."
        keywords="group contributions Reykjavik, Reykjavik contribution app, groupfund Reykjavik, group contributions app Reykjavik Iceland, Reykjavik group payments, ISK contribution tracker Reykjavik"
        canonical="https://www.groupfund.app/locations/reykjavik"
      />
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">GroupFund for Reykjavik, Iceland 🇮🇸</h1>
          <p className="page-subtitle">Organize group contributions in Reykjavik with GroupFund. Perfect for Reykjavik families, churches, schools, and groups.</p>
        </div>
      </section>
      <section className="location-detail-page">
        <div className="container">
          <div className="location-content">
            <div className="location-section">
              <h2>Why GroupFund Works Great in Reykjavik</h2>
              <p>Reykjavik is Iceland's capital and largest city. GroupFund helps Reykjavikers organize group contributions effortlessly, whether for family celebrations, church groups, workplace teams, or friend circles.</p>
              <p>With support for Icelandic Króna (ISK) and seamless bank transfers, GroupFund is perfect for Reykjavik groups of all sizes.</p>
            </div>
            <div className="location-section">
              <h2>Perfect for Reykjavik Groups</h2>
              <div className="features-list">
                <div className="feature-item"><h3>🏙️ Reykjavik Families</h3><p>Organize group contributions for extended Reykjavik families. Track contributions across Reykjavik neighborhoods.</p></div>
                <div className="feature-item"><h3>⛪ Reykjavik Churches</h3><p>Manage group contributions for Reykjavik church members. Perfect for large Reykjavik congregations.</p></div>
                <div className="feature-item"><h3>🏢 Reykjavik Workplaces</h3><p>Organize office birthday funds for Reykjavik companies. Professional and transparent system.</p></div>
                <div className="feature-item"><h3>🏫 Reykjavik Schools</h3><p>Perfect for Reykjavik schools, universities, and student groups organizing group contributions.</p></div>
                <div className="feature-item"><h3>💰 ISK Support</h3><p>Full support for Icelandic Króna. Set amounts in ISK, perfect for Reykjavik bank transfers.</p></div>
                <div className="feature-item"><h3>📱 Mobile Access</h3><p>Native mobile app perfect for Reykjavik's mobile culture. Access from anywhere in Reykjavik.</p></div>
              
                <div className="feature-item">
                  <h3>💬 Integrated Group Chat</h3>
                  <p>Coordinate contributions with optional per-group chat. Mention members with @username, share account details, and confirm payments - all in one place. Perfect for local groups.</p>
                </div>
</div>
            </div>
            <div className="cta-box">
              <h2>Ready to Organize Group Contributions in Reykjavik?</h2>
              <p>Join Reykjavik groups using GroupFund to make contributions organized and stress-free.</p>
              <div className="cta-buttons">
                <Link to="/get-started" className="btn btn-primary btn-large">Start Your Reykjavik Group</Link>
                <Link to="/how-it-works" className="btn btn-secondary btn-large">See How It Works</Link>
              </div>
            </div>
            <div className="related-links">
              <h3>Explore More</h3>
              <div className="related-links-grid">
                <Link to="/locations/iceland">Iceland →</Link>
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

