import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function ComingSoonFeaturesPage() {
  useEffect(() => {
    const webPageStructuredData = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "GroupFund Product Roadmap",
      "description": "See upcoming features and improvements for GroupFund, including new group types, automation, and analytics.",
      "url": "https://www.groupfund.app/coming-soon-features"
    }
    const existingScript = document.querySelector('script[data-coming-soon-schema]')
    if (existingScript) existingScript.remove()
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.setAttribute('data-coming-soon-schema', 'true')
    script.textContent = JSON.stringify(webPageStructuredData)
    document.head.appendChild(script)
    return () => {
      const scriptToRemove = document.querySelector('script[data-coming-soon-schema]')
      if (scriptToRemove) scriptToRemove.remove()
    }
  }, [])

  const pipelineFeatures = [
    {
      title: "Export & Reporting",
      description: "Export detailed contribution reports in multiple formats (PDF, Excel, CSV). Generate tax-ready financial summaries for your records.",
      icon: "📄",
      status: "Planned",
      statusColor: "purple"
    },
    {
      title: "Analytics & Insights Dashboard",
      description: "Get detailed insights into your contribution patterns, spending trends, and group activity. Visualize your contribution history with charts and graphs.",
      icon: "📊",
      status: "Planned",
      statusColor: "purple"
    },
    {
      title: "Calendar Integration",
      description: "Sync birthdays and deadlines with your favorite calendar apps (Google Calendar, Apple Calendar, Outlook). Never miss a contribution deadline again.",
      icon: "📅",
      status: "Planned",
      statusColor: "purple"
    },
    {
      title: "Payment Installments",
      description: "Pay for large contributions in installments. Split a single payment (like an expensive birthday gift) into smaller monthly payments to make it more manageable. Perfect for one-time contributions that need to be spread over time.",
      icon: "💳",
      status: "Planned",
      statusColor: "purple"
    },
    {
      title: "Group Templates",
      description: "Save your group settings as templates and quickly create new groups with the same configuration. Perfect for recurring events or similar groups.",
      icon: "📋",
      status: "Planned",
      statusColor: "purple"
    },
    {
      title: "SMS Notifications",
      description: "Receive important reminders and updates via SMS in addition to email and push notifications. Stay informed even when you're not checking the app.",
      icon: "📱",
      status: "Planned",
      statusColor: "purple"
    },
    {
      title: "Mobile Widgets",
      description: "Add GroupFund widgets to your mobile home screen for quick access to your groups, upcoming deadlines, and wallet balance. Stay on top of contributions at a glance.",
      icon: "📲",
      status: "Planned",
      statusColor: "purple"
    },
    {
      title: "API Access",
      description: "Developer-friendly API to integrate GroupFund with your existing systems. Build custom integrations and automate workflows.",
      icon: "🔌",
      status: "Planned",
      statusColor: "purple"
    },
    {
      title: "Multi-Language Support",
      description: "Use GroupFund in your preferred language. Support for multiple languages to serve diverse global communities.",
      icon: "🌐",
      status: "Planned",
      statusColor: "purple"
    }
  ]

  const getStatusBadgeClass = (statusColor) => {
    const colorMap = {
      blue: "status-badge-blue",
      purple: "status-badge-purple",
      green: "status-badge-green",
      orange: "status-badge-orange"
    }
    return `status-badge ${colorMap[statusColor] || "status-badge-purple"}`
  }

  return (
    <>
      <SEO
        title="GroupFund Product Roadmap & Upcoming Features"
        description="Explore upcoming features in GroupFund’s roadmap. GroupFund is live on Web, iOS, and Android—see what’s coming next to improve group contributions."
        keywords="groupfund roadmap, upcoming features, product pipeline, group contribution app features, group contribution app updates"
        canonical="https://www.groupfund.app/coming-soon-features"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Product Roadmap</h1>
          <p className="page-subtitle">
            GroupFund is live on Web, iOS, and Android. Here’s what the team is working on next to make group contributions even better.
          </p>
        </div>
      </section>

      <section className="features-page pipeline-page">
        <div className="container">
          <div className="pipeline-intro">
            <p className="pipeline-description">
              GroupFund is already helping groups manage contributions across platforms. 
              This roadmap highlights upcoming features we’re exploring and building to level up your experience.
            </p>
          </div>

          <div className="features-grid">
            {pipelineFeatures.map((feature, index) => (
              <article key={index} className="feature-card pipeline-feature-card">
                <div className="feature-header">
                  <div className="feature-icon-large">{feature.icon}</div>
                  <span className={getStatusBadgeClass(feature.statusColor)}>
                    {feature.status}
                  </span>
                </div>
                <h2 className="feature-title">{feature.title}</h2>
                <p className="feature-description">{feature.description}</p>
              </article>
            ))}
          </div>

          <div className="cta-box">
            <h2>Start Using GroupFund Today</h2>
            <p>GroupFund is live on Web, iOS, and Android. Create your first group in minutes, then tell us what you’d like to see next.</p>
            <div className="cta-buttons">
              <Link to="/get-started" className="btn btn-primary btn-large">Get Started</Link>
              <Link to="/contact" className="btn btn-secondary btn-large">Request a Feature</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
