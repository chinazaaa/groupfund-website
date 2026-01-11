import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function UgandaLocationPage() {
  useEffect(() => {
    const localBusinessStructuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "GroupFund",
      "description": "Organize group contributions in Uganda with GroupFund. Perfect for Ugandan families, churches, schools, and groups.",
      "url": "https://www.groupfund.app/locations/uganda",
      "logo": "https://www.groupfund.app/logo.png",
      "areaServed": { "@type": "Country", "name": "Uganda" },
      "serviceType": "Group Contribution Management",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "UGX" },
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
        title="GroupFund Uganda - Group Contributions App for Uganda"
        description="Organize group contributions in Uganda with GroupFund. Perfect for Ugandan families, churches, schools, and groups. Support for UGX (Ugandan Shilling). Free to start."
        keywords="group contributions Uganda, Uganda contribution app, groupfund Uganda, group contributions app Uganda, UGX contribution tracker, Uganda group payments"
        canonical="https://www.groupfund.app/locations/uganda"
      />
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">GroupFund for Uganda 🇺🇬</h1>
          <p className="page-subtitle">
            Organize group contributions in Uganda with GroupFund. Perfect for Ugandan families, churches, schools, and groups.
          </p>
        </div>
      </section>

      <section className="location-detail-page">
        <div className="container">
          <div className="location-content">
            <div className="location-section">
              <h2>Why GroupFund Works Great in Uganda</h2>
              <p>
                Uganda is a landlocked country in East Africa with many close‑knit families and communities that support each other through group giving.
              </p>
              <p>
                With support for Ugandan Shilling (UGX) and local bank details, GroupFund is designed to help Ugandan groups keep contributions transparent and organized.
              </p>
            </div>

            <div className="location-section">
              <h2>Key Features for Uganda</h2>
              <div className="features-list">
                <div className="feature-item">
                  <h3>🇺🇬 Ugandan Shilling (UGX) Support</h3>
                  <p>
                    Full support for Ugandan Shilling. Set contribution amounts in UGX so everyone contributes in the local currency.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>🏦 Local Bank Transfers</h3>
                  <p>
                    Members can send contributions using local transfer options or mobile money and then mark payments as completed inside GroupFund.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>👨‍👩‍👧‍👦 Perfect for Ugandan Families</h3>
                  <p>
                    Organize contributions for extended Ugandan families, whether they are in Kampala or upcountry districts.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>🏘 Community & Church Groups</h3>
                  <p>
                    Ideal for church communities and local groups organizing support for weddings, introductions, funerals, and other important events.
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
                    Mobile-friendly experience so members can join, track, and confirm contributions from their phones anywhere in Uganda.
                  </p>
                </div>
              </div>
            </div>

            <div className="location-section">
              <h2>Common Use Cases in Uganda</h2>
              <ul className="scenarios-list">
                <li>
                  <strong>Family Group Contributions:</strong> Organize support for birthdays, weddings, introductions, and other family events.
                </li>
                <li>
                  <strong>Church & Fellowship Groups:</strong> Manage group contributions for church members and fellowships.
                </li>
                <li>
                  <strong>Community Support Funds:</strong> Run contribution groups for community projects and emergencies.
                </li>
                <li>
                  <strong>School Groups:</strong> Collect contributions for teachers, staff, and student activities.
                </li>
                <li>
                  <strong>Workplace Groups:</strong> Organize office birthday and support funds in Ugandan companies and organizations.
                </li>
                <li>
                  <strong>Friend Groups:</strong> Keep friend circles organized for shared gifting and celebrations.
                </li>
              </ul>
            </div>

            <div className="location-section">
              <h2>How It Works in Uganda</h2>
              <ol className="steps-list">
                <li>
                  <strong>Create Your Group:</strong> Set up a group with Ugandan Shilling (UGX) as the currency.
                </li>
                <li>
                  <strong>Set Contribution Amounts:</strong> Choose UGX amounts per person that fit your group.
                </li>
                <li>
                  <strong>Add Member Birthdays or Events:</strong> Add all important dates and events to your group calendar.
                </li>
                <li>
                  <strong>Track Contributions:</strong> Members mark contributions as paid after sending via bank transfer or mobile money.
                </li>
                <li>
                  <strong>Automatic Reminders:</strong> GroupFund sends reminders before deadlines so fewer people forget to contribute.
                </li>
                <li>
                  <strong>Focus on the Occasion:</strong> Spend more time celebrating and less time chasing payments.
                </li>
              </ol>
            </div>

            <div className="location-section">
              <h2>Why Ugandan Groups Choose GroupFund</h2>
              <ul className="benefits-list">
                <li>Support for Ugandan Shilling (UGX)</li>
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
              <h2>Ready to Organize Group Contributions in Uganda?</h2>
              <p>Join Ugandan groups using GroupFund to make contributions organized and stress-free.</p>
              <div className="cta-buttons">
                <Link to="/get-started" className="btn btn-primary btn-large">
                  Start Your Uganda Group
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
