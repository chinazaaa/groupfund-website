import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function ComingSoonFeaturesPage() {
  const pipelineFeatures = [
    {
      title: "Mobile App (iOS & Android)",
      description: "Native mobile applications for iOS and Android devices. Manage your group contributions on the go with a beautiful, intuitive mobile experience.",
      icon: "📱",
      status: "In Development",
      statusColor: "blue"
    },
    {
      title: "In-App Payment Processing",
      description: "Process payments directly within the app using secure payment gateways. Support for cards, bank transfers, and mobile money.",
      icon: "💳",
      status: "Planned",
      statusColor: "purple"
    },
    {
      title: "Group Analytics Dashboard",
      description: "Comprehensive analytics and insights for group admins. Track contribution trends, member engagement, and financial summaries.",
      icon: "📊",
      status: "Planned",
      statusColor: "purple"
    },
    {
      title: "Multi-Event Support",
      description: "Expand beyond birthdays to support other group events like weddings, graduations, anniversaries, and special occasions.",
      icon: "🎉",
      status: "Planned",
      statusColor: "purple"
    },
    {
      title: "Recurring Contributions",
      description: "Set up automatic recurring contributions for members who want to contribute monthly or quarterly. Simplify long-term group management.",
      icon: "🔄",
      status: "Planned",
      statusColor: "purple"
    },
    {
      title: "Group Chat Integration",
      description: "Built-in group chat functionality to keep all communication in one place. Discuss contributions, share updates, and coordinate seamlessly.",
      icon: "💬",
      status: "Planned",
      statusColor: "purple"
    },
    {
      title: "Automated Payouts",
      description: "Automatically distribute collected funds to birthday recipients. Set up bank accounts and enable one-click payouts.",
      icon: "⚡",
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
    },
    {
      title: "Advanced Notification Settings",
      description: "Customize notification preferences for each group. Choose channels (email, SMS, push), frequency, and notification types.",
      icon: "🔔",
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
        title="Coming Soon Features - GroupFund Roadmap & Pipeline"
        description="Explore GroupFund's upcoming features and product roadmap. See what's in development: mobile apps, in-app payments, analytics, recurring contributions, and more exciting features coming soon."
        keywords="groupfund roadmap, coming soon features, product pipeline, birthday app features, upcoming features, group contribution app updates"
        canonical="https://groupfund.app/coming-soon-features"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Coming Soon Features</h1>
          <p className="page-subtitle">
            We're constantly working to make GroupFund better. Here's what's coming next in our product pipeline.
          </p>
        </div>
      </section>

      <section className="features-page pipeline-page">
        <div className="container">
          <div className="pipeline-intro">
            <p className="pipeline-description">
              Our team is hard at work building new features to enhance your group contribution experience. 
              Check back regularly as we continue to add powerful capabilities to GroupFund.
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
            <h2>Want to Request a Feature?</h2>
            <p>Have an idea for a feature you'd like to see? We'd love to hear from you!</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary btn-large">Contact Us</Link>
              <Link to="/features" className="btn btn-secondary btn-large">View Current Features</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

