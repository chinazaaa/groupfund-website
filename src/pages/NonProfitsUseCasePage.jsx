import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function NonProfitsUseCasePage() {
  return (
    <>
      <SEO
        title="GroupFund for Non-Profits & Charities - Organize Fundraising Contributions"
        description="Organize fundraising contributions, volunteer expenses, and charity events with GroupFund. Track donations, manage event costs, and maintain transparency for your organization."
        keywords="non-profit contributions, charity fundraising, volunteer expenses, charity event contributions, NGO contributions, fundraising groups"
        canonical="https://www.groupfund.app/use-cases/non-profits"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">GroupFund for Non-Profits & Charities</h1>
          <p className="page-subtitle">
            Organize fundraising contributions, volunteer expenses, and charity events. Track donations, manage event costs, and maintain transparency for your organization.
          </p>
        </div>
      </section>

      <section className="use-case-detail-page">
        <div className="container">
          <div className="use-case-content">
            <div className="use-case-section">
              <h2>Why Non-Profits Love GroupFund</h2>
              <p>
                Managing fundraising contributions, volunteer expenses, and charity events requires organization and transparency. GroupFund helps non-profits and charities track donations, manage event costs, and maintain transparency for donors and volunteers.
              </p>
              <p>
                Whether you're organizing fundraising campaigns, managing volunteer expenses, or coordinating charity events, GroupFund makes it easy to track contributions and maintain transparency.
              </p>
            </div>

            <div className="use-case-section">
              <h2>Key Features for Non-Profits</h2>
              <div className="features-list">
                <div className="feature-item">
                  <h3>💰 Fundraising Campaigns</h3>
                  <p>Organize fundraising contributions for campaigns, projects, and causes. Track donations and progress toward goals.</p>
                </div>
                <div className="feature-item">
                  <h3>🤝 Volunteer Expenses</h3>
                  <p>Track volunteer expenses and reimbursements. Organize contributions for volunteer activities and events.</p>
                </div>
                <div className="feature-item">
                  <h3>🎉 Charity Events</h3>
                  <p>Organize contributions for charity events, fundraisers, and community activities. Set deadlines tied to event dates.</p>
                </div>
                <div className="feature-item">
                  <h3>✅ Transparent Tracking</h3>
                  <p>Maintain transparency for donors and volunteers. See who has contributed and track all donations.</p>
                </div>
                <div className="feature-item">
                  <h3>📊 Donation Records</h3>
                  <p>Track all donations and contributions. Maintain records for reporting and transparency.</p>
                </div>
                <div className="feature-item">
                  <h3>🎯 Goal Tracking</h3>
                  <p>Set fundraising goals and track progress. See how close you are to your target amount.</p>
                </div>
              </div>
            </div>

            <div className="use-case-section">
              <h2>Common Non-Profit Scenarios</h2>
              <ul className="scenarios-list">
                <li><strong>Fundraising Campaigns:</strong> Organize contributions for fundraising campaigns, projects, and causes.</li>
                <li><strong>Volunteer Expenses:</strong> Track volunteer expenses and organize reimbursements for volunteer activities.</li>
                <li><strong>Charity Events:</strong> Organize contributions for charity events, fundraisers, and community activities.</li>
                <li><strong>Project Funding:</strong> Coordinate contributions for specific projects and initiatives.</li>
                <li><strong>Community Support:</strong> Organize contributions for community support programs and initiatives.</li>
              </ul>
            </div>

            <div className="cta-box">
              <h2>Ready to Organize Your Non-Profit Contributions?</h2>
              <p>Join non-profits and charities using GroupFund to manage fundraising and expenses transparently.</p>
              <div className="cta-buttons">
                <Link to="/get-started" className="btn btn-primary btn-large">Start Your Non-Profit Group</Link>
                <Link to="/use-cases" className="btn btn-secondary btn-large">View All Use Cases</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

