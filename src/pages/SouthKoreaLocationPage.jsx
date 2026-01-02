import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function SouthKoreaLocationPage() {
  useEffect(() => {
    const localBusinessStructuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "GroupFund",
      "description": "Organize group contributions in South Korea with GroupFund. Perfect for Korean families, churches, schools, and groups.",
      "url": "https://groupfund.app/locations/south-korea",
      "logo": "https://groupfund.app/logo.png",
      "areaServed": { "@type": "Country", "name": "South Korea" },
      "serviceType": "Group Contribution Management",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "KRW" },
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
        title="GroupFund South Korea - Group Contributions App for South Korea"
        description="Organize group contributions in South Korea with GroupFund. Perfect for Korean families, churches, schools, and groups. Support for KRW (South Korean won). Free to start."
        keywords="group contributions South Korea, South Korea contribution app, groupfund South Korea, group contributions app South Korea, KRW contribution tracker, South Korea group payments"
        canonical="https://www.groupfund.app/locations/south-korea"
      />
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">GroupFund for South Korea 🇰🇷</h1>
          <p className="page-subtitle">
            Organize group contributions in South Korea with GroupFund. Perfect for Korean families, churches, schools, and groups.
          </p>
        </div>
      </section>
      <section className="location-detail-page">
        <div className="container">
          <div className="location-content">
            <div className="location-section">
              <h2>Why GroupFund Works Great in South Korea</h2>
              <p>
                South Korea is a highly connected, urban country in East Asia with major cities like Seoul, Busan, Daegu, and Incheon where group gifting and collections are part of social and work culture.
              </p>
              <p>
                With support for South Korean won (KRW) and local bank details, GroupFund is designed to work seamlessly for Korean groups of all sizes.
              </p>
            </div>

            <div className="location-section">
              <h2>Key Features for South Korea</h2>
              <div className="features-list">
                <div className="feature-item">
                  <h3>🇰🇷 South Korean Won (KRW) Support</h3>
                  <p>
                    Full support for South Korean won. Set contribution amounts in KRW so everyone contributes in the local currency.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>🏦 Local Bank Transfers</h3>
                  <p>
                    Works with Korean bank transfers; members send money using their bank and then mark payments as completed in GroupFund.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>👨‍👩‍👧‍👦 Perfect for Korean Families</h3>
                  <p>
                    Organize contributions for extended Korean families for birthdays, holidays, weddings, and other key occasions.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>⛪ Church & Small Groups</h3>
                  <p>
                    Ideal for church groups and small groups coordinating regular support, offerings, and special collections.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>🏫 Schools & Universities</h3>
                  <p>
                    Great for schools, academies, and university clubs managing shared contributions for events and staff.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>📱 Mobile-First</h3>
                  <p>
                    Mobile-friendly experience that fits South Korea’s fast, digital lifestyle and high smartphone usage.
                  </p>
                </div>
              </div>
            </div>

            <div className="location-section">
              <h2>Common Use Cases in South Korea</h2>
              <ul className="scenarios-list">
                <li>
                  <strong>Family Group Contributions:</strong> Organize contributions for birthdays, holidays, and family events.
                </li>
                <li>
                  <strong>Church & Cell Groups:</strong> Manage group contributions for members and shared support funds.
                </li>
                <li>
                  <strong>School & Hagwon Groups:</strong> Collect contributions for teachers, staff, and student activities.
                </li>
                <li>
                  <strong>Alumni Associations:</strong> Coordinate contributions among alumni from universities and schools.
                </li>
                <li>
                  <strong>Workplace Groups:</strong> Organize office birthday, farewell, and support funds in Korean companies.
                </li>
                <li>
                  <strong>Friend Groups:</strong> Keep friend circles organized for shared gifting and celebrations.
                </li>
              </ul>
            </div>

            <div className="location-section">
              <h2>How It Works in South Korea</h2>
              <ol className="steps-list">
                <li>
                  <strong>Create Your Group:</strong> Set up a group with South Korean won (KRW) as the currency.
                </li>
                <li>
                  <strong>Set Contribution Amounts:</strong> Choose KRW amounts per person that fit your group.
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
              <h2>Why Korean Groups Choose GroupFund</h2>
              <ul className="benefits-list">
                <li>Support for South Korean won (KRW)</li>
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
              <h2>Ready to Organize Group Contributions in South Korea?</h2>
              <p>Join Korean groups using GroupFund to make contributions organized and stress-free.</p>
              <div className="cta-buttons">
                <Link to="/waitlist" className="btn btn-primary btn-large">
                  Start Your South Korea Group
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
