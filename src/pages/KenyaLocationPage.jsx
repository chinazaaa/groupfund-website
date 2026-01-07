import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function KenyaLocationPage() {
  useEffect(() => {
    const localBusinessStructuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "GroupFund",
      "description": "Organize group contributions in Kenya with GroupFund. Perfect for Kenyan families, churches, schools, and groups.",
      "url": "https://groupfund.app/locations/kenya",
      "logo": "https://groupfund.app/logo.png",
      "areaServed": { "@type": "Country", "name": "Kenya" },
      "serviceType": "Group Contribution Management",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "KES" },
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
        title="GroupFund Kenya - Group Contributions App for Kenya"
        description="Organize group contributions in Kenya with GroupFund. Perfect for Kenyan families, churches, schools, and groups. Support for KES (Kenyan Shilling). Free to start."
        keywords="group contributions Kenya, Kenya contribution app, groupfund Kenya, group contributions app Kenya, KES contribution tracker, Kenya group payments"
        canonical="https://www.groupfund.app/locations/kenya"
      />
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">GroupFund for Kenya 🇰🇪</h1>
          <p className="page-subtitle">Organize group contributions in Kenya with GroupFund. Perfect for Kenyan families, churches, schools, and groups.</p>
        </div>
      </section>
      <section className="location-detail-page">
        <div className="container">
          <div className="location-content">
            <div className="location-section">
              <h2>Why GroupFund Works Great in Kenya</h2>
              <p>GroupFund is perfect for organizing group contributions in Kenya. Whether you're managing contributions for your extended family, church members, school groups, or friend circles, GroupFund makes it simple and transparent.</p>
              <p>With support for Kenyan Shilling (KES) and local bank details, GroupFund is designed to work seamlessly for Kenyan groups.</p>
            </div>
            <div className="location-section">
              <h2>Key Features for Kenya</h2>
              <div className="features-list">
                <div className="feature-item"><h3>🇰🇪 Kenyan Shilling (KES) Support</h3><p>Full support for Kenyan Shilling. Set contribution amounts in KES, and local bank details are displayed automatically.</p></div>
                <div className="feature-item"><h3>🏦 Local Bank Transfers</h3><p>Perfect for Kenyan bank transfers and M-Pesa. Members can transfer directly to celebrants' bank accounts or mobile money.</p></div>
                <div className="feature-item"><h3>👨‍👩‍👧‍👦 Perfect for Kenyan Families</h3><p>Organize contributions for extended Kenyan families. Track who has contributed across multiple family members.</p></div>
                <div className="feature-item"><h3>⛪ Church Groups</h3><p>Ideal for Kenyan churches organizing group contributions for members. Manage large congregations efficiently.</p></div>
                <div className="feature-item"><h3>🏫 Schools & Universities</h3><p>Perfect for Kenyan schools, universities, and student groups organizing group contributions.</p></div>
                <div className="feature-item"><h3>📱 Mobile-First</h3><p>Native mobile app perfect for Kenya's mobile money culture. Access from anywhere, get push notifications.</p></div>
              </div>
            </div>
            <div className="location-section">
              <h2>Common Use Cases in Kenya</h2>
              <ul className="scenarios-list">
                <li><strong>Family Group Contributions:</strong> Organize contributions for extended Kenyan families.</li>
                <li><strong>Church Member Contributions:</strong> Manage group contributions for church members in Kenyan churches.</li>
                <li><strong>School Groups:</strong> Organize contributions for teachers, staff, and students in Kenyan schools.</li>
                <li><strong>Alumni Associations:</strong> Manage contributions for Kenyan university and school alumni groups.</li>
                <li><strong>Workplace Groups:</strong> Organize office birthday funds for Kenyan companies and organizations.</li>
                <li><strong>Friend Groups:</strong> Keep friend groups organized for birthday celebrations in Kenya.</li>
              </ul>
            </div>
            <div className="location-section">
              <h2>How It Works in Kenya</h2>
              <ol className="steps-list">
                <li><strong>Create Your Group:</strong> Set up a group with Kenyan Shilling (KES) as the currency.</li>
                <li><strong>Set Contribution Amounts:</strong> Set amounts in KES (e.g., KSh 500 or KSh 1,000 per person).</li>
                <li><strong>Add Member Birthdays:</strong> Add all group member birthdays to the calendar.</li>
                <li><strong>Track Contributions:</strong> Members mark payments as paid after transferring via bank or M-Pesa.</li>
                <li><strong>Automatic Reminders:</strong> Get reminders 7 days before, 1 day before, and on deadline day.</li>
                <li><strong>Celebrate Together:</strong> Focus on celebrating birthdays instead of managing contributions.</li>
              </ol>
            </div>
            <div className="location-section">
              <h2>Why Kenyan Groups Choose GroupFund</h2>
              <ul className="benefits-list">
                <li>Support for Kenyan Shilling (KES)</li>
                <li>Perfect for bank transfers and M-Pesa</li>
                <li>Mobile-first design</li>
                <li>Free to use - no hidden fees</li>
                <li>Works for groups of any size</li>
                <li>Transparent tracking builds trust</li>
                <li>Automatic reminders reduce follow-ups</li>
                <li>Member reliability scores help make informed decisions</li>
              </ul>
            </div>
            <div className="cta-box">
              <h2>Ready to Organize Group Contributions in Kenya?</h2>
              <p>Join Kenyan groups using GroupFund to make contributions organized and stress-free.</p>
              <div className="cta-buttons">
                <Link to="/get-started" className="btn btn-primary btn-large">Start Your Kenya Group</Link>
                <Link to="/how-it-works" className="btn btn-secondary btn-large">See How It Works</Link>
              </div>
            </div>
            <div className="related-links">
              <h3>Explore More</h3>
              <div className="related-links-grid">
                <Link to="/locations">All Locations →</Link>
                <Link to="/use-cases">View Use Cases →</Link>
                <Link to="/features">View Features →</Link>
                <Link to="/pricing">See Pricing →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

