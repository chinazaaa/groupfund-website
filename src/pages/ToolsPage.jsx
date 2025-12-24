import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function ToolsPage() {
  useEffect(() => {
    const webPageStructuredData = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Tools - GroupFund",
      "description": "Free tools for calculating group contributions, estimating yearly costs, and planning group contributions for birthdays, subscriptions, and events.",
      "url": "https://groupfund.app/tools"
    }
    const existingScript = document.querySelector('script[data-tools-schema]')
    if (existingScript) existingScript.remove()
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.setAttribute('data-tools-schema', 'true')
    script.textContent = JSON.stringify(webPageStructuredData)
    document.head.appendChild(script)
    return () => {
      const scriptToRemove = document.querySelector('script[data-tools-schema]')
      if (scriptToRemove) scriptToRemove.remove()
    }
  }, [])

  const tools = [
    {
      slug: 'contribution-calculator',
      title: 'Contribution Calculator',
      description: 'Calculate how much each person should contribute in your group. Perfect for splitting costs equally for birthdays, subscriptions, events, and any group contribution scenario.',
      icon: '🧮',
      category: 'Planning',
      features: [
        'Calculate per-person contribution amounts',
        'Equal split or percentage-based calculations',
        'Instant results with currency formatting',
        'Perfect for any group type'
      ]
    },
    {
      slug: 'yearly-contribution-estimator',
      title: 'Yearly Contribution Estimator',
      description: 'Calculate your total yearly contribution commitment for birthday groups, subscription groups, and events. Plan your budget and know your annual costs upfront.',
      icon: '📅',
      category: 'Planning',
      features: [
        'Estimate yearly contribution costs',
        'Works for all group types',
        'Budget planning assistance',
        'Understand your annual commitment'
      ]
    }
  ]

  return (
    <>
      <SEO
        title="Free Group Contribution Tools & Calculators | GroupFund"
        description="Free tools and calculators for organizing group contributions. Calculate per-person amounts, estimate yearly costs, and plan your group contributions effectively. Perfect for birthday groups, subscription groups, and events."
        keywords="group contribution tools, contribution calculator, yearly contribution estimator, free group tools, group payment calculator, contribution planning tools, birthday contribution calculator, subscription calculator"
        canonical="https://groupfund.app/tools"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Free Group Contribution Tools</h1>
          <p className="page-subtitle">
            Use our free calculators and tools to plan and organize your group contributions effectively. Calculate amounts, estimate costs, and make informed decisions.
          </p>
        </div>
      </section>

      <section className="tools-page">
        <div className="container">
          <div className="tools-intro">
            <p>
              Our collection of free tools helps you plan and organize group contributions with confidence. Whether you're calculating per-person amounts or estimating yearly costs, these tools make it easy to plan your group contributions.
            </p>
          </div>

          <div className="tools-grid">
            {tools.map((tool) => (
              <Link 
                key={tool.slug} 
                to={`/tools/${tool.slug}`}
                className="tool-card"
              >
                <div className="tool-icon">{tool.icon}</div>
                <div className="tool-badge">{tool.category}</div>
                <h2 className="tool-title">{tool.title}</h2>
                <p className="tool-description">{tool.description}</p>
                <ul className="tool-features">
                  {tool.features.map((feature, index) => (
                    <li key={index}>
                      <span className="feature-check">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="tool-link">
                  <span className="tool-link-text">Use Tool →</span>
                </div>
              </Link>
            ))}
          </div>

          <div className="tools-info">
            <h2>Why Use Our Tools?</h2>
            <div className="info-grid">
              <div className="info-card">
                <div className="info-icon">⚡</div>
                <h3>Instant Calculations</h3>
                <p>Get immediate results with our interactive calculators. No waiting, no complicated formulas.</p>
              </div>
              <div className="info-card">
                <div className="info-icon">💰</div>
                <h3>Free Forever</h3>
                <p>All our tools are completely free to use. No signup required, no hidden fees.</p>
              </div>
              <div className="info-card">
                <div className="info-icon">📱</div>
                <h3>Mobile Friendly</h3>
                <p>Use our tools on any device - desktop, tablet, or mobile. Works perfectly everywhere.</p>
              </div>
              <div className="info-card">
                <div className="info-icon">🎯</div>
                <h3>Accurate Results</h3>
                <p>Get precise calculations for all your group contribution planning needs.</p>
              </div>
            </div>
          </div>

          <div className="tools-cta">
            <h2>Ready to Organize Your Group?</h2>
            <p>After calculating your contribution amounts, use GroupFund to track payments, see who has paid, and get automatic reminders.</p>
            <div className="cta-buttons">
              <Link to="/waitlist" className="btn btn-primary btn-large">Start Your Free Group</Link>
              <Link to="/how-it-works" className="btn btn-secondary btn-large">See How It Works</Link>
            </div>
          </div>

          <div className="related-resources">
            <h2>Related Resources</h2>
            <div className="resources-grid">
              <Link to="/resources/calculating-group-contributions" className="resource-card">
                <span className="resource-icon">📚</span>
                <h3>Calculating Group Contributions</h3>
                <p>Complete guide to calculating contribution amounts</p>
              </Link>
              <Link to="/resources/budgeting-for-group-contributions" className="resource-card">
                <span className="resource-icon">💰</span>
                <h3>Budgeting for Contributions</h3>
                <p>Learn how to budget for group contributions</p>
              </Link>
              <Link to="/resources/choosing-the-right-contribution-amount" className="resource-card">
                <span className="resource-icon">💡</span>
                <h3>Choosing Contribution Amounts</h3>
                <p>Guide for setting fair contribution amounts</p>
              </Link>
              <Link to="/resources" className="resource-card">
                <span className="resource-icon">📖</span>
                <h3>All Resources</h3>
                <p>Browse all guides and resources</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .tools-page {
          padding: 3rem 0;
        }

        .tools-intro {
          text-align: center;
          max-width: 800px;
          margin: 0 auto 3rem;
          color: #6b7280;
          font-size: 1.1rem;
          line-height: 1.8;
        }

        .tools-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
        }

        .tool-card {
          background: white;
          border: 2px solid #e5e7eb;
          border-radius: 12px;
          padding: 2rem;
          text-decoration: none;
          color: inherit;
          transition: all 0.3s;
          display: flex;
          flex-direction: column;
        }

        .tool-card:hover {
          border-color: #667eea;
          box-shadow: 0 8px 16px rgba(102, 126, 234, 0.15);
          transform: translateY(-4px);
        }

        .tool-icon {
          font-size: 3.5rem;
          margin-bottom: 1rem;
        }

        .tool-badge {
          display: inline-block;
          padding: 0.25rem 0.75rem;
          background: #f3f4f6;
          color: #667eea;
          border-radius: 6px;
          font-size: 0.85rem;
          font-weight: 500;
          margin-bottom: 1rem;
          width: fit-content;
        }

        .tool-title {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 0.75rem;
          color: #111827;
        }

        .tool-description {
          color: #6b7280;
          line-height: 1.7;
          margin-bottom: 1.5rem;
          flex-grow: 1;
        }

        .tool-features {
          list-style: none;
          padding: 0;
          margin: 0 0 1.5rem 0;
        }

        .tool-features li {
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
          margin-bottom: 0.75rem;
          color: #4b5563;
          font-size: 0.95rem;
        }

        .feature-check {
          color: #10b981;
          font-weight: bold;
          flex-shrink: 0;
        }

        .tool-link {
          margin-top: auto;
          padding-top: 1rem;
          border-top: 1px solid #e5e7eb;
        }

        .tool-link-text {
          color: #667eea;
          font-weight: 600;
          font-size: 1rem;
        }

        .tool-card:hover .tool-link-text {
          color: #5568d3;
        }

        .tools-info {
          margin: 4rem 0;
          padding: 3rem 0;
          border-top: 2px solid #e5e7eb;
          border-bottom: 2px solid #e5e7eb;
        }

        .tools-info h2 {
          font-size: 1.75rem;
          text-align: center;
          margin-bottom: 2rem;
          color: #111827;
        }

        .info-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }

        .info-card {
          text-align: center;
          padding: 1.5rem;
        }

        .info-icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        .info-card h3 {
          font-size: 1.25rem;
          margin-bottom: 0.75rem;
          color: #111827;
        }

        .info-card p {
          color: #6b7280;
          line-height: 1.6;
        }

        .tools-cta {
          text-align: center;
          padding: 3rem 2rem;
          background: #f9fafb;
          border-radius: 12px;
          margin: 4rem 0;
        }

        .tools-cta h2 {
          font-size: 1.75rem;
          margin-bottom: 0.75rem;
          color: #111827;
        }

        .tools-cta p {
          color: #6b7280;
          margin-bottom: 2rem;
          font-size: 1.1rem;
        }

        .cta-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .related-resources {
          margin-top: 4rem;
          padding-top: 3rem;
          border-top: 2px solid #e5e7eb;
        }

        .related-resources h2 {
          font-size: 1.75rem;
          margin-bottom: 2rem;
          color: #111827;
        }

        .resources-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
        }

        .resource-card {
          display: flex;
          flex-direction: column;
          padding: 1.5rem;
          background: white;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          text-decoration: none;
          color: inherit;
          transition: all 0.3s;
        }

        .resource-card:hover {
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transform: translateY(-2px);
        }

        .resource-icon {
          font-size: 2rem;
          margin-bottom: 0.75rem;
        }

        .resource-card h3 {
          font-size: 1.1rem;
          margin-bottom: 0.5rem;
          color: #111827;
        }

        .resource-card p {
          font-size: 0.9rem;
          color: #6b7280;
          margin: 0;
        }

        @media (max-width: 768px) {
          .tools-grid {
            grid-template-columns: 1fr;
          }

          .info-grid {
            grid-template-columns: 1fr;
          }

          .resources-grid {
            grid-template-columns: 1fr;
          }

          .cta-buttons {
            flex-direction: column;
          }

          .cta-buttons .btn {
            width: 100%;
          }
        }
      `}</style>
    </>
  )
}

