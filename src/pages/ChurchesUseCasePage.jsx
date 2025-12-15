import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function ChurchesUseCasePage() {
  return (
    <>
      <SEO
        title="GroupFund for Churches - Streamline Church Birthday Contributions"
        description="Streamline birthday contributions for church members with GroupFund. Manage large groups efficiently, track member reliability, and maintain transparency in your church community."
        keywords="church birthday contributions, church member contributions, church birthday fund Nigeria, church contribution tracker, birthday contributions for churches"
        canonical="https://groupfund.app/use-cases/churches"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">GroupFund for Churches</h1>
          <p className="page-subtitle">
            Streamline birthday contributions for church members. Manage large groups efficiently and maintain transparency in your church community.
          </p>
        </div>
      </section>

      <section className="use-case-detail-page">
        <div className="container">
          <div className="use-case-content">
            <div className="use-case-section">
              <h2>Why Churches Choose GroupFund</h2>
              <p>
                Managing birthday contributions for church members can be challenging, especially in large congregations. Traditional methods like WhatsApp groups or manual tracking often lead to confusion, missed contributions, and lack of transparency.
              </p>
              <p>
                GroupFund provides churches with a professional, transparent system for organizing member birthday contributions. Track member reliability, maintain clear records, and ensure fairness across your entire congregation.
              </p>
            </div>

            <div className="use-case-section">
              <h2>Key Features for Churches</h2>
              <div className="features-list">
                <div className="feature-item">
                  <h3>⛪ Manage Large Congregations</h3>
                  <p>Easily handle birthday contributions for hundreds of church members. Set maximum group sizes and manage membership efficiently.</p>
                </div>
                <div className="feature-item">
                  <h3>⭐ Member Reliability Tracking</h3>
                  <p>See which members consistently contribute on time. Member reliability scores help you understand participation patterns.</p>
                </div>
                <div className="feature-item">
                  <h3>📊 Group Health Metrics</h3>
                  <p>Monitor your church group's health score to ensure consistent contribution standards across all members.</p>
                </div>
                <div className="feature-item">
                  <h3>✅ Transparent Records</h3>
                  <p>Maintain complete transparency with visible payment tracking. All members can see contribution statuses.</p>
                </div>
                <div className="feature-item">
                  <h3>🔔 Automatic Reminders</h3>
                  <p>Send automatic reminders to church members before birthdays. Reduce the need for manual follow-ups.</p>
                </div>
                <div className="feature-item">
                  <h3>👥 Member Approval System</h3>
                  <p>Control who joins your church group with an approval system. Review member requests before accepting.</p>
                </div>
                <div className="feature-item">
                  <h3>💰 Fixed Contribution Amounts</h3>
                  <p>Set a standard contribution amount for all church members. Ensures fairness and clarity.</p>
                </div>
                <div className="feature-item">
                  <h3>📋 Complete History</h3>
                  <p>Maintain records of all contributions for church administration and transparency purposes.</p>
                </div>
              </div>
            </div>

            <div className="use-case-section">
              <h2>Common Church Scenarios</h2>
              <ul className="scenarios-list">
                <li><strong>Church Member Birthdays:</strong> Organize contributions for all church members' birthdays throughout the year.</li>
                <li><strong>Ministry Groups:</strong> Manage birthday contributions for specific ministry groups (youth, women's, men's groups).</li>
                <li><strong>Church Staff:</strong> Organize contributions for pastors, deacons, and church staff birthdays.</li>
                <li><strong>Small Groups:</strong> Handle contributions for small group members and Bible study groups.</li>
              </ul>
            </div>

            <div className="use-case-section">
              <h2>How It Works for Churches</h2>
              <ol className="steps-list">
                <li><strong>Create Your Church Group:</strong> Set up a group for your church or ministry. Set contribution amounts and maximum group size.</li>
                <li><strong>Invite Church Members:</strong> Share an invite code with members. They can request to join, and you approve requests.</li>
                <li><strong>Add Member Birthdays:</strong> Members can add their own birthdays, or administrators can add them.</li>
                <li><strong>Track Contributions:</strong> Monitor who has contributed and who still needs to pay for each birthday.</li>
                <li><strong>Automatic Reminders:</strong> Members receive reminders before birthdays, reducing manual follow-up work.</li>
                <li><strong>Maintain Transparency:</strong> All members can see contribution statuses, ensuring fairness and accountability.</li>
              </ol>
            </div>

            <div className="use-case-section">
              <h2>Benefits for Church Administrators</h2>
              <ul className="benefits-list">
                <li>Reduce administrative burden with automatic tracking and reminders</li>
                <li>Maintain professional records of all contributions</li>
                <li>Ensure fairness across all church members</li>
                <li>Track member participation and reliability</li>
                <li>Handle large groups efficiently</li>
                <li>Support multiple currencies for international church members</li>
              </ul>
            </div>

            <div className="cta-box">
              <h2>Ready to Streamline Your Church's Birthday Contributions?</h2>
              <p>Join churches across Nigeria using GroupFund to organize member contributions professionally.</p>
              <div className="cta-buttons">
                <Link to="/waitlist" className="btn btn-primary btn-large">Start Your Church Group</Link>
                <Link to="/how-it-works" className="btn btn-secondary btn-large">See How It Works</Link>
              </div>
            </div>

            <div className="related-links">
              <h3>Explore Other Use Cases</h3>
              <div className="related-links-grid">
                <Link to="/use-cases/families">For Families →</Link>
                <Link to="/use-cases/schools">For Schools →</Link>
                <Link to="/use-cases/friend-groups">For Friend Groups →</Link>
                <Link to="/use-cases/workplace">For Workplace →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

