import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function ThanksgivingContributionsPage() {
  return (
    <>
      <SEO
        title="Thanksgiving Group Contributions - Dinners, Gifts & Gatherings | GroupFund"
        description="Organize group contributions for Thanksgiving celebrations. Manage Thanksgiving dinner costs, gift funds, and family or workplace gathering expenses with GroupFund."
        keywords="thanksgiving group contributions, thanksgiving dinner funds, thanksgiving gift funds, workplace thanksgiving gifts, family thanksgiving gathering contributions, holiday meal contributions"
        canonical="https://www.groupfund.app/seasonal/thanksgiving-contributions"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Thanksgiving Contributions</h1>
          <p className="page-subtitle">
            Organize group contributions for Thanksgiving celebrations. Manage Thanksgiving dinner costs, gift funds, and family or workplace gatherings with ease.
          </p>
        </div>
      </section>

      <section className="industry-page">
        <div className="container">
          <div className="industry-content">
            <div className="industry-section">
              <h2>Why Thanksgiving Contributions Need Organization</h2>
              <p>
                Thanksgiving often brings together large groups of family, friends, and colleagues for shared meals, travel, and appreciation gifts. Without a clear system, splitting the cost of dinners, groceries, and thank-you gifts can quickly become confusing and unfair.
              </p>
              <ul className="feature-list">
                <li>Shared expenses for Thanksgiving dinners, potlucks, and long-weekend gatherings</li>
                <li>Group gifts or appreciation for hosts, employees, and teams</li>
                <li>Travel, accommodation, and activity costs split across multiple family members</li>
                <li>Multiple contributors spread across cities, time zones, or remote teams</li>
                <li>Events and meals across the Thanksgiving weekend, not just one day</li>
                <li>Deadlines tied to grocery runs, catering orders, travel bookings, and office events</li>
              </ul>
            </div>

            <div className="industry-section">
              <h2>Thanksgiving Contribution Use Cases</h2>

              <div className="use-case-card">
                <h3>🦃 Thanksgiving Dinner & Potluck Funds</h3>
                <p>
                  Organize contributions for Thanksgiving dinners, potlucks, and shared meals. Split costs for turkey, sides, desserts, drinks, and tableware so hosting is a joint effort instead of a solo expense.
                </p>
                <p><strong>Best Group Type:</strong> General Groups with dinner date as deadline</p>
              </div>

              <div className="use-case-card">
                <h3>🎁 Host & Family Gift Funds</h3>
                <p>
                  Coordinate group gifts for hosts, parents, grandparents, or relatives opening their homes. Pool contributions for gift cards, hampers, or meaningful thank-you presents from the whole group.
                </p>
                <p><strong>Best Group Type:</strong> General Groups with visit or gift-giving date as deadline</p>
              </div>

              <div className="use-case-card">
                <h3>🏢 Workplace Thanksgiving Appreciation</h3>
                <p>
                  Organize contributions for employee Thanksgiving gifts, team lunches, or shared experiences. Make it easy for managers and colleagues to pool budgets for food, gift cards, or charity donations in honour of the team.
                </p>
                <p><strong>Best Group Type:</strong> General Groups with office celebration or distribution date as deadline</p>
              </div>

              <div className="use-case-card">
                <h3>🏡 Family Travel & Gathering Costs</h3>
                <p>
                  Collect contributions for shared accommodation, road-trip costs, or activities when families meet in one place for Thanksgiving. Keep track of who has paid their share for rentals, fuel, and shared outings.
                </p>
                <p><strong>Best Group Type:</strong> General Groups with travel or arrival date as deadline</p>
              </div>

              <div className="use-case-card">
                <h3>🤝 Charity & Community Giving</h3>
                <p>
                  Coordinate contributions for food drives, community meals, or charitable donations as part of Thanksgiving traditions. Pool funds from teams, families, or friend groups to support local causes together.
                </p>
                <p><strong>Best Group Type:</strong> General Groups with campaign or donation date as deadline</p>
              </div>

              <div className="use-case-card">
                <h3>🍰 Desserts, Extras & Add-Ons</h3>
                <p>
                  Create smaller side funds for desserts, drinks, special dietary options, or last-minute extras. Let guests contribute directly instead of juggling receipts and IOUs after the meal.
                </p>
                <p><strong>Best Group Type:</strong> General Groups with shopping date as deadline</p>
              </div>
            </div>

            <div className="industry-section">
              <h2>Key Features for Thanksgiving Contributions</h2>
              <div className="features-grid">
                <div className="feature-item">
                  <div className="feature-icon">📅</div>
                  <h3>Deadline Management</h3>
                  <p>Set deadlines before grocery runs, catering orders, or office events so funds are ready when planners need to spend.</p>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">🔔</div>
                  <h3>Automatic Reminders</h3>
                  <p>Send reminders to family, friends, and coworkers so they remember to contribute during the busy holiday period.</p>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">🎁</div>
                  <h3>Gift & Event Coordination</h3>
                  <p>Use contribution tracking to coordinate joint gifts, meals, and experiences without messy spreadsheets or chats.</p>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">📊</div>
                  <h3>Transparency</h3>
                  <p>See who has contributed and how close you are to your goal, keeping expectations fair and clear for everyone.</p>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">✅</div>
                  <h3>Payment Confirmation</h3>
                  <p>Two-step confirmation ensures every contribution is verified before booking venues, ordering food, or buying gifts.</p>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">👥</div>
                  <h3>Multiple Groups</h3>
                  <p>Create separate groups for family meals, workplace initiatives, and community giving while keeping each budget organised.</p>
                </div>
              </div>
            </div>

            <div className="industry-section">
              <h2>Best Practices for Thanksgiving Contributions</h2>
              <ul className="best-practices-list">
                <li><strong>Plan Early:</strong> Set up groups a couple of weeks before Thanksgiving so people can budget, RSVP, and contribute calmly.</li>
                <li><strong>Clarify the Purpose:</strong> Explain whether funds are for dinner, travel, gifts, charity, or a mix, and share a clear target amount.</li>
                <li><strong>Align with Key Dates:</strong> Tie deadlines to shopping days, travel dates, or office events to avoid last-minute pressure.</li>
                <li><strong>Separate Your Groups:</strong> Keep family, workplace, and community contributions in distinct groups to avoid mixing budgets or responsibilities.</li>
                <li><strong>Share Progress:</strong> Post updates on progress toward the goal so contributors can decide whether to top up if needed.</li>
                <li><strong>Offer Flexible Amounts:</strong> Suggest contribution ranges while letting people give what fits their budget and circumstances.</li>
                <li><strong>Track for Gratitude:</strong> Use contribution records to send personalised thank-you messages and share photos after the holiday.</li>
              </ul>
            </div>

            <div className="industry-section">
              <h2>Getting Started with Thanksgiving Contributions</h2>
              <p>
                Ready to organize contributions for Thanksgiving? Follow these steps:
              </p>
              <ol className="steps-list">
                <li>Decide the main purpose of the group (dinner costs, host gift, employee appreciation, travel, or charity).</li>
                <li>Set a realistic target amount and choose a deadline before the Thanksgiving meal, trip, or office event.</li>
                <li>Agree suggested contribution amounts or leave it open for flexible giving depending on your group.</li>
                <li>Create a General Group in GroupFund with the relevant Thanksgiving date as the deadline.</li>
                <li>Invite family members, friends, coworkers, or community participants using invite codes or shareable links.</li>
                <li>Track contributions and confirm payments as they are received in the group, keeping everyone informed.</li>
                <li>Use automated reminders near the deadline so everyone who wants to join has time to contribute.</li>
              </ol>
            </div>

            <div className="industry-cta">
              <h2>Start Organizing Your Thanksgiving Contributions</h2>
              <p>Join families, workplaces, and communities using GroupFund to manage Thanksgiving contributions and focus more on sharing gratitude than chasing payments.</p>
              <div className="cta-buttons">
                <Link to="/get-started" className="btn btn-primary btn-large">Start Your Free Group</Link>
                <Link to="/how-it-works" className="btn btn-secondary btn-large">See How It Works</Link>
              </div>
            </div>

            <div className="related-resources">
              <h2>Related Resources</h2>
              <div className="resources-grid">
                <Link to="/use-cases/thanksgiving" className="resource-card">
                  <span className="resource-icon">🦃</span>
                  <h3>For Thanksgiving</h3>
                  <p>Learn about GroupFund for Thanksgiving meals and celebrations</p>
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
