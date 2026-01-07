import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'


export default function YemenLocationPage() {
  useEffect(() => {
    const localBusinessStructuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "GroupFund",
      "description": "Organize group contributions in Yemen with GroupFund. Perfect for Yemeni families, communities, schools, and groups.",
      "url": "https://groupfund.app/locations/yemen",
      "logo": "https://groupfund.app/logo.png",
      "areaServed": { "@type": "Country", "name": "Yemen" },
      "serviceType": "Group Contribution Management",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "YER" },
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
        title="GroupFund Yemen - Group Contributions App for Yemen"
        description="Organize group contributions in Yemen with GroupFund. Perfect for Yemeni families, communities, schools, and groups. Support for YER (Yemeni rial). Free to start."
        keywords="group contributions Yemen, Yemen contribution app, groupfund Yemen, group contributions app Yemen, YER contribution tracker, Yemen group payments"
        canonical="https://www.groupfund.app/locations/yemen"
      />
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">GroupFund for Yemen 🇾🇪</h1>
          <p className="page-subtitle">
            Organize group contributions in Yemen with GroupFund. Perfect for Yemeni families, communities, schools, and groups.
          </p>
        </div>
      </section>


      <section className="location-detail-page">
        <div className="container">
          <div className="location-content">
            <div className="location-section">
              <h2>Why GroupFund Works Great in Yemen</h2>
              <p>
                Yemen is a country on the southern end of the Arabian Peninsula with a largely mountainous interior, long coastline, and close‑knit communities that often support each other through shared contributions.
              </p>
              <p>
                With support for Yemeni rial (YER) and local payment details, GroupFund is designed to help Yemeni groups keep contributions organized and transparent despite challenging conditions.
              </p>
            </div>


            <div className="location-section">
              <h2>Key Features for Yemen</h2>
              <div className="features-list">
                <div className="feature-item">
                  <h3>🇾🇪 Yemeni Rial (YER) Support</h3>
                  <p>
                    Full support for Yemeni rial. Set contribution amounts in YER so everyone contributes in the local currency.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>🏦 Local Transfers & Cash</h3>
                  <p>
                    Works with local transfer options and cash‑based workflows; members send money using their usual method and then mark contributions as paid in GroupFund.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>👨‍👩‍👧‍👦 Perfect for Yemeni Families</h3>
                  <p>
                    Organize contributions for extended Yemeni families in cities like Sana’a and Aden or across different governorates.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>🏘 Community & Support Groups</h3>
                  <p>
                    Ideal for village committees, local initiatives, and community groups coordinating shared funds for important needs.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>🏫 Schools & Local Organizations</h3>
                  <p>
                    Works well for schools and local organizations managing group contributions for teachers, staff, and students.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>📱 Mobile-Friendly</h3>
                  <p>
                    Simple mobile experience so members can join groups and update payments from their phones whenever they have access.
                  </p>
                </div>
              </div>
            </div>


            <div className="location-section">
              <h2>Common Use Cases in Yemen</h2>
              <ul className="scenarios-list">
                <li>
                  <strong>Family Group Contributions:</strong> Organize support for weddings, medical needs, and other family events.
                </li>
                <li>
                  <strong>Community Support Funds:</strong> Coordinate contributions for local community projects and emergency needs.
                </li>
                <li>
                  <strong>School & Education Groups:</strong> Collect contributions for teachers, school expenses, and student activities.
                </li>
                <li>
                  <strong>Charity & Relief Groups:</strong> Track contributions for local relief and charity efforts.
                </li>
                <li>
                  <strong>Workplace Groups:</strong> Organize office birthday and support funds where companies and teams operate.
                </li>
                <li>
                  <strong>Friend Groups:</strong> Keep friend circles organized for shared gifting and celebrations.
                </li>
              </ul>
            </div>


            <div className="location-section">
              <h2>How It Works in Yemen</h2>
              <ol className="steps-list">
                <li>
                  <strong>Create Your Group:</strong> Set up a group with Yemeni rial (YER) as the currency.
                </li>
                <li>
                  <strong>Set Contribution Amounts:</strong> Choose YER amounts per person that fit your group’s situation.
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
              <h2>Why Yemeni Groups Choose GroupFund</h2>
              <ul className="benefits-list">
                <li>Support for Yemeni rial (YER)</li>
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
              <h2>Ready to Organize Group Contributions in Yemen?</h2>
              <p>Join Yemeni groups using GroupFund to make contributions organized and stress-free.</p>
              <div className="cta-buttons">
                <Link to="/get-started" className="btn btn-primary btn-large">
                  Start Your Yemen Group
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
