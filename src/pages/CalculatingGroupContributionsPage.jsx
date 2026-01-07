import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function CalculatingGroupContributionsPage() {
  return (
    <>
      <SEO
        title="Calculating Group Contributions - How to Set Fair Amounts"
        description="Learn how to calculate fair contribution amounts for your group. Tips for setting amounts that work for everyone. Includes formulas and examples."
        keywords="calculating group contributions, birthday contribution calculator, how to set contribution amounts, fair contribution amounts, group payment calculation"
        canonical="https://www.groupfund.app/resources/calculating-group-contributions"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Calculating Group Contributions</h1>
          <p className="page-subtitle">
            How to calculate fair contribution amounts for your group
          </p>
        </div>
      </section>

      <section className="resource-detail-page">
        <div className="container">
          <div className="resource-content">
            <div className="resource-meta">
              <span className="resource-category">Planning</span>
              <span className="resource-read-time">6 min read</span>
            </div>

            <div className="resource-section">
              <h2>Introduction</h2>
              <p>
                Setting the right contribution amount is crucial for group harmony. Too high, and some members may struggle. Too low, and celebrations may be underwhelming. This guide helps you calculate fair contribution amounts that work for everyone in your group.
              </p>
            </div>

            <div className="resource-section">
              <h2>Basic Calculation Formula</h2>
              <p>
                The basic formula for calculating individual contributions:
              </p>
              <div className="formula-box">
                <p><strong>Individual Contribution = Total Budget ÷ Number of Contributors</strong></p>
              </div>
              <p>
                For example, if you want to raise 50,000 for a birthday gift and have 10 contributors:
              </p>
              <div className="formula-box">
                <p>50,000 ÷ 10 = 5,000 per person</p>
              </div>
            </div>

            <div className="resource-section">
              <h2>Annual Contribution Calculation</h2>
              <p>
                For groups that contribute throughout the year, calculate annual totals:
              </p>
              <div className="formula-box">
                <p><strong>Annual Contribution = Monthly Contribution × 12</strong></p>
                <p><strong>Or</strong></p>
                <p><strong>Annual Contribution = Per Birthday Amount × Number of Birthdays</strong></p>
              </div>
              <p>
                Example: If each member contributes 5,000 per birthday and there are 12 birthdays per year:
              </p>
              <div className="formula-box">
                <p>5,000 × 12 = 60,000 per year per member</p>
              </div>
            </div>

            <div className="resource-section">
              <h2>Factors to Consider</h2>
              
              <h3>1. Group Size</h3>
              <p>
                Larger groups can have lower individual contributions because costs are spread across more people. Smaller groups may need higher amounts per person.
              </p>

              <h3>2. Financial Capacity</h3>
              <p>
                Consider the financial situation of your group members. Set amounts that are affordable for everyone. It's better to set a lower amount that everyone can afford than a higher amount that some struggle with.
              </p>

              <h3>3. Celebration Type</h3>
              <p>
                Different celebrations may require different amounts:
              </p>
              <ul className="resource-list">
                <li>Simple birthday gifts: Lower amounts</li>
                <li>Milestone birthdays (50th, 60th): Higher amounts</li>
                <li>Combined celebrations: Adjust accordingly</li>
              </ul>

              <h3>4. Frequency</h3>
              <p>
                How often will you contribute? Monthly, per birthday, or annually? More frequent contributions may require lower amounts per contribution.
              </p>

              <h3>5. Currency and Location</h3>
              <p>
                Consider local costs and currency. What works in one country may not work in another. Research local gift costs and adjust accordingly.
              </p>
            </div>

            <div className="resource-section">
              <h2>Setting Fixed vs Variable Amounts</h2>
              
              <h3>Fixed Amounts (Recommended)</h3>
              <p>
                <strong>Pros:</strong>
              </p>
              <ul className="resource-list">
                <li>Fair and equal for everyone</li>
                <li>Easy to calculate and track</li>
                <li>Predictable annual costs</li>
                <li>Reduces confusion</li>
              </ul>
              <p>
                <strong>Example:</strong> Everyone contributes 5,000 per birthday, regardless of whose birthday it is.
              </p>

              <h3>Variable Amounts</h3>
              <p>
                <strong>Pros:</strong>
              </p>
              <ul className="resource-list">
                <li>Can adjust for special occasions</li>
                <li>More flexible</li>
              </ul>
              <p>
                <strong>Cons:</strong>
              </p>
              <ul className="resource-list">
                <li>More complex to track</li>
                <li>Can create unfairness</li>
                <li>Harder to calculate annual costs</li>
              </ul>
              <p>
                <strong>Recommendation:</strong> Use fixed amounts for simplicity and fairness.
              </p>
            </div>

            <div className="resource-section">
              <h2>Examples by Group Type</h2>
              
              <h3>Family Groups</h3>
              <p>
                <strong>Typical Amount:</strong> 3,000 - 10,000 per birthday (NGN) or $15 - $50 (USD)
              </p>
              <p>
                <strong>Considerations:</strong> Family groups often have varying financial situations. Set amounts that work for everyone.
              </p>

              <h3>Church Groups</h3>
              <p>
                <strong>Typical Amount:</strong> 2,000 - 5,000 per birthday (NGN) or $10 - $25 (USD)
              </p>
              <p>
                <strong>Considerations:</strong> Church groups may have many members, so lower amounts per person can still raise significant totals.
              </p>

              <h3>Workplace Groups</h3>
              <p>
                <strong>Typical Amount:</strong> 5,000 - 15,000 per birthday (NGN) or $25 - $75 (USD)
              </p>
              <p>
                <strong>Considerations:</strong> Workplace groups often have more consistent income levels, allowing for higher amounts.
              </p>

              <h3>Friend Groups</h3>
              <p>
                <strong>Typical Amount:</strong> 2,000 - 7,000 per birthday (NGN) or $10 - $35 (USD)
              </p>
              <p>
                <strong>Considerations:</strong> Friend groups vary widely. Discuss amounts openly to find what works for everyone.
              </p>
            </div>

            <div className="resource-section">
              <h2>Calculating Maximum Group Size</h2>
              <p>
                If you want to limit total annual contribution per member:
              </p>
              <div className="formula-box">
                <p><strong>Maximum Group Size = Annual Budget Limit ÷ (Per Birthday Amount × Birthdays Per Year)</strong></p>
              </div>
              <p>
                Example: If you want to limit annual contributions to 60,000, contribute 5,000 per birthday, and have 12 birthdays per year:
              </p>
              <div className="formula-box">
                <p>60,000 ÷ (5,000 × 12) = 1 member</p>
                <p>Or: 60,000 ÷ 5,000 = 12 birthdays maximum</p>
              </div>
              <p>
                This helps you decide how many members to allow in your group.
              </p>
            </div>

            <div className="resource-section">
              <h2>Reviewing and Adjusting Amounts</h2>
              <p>
                Contribution amounts aren't set in stone. Review them regularly:
              </p>
              <ul className="resource-list">
                <li><strong>Annually:</strong> Review amounts once per year</li>
                <li><strong>Consider Inflation:</strong> Adjust for cost of living changes</li>
                <li><strong>Member Feedback:</strong> Ask members if amounts are working</li>
                <li><strong>Group Changes:</strong> Adjust when group size changes significantly</li>
                <li><strong>Fairness:</strong> Ensure amounts remain fair for everyone</li>
              </ul>
            </div>

            <div className="cta-box">
              <h2>Ready to Set Up Your Group's Contribution Amounts?</h2>
              <p>GroupFund makes it easy to set fixed contribution amounts and calculate annual totals automatically.</p>
              <div className="cta-buttons">
                <Link to="/get-started" className="btn btn-primary btn-large">Start Free with GroupFund</Link>
                <Link to="/how-it-works" className="btn btn-secondary btn-large">See How It Works</Link>
              </div>
            </div>

            <div className="related-links">
              <h3>Related Guides</h3>
              <div className="related-links-grid">
                <Link to="/resources/how-to-organize-birthday-contributions">How to Organize Birthday Contributions →</Link>
                <Link to="/resources/multi-currency-group-payments">Multi-Currency Payments →</Link>
                <Link to="/resources/managing-large-group-contributions">Managing Large Groups →</Link>
                <Link to="/resources">View All Resources →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

