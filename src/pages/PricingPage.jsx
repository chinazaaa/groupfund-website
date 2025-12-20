import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function PricingPage() {
  return (
    <>
      <SEO
        title="GroupFund Pricing - Free Group Contribution App | No Hidden Fees"
        description="GroupFund is completely free to start! Organize contributions for birthdays, subscriptions, and events at no cost. No hidden fees, no credit card required. Free forever for organizing group contributions."
        keywords="groupfund pricing, free group contribution app, free group payment app, contribution app free, groupfund cost, free contribution tracker, no cost group contributions"
        canonical="https://groupfund.app/pricing"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Simple, Transparent Pricing</h1>
          <p className="page-subtitle">
            GroupFund is free to start. No hidden fees, no credit card required. Organize contributions for birthdays, subscriptions, and events at no cost.
          </p>
        </div>
      </section>

      <section className="pricing-page">
        <div className="container">
          <div className="pricing-content">
            {/* Free Plan */}
            <div className="pricing-card featured">
              <div className="pricing-badge">Free Forever</div>
              <div className="pricing-header">
                <h2 className="pricing-title">Free Plan</h2>
                <div className="pricing-price">
                  <span className="price-amount">₦0</span>
                  <span className="price-period">/forever</span>
                </div>
                <p className="pricing-description">
                  Everything you need to organize contributions for birthdays, subscriptions, and events. No credit card required.
                </p>
              </div>
              <div className="pricing-features">
                <h3>Everything Included:</h3>
                <ul className="pricing-features-list">
                  <li>
                    <span className="feature-icon">✓</span>
                    <span>Unlimited groups</span>
                  </li>
                  <li>
                    <span className="feature-icon">✓</span>
                    <span>Unlimited members per group</span>
                  </li>
                  <li>
                    <span className="feature-icon">✓</span>
                    <span>Multi-currency support (NGN, USD, GBP, EUR, and more)</span>
                  </li>
                  <li>
                    <span className="feature-icon">✓</span>
                    <span>Member reliability scores</span>
                  </li>
                  <li>
                    <span className="feature-icon">✓</span>
                    <span>Group health metrics</span>
                  </li>
                  <li>
                    <span className="feature-icon">✓</span>
                    <span>Automatic payment reminders</span>
                  </li>
                  <li>
                    <span className="feature-icon">✓</span>
                    <span>Real-time payment tracking</span>
                  </li>
                  <li>
                    <span className="feature-icon">✓</span>
                    <span>Multiple group types (Birthday, Subscription, General)</span>
                  </li>
                  <li>
                    <span className="feature-icon">✓</span>
                    <span>Birthday calendar & history (for Birthday Groups)</span>
                  </li>
                  <li>
                    <span className="feature-icon">✓</span>
                    <span>Subscription deadline tracking (for Subscription Groups)</span>
                  </li>
                  <li>
                    <span className="feature-icon">✓</span>
                    <span>Event deadline tracking (for General Groups)</span>
                  </li>
                  <li>
                    <span className="feature-icon">✓</span>
                    <span>Push notifications & email alerts</span>
                  </li>
                  <li>
                    <span className="feature-icon">✓</span>
                    <span>Payment confirmation system</span>
                  </li>
                  <li>
                    <span className="feature-icon">✓</span>
                    <span>Advanced group controls</span>
                  </li>
                  <li>
                    <span className="feature-icon">✓</span>
                    <span>Complete contribution history</span>
                  </li>
                  <li>
                    <span className="feature-icon">✓</span>
                    <span>Mobile app (iOS & Android)</span>
                  </li>
                  <li>
                    <span className="feature-icon">✓</span>
                    <span>24/7 support</span>
                  </li>
                </ul>
              </div>
              <div className="pricing-cta">
                <Link to="/waitlist" className="btn btn-primary btn-large">
                  Get Started Free
                </Link>
                <p className="pricing-note">No credit card required • Free forever</p>
              </div>
            </div>
          </div>

          {/* Value Proposition Section */}
          <div className="pricing-value-section">
            <h2>Why GroupFund is Free</h2>
            <p>
              We believe that organizing group contributions shouldn't cost money. GroupFund is free because we want to make group organization accessible to everyone—families, churches, schools, friend groups, workplaces, and community organizations.
            </p>
            <p>
              Our mission is to end group contribution chaos, and charging for basic organization would go against that mission. That's why GroupFund will always be free for organizing group contributions.
            </p>
          </div>

          {/* Comparison Section */}
          <div className="pricing-comparison">
            <h2>Compare GroupFund with Alternatives</h2>
            <div className="comparison-table">
              <div className="comparison-row header">
                <div className="comparison-cell">Feature</div>
                <div className="comparison-cell highlight">GroupFund</div>
                <div className="comparison-cell">WhatsApp Groups</div>
                <div className="comparison-cell">Excel Spreadsheets</div>
              </div>
              <div className="comparison-row">
                <div className="comparison-cell">Cost</div>
                <div className="comparison-cell highlight">Free</div>
                <div className="comparison-cell">Free</div>
                <div className="comparison-cell">Free</div>
              </div>
              <div className="comparison-row">
                <div className="comparison-cell">Automatic Reminders</div>
                <div className="comparison-cell highlight">✓ Yes</div>
                <div className="comparison-cell">✗ Manual</div>
                <div className="comparison-cell">✗ No</div>
              </div>
              <div className="comparison-row">
                <div className="comparison-cell">Payment Tracking</div>
                <div className="comparison-cell highlight">✓ Real-time</div>
                <div className="comparison-cell">✗ Manual</div>
                <div className="comparison-cell">✗ Manual</div>
              </div>
              <div className="comparison-row">
                <div className="comparison-cell">Member Reliability Scores</div>
                <div className="comparison-cell highlight">✓ Yes</div>
                <div className="comparison-cell">✗ No</div>
                <div className="comparison-cell">✗ No</div>
              </div>
              <div className="comparison-row">
                <div className="comparison-cell">Multi-Currency Support</div>
                <div className="comparison-cell highlight">✓ Yes</div>
                <div className="comparison-cell">✗ No</div>
                <div className="comparison-cell">✗ No</div>
              </div>
              <div className="comparison-row">
                <div className="comparison-cell">Group Health Metrics</div>
                <div className="comparison-cell highlight">✓ Yes</div>
                <div className="comparison-cell">✗ No</div>
                <div className="comparison-cell">✗ No</div>
              </div>
              <div className="comparison-row">
                <div className="comparison-cell">Mobile App</div>
                <div className="comparison-cell highlight">✓ Yes</div>
                <div className="comparison-cell">✓ Yes</div>
                <div className="comparison-cell">✗ No</div>
              </div>
              <div className="comparison-row">
                <div className="comparison-cell">Multiple Group Types</div>
                <div className="comparison-cell highlight">✓ Yes</div>
                <div className="comparison-cell">✗ No</div>
                <div className="comparison-cell">✗ No</div>
              </div>
              <div className="comparison-row">
                <div className="comparison-cell">Transparency</div>
                <div className="comparison-cell highlight">✓ Full</div>
                <div className="comparison-cell">✗ Limited</div>
                <div className="comparison-cell">✗ Limited</div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="pricing-faq">
            <h2>Frequently Asked Questions</h2>
            <div className="faq-items">
              <div className="faq-item">
                <h3>Is GroupFund really free?</h3>
                <p>
                  Yes! GroupFund is completely free to use. There are no hidden fees, no subscription costs, and no credit card required. You can create unlimited groups and add unlimited members at no cost.
                </p>
              </div>
              <div className="faq-item">
                <h3>Will GroupFund always be free?</h3>
                <p>
                  Yes, GroupFund will always be free for organizing group contributions. Our mission is to make group organization accessible to everyone, and we're committed to keeping the core features free forever.
                </p>
              </div>
              <div className="faq-item">
                <h3>Are there any limitations on the free plan?</h3>
                <p>
                  No! The free plan includes all features: unlimited groups, unlimited members, multi-currency support, automatic reminders, payment tracking, member reliability scores, and everything else GroupFund offers.
                </p>
              </div>
              <div className="faq-item">
                <h3>Do you charge transaction fees?</h3>
                <p>
                  No. GroupFund doesn't process payments directly, we're a tracking and organization tool. All payments are made directly between group members using their preferred payment methods (bank transfers, mobile money, etc.). We don't charge any fees for transactions.
                </p>
              </div>
              <div className="faq-item">
                <h3>Will there be premium features in the future?</h3>
                <p>
                  We're focused on making GroupFund the best free tool for organizing group contributions. While we may add optional premium features in the future, all core functionality will always remain free.
                </p>
              </div>
              <div className="faq-item">
                <h3>How do you make money if it's free?</h3>
                <p>
                  Our primary goal is to solve the problem of organizing group contributions, not to maximize revenue. We're building GroupFund to help groups everywhere, and we believe that keeping it free is the best way to achieve our mission.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="cta-box">
            <h2>Ready to Get Started?</h2>
            <p>Join thousands of groups using GroupFund to organize contributions—completely free.</p>
            <div className="cta-buttons">
              <Link to="/waitlist" className="btn btn-primary btn-large">Start Free Today</Link>
              <Link to="/how-it-works" className="btn btn-secondary btn-large">See How It Works</Link>
            </div>
            <p style={{ marginTop: '24px', fontSize: '0.95rem', color: '#64748b' }}>
              No credit card required • No hidden fees • Free forever
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

