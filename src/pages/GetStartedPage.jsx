import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import ComingSoonModal from '../components/ComingSoonModal'
import '../App.css'

export default function DownloadPage() {
  const [modalOpen, setModalOpen] = useState(false)

  useEffect(() => {
    const webPageStructuredData = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Download - GroupFund",
      "description": "Get started with GroupFund on web, iOS, or Android. Organize group contributions for birthdays, subscriptions, and events.",
      "url": "https://groupfund.app/download"
    }
    const existingScript = document.querySelector('script[data-download-schema]')
    if (existingScript) existingScript.remove()
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.setAttribute('data-download-schema', 'true')
    script.textContent = JSON.stringify(webPageStructuredData)
    document.head.appendChild(script)
    return () => {
      const scriptToRemove = document.querySelector('script[data-download-schema]')
      if (scriptToRemove) scriptToRemove.remove()
    }
  }, [])

  const handleiOSClick = (e) => {
    e.preventDefault()
    setModalOpen(true)
  }

  const platforms = [
    {
      title: "Web",
      description: "Access GroupFund from any browser. Full features available instantly.",
      icon: "🌐",
      link: "https://app.groupfund.app/login",
      buttonText: "Get Started on Web",
      available: true,
      external: true
    },
    {
      title: "iOS",
      description: "Download GroupFund for iPhone and iPad. Coming soon to the App Store.",
      icon: "📱",
      link: "#",
      buttonText: "Coming Soon",
      available: false,
      external: false
    },
    {
      title: "Android",
      description: "Get GroupFund on your Android device. Available now on Google Play.",
      icon: "🤖",
      link: "https://play.google.com/store/apps/details?id=com.groupfund.app",
      buttonText: "Get it on Google Play",
      available: true,
      external: true
    }
  ]

  return (
    <>
      <ComingSoonModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        storeName="the App Store"
      />
      <SEO
        title="Download GroupFund - Web, iOS & Android Apps"
        description="Get started with GroupFund on web, iOS, or Android. Organize group contributions for birthdays, subscriptions, events, and more with multi-currency support and payment tracking."
        keywords="groupfund download, groupfund app, group contribution app, download groupfund, groupfund web app, groupfund android, groupfund ios"
        canonical="https://www.groupfund.app/download"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Get Started with GroupFund</h1>
          <p className="page-subtitle">
            Choose your platform and start organizing group contributions today. Available on web and Android, with iOS coming soon.
          </p>
        </div>
      </section>

      <section className="features-page">
        <div className="container">
          <div className="features-grid">
            {platforms.map((platform, index) => (
              <article key={index} className="feature-card">
                <div className="feature-icon-large">{platform.icon}</div>
                <h2 className="feature-title">{platform.title}</h2>
                <p className="feature-description">{platform.description}</p>
                {platform.available ? (
                  <a 
                    href={platform.link}
                    className="btn btn-primary"
                    target={platform.external ? "_blank" : undefined}
                    rel={platform.external ? "noopener noreferrer" : undefined}
                    style={{ marginTop: '16px', display: 'inline-block' }}
                  >
                    {platform.buttonText}
                  </a>
                ) : (
                  <button 
                    onClick={handleiOSClick}
                    className="btn btn-secondary"
                    style={{ marginTop: '16px', display: 'inline-block' }}
                  >
                    {platform.buttonText}
                  </button>
                )}
              </article>
            ))}
          </div>

          <div className="cta-box">
            <h2>Why Choose GroupFund?</h2>
            <p>Say goodbye to WhatsApp chaos and Excel spreadsheets. GroupFund makes group contributions simple with multi-currency support, automatic reminders, payment tracking, and more.</p>
            <div className="cta-buttons">
              <Link to="/features" className="btn btn-secondary btn-large">View All Features</Link>
              <Link to="/how-it-works" className="btn btn-primary btn-large">See How It Works</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}