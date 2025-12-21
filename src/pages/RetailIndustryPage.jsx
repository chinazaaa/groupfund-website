import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function RetailIndustryPage() {
  return (
    <>
      <SEO
        title="Retail Group Contributions - Retail Worker Birthday Funds | GroupFund"
        description="Organize group contributions for retail workers, retail teams, and retail organizations. Coordinate birthday funds, shared subscriptions, and team event contributions for retail professionals with GroupFund."
        keywords="retail group contributions, retail worker birthday funds, retail team contributions, retail organization payments, retail staff contributions, retail worker payments, retail team birthday funds"
        canonical="https://groupfund.app/industries/retail"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Retail Group Contributions</h1>
          <p className="page-subtitle">
            Organize group contributions for retail workers, retail teams, and retail organizations. Coordinate birthday funds, shared subscriptions, and team event contributions effectively.
          </p>
        </div>
      </section>

      <section className="industry-page">
        <div className="container">
          <div className="industry-content">
            <div className="industry-section">
              <h2>Why Retail Groups Need GroupFund</h2>
              <p>
                Retail workers and retail teams often need to organize contributions for various purposes. With shift work, varying schedules, and team dynamics, managing contributions can be challenging. GroupFund makes it easy to coordinate contributions for:
              </p>
              <ul className="feature-list">
                <li>Birthday contributions for retail colleagues</li>
                <li>Shared subscriptions for team benefits or services</li>
                <li>Team event contributions (holidays, celebrations, team outings)</li>
                <li>Department gift funds and recognition contributions</li>
                <li>Farewell and retirement contributions</li>
                <li>Emergency support funds for colleagues</li>
              </ul>
            </div>

            <div className="industry-section">
              <h2>Use Cases for Retail Groups</h2>
              
              <div className="use-case-card">
                <h3>🎂 Birthday Funds for Retail Workers</h3>
                <p>
                  Organize birthday contributions for retail staff across different shifts and departments. Use Birthday Groups to track upcoming birthdays, set contribution amounts, and coordinate gift giving.
                </p>
                <p><strong>Best Group Type:</strong> Birthday Groups with wishlists for coordinated gift giving</p>
              </div>

              <div className="use-case-card">
                <h3>📺 Shared Team Subscriptions</h3>
                <p>
                  Share costs for team subscriptions, training platforms, or employee benefit services. Track monthly or annual payments from team members.
                </p>
                <p><strong>Best Group Type:</strong> Subscription Groups with monthly or annual frequency</p>
              </div>

              <div className="use-case-card">
                <h3>🎉 Store Events & Celebrations</h3>
                <p>
                  Organize contributions for store parties, holiday celebrations, team building events, or department gatherings. Set deadlines and track who has contributed.
                </p>
                <p><strong>Best Group Type:</strong> General Groups with event deadlines</p>
              </div>

              <div className="use-case-card">
                <h3>🎁 Recognition & Farewell Funds</h3>
                <p>
                  Coordinate contributions for recognition gifts, farewell presents, or achievement awards. Ensure all team members can contribute fairly regardless of shift schedules.
                </p>
                <p><strong>Best Group Type:</strong> General Groups with specific deadlines</p>
              </div>
            </div>

            <div className="industry-section">
              <h2>Key Features for Retail Groups</h2>
              <div className="features-grid">
                <div className="feature-item">
                  <div className="feature-icon">📅</div>
                  <h3>Birthday Calendar</h3>
                  <p>Never miss a colleague's birthday with automatic reminders and calendar view for all team birthdays.</p>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">🔔</div>
                  <h3>Automatic Reminders</h3>
                  <p>Get reminders before deadlines so retail workers don't miss contribution deadlines, even with varying schedules.</p>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">🎁</div>
                  <h3>Birthday Wishlists</h3>
                  <p>Coordinate gift giving with wishlists to avoid duplicate gifts and ensure colleagues get what they want.</p>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">📊</div>
                  <h3>Transparency</h3>
                  <p>See who has contributed and who hasn't, maintaining fairness and accountability in retail teams.</p>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">✅</div>
                  <h3>Payment Confirmation</h3>
                  <p>Two-step confirmation ensures all contributions are verified before funds are used.</p>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">⭐</div>
                  <h3>Member Reliability</h3>
                  <p>View reliability scores to understand contribution patterns and make informed decisions.</p>
                </div>
              </div>
            </div>

            <div className="industry-section">
              <h2>Best Practices for Retail Groups</h2>
              <ul className="best-practices-list">
                <li><strong>Set Reasonable Amounts:</strong> Consider retail workers' budgets and varying income levels when setting contribution amounts.</li>
                <li><strong>Account for Shift Work:</strong> Set deadlines that work for all shifts and ensure all team members can contribute.</li>
                <li><strong>Use Automatic Reminders:</strong> Leverage GroupFund's reminder system to help busy retail workers remember deadlines.</li>
                <li><strong>Maintain Privacy:</strong> Use GroupFund's privacy features to keep contribution amounts and status visible only to group members.</li>
                <li><strong>Coordinate Gifts:</strong> Use birthday wishlists to coordinate gift giving and avoid duplicates.</li>
                <li><strong>Be Flexible:</strong> Consider that retail workers may have varying schedules and income levels when organizing contributions.</li>
              </ul>
            </div>

            <div className="industry-section">
              <h2>Getting Started</h2>
              <p>
                Ready to organize contributions for your retail team? Follow these steps:
              </p>
              <ol className="steps-list">
                <li>Determine the purpose (birthdays, subscriptions, events, etc.)</li>
                <li>Choose the appropriate group type (Birthday, Subscription, or General)</li>
                <li>Set fair contribution amounts that work for all team members</li>
                <li>Create your group in GroupFund</li>
                <li>Invite team members using invite codes</li>
                <li>Track contributions and confirm payments as they're received</li>
              </ol>
            </div>

            <div className="industry-cta">
              <h2>Start Organizing Your Retail Group Contributions</h2>
              <p>Join retail teams and organizations using GroupFund to manage contributions effectively.</p>
              <div className="cta-buttons">
                <Link to="/waitlist" className="btn btn-primary btn-large">Start Your Free Group</Link>
                <Link to="/how-it-works" className="btn btn-secondary btn-large">See How It Works</Link>
              </div>
            </div>

            <div className="related-resources">
              <h2>Related Resources</h2>
              <div className="resources-grid">
                <Link to="/group-types/birthday-groups" className="resource-card">
                  <span className="resource-icon">🎂</span>
                  <h3>Birthday Groups</h3>
                  <p>Learn about Birthday Groups for team celebrations</p>
                </Link>
                <Link to="/group-types/subscription-groups" className="resource-card">
                  <span className="resource-icon">📺</span>
                  <h3>Subscription Groups</h3>
                  <p>Manage shared subscriptions for your team</p>
                </Link>
                <Link to="/resources/using-birthday-wishlists" className="resource-card">
                  <span className="resource-icon">🎁</span>
                  <h3>Using Birthday Wishlists</h3>
                  <p>Coordinate gift giving with wishlists</p>
                </Link>
                <Link to="/resources/birthday-contribution-etiquette" className="resource-card">
                  <span className="resource-icon">🤝</span>
                  <h3>Contribution Etiquette</h3>
                  <p>Best practices for group contributions</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .industry-page {
          padding: 3rem 0;
        }

        .industry-content {
          max-width: 900px;
          margin: 0 auto;
        }

        .industry-section {
          margin-bottom: 3rem;
        }

        .industry-section h2 {
          font-size: 1.75rem;
          margin-bottom: 1rem;
          color: #111827;
        }

        .industry-section p {
          color: #4b5563;
          line-height: 1.8;
          margin-bottom: 1rem;
        }

        .feature-list {
          list-style-position: outside;
          padding-left: 1.5rem;
          color: #4b5563;
          line-height: 1.8;
        }

        .feature-list li {
          margin-bottom: 0.75rem;
        }

        .use-case-card {
          background: #f9fafb;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          padding: 1.5rem;
          margin-bottom: 1.5rem;
        }

        .use-case-card h3 {
          font-size: 1.25rem;
          margin-bottom: 0.75rem;
          color: #111827;
        }

        .use-case-card p {
          color: #4b5563;
          line-height: 1.7;
          margin-bottom: 0.5rem;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
          margin-top: 1.5rem;
        }

        .feature-item {
          background: white;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          padding: 1.5rem;
          text-align: center;
        }

        .feature-icon {
          font-size: 2.5rem;
          margin-bottom: 0.75rem;
        }

        .feature-item h3 {
          font-size: 1.1rem;
          margin-bottom: 0.5rem;
          color: #111827;
        }

        .feature-item p {
          font-size: 0.9rem;
          color: #6b7280;
          line-height: 1.6;
        }

        .best-practices-list {
          list-style-position: outside;
          padding-left: 1.5rem;
          color: #4b5563;
          line-height: 1.8;
        }

        .best-practices-list li {
          margin-bottom: 1rem;
        }

        .best-practices-list strong {
          color: #111827;
        }

        .steps-list {
          list-style-position: outside;
          padding-left: 1.5rem;
          color: #4b5563;
          line-height: 1.8;
        }

        .steps-list li {
          margin-bottom: 0.75rem;
        }

        .industry-cta {
          text-align: center;
          padding: 2.5rem;
          background: #f9fafb;
          border-radius: 12px;
          margin: 3rem 0;
        }

        .industry-cta h2 {
          font-size: 1.5rem;
          margin-bottom: 0.75rem;
          color: #111827;
        }

        .industry-cta p {
          color: #6b7280;
          margin-bottom: 1.5rem;
        }

        .cta-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .related-resources {
          margin-top: 3rem;
          padding-top: 3rem;
          border-top: 2px solid #e5e7eb;
        }

        .related-resources h2 {
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
          color: #111827;
        }

        .resources-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
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
          font-size: 1rem;
          margin-bottom: 0.5rem;
          color: #111827;
        }

        .resource-card p {
          font-size: 0.85rem;
          color: #6b7280;
          margin: 0;
        }

        @media (max-width: 768px) {
          .features-grid {
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

