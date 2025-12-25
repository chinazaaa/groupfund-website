import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function FriendGroupsUseCasePage() {
  return (
    <>
      <SEO
        title="GroupFund for Friend Groups - Organize Friend Group Contributions"
        description="Keep your friend group's contributions organized with GroupFund - birthdays, shared subscriptions, events. No more awkward reminders or forgotten contributions."
        keywords="friend group contributions, friend group fund, group contribution tracker, group contributions for friends, friend group payments"
        canonical="https://www.groupfund.app/use-cases/friend-groups"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">GroupFund for Friend Groups</h1>
          <p className="page-subtitle">
            Keep your friend group's contributions organized - birthdays, shared subscriptions, events. No more awkward reminders or forgotten contributions.
          </p>
        </div>
      </section>

      <section className="use-case-detail-page">
        <div className="container">
          <div className="use-case-content">
            <div className="use-case-section">
              <h2>Why Friend Groups Love GroupFund</h2>
              <p>
                Organizing group contributions in friend groups can be awkward. Nobody wants to be the one constantly reminding friends to pay, and nobody wants to be the friend who forgot to contribute. GroupFund removes the awkwardness and makes organizing contributions effortless - for birthdays, shared subscriptions, events, and more.
              </p>
              <p>
                With automatic reminders, transparent tracking, and fair contribution amounts, GroupFund ensures everyone contributes fairly without the need for awkward conversations or constant follow-ups.
              </p>
            </div>

            <div className="use-case-section">
              <h2>Key Features for Friend Groups</h2>
              <div className="features-list">
                <div className="feature-item">
                  <h3>👥 Keep Groups Organized</h3>
                  <p>Manage contributions for your entire friend group in one place - birthdays, shared subscriptions, events. See everyone's payment status at a glance.</p>
                </div>
                <div className="feature-item">
                  <h3>😊 No Awkward Reminders</h3>
                  <p>Automatic reminders mean you never have to be the one asking friends to pay. The app handles it professionally.</p>
                </div>
                <div className="feature-item">
                  <h3>💰 Fair Contribution Amounts</h3>
                  <p>Set a fixed amount per person so everyone contributes equally. No confusion about who should pay what.</p>
                </div>
                <div className="feature-item">
                  <h3>✅ Transparent Tracking</h3>
                  <p>Everyone can see who has contributed and who hasn't. No more wondering if someone forgot or if you missed a payment.</p>
                </div>
                <div className="feature-item">
                  <h3>📅 Never Forget Deadlines</h3>
                  <p>Get automatic reminders before deadlines (7 days, 1 day, same day for birthdays; before subscription deadlines; before event deadlines). Never miss important dates.</p>
                </div>
                <div className="feature-item">
                  <h3>🎉 Celebrate Together</h3>
                  <p>Focus on celebrating birthdays instead of managing contributions. GroupFund handles the organization so you can enjoy the moment.</p>
                </div>
                <div className="feature-item">
                  <h3>⭐ Member Reliability</h3>
                  <p>See which friends consistently contribute on time. Helps maintain fairness in your friend group.</p>
                </div>
                <div className="feature-item">
                  <h3>🌍 Multi-Currency Support</h3>
                  <p>Perfect for friend groups with members in different countries. Support for NGN, USD, GBP, EUR, and more.</p>
                </div>
                <div className="feature-item">
                  <h3>🎁 Birthday Wishlists</h3>
                  <p>Create and share birthday wishlists with your friend group. Add items with pictures and prices. Friends can claim items they want to gift, making gift coordination effortless and avoiding duplicate gifts.</p>
                </div>
              </div>
            </div>

            <div className="use-case-section">
              <h2>Common Friend Group Scenarios</h2>
              <ul className="scenarios-list">
                <li><strong>College Friends:</strong> Organize birthday contributions for your college friend group, even after graduation.</li>
                <li><strong>Childhood Friends:</strong> Keep track of contributions for your long-time friend group.</li>
                <li><strong>Work Friends:</strong> Manage birthday contributions for your work friend group.</li>
                <li><strong>Hobby Groups:</strong> Organize contributions for friends you met through hobbies, sports, or activities.</li>
                <li><strong>International Friend Groups:</strong> Handle contributions when friends live in different countries.</li>
              </ul>
            </div>

            <div className="use-case-section">
              <h2>How It Works for Friend Groups</h2>
              <ol className="steps-list">
                <li><strong>Create Your Friend Group:</strong> Set up a group with your friends and decide on a contribution amount that works for everyone.</li>
                <li><strong>Add Friend Birthdays:</strong> Add all friend birthdays to the calendar so you never miss a celebration.</li>
                <li><strong>Set Contribution Amounts:</strong> Agree on a fair amount per person (e.g., ₦3,000 or $15) that everyone can afford.</li>
                <li><strong>Track Contributions:</strong> See in real-time who has contributed and who still needs to pay.</li>
                <li><strong>Automatic Reminders:</strong> Friends receive reminders before birthdays, so no one forgets to contribute.</li>
                <li><strong>Celebrate Together:</strong> Focus on celebrating birthdays instead of managing contributions.</li>
              </ol>
            </div>

            <div className="use-case-section">
              <h2>Benefits for Friend Groups</h2>
              <ul className="benefits-list">
                <li>Remove awkwardness from payment reminders</li>
                <li>Ensure everyone contributes fairly</li>
                <li>Never forget a friend's birthday</li>
                <li>Maintain transparency in contributions</li>
                <li>Easy to set up and manage</li>
                <li>Perfect for groups of any size</li>
                <li>Support for international friend groups</li>
              </ul>
            </div>

            <div className="cta-box">
              <h2>Ready to Organize Your Friend Group's Birthday Contributions?</h2>
              <p>Join friend groups using GroupFund to make birthday celebrations stress-free and fun.</p>
              <div className="cta-buttons">
                <Link to="/waitlist" className="btn btn-primary btn-large">Start Your Friend Group</Link>
                <Link to="/how-it-works" className="btn btn-secondary btn-large">See How It Works</Link>
              </div>
            </div>

            <div className="related-links">
              <h3>Explore Other Use Cases</h3>
              <div className="related-links-grid">
                <Link to="/use-cases/families">For Families →</Link>
                <Link to="/use-cases/churches">For Churches →</Link>
                <Link to="/use-cases/schools">For Schools →</Link>
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

