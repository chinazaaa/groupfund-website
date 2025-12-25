import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function ContributionCalculatorPage() {
  const [totalAmount, setTotalAmount] = useState('')
  const [groupSize, setGroupSize] = useState('')
  const [calculationMethod, setCalculationMethod] = useState('equal')
  const [result, setResult] = useState(null)
  const [error, setError] = useState('')

  const calculate = () => {
    setError('')
    setResult(null)

    const total = parseFloat(totalAmount)
    const size = parseInt(groupSize)

    if (!totalAmount || !groupSize) {
      setError('Please enter both total amount and group size')
      return
    }

    if (isNaN(total) || total <= 0) {
      setError('Total amount must be a positive number')
      return
    }

    if (isNaN(size) || size <= 0 || !Number.isInteger(size)) {
      setError('Group size must be a positive whole number')
      return
    }

    if (calculationMethod === 'equal') {
      const perPerson = total / size
      setResult({
        perPerson: perPerson,
        total: total,
        groupSize: size,
        method: 'Equal Split'
      })
    } else if (calculationMethod === 'percentage') {
      // For percentage-based, we'll use a simple example
      // In a real scenario, you'd have different percentages per person
      const perPerson = total / size
      setResult({
        perPerson: perPerson,
        total: total,
        groupSize: size,
        method: 'Equal Split (Percentage-based calculation would require individual percentages)'
      })
    }
  }

  const reset = () => {
    setTotalAmount('')
    setGroupSize('')
    setCalculationMethod('equal')
    setResult(null)
    setError('')
  }

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(amount)
  }

  return (
    <>
      <SEO
        title="Group Contribution Calculator - Calculate Per-Person Amounts | GroupFund"
        description="Free group contribution calculator. Calculate how much each person should contribute in a group. Perfect for birthday groups, subscription groups, events, and any group contribution scenario. Easy to use, instant results."
        keywords="group contribution calculator, calculate per person contribution, contribution amount calculator, group payment calculator, birthday contribution calculator, split payment calculator, group fund calculator, contribution splitter"
        canonical="https://www.groupfund.app/tools/contribution-calculator"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Group Contribution Calculator</h1>
          <p className="page-subtitle">
            Calculate how much each person should contribute in your group. Perfect for birthdays, subscriptions, events, and any group contribution scenario.
          </p>
        </div>
      </section>

      <section className="calculator-page">
        <div className="container">
          <div className="calculator-container">
            <div className="calculator-card">
              <h2>Calculate Contribution Amount</h2>
              <p className="calculator-description">
                Enter the total amount and group size to calculate how much each person should contribute.
              </p>

              <div className="calculator-form">
                <div className="form-group">
                  <label htmlFor="totalAmount">Total Amount</label>
                  <div className="input-wrapper">
                    <span className="currency-symbol">₦</span>
                    <input
                      type="number"
                      id="totalAmount"
                      placeholder="0.00"
                      value={totalAmount}
                      onChange={(e) => setTotalAmount(e.target.value)}
                      min="0"
                      step="0.01"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="groupSize">Group Size (Number of People)</label>
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

                <div className="form-group">
                  <label htmlFor="calculationMethod">Calculation Method</label>
                  <select
                    id="calculationMethod"
                    value={calculationMethod}
                    onChange={(e) => setCalculationMethod(e.target.value)}
                  >
                    <option value="equal">Equal Split (Everyone pays the same)</option>
                    <option value="percentage">Percentage-Based (Different amounts per person)</option>
                  </select>
                  {calculationMethod === 'percentage' && (
                    <p className="form-hint">
                      For percentage-based calculations, you'll need to specify individual percentages. For now, this calculates equal split.
                    </p>
                  )}
                </div>

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
                  <h3>Calculation Result</h3>
                  <div className="result-card">
                    <div className="result-item">
                      <span className="result-label">Per Person Contribution:</span>
                      <span className="result-value highlight">{formatCurrency(result.perPerson)}</span>
                    </div>
                    <div className="result-item">
                      <span className="result-label">Total Amount:</span>
                      <span className="result-value">{formatCurrency(result.total)}</span>
                    </div>
                    <div className="result-item">
                      <span className="result-label">Group Size:</span>
                      <span className="result-value">{result.groupSize} {result.groupSize === 1 ? 'person' : 'people'}</span>
                    </div>
                    <div className="result-item">
                      <span className="result-label">Method:</span>
                      <span className="result-value">{result.method}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="calculator-info">
              <h3>How to Use This Calculator</h3>
              <ol className="info-list">
                <li><strong>Enter Total Amount:</strong> The total amount you need to collect from the group (e.g., ₦50,000 for a birthday gift)</li>
                <li><strong>Enter Group Size:</strong> The number of people who will contribute (e.g., 10 people)</li>
                <li><strong>Choose Method:</strong> Select equal split (everyone pays the same) or percentage-based (different amounts)</li>
                <li><strong>Calculate:</strong> Click calculate to see how much each person should contribute</li>
              </ol>

              <h3>Use Cases</h3>
              <ul className="info-list">
                <li><strong>Birthday Groups:</strong> Calculate how much each member should contribute for a birthday gift</li>
                <li><strong>Subscription Groups:</strong> Split subscription costs (Netflix, Spotify, etc.) equally among members</li>
                <li><strong>Event Contributions:</strong> Calculate per-person costs for weddings, parties, or other events</li>
                <li><strong>General Groups:</strong> Any scenario where you need to split costs among group members</li>
              </ul>

              <h3>Tips</h3>
              <ul className="info-list">
                <li>Round up to the nearest whole number for easier payment (e.g., ₦5,000 instead of ₦4,999.99)</li>
                <li>Consider setting a fixed contribution amount in GroupFund for consistency</li>
                <li>For large groups, consider rounding to avoid dealing with small change</li>
                <li>Always communicate the contribution amount clearly to all group members</li>
              </ul>

              <div className="calculator-cta">
                <h3>Ready to Organize Your Group?</h3>
                <p>Use GroupFund to track contributions, see who has paid, and get automatic reminders.</p>
                <Link to="/waitlist" className="btn btn-primary btn-large">
                  Start Your Free Group
                </Link>
              </div>
            </div>
          </div>

          <div className="related-tools">
            <h2>Related Tools & Resources</h2>
            <div className="related-tools-grid">
              <Link to="/tools/yearly-contribution-estimator" className="related-tool-card">
                <span className="tool-icon">📅</span>
                <h3>Yearly Contribution Estimator</h3>
                <p>Calculate your total yearly contribution commitment for a group</p>
              </Link>
              <Link to="/resources/calculating-group-contributions" className="related-tool-card">
                <span className="tool-icon">📚</span>
                <h3>Calculating Group Contributions Guide</h3>
                <p>Learn best practices for calculating contribution amounts</p>
              </Link>
              <Link to="/resources/choosing-the-right-contribution-amount" className="related-tool-card">
                <span className="tool-icon">💡</span>
                <h3>Choosing Contribution Amounts</h3>
                <p>Guide for setting fair contribution amounts</p>
              </Link>
              <Link to="/resources/budgeting-for-group-contributions" className="related-tool-card">
                <span className="tool-icon">💰</span>
                <h3>Budgeting for Contributions</h3>
                <p>Learn how to budget for group contributions</p>
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
          padding-left: 2.5rem;
        }

        .form-group input:focus,
        .form-group select:focus {
          outline: none;
          border-color: #667eea;
        }

        .form-hint {
          font-size: 0.85rem;
          color: #6b7280;
          margin-top: 0.25rem;
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
          font-size: 1.25rem;
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

