import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function HolidayContributionsPage() {
  return (
    <>
      <SEO
        title="Holiday Group Contributions - Christmas & Holiday Season Payments | GroupFund"
        description="Organize group contributions during holiday seasons. Manage Christmas contributions, holiday gift funds, and seasonal celebrations with ease. Perfect for families, workplaces, and communities during holidays."
        keywords="holiday group contributions, Christmas group payments, holiday season contributions, holiday gift funds, seasonal group payments, Christmas contributions, holiday celebration funds, festive season payments"
        canonical="https://groupfund.app/seasonal/holiday-contributions"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Holiday Group Contributions</h1>
          <p className="page-subtitle">
            Organize group contributions during holiday seasons. Manage Christmas contributions, holiday gift funds, and seasonal celebrations with ease. Perfect for families, workplaces, and communities.
          </p>
        </div>
      </section>

      <section className="industry-page">
        <div className="container">
          <div className="industry-content">
            <div className="industry-section">
              <h2>Why Holiday Contributions Need Special Attention</h2>
              <p>
                Holiday seasons bring increased expenses, busy schedules, and multiple celebrations. Organizing group contributions during holidays can be particularly challenging due to:
              </p>
              <ul className="feature-list">
                <li>Multiple celebrations and gift-giving occasions</li>
                <li>Increased expenses during holiday seasons</li>
                <li>Busy schedules and time constraints</li>
                <li>Coordinating gifts for multiple people</li>
                <li>Managing contributions across different holidays (Christmas, New Year, etc.)</li>
                <li>Budgeting for increased holiday spending</li>
              </ul>
            </div>

            <div className="industry-section">
              <h2>Holiday Contribution Use Cases</h2>
              
              <div className="use-case-card">
                <h3>🎄 Christmas Gift Funds</h3>
                <p>
                  Organize Christmas contributions for family members, colleagues, or community members. Set contribution amounts, track who has paid, and coordinate gift purchases.
                </p>
                <p><strong>Best Group Type:</strong> General Groups with Christmas deadline, or Birthday Groups if organizing birthday contributions during holidays</p>
              </div>

              <div className="use-case-card">
                <h3>🎁 Holiday Party Contributions</h3>
                <p>
                  Coordinate contributions for holiday parties, office celebrations, or community events. Set deadlines before the event and track all contributions.
                </p>
                <p><strong>Best Group Type:</strong> General Groups with party date as deadline</p>
              </div>

              <div className="use-case-card">
                <h3>🎉 New Year Celebrations</h3>
                <p>
                  Organize contributions for New Year parties, celebrations, or events. Track contributions and ensure all funds are collected before the celebration.
                </p>
                <p><strong>Best Group Type:</strong> General Groups with New Year deadline</p>
              </div>

              <div className="use-case-card">
                <h3>🎅 Secret Santa & Gift Exchanges</h3>
                <p>
                  Coordinate Secret Santa contributions or gift exchange funds. Set contribution amounts, track payments, and ensure everyone participates fairly.
                </p>
                <p><strong>Best Group Type:</strong> General Groups with gift exchange deadline</p>
              </div>

              <div className="use-case-card">
                <h3>🏠 Holiday Decorations & Events</h3>
                <p>
                  Organize contributions for holiday decorations, community events, or seasonal activities. Track who has contributed and manage funds for holiday-related expenses.
                </p>
                <p><strong>Best Group Type:</strong> General Groups with specific event deadlines</p>
              </div>
            </div>

            <div className="industry-section">
              <h2>Key Features for Holiday Contributions</h2>
              <div className="features-grid">
                <div className="feature-item">
                  <div className="feature-icon">📅</div>
                  <h3>Deadline Management</h3>
                  <p>Set deadlines tied to specific holidays or events to ensure contributions are collected on time.</p>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">🔔</div>
                  <h3>Automatic Reminders</h3>
                  <p>Get reminders before holiday deadlines so busy people don't miss contribution dates during the festive season.</p>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">🎁</div>
                  <h3>Gift Coordination</h3>
                  <p>Use wishlists and contribution tracking to coordinate gift giving and avoid duplicates.</p>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">📊</div>
                  <h3>Budget Tracking</h3>
                  <p>Track holiday contributions and manage budgets for increased seasonal spending.</p>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">✅</div>
                  <h3>Payment Confirmation</h3>
                  <p>Two-step confirmation ensures all holiday contributions are verified before funds are used.</p>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">💰</div>
                  <h3>Multiple Groups</h3>
                  <p>Create separate groups for different holidays or events to keep everything organized.</p>
                </div>
              </div>
            </div>

            <div className="industry-section">
              <h2>Best Practices for Holiday Contributions</h2>
              <ul className="best-practices-list">
                <li><strong>Plan Early:</strong> Set up holiday contribution groups well in advance to give people time to contribute.</li>
                <li><strong>Set Clear Deadlines:</strong> Tie deadlines to specific dates (e.g., "December 15th for Christmas gifts") to ensure timely collection.</li>
                <li><strong>Consider Budgets:</strong> Be mindful that people may have increased expenses during holidays - set reasonable contribution amounts.</li>
                <li><strong>Use Reminders:</strong> Leverage automatic reminders to help people remember deadlines during busy holiday seasons.</li>
                <li><strong>Coordinate Gifts:</strong> Use wishlists or group communication to coordinate gift giving and avoid duplicates.</li>
                <li><strong>Be Flexible:</strong> Understand that holiday schedules can be unpredictable - allow some flexibility when possible.</li>
                <li><strong>Track Everything:</strong> Keep detailed records of all holiday contributions for transparency and accountability.</li>
              </ul>
            </div>

            <div className="industry-section">
              <h2>Getting Started with Holiday Contributions</h2>
              <p>
                Ready to organize contributions for the holiday season? Follow these steps:
              </p>
              <ol className="steps-list">
                <li>Determine the purpose (Christmas gifts, party, decorations, etc.)</li>
                <li>Set a deadline that gives people enough time to contribute</li>
                <li>Choose fair contribution amounts that work for everyone's holiday budget</li>
                <li>Create a General Group in GroupFund with the holiday deadline</li>
                <li>Invite all participants using invite codes</li>
                <li>Track contributions and confirm payments as they're received</li>
                <li>Use reminders to ensure everyone contributes before the deadline</li>
              </ol>
            </div>

            <div className="industry-cta">
              <h2>Start Organizing Your Holiday Contributions</h2>
              <p>Join families, workplaces, and communities using GroupFund to manage holiday contributions effectively.</p>
              <div className="cta-buttons">
                <Link to="/waitlist" className="btn btn-primary btn-large">Start Your Free Group</Link>
                <Link to="/how-it-works" className="btn btn-secondary btn-large">See How It Works</Link>
              </div>
            </div>

            <div className="related-resources">
              <h2>Related Resources</h2>
              <div className="resources-grid">
                <Link to="/group-types/general-groups" className="resource-card">
                  <span className="resource-icon">👥</span>
                  <h3>General Groups</h3>
                  <p>Learn about General Groups for events and celebrations</p>
                </Link>
                <Link to="/resources/budgeting-for-group-contributions" className="resource-card">
                  <span className="resource-icon">💰</span>
                  <h3>Budgeting for Contributions</h3>
                  <p>Plan and budget for group contributions</p>
                </Link>
                <Link to="/tools/yearly-contribution-estimator" className="resource-card">
                  <span className="resource-icon">📅</span>
                  <h3>Yearly Contribution Estimator</h3>
                  <p>Estimate your yearly contribution costs</p>
                </Link>
                <Link to="/resources/choosing-the-right-contribution-amount" className="resource-card">
                  <span className="resource-icon">💡</span>
                  <h3>Choosing Contribution Amounts</h3>
                  <p>Guide for setting fair contribution amounts</p>
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

