import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function AccraLocationPage() {
  return (
    <>
      <SEO
        title="GroupFund Accra - Birthday Contributions App for Accra, Ghana"
        description="Organize birthday contributions in Accra, Ghana with GroupFund. Perfect for Accra families, churches, schools, and groups. Support for GHS. Free to start."
        keywords="birthday contributions Accra, Accra birthday app, groupfund Accra, birthday contributions app Accra Ghana, Accra group payments, GHS birthday tracker Accra"
        canonical="https://groupfund.app/locations/accra"
      />
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">GroupFund for Accra, Ghana 🇬🇭</h1>
          <p className="page-subtitle">Organize birthday contributions in Accra with GroupFund. Perfect for Accra families, churches, schools, and groups.</p>
        </div>
      </section>
      <section className="location-detail-page">
        <div className="container">
          <div className="location-content">
            <div className="location-section">
              <h2>Why GroupFund Works Great in Accra</h2>
              <p>Accra is Ghana's capital and largest city. GroupFund helps Accra residents organize birthday contributions effortlessly, whether for family celebrations, church groups, workplace teams, or friend circles.</p>
              <p>With support for Ghanaian Cedi (GHS) and seamless bank transfers, GroupFund is perfect for Accra groups of all sizes.</p>
            </div>
            <div className="location-section">
              <h2>Perfect for Accra Groups</h2>
              <div className="features-list">
                <div className="feature-item"><h3>🏙️ Accra Families</h3><p>Organize birthday contributions for extended Accra families. Track contributions across Accra neighborhoods.</p></div>
                <div className="feature-item"><h3>⛪ Accra Churches</h3><p>Manage birthday contributions for Accra church members. Perfect for large Accra congregations.</p></div>
                <div className="feature-item"><h3>🏢 Accra Workplaces</h3><p>Organize office birthday funds for Accra companies. Professional and transparent system.</p></div>
                <div className="feature-item"><h3>🏫 Accra Schools</h3><p>Perfect for Accra schools, universities, and student groups organizing birthday contributions.</p></div>
                <div className="feature-item"><h3>💰 GHS Support</h3><p>Full support for Ghanaian Cedi. Set amounts in GHS, perfect for Accra bank transfers.</p></div>
                <div className="feature-item"><h3>📱 Mobile Access</h3><p>Native mobile app perfect for Accra's mobile-first culture. Access from anywhere in Accra.</p></div>
              </div>
            </div>
            <div className="location-section">
              <h2>How Accra Groups Use GroupFund</h2>
              <ul className="scenarios-list">
                <li><strong>Accra Family Groups:</strong> Organize contributions for extended families across Accra neighborhoods.</li>
                <li><strong>Accra Church Communities:</strong> Manage birthday contributions for large Accra church congregations.</li>
                <li><strong>Accra Office Teams:</strong> Organize workplace birthday funds for Accra companies and organizations.</li>
                <li><strong>Accra School Groups:</strong> Manage contributions for Accra schools, universities, and student associations.</li>
                <li><strong>Accra Friend Circles:</strong> Keep friend groups organized for birthday celebrations in Accra.</li>
              </ul>
            </div>
            <div className="cta-box">
              <h2>Ready to Organize Birthday Contributions in Accra?</h2>
              <p>Join Accra groups using GroupFund to make birthday celebrations organized and stress-free.</p>
              <div className="cta-buttons">
                <Link to="/waitlist" className="btn btn-primary btn-large">Start Your Accra Group</Link>
                <Link to="/how-it-works" className="btn btn-secondary btn-large">See How It Works</Link>
              </div>
            </div>
            <div className="related-links">
              <h3>Explore More</h3>
              <div className="related-links-grid">
                <Link to="/locations/ghana">Ghana →</Link>
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

