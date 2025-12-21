import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function BestPracticesPage() {
  const bestPractices = [
    {
      slug: 'managing-large-groups',
      title: 'Managing Large Groups',
      description: 'Tips and strategies for organizing group contributions in large groups like churches, schools, and organizations. Learn how to scale your contribution groups effectively and maintain organization as you grow.',
      icon: '👥',
      keywords: 'managing large contribution groups, big group payment management, scaling contribution groups, large group organization'
    },
    {
      slug: 'international-groups',
      title: 'International Groups',
      description: 'Best practices for organizing group contributions across borders. Learn how to handle multi-currency payments, time zones, and cross-border group management effectively.',
      icon: '🌍',
      keywords: 'international group contributions, cross-border group payments, multi-currency group management, international payment tracking'
    },
    {
      slug: 'setting-contribution-amounts',
      title: 'Setting Contribution Amounts',
      description: 'Learn how to set fair and effective contribution amounts for your group. Factors to consider, examples by group type, and tips for choosing amounts that work for everyone.',
      icon: '💰',
      keywords: 'how to set contribution amounts, fair contribution amounts, determining group payment amounts, contribution amount guidelines'
    },
    {
      slug: 'payment-confirmation',
      title: 'Payment Confirmation',
      description: 'Best practices for the two-step payment confirmation process. Learn how to verify contributions accurately and maintain transparency in your group.',
      icon: '✅',
      keywords: 'payment confirmation best practices, contribution verification, payment tracking accuracy, two-step confirmation'
    },
    {
      slug: 'member-reliability',
      title: 'Member Reliability',
      description: 'Understand how to use member reliability scores effectively. Learn how to evaluate potential members and maintain group quality through reliability metrics.',
      icon: '⭐',
      keywords: 'member reliability best practices, evaluating group members, reliability score usage, group quality management'
    },
    {
      slug: 'group-health',
      title: 'Group Health Management',
      description: 'Learn how to maintain and improve group health scores. Strategies for keeping your group active, compliant, and healthy over time.',
      icon: '📈',
      keywords: 'group health management, improving group health scores, maintaining group compliance, group performance optimization'
    }
  ]

  return (
    <>
      <SEO
        title="Group Contribution Best Practices - Tips & Guidelines | GroupFund"
        description="Learn best practices for organizing group contributions effectively. Tips for managing large groups, international groups, setting amounts, payment confirmation, member reliability, and group health management."
        keywords="group contribution best practices, contribution management tips, group payment best practices, contribution guidelines, group organization best practices, payment tracking best practices"
        canonical="https://groupfund.app/best-practices"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Group Contribution Best Practices</h1>
          <p className="page-subtitle">
            Learn proven strategies and best practices for organizing group contributions effectively. From managing large groups to international payments, discover tips that help you maintain successful contribution groups.
          </p>
        </div>
      </section>

      <section className="best-practices-page">
        <div className="container">
          <div className="best-practices-intro">
            <p>
              Successful group contributions require more than just tracking payments. These best practices help you organize contributions effectively, maintain group harmony, and ensure long-term success for your contribution groups.
            </p>
          </div>

          <div className="best-practices-grid">
            {bestPractices.map((practice) => (
              <Link 
                key={practice.slug} 
                to={`/best-practices/${practice.slug}`}
                className="practice-card"
              >
                <div className="practice-icon">{practice.icon}</div>
                <h2 className="practice-title">{practice.title}</h2>
                <p className="practice-description">{practice.description}</p>
                <div className="practice-link">
                  <span>Read Best Practices →</span>
                </div>
              </Link>
            ))}
          </div>

          <div className="best-practices-info">
            <h2>Why Best Practices Matter</h2>
            <div className="info-grid">
              <div className="info-card">
                <div className="info-icon">🎯</div>
                <h3>Proven Strategies</h3>
                <p>Learn from successful groups and avoid common pitfalls that lead to group failure.</p>
              </div>
              <div className="info-card">
                <div className="info-icon">🤝</div>
                <h3>Group Harmony</h3>
                <p>Maintain positive relationships and avoid conflicts through fair and transparent practices.</p>
              </div>
              <div className="info-card">
                <div className="info-icon">📊</div>
                <h3>Better Results</h3>
                <p>Improve contribution rates, reduce late payments, and maintain active group participation.</p>
              </div>
              <div className="info-card">
                <div className="info-icon">⚡</div>
                <h3>Time Savings</h3>
                <p>Save time and reduce stress by following proven methods that work.</p>
              </div>
            </div>
          </div>

          <div className="best-practices-cta">
            <h2>Ready to Apply These Best Practices?</h2>
            <p>Start organizing your group contributions with GroupFund and apply these best practices to ensure success.</p>
            <div className="cta-buttons">
              <Link to="/waitlist" className="btn btn-primary btn-large">Start Your Free Group</Link>
              <Link to="/how-it-works" className="btn btn-secondary btn-large">See How It Works</Link>
            </div>
          </div>

          <div className="related-pages">
            <h2>Related Resources</h2>
            <div className="related-grid">
              <Link to="/resources" className="related-card">
                <span className="related-icon">📚</span>
                <h3>Resources & Guides</h3>
                <p>Complete guides and tutorials for group contributions</p>
              </Link>
              <Link to="/resources/birthday-contribution-etiquette" className="related-card">
                <span className="related-icon">🤝</span>
                <h3>Contribution Etiquette</h3>
                <p>Learn the dos and don'ts of group contributions</p>
              </Link>
              <Link to="/resources/avoiding-birthday-contribution-mistakes" className="related-card">
                <span className="related-icon">⚠️</span>
                <h3>Avoiding Mistakes</h3>
                <p>Common mistakes and how to avoid them</p>
              </Link>
              <Link to="/faq" className="related-card">
                <span className="related-icon">❓</span>
                <h3>FAQ</h3>
                <p>Frequently asked questions about GroupFund</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .best-practices-page {
          padding: 3rem 0;
        }

        .best-practices-intro {
          text-align: center;
          max-width: 800px;
          margin: 0 auto 3rem;
          color: #6b7280;
          font-size: 1.1rem;
          line-height: 1.8;
        }

        .best-practices-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
        }

        .practice-card {
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

        .practice-card:hover {
          border-color: #667eea;
          box-shadow: 0 8px 16px rgba(102, 126, 234, 0.15);
          transform: translateY(-4px);
        }

        .practice-icon {
          font-size: 3.5rem;
          margin-bottom: 1rem;
        }

        .practice-title {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 0.75rem;
          color: #111827;
        }

        .practice-description {
          color: #6b7280;
          line-height: 1.7;
          margin-bottom: 1.5rem;
          flex-grow: 1;
        }

        .practice-link {
          margin-top: auto;
          padding-top: 1rem;
          border-top: 1px solid #e5e7eb;
        }

        .practice-link span {
          color: #667eea;
          font-weight: 600;
          font-size: 1rem;
        }

        .practice-card:hover .practice-link span {
          color: #5568d3;
        }

        .best-practices-info {
          margin: 4rem 0;
          padding: 3rem 0;
          border-top: 2px solid #e5e7eb;
          border-bottom: 2px solid #e5e7eb;
        }

        .best-practices-info h2 {
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

        .best-practices-cta {
          text-align: center;
          padding: 3rem 2rem;
          background: #f9fafb;
          border-radius: 12px;
          margin: 4rem 0;
        }

        .best-practices-cta h2 {
          font-size: 1.75rem;
          margin-bottom: 0.75rem;
          color: #111827;
        }

        .best-practices-cta p {
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
          .best-practices-grid {
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

