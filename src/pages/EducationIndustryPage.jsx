import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function EducationIndustryPage() {
  return (
    <>
      <SEO
        title="Education Group Contributions - School Group Payments | GroupFund"
        description="Organize group contributions for schools, teachers, and educational institutions. Track payments, manage shared expenses, and coordinate contributions for education groups with GroupFund."
        keywords="education group contributions, school group payments, teacher group contributions, school birthday funds, education group payments, teacher contributions, school event contributions, educational institution payments"
        canonical="https://www.groupfund.app/industries/education"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Education Group Contributions</h1>
          <p className="page-subtitle">
            Organize group contributions for schools, teachers, and educational institutions. Track payments, manage shared expenses, and coordinate contributions effectively.
          </p>
        </div>
      </section>

      <section className="industry-page">
        <div className="container">
          <div className="industry-content">
            <div className="industry-section">
              <h2>Why Education Groups Need GroupFund</h2>
              <p>
                Schools, teachers, and educational institutions often need to organize contributions for various purposes, from birthday funds to shared subscriptions and event expenses. Managing these contributions can be challenging, especially when dealing with:
              </p>
              <ul className="feature-list">
                <li>Teacher birthday funds and appreciation gifts</li>
                <li>Classroom supplies and shared resources</li>
                <li>School event contributions and field trips</li>
                <li>Staff subscription sharing (streaming services, software)</li>
                <li>Retirement and farewell gifts</li>
                <li>Professional development and training costs</li>
              </ul>
            </div>

            <div className="industry-section">
              <h2>Use Cases for Education Groups</h2>
              
              <div className="use-case-card">
                <h3>👨‍🏫 Teacher Birthday Funds</h3>
                <p>
                  Organize birthday contributions for teachers and staff members. Set contribution amounts, track who has paid, and ensure everyone contributes fairly before the birthday.
                </p>
                <p><strong>Best Group Type:</strong> Birthday Groups with automatic reminders</p>
              </div>

              <div className="use-case-card">
                <h3>📚 Classroom Supplies & Resources</h3>
                <p>
                  Coordinate contributions for shared classroom supplies, books, and educational resources. Set deadlines tied to school terms or project start dates.
                </p>
                <p><strong>Best Group Type:</strong> General Groups with project deadlines</p>
              </div>

              <div className="use-case-card">
                <h3>🎓 School Events & Field Trips</h3>
                <p>
                  Organize contributions for school events, field trips, and extracurricular activities. Track payments from parents, students, or staff members.
                </p>
                <p><strong>Best Group Type:</strong> General Groups with event deadlines</p>
              </div>

              <div className="use-case-card">
                <h3>📺 Shared Subscriptions</h3>
                <p>
                  Share educational software subscriptions, streaming services, or online learning platforms among teachers or departments. Use Subscription Groups for recurring payments.
                </p>
                <p><strong>Best Group Type:</strong> Subscription Groups for monthly/annual payments</p>
              </div>

              <div className="use-case-card">
                <h3>🎁 Retirement & Farewell Gifts</h3>
                <p>
                  Coordinate contributions for retirement gifts, farewell presents, and appreciation gifts for departing staff members. Set deadlines before the event.
                </p>
                <p><strong>Best Group Type:</strong> General Groups with event deadlines</p>
              </div>
            </div>

            <div className="industry-section">
              <h2>Key Features for Education Groups</h2>
              <div className="features-grid">
                <div className="feature-item">
                  <div className="feature-icon">👥</div>
                  <h3>Easy Member Management</h3>
                  <p>Invite teachers, staff, parents, or students using simple invite codes. No complicated setup required.</p>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">📅</div>
                  <h3>Deadline Management</h3>
                  <p>Set deadlines tied to school terms, event dates, or project milestones. Automatic reminders keep everyone on track.</p>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">✅</div>
                  <h3>Payment Tracking</h3>
                  <p>Real-time tracking shows who has paid and who hasn't. No more confusion or missed payments.</p>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">📊</div>
                  <h3>Transparency</h3>
                  <p>Everyone can see contribution status, ensuring fairness and accountability in educational settings.</p>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">💰</div>
                  <h3>Fixed Amounts</h3>
                  <p>Set clear contribution amounts per person. Everyone knows exactly what they need to contribute.</p>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">🔔</div>
                  <h3>Automatic Reminders</h3>
                  <p>Automatic payment reminders reduce the need for manual follow-ups, saving time for busy educators.</p>
                </div>
              </div>
            </div>

            <div className="industry-section">
              <h2>Best Practices for Education Groups</h2>
              <ul className="best-practices-list">
                <li><strong>Set Clear Contribution Amounts:</strong> Base amounts on fair distribution, number of participants, or agreed-upon formulas.</li>
                <li><strong>Establish Deadlines:</strong> Tie contribution deadlines to school terms, event dates, or project start dates.</li>
                <li><strong>Maintain Transparency:</strong> Use GroupFund's transparency features to ensure all participants can see contribution status.</li>
                <li><strong>Communicate Clearly:</strong> Use GroupFund's messaging features to communicate about contributions and events.</li>
                <li><strong>Plan Ahead:</strong> Create groups well in advance of events or deadlines to give everyone time to contribute.</li>
                <li><strong>Use Birthday Groups:</strong> For teacher birthdays, use Birthday Groups to automatically track contributions each year.</li>
              </ul>
            </div>

            <div className="industry-section">
              <h2>Getting Started</h2>
              <p>
                Ready to organize contributions for your education group? Follow these steps:
              </p>
              <ol className="steps-list">
                <li>Determine contribution amounts based on number of participants or agreed-upon formulas</li>
                <li>Set deadlines tied to school terms, event dates, or project milestones</li>
                <li>Create a Birthday Group, Subscription Group, or General Group in GroupFund</li>
                <li>Invite all participants using invite codes</li>
                <li>Track contributions and confirm payments as they're received</li>
                <li>Use automatic reminders to ensure everyone contributes on time</li>
              </ol>
            </div>

            <div className="industry-cta">
              <h2>Start Organizing Your Education Group Contributions</h2>
              <p>Join schools, teachers, and educational institutions using GroupFund to manage contributions effectively.</p>
              <div className="cta-buttons">
              <Link to="/get-started" className="btn btn-primary btn-large">Start Your Free Group</Link>
                <Link to="/how-it-works" className="btn btn-secondary btn-large">See How It Works</Link>
              </div>
            </div>

            <div className="related-resources">
              <h2>Related Resources</h2>
              <div className="resources-grid">
                <Link to="/resources/calculating-group-contributions" className="resource-card">
                  <span className="resource-icon">💰</span>
                  <h3>Calculating Group Contributions</h3>
                  <p>Learn how to calculate fair contribution amounts</p>
                </Link>
                <Link to="/resources/budgeting-for-group-contributions" className="resource-card">
                  <span className="resource-icon">📊</span>
                  <h3>Budgeting for Contributions</h3>
                  <p>Plan and budget for group contributions</p>
                </Link>
                <Link to="/group-types/birthday-groups" className="resource-card">
                  <span className="resource-icon">🎂</span>
                  <h3>Birthday Groups</h3>
                  <p>Learn about Birthday Groups for teacher birthdays</p>
                </Link>
                <Link to="/tools/contribution-calculator" className="resource-card">
                  <span className="resource-icon">🧮</span>
                  <h3>Contribution Calculator</h3>
                  <p>Calculate per-person contribution amounts</p>
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

