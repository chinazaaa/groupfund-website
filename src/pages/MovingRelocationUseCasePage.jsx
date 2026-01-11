import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function MovingRelocationUseCasePage() {
  return (
    <>
      <SEO
        title="Moving & Relocation Expenses - Organize Moving Contributions with GroupFund"
        description="Organize contributions to help someone move or relocate with GroupFund. Collect money for moving costs, deposits, and relocation expenses in one shared group."
        keywords="moving expenses, relocation contributions, help someone move, moving fund, relocation expenses, moving cost contributions"
        canonical="https://www.groupfund.app/use-cases/moving-relocation"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Moving & Relocation Expenses</h1>
          <p className="page-subtitle">
            Organize contributions to help someone move or relocate. Collect money for moving costs, deposits, and relocation expenses in one shared group.
          </p>
        </div>
      </section>

      <section className="use-case-detail-page">
        <div className="container">
          <div className="use-case-content">
            <div className="use-case-section">
              <h2>Helping Friends & Family Move</h2>
              <p>
                Moving and relocation can be expensive - from moving costs to deposits and setup expenses. GroupFund makes it easy to organize contributions from friends and family to help someone move, track payments, and coordinate support.
              </p>
              <p>
                Whether you're helping a friend relocate, supporting family members moving, or organizing contributions for moving expenses, GroupFund helps you coordinate support and track contributions.
              </p>
            </div>

            <div className="use-case-section">
              <h2>Key Features for Moving & Relocation</h2>
              <div className="features-list">
                <div className="feature-item">
                  <h3>📦 Moving Cost Contributions</h3>
                  <p>Organize contributions for moving costs, truck rentals, and moving services. Track who has contributed.</p>
                </div>
                <div className="feature-item">
                  <h3>🏠 Deposit & Setup Expenses</h3>
                  <p>Coordinate contributions for security deposits, first month's rent, and setup expenses for the new home.</p>
                </div>
                <div className="feature-item">
                  <h3>📅 Deadline Tracking</h3>
                  <p>Set deadlines tied to moving dates. Ensure all contributions are received before the move.</p>
                </div>
                <div className="feature-item">
                  <h3>✅ Transparent Tracking</h3>
                  <p>See who has contributed and track progress toward your goal. Maintain transparency for all contributors.</p>
                </div>
                <div className="feature-item">
                  <h3>💰 Flexible Amounts</h3>
                  <p>Set suggested amounts or allow flexible contributions. Everyone can contribute what they can afford.</p>
                </div>
                <div className="feature-item">
                  <h3>🎯 Goal Tracking</h3>
                  <p>Set fundraising goals for moving expenses and track progress. See how close you are to your target.</p>
                </div>
                <div className="feature-item">
                  <h3>💬 Moving Fund Chat</h3>
                  <p>Coordinate moving contributions with optional per-group chat. Mention supporters with @username, share account details, discuss moving details, and confirm payments - all in one place. Perfect for moving funds.</p>
                </div>
              </div>
            </div>

            <div className="use-case-section">
              <h2>Common Moving & Relocation Scenarios</h2>
              <ul className="scenarios-list">
                <li><strong>Moving Cost Support:</strong> Organize contributions for moving costs, truck rentals, and moving services.</li>
                <li><strong>Deposit Assistance:</strong> Coordinate contributions for security deposits and first month's rent.</li>
                <li><strong>Relocation Expenses:</strong> Organize contributions for relocation expenses, travel costs, and setup expenses.</li>
                <li><strong>New Home Setup:</strong> Coordinate contributions for furniture, appliances, and new home essentials.</li>
                <li><strong>Job Relocation:</strong> Organize contributions to help someone relocate for a new job opportunity.</li>
              </ul>
            </div>

            <div className="cta-box">
              <h2>Ready to Help Someone Move?</h2>
              <p>Set up a moving fund group and start collecting contributions today.</p>
              <div className="cta-buttons">
                <Link to="/get-started" className="btn btn-primary btn-large">Start Your Moving Fund</Link>
                <Link to="/use-cases" className="btn btn-secondary btn-large">View All Use Cases</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

