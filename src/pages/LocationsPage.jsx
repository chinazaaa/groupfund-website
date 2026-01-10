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
{ slug: 'spain', name: 'Spain', flag: '🇪🇸', type: 'country' },
{ slug: 'italy', name: 'Italy', flag: '🇮🇹', type: 'country' },
{ slug: 'china', name: 'China', flag: '🇨🇳', type: 'country' },
{ slug: 'japan', name: 'Japan', flag: '🇯🇵', type: 'country' },
{ slug: 'barcelona', name: 'Barcelona, Spain', flag: '🇪🇸', type: 'city', parent: 'spain' },
{ slug: 'milan', name: 'Milan, Italy', flag: '🇮🇹', type: 'city', parent: 'italy' },
{ slug: 'tokyo', name: 'Tokyo, Japan', flag: '🇯🇵', type: 'city', parent: 'japan' },
{ slug: 'shanghai', name: 'Shanghai, China', flag: '🇨🇳', type: 'city', parent: 'china' },

{ slug: 'afghanistan', name: 'Afghanistan', flag: '🇦🇫', type: 'country' },
{ slug: 'kabul', name: 'Kabul, Afghanistan', flag: '🇦🇫', type: 'city', parent: 'afghanistan' },

{ slug: 'philippines', name: 'Philippines', flag: '🇵🇭', type: 'country' },
{ slug: 'manila', name: 'Manila, Philippines', flag: '🇵🇭', type: 'city', parent: 'philippines' },

{ slug: 'poland', name: 'Poland', flag: '🇵🇱', type: 'country' },
{ slug: 'warsaw', name: 'Warsaw, Poland', flag: '🇵🇱', type: 'city', parent: 'poland' },

{ slug: 'south-korea', name: 'South Korea', flag: '🇰🇷', type: 'country' },
{ slug: 'seoul', name: 'Seoul, South Korea', flag: '🇰🇷', type: 'city', parent: 'south-korea' },

{ slug: 'estonia', name: 'Estonia', flag: '🇪🇪', type: 'country' },
{ slug: 'tallinn', name: 'Tallinn, Estonia', flag: '🇪🇪', type: 'city', parent: 'estonia' },

{ slug: 'uganda', name: 'Uganda', flag: '🇺🇬', type: 'country' },
{ slug: 'kampala', name: 'Kampala, Uganda', flag: '🇺🇬', type: 'city', parent: 'uganda' },

{ slug: 'pakistan', name: 'Pakistan', flag: '🇵🇰', type: 'country' },
{ slug: 'islamabad', name: 'Islamabad, Pakistan', flag: '🇵🇰', type: 'city', parent: 'pakistan' },

{ slug: 'russia', name: 'Russia', flag: '🇷🇺', type: 'country' },
{ slug: 'moscow', name: 'Moscow, Russia', flag: '🇷🇺', type: 'city', parent: 'russia' },

{ slug: 'ukraine', name: 'Ukraine', flag: '🇺🇦', type: 'country' },
{ slug: 'kyiv', name: 'Kyiv, Ukraine', flag: '🇺🇦', type: 'city', parent: 'ukraine' },

{ slug: 'turkey', name: 'Turkey', flag: '🇹🇷', type: 'country' },
{ slug: 'istanbul', name: 'Istanbul, Turkey', flag: '🇹🇷', type: 'city', parent: 'turkey' },

{ slug: 'indonesia', name: 'Indonesia', flag: '🇮🇩', type: 'country' },
{ slug: 'jakarta', name: 'Jakarta, Indonesia', flag: '🇮🇩', type: 'city', parent: 'indonesia' },

{ slug: 'malaysia', name: 'Malaysia', flag: '🇲🇾', type: 'country' },
{ slug: 'kuala-lumpur', name: 'Kuala Lumpur, Malaysia', flag: '🇲🇾', type: 'city', parent: 'malaysia' },

{ slug: 'colombia', name: 'Colombia', flag: '🇨🇴', type: 'country' },
{ slug: 'bogota', name: 'Bogotá, Colombia', flag: '🇨🇴', type: 'city', parent: 'colombia' },

{ slug: 'finland', name: 'Finland', flag: '🇫🇮', type: 'country' },
{ slug: 'helsinki', name: 'Helsinki, Finland', flag: '🇫🇮', type: 'city', parent: 'finland' },

{ slug: 'sweden', name: 'Sweden', flag: '🇸🇪', type: 'country' },
{ slug: 'stockholm', name: 'Stockholm, Sweden', flag: '🇸🇪', type: 'city', parent: 'sweden' },

{ slug: 'vietnam', name: 'Vietnam', flag: '🇻🇳', type: 'country' },
{ slug: 'ho-chi-minh-city', name: 'Ho Chi Minh City, Vietnam', flag: '🇻🇳', type: 'city', parent: 'vietnam' },

{ slug: 'yemen', name: 'Yemen', flag: '🇾🇪', type: 'country' },
{ slug: 'sanaa', name: 'Sana’a, Yemen', flag: '🇾🇪', type: 'city', parent: 'yemen' },

{ slug: 'iraq', name: 'Iraq', flag: '🇮🇶', type: 'country' },
{ slug: 'baghdad', name: 'Baghdad, Iraq', flag: '🇮🇶', type: 'city', parent: 'iraq' },

{ slug: 'jordan', name: 'Jordan', flag: '🇯🇴', type: 'country' },
{ slug: 'amman', name: 'Amman, Jordan', flag: '🇯🇴', type: 'city', parent: 'jordan' },

{ slug: 'jamaica', name: 'Jamaica', flag: '🇯🇲', type: 'country' },
{ slug: 'kingston', name: 'Kingston, Jamaica', flag: '🇯🇲', type: 'city', parent: 'jamaica' },

{ slug: 'singapore', name: 'Singapore', flag: '🇸🇬', type: 'country' },
{ slug: 'singapore-city', name: 'Singapore, Singapore', flag: '🇸🇬', type: 'city', parent: 'singapore' },

{ slug: 'lebanon', name: 'Lebanon', flag: '🇱🇧', type: 'country' },
{ slug: 'beirut', name: 'Beirut, Lebanon', flag: '🇱🇧', type: 'city', parent: 'lebanon' },

{ slug: 'sri-lanka', name: 'Sri Lanka', flag: '🇱🇰', type: 'country' },
{ slug: 'colombo', name: 'Colombo, Sri Lanka', flag: '🇱🇰', type: 'city', parent: 'sri-lanka' },

{ slug: 'serbia', name: 'Serbia', flag: '🇷🇸', type: 'country' },
{ slug: 'belgrade', name: 'Belgrade, Serbia', flag: '🇷🇸', type: 'city', parent: 'serbia' },
{ slug: 'egypt', name: 'Egypt', flag: '🇪🇬', type: 'country' },
{ slug: 'cairo', name: 'Cairo, Egypt', flag: '🇪🇬', type: 'city', parent: 'egypt' },
{ slug: 'argentina', name: 'Argentina', flag: '🇦🇷', type: 'country' },
{ slug: 'buenos-aires', name: 'Buenos Aires, Argentina', flag: '🇦🇷', type: 'city', parent: 'argentina' },
{ slug: 'chile', name: 'Chile', flag: '🇨🇱', type: 'country' },
{ slug: 'santiago', name: 'Santiago, Chile', flag: '🇨🇱', type: 'city', parent: 'chile' },
{ slug: 'portugal', name: 'Portugal', flag: '🇵🇹', type: 'country' },
{ slug: 'lisbon', name: 'Lisbon, Portugal', flag: '🇵🇹', type: 'city', parent: 'portugal' },
{ slug: 'greece', name: 'Greece', flag: '🇬🇷', type: 'country' },
{ slug: 'athens', name: 'Athens, Greece', flag: '🇬🇷', type: 'city', parent: 'greece' },
{ slug: 'belgium', name: 'Belgium', flag: '🇧🇪', type: 'country' },
{ slug: 'brussels', name: 'Brussels, Belgium', flag: '🇧🇪', type: 'city', parent: 'belgium' },
{ slug: 'denmark', name: 'Denmark', flag: '🇩🇰', type: 'country' },
{ slug: 'copenhagen', name: 'Copenhagen, Denmark', flag: '🇩🇰', type: 'city', parent: 'denmark' },
{ slug: 'norway', name: 'Norway', flag: '🇳🇴', type: 'country' },
{ slug: 'oslo', name: 'Oslo, Norway', flag: '🇳🇴', type: 'city', parent: 'norway' },
{ slug: 'new-zealand', name: 'New Zealand', flag: '🇳🇿', type: 'country' },
{ slug: 'auckland', name: 'Auckland, New Zealand', flag: '🇳🇿', type: 'city', parent: 'new-zealand' },
{ slug: 'thailand', name: 'Thailand', flag: '🇹🇭', type: 'country' },
{ slug: 'bangkok', name: 'Bangkok, Thailand', flag: '🇹🇭', type: 'city', parent: 'thailand' },
{ slug: 'austria', name: 'Austria', flag: '🇦🇹', type: 'country' },
{ slug: 'vienna', name: 'Vienna, Austria', flag: '🇦🇹', type: 'city', parent: 'austria' },
{ slug: 'bulgaria', name: 'Bulgaria', flag: '🇧🇬', type: 'country' },
{ slug: 'sofia', name: 'Sofia, Bulgaria', flag: '🇧🇬', type: 'city', parent: 'bulgaria' },
{ slug: 'croatia', name: 'Croatia', flag: '🇭🇷', type: 'country' },
{ slug: 'zagreb', name: 'Zagreb, Croatia', flag: '🇭🇷', type: 'city', parent: 'croatia' },
{ slug: 'czech-republic', name: 'Czech Republic', flag: '🇨🇿', type: 'country' },
{ slug: 'prague', name: 'Prague, Czech Republic', flag: '🇨🇿', type: 'city', parent: 'czech-republic' },
{ slug: 'hungary', name: 'Hungary', flag: '🇭🇺', type: 'country' },
{ slug: 'budapest', name: 'Budapest, Hungary', flag: '🇭🇺', type: 'city', parent: 'hungary' },
{ slug: 'iceland', name: 'Iceland', flag: '🇮🇸', type: 'country' },
{ slug: 'reykjavik', name: 'Reykjavik, Iceland', flag: '🇮🇸', type: 'city', parent: 'iceland' },
{ slug: 'latvia', name: 'Latvia', flag: '🇱🇻', type: 'country' },
{ slug: 'riga', name: 'Riga, Latvia', flag: '🇱🇻', type: 'city', parent: 'latvia' },
{ slug: 'liechtenstein', name: 'Liechtenstein', flag: '🇱🇮', type: 'country' },
{ slug: 'vaduz', name: 'Vaduz, Liechtenstein', flag: '🇱🇮', type: 'city', parent: 'liechtenstein' },
{ slug: 'lithuania', name: 'Lithuania', flag: '🇱🇹', type: 'country' },
{ slug: 'vilnius', name: 'Vilnius, Lithuania', flag: '🇱🇹', type: 'city', parent: 'lithuania' },
{ slug: 'luxembourg', name: 'Luxembourg', flag: '🇱🇺', type: 'country' },
{ slug: 'luxembourg-city', name: 'Luxembourg, Luxembourg', flag: '🇱🇺', type: 'city', parent: 'luxembourg' },
{ slug: 'malta', name: 'Malta', flag: '🇲🇹', type: 'country' },
{ slug: 'valletta', name: 'Valletta, Malta', flag: '🇲🇹', type: 'city', parent: 'malta' },
{ slug: 'romania', name: 'Romania', flag: '🇷🇴', type: 'country' },
{ slug: 'bucharest', name: 'Bucharest, Romania', flag: '🇷🇴', type: 'city', parent: 'romania' },
{ slug: 'slovakia', name: 'Slovakia', flag: '🇸🇰', type: 'country' },
{ slug: 'bratislava', name: 'Bratislava, Slovakia', flag: '🇸🇰', type: 'city', parent: 'slovakia' },
{ slug: 'slovenia', name: 'Slovenia', flag: '🇸🇮', type: 'country' },
    { slug: 'ljubljana', name: 'Ljubljana, Slovenia', flag: '🇸🇮', type: 'city', parent: 'slovenia' },
    { slug: 'israel', name: 'Israel', flag: '🇮🇱', type: 'country' },
    { slug: 'tel-aviv', name: 'Tel Aviv, Israel', flag: '🇮🇱', type: 'city', parent: 'israel' },
    { slug: 'venezuela', name: 'Venezuela', flag: '🇻🇪', type: 'country' },
    { slug: 'caracas', name: 'Caracas, Venezuela', flag: '🇻🇪', type: 'city', parent: 'venezuela' },
    { slug: 'morocco', name: 'Morocco', flag: '🇲🇦', type: 'country' },
    { slug: 'casablanca', name: 'Casablanca, Morocco', flag: '🇲🇦', type: 'city', parent: 'morocco' },

  ]

  const countries = locations.filter(loc => loc.type === 'country')
  const cities = locations.filter(loc => loc.type === 'city')

  return (
    <>
      <SEO
        title="GroupFund Locations - Group Contributions Worldwide"
        description="GroupFund helps organize group contributions in Nigeria, United States, Canada, Australia, Ghana, South Africa, and many more countries. Find your location and start organizing group contributions."
        keywords="group contributions worldwide, groupfund locations, contribution app Nigeria, contribution app USA, group contributions by country"
        canonical="https://www.groupfund.app/locations"
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
              <Link to="/get-started" className="btn btn-primary btn-large">Get Started for Free</Link>
              <Link to="/how-it-works" className="btn btn-secondary btn-large">See How It Works</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

