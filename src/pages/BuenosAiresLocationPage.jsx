import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function BuenosAiresLocationPage() {
  useEffect(() => {
    const localBusinessStructuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "GroupFund",
      "description": "Organize group contributions in Buenos Aires, Argentina with GroupFund. Perfect for Buenos Aires families, churches, schools, and groups.",
      "url": "https://www.groupfund.app/locations/buenos-aires",
      "logo": "https://www.groupfund.app/logo.png",
      "areaServed": [
        { "@type": "City", "name": "Buenos Aires" },
        { "@type": "Country", "name": "Argentina" }
      ],
      "serviceType": "Group Contribution Management",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "ARS" },
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
        title="GroupFund Buenos Aires - Group Contributions App for Buenos Aires, Argentina"
        description="Organize group contributions in Buenos Aires, Argentina with GroupFund. Perfect for Buenos Aires families, churches, schools, and groups. Support for ARS. Free to start."
        keywords="group contributions Buenos Aires, Buenos Aires contribution app, groupfund Buenos Aires, group contributions app Buenos Aires Argentina, Buenos Aires group payments, ARS contribution tracker Buenos Aires"
        canonical="https://www.groupfund.app/locations/buenos-aires"
      />
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">GroupFund for Buenos Aires, Argentina 🇦🇷</h1>
          <p className="page-subtitle">Organize group contributions in Buenos Aires with GroupFund. Perfect for Buenos Aires families, churches, schools, and groups.</p>
        </div>
      </section>
      <section className="location-detail-page">
        <div className="container">
          <div className="location-content">
            <div className="location-section">
              <h2>Why GroupFund Works Great in Buenos Aires</h2>
              <p>Buenos Aires is Argentina's capital and largest city. GroupFund helps Porteños organize group contributions effortlessly, whether for family celebrations, church groups, workplace teams, or friend circles.</p>
              <p>With support for Argentine Peso (ARS) and seamless bank transfers, GroupFund is perfect for Buenos Aires groups of all sizes.</p>
            </div>
            <div className="location-section">
              <h2>Perfect for Buenos Aires Groups</h2>
              <div className="features-list">
                <div className="feature-item"><h3>🏙️ Buenos Aires Families</h3><p>Organize group contributions for extended Buenos Aires families. Track contributions across Buenos Aires neighborhoods.</p></div>
                <div className="feature-item"><h3>⛪ Buenos Aires Churches</h3><p>Manage group contributions for Buenos Aires church members. Perfect for large Buenos Aires congregations.</p></div>
                <div className="feature-item"><h3>🏢 Buenos Aires Workplaces</h3><p>Organize office birthday funds for Buenos Aires companies. Professional and transparent system.</p></div>
                <div className="feature-item"><h3>🏫 Buenos Aires Schools</h3><p>Perfect for Buenos Aires schools, universities, and student groups organizing group contributions.</p></div>
                <div className="feature-item"><h3>💰 ARS Support</h3><p>Full support for Argentine Peso. Set amounts in ARS, perfect for Buenos Aires bank transfers.</p></div>
                <div className="feature-item"><h3>📱 Mobile Access</h3><p>Native mobile app perfect for Buenos Aires's mobile culture. Access from anywhere in Buenos Aires.</p></div>
              
                <div className="feature-item">
                  <h3>💬 Integrated Group Chat</h3>
                  <p>Coordinate contributions with optional per-group chat. Mention members with @username, share account details, and confirm payments - all in one place. Perfect for local groups.</p>
                </div>
</div>
            </div>
            <div className="cta-box">
              <h2>Ready to Organize Group Contributions in Buenos Aires?</h2>
              <p>Join Buenos Aires groups using GroupFund to make contributions organized and stress-free.</p>
              <div className="cta-buttons">
                <Link to="/get-started" className="btn btn-primary btn-large">Start Your Buenos Aires Group</Link>
                <Link to="/how-it-works" className="btn btn-secondary btn-large">See How It Works</Link>
              </div>
            </div>
            <div className="related-links">
              <h3>Explore More</h3>
              <div className="related-links-grid">
                <Link to="/locations/argentina">Argentina →</Link>
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

