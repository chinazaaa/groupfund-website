import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function YearlyContributionEstimatorPage() {
  const [contributionAmount, setContributionAmount] = useState('')
  const [groupSize, setGroupSize] = useState('')
  const [frequency, setFrequency] = useState('monthly')
  const [groupType, setGroupType] = useState('birthday')
  const [result, setResult] = useState(null)
  const [error, setError] = useState('')

  const calculate = () => {
    setError('')
    setResult(null)

    const amount = parseFloat(contributionAmount)
    const size = parseInt(groupSize)

    if (!contributionAmount || !groupSize) {
      setError('Please enter both contribution amount and group size')
      return
    }

    if (isNaN(amount) || amount <= 0) {
      setError('Contribution amount must be a positive number')
      return
    }

    if (isNaN(size) || size <= 0 || !Number.isInteger(size)) {
      setError('Group size must be a positive whole number')
      return
    }

    let contributionsPerYear = 0
    let totalPerYear = 0
    let description = ''

    if (groupType === 'birthday') {
      // Birthday groups: one contribution per member per year
      contributionsPerYear = size
      totalPerYear = amount * size
      description = `In a birthday group with ${size} members, you'll contribute once per year for each member's birthday (${size} contributions total).`
    } else if (groupType === 'subscription') {
      if (frequency === 'monthly') {
        contributionsPerYear = 12
        totalPerYear = amount * 12
        description = `For a monthly subscription group, you'll contribute 12 times per year (once per month).`
      } else if (frequency === 'annual') {
        contributionsPerYear = 1
        totalPerYear = amount
        description = `For an annual subscription group, you'll contribute once per year.`
      }
    } else if (groupType === 'general') {
      // General groups: assume one event per year
      contributionsPerYear = 1
      totalPerYear = amount
      description = `For a general group with one event per year, you'll contribute once per year.`
    }

    setResult({
      contributionAmount: amount,
      groupSize: size,
      contributionsPerYear: contributionsPerYear,
      totalPerYear: totalPerYear,
      frequency: frequency,
      groupType: groupType,
      description: description
    })
  }

  const reset = () => {
    setContributionAmount('')
    setGroupSize('')
    setFrequency('monthly')
    setGroupType('birthday')
    setResult(null)
    setError('')
  }

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(amount)
  }

  return (
    <>
      <SEO
        title="Yearly Contribution Estimator - Calculate Annual Group Contribution Costs | GroupFund"
        description="Free yearly contribution estimator. Calculate your total annual contribution commitment for birthday groups, subscription groups, and events. Plan your budget and know your yearly costs upfront."
        keywords="yearly contribution calculator, annual contribution estimator, group contribution budget, yearly group payment calculator, birthday group yearly cost, subscription group yearly cost, contribution budget calculator, annual payment estimator"
        canonical="https://www.groupfund.app/tools/yearly-contribution-estimator"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Yearly Contribution Estimator</h1>
          <p className="page-subtitle">
            Calculate your total yearly contribution commitment for a group. Plan your budget and know your annual costs upfront.
          </p>
        </div>
      </section>

      <section className="calculator-page">
        <div className="container">
          <div className="calculator-container">
            <div className="calculator-card">
              <h2>Estimate Yearly Contributions</h2>
              <p className="calculator-description">
                Enter your contribution details to calculate your total yearly commitment.
              </p>

              <div className="calculator-form">
                <div className="form-group">
                  <label htmlFor="groupType">Group Type</label>
                  <select
                    id="groupType"
                    value={groupType}
                    onChange={(e) => setGroupType(e.target.value)}
                  >
                    <option value="birthday">Birthday Group</option>
                    <option value="subscription">Subscription Group</option>
                    <option value="general">General Group</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="contributionAmount">Contribution Amount (Per Person)</label>
                  <div className="input-wrapper">
                    <input
                      type="number"
                      id="contributionAmount"
                      placeholder="0.00"
                      value={contributionAmount}
                      onChange={(e) => setContributionAmount(e.target.value)}
                      min="0"
                      step="0.01"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="groupSize">Group Size (Number of Members)</label>
                  <input
                    type="number"
                    id="groupSize"
                    placeholder="e.g., 10"
                    value={groupSize}
                    onChange={(e) => setGroupSize(e.target.value)}
                    min="1"
                    step="1"
                  />
                </div>

                {(groupType === 'subscription') && (
                  <div className="form-group">
                    <label htmlFor="frequency">Subscription Frequency</label>
                    <select
                      id="frequency"
                      value={frequency}
                      onChange={(e) => setFrequency(e.target.value)}
                    >
                      <option value="monthly">Monthly</option>
                      <option value="annual">Annual</option>
                    </select>
                  </div>
                )}

                {error && (
                  <div className="calculator-error">
                    <span>⚠️</span> {error}
                  </div>
                )}

                <div className="calculator-actions">
                  <button onClick={calculate} className="btn btn-primary btn-large">
                    Calculate
                  </button>
                  <button onClick={reset} className="btn btn-secondary">
                    Reset
                  </button>
                </div>
              </div>

              {result && (
                <div className="calculator-result">
                  <h3>Yearly Contribution Estimate</h3>
                  <div className="result-card">
                    <div className="result-item highlight-item">
                      <span className="result-label">Total Yearly Contribution:</span>
                      <span className="result-value highlight">{formatCurrency(result.totalPerYear)}</span>
                    </div>
                    <div className="result-item">
                      <span className="result-label">Per Contribution:</span>
                      <span className="result-value">{formatCurrency(result.contributionAmount)}</span>
                    </div>
                    <div className="result-item">
                      <span className="result-label">Contributions Per Year:</span>
                      <span className="result-value">{result.contributionsPerYear} {result.contributionsPerYear === 1 ? 'time' : 'times'}</span>
                    </div>
                    <div className="result-item">
                      <span className="result-label">Group Size:</span>
                      <span className="result-value">{result.groupSize} {result.groupSize === 1 ? 'member' : 'members'}</span>
                    </div>
                    {result.groupType === 'subscription' && (
                      <div className="result-item">
                        <span className="result-label">Frequency:</span>
                        <span className="result-value">{result.frequency === 'monthly' ? 'Monthly' : 'Annual'}</span>
                      </div>
                    )}
                  </div>
                  <div className="result-description">
                    <p><strong>How it works:</strong> {result.description}</p>
                  </div>
                </div>
              )}
            </div>

            <div className="calculator-info">
              <h3>How to Use This Estimator</h3>
              <ol className="info-list">
                <li><strong>Select Group Type:</strong> Choose Birthday Group, Subscription Group, or General Group</li>
                <li><strong>Enter Contribution Amount:</strong> The amount each person contributes (e.g., 5,000)</li>
                <li><strong>Enter Group Size:</strong> The number of members in the group</li>
                <li><strong>Select Frequency:</strong> For subscription groups, choose monthly or annual</li>
                <li><strong>Calculate:</strong> See your total yearly contribution commitment</li>
              </ol>

              <h3>Group Type Calculations</h3>
              <ul className="info-list">
                <li><strong>Birthday Groups:</strong> You contribute once per year for each member's birthday. If the group has 10 members, you'll contribute 10 times per year (once for each birthday).</li>
                <li><strong>Subscription Groups (Monthly):</strong> You contribute 12 times per year (once per month) regardless of group size.</li>
                <li><strong>Subscription Groups (Annual):</strong> You contribute once per year.</li>
                <li><strong>General Groups:</strong> Typically one contribution per year per event. Adjust based on your group's actual frequency.</li>
              </ul>

              <h3>Budgeting Tips</h3>
              <ul className="info-list">
                <li>Use this calculator before joining a group to understand your yearly commitment</li>
                <li>Set aside the estimated amount in your budget at the beginning of the year</li>
                <li>Consider your total contribution commitments across all groups you're in</li>
                <li>Remember that contribution amounts can change - admins can update amounts and notify members</li>
                <li>For birthday groups, the actual number of contributions may vary if members join or leave</li>
              </ul>

              <div className="calculator-cta">
                <h3>Ready to Start Your Group?</h3>
                <p>Use GroupFund to track contributions, see who has paid, and get automatic reminders.</p>
                <Link to="/get-started" className="btn btn-primary btn-large">Start Your Free Group</Link>
              </div>
            </div>
          </div>

          <div className="related-tools">
            <h2>Related Tools & Resources</h2>
            <div className="related-tools-grid">
              <Link to="/tools/contribution-calculator" className="related-tool-card">
                <span className="tool-icon">🧮</span>
                <h3>Contribution Calculator</h3>
                <p>Calculate per-person contribution amounts</p>
              </Link>
              <Link to="/resources/budgeting-for-group-contributions" className="related-tool-card">
                <span className="tool-icon">💰</span>
                <h3>Budgeting for Contributions</h3>
                <p>Learn how to budget for group contributions</p>
              </Link>
              <Link to="/resources/choosing-the-right-contribution-amount" className="related-tool-card">
                <span className="tool-icon">💡</span>
                <h3>Choosing Contribution Amounts</h3>
                <p>Guide for setting fair contribution amounts</p>
              </Link>
              <Link to="/resources/calculating-group-contributions" className="related-tool-card">
                <span className="tool-icon">📚</span>
                <h3>Calculating Group Contributions</h3>
                <p>Complete guide to calculating contributions</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .calculator-page {
          padding: 3rem 0;
        }

        .calculator-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          margin-bottom: 4rem;
        }

        .calculator-card {
          background: white;
          border: 1px solid #e5e7eb;
          border-radius: 12px;
          padding: 2rem;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }

        .calculator-card h2 {
          font-size: 1.75rem;
          margin-bottom: 0.5rem;
          color: #111827;
        }

        .calculator-description {
          color: #6b7280;
          margin-bottom: 2rem;
        }

        .calculator-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .form-group label {
          font-weight: 500;
          color: #374151;
          font-size: 0.9rem;
        }

        .input-wrapper {
          position: relative;
        }

        .currency-symbol {
          position: absolute;
          left: 1rem;
          top: 50%;
          transform: translateY(-50%);
          color: #6b7280;
          font-weight: 500;
        }

        .form-group input,
        .form-group select {
          width: 100%;
          padding: 0.75rem 1rem;
          border: 2px solid #e5e7eb;
          border-radius: 8px;
          font-size: 1rem;
          transition: border-color 0.3s;
        }

        .input-wrapper input {
          padding-left: 1rem;
        }

        .form-group input:focus,
        .form-group select:focus {
          outline: none;
          border-color: #667eea;
        }

        .calculator-error {
          padding: 1rem;
          background: #fef2f2;
          border: 1px solid #fecaca;
          border-radius: 8px;
          color: #991b1b;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .calculator-actions {
          display: flex;
          gap: 1rem;
          margin-top: 0.5rem;
        }

        .calculator-result {
          margin-top: 2rem;
          padding-top: 2rem;
          border-top: 2px solid #e5e7eb;
        }

        .calculator-result h3 {
          font-size: 1.25rem;
          margin-bottom: 1rem;
          color: #111827;
        }

        .result-card {
          background: #f9fafb;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          padding: 1.5rem;
        }

        .result-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.75rem 0;
          border-bottom: 1px solid #e5e7eb;
        }

        .result-item:last-child {
          border-bottom: none;
        }

        .highlight-item {
          background: #eff6ff;
          margin: -0.5rem;
          padding: 1rem 0.5rem;
          border-radius: 6px;
          border-bottom: 2px solid #3b82f6;
        }

        .result-label {
          font-weight: 500;
          color: #374151;
        }

        .result-value {
          font-weight: 600;
          color: #111827;
        }

        .result-value.highlight {
          color: #667eea;
          font-size: 1.5rem;
        }

        .result-description {
          margin-top: 1rem;
          padding: 1rem;
          background: #f0f9ff;
          border-left: 4px solid #3b82f6;
          border-radius: 4px;
        }

        .result-description p {
          margin: 0;
          color: #1e40af;
          line-height: 1.6;
        }

        .calculator-info {
          background: white;
          border: 1px solid #e5e7eb;
          border-radius: 12px;
          padding: 2rem;
        }

        .calculator-info h3 {
          font-size: 1.25rem;
          margin-top: 2rem;
          margin-bottom: 1rem;
          color: #111827;
        }

        .calculator-info h3:first-child {
          margin-top: 0;
        }

        .info-list {
          list-style-position: outside;
          padding-left: 1.5rem;
          color: #4b5563;
          line-height: 1.8;
        }

        .info-list li {
          margin-bottom: 0.75rem;
        }

        .info-list strong {
          color: #111827;
        }

        .calculator-cta {
          margin-top: 2rem;
          padding: 1.5rem;
          background: #f3f4f6;
          border-radius: 8px;
          text-align: center;
        }

        .calculator-cta h3 {
          margin-top: 0;
          margin-bottom: 0.5rem;
        }

        .calculator-cta p {
          margin-bottom: 1rem;
          color: #6b7280;
        }

        .related-tools {
          margin-top: 4rem;
          padding-top: 3rem;
          border-top: 2px solid #e5e7eb;
        }

        .related-tools h2 {
          font-size: 1.75rem;
          margin-bottom: 2rem;
          color: #111827;
        }

        .related-tools-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
        }

        .related-tool-card {
          display: flex;
          flex-direction: column;
          padding: 1.5rem;
          background: white;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          text-decoration: none;
          color: inherit;
          transition: all 0.3s;
        }

        .related-tool-card:hover {
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transform: translateY(-2px);
        }

        .tool-icon {
          font-size: 2rem;
          margin-bottom: 0.75rem;
        }

        .related-tool-card h3 {
          font-size: 1.1rem;
          margin-bottom: 0.5rem;
          color: #111827;
        }

        .related-tool-card p {
          font-size: 0.9rem;
          color: #6b7280;
          margin: 0;
        }

        @media (max-width: 968px) {
          .calculator-container {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .calculator-card,
          .calculator-info {
            padding: 1.5rem;
          }

          .calculator-actions {
            flex-direction: column;
          }

          .calculator-actions .btn {
            width: 100%;
          }

          .related-tools-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  )
}

