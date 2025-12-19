import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function FamiliesUseCasePage() {
  return (
    <>
      <SEO
        title="GroupFund for Families - Organize Family Birthday Contributions"
        description="Organize birthday contributions for your extended family with GroupFund. Track contributions, set fair amounts, and celebrate together without the stress. Perfect for large families."
        keywords="family birthday contributions, family group payments, extended family birthday fund, family birthday tracker, birthday contributions for families"
        canonical="https://groupfund.app/use-cases/families"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">GroupFund for Families</h1>
          <p className="page-subtitle">
            Organize birthday contributions for your extended family with ease. Keep track of everyone's contributions and celebrate together without the stress.
          </p>
        </div>
      </section>

      <section className="use-case-detail-page">
        <div className="container">
          <div className="use-case-content">
            <div className="use-case-section">
              <h2>Why Families Love GroupFund</h2>
              <p>
                Managing birthday contributions in large families can be overwhelming. With multiple family members, different contribution amounts, and varying payment schedules, it's easy for things to get chaotic. GroupFund brings order and transparency to family birthday contributions.
              </p>
              <p>
                Whether you're organizing contributions for grandparents, parents, siblings, cousins, or extended family members, GroupFund makes it simple to track who has contributed and who still needs to pay.
              </p>
            </div>

            <div className="use-case-section">
              <h2>Key Features for Families</h2>
              <div className="features-list">
                <div className="feature-item">
                  <h3>👨‍👩‍👧‍👦 Track Multiple Family Members</h3>
                  <p>Easily manage contributions for all family members in one place. See everyone's payment status at a glance.</p>
                </div>
                <div className="feature-item">
                  <h3>💰 Set Fair Contribution Amounts</h3>
                  <p>Set a fixed amount per person so everyone knows exactly what to contribute. No confusion or awkward conversations.</p>
                </div>
                <div className="feature-item">
                  <h3>📅 Never Miss a Birthday</h3>
                  <p>Get automatic reminders 7 days before, 1 day before, and on the birthday deadline. Never forget a family member's special day.</p>
                </div>
                <div className="feature-item">
                  <h3>✅ Transparent Tracking</h3>
                  <p>Everyone can see who has contributed and who hasn't. No more wondering if someone forgot to pay or if you missed a payment.</p>
                </div>
                <div className="feature-item">
                  <h3>🌍 Multi-Currency Support</h3>
                  <p>Perfect for families spread across different countries. Support for NGN, USD, GBP, EUR, and more.</p>
                </div>
                <div className="feature-item">
                  <h3>⭐ Member Reliability Scores</h3>
                  <p>See which family members consistently contribute on time. Make informed decisions about group participation.</p>
                </div>
                <div className="feature-item">
                  <h3>🎁 Birthday Wishlists</h3>
                  <p>Create and share birthday wishlists with family members. Add items with pictures and prices. Family members can claim items they want to gift, making gift coordination easy and avoiding duplicates.</p>
                </div>
              </div>
            </div>

            <div className="use-case-section">
              <h2>Common Family Scenarios</h2>
              <ul className="scenarios-list">
                <li><strong>Extended Family Groups:</strong> Organize contributions for grandparents, aunts, uncles, and cousins all in one group.</li>
                <li><strong>Sibling Groups:</strong> Keep track of birthday contributions among siblings and their families.</li>
                <li><strong>Multi-Generational Families:</strong> Manage contributions across different generations with varying contribution amounts.</li>
                <li><strong>International Families:</strong> Handle contributions when family members live in different countries with different currencies.</li>
              </ul>
            </div>

            <div className="use-case-section">
              <h2>How It Works for Families</h2>
              <ol className="steps-list">
                <li><strong>Create Your Family Group:</strong> Set up a group with your family members and choose a contribution amount that works for everyone.</li>
                <li><strong>Add Family Birthdays:</strong> Add all family member birthdays to the calendar so you never miss a celebration.</li>
                <li><strong>Set Contribution Amounts:</strong> Decide on a fair amount per person (e.g., ₦5,000 or $20) that everyone can afford.</li>
                <li><strong>Track Contributions:</strong> See in real-time who has contributed and who still needs to pay.</li>
                <li><strong>Get Automatic Reminders:</strong> Receive reminders before each birthday so you never forget to contribute.</li>
                <li><strong>Celebrate Together:</strong> Focus on celebrating birthdays instead of managing contributions.</li>
              </ol>
            </div>

            <div className="cta-box">
              <h2>Ready to Organize Your Family's Birthday Contributions?</h2>
              <p>Join thousands of families who use GroupFund to make birthday celebrations stress-free.</p>
              <div className="cta-buttons">
                <Link to="/waitlist" className="btn btn-primary btn-large">Start Your Family Group</Link>
                <Link to="/how-it-works" className="btn btn-secondary btn-large">See How It Works</Link>
              </div>
            </div>

            <div className="related-links">
              <h3>Explore Other Use Cases</h3>
              <div className="related-links-grid">
                <Link to="/use-cases/churches">For Churches →</Link>
                <Link to="/use-cases/schools">For Schools →</Link>
                <Link to="/use-cases/friend-groups">For Friend Groups →</Link>
                <Link to="/use-cases/workplace">For Workplace →</Link>
                <Link to="/use-cases/community-organizations">For Community Organizations →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

