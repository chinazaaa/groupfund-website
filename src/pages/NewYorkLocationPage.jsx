import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function NewYorkLocationPage() {
  return (
    <>
      <SEO
        title="GroupFund New York - Birthday Contributions App for New York, USA"
        description="Organize birthday contributions in New York, USA with GroupFund. Perfect for New York families, churches, schools, and groups. Support for USD. Free to start."
        keywords="birthday contributions New York, New York birthday app, groupfund New York, birthday contributions app New York USA, New York group payments, USD birthday tracker New York"
        canonical="https://groupfund.app/locations/new-york"
      />
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">GroupFund for New York, USA 🇺🇸</h1>
          <p className="page-subtitle">Organize birthday contributions in New York with GroupFund. Perfect for New York families, churches, schools, and groups.</p>
        </div>
      </section>
      <section className="location-detail-page">
        <div className="container">
          <div className="location-content">
            <div className="location-section">
              <h2>Why GroupFund Works Great in New York</h2>
              <p>New York is a vibrant, diverse city with many communities. GroupFund helps New Yorkers organize birthday contributions effortlessly, whether for family celebrations, church groups, workplace teams, or friend circles.</p>
              <p>With support for US Dollar (USD) and seamless bank transfers, GroupFund is perfect for New York groups of all sizes.</p>
            </div>
            <div className="location-section">
              <h2>Perfect for New York Groups</h2>
              <div className="features-list">
                <div className="feature-item"><h3>🏙️ New York Families</h3><p>Organize birthday contributions for extended New York families. Track contributions across different NYC boroughs.</p></div>
                <div className="feature-item"><h3>⛪ New York Churches</h3><p>Manage birthday contributions for New York church members. Perfect for large New York congregations.</p></div>
                <div className="feature-item"><h3>🏢 New York Workplaces</h3><p>Organize office birthday funds for New York companies. Professional and transparent system.</p></div>
                <div className="feature-item"><h3>🏫 New York Schools</h3><p>Perfect for New York schools, universities, and student groups organizing birthday contributions.</p></div>
                <div className="feature-item"><h3>💰 USD Support</h3><p>Full support for US Dollar. Set amounts in USD, perfect for New York bank transfers.</p></div>
                <div className="feature-item"><h3>📱 Mobile Access</h3><p>Native mobile app perfect for New York's fast-paced lifestyle. Access from anywhere in NYC.</p></div>
              </div>
            </div>
            <div className="location-section">
              <h2>How New York Groups Use GroupFund</h2>
              <ul className="scenarios-list">
                <li><strong>New York Family Groups:</strong> Organize contributions for extended families across NYC boroughs.</li>
                <li><strong>New York Church Communities:</strong> Manage birthday contributions for large New York church congregations.</li>
                <li><strong>New York Office Teams:</strong> Organize workplace birthday funds for New York companies and organizations.</li>
                <li><strong>New York School Groups:</strong> Manage contributions for New York schools, universities, and student associations.</li>
                <li><strong>New York Friend Circles:</strong> Keep friend groups organized for birthday celebrations in New York.</li>
              </ul>
            </div>
            <div className="cta-box">
              <h2>Ready to Organize Birthday Contributions in New York?</h2>
              <p>Join New York groups using GroupFund to make birthday celebrations organized and stress-free.</p>
              <div className="cta-buttons">
                <Link to="/waitlist" className="btn btn-primary btn-large">Start Your New York Group</Link>
                <Link to="/how-it-works" className="btn btn-secondary btn-large">See How It Works</Link>
              </div>
            </div>
            <div className="related-links">
              <h3>Explore More</h3>
              <div className="related-links-grid">
                <Link to="/locations/united-states">United States →</Link>
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

