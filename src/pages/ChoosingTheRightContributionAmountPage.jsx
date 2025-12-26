import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function ChoosingTheRightContributionAmountPage() {
  return (
    <>
      <SEO
        title="Choosing the Right Contribution Amount - Guide for Group Leaders"
        description="Learn how to choose the right contribution amount for your group. Factors to consider, examples by group type, and tips for setting fair amounts that work for everyone."
        keywords="choosing contribution amount, setting contribution amounts, fair contribution amounts, group contribution amount guide, birthday contribution amount"
        canonical="https://www.groupfund.app/resources/choosing-the-right-contribution-amount"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Choosing the Right Contribution Amount</h1>
          <p className="page-subtitle">
            Guide for setting fair contribution amounts that work for everyone
          </p>
        </div>
      </section>

      <section className="resource-detail-page">
        <div className="container">
          <div className="resource-content">
            <div className="resource-meta">
              <span className="resource-category">Planning</span>
              <span className="resource-read-time">5 min read</span>
            </div>

            <div className="resource-section">
              <h2>Introduction</h2>
              <p>
                Choosing the right contribution amount is one of the most important decisions when setting up a group. Too high, and some members may struggle. Too low, and celebrations may be underwhelming. This guide helps you find the sweet spot.
              </p>
            </div>

            <div className="resource-section">
              <h2>Key Factors to Consider</h2>
              
              <h3>1. Group Members' Financial Capacity</h3>
              <p>
                The most important factor is what group members can afford:
              </p>
              <ul className="resource-list">
                <li>Consider the financial situation of all members</li>
                <li>Choose an amount that works for the least well-off member</li>
                <li>It's better to set a lower amount everyone can afford</li>
                <li>You can always increase amounts later if needed</li>
              </ul>

              <h3>2. Local Gift Costs</h3>
              <p>
                Research typical gift costs in your area:
              </p>
              <ul className="resource-list">
                <li>What do similar gifts cost locally?</li>
                <li>What's a reasonable budget for birthday gifts?</li>
                <li>Consider local purchasing power</li>
                <li>Adjust for your group's preferences</li>
              </ul>

              <h3>3. Group Size</h3>
              <p>
                Larger groups can have lower individual amounts:
              </p>
              <ul className="resource-list">
                <li>10 members × 5,000 = 50,000 total</li>
                <li>20 members × 2,500 = 50,000 total</li>
                <li>Same total, but lower per-person amount</li>
              </ul>

              <h3>4. Frequency of Contributions</h3>
              <p>
                How often will members contribute?
              </p>
              <ul className="resource-list">
                <li>Monthly contributions: Lower amounts per contribution</li>
                <li>Per birthday: Amounts depend on number of birthdays</li>
                <li>Annual: Can be higher since it's once per year</li>
              </ul>

              <h3>5. Group Type and Culture</h3>
              <p>
                Different groups have different expectations:
              </p>
              <ul className="resource-list">
                <li>Family groups: Often moderate amounts</li>
                <li>Church groups: Usually lower, more inclusive amounts</li>
                <li>Workplace groups: Can be higher, more professional</li>
                <li>Friend groups: Varies widely based on group culture</li>
              </ul>
            </div>

            <div className="resource-section">
              <h2>Recommended Amounts by Group Type</h2>
              
              <h3>Family Groups</h3>
              <p>
                <strong>Range:</strong> 3,000 - 10,000 (NGN) or $15 - $50 (USD)
              </p>
              <p>
                <strong>Considerations:</strong> Family groups often have varying financial situations. Start on the lower end and adjust based on feedback.
              </p>

              <h3>Church Groups</h3>
              <p>
                <strong>Range:</strong> 2,000 - 5,000 (NGN) or $10 - $25 (USD)
              </p>
              <p>
                <strong>Considerations:</strong> Church groups prioritize inclusivity. Lower amounts ensure everyone can participate.
              </p>

              <h3>Workplace Groups</h3>
              <p>
                <strong>Range:</strong> 5,000 - 15,000 (NGN) or $25 - $75 (USD)
              </p>
              <p>
                <strong>Considerations:</strong> Workplace groups often have more consistent income levels, allowing for higher amounts.
              </p>

              <h3>Friend Groups</h3>
              <p>
                <strong>Range:</strong> 2,000 - 7,000 (NGN) or $10 - $35 (USD)
              </p>
              <p>
                <strong>Considerations:</strong> Friend groups vary widely. Discuss openly to find what works for everyone.
              </p>

              <h3>School Groups</h3>
              <p>
                <strong>Range:</strong> 2,000 - 5,000 (NGN) or $10 - $25 (USD)
              </p>
              <p>
                <strong>Considerations:</strong> School groups often include teachers with varying salaries. Keep amounts moderate.
              </p>
            </div>

            <div className="resource-section">
              <h2>Decision-Making Process</h2>
              
              <h3>Step 1: Research</h3>
              <p>
                Research typical amounts for similar groups in your area or context.
              </p>

              <h3>Step 2: Discuss with Group</h3>
              <p>
                If possible, discuss amounts with potential members before finalizing. Get input on what works for everyone.
              </p>

              <h3>Step 3: Start Conservative</h3>
              <p>
                Start with a lower amount. It's easier to increase later than to decrease.
              </p>

              <h3>Step 4: Review Annually</h3>
              <p>
                Review amounts once per year. Adjust based on:
              </p>
              <ul className="resource-list">
                <li>Member feedback</li>
                <li>Cost of living changes</li>
                <li>Group needs</li>
                <li>Financial situations</li>
              </ul>
            </div>

            <div className="resource-section">
              <h2>Common Mistakes to Avoid</h2>
              <ul className="resource-list">
                <li><strong>Setting Too High:</strong> Don't set amounts that some members can't afford</li>
                <li><strong>Not Considering Everyone:</strong> Consider the least well-off member, not just the average</li>
                <li><strong>Changing Mid-Year:</strong> Avoid changing amounts during the year</li>
                <li><strong>No Discussion:</strong> Don't set amounts without any group input</li>
                <li><strong>Ignoring Local Context:</strong> Consider local costs and purchasing power</li>
              </ul>
            </div>

            <div className="resource-section">
              <h2>Special Considerations</h2>
              
              <h3>Milestone Birthdays</h3>
              <p>
                Some groups have special amounts for milestone birthdays (50th, 60th, etc.). Consider if you want:
              </p>
              <ul className="resource-list">
                <li>Standard amounts for all birthdays</li>
                <li>Higher amounts for milestone birthdays</li>
                <li>Special celebrations for certain ages</li>
              </ul>

              <h3>International Groups</h3>
              <p>
                For international groups, consider:
              </p>
              <ul className="resource-list">
                <li>Purchasing power differences</li>
                <li>Exchange rates</li>
                <li>Local costs in different countries</li>
                <li>Fairness across currencies</li>
              </ul>
            </div>

            <div className="cta-box">
              <h2>Ready to Set Your Group's Contribution Amount?</h2>
              <p>GroupFund makes it easy to set fixed contribution amounts and calculate annual totals.</p>
              <div className="cta-buttons">
                <Link to="/waitlist" className="btn btn-primary btn-large">Start Free with GroupFund</Link>
                <Link to="/resources/calculating-group-contributions">Calculating Contributions →</Link>
              </div>
            </div>

            <div className="related-links">
              <h3>Related Guides</h3>
              <div className="related-links-grid">
                <Link to="/resources/calculating-group-contributions">Calculating Group Contributions →</Link>
                <Link to="/resources/budgeting-for-group-contributions">Budgeting for Contributions →</Link>
                <Link to="/resources/birthday-contribution-etiquette">Birthday Contribution Etiquette →</Link>
                <Link to="/resources">View All Resources →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

