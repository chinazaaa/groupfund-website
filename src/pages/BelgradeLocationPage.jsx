import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function BelgradeLocationPage() {
  useEffect(() => {
    const localBusinessStructuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "GroupFund",
      "description": "Organize group contributions in Belgrade, Serbia with GroupFund. Perfect for Belgrade families, communities, schools, and groups.",
      "url": "https://groupfund.app/locations/belgrade",
      "logo": "https://groupfund.app/logo.png",
      "areaServed": [
        { "@type": "City", "name": "Belgrade" },
        { "@type": "Country", "name": "Serbia" }
      ],
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
        title="GroupFund Belgrade - Group Contributions App for Belgrade, Serbia"
        description="Organize group contributions in Belgrade, Serbia with GroupFund. Perfect for Belgrade families, communities, schools, and groups. Support for RSD. Free to start."
        keywords="group contributions Belgrade, Belgrade contribution app, groupfund Belgrade, group contributions app Belgrade Serbia, Belgrade group payments, RSD contribution tracker Belgrade"
        canonical="https://www.groupfund.app/locations/belgrade"
      />
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">GroupFund for Belgrade, Serbia 🇷🇸</h1>
          <p className="page-subtitle">
            Organize group contributions in Belgrade with GroupFund. Perfect for Belgrade families, communities, schools, and groups.
          </p>
        </div>
      </section>

      <section className="location-detail-page">
        <div className="container">
          <div className="location-content">
            <div className="location-section">
              <h2>Why GroupFund Works Great in Belgrade</h2>
              <p>
                Belgrade, or Beograd, is the capital and largest city of Serbia, set at the confluence of the Sava and Danube rivers and acting as a key crossroads between Central and Southeastern Europe.
              </p>
              <p>
                One of Europe’s oldest continuously inhabited cities, Belgrade has a long, turbulent history and today is Serbia’s political, economic, and cultural centre, known for its lively nightlife and riverfront social life.
              </p>
            </div>

            <div className="location-section">
              <h2>Currency Support for RSD</h2>
              <div className="features-list">
                <div className="feature-item">
                  <h3>💰 Serbian Dinar (RSD)</h3>
                  <p>
                    GroupFund supports the Serbian dinar (RSD), Serbia’s official currency, subdivided into 100 paras, with banknotes and coins issued by the National Bank of Serbia.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>📈 Local Value Tracking</h3>
                  <p>
                    Contribution amounts are tracked directly in RSD while external FX tools and banks handle conversions for anyone sending money from abroad.
                  </p>
                </div>
              </div>
            </div>

            <div className="location-section">
              <h2>Perfect for Belgrade Groups</h2>
              <div className="features-list">
                <div className="feature-item">
                  <h3>🏙️ Belgrade Families</h3>
                  <p>Organize contributions for weddings, slava celebrations, funerals, and monthly family support across the city’s municipalities.</p>
                </div>
                <div className="feature-item">
                  <h3>⛪ Churches & Communities</h3>
                  <p>Coordinate shared funds for Orthodox parishes, other churches, and local community associations.</p>
                </div>
                <div className="feature-item">
                  <h3>🏢 Workplaces & Offices</h3>
                  <p>Run birthday, farewell, and emergency support pots for colleagues in Belgrade’s companies, startups, and institutions.</p>
                </div>
                <div className="feature-item">
                  <h3>🏫 Schools & Student Groups</h3>
                  <p>Track contributions for excursions, projects, and student events across universities and schools.</p>
                </div>
                <div className="feature-item">
                  <h3>📱 Mobile‑First City</h3>
                  <p>Fits Belgrade’s young, connected population that organises everything from nights out on the splavs to community initiatives via mobile.</p>
                </div>
              </div>
            </div>

            <div className="location-section">
              <h2>How Belgrade Groups Use GroupFund</h2>
              <ul className="scenarios-list">
                <li>
                  <strong>Family Support Funds:</strong> Regular RSD contributions for parents, relatives, or shared household costs.
                </li>
                <li>
                  <strong>Slava & Holiday Pots:</strong> Shared funds for traditional celebrations, Christmas, and New Year events.
                </li>
                <li>
                  <strong>Office & Team Pots:</strong> Contributions for colleagues’ birthdays, weddings, and emergencies.
                </li>
                <li>
                  <strong>Student & Youth Groups:</strong> Collections for trips, festivals, and campus activities.
                </li>
                <li>
                  <strong>Friend Groups:</strong> Pooled money for nights out, concerts, and getaways along the Danube and Sava.
                </li>
              </ul>
            </div>

            <div className="cta-box">
              <h2>Ready to Organize Group Contributions in Belgrade?</h2>
              <p>Join Belgrade groups using GroupFund to keep contributions transparent, fair, and organised.</p>
              <div className="cta-buttons">
                <Link to="/waitlist" className="btn btn-primary btn-large">Start Your Belgrade Group</Link>
                <Link to="/how-it-works" className="btn btn-secondary btn-large">See How It Works</Link>
              </div>
            </div>

            <div className="related-links">
              <h3>Explore More</h3>
              <div className="related-links-grid">
                <Link to="/locations/serbia">Serbia →</Link>
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
