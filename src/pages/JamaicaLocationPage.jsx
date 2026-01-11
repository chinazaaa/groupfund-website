import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function JamaicaLocationPage() {
  useEffect(() => {
    const localBusinessStructuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "GroupFund",
      "description": "Organize group contributions in Jamaica with GroupFund. Perfect for Jamaican families, communities, schools, and groups.",
      "url": "https://www.groupfund.app/locations/jamaica",
      "logo": "https://www.groupfund.app/logo.png",
      "areaServed": { "@type": "Country", "name": "Jamaica" },
      "serviceType": "Group Contribution Management",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "JMD" },
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
        title="GroupFund Jamaica - Group Contributions App for Jamaica"
        description="Organize group contributions in Jamaica with GroupFund. Perfect for Jamaican families, communities, schools, and groups. Support for JMD (Jamaican dollar). Free to start."
        keywords="group contributions Jamaica, Jamaica contribution app, groupfund Jamaica, group contributions app Jamaica, JMD contribution tracker, Jamaica group payments"
        canonical="https://www.groupfund.app/locations/jamaica"
      />
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">GroupFund for Jamaica 🇯🇲</h1>
          <p className="page-subtitle">
            Organize group contributions in Jamaica with GroupFund. Perfect for Jamaican families, communities, schools, and groups.
          </p>
        </div>
      </section>

      <section className="location-detail-page">
        <div className="container">
          <div className="location-content">
            <div className="location-section">
              <h2>Why GroupFund Works Great in Jamaica</h2>
              <p>
                Jamaica is an island country in the Caribbean and the third-largest island in the region, with Kingston as its capital and main commercial center.
              </p>
              <p>
                With support for the Jamaican dollar (JMD) and local payment habits, GroupFund is designed to work smoothly for Jamaican groups who regularly chip in for family, church, and community needs.
              </p>
            </div>

            <div className="location-section">
              <h2>Key Features for Jamaica</h2>
              <div className="features-list">
                <div className="feature-item">
                  <h3>🇯🇲 Jamaican Dollar (JMD) Support</h3>
                  <p>
                    Full support for Jamaican dollars, so contribution amounts are set in JMD and match how Jamaicans usually see prices and salaries.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>🏦 Local Cash & Digital Payments</h3>
                  <p>
                    Fits Jamaica’s mix of cash use and digital payments; members can pay by cash, bank transfer, or card, then mark contributions as paid in GroupFund.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>👨‍👩‍👧‍👦 Perfect for Jamaican Families</h3>
                  <p>
                    Organize contributions for extended families across Kingston, Montego Bay, Spanish Town and other parishes for birthdays, funerals, weddings, and more.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>⛪ Church & Community Groups</h3>
                  <p>
                    Ideal for churches, community clubs, and partner groups (pardner) that manage regular collections and support funds.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>🏫 Schools & Alumni</h3>
                  <p>
                    Great for schools and alumni groups coordinating collections for teachers, students, and events.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>📱 Mobile-First</h3>
                  <p>
                    Mobile-friendly experience that works well with Jamaica’s growing smartphone and internet usage.
                  </p>
                </div>
              </div>
            </div>

            <div className="location-section">
              <h2>Common Use Cases in Jamaica</h2>
              <ul className="scenarios-list">
                <li>
                  <strong>Family Group Contributions:</strong> Organize support for birthdays, funerals, weddings, baby showers, and more.
                </li>
                <li>
                  <strong>Church & Ministry Funds:</strong> Manage regular offerings, special events, and member support funds.
                </li>
                <li>
                  <strong>Community & Youth Clubs:</strong> Track contributions for local sports, youth, and neighborhood projects.
                </li>
                <li>
                  <strong>School & Alumni Groups:</strong> Collect for teacher gifts, school improvements, and student support.
                </li>
                <li>
                  <strong>Workplace Groups:</strong> Run birthday, farewell, and emergency support pools at work.
                </li>
                <li>
                  <strong>Friend & Pardner Groups:</strong> Keep informal saving and gifting groups transparent and organized.
                </li>
              </ul>
            </div>

            <div className="location-section">
              <h2>How It Works in Jamaica</h2>
              <ol className="steps-list">
                <li>
                  <strong>Create Your Group:</strong> Set up a group with Jamaican dollar (JMD) as the currency.
                </li>
                <li>
                  <strong>Set Contribution Amounts:</strong> Choose JMD amounts per person that match your group’s budget.
                </li>
                <li>
                  <strong>Add Events & Members:</strong> Add members and key events like birthdays or fund deadlines.
                </li>
                <li>
                  <strong>Members Pay & Confirm:</strong> Members pay using their usual method, then mark payments as done in GroupFund.
                </li>
                <li>
                  <strong>Automatic Reminders:</strong> Everyone gets reminders before due dates so fewer people forget.
                </li>
                <li>
                  <strong>View Clear Records:</strong> See at a glance who has paid, what is outstanding, and which events are next.
                </li>
              </ol>
            </div>

            <div className="location-section">
              <h2>Why Jamaican Groups Choose GroupFund</h2>
              <ul className="benefits-list">
                <li>Local currency support for Jamaican dollar (JMD)</li>
                <li>Simple tracking of who has paid and who has not</li>
                <li>Works with both cash and digital payment habits</li>
                <li>Free to start with no hidden platform fees</li>
                <li>Useful for families, churches, workplaces, and clubs</li>
                <li>Transparent records that reduce money misunderstandings</li>
                <li>Automatic reminders reduce manual follow‑ups</li>
                <li>Member reliability scores help organizers plan better</li>
              </ul>
            </div>

            <div className="cta-box">
              <h2>Ready to Organize Group Contributions in Jamaica?</h2>
              <p>Join Jamaican groups using GroupFund to make contributions organized and stress-free.</p>
              <div className="cta-buttons">
                <Link to="/get-started" className="btn btn-primary btn-large">
                  Start Your Jamaica Group
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
