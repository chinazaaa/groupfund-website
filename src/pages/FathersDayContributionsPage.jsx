import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function FathersDayContributionsPage() {
  return (
    <>
      <SEO
        title="Father's Day Group Contributions - Gifts, Brunch & Family Gatherings | GroupFund"
        description="Organize group contributions for Father's Day celebrations. Manage Father's Day gift funds, brunch contributions, and family gathering expenses with GroupFund."
        keywords="father's day group contributions, father's day gift funds, family brunch contributions, workplace father's day gifts, community father's day collections, dad appreciation funds"
        canonical="https://www.groupfund.app/seasonal/fathers-day-contributions"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Father's Day Contributions</h1>
          <p className="page-subtitle">
            Organize group contributions for Father's Day celebrations. Manage gift funds, brunch contributions, and family gathering expenses with ease for families, workplaces, and communities.
          </p>
        </div>
      </section>

      <section className="industry-page">
        <div className="container">
          <div className="industry-content">
            <div className="industry-section">
              <h2>Why Father's Day Contributions Need Organization</h2>
              <p>
                Father&apos;s Day often involves multiple people wanting to show appreciation at the same time. Without structure, collecting money for gifts, brunches, and family events quickly becomes confusing and time-consuming.
              </p>
              <ul className="feature-list">
                <li>Siblings and extended family contributing to a shared Father&apos;s Day gift</li>
                <li>Workplaces organising joint gifts or experiences for team dads or managers</li>
                <li>Communities, schools, or clubs coordinating appreciation gifts and events</li>
                <li>Shared costs for family brunches, dinners, and at-home celebrations</li>
                <li>Multiple contributors in different locations and time zones</li>
                <li>Deadlines tied to Father&apos;s Day weekend, work celebrations, or school dates</li>
              </ul>
            </div>

            <div className="industry-section">
              <h2>Father's Day Contribution Use Cases</h2>

              <div className="use-case-card">
                <h3>🎁 Shared Father&apos;s Day Gift Funds</h3>
                <p>
                  Organize contributions from siblings, partners, and extended family towards a main Father&apos;s Day gift like tech, hobby gear, or an experience. Keep everything in one place and track who has contributed.
                </p>
                <p><strong>Best Group Type:</strong> General Groups with Father&apos;s Day date as deadline</p>
              </div>

              <div className="use-case-card">
                <h3>🍳 Father&apos;s Day Brunch & Meals</h3>
                <p>
                  Coordinate contributions for Father&apos;s Day brunch, lunch, dinner, or BBQ. Share costs for reservations, groceries, drinks, and desserts so one person is not left covering everything.
                </p>
                <p><strong>Best Group Type:</strong> General Groups with meal date as deadline</p>
              </div>

              <div className="use-case-card">
                <h3>🏢 Workplace & Team Gifts</h3>
                <p>
                  Organize group gifts from colleagues for team members who are dads, or for a manager who feels like a work dad. Collect contributions from the whole office and add a shared card or message.
                </p>
                <p><strong>Best Group Type:</strong> General Groups with office celebration date as deadline</p>
              </div>

              <div className="use-case-card">
                <h3>🏟️ Experience & Activity Funds</h3>
                <p>
                  Coordinate contributions for experiences like match tickets, spa days, golf outings, restaurant vouchers, or family days out. Turn small contributions from many people into a memorable experience.
                </p>
                <p><strong>Best Group Type:</strong> General Groups with experience date as deadline</p>
              </div>

              <div className="use-case-card">
                <h3>👨‍👧‍👦 Gifts from Kids, Classes & Clubs</h3>
                <p>
                  Organize contributions from kids, classes, or youth groups to celebrate dads, stepdads, carers, coaches, or father figures. Make it easy for parents to contribute online instead of sending cash to school or practice.
                </p>
                <p><strong>Best Group Type:</strong> General Groups with school or club event date as deadline</p>
              </div>

              <div className="use-case-card">
                <h3>🌍 Community & Charity-Focused Gifts</h3>
                <p>
                  Coordinate contributions for charity donations or community projects in honour of Father&apos;s Day, such as sponsoring a cause or supporting a dad-focused charity selected by the group.
                </p>
                <p><strong>Best Group Type:</strong> General Groups with campaign end date as deadline</p>
              </div>
            </div>

            <div className="industry-section">
              <h2>Key Features for Father&apos;s Day Contributions</h2>
              <div className="features-grid">
                <div className="feature-item">
                  <div className="feature-icon">📅</div>
                  <h3>Deadline Management</h3>
                  <p>Set deadlines around Father&apos;s Day weekend, office celebrations, or family events so contributions arrive on time.</p>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">🔔</div>
                  <h3>Automatic Reminders</h3>
                  <p>Send reminders to siblings, colleagues, and community members so no one forgets to contribute before the deadline.</p>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">🎁</div>
                  <h3>Gift Coordination</h3>
                  <p>Use contribution tracking to coordinate one main gift from the group and avoid duplicate or last-minute purchases.</p>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">📊</div>
                  <h3>Transparency</h3>
                  <p>See contributions at a glance, keeping group finances clear, fair, and easy to manage for everyone involved.</p>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">✅</div>
                  <h3>Payment Confirmation</h3>
                  <p>Two-step confirmation ensures every contribution is verified before booking experiences or buying gifts.</p>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">👥</div>
                  <h3>Multiple Groups</h3>
                  <p>Create separate groups for family, workplace, and community contributions while keeping each celebration organised.</p>
                </div>
              </div>
            </div>

            <div className="industry-section">
              <h2>Best Practices for Father&apos;s Day Contributions</h2>
              <ul className="best-practices-list">
                <li><strong>Plan Ahead:</strong> Create Father&apos;s Day groups a couple of weeks before the day so people can budget and contribute comfortably.</li>
                <li><strong>Define the Goal:</strong> Be clear about whether funds are for a gift, brunch, experience, charity donation, or a mix.</li>
                <li><strong>Match Key Dates:</strong> Set deadlines a few days before Father&apos;s Day or the planned celebration so you have time to buy or book.</li>
                <li><strong>Use Separate Groups:</strong> Keep family, workplace, and community contributions in separate groups to avoid confusion.</li>
                <li><strong>Share Regular Updates:</strong> Post progress updates so contributors can see how close you are to the target amount.</li>
                <li><strong>Offer Flexible Amounts:</strong> Allow people to contribute different amounts so everyone can participate comfortably.</li>
                <li><strong>Record Contributors:</strong> Keep a list of contributors in GroupFund to make follow-up thank-you messages easy.</li>
              </ul>
            </div>

            <div className="industry-section">
              <h2>Getting Started with Father&apos;s Day Contributions</h2>
              <p>
                Ready to organize contributions for Father&apos;s Day? Follow these steps:
              </p>
              <ol className="steps-list">
                <li>Decide what the group is contributing towards (gift, brunch, experience, or charity donation).</li>
                <li>Set a realistic target amount and choose a deadline a few days before Father&apos;s Day or the event.</li>
                <li>Agree suggested contribution amounts or let people give what works for their budget.</li>
                <li>Create a General Group in GroupFund with the relevant Father&apos;s Day or celebration date as the deadline.</li>
                <li>Invite family members, colleagues, and community participants using invite codes or shareable links.</li>
                <li>Track incoming contributions and confirm payments as they arrive in the group.</li>
                <li>Use automated reminders near the deadline so everyone who wants to contribute gets the chance.</li>
              </ol>
            </div>

            <div className="industry-cta">
              <h2>Start Organizing Your Father&apos;s Day Contributions</h2>
              <p>Join families, workplaces, and communities using GroupFund to manage Father&apos;s Day contributions and celebrate the dads and father figures who matter most.</p>
              <div className="cta-buttons">
                <Link to="/get-started" className="btn btn-primary btn-large">Start Your Free Group</Link>
                <Link to="/how-it-works" className="btn btn-secondary btn-large">See How It Works</Link>
              </div>
            </div>

            <div className="related-resources">
              <h2>Related Resources</h2>
              <div className="resources-grid">
                <Link to="/use-cases/fathers-day" className="resource-card">
                  <span className="resource-icon">👨‍👧‍👦</span>
                  <h3>For Father&apos;s Day</h3>
                  <p>Learn about GroupFund for Father&apos;s Day gifts and celebrations</p>
                </Link>
                <Link to="/group-types/general-groups" className="resource-card">
                  <span className="resource-icon">👥</span>
                  <h3>General Groups</h3>
                  <p>Learn about General Groups for events and occasions</p>
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
