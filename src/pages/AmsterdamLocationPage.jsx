import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function AmsterdamLocationPage() {
  useEffect(() => {
    const localBusinessStructuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "GroupFund",
      "description": "Organize group contributions in Amsterdam, Netherlands with GroupFund. Perfect for Amsterdam families, churches, schools, and groups.",
      "url": "https://groupfund.app/locations/amsterdam",
      "logo": "https://groupfund.app/logo.png",
      "areaServed": [
        { "@type": "City", "name": "Amsterdam" },
        { "@type": "Country", "name": "Netherlands" }
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
        title="GroupFund Amsterdam - Group Contributions App for Amsterdam, Netherlands"
        description="Organize group contributions in Amsterdam, Netherlands with GroupFund. Perfect for Amsterdam families, churches, schools, and groups. Support for EUR. Free to start."
        keywords="group contributions Amsterdam, Amsterdam contribution app, groupfund Amsterdam, group contributions app Amsterdam Netherlands, Amsterdam group payments, EUR contribution tracker Amsterdam"
        canonical="https://www.groupfund.app/locations/amsterdam"
      />
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">GroupFund for Amsterdam, Netherlands 🇳🇱</h1>
          <p className="page-subtitle">Organize group contributions in Amsterdam with GroupFund. Perfect for Amsterdam families, churches, schools, and groups.</p>
        </div>
      </section>
      <section className="location-detail-page">
        <div className="container">
          <div className="location-content">
            <div className="location-section">
              <h2>Why GroupFund Works Great in Amsterdam</h2>
              <p>Amsterdam is the Netherlands' capital and largest city. GroupFund helps Amsterdammers organize group contributions effortlessly, whether for family celebrations, church groups, workplace teams, or friend circles.</p>
              <p>With support for Euro (EUR) and seamless bank transfers, GroupFund is perfect for Amsterdam groups of all sizes.</p>
            </div>
            <div className="location-section">
              <h2>Perfect for Amsterdam Groups</h2>
              <div className="features-list">
                <div className="feature-item"><h3>🏙️ Amsterdam Families</h3><p>Organize group contributions for extended Amsterdam families. Track contributions across Amsterdam neighborhoods.</p></div>
                <div className="feature-item"><h3>⛪ Amsterdam Churches</h3><p>Manage group contributions for Amsterdam church members. Perfect for large Amsterdam congregations.</p></div>
                <div className="feature-item"><h3>🏢 Amsterdam Workplaces</h3><p>Organize office birthday funds for Amsterdam companies. Professional and transparent system.</p></div>
                <div className="feature-item"><h3>🏫 Amsterdam Schools</h3><p>Perfect for Amsterdam schools, universities, and student groups organizing group contributions.</p></div>
                <div className="feature-item"><h3>💰 EUR Support</h3><p>Full support for Euro. Set amounts in EUR, perfect for Amsterdam bank transfers.</p></div>
                <div className="feature-item"><h3>📱 Mobile Access</h3><p>Native mobile app perfect for Amsterdam's mobile culture. Access from anywhere in Amsterdam.</p></div>
              </div>
            </div>
            <div className="location-section">
              <h2>How Amsterdam Groups Use GroupFund</h2>
              <ul className="scenarios-list">
                <li><strong>Amsterdam Family Groups:</strong> Organize contributions for extended families across Amsterdam neighborhoods.</li>
                <li><strong>Amsterdam Church Communities:</strong> Manage group contributions for large Amsterdam church congregations.</li>
                <li><strong>Amsterdam Office Teams:</strong> Organize workplace birthday funds for Amsterdam companies and organizations.</li>
                <li><strong>Amsterdam School Groups:</strong> Manage contributions for Amsterdam schools, universities, and student associations.</li>
                <li><strong>Amsterdam Friend Circles:</strong> Keep friend groups organized for birthday celebrations in Amsterdam.</li>
              </ul>
            </div>
            <div className="cta-box">
              <h2>Ready to Organize Group Contributions in Amsterdam?</h2>
              <p>Join Amsterdam groups using GroupFund to make contributions organized and stress-free.</p>
              <div className="cta-buttons">
                <Link to="/waitlist" className="btn btn-primary btn-large">Start Your Amsterdam Group</Link>
                <Link to="/how-it-works" className="btn btn-secondary btn-large">See How It Works</Link>
              </div>
            </div>
            <div className="related-links">
              <h3>Explore More</h3>
              <div className="related-links-grid">
                <Link to="/locations/netherlands">Netherlands →</Link>
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

