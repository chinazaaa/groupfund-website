import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function IraqLocationPage() {
  useEffect(() => {
    const localBusinessStructuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "GroupFund",
      "description": "Organize group contributions in Iraq with GroupFund. Perfect for Iraqi families, communities, schools, and groups.",
      "url": "https://groupfund.app/locations/iraq",
      "logo": "https://groupfund.app/logo.png",
      "areaServed": { "@type": "Country", "name": "Iraq" },
      "serviceType": "Group Contribution Management",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "IQD" },
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
        title="GroupFund Iraq - Group Contributions App for Iraq"
        description="Organize group contributions in Iraq with GroupFund. Perfect for Iraqi families, communities, schools, and groups. Support for IQD (Iraqi dinar). Free to start."
        keywords="group contributions Iraq, Iraq contribution app, groupfund Iraq, group contributions app Iraq, IQD contribution tracker, Iraq group payments"
        canonical="https://www.groupfund.app/locations/iraq"
      />
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">GroupFund for Iraq 🇮🇶</h1>
          <p className="page-subtitle">
            Organize group contributions in Iraq with GroupFund. Perfect for Iraqi families, communities, schools, and groups.
          </p>
        </div>
      </section>

      <section className="location-detail-page">
        <div className="container">
          <div className="location-content">
            <div className="location-section">
              <h2>Why GroupFund Works Great in Iraq</h2>
              <p>
                Iraq is a Middle Eastern country in western Asia with a population of over 45 million and a capital city, Baghdad, that is the country’s largest urban center.
              </p>
              <p>
                With support for Iraqi dinar (IQD) and local payment details, GroupFund is designed to help Iraqi groups keep shared contributions transparent and organized.
              </p>
            </div>

            <div className="location-section">
              <h2>Key Features for Iraq</h2>
              <div className="features-list">
                <div className="feature-item">
                  <h3>🇮🇶 Iraqi Dinar (IQD) Support</h3>
                  <p>
                    Full support for Iraqi dinar. Set contribution amounts in IQD so everyone contributes in the local currency.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>🏦 Local Transfers & Cash</h3>
                  <p>
                    Works with local bank transfers, exchange offices, and cash‑based workflows; members send money and then mark contributions as paid in GroupFund.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>👨‍👩‍👧‍👦 Perfect for Iraqi Families</h3>
                  <p>
                    Organize contributions for extended Iraqi families in Baghdad, Basra, Mosul, Erbil, and other cities and regions.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>🏘 Community & Support Groups</h3>
                  <p>
                    Ideal for neighborhood, tribal, and community groups coordinating shared funds for important needs.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>🏫 Schools & Local Organizations</h3>
                  <p>
                    Works well for schools and local organizations managing contributions for teachers, staff, and students.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>📱 Mobile-Friendly</h3>
                  <p>
                    Simple mobile experience so members can join groups and update payment status whenever they have access.
                  </p>
                </div>
              </div>
            </div>

            <div className="location-section">
              <h2>Common Use Cases in Iraq</h2>
              <ul className="scenarios-list">
                <li>
                  <strong>Family Group Contributions:</strong> Organize support for weddings, medical needs, and other key family events.
                </li>
                <li>
                  <strong>Community Support Funds:</strong> Coordinate contributions for local projects and emergency needs.
                </li>
                <li>
                  <strong>School & Education Groups:</strong> Collect contributions for teachers, school improvements, and student activities.
                </li>
                <li>
                  <strong>Charity & Relief Groups:</strong> Track contributions for local charity and relief initiatives.
                </li>
                <li>
                  <strong>Workplace Groups:</strong> Organize office birthday, farewell, and support funds wherever companies and teams operate.
                </li>
                <li>
                  <strong>Friend Groups:</strong> Keep friend circles organized for shared gifting and celebrations.
                </li>
              </ul>
            </div>

            <div className="location-section">
              <h2>How It Works in Iraq</h2>
              <ol className="steps-list">
                <li>
                  <strong>Create Your Group:</strong> Set up a group with Iraqi dinar (IQD) as the currency.
                </li>
                <li>
                  <strong>Set Contribution Amounts:</strong> Choose IQD amounts per person that fit your group’s situation.
                </li>
                <li>
                  <strong>Add Member Events:</strong> Add all important dates and occasions to the calendar.
                </li>
                <li>
                  <strong>Track Contributions:</strong> Members mark contributions as paid after sending via their preferred transfer or cash method.
                </li>
                <li>
                  <strong>Automatic Reminders:</strong> GroupFund sends reminders before deadlines so fewer people forget to contribute.
                </li>
                <li>
                  <strong>Focus on What Matters:</strong> Spend more time supporting each other and less time chasing payments.
                </li>
              </ol>
            </div>

            <div className="location-section">
              <h2>Why Iraqi Groups Choose GroupFund</h2>
              <ul className="benefits-list">
                <li>Support for Iraqi dinar (IQD)</li>
                <li>Clear tracking of who has paid and who has not</li>
                <li>Works with both digital transfers and cash workflows</li>
                <li>Free to use with no hidden fees</li>
                <li>Suitable for small and large groups</li>
                <li>Transparent records that build trust</li>
                <li>Automatic reminders reduce manual follow‑ups</li>
                <li>Member reliability scores help organizers plan better</li>
              </ul>
            </div>

            <div className="cta-box">
              <h2>Ready to Organize Group Contributions in Iraq?</h2>
              <p>Join Iraqi groups using GroupFund to make contributions organized and stress-free.</p>
              <div className="cta-buttons">
                <Link to="/get-started" className="btn btn-primary btn-large">
                  Start Your Iraq Group
                </Link>
                <Link to="/how-it-works" className="btn btn-secondary btn-large">
                  See How It Works
                </Link>
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
