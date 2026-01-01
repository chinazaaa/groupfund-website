import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function ShanghaiLocationPage() {
  useEffect(() => {
    const localBusinessStructuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "GroupFund",
      "description": "Organize group contributions in Shanghai, China with GroupFund. Perfect for Shanghai families, communities, schools, and groups.",
      "url": "https://groupfund.app/locations/shanghai",
      "logo": "https://groupfund.app/logo.png",
      "areaServed": [
        { "@type": "City", "name": "Shanghai" },
        { "@type": "Country", "name": "China" }
      ],
      "serviceType": "Group Contribution Management",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "CNY" },
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
        title="GroupFund Shanghai - Group Contributions App for Shanghai, China"
        description="Organize group contributions in Shanghai, China with GroupFund. Perfect for Shanghai families, communities, schools, and groups. Support for CNY. Free to start."
        keywords="group contributions Shanghai, Shanghai contribution app, groupfund Shanghai, group contributions app Shanghai China, Shanghai group payments, CNY contribution tracker Shanghai"
        canonical="https://www.groupfund.app/locations/shanghai"
      />
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">GroupFund for Shanghai, China 🇨🇳</h1>
          <p className="page-subtitle">
            Organize group contributions in Shanghai with GroupFund. Perfect for Shanghai families, communities, schools, and groups. [web:157][web:158]
          </p>
        </div>
      </section>
      <section className="location-detail-page">
        <div className="container">
          <div className="location-content">
            <div className="location-section">
              <h2>Why GroupFund Works Great in Shanghai</h2>
              <p>
                Shanghai is a direct-administered municipality and one of the most populous urban areas in the world, making organized group contributions especially valuable for busy families and teams. [web:157][web:160]
              </p>
              <p>
                With support for Chinese Yuan Renminbi (CNY) and seamless bank transfers, GroupFund is ideal for Shanghai groups that need a clear and trusted way to manage shared contributions. [web:78][web:162]
              </p>
            </div>

            <div className="location-section">
              <h2>Perfect for Shanghai Groups</h2>
              <div className="features-list">
                <div className="feature-item">
                  <h3>🏙️ Shanghai Families</h3>
                  <p>Organize group contributions for extended Shanghai families across districts like Pudong, Huangpu, Jing’an, and Xuhui. [web:157][web:165]</p>
                </div>
                <div className="feature-item">
                  <h3>🏘 Community & Resident Groups</h3>
                  <p>Manage group contributions for neighborhood committees and residential communities throughout Shanghai. [web:166][web:169]</p>
                </div>
                <div className="feature-item">
                  <h3>🏢 Shanghai Workplaces</h3>
                  <p>Organize office birthday funds and team gifts for companies in Shanghai’s financial and commercial districts such as Lujiazui. [web:157][web:160]</p>
                </div>
                <div className="feature-item">
                  <h3>🏫 Shanghai Schools & Universities</h3>
                  <p>Perfect for schools, universities, and student groups in Shanghai organizing group contributions for staff and students. [web:164]</p>
                </div>
                <div className="feature-item">
                  <h3>💰 CNY Support</h3>
                  <p>The official currency in Shanghai is the Chinese Yuan (CNY), and GroupFund lets you set contribution amounts directly in CNY. [web:78][web:162]</p>
                </div>
                <div className="feature-item">
                  <h3>📱 Mobile Access</h3>
                  <p>A mobile-first experience that fits Shanghai’s fast-paced, tech-forward urban lifestyle. [web:160][web:166]</p>
                </div>
              </div>
            </div>

            <div className="location-section">
              <h2>How Shanghai Groups Use GroupFund</h2>
              <ul className="scenarios-list">
                <li>
                  <strong>Shanghai Family Groups:</strong> Coordinate birthday and celebration contributions for families across different districts.
                </li>
                <li>
                  <strong>Shanghai Community Groups:</strong> Manage shared contributions for neighborhood and residential committees.
                </li>
                <li>
                  <strong>Shanghai Office Teams:</strong> Run office birthday pots and team gifts in Shanghai companies and organizations.
                </li>
                <li>
                  <strong>Shanghai School Groups:</strong> Track contributions for teachers, classes, and university associations.
                </li>
                <li>
                  <strong>Shanghai Friend Circles:</strong> Keep friend groups organized for dinners, parties, and special occasions in the city.
                </li>
              </ul>
            </div>

            <div className="cta-box">
              <h2>Ready to Organize Group Contributions in Shanghai?</h2>
              <p>Join Shanghai groups using GroupFund to make contributions organized and stress-free.</p>
              <div className="cta-buttons">
                <Link to="/waitlist" className="btn btn-primary btn-large">
                  Start Your Shanghai Group
                </Link>
                <Link to="/how-it-works" className="btn btn-secondary btn-large">
                  See How It Works
                </Link>
              </div>
            </div>

            <div className="related-links">
              <h3>Explore More</h3>
              <div className="related-links-grid">
                <Link to="/locations/china">China →</Link>
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
