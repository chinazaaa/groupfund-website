import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function RoommatesUseCasePage() {
  return (
    <>
      <SEO
        title="GroupFund for Roommates - Split Rent & Bills with Housemates"
        description="Split rent, utilities, groceries, and shared expenses with roommates using GroupFund. Track monthly payments, set fair amounts, and avoid awkward money conversations. Perfect for shared living situations."
        keywords="roommate bill splitting, split rent with roommates, roommate expenses, shared living costs, housemate payments, split utilities with roommates"
        canonical="https://www.groupfund.app/use-cases/roommates"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">GroupFund for Roommates</h1>
          <p className="page-subtitle">
            Split rent, utilities, groceries, and shared expenses with roommates. Track monthly payments, set fair amounts, and avoid awkward money conversations.
          </p>
        </div>
      </section>

      <section className="use-case-detail-page">
        <div className="container">
          <div className="use-case-content">
            <div className="use-case-section">
              <h2>Why Roommates Love GroupFund</h2>
              <p>
                Living with roommates means sharing expenses - rent, utilities, groceries, internet, and more. GroupFund makes it easy to split costs fairly, track who has paid, and avoid awkward money conversations at home.
              </p>
              <p>
                Whether you're splitting rent equally, sharing utilities proportionally, or organizing shared groceries, GroupFund helps you keep everything organized and transparent.
              </p>
            </div>

            <div className="use-case-section">
              <h2>Key Features for Roommates</h2>
              <div className="features-list">
                <div className="feature-item">
                  <h3>🏠 Split Rent & Utilities</h3>
                  <p>Split rent, electricity, water, internet, and other utilities fairly. Set equal or custom amounts per roommate.</p>
                </div>
                <div className="feature-item">
                  <h3>🛒 Shared Groceries & Supplies</h3>
                  <p>Organize contributions for shared groceries, household supplies, and common items. Track who has paid for what.</p>
                </div>
                <div className="feature-item">
                  <h3>📅 Monthly Payment Tracking</h3>
                  <p>Use Subscription Groups for recurring monthly expenses. Set billing dates and track payments automatically.</p>
                </div>
                <div className="feature-item">
                  <h3>💰 Fair Amount Distribution</h3>
                  <p>Set equal shares or custom amounts based on room size, usage, or other factors. Everyone knows their share.</p>
                </div>
                <div className="feature-item">
                  <h3>✅ Transparent Tracking</h3>
                  <p>See who has paid and who still needs to contribute. No more wondering if someone forgot to pay.</p>
                </div>
                <div className="feature-item">
                  <h3>📱 Easy Mobile Access</h3>
                  <p>Track payments on the go. Everyone can see payment status in real-time from their phones.</p>
                </div>
              </div>
            </div>

            <div className="use-case-section">
              <h2>Common Roommate Scenarios</h2>
              <ul className="scenarios-list">
                <li><strong>Equal Rent Split:</strong> Split rent equally among all roommates with monthly tracking.</li>
                <li><strong>Proportional Utilities:</strong> Share utilities based on room size or usage patterns.</li>
                <li><strong>Shared Groceries:</strong> Organize contributions for shared groceries and household items.</li>
                <li><strong>Internet & Subscriptions:</strong> Split internet bills and shared streaming subscriptions.</li>
                <li><strong>One-Time Expenses:</strong> Organize contributions for furniture, appliances, or home improvements.</li>
              </ul>
            </div>

            <div className="cta-box">
              <h2>Ready to Split Expenses with Your Roommates?</h2>
              <p>Join thousands of roommates who use GroupFund to make shared living expenses stress-free.</p>
              <div className="cta-buttons">
                <Link to="/get-started" className="btn btn-primary btn-large">Start Your Roommate Group</Link>
                <Link to="/use-cases/shared-rent-and-bills" className="btn btn-secondary btn-large">Learn More About Shared Rent & Bills</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

