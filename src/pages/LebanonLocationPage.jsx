import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function LebanonLocationPage() {
  useEffect(() => {
    const localBusinessStructuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "GroupFund",
      "description": "Organize group contributions in Lebanon with GroupFund. Perfect for Lebanese families, communities, schools, and groups.",
      "url": "https://groupfund.app/locations/lebanon",
      "logo": "https://groupfund.app/logo.png",
      "areaServed": { "@type": "Country", "name": "Lebanon" },
      "serviceType": "Group Contribution Management",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "LBP" },
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
        title="GroupFund Lebanon - Group Contributions App for Lebanon"
        description="Organize group contributions in Lebanon with GroupFund. Perfect for Lebanese families, communities, schools, and groups. Support for LBP (Lebanese pound / lira). Free to start."
        keywords="group contributions Lebanon, Lebanon contribution app, groupfund Lebanon, group contributions app Lebanon, LBP contribution tracker, Lebanon group payments"
        canonical="https://www.groupfund.app/locations/lebanon"
      />
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">GroupFund for Lebanon 🇱🇧</h1>
          <p className="page-subtitle">
            Organize group contributions in Lebanon with GroupFund. Perfect for Lebanese families, communities, schools, and groups.
          </p>
        </div>
      </section>

      <section className="location-detail-page">
        <div className="container">
          <div className="location-content">
            <div className="location-section">
              <h2>Why GroupFund Works Great in Lebanon</h2>
              <p>
                Lebanon is a Levantine country on the eastern Mediterranean, bordered by Syria to the north and east and Israel to the south, with Beirut as its capital and largest city.
              </p>
              <p>
                With support for the Lebanese pound (LBP), also known as the lira, GroupFund can help Lebanese groups coordinate shared giving despite currency instability and economic pressure.
              </p>
            </div>

            <div className="location-section">
              <h2>Key Features for Lebanon</h2>
              <div className="features-list">
                <div className="feature-item">
                  <h3>🇱🇧 Lebanese Pound (LBP) Support</h3>
                  <p>
                    Full support for Lebanese pound / lira, so contribution amounts can be set in LBP using the format people see in everyday prices.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>🏦 Flexible Payment Workflows</h3>
                  <p>
                    Designed to work with Lebanon’s mix of cash, bank transfers, and dollar usage; members pay using whatever channel is available and then mark contributions as paid.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>👨‍👩‍👧‍👦 Perfect for Lebanese Families</h3>
                  <p>
                    Organize contributions for extended families in Beirut, Tripoli, Zahle, Saida, and abroad supporting relatives back home.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>🏘 Community & Support Groups</h3>
                  <p>
                    Ideal for neighbourhood, village, and diaspora groups managing ongoing support, medical funds, and community projects.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>🏫 Schools & Associations</h3>
                  <p>
                    Works well for schools, NGOs, and local associations coordinating contributions for teachers, staff, and students.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>📱 Mobile-Friendly</h3>
                  <p>
                    Simple mobile experience so members can join groups and update payments whenever they have connectivity.
                  </p>
                </div>
              </div>
            </div>

            <div className="location-section">
              <h2>Common Use Cases in Lebanon</h2>
              <ul className="scenarios-list">
                <li>
                  <strong>Family Group Contributions:</strong> Organize support for weddings, medical needs, funerals, and other key family events.
                </li>
                <li>
                  <strong>Community & Village Funds:</strong> Coordinate contributions for local infrastructure, repairs, and support projects.
                </li>
                <li>
                  <strong>School & Education Groups:</strong> Collect for teacher gifts, school improvements, and student assistance.
                </li>
                <li>
                  <strong>Charity & Relief Groups:</strong> Track contributions for local relief campaigns and NGO initiatives.
                </li>
                <li>
                  <strong>Workplace Groups:</strong> Run birthday, farewell, and emergency support pools at work.
                </li>
                <li>
                  <strong>Diaspora Support Groups:</strong> Help Lebanese abroad organise regular contributions to family and communities back home.
                </li>
              </ul>
            </div>

            <div className="location-section">
              <h2>How It Works in Lebanon</h2>
              <ol className="steps-list">
                <li>
                  <strong>Create Your Group:</strong> Set up a group with Lebanese pound (LBP) as the currency.
                </li>
                <li>
                  <strong>Set Contribution Amounts:</strong> Choose LBP amounts per person that reflect your group’s reality and budget.
                </li>
                <li>
                  <strong>Add Events & Members:</strong> Add important occasions and invite members via their usual messaging channels.
                </li>
                <li>
                  <strong>Members Pay & Confirm:</strong> Members pay via cash, transfer, or other available methods, then mark contributions as paid.
                </li>
                <li>
                  <strong>Automatic Reminders:</strong> Reminders go out before deadlines so fewer people forget or delay.
                </li>
                <li>
                  <strong>Track Everything Clearly:</strong> See who has paid, what is outstanding, and upcoming events in one place.
                </li>
              </ol>
            </div>

            <div className="location-section">
              <h2>Why Lebanese Groups Choose GroupFund</h2>
              <ul className="benefits-list">
                <li>Local currency support for Lebanese pound (LBP)</li>
                <li>Works with both cash and fragmented payment options</li>
                <li>Clear tracking of who has paid and who has not</li>
                <li>Free to start with no hidden platform fees</li>
                <li>Useful for families, NGOs, workplaces, and diaspora groups</li>
                <li>Transparent records that reduce money misunderstandings</li>
                <li>Automatic reminders reduce manual follow‑ups</li>
                <li>Member reliability scores help organizers plan better</li>
              </ul>
            </div>

            <div className="cta-box">
              <h2>Ready to Organize Group Contributions in Lebanon?</h2>
              <p>Join Lebanese groups using GroupFund to make contributions organized and stress‑free.</p>
              <div className="cta-buttons">
                <Link to="/waitlist" className="btn btn-primary btn-large">
                  Start Your Lebanon Group
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
