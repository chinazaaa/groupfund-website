import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function MexicoCityLocationPage() {
  return (
    <>
      <SEO
        title="GroupFund Mexico City - Birthday Contributions App for Mexico City, Mexico"
        description="Organize birthday contributions in Mexico City, Mexico with GroupFund. Perfect for Mexico City families, churches, schools, and groups. Support for MXN. Free to start."
        keywords="birthday contributions Mexico City, Mexico City birthday app, groupfund Mexico City, birthday contributions app Mexico City Mexico, Mexico City group payments, MXN birthday tracker Mexico City"
        canonical="https://groupfund.app/locations/mexico-city"
      />
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">GroupFund for Mexico City, Mexico 🇲🇽</h1>
          <p className="page-subtitle">Organize birthday contributions in Mexico City with GroupFund. Perfect for Mexico City families, churches, schools, and groups.</p>
        </div>
      </section>
      <section className="location-detail-page">
        <div className="container">
          <div className="location-content">
            <div className="location-section">
              <h2>Why GroupFund Works Great in Mexico City</h2>
              <p>Mexico City is Mexico's capital and largest city. GroupFund helps Chilangos organize birthday contributions effortlessly, whether for family celebrations, church groups, workplace teams, or friend circles.</p>
              <p>With support for Mexican Peso (MXN) and seamless bank transfers, GroupFund is perfect for Mexico City groups of all sizes.</p>
            </div>
            <div className="location-section">
              <h2>Perfect for Mexico City Groups</h2>
              <div className="features-list">
                <div className="feature-item"><h3>🏙️ Mexico City Families</h3><p>Organize birthday contributions for extended Mexico City families. Track contributions across CDMX neighborhoods.</p></div>
                <div className="feature-item"><h3>⛪ Mexico City Churches</h3><p>Manage birthday contributions for Mexico City church members. Perfect for large Mexico City congregations.</p></div>
                <div className="feature-item"><h3>🏢 Mexico City Workplaces</h3><p>Organize office birthday funds for Mexico City companies. Professional and transparent system.</p></div>
                <div className="feature-item"><h3>🏫 Mexico City Schools</h3><p>Perfect for Mexico City schools, universities, and student groups organizing birthday contributions.</p></div>
                <div className="feature-item"><h3>💰 MXN Support</h3><p>Full support for Mexican Peso. Set amounts in MXN, perfect for SPEI bank transfers.</p></div>
                <div className="feature-item"><h3>📱 Mobile Access</h3><p>Native mobile app perfect for Mexico City's mobile culture. Access from anywhere in CDMX.</p></div>
              </div>
            </div>
            <div className="location-section">
              <h2>How Mexico City Groups Use GroupFund</h2>
              <ul className="scenarios-list">
                <li><strong>Mexico City Family Groups:</strong> Organize contributions for extended families across CDMX neighborhoods.</li>
                <li><strong>Mexico City Church Communities:</strong> Manage birthday contributions for large Mexico City church congregations.</li>
                <li><strong>Mexico City Office Teams:</strong> Organize workplace birthday funds for Mexico City companies and organizations.</li>
                <li><strong>Mexico City School Groups:</strong> Manage contributions for Mexico City schools, universities, and student associations.</li>
                <li><strong>Mexico City Friend Circles:</strong> Keep friend groups organized for birthday celebrations in Mexico City.</li>
              </ul>
            </div>
            <div className="cta-box">
              <h2>Ready to Organize Birthday Contributions in Mexico City?</h2>
              <p>Join Mexico City groups using GroupFund to make birthday celebrations organized and stress-free.</p>
              <div className="cta-buttons">
                <Link to="/waitlist" className="btn btn-primary btn-large">Start Your Mexico City Group</Link>
                <Link to="/how-it-works" className="btn btn-secondary btn-large">See How It Works</Link>
              </div>
            </div>
            <div className="related-links">
              <h3>Explore More</h3>
              <div className="related-links-grid">
                <Link to="/locations/mexico">Mexico →</Link>
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

