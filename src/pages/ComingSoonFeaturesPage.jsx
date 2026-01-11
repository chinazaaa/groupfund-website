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
    // {
    //   title: "Group Chat Integration",
    //   description: "Built-in group chat functionality to keep all communication in one place. Discuss contributions, share updates, and coordinate seamlessly.",
    //   icon: "💬",
    //   status: "Planned",
    //   statusColor: "purple"
    // },
    {
      title: "Group Analytics Dashboard",
      description: "Comprehensive analytics and insights for group admins. Track contribution trends, member engagement, and financial summaries.",
      icon: "📊",
      status: "Planned",
      statusColor: "purple"
    },
    {
      title: "In-App Payment Processing",
      description: "Process payments directly within the app using secure payment gateways. Support for cards, bank transfers, and mobile money.",
      icon: "💳",
      status: "Planned",
      statusColor: "purple"
    },
    {
      title: "Automated Payouts",
      description: "Automatically distribute collected funds to recipients (celebrants for Birthday Groups, admins for Subscription/General Groups). Set up bank accounts and enable one-click payouts.",
      icon: "⚡",
      status: "Planned",
      statusColor: "purple"
    },
    {
      title: "Advanced Notification Settings",
      description: "Customize notification preferences for each group. Choose channels (email, SMS, push), frequency, and notification types.",
      icon: "🔔",
      status: "Planned",
      statusColor: "purple"
    },
    {
      title: "Custom Contribution Rules",
      description: "Create flexible contribution rules based on member roles, seniority, or custom criteria. Perfect for complex group structures.",
      icon: "⚙️",
      status: "Planned",
      statusColor: "purple"
    },
    {
      title: "Export & Reporting",
      description: "Export detailed contribution reports in multiple formats (PDF, Excel, CSV). Generate tax-ready financial summaries for your records.",
      icon: "📄",
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
