import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function DhakaLocationPage() {
  useEffect(() => {
    const localBusinessStructuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "GroupFund",
      "description": "Organize group contributions in Dhaka, Bangladesh with GroupFund. Perfect for Dhaka families, churches, schools, and groups.",
      "url": "https://www.groupfund.app/locations/dhaka",
      "logo": "https://www.groupfund.app/logo.png",
      "areaServed": [
        { "@type": "City", "name": "Dhaka" },
        { "@type": "Country", "name": "Bangladesh" }
      ],
      "serviceType": "Group Contribution Management",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "BDT" },
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
        title="GroupFund Dhaka - Group Contributions App for Dhaka, Bangladesh"
        description="Organize group contributions in Dhaka, Bangladesh with GroupFund. Perfect for Dhaka families, churches, schools, and groups. Support for BDT. Free to start."
        keywords="group contributions Dhaka, Dhaka contribution app, groupfund Dhaka, group contributions app Dhaka Bangladesh, Dhaka group payments, BDT contribution tracker Dhaka"
        canonical="https://www.groupfund.app/locations/dhaka"
      />
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">GroupFund for Dhaka, Bangladesh 🇧🇩</h1>
          <p className="page-subtitle">Organize group contributions in Dhaka with GroupFund. Perfect for Dhaka families, churches, schools, and groups.</p>
        </div>
      </section>
      <section className="location-detail-page">
        <div className="container">
          <div className="location-content">
            <div className="location-section">
              <h2>Why GroupFund Works Great in Dhaka</h2>
              <p>Dhaka is Bangladesh's capital and largest city. GroupFund helps Dhaka residents organize group contributions effortlessly, whether for family celebrations, church groups, workplace teams, or friend circles.</p>
              <p>With support for Bangladeshi Taka (BDT) and seamless bank transfers, GroupFund is perfect for Dhaka groups of all sizes.</p>
            </div>
            <div className="location-section">
              <h2>Perfect for Dhaka Groups</h2>
              <div className="features-list">
                <div className="feature-item"><h3>🏙️ Dhaka Families</h3><p>Organize group contributions for extended Dhaka families. Track contributions across Dhaka neighborhoods.</p></div>
                <div className="feature-item"><h3>⛪ Dhaka Churches</h3><p>Manage group contributions for Dhaka church members. Perfect for large Dhaka congregations.</p></div>
                <div className="feature-item"><h3>🏢 Dhaka Workplaces</h3><p>Organize office birthday funds for Dhaka companies. Professional and transparent system.</p></div>
                <div className="feature-item"><h3>🏫 Dhaka Schools</h3><p>Perfect for Dhaka schools, universities, and student groups organizing group contributions.</p></div>
                <div className="feature-item"><h3>💰 BDT Support</h3><p>Full support for Bangladeshi Taka. Set amounts in BDT, perfect for Dhaka bank transfers.</p></div>
                <div className="feature-item"><h3>📱 Mobile Access</h3><p>Native mobile app perfect for Dhaka's mobile-first culture. Access from anywhere in Dhaka.</p></div>
              
                <div className="feature-item">
                  <h3>💬 Integrated Group Chat</h3>
                  <p>Coordinate contributions with optional per-group chat. Mention members with @username, share account details, and confirm payments - all in one place. Perfect for local groups.</p>
                </div>
</div>
            </div>
            <div className="location-section">
              <h2>How Dhaka Groups Use GroupFund</h2>
              <ul className="scenarios-list">
                <li><strong>Dhaka Family Groups:</strong> Organize contributions for extended families across Dhaka neighborhoods.</li>
                <li><strong>Dhaka Church Communities:</strong> Manage group contributions for large Dhaka church congregations.</li>
                <li><strong>Dhaka Office Teams:</strong> Organize workplace birthday funds for Dhaka companies and organizations.</li>
                <li><strong>Dhaka School Groups:</strong> Manage contributions for Dhaka schools, universities, and student associations.</li>
                <li><strong>Dhaka Friend Circles:</strong> Keep friend groups organized for birthday celebrations in Dhaka.</li>
              </ul>
            </div>
            <div className="cta-box">
              <h2>Ready to Organize Group Contributions in Dhaka?</h2>
              <p>Join Dhaka groups using GroupFund to make contributions organized and stress-free.</p>
              <div className="cta-buttons">
                <Link to="/get-started" className="btn btn-primary btn-large">Start Your Dhaka Group</Link>
                <Link to="/how-it-works" className="btn btn-secondary btn-large">See How It Works</Link>
              </div>
            </div>
            <div className="related-links">
              <h3>Explore More</h3>
              <div className="related-links-grid">
                <Link to="/locations/bangladesh">Bangladesh →</Link>
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

