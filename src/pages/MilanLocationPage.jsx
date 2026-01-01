import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function MilanLocationPage() {
  useEffect(() => {
    const localBusinessStructuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "GroupFund",
      "description": "Organize group contributions in Milan, Italy with GroupFund. Perfect for Milan families, churches, schools, and groups.",
      "url": "https://groupfund.app/locations/milan",
      "logo": "https://groupfund.app/logo.png",
      "areaServed": [
        { "@type": "City", "name": "Milan" },
        { "@type": "Country", "name": "Italy" }
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
        title="GroupFund Milan - Group Contributions App for Milan, Italy"
        description="Organize group contributions in Milan, Italy with GroupFund. Perfect for Milan families, churches, schools, and groups. Support for EUR. Free to start."
        keywords="group contributions Milan, Milan contribution app, groupfund Milan, group contributions app Milan Italy, Milan group payments, EUR contribution tracker Milan"
        canonical="https://www.groupfund.app/locations/milan"
      />
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">GroupFund for Milan, Italy 🇮🇹</h1>
          <p className="page-subtitle">
            Organize group contributions in Milan with GroupFund. Perfect for Milan families, churches, schools, and groups. [web:121][web:122]
          </p>
        </div>
      </section>
      <section className="location-detail-page">
        <div className="container">
          <div className="location-content">
            <div className="location-section">
              <h2>Why GroupFund Works Great in Milan</h2>
              <p>
                Milan is the capital of the Lombardy region and one of Italy&apos;s largest and most important cities, known as a global hub for fashion, finance, and business. [web:121][web:122][web:123]
              </p>
              <p>
                With support for Euro (EUR) and seamless bank transfers, GroupFund is ideal for Milan groups that need a clear and trusted way to manage shared contributions. [web:46][web:126]
              </p>
            </div>

            <div className="location-section">
              <h2>Perfect for Milan Groups</h2>
              <div className="features-list">
                <div className="feature-item">
                  <h3>🏙️ Milan Families</h3>
                  <p>Organize group contributions for extended Milan families across neighborhoods and the wider metropolitan area. [web:121][web:125]</p>
                </div>
                <div className="feature-item">
                  <h3>⛪ Milan Churches & Parishes</h3>
                  <p>Manage group contributions for church members and local parish communities throughout Milan.</p>
                </div>
                <div className="feature-item">
                  <h3>🏢 Milan Workplaces</h3>
                  <p>Organize office birthday funds and team gifts for Milan&apos;s companies, agencies, and fashion houses. [web:122][web:123]</p>
                </div>
                <div className="feature-item">
                  <h3>🏫 Milan Schools & Universities</h3>
                  <p>Perfect for Milan universities, schools, and student groups organizing shared contributions.</p>
                </div>
                <div className="feature-item">
                  <h3>💰 EUR Support</h3>
                  <p>The official currency in Milan is the Euro (EUR), and GroupFund lets you set contribution amounts directly in EUR. [web:46][web:129]</p>
                </div>
                <div className="feature-item">
                  <h3>📱 Mobile Access</h3>
                  <p>A mobile-first experience that fits Milan&apos;s fast-paced urban lifestyle and busy schedules. [web:136]</p>
                </div>
              </div>
            </div>

            <div className="location-section">
              <h2>How Milan Groups Use GroupFund</h2>
              <ul className="scenarios-list">
                <li>
                  <strong>Milan Family Groups:</strong> Coordinate birthday and celebration contributions for families across the city.
                </li>
                <li>
                  <strong>Milan Church Communities:</strong> Manage shared contributions for church events and member support.
                </li>
                <li>
                  <strong>Milan Office Teams:</strong> Run office birthday pots and farewell gifts in Milan businesses.
                </li>
                <li>
                  <strong>Milan School Groups:</strong> Track contributions for teachers, classes, and student associations.
                </li>
                <li>
                  <strong>Milan Friend Circles:</strong> Keep friend groups organized for dinners, parties, and special occasions in the city.
                </li>
              </ul>
            </div>

            <div className="cta-box">
              <h2>Ready to Organize Group Contributions in Milan?</h2>
              <p>Join Milan groups using GroupFund to make contributions organized and stress-free.</p>
              <div className="cta-buttons">
                <Link to="/waitlist" className="btn btn-primary btn-large">
                  Start Your Milan Group
                </Link>
                <Link to="/how-it-works" className="btn btn-secondary btn-large">
                  See How It Works
                </Link>
              </div>
            </div>

            <div className="related-links">
              <h3>Explore More</h3>
              <div className="related-links-grid">
                <Link to="/locations/italy">Italy →</Link>
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
