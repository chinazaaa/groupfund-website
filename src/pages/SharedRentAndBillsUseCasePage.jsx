import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function SharedRentAndBillsUseCasePage() {
  return (
    <>
      <SEO
        title="Shared Rent & Bills - Split Costs with Housemates | GroupFund"
        description="Split rent, Wi‑Fi, and utilities with housemates in one shared place. Use GroupFund to set fair amounts, track who has paid, and avoid awkward money conversations in the group chat."
        keywords="split rent with roommates, share bills with housemates, split utilities fairly, rent bill tracker, group payments for rent and bills, best app for splitting bills, split bills app, split costs with friends, split money with friends, best way to split bills, split expenses with friends, how to split costs with friends, split bills with roommates, split household bills"
        canonical="https://www.groupfund.app/use-cases/shared-rent-and-bills"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Shared Rent & Household Bills</h1>
          <p className="page-subtitle">
            Split rent, Wi‑Fi, electricity, water, and other shared bills with housemates using one link. Set clear amounts, track payments, and keep your home drama‑free.
          </p>
        </div>
      </section>

      <section className="use-case-detail-page">
        <div className="container">
          <div className="use-case-content">
            <div className="use-case-section">
              <h2>Why Splitting Rent & Bills Is So Stressful</h2>
              <p>
                Sharing a home is cheaper and more fun, but splitting monthly costs is where things get tense. One person usually pays the landlord or sets up all the bills, then spends the month chasing everyone else to send their share.
              </p>
              <p>
                With different paydays, changing utility amounts, and people coming and going, it is easy to lose track of who has paid and who still owes money. GroupFund gives you one shared place to manage rent and bills so everyone stays on the same page.
              </p>
            </div>

            <div className="use-case-section">
              <h2>Key Features for Shared Rent & Bills</h2>
              <div className="features-list">
                <div className="feature-item">
                  <h3>🏠 Dedicated Household Groups</h3>
                  <p>Create a group for your flat or house so all rent and shared bills are tracked together in one place.</p>
                </div>
                <div className="feature-item">
                  <h3>💰 Fair, Transparent Splits</h3>
                  <p>Agree equal shares or custom amounts per person if rooms or incomes are different, and make the split visible to everyone.</p>
                </div>
                <div className="feature-item">
                  <h3>📅 Monthly Due Dates</h3>
                  <p>Set recurring deadlines for rent day and bill dates so nobody forgets when payments are due.</p>
                </div>
                <div className="feature-item">
                  <h3>✅ Payment Status at a Glance</h3>
                  <p>See who has paid and who is still pending without scrolling through bank apps or old group messages.</p>
                </div>
                <div className="feature-item">
                  <h3>📊 Support for Multiple Bills</h3>
                  <p>Track rent, Wi‑Fi, electricity, water, streaming, and any other shared costs under the same household group.</p>
                </div>
                <div className="feature-item">
                  <h3>🌍 Works for Any Living Setup</h3>
                  <p>Whether you are students, young professionals, or a shared family home, everyone can see the same organised view.</p>
                </div>
              </div>
            </div>

            <div className="use-case-section">
              <h2>Common Shared Rent & Bill Scenarios</h2>
              <ul className="scenarios-list">
                <li><strong>Student Flatshares:</strong> Split rent and utilities fairly between flatmates without awkward chasing every month.</li>
                <li><strong>Young Professional Houses:</strong> Track who has paid for Wi‑Fi, electricity, and council tax for your shared house.</li>
                <li><strong>Couples with Flatmates:</strong> Handle different room sizes or couple/solo splits in a transparent way.</li>
                <li><strong>Short-Term House Shares:</strong> Keep contributions clear when people move in or out mid‑month.</li>
                <li><strong>Multi‑Household Setups:</strong> Use separate groups for different floors, annexes, or units sharing certain bills.</li>
              </ul>
            </div>

            <div className="use-case-section">
              <h2>How It Works for Shared Rent & Bills</h2>
              <ol className="steps-list">
                <li><strong>Create a Household Group:</strong> Name the group after your flat or house and add all current housemates.</li>
                <li><strong>Set Monthly Amounts:</strong> Add your monthly rent and shared bills, then decide equal or custom splits per person.</li>
                <li><strong>Choose Due Dates:</strong> Set your main rent deadline and any other bill dates so everyone knows when payments are expected.</li>
                <li><strong>Share the Group Invite Code:</strong> Drop the GroupFund invite code into your house WhatsApp or Messenger chat so everyone can see the same details.</li>
                <li><strong>Track Payments Each Month:</strong> Mark who has paid and see outstanding amounts at a glance, instead of guessing from messages.</li>
                <li><strong>Adjust When Things Change:</strong> Update amounts quickly if a bill changes, a new housemate joins, or someone moves out.</li>
                <li><strong>Keep the Peace at Home:</strong> Remove the confusion around money so you can focus on actually enjoying living together.</li>
              </ol>
            </div>

            <div className="cta-box">
              <h2>Ready to Split Rent & Bills the Easy Way?</h2>
              <p>Create a household group, invite your housemates, and keep every shared cost for your home organised in one simple link.</p>
              <div className="cta-buttons">
                <Link to="/get-started" className="btn btn-primary btn-large">
                  Start a Household Group
                </Link>
                <Link to="/how-it-works" className="btn btn-secondary btn-large">
                  See How It Works
                </Link>
              </div>
            </div>

            <div className="related-links">
              <h3>Explore Other Use Cases</h3>
              <div className="related-links-grid">
                <Link to="/use-cases/friend-groups">For Friend Groups →</Link>
                <Link to="/use-cases/group-trips-and-holidays">For Group Trips & Holidays →</Link>
                <Link to="/use-cases/shared-subscriptions">For Shared Subscriptions →</Link>
                <Link to="/best-practices/international-groups">For International Housemates →</Link>
                <Link to="/use-cases/families">For Families →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
