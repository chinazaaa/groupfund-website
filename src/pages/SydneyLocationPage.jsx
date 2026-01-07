import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function SydneyLocationPage() {
  useEffect(() => {
    const localBusinessStructuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "GroupFund",
      "description": "Organize group contributions in Sydney, Australia with GroupFund. Perfect for Sydney families, churches, schools, and groups.",
      "url": "https://groupfund.app/locations/sydney",
      "logo": "https://groupfund.app/logo.png",
      "areaServed": [
        { "@type": "City", "name": "Sydney" },
        { "@type": "Country", "name": "Australia" }
      ],
      "serviceType": "Group Contribution Management",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "AUD" },
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
        title="GroupFund Sydney - Group Contributions App for Sydney, Australia"
        description="Organize group contributions in Sydney, Australia with GroupFund. Perfect for Sydney families, churches, schools, and groups. Support for AUD. Free to start."
        keywords="group contributions Sydney, Sydney contribution app, groupfund Sydney, group contributions app Sydney Australia, Sydney group payments, AUD contribution tracker Sydney"
        canonical="https://www.groupfund.app/locations/sydney"
      />
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">GroupFund for Sydney, Australia 🇦🇺</h1>
          <p className="page-subtitle">Organize group contributions in Sydney with GroupFund. Perfect for Sydney families, churches, schools, and groups.</p>
        </div>
      </section>
      <section className="location-detail-page">
        <div className="container">
          <div className="location-content">
            <div className="location-section">
              <h2>Why GroupFund Works Great in Sydney</h2>
              <p>Sydney is Australia's largest city and a vibrant multicultural hub. GroupFund helps Sydneysiders organize group contributions effortlessly, whether for family celebrations, church groups, workplace teams, or friend circles.</p>
              <p>With support for Australian Dollar (AUD) and seamless bank transfers, GroupFund is perfect for Sydney groups of all sizes.</p>
            </div>
            <div className="location-section">
              <h2>Perfect for Sydney Groups</h2>
              <div className="features-list">
                <div className="feature-item"><h3>🏙️ Sydney Families</h3><p>Organize group contributions for extended Sydney families. Track contributions across Sydney suburbs.</p></div>
                <div className="feature-item"><h3>⛪ Sydney Churches</h3><p>Manage group contributions for Sydney church members. Perfect for large Sydney congregations.</p></div>
                <div className="feature-item"><h3>🏢 Sydney Workplaces</h3><p>Organize office birthday funds for Sydney companies. Professional and transparent system.</p></div>
                <div className="feature-item"><h3>🏫 Sydney Schools</h3><p>Perfect for Sydney schools, universities, and student groups organizing group contributions.</p></div>
                <div className="feature-item"><h3>💰 AUD Support</h3><p>Full support for Australian Dollar. Set amounts in AUD, perfect for Sydney bank transfers.</p></div>
                <div className="feature-item"><h3>📱 Mobile Access</h3><p>Native mobile app perfect for Sydney's mobile culture. Access from anywhere in Sydney.</p></div>
              </div>
            </div>
            <div className="location-section">
              <h2>How Sydney Groups Use GroupFund</h2>
              <ul className="scenarios-list">
                <li><strong>Sydney Family Groups:</strong> Organize contributions for extended families across Sydney suburbs.</li>
                <li><strong>Sydney Church Communities:</strong> Manage group contributions for large Sydney church congregations.</li>
                <li><strong>Sydney Office Teams:</strong> Organize workplace birthday funds for Sydney companies and organizations.</li>
                <li><strong>Sydney School Groups:</strong> Manage contributions for Sydney schools, universities, and student associations.</li>
                <li><strong>Sydney Friend Circles:</strong> Keep friend groups organized for birthday celebrations in Sydney.</li>
              </ul>
            </div>
            <div className="cta-box">
              <h2>Ready to Organize Group Contributions in Sydney?</h2>
              <p>Join Sydney groups using GroupFund to make contributions organized and stress-free.</p>
              <div className="cta-buttons">
                <Link to="/get-started" className="btn btn-primary btn-large">Start Your Sydney Group</Link>
                <Link to="/how-it-works" className="btn btn-secondary btn-large">See How It Works</Link>
              </div>
            </div>
            <div className="related-links">
              <h3>Explore More</h3>
              <div className="related-links-grid">
                <Link to="/locations/australia">Australia →</Link>
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

