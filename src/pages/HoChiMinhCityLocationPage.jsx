import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function HoChiMinhCityLocationPage() {
  useEffect(() => {
    const localBusinessStructuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "GroupFund",
      "description": "Organize group contributions in Ho Chi Minh City, Vietnam with GroupFund. Perfect for HCMC families, churches, schools, and groups.",
      "url": "https://groupfund.app/locations/ho-chi-minh-city",
      "logo": "https://groupfund.app/logo.png",
      "areaServed": [
        { "@type": "City", "name": "Ho Chi Minh City" },
        { "@type": "Country", "name": "Vietnam" }
      ],
      "serviceType": "Group Contribution Management",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "VND" },
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
        title="GroupFund Ho Chi Minh City - Group Contributions App for Ho Chi Minh City, Vietnam"
        description="Organize group contributions in Ho Chi Minh City, Vietnam with GroupFund. Perfect for HCMC families, churches, schools, and groups. Support for VND. Free to start."
        keywords="group contributions Ho Chi Minh City, Saigon contribution app, groupfund Ho Chi Minh City, group contributions app Ho Chi Minh City Vietnam, HCMC group payments, VND contribution tracker Ho Chi Minh City"
        canonical="https://www.groupfund.app/locations/ho-chi-minh-city"
      />
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">GroupFund for Ho Chi Minh City, Vietnam 🇻🇳</h1>
          <p className="page-subtitle">
            Organize group contributions in Ho Chi Minh City with GroupFund. Perfect for HCMC families, churches, schools, and groups.
          </p>
        </div>
      </section>

      <section className="location-detail-page">
        <div className="container">
          <div className="location-content">
            <div className="location-section">
              <h2>Why GroupFund Works Great in Ho Chi Minh City</h2>
              <p>
                Ho Chi Minh City, commonly known as Saigon, is Vietnam’s largest city and economic centre, located in the south of the country and famous for its French colonial landmarks and bustling streets.
              </p>
              <p>
                Vietnam uses the Vietnamese đồng (VND) as its official currency, so GroupFund’s VND support fits naturally with how residents of Ho Chi Minh City already handle everyday payments and shared expenses.
              </p>
            </div>

            <div className="location-section">
              <h2>Perfect for HCMC Groups</h2>
              <div className="features-list">
                <div className="feature-item">
                  <h3>🏙️ Saigon Families</h3>
                  <p>Organize group contributions for extended families across District 1, District 3, Thủ Đức, and beyond.</p>
                </div>
                <div className="feature-item">
                  <h3>⛪ Churches, Pagodas & Communities</h3>
                  <p>Manage regular contributions and special collections for churches, pagodas, and community groups across the city.</p>
                </div>
                <div className="feature-item">
                  <h3>🏢 HCMC Workplaces</h3>
                  <p>Organize office birthday, farewell, and support funds for teams in Ho Chi Minh City’s fast‑growing business districts.</p>
                </div>
                <div className="feature-item">
                  <h3>🏫 Schools & Universities</h3>
                  <p>Perfect for schools and universities in HCMC managing class, teacher, and student contribution pools.</p>
                </div>
                <div className="feature-item">
                  <h3>💰 VND Support</h3>
                  <p>Full support for Vietnamese đồng (VND), so contribution amounts are set directly in local currency.</p>
                </div>
                <div className="feature-item">
                  <h3>📱 Mobile Access</h3>
                  <p>Mobile‑friendly experience that fits Ho Chi Minh City’s young, connected urban population.</p>
                </div>
              </div>
            </div>

            <div className="location-section">
              <h2>How Ho Chi Minh City Groups Use GroupFund</h2>
              <ul className="scenarios-list">
                <li>
                  <strong>Family Groups:</strong> Coordinate contributions for birthdays, weddings, and family support in and around HCMC.
                </li>
                <li>
                  <strong>Faith & Community Groups:</strong> Track offerings and support funds for churches, pagodas, and local initiatives.
                </li>
                <li>
                  <strong>Office Teams:</strong> Run pooled funds for birthdays, farewells, and emergencies in Ho Chi Minh City workplaces.
                </li>
                <li>
                  <strong>School & Student Groups:</strong> Manage collections for teacher gifts, class trips, and student projects.
                </li>
                <li>
                  <strong>Friend Circles:</strong> Keep friend groups organised for shared meals, nights out, and city adventures around Saigon.</li>
              </ul>
            </div>

            <div className="cta-box">
              <h2>Ready to Organize Group Contributions in Ho Chi Minh City?</h2>
              <p>Join HCMC groups using GroupFund to make contributions organised and stress‑free.</p>
              <div className="cta-buttons">
                <Link to="/get-started" className="btn btn-primary btn-large">Start Your Ho Chi Minh City Group</Link>
                <Link to="/how-it-works" className="btn btn-secondary btn-large">See How It Works</Link>
              </div>
            </div>

            <div className="related-links">
              <h3>Explore More</h3>
              <div className="related-links-grid">
                <Link to="/locations/vietnam">Vietnam →</Link>
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
