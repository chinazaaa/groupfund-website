import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function SerbiaLocationPage() {
  useEffect(() => {
    const localBusinessStructuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "GroupFund",
      "description": "Organize group contributions in Serbia with GroupFund. Perfect for Serbian families, communities, schools, and groups.",
      "url": "https://groupfund.app/locations/serbia",
      "logo": "https://groupfund.app/logo.png",
      "areaServed": { "@type": "Country", "name": "Serbia" },
      "serviceType": "Group Contribution Management",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "RSD" },
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
        title="GroupFund Serbia - Group Contributions App for Serbia"
        description="Organize group contributions in Serbia with GroupFund. Perfect for Serbian families, communities, schools, and groups. Support for RSD (Serbian dinar). Free to start."
        keywords="group contributions Serbia, Serbia contribution app, groupfund Serbia, group contributions app Serbia, RSD contribution tracker, Serbia group payments"
        canonical="https://www.groupfund.app/locations/serbia"
      />
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">GroupFund for Serbia 🇷🇸</h1>
          <p className="page-subtitle">
            Organize group contributions in Serbia with GroupFund. Perfect for Serbian families, communities, schools, and groups. [web:641][web:647][web:653]
          </p>
        </div>
      </section>

      <section className="location-detail-page">
        <div className="container">
          <div className="location-content">
            <div className="location-section">
              <h2>Why GroupFund Works Great in Serbia</h2>
              <p>
                Serbia is a landlocked country in Southeast and Central Europe, located in the Balkans with Belgrade as its capital and largest city and around 6–7 million inhabitants. [web:641][web:647][web:650]
              </p>
              <p>
                With support for the Serbian dinar (RSD) and local banking habits, GroupFund matches how Serbian families and groups already manage shared expenses and celebrations. [web:636][web:638][web:640][web:649]
              </p>
            </div>

            <div className="location-section">
              <h2>Key Features for Serbia</h2>
              <div className="features-list">
                <div className="feature-item">
                  <h3>🇷🇸 Serbian Dinar (RSD) Support</h3>
                  <p>
                    Full support for the Serbian dinar (RSD), subdivided into 100 paras, so contribution amounts can be set in familiar note and coin denominations. [web:636][web:640][web:643]
                  </p>
                </div>
                <div className="feature-item">
                  <h3>🏦 Local Bank Transfers</h3>
                  <p>
                    Works with Serbian bank transfers and common payment flows; members pay as usual, then mark their contributions as completed in GroupFund. [web:638][web:646][web:652]
                  </p>
                </div>
                <div className="feature-item">
                  <h3>👨‍👩‍👧‍👦 Perfect for Serbian Families</h3>
                  <p>
                    Organize contributions for extended families in Belgrade, Novi Sad, Niš, Kragujevac, and smaller towns for slavas, birthdays, weddings, and other key events. [web:641][web:647][web:653]
                  </p>
                </div>
                <div className="feature-item">
                  <h3>🏘 Community & Association Groups</h3>
                  <p>
                    Ideal for local associations, village communities, and sports clubs coordinating shared funds and projects. [web:644][web:653]
                  </p>
                </div>
                <div className="feature-item">
                  <h3>🏫 Schools & Student Groups</h3>
                  <p>
                    Works well for schools, university groups, and student organisations managing collections for teachers, staff, and events.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>📱 Mobile-Friendly</h3>
                  <p>
                    Simple mobile experience so members can track and confirm contributions from their phones. [web:641][web:653]
                  </p>
                </div>
              </div>
            </div>

            <div className="location-section">
              <h2>Common Use Cases in Serbia</h2>
              <ul className="scenarios-list">
                <li>
                  <strong>Family Group Contributions:</strong> Organize support for slavas, weddings, birthdays, and other family events.
                </li>
                <li>
                  <strong>Community & Village Funds:</strong> Coordinate contributions for local projects, church repairs, and shared needs.
                </li>
                <li>
                  <strong>School & University Groups:</strong> Collect for teacher gifts, class trips, and student activities.
                </li>
                <li>
                  <strong>Sports & Hobby Clubs:</strong> Manage member contributions for equipment, tournaments, and events.
                </li>
                <li>
                  <strong>Workplace Groups:</strong> Run birthday, farewell, and emergency support pools in offices and factories.
                </li>
                <li>
                  <strong>Friend Groups:</strong> Keep friend circles organised for shared gifting, trips, and nights out.
                </li>
              </ul>
            </div>

            <div className="location-section">
              <h2>How It Works in Serbia</h2>
              <ol className="steps-list">
                <li>
                  <strong>Create Your Group:</strong> Set up a group with Serbian dinar (RSD) as the currency. [web:636][web:639][web:649]
                </li>
                <li>
                  <strong>Set Contribution Amounts:</strong> Choose RSD amounts per person that reflect your group’s budget.
                </li>
                <li>
                  <strong>Add Events & Members:</strong> Add key dates and invite members via chat apps or email.
                </li>
                <li>
                  <strong>Members Pay & Confirm:</strong> Members pay using their usual method (bank transfer, cash, etc.), then mark contributions as paid in GroupFund.
                </li>
                <li>
                  <strong>Automatic Reminders:</strong> Scheduled reminders reduce missed or late payments.
                </li>
                <li>
                  <strong>Track Everything Clearly:</strong> See who has paid, totals collected, and what is outstanding in one place.
                </li>
              </ol>
            </div>

            <div className="location-section">
              <h2>Why Serbian Groups Choose GroupFund</h2>
              <ul className="benefits-list">
                <li>Local currency support for Serbian dinar (RSD)</li>
                <li>Clear tracking of who has paid and who has not</li>
                <li>Works alongside existing bank and cash workflows</li>
                <li>Free to start with no hidden platform fees</li>
                <li>Useful for families, clubs, workplaces, and communities</li>
                <li>Transparent records that reduce misunderstandings</li>
                <li>Automatic reminders reduce manual follow‑ups</li>
                <li>Member reliability scores help organisers plan better</li>
              </ul>
            </div>

            <div className="cta-box">
              <h2>Ready to Organize Group Contributions in Serbia?</h2>
              <p>Join Serbian groups using GroupFund to make contributions organised and stress‑free.</p>
              <div className="cta-buttons">
                <Link to="/waitlist" className="btn btn-primary btn-large">
                  Start Your Serbia Group
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
