import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function MumbaiLocationPage() {
  return (
    <>
      <SEO
        title="GroupFund Mumbai - Birthday Contributions App for Mumbai, India"
        description="Organize birthday contributions in Mumbai, India with GroupFund. Perfect for Mumbai families, churches, schools, and groups. Support for INR. Free to start."
        keywords="birthday contributions Mumbai, Mumbai birthday app, groupfund Mumbai, birthday contributions app Mumbai India, Mumbai group payments, INR birthday tracker Mumbai"
        canonical="https://groupfund.app/locations/mumbai"
      />
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">GroupFund for Mumbai, India 🇮🇳</h1>
          <p className="page-subtitle">Organize birthday contributions in Mumbai with GroupFund. Perfect for Mumbai families, churches, schools, and groups.</p>
        </div>
      </section>
      <section className="location-detail-page">
        <div className="container">
          <div className="location-content">
            <div className="location-section">
              <h2>Why GroupFund Works Great in Mumbai</h2>
              <p>Mumbai is India's financial capital and largest city. GroupFund helps Mumbaikars organize birthday contributions effortlessly, whether for family celebrations, church groups, workplace teams, or friend circles.</p>
              <p>With support for Indian Rupee (INR) and seamless bank transfers, GroupFund is perfect for Mumbai groups of all sizes.</p>
            </div>
            <div className="location-section">
              <h2>Perfect for Mumbai Groups</h2>
              <div className="features-list">
                <div className="feature-item"><h3>🏙️ Mumbai Families</h3><p>Organize birthday contributions for extended Mumbai families. Track contributions across Mumbai neighborhoods.</p></div>
                <div className="feature-item"><h3>⛪ Mumbai Churches</h3><p>Manage birthday contributions for Mumbai church members. Perfect for large Mumbai congregations.</p></div>
                <div className="feature-item"><h3>🏢 Mumbai Workplaces</h3><p>Organize office birthday funds for Mumbai companies. Professional and transparent system.</p></div>
                <div className="feature-item"><h3>🏫 Mumbai Schools</h3><p>Perfect for Mumbai schools, universities, and student groups organizing birthday contributions.</p></div>
                <div className="feature-item"><h3>💰 INR Support</h3><p>Full support for Indian Rupee. Set amounts in INR, perfect for UPI, NEFT, and IMPS transfers.</p></div>
                <div className="feature-item"><h3>📱 Mobile Access</h3><p>Native mobile app perfect for Mumbai's mobile-first culture. Access from anywhere in Mumbai.</p></div>
              </div>
            </div>
            <div className="location-section">
              <h2>How Mumbai Groups Use GroupFund</h2>
              <ul className="scenarios-list">
                <li><strong>Mumbai Family Groups:</strong> Organize contributions for extended families across Mumbai neighborhoods.</li>
                <li><strong>Mumbai Church Communities:</strong> Manage birthday contributions for large Mumbai church congregations.</li>
                <li><strong>Mumbai Office Teams:</strong> Organize workplace birthday funds for Mumbai companies and organizations.</li>
                <li><strong>Mumbai School Groups:</strong> Manage contributions for Mumbai schools, universities, and student associations.</li>
                <li><strong>Mumbai Friend Circles:</strong> Keep friend groups organized for birthday celebrations in Mumbai.</li>
              </ul>
            </div>
            <div className="cta-box">
              <h2>Ready to Organize Birthday Contributions in Mumbai?</h2>
              <p>Join Mumbai groups using GroupFund to make birthday celebrations organized and stress-free.</p>
              <div className="cta-buttons">
                <Link to="/waitlist" className="btn btn-primary btn-large">Start Your Mumbai Group</Link>
                <Link to="/how-it-works" className="btn btn-secondary btn-large">See How It Works</Link>
              </div>
            </div>
            <div className="related-links">
              <h3>Explore More</h3>
              <div className="related-links-grid">
                <Link to="/locations/india">India →</Link>
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

