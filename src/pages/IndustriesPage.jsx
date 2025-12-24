import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function IndustriesPage() {
  useEffect(() => {
    const webPageStructuredData = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Industries - GroupFund",
      "description": "GroupFund for different industries: real estate, healthcare, retail, and more. Organize group contributions for any industry.",
      "url": "https://groupfund.app/industries"
    }
    const existingScript = document.querySelector('script[data-industries-schema]')
    if (existingScript) existingScript.remove()
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.setAttribute('data-industries-schema', 'true')
    script.textContent = JSON.stringify(webPageStructuredData)
    document.head.appendChild(script)
    return () => {
      const scriptToRemove = document.querySelector('script[data-industries-schema]')
      if (scriptToRemove) scriptToRemove.remove()
    }
  }, [])

  const industries = [
    {
      slug: 'real-estate',
      title: 'Real Estate',
      description: 'Organize group contributions for property investments, real estate partnerships, and property management groups. Track payments, manage shared expenses, and coordinate contributions for real estate ventures.',
      icon: '🏢',
      keywords: 'real estate group contributions, property investment group payments, real estate contribution tracking, property group payments, real estate partnership contributions'
    },
    {
      slug: 'healthcare',
      title: 'Healthcare',
      description: 'Manage group contributions for healthcare workers, medical teams, and healthcare organizations. Organize birthday funds, subscription groups, and event contributions for medical professionals.',
      icon: '⚕️',
      keywords: 'healthcare group contributions, medical group payment tracking, healthcare worker contributions, medical team contributions, healthcare organization payments'
    },
    {
      slug: 'retail',
      title: 'Retail',
      description: 'Coordinate group contributions for retail workers, retail teams, and retail organizations. Organize birthday funds, shared subscriptions, and team event contributions for retail professionals.',
      icon: '🛍️',
      keywords: 'retail group contributions, retail worker birthday funds, retail team contributions, retail organization payments, retail staff contributions'
    }
  ]

  return (
    <>
      <SEO
        title="Industry-Specific Group Contributions | Real Estate, Healthcare, Retail | GroupFund"
        description="GroupFund for specific industries: real estate, healthcare, and retail. Organize group contributions for property investments, medical teams, retail workers, and more. Industry-specific solutions for group payments."
        keywords="industry group contributions, real estate group payments, healthcare group contributions, retail group contributions, property investment payments, medical team contributions, retail worker contributions, industry-specific contribution tracking"
        canonical="https://groupfund.app/industries"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Group Contributions by Industry</h1>
          <p className="page-subtitle">
            Industry-specific solutions for organizing group contributions. Whether you're in real estate, healthcare, retail, or other industries, GroupFund helps you manage group payments effectively.
          </p>
        </div>
      </section>

      <section className="industries-page">
        <div className="container">
          <div className="industries-intro">
            <p>
              Different industries have unique needs when it comes to organizing group contributions. From property investment groups to medical teams and retail workers, GroupFund provides tailored solutions for industry-specific contribution scenarios.
            </p>
          </div>

          <div className="industries-grid">
            {industries.map((industry) => (
              <Link 
                key={industry.slug} 
                to={`/industries/${industry.slug}`}
                className="industry-card"
              >
                <div className="industry-icon">{industry.icon}</div>
                <h2 className="industry-title">{industry.title}</h2>
                <p className="industry-description">{industry.description}</p>
                <div className="industry-link">
                  <span>Learn More →</span>
                </div>
              </Link>
            ))}
          </div>

          <div className="industries-info">
            <h2>Why Industry-Specific Solutions Matter</h2>
            <div className="info-grid">
              <div className="info-card">
                <div className="info-icon">🎯</div>
                <h3>Tailored Features</h3>
                <p>Features designed for specific industry needs and workflows.</p>
              </div>
              <div className="info-card">
                <div className="info-icon">💼</div>
                <h3>Professional Use</h3>
                <p>Professional-grade tools for business and organizational use.</p>
              </div>
              <div className="info-card">
                <div className="info-icon">📊</div>
                <h3>Industry Best Practices</h3>
                <p>Guidance based on industry-specific best practices and standards.</p>
              </div>
              <div className="info-card">
                <div className="info-icon">🤝</div>
                <h3>Team Collaboration</h3>
                <p>Designed for team environments and professional relationships.</p>
              </div>
            </div>
          </div>

          <div className="industries-cta">
            <h2>Ready to Organize Your Industry Group?</h2>
            <p>Start organizing group contributions for your industry today. Whether it's property investments, medical team contributions, or retail worker funds, GroupFund makes it easy.</p>
            <div className="cta-buttons">
              <Link to="/waitlist" className="btn btn-primary btn-large">Start Your Free Group</Link>
              <Link to="/how-it-works" className="btn btn-secondary btn-large">See How It Works</Link>
            </div>
          </div>

          <div className="related-pages">
            <h2>Related Pages</h2>
            <div className="related-grid">
              <Link to="/use-cases" className="related-card">
                <span className="related-icon">📋</span>
                <h3>Use Cases</h3>
                <p>Explore use cases for different group types</p>
              </Link>
              <Link to="/group-types" className="related-card">
                <span className="related-icon">👥</span>
                <h3>Group Types</h3>
                <p>Learn about Birthday, Subscription, and General Groups</p>
              </Link>
              <Link to="/resources" className="related-card">
                <span className="related-icon">📚</span>
                <h3>Resources</h3>
                <p>Guides and best practices for group contributions</p>
              </Link>
              <Link to="/tools" className="related-card">
                <span className="related-icon">🛠️</span>
                <h3>Tools</h3>
                <p>Free calculators and planning tools</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .industries-page {
          padding: 3rem 0;
        }

        .industries-intro {
          text-align: center;
          max-width: 800px;
          margin: 0 auto 3rem;
          color: #6b7280;
          font-size: 1.1rem;
          line-height: 1.8;
        }

        .industries-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
        }

        .industry-card {
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

        .industry-card:hover {
          border-color: #667eea;
          box-shadow: 0 8px 16px rgba(102, 126, 234, 0.15);
          transform: translateY(-4px);
        }

        .industry-icon {
          font-size: 3.5rem;
          margin-bottom: 1rem;
        }

        .industry-title {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 0.75rem;
          color: #111827;
        }

        .industry-description {
          color: #6b7280;
          line-height: 1.7;
          margin-bottom: 1.5rem;
          flex-grow: 1;
        }

        .industry-link {
          margin-top: auto;
          padding-top: 1rem;
          border-top: 1px solid #e5e7eb;
        }

        .industry-link span {
          color: #667eea;
          font-weight: 600;
          font-size: 1rem;
        }

        .industry-card:hover .industry-link span {
          color: #5568d3;
        }

        .industries-info {
          margin: 4rem 0;
          padding: 3rem 0;
          border-top: 2px solid #e5e7eb;
          border-bottom: 2px solid #e5e7eb;
        }

        .industries-info h2 {
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

        .industries-cta {
          text-align: center;
          padding: 3rem 2rem;
          background: #f9fafb;
          border-radius: 12px;
          margin: 4rem 0;
        }

        .industries-cta h2 {
          font-size: 1.75rem;
          margin-bottom: 0.75rem;
          color: #111827;
        }

        .industries-cta p {
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

        .related-pages {
          margin-top: 4rem;
          padding-top: 3rem;
          border-top: 2px solid #e5e7eb;
        }

        .related-pages h2 {
          font-size: 1.75rem;
          margin-bottom: 2rem;
          color: #111827;
        }

        .related-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
        }

        .related-card {
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

        .related-card:hover {
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transform: translateY(-2px);
        }

        .related-icon {
          font-size: 2rem;
          margin-bottom: 0.75rem;
        }

        .related-card h3 {
          font-size: 1.1rem;
          margin-bottom: 0.5rem;
          color: #111827;
        }

        .related-card p {
          font-size: 0.9rem;
          color: #6b7280;
          margin: 0;
        }

        @media (max-width: 768px) {
          .industries-grid {
            grid-template-columns: 1fr;
          }

          .info-grid {
            grid-template-columns: 1fr;
          }

          .related-grid {
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

