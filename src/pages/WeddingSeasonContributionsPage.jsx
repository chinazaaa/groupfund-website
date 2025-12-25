import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function WeddingSeasonContributionsPage() {
  return (
    <>
      <SEO
        title="Wedding Season Group Contributions - Bridal Party & Wedding Payments | GroupFund"
        description="Organize group contributions for weddings, bridal parties, and wedding-related events. Coordinate bridal shower contributions, wedding gift funds, and celebration expenses with GroupFund."
        keywords="wedding group contributions, wedding season payments, bridal party contributions, wedding gift funds, bridal shower contributions, wedding celebration funds, wedding event payments"
        canonical="https://www.groupfund.app/seasonal/wedding-season-contributions"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Wedding Season Contributions</h1>
          <p className="page-subtitle">
            Organize group contributions for weddings, bridal parties, and wedding-related events. Coordinate bridal shower contributions, wedding gift funds, and celebration expenses effectively.
          </p>
        </div>
      </section>

      <section className="industry-page">
        <div className="container">
          <div className="industry-content">
            <div className="industry-section">
              <h2>Why Wedding Contributions Need Organization</h2>
              <p>
                Wedding season brings multiple events and expenses that often require group contributions. Organizing contributions for weddings can be complex due to:
              </p>
              <ul className="feature-list">
                <li>Multiple wedding-related events (bridal shower, bachelorette, wedding)</li>
                <li>Bridal party contributions and expenses</li>
                <li>Wedding gift funds and registry contributions</li>
                <li>Event planning and celebration costs</li>
                <li>Coordinating contributions from multiple groups (family, friends, colleagues)</li>
                <li>Managing deadlines tied to specific wedding dates</li>
              </ul>
            </div>

            <div className="industry-section">
              <h2>Wedding Contribution Use Cases</h2>
              
              <div className="use-case-card">
                <h3>💒 Wedding Gift Funds</h3>
                <p>
                  Organize contributions for wedding gifts, registry items, or cash gifts. Coordinate contributions from family, friends, or colleagues and track who has contributed.
                </p>
                <p><strong>Best Group Type:</strong> General Groups with wedding date as deadline</p>
              </div>

              <div className="use-case-card">
                <h3>🎉 Bridal Shower Contributions</h3>
                <p>
                  Coordinate contributions for bridal shower gifts, decorations, or event expenses. Set deadlines before the shower and track all contributions.
                </p>
                <p><strong>Best Group Type:</strong> General Groups with bridal shower date as deadline</p>
              </div>

              <div className="use-case-card">
                <h3>👰 Bridal Party Expenses</h3>
                <p>
                  Organize contributions for bridal party expenses like dresses, accessories, or bachelorette party costs. Track contributions from all bridal party members.
                </p>
                <p><strong>Best Group Type:</strong> General Groups with specific expense deadlines</p>
              </div>

              <div className="use-case-card">
                <h3>🎊 Wedding Celebration Contributions</h3>
                <p>
                  Coordinate contributions for wedding celebration expenses, decorations, or special touches. Track contributions and ensure all funds are collected before the wedding.
                </p>
                <p><strong>Best Group Type:</strong> General Groups with wedding date as deadline</p>
              </div>

              <div className="use-case-card">
                <h3>💐 Bachelorette/Bachelor Party Funds</h3>
                <p>
                  Organize contributions for bachelorette or bachelor party expenses. Set contribution amounts, track payments, and coordinate party planning.
                </p>
                <p><strong>Best Group Type:</strong> General Groups with party date as deadline</p>
              </div>

              <div className="use-case-card">
                <h3>🎁 Registry & Gift Coordination</h3>
                <p>
                  Coordinate contributions for wedding registry items or cash gifts. Use wishlists or contribution tracking to avoid duplicate gifts and ensure the couple gets what they want.
                </p>
                <p><strong>Best Group Type:</strong> General Groups with wedding date as deadline</p>
              </div>
            </div>

            <div className="industry-section">
              <h2>Key Features for Wedding Contributions</h2>
              <div className="features-grid">
                <div className="feature-item">
                  <div className="feature-icon">📅</div>
                  <h3>Deadline Management</h3>
                  <p>Set deadlines tied to specific wedding dates, bridal shower dates, or event dates to ensure timely collection.</p>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">🔔</div>
                  <h3>Automatic Reminders</h3>
                  <p>Get reminders before wedding-related deadlines so busy people don't miss contribution dates.</p>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">🎁</div>
                  <h3>Gift Coordination</h3>
                  <p>Use contribution tracking to coordinate gifts and avoid duplicates from different groups.</p>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">📊</div>
                  <h3>Transparency</h3>
                  <p>See who has contributed and who hasn't, maintaining fairness and accountability in wedding groups.</p>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">✅</div>
                  <h3>Payment Confirmation</h3>
                  <p>Two-step confirmation ensures all wedding contributions are verified before funds are used.</p>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">👥</div>
                  <h3>Multiple Groups</h3>
                  <p>Create separate groups for different wedding events (shower, bachelorette, wedding) to keep everything organized.</p>
                </div>
              </div>
            </div>

            <div className="industry-section">
              <h2>Best Practices for Wedding Contributions</h2>
              <ul className="best-practices-list">
                <li><strong>Plan Early:</strong> Set up wedding contribution groups well in advance to give people time to contribute.</li>
                <li><strong>Set Clear Deadlines:</strong> Tie deadlines to specific dates (bridal shower date, wedding date, etc.) to ensure timely collection.</li>
                <li><strong>Coordinate with Couple:</strong> Work with the couple to determine contribution needs and preferred gift options.</li>
                <li><strong>Use Separate Groups:</strong> Create separate groups for different events (shower, bachelorette, wedding) to keep everything organized.</li>
                <li><strong>Communicate Clearly:</strong> Use GroupFund's transparency features to keep all contributors informed about contribution status.</li>
                <li><strong>Consider Budgets:</strong> Set reasonable contribution amounts that work for all participants.</li>
                <li><strong>Track Everything:</strong> Keep detailed records of all wedding contributions for transparency and thank-you notes.</li>
              </ul>
            </div>

            <div className="industry-section">
              <h2>Getting Started with Wedding Contributions</h2>
              <p>
                Ready to organize contributions for wedding season? Follow these steps:
              </p>
              <ol className="steps-list">
                <li>Determine the purpose (wedding gift, bridal shower, bachelorette party, etc.)</li>
                <li>Set a deadline that gives people enough time to contribute before the event</li>
                <li>Choose fair contribution amounts that work for all participants</li>
                <li>Create a General Group in GroupFund with the event date as deadline</li>
                <li>Invite all participants (family, friends, bridal party, etc.) using invite codes</li>
                <li>Track contributions and confirm payments as they're received</li>
                <li>Use reminders to ensure everyone contributes before the deadline</li>
              </ol>
            </div>

            <div className="industry-cta">
              <h2>Start Organizing Your Wedding Contributions</h2>
              <p>Join families, friends, and bridal parties using GroupFund to manage wedding contributions effectively.</p>
              <div className="cta-buttons">
                <Link to="/waitlist" className="btn btn-primary btn-large">Start Your Free Group</Link>
                <Link to="/how-it-works" className="btn btn-secondary btn-large">See How It Works</Link>
              </div>
            </div>

            <div className="related-resources">
              <h2>Related Resources</h2>
              <div className="resources-grid">
                <Link to="/use-cases/weddings" className="resource-card">
                  <span className="resource-icon">💒</span>
                  <h3>For Weddings</h3>
                  <p>Learn about GroupFund for weddings and events</p>
                </Link>
                <Link to="/group-types/general-groups" className="resource-card">
                  <span className="resource-icon">👥</span>
                  <h3>General Groups</h3>
                  <p>Learn about General Groups for events and celebrations</p>
                </Link>
                <Link to="/resources/managing-event-contributions" className="resource-card">
                  <span className="resource-icon">🎊</span>
                  <h3>Managing Event Contributions</h3>
                  <p>Complete guide to organizing event contributions</p>
                </Link>
                <Link to="/resources/creating-general-groups-for-events" className="resource-card">
                  <span className="resource-icon">📋</span>
                  <h3>Creating General Groups</h3>
                  <p>Step-by-step guide for event groups</p>
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

