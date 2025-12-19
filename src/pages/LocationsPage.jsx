import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function LocationsPage() {
  const locations = [
    { slug: 'nigeria', name: 'Nigeria', flag: '🇳🇬', type: 'country' },
    { slug: 'united-kingdom', name: 'United Kingdom', flag: '🇬🇧', type: 'country' },
    { slug: 'lagos', name: 'Lagos, Nigeria', flag: '🇳🇬', type: 'city', parent: 'nigeria' },
    { slug: 'london', name: 'London, UK', flag: '🇬🇧', type: 'city', parent: 'united-kingdom' },
    { slug: 'united-states', name: 'United States', flag: '🇺🇸', type: 'country' },
    { slug: 'new-york', name: 'New York, USA', flag: '🇺🇸', type: 'city', parent: 'united-states' },
    { slug: 'canada', name: 'Canada', flag: '🇨🇦', type: 'country' },
    { slug: 'toronto', name: 'Toronto, Canada', flag: '🇨🇦', type: 'city', parent: 'canada' },
    { slug: 'australia', name: 'Australia', flag: '🇦🇺', type: 'country' },
    { slug: 'sydney', name: 'Sydney, Australia', flag: '🇦🇺', type: 'city', parent: 'australia' },
    { slug: 'ghana', name: 'Ghana', flag: '🇬🇭', type: 'country' },
    { slug: 'accra', name: 'Accra, Ghana', flag: '🇬🇭', type: 'city', parent: 'ghana' },
    { slug: 'south-africa', name: 'South Africa', flag: '🇿🇦', type: 'country' },
    { slug: 'johannesburg', name: 'Johannesburg, South Africa', flag: '🇿🇦', type: 'city', parent: 'south-africa' },
    { slug: 'brazil', name: 'Brazil', flag: '🇧🇷', type: 'country' },
    { slug: 'sao-paulo', name: 'São Paulo, Brazil', flag: '🇧🇷', type: 'city', parent: 'brazil' },
    { slug: 'germany', name: 'Germany', flag: '🇩🇪', type: 'country' },
    { slug: 'berlin', name: 'Berlin, Germany', flag: '🇩🇪', type: 'city', parent: 'germany' },
    { slug: 'ireland', name: 'Ireland', flag: '🇮🇪', type: 'country' },
    { slug: 'dublin', name: 'Dublin, Ireland', flag: '🇮🇪', type: 'city', parent: 'ireland' },
    { slug: 'france', name: 'France', flag: '🇫🇷', type: 'country' },
    { slug: 'paris', name: 'Paris, France', flag: '🇫🇷', type: 'city', parent: 'france' },
    { slug: 'netherlands', name: 'Netherlands', flag: '🇳🇱', type: 'country' },
    { slug: 'amsterdam', name: 'Amsterdam, Netherlands', flag: '🇳🇱', type: 'city', parent: 'netherlands' },
    { slug: 'switzerland', name: 'Switzerland', flag: '🇨🇭', type: 'country' },
    { slug: 'zurich', name: 'Zurich, Switzerland', flag: '🇨🇭', type: 'city', parent: 'switzerland' },
    { slug: 'india', name: 'India', flag: '🇮🇳', type: 'country' },
    { slug: 'mumbai', name: 'Mumbai, India', flag: '🇮🇳', type: 'city', parent: 'india' },
    { slug: 'kenya', name: 'Kenya', flag: '🇰🇪', type: 'country' },
    { slug: 'nairobi', name: 'Nairobi, Kenya', flag: '🇰🇪', type: 'city', parent: 'kenya' },
    { slug: 'mexico', name: 'Mexico', flag: '🇲🇽', type: 'country' },
    { slug: 'mexico-city', name: 'Mexico City, Mexico', flag: '🇲🇽', type: 'city', parent: 'mexico' },
  ]

  const countries = locations.filter(loc => loc.type === 'country')
  const cities = locations.filter(loc => loc.type === 'city')

  return (
    <>
      <SEO
        title="GroupFund Locations - Group Contributions Worldwide"
        description="GroupFund helps organize group contributions in Nigeria, United States, Canada, Australia, Ghana, South Africa, and many more countries. Find your location and start organizing group contributions."
        keywords="group contributions worldwide, groupfund locations, contribution app Nigeria, contribution app USA, group contributions by country"
        canonical="https://groupfund.app/locations"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">GroupFund Locations</h1>
          <p className="page-subtitle">
            GroupFund helps organize group contributions in countries and cities worldwide - for birthdays, subscriptions, events, and more. Find your location and start organizing group contributions.
          </p>
        </div>
      </section>

      <section className="locations-page">
        <div className="container">
          <div className="locations-intro">
            <h2>Available Worldwide</h2>
            <p>
              GroupFund supports multiple currencies and is available in countries around the world. Whether you're organizing group contributions in Nigeria, the United States, Canada, or anywhere else, GroupFund makes it easy.
            </p>
            <p>
              Select your country or city below to learn more about using GroupFund in your location.
            </p>
          </div>

          {/* Countries Section */}
          <div className="locations-section">
            <h2>Countries</h2>
            <div className="locations-grid">
              {countries.map((location) => (
                <Link 
                  key={location.slug}
                  to={`/locations/${location.slug}`}
                  className="location-card"
                >
                  <div className="location-flag">{location.flag}</div>
                  <h3 className="location-name">{location.name}</h3>
                  <span className="location-link">Learn More →</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Cities Section */}
          {cities.length > 0 && (
            <div className="locations-section">
              <h2>Cities</h2>
              <div className="locations-grid">
                {cities.map((location) => (
                  <Link 
                    key={location.slug}
                    to={`/locations/${location.slug}`}
                    className="location-card"
                  >
                    <div className="location-flag">{location.flag}</div>
                    <h3 className="location-name">{location.name}</h3>
                    <span className="location-link">Learn More →</span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* CTA Section */}
          <div className="cta-box">
            <h2>Don't See Your Location?</h2>
            <p>GroupFund works worldwide! Even if your specific country or city isn't listed, you can still use GroupFund to organize group contributions - for birthdays, subscriptions, events, and more.</p>
            <div className="cta-buttons">
              <Link to="/waitlist" className="btn btn-primary btn-large">Get Started Free</Link>
              <Link to="/how-it-works" className="btn btn-secondary btn-large">See How It Works</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

