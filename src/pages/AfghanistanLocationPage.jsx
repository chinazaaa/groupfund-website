import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function AfghanistanLocationPage() {
  useEffect(() => {
    const localBusinessStructuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "GroupFund",
      "description": "Organize group contributions in Afghanistan with GroupFund. Perfect for Afghan families, communities, schools, and groups.",
      "url": "https://www.groupfund.app/locations/afghanistan",
      "logo": "https://www.groupfund.app/logo.png",
      "areaServed": { "@type": "Country", "name": "Afghanistan" },
      "serviceType": "Group Contribution Management",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "AFN" },
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
        title="GroupFund Afghanistan - Group Contributions App for Afghanistan"
        description="Organize group contributions in Afghanistan with GroupFund. Perfect for Afghan families, communities, schools, and groups. Support for AFN (Afghan Afghani). Free to start."
        keywords="group contributions Afghanistan, Afghanistan contribution app, groupfund Afghanistan, group contributions app Afghanistan, AFN contribution tracker, Afghanistan group payments"
        canonical="https://www.groupfund.app/locations/afghanistan"
      />
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">GroupFund for Afghanistan 🇦🇫</h1>
          <p className="page-subtitle">
            Organize group contributions in Afghanistan with GroupFund. Perfect for Afghan families, communities, schools, and groups.
          </p>
        </div>
      </section>
      <section className="location-detail-page">
        <div className="container">
          <div className="location-content">
            <div className="location-section">
              <h2>Why GroupFund Works Great in Afghanistan</h2>
              <p>
                Afghanistan is a landlocked country at the crossroads of Central and South Asia, with many close‑knit families and communities that rely on shared support.
              </p>
              <p>
                With support for the Afghan Afghani (AFN) and local bank details, GroupFund is designed to help Afghan groups keep contributions transparent and organized.
              </p>
            </div>

            <div className="location-section">
              <h2>Key Features for Afghanistan</h2>
              <div className="features-list">
                <div className="feature-item">
                  <h3>🇦🇫 Afghan Afghani (AFN) Support</h3>
                  <p>
                    Full support for Afghan Afghani. Set contribution amounts in AFN so everyone contributes in the local currency.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>🏦 Local Bank Transfers</h3>
                  <p>
                    Members can send contributions using local transfer options and then mark payments as completed inside GroupFund.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>👨‍👩‍👧‍👦 Perfect for Afghan Families</h3>
                  <p>
                    Organize contributions for extended Afghan families, whether they live in the same city or across different provinces.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>🏘 Community & Village Groups</h3>
                  <p>
                    Ideal for local community groups organizing shared support for weddings, emergencies, and other important events.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>🏫 Schools & Universities</h3>
                  <p>
                    Works well for schools, universities, and student groups managing group contributions for staff and students.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>📱 Mobile-First</h3>
                  <p>
                    Mobile-friendly experience so members can join, track, and confirm contributions from their phones.
                  </p>
                </div>
              
                <div className="feature-item">
                  <h3>💬 Integrated Group Chat</h3>
                  <p>Coordinate contributions with optional per-group chat. Mention members with @username, share account details, and confirm payments - all in one place. Perfect for local groups.</p>
                </div>
</div>
            </div>

            <div className="location-section">
              <h2>Common Use Cases in Afghanistan</h2>
              <ul className="scenarios-list">
                <li>
                  <strong>Family Group Contributions:</strong> Organize support for family events, weddings, and important life moments.
                </li>
                <li>
                  <strong>Community Support Funds:</strong> Manage shared contributions for local community or village initiatives.
                </li>
                <li>
                  <strong>School Groups:</strong> Collect contributions for teachers, staff, and student activities.
                </li>
                <li>
                  <strong>Alumni Associations:</strong> Coordinate contributions among alumni groups and networks.
                </li>
                <li>
                  <strong>Workplace Groups:</strong> Organize office birthday or support funds within Afghan organizations.
                </li>
                <li>
                  <strong>Friend Groups:</strong> Keep friend circles organized for shared gifting and celebrations.
                </li>
              </ul>
            </div>

            <div className="location-section">
              <h2>How It Works in Afghanistan</h2>
              <ol className="steps-list">
                <li>
                  <strong>Create Your Group:</strong> Set up a group with Afghan Afghani (AFN) as the currency.
                </li>
                <li>
                  <strong>Set Contribution Amounts:</strong> Choose AFN amounts per person that fit your group.
                </li>
                <li>
                  <strong>Add Member Birthdays or Events:</strong> Add all important dates and events to your group calendar.
                </li>
                <li>
                  <strong>Track Contributions:</strong> Members mark contributions as paid after sending via their preferred transfer method.
                </li>
                <li>
                  <strong>Automatic Reminders:</strong> GroupFund sends reminders before deadlines so no one forgets to contribute.
                </li>
                <li>
                  <strong>Focus on the Occasion:</strong> Spend more time celebrating and less time chasing payments.
                </li>
              </ol>
            </div>

            <div className="location-section">
              <h2>Why Afghan Groups Choose GroupFund</h2>
              <ul className="benefits-list">
                <li>Support for Afghan Afghani (AFN)</li>
                <li>Simple tracking of who has paid and who has not</li>
                <li>Mobile-first experience for all members</li>
                <li>Free to use with no hidden fees</li>
                <li>Works for small and large groups</li>
                <li>Transparent records that build trust</li>
                <li>Automatic reminders reduce manual follow-ups</li>
                <li>Member reliability scores help organizers plan better</li>
              </ul>
            </div>

            <div className="cta-box">
              <h2>Ready to Organize Group Contributions in Afghanistan?</h2>
              <p>Join Afghan groups using GroupFund to make contributions organized and stress-free.</p>
              <div className="cta-buttons">
                <Link to="/get-started" className="btn btn-primary btn-large">
                  Start Your Afghanistan Group
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
