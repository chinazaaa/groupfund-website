import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function SavingsGroupsUseCasePage() {
  return (
    <>
      <SEO
        title="Savings Groups & ROSCAs - Organize Rotating Savings with GroupFund"
        description="Organize rotating savings and credit associations (ROSCAs), savings groups, and contribution circles with GroupFund. Track contributions, manage rotations, and maintain transparency."
        keywords="savings groups, ROSCA contributions, rotating savings, contribution circles, savings club, ajo contributions Nigeria, esusu contributions"
        canonical="https://www.groupfund.app/use-cases/savings-groups"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Savings Groups & ROSCAs</h1>
          <p className="page-subtitle">
            Organize rotating savings and credit associations (ROSCAs), savings groups, and contribution circles. Track contributions, manage rotations, and maintain transparency.
          </p>
        </div>
      </section>

      <section className="use-case-detail-page">
        <div className="container">
          <div className="use-case-content">
            <div className="use-case-section">
              <h2>Why Savings Groups Use GroupFund</h2>
              <p>
                Rotating Savings and Credit Associations (ROSCAs), also known as Ajo, Esusu, or contribution circles, are traditional savings methods where members contribute regularly and take turns receiving the pooled amount. GroupFund makes it easy to organize these groups, track contributions, and manage rotations transparently.
              </p>
              <p>
                Whether you're organizing a traditional ROSCA, a savings club, or a contribution circle, GroupFund helps you track contributions, manage rotations, and maintain transparency among all members.
              </p>
            </div>

            <div className="use-case-section">
              <h2>Key Features for Savings Groups</h2>
              <div className="features-list">
                <div className="feature-item">
                  <h3>💰 Rotating Contributions</h3>
                  <p>Track regular contributions from all members. Set monthly or weekly contribution schedules.</p>
                </div>
                <div className="feature-item">
                  <h3>🔄 Rotation Management</h3>
                  <p>Track who has received their turn and who is next in rotation. Maintain clear rotation order.</p>
                </div>
                <div className="feature-item">
                  <h3>✅ Transparent Tracking</h3>
                  <p>See who has contributed and track all payments. Maintain transparency in savings group operations.</p>
                </div>
                <div className="feature-item">
                  <h3>📅 Automatic Reminders</h3>
                  <p>Get reminders before contribution deadlines. Never miss a payment in your savings group.</p>
                </div>
                <div className="feature-item">
                  <h3>📊 Contribution History</h3>
                  <p>Track all contributions and rotations. Maintain records of savings group activities.</p>
                </div>
                <div className="feature-item">
                  <h3>⭐ Member Reliability</h3>
                  <p>See which members consistently contribute on time. Make informed decisions about group participation.</p>
                </div>
              </div>
            </div>

            <div className="use-case-section">
              <h2>Common Savings Group Scenarios</h2>
              <ul className="scenarios-list">
                <li><strong>Traditional ROSCAs:</strong> Organize rotating savings where members take turns receiving the pooled amount.</li>
                <li><strong>Ajo/Esusu Groups:</strong> Manage traditional Nigerian savings groups with regular contributions.</li>
                <li><strong>Contribution Circles:</strong> Organize contribution circles where members contribute and take turns receiving funds.</li>
                <li><strong>Savings Clubs:</strong> Track contributions for savings clubs and informal savings groups.</li>
                <li><strong>Investment Groups:</strong> Organize contributions for investment clubs and group investment activities.</li>
              </ul>
            </div>

            <div className="cta-box">
              <h2>Ready to Organize Your Savings Group?</h2>
              <p>Join thousands of savings groups using GroupFund to manage contributions and rotations transparently.</p>
              <div className="cta-buttons">
                <Link to="/get-started" className="btn btn-primary btn-large">Start Your Savings Group</Link>
                <Link to="/use-cases" className="btn btn-secondary btn-large">View All Use Cases</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

