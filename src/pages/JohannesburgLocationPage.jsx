import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function JohannesburgLocationPage() {
  return (
    <>
      <SEO
        title="GroupFund Johannesburg - Birthday Contributions App for Johannesburg, South Africa"
        description="Organize birthday contributions in Johannesburg, South Africa with GroupFund. Perfect for Johannesburg families, churches, schools, and groups. Support for ZAR. Free to start."
        keywords="birthday contributions Johannesburg, Johannesburg birthday app, groupfund Johannesburg, birthday contributions app Johannesburg South Africa, Johannesburg group payments, ZAR birthday tracker Johannesburg"
        canonical="https://groupfund.app/locations/johannesburg"
      />
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">GroupFund for Johannesburg, South Africa 🇿🇦</h1>
          <p className="page-subtitle">Organize birthday contributions in Johannesburg with GroupFund. Perfect for Johannesburg families, churches, schools, and groups.</p>
        </div>
      </section>
      <section className="location-detail-page">
        <div className="container">
          <div className="location-content">
            <div className="location-section">
              <h2>Why GroupFund Works Great in Johannesburg</h2>
              <p>Johannesburg is South Africa's largest city and economic hub. GroupFund helps Joburg residents organize birthday contributions effortlessly, whether for family celebrations, church groups, workplace teams, or friend circles.</p>
              <p>With support for South African Rand (ZAR) and seamless bank transfers, GroupFund is perfect for Johannesburg groups of all sizes.</p>
            </div>
            <div className="location-section">
              <h2>Perfect for Johannesburg Groups</h2>
              <div className="features-list">
                <div className="feature-item"><h3>🏙️ Johannesburg Families</h3><p>Organize birthday contributions for extended Johannesburg families. Track contributions across Joburg suburbs.</p></div>
                <div className="feature-item"><h3>⛪ Johannesburg Churches</h3><p>Manage birthday contributions for Johannesburg church members. Perfect for large Johannesburg congregations.</p></div>
                <div className="feature-item"><h3>🏢 Johannesburg Workplaces</h3><p>Organize office birthday funds for Johannesburg companies. Professional and transparent system.</p></div>
                <div className="feature-item"><h3>🏫 Johannesburg Schools</h3><p>Perfect for Johannesburg schools, universities, and student groups organizing birthday contributions.</p></div>
                <div className="feature-item"><h3>💰 ZAR Support</h3><p>Full support for South African Rand. Set amounts in ZAR, perfect for Johannesburg bank transfers.</p></div>
                <div className="feature-item"><h3>📱 Mobile Access</h3><p>Native mobile app perfect for Johannesburg's mobile culture. Access from anywhere in Joburg.</p></div>
              </div>
            </div>
            <div className="location-section">
              <h2>How Johannesburg Groups Use GroupFund</h2>
              <ul className="scenarios-list">
                <li><strong>Johannesburg Family Groups:</strong> Organize contributions for extended families across Joburg suburbs.</li>
                <li><strong>Johannesburg Church Communities:</strong> Manage birthday contributions for large Johannesburg church congregations.</li>
                <li><strong>Johannesburg Office Teams:</strong> Organize workplace birthday funds for Johannesburg companies and organizations.</li>
                <li><strong>Johannesburg School Groups:</strong> Manage contributions for Johannesburg schools, universities, and student associations.</li>
                <li><strong>Johannesburg Friend Circles:</strong> Keep friend groups organized for birthday celebrations in Johannesburg.</li>
              </ul>
            </div>
            <div className="cta-box">
              <h2>Ready to Organize Birthday Contributions in Johannesburg?</h2>
              <p>Join Johannesburg groups using GroupFund to make birthday celebrations organized and stress-free.</p>
              <div className="cta-buttons">
                <Link to="/waitlist" className="btn btn-primary btn-large">Start Your Johannesburg Group</Link>
                <Link to="/how-it-works" className="btn btn-secondary btn-large">See How It Works</Link>
              </div>
            </div>
            <div className="related-links">
              <h3>Explore More</h3>
              <div className="related-links-grid">
                <Link to="/locations/south-africa">South Africa →</Link>
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

