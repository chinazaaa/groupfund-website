import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function SplitwiseComparisonPage() {
  return (
    <>
      <SEO
        title="GroupFund vs Splitwise - Better Group Contribution Tracking"
        description="Compare GroupFund with Splitwise for organizing group contributions. See why GroupFund is purpose-built for group contributions with automatic reminders and member reliability scores."
        keywords="groupfund vs splitwise, splitwise vs groupfund, splitwise alternative for group contributions, group contribution app comparison, groupfund comparison"
        canonical="https://groupfund.app/comparisons/splitwise"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">GroupFund vs Splitwise</h1>
          <p className="page-subtitle">
            Why GroupFund is better than Splitwise for organizing group contributions
          </p>
        </div>
      </section>

      <section className="comparison-detail-page">
        <div className="container">
          <div className="comparison-content">
            <div className="comparison-intro">
              <h2>The Problem with Splitwise</h2>
              <p>
                Splitwise is great for splitting expenses like restaurant bills or rent, but it wasn't designed for recurring group contributions. It lacks group contribution features like automatic reminders, member reliability scores, and deadline tracking. GroupFund is purpose-built specifically for organizing group contributions - birthdays, subscriptions, events, and more.
              </p>
            </div>

            {/* Detailed Comparison Table */}
            <div className="detailed-comparison">
              <h2>Detailed Comparison</h2>
              <div className="comparison-features">
                <div className="comparison-feature-item">
                  <div className="feature-header">
                    <h3>Group Contribution Features</h3>
                  </div>
                  <div className="feature-comparison">
                    <div className="comparison-option">
                      <div className="option-name">GroupFund</div>
                      <div className="option-details">
                        <span className="check-mark">✓</span>
                        <span>Built specifically for group contributions. Multiple group types (Birthday, Subscription, General), automatic reminders, deadline tracking, and contribution tracking designed for all purposes.</span>
                      </div>
                    </div>
                    <div className="comparison-option">
                      <div className="option-name">Splitwise</div>
                      <div className="option-details">
                        <span className="cross-mark">✗</span>
                        <span>General expense splitting tool. No deadline tracking, no group-specific reminders, not designed for recurring contributions.</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="comparison-feature-item">
                  <div className="feature-header">
                    <h3>Automatic Reminders</h3>
                  </div>
                  <div className="feature-comparison">
                    <div className="comparison-option">
                      <div className="option-name">GroupFund</div>
                      <div className="option-details">
                        <span className="check-mark">✓</span>
                        <span>Automatic reminders before deadlines - 7 days, 1 day, and on deadline day for birthdays; before subscription deadlines; before event deadlines. Context-specific reminders for each group type.</span>
                      </div>
                    </div>
                    <div className="comparison-option">
                      <div className="option-name">Splitwise</div>
                      <div className="option-details">
                        <span className="cross-mark">✗</span>
                        <span>No automatic reminders for deadlines. You must manually create expenses and send reminders yourself for birthdays, subscriptions, and events.</span>
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
                    <h3>Birthday Wishlist</h3>
                  </div>
                  <div className="feature-comparison">
                    <div className="comparison-option">
                      <div className="option-name">GroupFund</div>
                      <div className="option-details">
                        <span className="check-mark">✓</span>
                        <span>Create and share birthday wishlists with group members. Add items with pictures and prices. Group members can claim items they want to gift, and you can track what's been claimed and what's still available.</span>
                      </div>
                    </div>
                    <div className="comparison-option">
                      <div className="option-name">Splitwise</div>
                      <div className="option-details">
                        <span className="cross-mark">✗</span>
                        <span>No wishlist feature. No way to share gift preferences or coordinate gift purchases with group members.</span>
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
                        <span>Two-step confirmation: members mark as paid, admins or celebrants confirm receipt. Prevents errors and disputes.</span>
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
                    <h3>Purpose-Built for Group Contributions</h3>
                  </div>
                  <div className="feature-comparison">
                    <div className="comparison-option">
                      <div className="option-name">GroupFund</div>
                      <div className="option-details">
                        <span className="check-mark">✓</span>
                        <span>Designed specifically for group contributions. Supports three group types (Birthday Groups, Subscription Groups, General Groups) with features optimized for each purpose.</span>
                      </div>
                    </div>
                    <div className="comparison-option">
                      <div className="option-name">Splitwise</div>
                      <div className="option-details">
                        <span className="cross-mark">✗</span>
                        <span>General expense splitting tool. Not optimized for recurring group contributions (birthdays, subscriptions, events) or deadline tracking.</span>
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
                  <h3>🎯 Purpose-Built for Groups</h3>
                  <p>GroupFund is built specifically for group contributions (birthdays, subscriptions, events). Splitwise is a general expense splitting tool.</p>
                </div>
                <div className="reason-card">
                  <h3>📅 Calendar & Deadlines</h3>
                  <p>Built-in calendar for birthdays and deadline tracking for subscriptions and events. Splitwise has no calendar or deadline features.</p>
                </div>
                <div className="reason-card">
                  <h3>🤖 Automatic Reminders</h3>
                  <p>Automatic reminders before deadlines for birthdays, subscriptions, and events. Splitwise requires manual expense creation and reminders.</p>
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
                  <h3>Scenario 1: Managing Multiple Contributions</h3>
                  <p><strong>Splitwise:</strong> You must manually create a new expense for each contribution as it comes. No calendar or deadline tracking. Easy to forget contributions.</p>
                  <p><strong>GroupFund:</strong> Calendar and deadline tracking for birthdays, subscriptions, and events. Automatic reminders before deadlines. Never miss a contribution.</p>
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
              <p>Join thousands of groups using GroupFund for group contribution management. Free to start, purpose-built for birthdays, subscriptions, and events.</p>
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

