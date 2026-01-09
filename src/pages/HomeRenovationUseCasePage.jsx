import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function HomeRenovationUseCasePage() {
  return (
    <>
      <SEO
        title="Home Renovation Projects - Organize Renovation Contributions with GroupFund"
        description="Organize contributions for home renovation projects, shared property improvements, or helping someone renovate with GroupFund. Track payments and manage project deadlines."
        keywords="home renovation contributions, renovation fund, property improvement contributions, home improvement group payments, renovation project contributions"
        canonical="https://www.groupfund.app/use-cases/home-renovation"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Home Renovation Projects</h1>
          <p className="page-subtitle">
            Organize contributions for home renovation projects, shared property improvements, or helping someone renovate. Track payments and manage project deadlines.
          </p>
        </div>
      </section>

      <section className="use-case-detail-page">
        <div className="container">
          <div className="use-case-content">
            <div className="use-case-section">
              <h2>Organizing Renovation Contributions</h2>
              <p>
                Home renovation projects can be expensive, whether you're renovating your own home, improving shared property, or helping someone renovate. GroupFund makes it easy to organize contributions, track payments, and manage project deadlines.
              </p>
              <p>
                Whether you're coordinating contributions for shared property improvements, helping someone renovate, or organizing a renovation project, GroupFund helps you track contributions and manage deadlines.
              </p>
            </div>

            <div className="use-case-section">
              <h2>Key Features for Home Renovation</h2>
              <div className="features-list">
                <div className="feature-item">
                  <h3>🔨 Project Contribution Tracking</h3>
                  <p>Organize contributions for renovation projects. Track who has contributed and manage project budgets.</p>
                </div>
                <div className="feature-item">
                  <h3>🏠 Shared Property Improvements</h3>
                  <p>Coordinate contributions for shared property improvements. Split costs fairly among property owners.</p>
                </div>
                <div className="feature-item">
                  <h3>📅 Project Deadline Management</h3>
                  <p>Set deadlines tied to project milestones. Ensure all contributions are received before starting work.</p>
                </div>
                <div className="feature-item">
                  <h3>✅ Transparent Tracking</h3>
                  <p>See who has contributed and track progress toward your goal. Maintain transparency for all contributors.</p>
                </div>
                <div className="feature-item">
                  <h3>💰 Flexible Contribution Amounts</h3>
                  <p>Set equal or proportional amounts based on property shares or usage. Everyone knows their contribution.</p>
                </div>
                <div className="feature-item">
                  <h3>🎯 Goal Tracking</h3>
                  <p>Set fundraising goals for renovation projects and track progress. See how close you are to your target.</p>
                </div>
              </div>
            </div>

            <div className="use-case-section">
              <h2>Common Home Renovation Scenarios</h2>
              <ul className="scenarios-list">
                <li><strong>Shared Property Improvements:</strong> Coordinate contributions for shared property renovations and improvements.</li>
                <li><strong>Helping Someone Renovate:</strong> Organize contributions to help friends or family members renovate their homes.</li>
                <li><strong>Project Milestones:</strong> Track contributions for different project phases and milestones.</li>
                <li><strong>Property Investment:</strong> Organize contributions for property investment renovations and improvements.</li>
                <li><strong>Home Improvement Projects:</strong> Coordinate contributions for specific home improvement projects and upgrades.</li>
              </ul>
            </div>

            <div className="cta-box">
              <h2>Ready to Organize Your Renovation Project?</h2>
              <p>Set up a renovation fund group and start tracking contributions today.</p>
              <div className="cta-buttons">
                <Link to="/get-started" className="btn btn-primary btn-large">Start Your Renovation Fund</Link>
                <Link to="/use-cases" className="btn btn-secondary btn-large">View All Use Cases</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

