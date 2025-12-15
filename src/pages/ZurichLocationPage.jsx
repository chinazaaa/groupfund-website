import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function ZurichLocationPage() {
  return (
    <>
      <SEO
        title="GroupFund Zurich - Birthday Contributions App for Zurich, Switzerland"
        description="Organize birthday contributions in Zurich, Switzerland with GroupFund. Perfect for Zurich families, churches, schools, and groups. Support for CHF. Free to start."
        keywords="birthday contributions Zurich, Zurich birthday app, groupfund Zurich, birthday contributions app Zurich Switzerland, Zurich group payments, CHF birthday tracker Zurich"
        canonical="https://groupfund.app/locations/zurich"
      />
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">GroupFund for Zurich, Switzerland 🇨🇭</h1>
          <p className="page-subtitle">Organize birthday contributions in Zurich with GroupFund. Perfect for Zurich families, churches, schools, and groups.</p>
        </div>
      </section>
      <section className="location-detail-page">
        <div className="container">
          <div className="location-content">
            <div className="location-section">
              <h2>Why GroupFund Works Great in Zurich</h2>
              <p>Zurich is Switzerland's largest city and financial center. GroupFund helps Zurich residents organize birthday contributions effortlessly, whether for family celebrations, church groups, workplace teams, or friend circles.</p>
              <p>With support for Swiss Franc (CHF) and seamless bank transfers, GroupFund is perfect for Zurich groups of all sizes.</p>
            </div>
            <div className="location-section">
              <h2>Perfect for Zurich Groups</h2>
              <div className="features-list">
                <div className="feature-item"><h3>🏙️ Zurich Families</h3><p>Organize birthday contributions for extended Zurich families. Track contributions across Zurich districts.</p></div>
                <div className="feature-item"><h3>⛪ Zurich Churches</h3><p>Manage birthday contributions for Zurich church members. Perfect for large Zurich congregations.</p></div>
                <div className="feature-item"><h3>🏢 Zurich Workplaces</h3><p>Organize office birthday funds for Zurich companies. Professional and transparent system.</p></div>
                <div className="feature-item"><h3>🏫 Zurich Schools</h3><p>Perfect for Zurich schools, universities, and student groups organizing birthday contributions.</p></div>
                <div className="feature-item"><h3>💰 CHF Support</h3><p>Full support for Swiss Franc. Set amounts in CHF, perfect for Zurich bank transfers.</p></div>
                <div className="feature-item"><h3>📱 Mobile Access</h3><p>Native mobile app perfect for Zurich's mobile culture. Access from anywhere in Zurich.</p></div>
              </div>
            </div>
            <div className="location-section">
              <h2>How Zurich Groups Use GroupFund</h2>
              <ul className="scenarios-list">
                <li><strong>Zurich Family Groups:</strong> Organize contributions for extended families across Zurich districts.</li>
                <li><strong>Zurich Church Communities:</strong> Manage birthday contributions for large Zurich church congregations.</li>
                <li><strong>Zurich Office Teams:</strong> Organize workplace birthday funds for Zurich companies and organizations.</li>
                <li><strong>Zurich School Groups:</strong> Manage contributions for Zurich schools, universities, and student associations.</li>
                <li><strong>Zurich Friend Circles:</strong> Keep friend groups organized for birthday celebrations in Zurich.</li>
              </ul>
            </div>
            <div className="cta-box">
              <h2>Ready to Organize Birthday Contributions in Zurich?</h2>
              <p>Join Zurich groups using GroupFund to make birthday celebrations organized and stress-free.</p>
              <div className="cta-buttons">
                <Link to="/waitlist" className="btn btn-primary btn-large">Start Your Zurich Group</Link>
                <Link to="/how-it-works" className="btn btn-secondary btn-large">See How It Works</Link>
              </div>
            </div>
            <div className="related-links">
              <h3>Explore More</h3>
              <div className="related-links-grid">
                <Link to="/locations/switzerland">Switzerland →</Link>
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

