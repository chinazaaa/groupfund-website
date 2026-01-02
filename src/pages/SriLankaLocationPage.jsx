import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function SriLankaLocationPage() {
  useEffect(() => {
    const localBusinessStructuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "GroupFund",
      "description": "Organize group contributions in Sri Lanka with GroupFund. Perfect for Sri Lankan families, communities, schools, and groups.",
      "url": "https://groupfund.app/locations/sri-lanka",
      "logo": "https://groupfund.app/logo.png",
      "areaServed": { "@type": "Country", "name": "Sri Lanka" },
      "serviceType": "Group Contribution Management",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "LKR" },
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
        title="GroupFund Sri Lanka - Group Contributions App for Sri Lanka"
        description="Organize group contributions in Sri Lanka with GroupFund. Perfect for Sri Lankan families, communities, schools, and groups. Support for LKR (Sri Lankan rupee). Free to start."
        keywords="group contributions Sri Lanka, Sri Lanka contribution app, groupfund Sri Lanka, group contributions app Sri Lanka, LKR contribution tracker, Sri Lanka group payments"
        canonical="https://www.groupfund.app/locations/sri-lanka"
      />
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">GroupFund for Sri Lanka 🇱🇰</h1>
          <p className="page-subtitle">
            Organize group contributions in Sri Lanka with GroupFund. Perfect for Sri Lankan families, communities, schools, and groups. [web:621][web:624][web:633]
          </p>
        </div>
      </section>

      <section className="location-detail-page">
        <div className="container">
          <div className="location-content">
            <div className="location-section">
              <h2>Why GroupFund Works Great in Sri Lanka</h2>
              <p>
                Sri Lanka is an island country in South Asia in the Indian Ocean, close to the southern coast of India, with Sri Jayawardenepura Kotte as its legislative capital and Colombo as its largest city. [web:621][web:624][web:627]
              </p>
              <p>
                With support for the Sri Lankan rupee (LKR) and local financial habits, GroupFund can help groups manage shared contributions in a way that matches how Sri Lankans already budget and give. [web:616][web:617][web:619][web:626]
              </p>
            </div>

            <div className="location-section">
              <h2>Key Features for Sri Lanka</h2>
              <div className="features-list">
                <div className="feature-item">
                  <h3>🇱🇰 Sri Lankan Rupee (LKR) Support</h3>
                  <p>
                    Full support for the Sri Lankan rupee, divided into 100 cents, so contribution amounts can be set in LKR with familiar note and coin values. [web:616][web:618][web:619][web:626]
                  </p>
                </div>
                <div className="feature-item">
                  <h3>🏦 Local Cash & Bank Workflows</h3>
                  <p>
                    Works with Sri Lanka’s mix of cash usage and bank transfers; members pay through their usual channels then mark contributions as paid in GroupFund. [web:617][web:620][web:635]
                  </p>
                </div>
                <div className="feature-item">
                  <h3>👨‍👩‍👧‍👦 Perfect for Sri Lankan Families</h3>
                  <p>
                    Organize contributions for extended families across Colombo, Kandy, Galle, Jaffna and the diaspora supporting relatives back home. [web:621][web:624][web:633]
                  </p>
                </div>
                <div className="feature-item">
                  <h3>🏘 Community & Religious Groups</h3>
                  <p>
                    Ideal for temple, church, mosque, and community groups coordinating ongoing support, dana, and local projects. [web:621][web:627]
                  </p>
                </div>
                <div className="feature-item">
                  <h3>🏫 Schools & Associations</h3>
                  <p>
                    Works well for schools, tuition classes, and old boys’/old girls’ associations managing contributions for teachers, events, and facilities.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>📱 Mobile-First Experience</h3>
                  <p>
                    Optimised for smartphone users so members can track and update payments from anywhere in Sri Lanka or abroad. [web:621][web:633]
                  </p>
                </div>
              </div>
            </div>

            <div className="location-section">
              <h2>Common Use Cases in Sri Lanka</h2>
              <ul className="scenarios-list">
                <li>
                  <strong>Family Group Contributions:</strong> Organize support for weddings, almsgivings, funerals, and other key family events.
                </li>
                <li>
                  <strong>Religious & Community Funds:</strong> Coordinate temple, kovil, church, or mosque collections and community support funds.
                </li>
                <li>
                  <strong>School & Tuition Groups:</strong> Collect for teacher gifts, class events, and school improvement projects.
                </li>
                <li>
                  <strong>Alumni Associations:</strong> Manage alumni contributions for projects, reunions, and scholarships.
                </li>
                <li>
                  <strong>Workplace Groups:</strong> Run birthday, farewell, and emergency support pools in offices and businesses.
                </li>
                <li>
                  <strong>Diaspora Support Groups:</strong> Help Sri Lankans abroad coordinate regular contributions back home in an organised way.
                </li>
              </ul>
            </div>

            <div className="location-section">
              <h2>How It Works in Sri Lanka</h2>
              <ol className="steps-list">
                <li>
                  <strong>Create Your Group:</strong> Set up a group with Sri Lankan rupee (LKR) as the currency. [web:616][web:617][web:623]
                </li>
                <li>
                  <strong>Set Contribution Amounts:</strong> Choose LKR amounts per person matching your group’s budget and norms.
                </li>
                <li>
                  <strong>Add Events & Members:</strong> Add key dates and invite members via WhatsApp, SMS, or email.
                </li>
                <li>
                  <strong>Members Pay & Confirm:</strong> Members pay through their preferred method, then mark contributions as paid in GroupFund.
                </li>
                <li>
                  <strong>Automatic Reminders:</strong> Automated reminders help reduce forgotten or late payments.
                </li>
                <li>
                  <strong>Track Everything Clearly:</strong> See who has paid, totals collected, and upcoming events in one place.
                </li>
              </ol>
            </div>

            <div className="location-section">
              <h2>Why Sri Lankan Groups Choose GroupFund</h2>
              <ul className="benefits-list">
                <li>Local currency support for Sri Lankan rupee (LKR)</li>
                <li>Clear tracking of who has paid and who has not</li>
                <li>Works with both cash and digital payment habits</li>
                <li>Free to start with no hidden platform fees</li>
                <li>Useful for families, religious institutions, workplaces, and diaspora groups</li>
                <li>Transparent records that reduce money misunderstandings</li>
                <li>Automatic reminders reduce manual follow‑ups</li>
                <li>Member reliability scores help organisers plan better</li>
              </ul>
            </div>

            <div className="cta-box">
              <h2>Ready to Organize Group Contributions in Sri Lanka?</h2>
              <p>Join Sri Lankan groups using GroupFund to make contributions organised and stress‑free.</p>
              <div className="cta-buttons">
                <Link to="/waitlist" className="btn btn-primary btn-large">
                  Start Your Sri Lanka Group
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
