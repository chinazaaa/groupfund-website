import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function SwedenLocationPage() {
  useEffect(() => {
    const localBusinessStructuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "GroupFund",
      "description": "Organize group contributions in Sweden with GroupFund. Perfect for Swedish families, communities, schools, and groups.",
      "url": "https://www.groupfund.app/locations/sweden",
      "logo": "https://www.groupfund.app/logo.png",
      "areaServed": { "@type": "Country", "name": "Sweden" },
      "serviceType": "Group Contribution Management",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "SEK" },
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
        title="GroupFund Sweden - Group Contributions App for Sweden"
        description="Organize group contributions in Sweden with GroupFund. Perfect for Swedish families, communities, schools, and groups. Support for SEK (Swedish krona). Free to start."
        keywords="group contributions Sweden, Sweden contribution app, groupfund Sweden, group contributions app Sweden, SEK contribution tracker, Sweden group payments"
        canonical="https://www.groupfund.app/locations/sweden"
      />
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">GroupFund for Sweden 🇸🇪</h1>
          <p className="page-subtitle">
            Organize group contributions in Sweden with GroupFund. Perfect for Swedish families, communities, schools, and groups.
          </p>
        </div>
      </section>

      <section className="location-detail-page">
        <div className="container">
          <div className="location-content">
            <div className="location-section">
              <h2>Why GroupFund Works Great in Sweden</h2>
              <p>
                Sweden is a Nordic country in Northern Europe with major cities like Stockholm, Gothenburg, and Malmö, and a high standard of living and strong social ties.
              </p>
              <p>
                With support for Swedish krona (SEK) and local bank details, GroupFund is designed to work seamlessly for Swedish groups of all sizes.
              </p>
            </div>

            <div className="location-section">
              <h2>Key Features for Sweden</h2>
              <div className="features-list">
                <div className="feature-item">
                  <h3>🇸🇪 Swedish Krona (SEK) Support</h3>
                  <p>
                    Full support for Swedish krona. Set contribution amounts in SEK so everyone contributes in the local currency.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>🏦 Local Bank & Swish Payments</h3>
                  <p>
                    Works with Swedish bank transfers and common payment options; members send money and then mark payments as completed in GroupFund.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>👨‍👩‍👧‍👦 Perfect for Swedish Families</h3>
                  <p>
                    Organize contributions for extended Swedish families for birthdays, weddings, name days, and other occasions.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>🏘 Community & Association Groups</h3>
                  <p>
                    Ideal for local community, sports, and hobby associations coordinating shared support and group gifts.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>🏫 Schools & Universities</h3>
                  <p>
                    Great for schools, universities, and student unions managing shared contributions for events and staff.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>📱 Mobile-First</h3>
                  <p>
                    Mobile-friendly experience that fits Sweden’s high internet and smartphone usage.
                  </p>
                </div>
              
                <div className="feature-item">
                  <h3>💬 Integrated Group Chat</h3>
                  <p>Coordinate contributions with optional per-group chat. Mention members with @username, share account details, and confirm payments - all in one place. Perfect for local groups.</p>
                </div>
</div>
            </div>

            <div className="location-section">
              <h2>Common Use Cases in Sweden</h2>
              <ul className="scenarios-list">
                <li>
                  <strong>Family Group Contributions:</strong> Organize contributions for birthdays, weddings, and family celebrations.
                </li>
                <li>
                  <strong>Community & Association Funds:</strong> Manage shared contributions for local initiatives and support needs.
                </li>
                <li>
                  <strong>School & University Groups:</strong> Collect contributions for teachers, staff, and student activities.
                </li>
                <li>
                  <strong>Alumni Associations:</strong> Coordinate contributions among alumni from Swedish schools and universities.
                </li>
                <li>
                  <strong>Workplace Groups:</strong> Organize office birthday, farewell, and support funds in Swedish companies.
                </li>
                <li>
                  <strong>Friend Groups:</strong> Keep friend circles organized for shared gifting and celebrations.
                </li>
              </ul>
            </div>

            <div className="location-section">
              <h2>How It Works in Sweden</h2>
              <ol className="steps-list">
                <li>
                  <strong>Create Your Group:</strong> Set up a group with Swedish krona (SEK) as the currency.
                </li>
                <li>
                  <strong>Set Contribution Amounts:</strong> Choose SEK amounts per person that fit your group.
                </li>
                <li>
                  <strong>Add Member Birthdays or Events:</strong> Add all key dates and events to the calendar.
                </li>
                <li>
                  <strong>Track Contributions:</strong> Members mark contributions as paid after sending via their preferred transfer method.
                </li>
                <li>
                  <strong>Automatic Reminders:</strong> GroupFund sends reminders before deadlines so fewer people forget to contribute.
                </li>
                <li>
                  <strong>Focus on the Celebration:</strong> Spend more time enjoying the event and less time chasing payments.
                </li>
              </ol>
            </div>

            <div className="location-section">
              <h2>Why Swedish Groups Choose GroupFund</h2>
              <ul className="benefits-list">
                <li>Support for Swedish krona (SEK)</li>
                <li>Clear tracking of who has paid and who has not</li>
                <li>Mobile-first design for busy members</li>
                <li>Free to use with no hidden fees</li>
                <li>Works for small and large groups</li>
                <li>Transparent records that build trust</li>
                <li>Automatic reminders reduce manual follow-ups</li>
                <li>Member reliability scores help organizers plan better</li>
              </ul>
            </div>

            <div className="cta-box">
              <h2>Ready to Organize Group Contributions in Sweden?</h2>
              <p>Join Swedish groups using GroupFund to make contributions organized and stress-free.</p>
              <div className="cta-buttons">
                <Link to="/get-started" className="btn btn-primary btn-large">
                  Start Your Sweden Group
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
