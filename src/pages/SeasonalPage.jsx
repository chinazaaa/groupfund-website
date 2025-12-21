import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function SeasonalPage() {
  const seasonalContent = [
    {
      slug: 'holiday-contributions',
      title: 'Holiday Contributions',
      description: 'Organize group contributions during holiday seasons. Manage Christmas contributions, holiday gift funds, and seasonal celebrations with ease. Perfect for families, workplaces, and communities.',
      icon: '🎄',
      keywords: 'holiday group contributions, Christmas group payments, holiday season contributions, holiday gift funds, seasonal group payments'
    },
    {
      slug: 'back-to-school-contributions',
      title: 'Back to School Contributions',
      description: 'Coordinate group contributions for back-to-school expenses, school supplies, teacher gifts, and education-related costs. Perfect for parent groups, PTA organizations, and school communities.',
      icon: '📚',
      keywords: 'school group contributions, back to school payments, education group contributions, school supply contributions, teacher gift funds'
    },
    {
      slug: 'wedding-season-contributions',
      title: 'Wedding Season Contributions',
      description: 'Organize group contributions for weddings, bridal parties, and wedding-related events. Coordinate bridal shower contributions, wedding gift funds, and celebration expenses.',
      icon: '💒',
      keywords: 'wedding group contributions, wedding season payments, bridal party contributions, wedding gift funds, bridal shower contributions'
    }
  ]

  return (
    <>
      <SEO
        title="Seasonal Group Contributions - Holiday, Back to School, Wedding Season | GroupFund"
        description="Organize group contributions for seasonal events: holidays, back-to-school, wedding season, and more. Manage Christmas contributions, school payments, wedding funds, and seasonal celebrations with GroupFund."
        keywords="seasonal group contributions, holiday contributions, Christmas group payments, back to school contributions, wedding season payments, seasonal gift funds, holiday season payments"
        canonical="https://groupfund.app/seasonal"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Seasonal Group Contributions</h1>
          <p className="page-subtitle">
            Organize group contributions for seasonal events and celebrations. Whether it's holidays, back-to-school, wedding season, or other special times, GroupFund helps you manage seasonal contributions effectively.
          </p>
        </div>
      </section>

      <section className="seasonal-page">
        <div className="container">
          <div className="seasonal-intro">
            <p>
              Different seasons bring unique opportunities and challenges for organizing group contributions. From holiday celebrations to back-to-school expenses and wedding seasons, GroupFund provides solutions tailored to seasonal contribution needs.
            </p>
          </div>

          <div className="seasonal-grid">
            {seasonalContent.map((seasonal) => (
              <Link 
                key={seasonal.slug} 
                to={`/seasonal/${seasonal.slug}`}
                className="seasonal-card"
              >
                <div className="seasonal-icon">{seasonal.icon}</div>
                <h2 className="seasonal-title">{seasonal.title}</h2>
                <p className="seasonal-description">{seasonal.description}</p>
                <div className="seasonal-link">
                  <span>Learn More →</span>
                </div>
              </Link>
            ))}
          </div>

          <div className="seasonal-info">
            <h2>Why Seasonal Contributions Matter</h2>
            <div className="info-grid">
              <div className="info-card">
                <div className="info-icon">📅</div>
                <h3>Timely Planning</h3>
                <p>Plan ahead for seasonal expenses and celebrations with deadline management and reminders.</p>
              </div>
              <div className="info-card">
                <div className="info-icon">🎁</div>
                <h3>Gift Coordination</h3>
                <p>Coordinate gift giving during holidays and special seasons to avoid duplicates and ensure everyone gets what they want.</p>
              </div>
              <div className="info-card">
                <div className="info-icon">💰</div>
                <h3>Budget Management</h3>
                <p>Manage seasonal budgets effectively with contribution tracking and planning tools.</p>
              </div>
              <div className="info-card">
                <div className="info-icon">🤝</div>
                <h3>Fair Contributions</h3>
                <p>Ensure fair and transparent contributions during busy seasonal periods.</p>
              </div>
            </div>
          </div>

          <div className="seasonal-cta">
            <h2>Ready to Organize Your Seasonal Contributions?</h2>
            <p>Start organizing group contributions for holidays, back-to-school, wedding season, and other special times. GroupFund makes seasonal contribution management easy.</p>
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
        .seasonal-page {
          padding: 3rem 0;
        }

        .seasonal-intro {
          text-align: center;
          max-width: 800px;
          margin: 0 auto 3rem;
          color: #6b7280;
          font-size: 1.1rem;
          line-height: 1.8;
        }

        .seasonal-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
        }

        .seasonal-card {
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

        .seasonal-card:hover {
          border-color: #667eea;
          box-shadow: 0 8px 16px rgba(102, 126, 234, 0.15);
          transform: translateY(-4px);
        }

        .seasonal-icon {
          font-size: 3.5rem;
          margin-bottom: 1rem;
        }

        .seasonal-title {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 0.75rem;
          color: #111827;
        }

        .seasonal-description {
          color: #6b7280;
          line-height: 1.7;
          margin-bottom: 1.5rem;
          flex-grow: 1;
        }

        .seasonal-link {
          margin-top: auto;
          padding-top: 1rem;
          border-top: 1px solid #e5e7eb;
        }

        .seasonal-link span {
          color: #667eea;
          font-weight: 600;
          font-size: 1rem;
        }

        .seasonal-card:hover .seasonal-link span {
          color: #5568d3;
        }

        .seasonal-info {
          margin: 4rem 0;
          padding: 3rem 0;
          border-top: 2px solid #e5e7eb;
          border-bottom: 2px solid #e5e7eb;
        }

        .seasonal-info h2 {
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

        .seasonal-cta {
          text-align: center;
          padding: 3rem 2rem;
          background: #f9fafb;
          border-radius: 12px;
          margin: 4rem 0;
        }

        .seasonal-cta h2 {
          font-size: 1.75rem;
          margin-bottom: 0.75rem;
          color: #111827;
        }

        .seasonal-cta p {
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
          .seasonal-grid {
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

