import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function UkraineLocationPage() {
  useEffect(() => {
    const localBusinessStructuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "GroupFund",
      "description": "Organize group contributions in Ukraine with GroupFund. Perfect for Ukrainian families, communities, schools, and groups.",
      "url": "https://groupfund.app/locations/ukraine",
      "logo": "https://groupfund.app/logo.png",
      "areaServed": { "@type": "Country", "name": "Ukraine" },
      "serviceType": "Group Contribution Management",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "UAH" },
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
        title="GroupFund Ukraine - Group Contributions App for Ukraine"
        description="Organize group contributions in Ukraine with GroupFund. Perfect for Ukrainian families, communities, schools, and groups. Support for UAH (Ukrainian hryvnia). Free to start."
        keywords="group contributions Ukraine, Ukraine contribution app, groupfund Ukraine, group contributions app Ukraine, UAH contribution tracker, Ukraine group payments"
        canonical="https://www.groupfund.app/locations/ukraine"
      />
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">GroupFund for Ukraine 🇺🇦</h1>
          <p className="page-subtitle">
            Organize group contributions in Ukraine with GroupFund. Perfect for Ukrainian families, communities, schools, and groups.
          </p>
        </div>
      </section>

      <section className="location-detail-page">
        <div className="container">
          <div className="location-content">
            <div className="location-section">
              <h2>Why GroupFund Works Great in Ukraine</h2>
              <p>
                Ukraine is a large Eastern European country with major cities like Kyiv, Kharkiv, Odesa, and Dnipro, where families and communities often organize shared support and gifts.
              </p>
              <p>
                With support for Ukrainian hryvnia (UAH) and local bank details, GroupFund is designed to work seamlessly for Ukrainian groups of all sizes.
              </p>
            </div>

            <div className="location-section">
              <h2>Key Features for Ukraine</h2>
              <div className="features-list">
                <div className="feature-item">
                  <h3>🇺🇦 Ukrainian Hryvnia (UAH) Support</h3>
                  <p>
                    Full support for Ukrainian hryvnia. Set contribution amounts in UAH so everyone contributes in the national currency.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>🏦 Local Bank Transfers</h3>
                  <p>
                    Works with local hryvnia transfers; members send money using their bank or preferred method and then mark payments as completed in GroupFund.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>👨‍👩‍👧‍👦 Perfect for Ukrainian Families</h3>
                  <p>
                    Organize contributions for extended Ukrainian families in Kyiv, regions across the country, or abroad supporting relatives at home.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>🏘 Community & Support Groups</h3>
                  <p>
                    Ideal for local communities and support groups coordinating help, relief, and shared funds during difficult times.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>🏫 Schools & Universities</h3>
                  <p>
                    Great for schools, universities, and student groups managing shared contributions for events, teachers, and staff.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>📱 Mobile-First</h3>
                  <p>
                    Mobile-friendly experience that fits Ukraine’s high internet and smartphone usage, including for people on the move.
                  </p>
                </div>
              </div>
            </div>

            <div className="location-section">
              <h2>Common Use Cases in Ukraine</h2>
              <ul className="scenarios-list">
                <li>
                  <strong>Family Group Contributions:</strong> Organize contributions for birthdays, weddings, name days, and other family events.
                </li>
                <li>
                  <strong>Community & Support Funds:</strong> Manage shared contributions for local initiatives and support needs.
                </li>
                <li>
                  <strong>School & University Groups:</strong> Collect contributions for teachers, staff, class events, and student activities.
                </li>
                <li>
                  <strong>Alumni Associations:</strong> Coordinate contributions among alumni from Ukrainian schools and universities.
                </li>
                <li>
                  <strong>Workplace Groups:</strong> Organize office birthday, farewell, and support funds in Ukrainian companies.
                </li>
                <li>
                  <strong>Friend Groups:</strong> Keep friend circles organized for shared gifting and celebrations.
                </li>
              </ul>
            </div>

            <div className="location-section">
              <h2>How It Works in Ukraine</h2>
              <ol className="steps-list">
                <li>
                  <strong>Create Your Group:</strong> Set up a group with Ukrainian hryvnia (UAH) as the currency.
                </li>
                <li>
                  <strong>Set Contribution Amounts:</strong> Choose UAH amounts per person that fit your group.
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
              <h2>Why Ukrainian Groups Choose GroupFund</h2>
              <ul className="benefits-list">
                <li>Support for Ukrainian hryvnia (UAH)</li>
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
              <h2>Ready to Organize Group Contributions in Ukraine?</h2>
              <p>Join Ukrainian groups using GroupFund to make contributions organized and stress-free.</p>
              <div className="cta-buttons">
                <Link to="/waitlist" className="btn btn-primary btn-large">
                  Start Your Ukraine Group
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
