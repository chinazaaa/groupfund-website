import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function EmergencyFundsUseCasePage() {
  return (
    <>
      <SEO
        title="Emergency Funds - Organize Emergency Contributions with GroupFund"
        description="Organize emergency contributions for medical expenses, unexpected costs, or helping someone in need with GroupFund. Set up quick fundraising groups and track who has contributed."
        keywords="emergency fund, medical expense contributions, help someone in need, emergency fundraising, medical bill contributions, emergency contributions"
        canonical="https://www.groupfund.app/use-cases/emergency-funds"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Emergency Funds</h1>
          <p className="page-subtitle">
            Organize emergency contributions for medical expenses, unexpected costs, or helping someone in need. Set up quick fundraising groups and track who has contributed.
          </p>
        </div>
      </section>

      <section className="use-case-detail-page">
        <div className="container">
          <div className="use-case-content">
            <div className="use-case-section">
              <h2>Why Emergency Funds Matter</h2>
              <p>
                When emergencies happen - medical expenses, unexpected costs, or helping someone in need - quick organization of contributions is crucial. GroupFund makes it easy to set up emergency fundraising groups, track contributions, and provide support when it's needed most.
              </p>
              <p>
                Whether you're organizing medical expense contributions, helping someone during a difficult time, or raising funds for unexpected costs, GroupFund helps you coordinate support quickly and transparently.
              </p>
            </div>

            <div className="use-case-section">
              <h2>Key Features for Emergency Funds</h2>
              <div className="features-list">
                <div className="feature-item">
                  <h3>🚨 Quick Setup</h3>
                  <p>Set up emergency fundraising groups quickly. Share one invite code for the whole group to contribute.</p>
                </div>
                <div className="feature-item">
                  <h3>🏥 Medical Expense Tracking</h3>
                  <p>Organize contributions for medical bills, treatments, and healthcare expenses. Track who has contributed.</p>
                </div>
                <div className="feature-item">
                  <h3>💰 Flexible Contribution Amounts</h3>
                  <p>Set suggested amounts or allow flexible contributions. Everyone can contribute what they can afford.</p>
                </div>
                <div className="feature-item">
                  <h3>✅ Transparent Tracking</h3>
                  <p>See who has contributed and track progress toward your goal. Maintain transparency for all contributors.</p>
                </div>
                <div className="feature-item">
                  <h3>📱 Easy Sharing</h3>
                  <p>Share the group invite code easily via WhatsApp, email, or social media. Make it simple for people to contribute.</p>
                </div>
                <div className="feature-item">
                  <h3>🎯 Goal Tracking</h3>
                  <p>Set fundraising goals and track progress. See how close you are to your target amount.</p>
                </div>
                <div className="feature-item">
                  <h3>💬 Emergency Fund Chat</h3>
                  <p>Coordinate emergency fund contributions with optional per-group chat. Mention supporters with @username, share account details, and confirm donations - all in one place. Perfect for emergency fundraising.</p>
                </div>
              </div>
            </div>

            <div className="use-case-section">
              <h2>Common Emergency Fund Scenarios</h2>
              <ul className="scenarios-list">
                <li><strong>Medical Expenses:</strong> Organize contributions for medical bills, treatments, and healthcare costs.</li>
                <li><strong>Unexpected Costs:</strong> Raise funds for unexpected expenses like car repairs, home repairs, or urgent needs.</li>
                <li><strong>Helping Someone in Need:</strong> Coordinate support for friends or family members during difficult times.</li>
                <li><strong>Disaster Relief:</strong> Organize contributions for disaster relief, emergency situations, or community support.</li>
                <li><strong>Job Loss Support:</strong> Help someone who has lost their job with temporary financial support.</li>
              </ul>
            </div>

            <div className="cta-box">
              <h2>Ready to Organize an Emergency Fund?</h2>
              <p>Set up an emergency fundraising group quickly and start collecting contributions today.</p>
              <div className="cta-buttons">
                <Link to="/get-started" className="btn btn-primary btn-large">Start Your Emergency Fund</Link>
                <Link to="/use-cases" className="btn btn-secondary btn-large">View All Use Cases</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

