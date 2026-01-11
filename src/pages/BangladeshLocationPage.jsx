import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function BangladeshLocationPage() {
  useEffect(() => {
    const localBusinessStructuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "GroupFund",
      "description": "Organize group contributions in Bangladesh with GroupFund. Perfect for Bangladeshi families, churches, schools, and groups.",
      "url": "https://www.groupfund.app/locations/bangladesh",
      "logo": "https://www.groupfund.app/logo.png",
      "areaServed": { "@type": "Country", "name": "Bangladesh" },
      "serviceType": "Group Contribution Management",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "BDT" },
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
        title="GroupFund Bangladesh - Group Contributions App for Bangladesh"
        description="Organize group contributions in Bangladesh with GroupFund. Perfect for Bangladeshi families, churches, schools, and groups. Support for BDT (Bangladeshi Taka). Free to start."
        keywords="group contributions Bangladesh, Bangladeshi contribution app, groupfund Bangladesh, group contributions app Bangladesh, BDT contribution tracker, Bangladesh group payments"
        canonical="https://www.groupfund.app/locations/bangladesh"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">GroupFund for Bangladesh 🇧🇩</h1>
          <p className="page-subtitle">
            Organize group contributions in Bangladesh with GroupFund. Perfect for Bangladeshi families, churches, schools, and groups.
          </p>
        </div>
      </section>

      <section className="location-detail-page">
        <div className="container">
          <div className="location-content">
            <div className="location-section">
              <h2>Why GroupFund Works Great in Bangladesh</h2>
              <p>
                GroupFund is perfect for organizing group contributions in Bangladesh. Whether you're managing contributions for your extended family, church members, school groups, or friend circles, GroupFund makes it simple and transparent.
              </p>
              <p>
                With support for Bangladeshi Taka (BDT) and local bank details, GroupFund is designed to work seamlessly for Bangladeshi groups.
              </p>
            </div>

            <div className="location-section">
              <h2>Key Features for Bangladesh</h2>
              <div className="features-list">
                <div className="feature-item">
                  <h3>🇧🇩 Bangladeshi Taka (BDT) Support</h3>
                  <p>Full support for Bangladeshi Taka. Set contribution amounts in BDT, and local bank details are displayed automatically.</p>
                </div>
                <div className="feature-item">
                  <h3>🏦 Local Bank Transfers</h3>
                  <p>Perfect for Bangladeshi bank transfers and mobile money. Members can transfer directly to celebrants' accounts.</p>
                </div>
                <div className="feature-item">
                  <h3>👨‍👩‍👧‍👦 Perfect for Bangladeshi Families</h3>
                  <p>Organize contributions for extended Bangladeshi families. Track who has contributed across multiple family members.</p>
                </div>
                <div className="feature-item">
                  <h3>⛪ Church Groups</h3>
                  <p>Ideal for Bangladeshi churches organizing group contributions for members. Manage large congregations efficiently.</p>
                </div>
                <div className="feature-item">
                  <h3>🏫 Schools & Universities</h3>
                  <p>Perfect for Bangladeshi schools, universities, and student groups organizing group contributions.</p>
                </div>
                <div className="feature-item">
                  <h3>📱 Mobile-First</h3>
                  <p>Native mobile app perfect for Bangladesh's mobile-first culture. Access from anywhere, get push notifications.</p>
                </div>
              </div>
            </div>

            <div className="location-section">
              <h2>Common Use Cases in Bangladesh</h2>
              <ul className="scenarios-list">
                <li><strong>Family Group Contributions:</strong> Organize contributions for extended Bangladeshi families.</li>
                <li><strong>Church Member Contributions:</strong> Manage group contributions for church members in Bangladeshi churches.</li>
                <li><strong>School Groups:</strong> Organize contributions for teachers, staff, and students in Bangladeshi schools.</li>
                <li><strong>Alumni Associations:</strong> Manage contributions for Bangladeshi university and school alumni groups.</li>
                <li><strong>Workplace Groups:</strong> Organize office birthday funds for Bangladeshi companies and organizations.</li>
                <li><strong>Friend Groups:</strong> Keep friend groups organized for birthday celebrations in Bangladesh.</li>
              </ul>
            </div>

            <div className="location-section">
              <h2>How It Works in Bangladesh</h2>
              <ol className="steps-list">
                <li><strong>Create Your Group:</strong> Set up a group with Bangladeshi Taka (BDT) as the currency.</li>
                <li><strong>Set Contribution Amounts:</strong> Set amounts in BDT (e.g., ৳500 or ৳1000 per person).</li>
                <li><strong>Add Member Birthdays:</strong> Add all group member birthdays to the calendar.</li>
                <li><strong>Track Contributions:</strong> Members mark payments as paid after transferring to bank accounts or mobile money.</li>
                <li><strong>Automatic Reminders:</strong> Get reminders 7 days before, 1 day before, and on deadline day.</li>
                <li><strong>Celebrate Together:</strong> Focus on celebrating birthdays instead of managing contributions.</li>
              </ol>
            </div>

            <div className="location-section">
              <h2>Why Bangladeshi Groups Choose GroupFund</h2>
              <ul className="benefits-list">
                <li>Support for Bangladeshi Taka (BDT)</li>
                <li>Perfect for Bangladeshi bank transfers and mobile money</li>
                <li>Mobile-first design for Bangladesh's mobile culture</li>
                <li>Free to use - no hidden fees</li>
                <li>Works for groups of any size</li>
                <li>Transparent tracking builds trust</li>
                <li>Automatic reminders reduce follow-ups</li>
                <li>Member reliability scores help make informed decisions</li>
              </ul>
            </div>

            <div className="cta-box">
              <h2>Ready to Organize Group Contributions in Bangladesh?</h2>
              <p>Join Bangladeshi groups using GroupFund to make contributions organized and stress-free.</p>
              <div className="cta-buttons">
                <Link to="/get-started" className="btn btn-primary btn-large">Start Your Bangladeshi Group</Link>
                <Link to="/how-it-works" className="btn btn-secondary btn-large">See How It Works</Link>
              </div>
            </div>

            <div className="related-links">
              <h3>Explore More</h3>
              <div className="related-links-grid">
                <Link to="/locations/dhaka">Dhaka →</Link>
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

