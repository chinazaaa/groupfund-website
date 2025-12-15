import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function LondonLocationPage() {
  return (
    <>
      <SEO
        title="GroupFund London - Birthday Contributions App for London, UK"
        description="Organize birthday contributions in London, UK with GroupFund. Perfect for London families, churches, schools, and groups. Support for GBP. Free to start."
        keywords="birthday contributions London, London birthday app, groupfund London, birthday contributions app London UK, London group payments, GBP birthday tracker London"
        canonical="https://groupfund.app/locations/london"
      />
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">GroupFund for London, UK 🇬🇧</h1>
          <p className="page-subtitle">Organize birthday contributions in London with GroupFund. Perfect for London families, churches, schools, and groups.</p>
        </div>
      </section>
      <section className="location-detail-page">
        <div className="container">
          <div className="location-content">
            <div className="location-section">
              <h2>Why GroupFund Works Great in London</h2>
              <p>London is the UK's capital and largest city. GroupFund helps Londoners organize birthday contributions effortlessly, whether for family celebrations, church groups, workplace teams, or friend circles.</p>
              <p>With support for British Pound (GBP) and seamless bank transfers, GroupFund is perfect for London groups of all sizes.</p>
            </div>
            <div className="location-section">
              <h2>Perfect for London Groups</h2>
              <div className="features-list">
                <div className="feature-item"><h3>🏙️ London Families</h3><p>Organize birthday contributions for extended London families. Track contributions across London boroughs.</p></div>
                <div className="feature-item"><h3>⛪ London Churches</h3><p>Manage birthday contributions for London church members. Perfect for large London congregations.</p></div>
                <div className="feature-item"><h3>🏢 London Workplaces</h3><p>Organize office birthday funds for London companies. Professional and transparent system.</p></div>
                <div className="feature-item"><h3>🏫 London Schools</h3><p>Perfect for London schools, universities, and student groups organizing birthday contributions.</p></div>
                <div className="feature-item"><h3>💰 GBP Support</h3><p>Full support for British Pound. Set amounts in GBP, perfect for London bank transfers.</p></div>
                <div className="feature-item"><h3>📱 Mobile Access</h3><p>Native mobile app perfect for London's fast-paced lifestyle. Access from anywhere in London.</p></div>
              </div>
            </div>
            <div className="location-section">
              <h2>How London Groups Use GroupFund</h2>
              <ul className="scenarios-list">
                <li><strong>London Family Groups:</strong> Organize contributions for extended families across London boroughs.</li>
                <li><strong>London Church Communities:</strong> Manage birthday contributions for large London church congregations.</li>
                <li><strong>London Office Teams:</strong> Organize workplace birthday funds for London companies and organizations.</li>
                <li><strong>London School Groups:</strong> Manage contributions for London schools, universities, and student associations.</li>
                <li><strong>London Friend Circles:</strong> Keep friend groups organized for birthday celebrations in London.</li>
              </ul>
            </div>
            <div className="cta-box">
              <h2>Ready to Organize Birthday Contributions in London?</h2>
              <p>Join London groups using GroupFund to make birthday celebrations organized and stress-free.</p>
              <div className="cta-buttons">
                <Link to="/waitlist" className="btn btn-primary btn-large">Start Your London Group</Link>
                <Link to="/how-it-works" className="btn btn-secondary btn-large">See How It Works</Link>
              </div>
            </div>
            <div className="related-links">
              <h3>Explore More</h3>
              <div className="related-links-grid">
                <Link to="/locations/united-kingdom">United Kingdom →</Link>
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

