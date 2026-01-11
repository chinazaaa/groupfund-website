import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function BogotaLocationPage() {
  useEffect(() => {
    const localBusinessStructuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "GroupFund",
      "description": "Organize group contributions in Bogotá, Colombia with GroupFund. Perfect for Bogotá families, churches, schools, and groups.",
      "url": "https://www.groupfund.app/locations/bogota",
      "logo": "https://www.groupfund.app/logo.png",
      "areaServed": [
        { "@type": "City", "name": "Bogotá" },
        { "@type": "Country", "name": "Colombia" }
      ],
      "serviceType": "Group Contribution Management",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "COP" },
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
        title="GroupFund Bogotá - Group Contributions App for Bogotá, Colombia"
        description="Organize group contributions in Bogotá, Colombia with GroupFund. Perfect for Bogotá families, churches, schools, and groups. Support for COP. Free to start."
        keywords="group contributions Bogotá, Bogotá contribution app, groupfund Bogotá, group contributions app Bogotá Colombia, Bogotá group payments, COP contribution tracker Bogotá"
        canonical="https://www.groupfund.app/locations/bogota"
      />
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">GroupFund for Bogotá, Colombia 🇨🇴</h1>
          <p className="page-subtitle">
            Organize group contributions in Bogotá with GroupFund. Perfect for Bogotá families, churches, schools, and groups.
          </p>
        </div>
      </section>

      <section className="location-detail-page">
        <div className="container">
          <div className="location-content">
            <div className="location-section">
              <h2>Why GroupFund Works Great in Bogotá</h2>
              <p>
                Bogotá is the capital and largest city of Colombia, located on a high plateau in the Andes at about 2,640 metres above sea level and serving as the country’s main political, economic, and cultural centre.
              </p>
              <p>
                With support for Colombian peso (COP), the official currency of Colombia divided into 100 centavos, GroupFund fits how Bogotá’s residents already manage everyday payments and shared expenses.
              </p>
            </div>

            <div className="location-section">
              <h2>Perfect for Bogotá Groups</h2>
              <div className="features-list">
                <div className="feature-item">
                  <h3>🏙️ Bogotá Families</h3>
                  <p>Organize group contributions for extended families across Bogotá’s many localities and neighbourhoods.</p>
                </div>
                <div className="feature-item">
                  <h3>⛪ Churches & Communities</h3>
                  <p>Manage regular contributions and special collections for churches and community groups across the city.</p>
                </div>
                <div className="feature-item">
                  <h3>🏢 Bogotá Workplaces</h3>
                  <p>Organize office birthday, farewell, and support funds for teams in Bogotá’s business and government centres.</p>
                </div>
                <div className="feature-item">
                  <h3>🏫 Schools & Universities</h3>
                  <p>Perfect for schools and universities in Bogotá managing class, teacher, and student contribution pools.</p>
                </div>
                <div className="feature-item">
                  <h3>💰 COP Support</h3>
                  <p>Full support for Colombian peso (COP), so contribution amounts are set directly in local currency.</p>
                </div>
                <div className="feature-item">
                  <h3>📱 Mobile Access</h3>
                  <p>Mobile‑friendly experience that fits Bogotá’s growing, connected urban population.</p>
                </div>
              
                <div className="feature-item">
                  <h3>💬 Integrated Group Chat</h3>
                  <p>Coordinate contributions with optional per-group chat. Mention members with @username, share account details, and confirm payments - all in one place. Perfect for local groups.</p>
                </div>
</div>
            </div>

            <div className="location-section">
              <h2>How Bogotá Groups Use GroupFund</h2>
              <ul className="scenarios-list">
                <li>
                  <strong>Bogotá Family Groups:</strong> Coordinate contributions for birthdays, weddings, and family support.
                </li>
                <li>
                  <strong>Church & Community Groups:</strong> Track offerings and support funds for congregations and local initiatives.
                </li>
                <li>
                  <strong>Office Teams:</strong> Run pooled funds for birthdays, farewells, and emergencies in Bogotá workplaces.
                </li>
                <li>
                  <strong>School & Student Groups:</strong> Manage collections for teacher gifts, class trips, and student projects.
                </li>
                <li>
                  <strong>Friend Circles:</strong> Keep friend groups organised for shared nights out and celebrations around Bogotá.
                </li>
              </ul>
            </div>

            <div className="cta-box">
              <h2>Ready to Organize Group Contributions in Bogotá?</h2>
              <p>Join Bogotá groups using GroupFund to make contributions organised and stress‑free.</p>
              <div className="cta-buttons">
                <Link to="/get-started" className="btn btn-primary btn-large">Start Your Bogotá Group</Link>
                <Link to="/how-it-works" className="btn btn-secondary btn-large">See How It Works</Link>
              </div>
            </div>

            <div className="related-links">
              <h3>Explore More</h3>
              <div className="related-links-grid">
                <Link to="/locations/colombia">Colombia →</Link>
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
