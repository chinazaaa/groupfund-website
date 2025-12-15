import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function SplitwiseComparisonPage() {
  return (
    <>
      <SEO
        title="GroupFund vs Splitwise - Better Birthday Contribution Tracking"
        description="Compare GroupFund with Splitwise for organizing birthday contributions. See why GroupFund is purpose-built for birthday contributions with automatic reminders and member reliability scores."
        keywords="groupfund vs splitwise, splitwise vs groupfund, splitwise alternative for birthday contributions, birthday contribution app comparison, groupfund comparison"
        canonical="https://groupfund.app/comparisons/splitwise"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">GroupFund vs Splitwise</h1>
          <p className="page-subtitle">
            Why GroupFund is better than Splitwise for organizing birthday contributions
          </p>
        </div>
      </section>

      <section className="comparison-detail-page">
        <div className="container">
          <div className="comparison-content">
            <div className="comparison-intro">
              <h2>The Problem with Splitwise</h2>
              <p>
                Splitwise is great for splitting expenses like restaurant bills or rent, but it wasn't designed for recurring birthday contributions. It lacks birthday-specific features like automatic reminders, member reliability scores, and contribution calendars. GroupFund is purpose-built specifically for birthday contributions.
              </p>
            </div>

            {/* Detailed Comparison Table */}
            <div className="detailed-comparison">
              <h2>Detailed Comparison</h2>
              <div className="comparison-features">
                <div className="comparison-feature-item">
                  <div className="feature-header">
                    <h3>Birthday-Specific Features</h3>
                  </div>
                  <div className="feature-comparison">
                    <div className="comparison-option">
                      <div className="option-name">GroupFund</div>
                      <div className="option-details">
                        <span className="check-mark">✓</span>
                        <span>Built specifically for birthday contributions. Birthday calendar, automatic reminders, and contribution tracking designed for birthdays.</span>
                      </div>
                    </div>
                    <div className="comparison-option">
                      <div className="option-name">Splitwise</div>
                      <div className="option-details">
                        <span className="cross-mark">✗</span>
                        <span>General expense splitting tool. No birthday calendar, no birthday-specific reminders, not designed for recurring contributions.</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="comparison-feature-item">
                  <div className="feature-header">
                    <h3>Automatic Birthday Reminders</h3>
                  </div>
                  <div className="feature-comparison">
                    <div className="comparison-option">
                      <div className="option-name">GroupFund</div>
                      <div className="option-details">
                        <span className="check-mark">✓</span>
                        <span>Automatic reminders 7 days before each birthday, 1 day before, and on deadline day. Birthday-specific reminders.</span>
                      </div>
                    </div>
                    <div className="comparison-option">
                      <div className="option-name">Splitwise</div>
                      <div className="option-details">
                        <span className="cross-mark">✗</span>
                        <span>No automatic birthday reminders. You must manually create expenses and send reminders yourself.</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="comparison-feature-item">
                  <div className="feature-header">
                    <h3>Birthday Calendar</h3>
                  </div>
                  <div className="feature-comparison">
                    <div className="comparison-option">
                      <div className="option-name">GroupFund</div>
                      <div className="option-details">
                        <span className="check-mark">✓</span>
                        <span>Built-in birthday calendar showing all upcoming birthdays. Never miss a birthday celebration.</span>
                      </div>
                    </div>
                    <div className="comparison-option">
                      <div className="option-name">Splitwise</div>
                      <div className="option-details">
                        <span className="cross-mark">✗</span>
                        <span>No birthday calendar. You must manually create expenses for each birthday as it comes.</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="comparison-feature-item">
                  <div className="feature-header">
                    <h3>Member Reliability Scores</h3>
                  </div>
                  <div className="feature-comparison">
                    <div className="comparison-option">
                      <div className="option-name">GroupFund</div>
                      <div className="option-details">
                        <span className="check-mark">✓</span>
                        <span>Automatic reliability scores (0-100) based on payment history. See who's reliable before joining groups.</span>
                      </div>
                    </div>
                    <div className="comparison-option">
                      <div className="option-name">Splitwise</div>
                      <div className="option-details">
                        <span className="cross-mark">✗</span>
                        <span>No reliability tracking. You can't see payment history or reliability before joining groups.</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="comparison-feature-item">
                  <div className="feature-header">
                    <h3>Fixed Contribution Amounts</h3>
                  </div>
                  <div className="feature-comparison">
                    <div className="comparison-option">
                      <div className="option-name">GroupFund</div>
                      <div className="option-details">
                        <span className="check-mark">✓</span>
                        <span>Set fixed contribution amounts per person. Everyone contributes the same amount, ensuring fairness.</span>
                      </div>
                    </div>
                    <div className="comparison-option">
                      <div className="option-name">Splitwise</div>
                      <div className="option-details">
                        <span className="cross-mark">✗</span>
                        <span>Designed for splitting expenses unevenly. Not ideal for fixed contribution amounts per person.</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="comparison-feature-item">
                  <div className="feature-header">
                    <h3>Group Health Metrics</h3>
                  </div>
                  <div className="feature-comparison">
                    <div className="comparison-option">
                      <div className="option-name">GroupFund</div>
                      <div className="option-details">
                        <span className="check-mark">✓</span>
                        <span>Automatic group health scores showing compliance rates and overall group performance.</span>
                      </div>
                    </div>
                    <div className="comparison-option">
                      <div className="option-name">Splitwise</div>
                      <div className="option-details">
                        <span className="cross-mark">✗</span>
                        <span>No group health tracking. Can't see overall group compliance or performance metrics.</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="comparison-feature-item">
                  <div className="feature-header">
                    <h3>Payment Confirmation System</h3>
                  </div>
                  <div className="feature-comparison">
                    <div className="comparison-option">
                      <div className="option-name">GroupFund</div>
                      <div className="option-details">
                        <span className="check-mark">✓</span>
                        <span>Two-step confirmation: members mark as paid, celebrants confirm receipt. Prevents errors and disputes.</span>
                      </div>
                    </div>
                    <div className="comparison-option">
                      <div className="option-name">Splitwise</div>
                      <div className="option-details">
                        <span className="cross-mark">✗</span>
                        <span>No confirmation system. Payments are marked as settled, but no celebrant confirmation step.</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="comparison-feature-item">
                  <div className="feature-header">
                    <h3>Purpose-Built for Birthdays</h3>
                  </div>
                  <div className="feature-comparison">
                    <div className="comparison-option">
                      <div className="option-name">GroupFund</div>
                      <div className="option-details">
                        <span className="check-mark">✓</span>
                        <span>Designed specifically for birthday contributions. Every feature is optimized for recurring birthday celebrations.</span>
                      </div>
                    </div>
                    <div className="comparison-option">
                      <div className="option-name">Splitwise</div>
                      <div className="option-details">
                        <span className="cross-mark">✗</span>
                        <span>General expense splitting tool. Not optimized for birthday contributions or recurring group payments.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Choose GroupFund */}
            <div className="why-choose-section">
              <h2>Why Choose GroupFund Over Splitwise?</h2>
              <div className="reasons-grid">
                <div className="reason-card">
                  <h3>🎂 Birthday-Focused</h3>
                  <p>GroupFund is built specifically for birthday contributions. Splitwise is a general expense splitting tool.</p>
                </div>
                <div className="reason-card">
                  <h3>📅 Birthday Calendar</h3>
                  <p>Built-in calendar showing all upcoming birthdays. Splitwise has no birthday calendar feature.</p>
                </div>
                <div className="reason-card">
                  <h3>🤖 Automatic Reminders</h3>
                  <p>Automatic birthday reminders. Splitwise requires manual expense creation and reminders.</p>
                </div>
                <div className="reason-card">
                  <h3>⭐ Reliability Scores</h3>
                  <p>See member reliability before joining groups. Splitwise has no reliability tracking.</p>
                </div>
                <div className="reason-card">
                  <h3>💰 Fixed Amounts</h3>
                  <p>Perfect for fixed contribution amounts. Splitwise is designed for uneven expense splitting.</p>
                </div>
                <div className="reason-card">
                  <h3>📊 Group Health</h3>
                  <p>Track group compliance and performance. Splitwise has no group health metrics.</p>
                </div>
              </div>
            </div>

            {/* Real-World Scenarios */}
            <div className="scenarios-section">
              <h2>Real-World Scenarios</h2>
              <div className="scenario-items">
                <div className="scenario-item">
                  <h3>Scenario 1: Managing Multiple Birthdays</h3>
                  <p><strong>Splitwise:</strong> You must manually create a new expense for each birthday as it comes. No calendar to see upcoming birthdays. Easy to forget a birthday.</p>
                  <p><strong>GroupFund:</strong> Birthday calendar shows all upcoming birthdays. Automatic reminders for each birthday. Never miss a celebration.</p>
                </div>
                <div className="scenario-item">
                  <h3>Scenario 2: Fixed Contribution Amounts</h3>
                  <p><strong>Splitwise:</strong> Designed for splitting expenses unevenly (e.g., "I paid $100, split 3 ways"). Not ideal for fixed amounts where everyone pays the same.</p>
                  <p><strong>GroupFund:</strong> Perfect for fixed contribution amounts. Everyone contributes the same amount (e.g., ₦5,000 per person), ensuring fairness.</p>
                </div>
                <div className="scenario-item">
                  <h3>Scenario 3: Member Reliability</h3>
                  <p><strong>Splitwise:</strong> No way to see if someone is reliable at paying before joining a group. You discover payment issues after joining.</p>
                  <p><strong>GroupFund:</strong> See member reliability scores before joining. Make informed decisions about which groups to join.</p>
                </div>
              </div>
            </div>

            <div className="cta-box">
              <h2>Ready to Switch from Splitwise?</h2>
              <p>Join thousands of groups using GroupFund for birthday-specific contribution management. Free to start, purpose-built for birthdays.</p>
              <div className="cta-buttons">
                <Link to="/waitlist" className="btn btn-primary btn-large">Try GroupFund Free</Link>
                <Link to="/how-it-works" className="btn btn-secondary btn-large">See How It Works</Link>
              </div>
            </div>

            <div className="related-links">
              <h3>Related Comparisons</h3>
              <div className="related-links-grid">
                <Link to="/comparisons/whatsapp-groups">GroupFund vs WhatsApp Groups →</Link>
                <Link to="/comparisons/excel-spreadsheets">GroupFund vs Excel Spreadsheets →</Link>
                <Link to="/comparisons/google-sheets">GroupFund vs Google Sheets →</Link>
                <Link to="/comparisons/manual-methods">GroupFund vs Manual Methods →</Link>
                <Link to="/comparisons/venmo">GroupFund vs Venmo →</Link>
                <Link to="/comparisons">View All Comparisons →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

