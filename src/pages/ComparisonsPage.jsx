import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function ComparisonsPage() {
  const comparisons = [
    {
      slug: 'whatsapp-groups',
      title: 'GroupFund vs WhatsApp Groups',
      description: 'See why GroupFund is better than WhatsApp groups for organizing birthday contributions. Automatic reminders, payment tracking, and member reliability scores.',
      icon: '💬',
      keyFeatures: [
        'Automatic payment reminders',
        'Real-time payment tracking',
        'Member reliability scores',
        'Group health metrics'
      ],
      keywords: 'groupfund vs whatsapp, whatsapp groups vs groupfund, better than whatsapp'
    },
    {
      slug: 'excel-spreadsheets',
      title: 'GroupFund vs Excel Spreadsheets',
      description: 'Compare GroupFund with Excel spreadsheets. See why automation, mobile access, and real-time collaboration make GroupFund the better choice.',
      icon: '📊',
      keyFeatures: [
        'Fully automated tracking',
        'Mobile app access',
        'Real-time collaboration',
        'No manual updates needed'
      ],
      keywords: 'groupfund vs excel, excel vs groupfund, excel alternative'
    },
    {
      slug: 'google-sheets',
      title: 'GroupFund vs Google Sheets',
      description: 'Compare GroupFund with Google Sheets. See why automation, mobile access, and birthday-specific features make GroupFund superior.',
      icon: '📈',
      keyFeatures: [
        'Fully automated reminders',
        'Mobile-first design',
        'Real-time updates',
        'Purpose-built for birthdays'
      ],
      keywords: 'groupfund vs google sheets, google sheets alternative, better than google sheets'
    },
    {
      slug: 'manual-methods',
      title: 'GroupFund vs Manual Methods',
      description: 'Compare GroupFund with manual tracking, cash, and paper methods. See why automation saves time and prevents errors.',
      icon: '📝',
      keyFeatures: [
        'Zero manual work',
        'Digital record keeping',
        'Error-free tracking',
        'Access from anywhere'
      ],
      keywords: 'groupfund vs manual tracking, better than cash contributions, automated tracking'
    },
    {
      slug: 'splitwise',
      title: 'GroupFund vs Splitwise',
      description: 'Compare GroupFund with Splitwise for birthday contributions. See why GroupFund is purpose-built for birthday celebrations.',
      icon: '💳',
      keyFeatures: [
        'Birthday-specific features',
        'Automatic birthday reminders',
        'Birthday calendar',
        'Member reliability scores'
      ],
      keywords: 'groupfund vs splitwise, splitwise alternative, birthday contribution app'
    }
  ]

  return (
    <>
      <SEO
        title="GroupFund Comparisons - vs WhatsApp Groups, Excel, Google Sheets, Splitwise & More"
        description="Compare GroupFund with WhatsApp groups, Excel spreadsheets, Google Sheets, Splitwise, and manual methods. See why GroupFund is the best choice for organizing birthday contributions."
        keywords="groupfund comparisons, groupfund vs whatsapp, groupfund vs excel, groupfund vs google sheets, groupfund vs splitwise, birthday contribution app comparison, best birthday tracker"
        canonical="https://groupfund.app/comparisons"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Compare GroupFund</h1>
          <p className="page-subtitle">
            See how GroupFund compares to other methods for organizing birthday contributions. Find out why thousands of groups choose GroupFund.
          </p>
        </div>
      </section>

      <section className="comparisons-page">
        <div className="container">
          <div className="comparisons-intro">
            <h2>Why Compare?</h2>
            <p>
              Many groups start with WhatsApp groups, Excel spreadsheets, Google Sheets, Splitwise, or manual methods to organize birthday contributions, but these methods have significant limitations. GroupFund was built specifically to solve the problems these traditional methods create.
            </p>
            <p>
              Below, you'll find detailed comparisons showing exactly how GroupFund is better than the alternatives. Each comparison includes real-world scenarios and detailed feature breakdowns.
            </p>
          </div>

          <div className="comparisons-grid">
            {comparisons.map((comparison) => (
              <article key={comparison.slug} className="comparison-card">
                <div className="comparison-icon">{comparison.icon}</div>
                <h2 className="comparison-title">{comparison.title}</h2>
                <p className="comparison-description">{comparison.description}</p>
                <div className="comparison-features-preview">
                  <h3>Key Advantages:</h3>
                  <ul className="comparison-features-list">
                    {comparison.keyFeatures.map((feature, index) => (
                      <li key={index}>
                        <span className="feature-check">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link 
                  to={`/comparisons/${comparison.slug}`} 
                  className="btn btn-primary"
                >
                  View Full Comparison →
                </Link>
              </article>
            ))}
          </div>

          {/* Why GroupFund Wins Section */}
          <div className="why-groupfund-section">
            <h2>Why GroupFund Wins Every Comparison</h2>
            <div className="winning-features-grid">
              <div className="winning-feature">
                <h3>🎯 Purpose-Built</h3>
                <p>GroupFund is designed specifically for organizing group contributions. Other tools are repurposed for a job they weren't meant to do.</p>
              </div>
              <div className="winning-feature">
                <h3>🤖 Fully Automated</h3>
                <p>No manual updates, calculations, or reminders. GroupFund handles everything automatically, saving you hours of work.</p>
              </div>
              <div className="winning-feature">
                <h3>📱 Mobile-First</h3>
                <p>Native mobile app designed for group contributions. Access from anywhere, get push notifications, mark payments on the go.</p>
              </div>
              <div className="winning-feature">
                <h3>📊 Better Insights</h3>
                <p>Member reliability scores, group health metrics, and contribution history. Make data-driven decisions about group participation.</p>
              </div>
              <div className="winning-feature">
                <h3>✅ More Reliable</h3>
                <p>Two-step payment confirmation, real-time tracking, and automatic reminders ensure accuracy and prevent missed payments.</p>
              </div>
              <div className="winning-feature">
                <h3>🌍 International Support</h3>
                <p>Multi-currency support makes GroupFund perfect for international groups. Other methods can't handle this.</p>
              </div>
            </div>
          </div>

          {/* Quick Comparison Table */}
          <div className="quick-comparison-table">
            <h2>Quick Comparison</h2>
            <div className="comparison-table">
              <div className="comparison-row header">
                <div className="comparison-cell">Feature</div>
                <div className="comparison-cell highlight">GroupFund</div>
                <div className="comparison-cell">WhatsApp Groups</div>
                <div className="comparison-cell">Excel Spreadsheets</div>
                <div className="comparison-cell">Google Sheets</div>
                <div className="comparison-cell">Manual Methods</div>
                <div className="comparison-cell">Splitwise</div>
              </div>
              <div className="comparison-row">
                <div className="comparison-cell">Cost</div>
                <div className="comparison-cell highlight">Free</div>
                <div className="comparison-cell">Free</div>
                <div className="comparison-cell">Free</div>
                <div className="comparison-cell">Free</div>
                <div className="comparison-cell">Free</div>
                <div className="comparison-cell">Free</div>
              </div>
              <div className="comparison-row">
                <div className="comparison-cell">Automatic Reminders</div>
                <div className="comparison-cell highlight">✓ Yes</div>
                <div className="comparison-cell">✗ Manual</div>
                <div className="comparison-cell">✗ No</div>
                <div className="comparison-cell">✗ No</div>
                <div className="comparison-cell">✗ No</div>
                <div className="comparison-cell">✗ Manual</div>
              </div>
              <div className="comparison-row">
                <div className="comparison-cell">Payment Tracking</div>
                <div className="comparison-cell highlight">✓ Real-time</div>
                <div className="comparison-cell">✗ Manual</div>
                <div className="comparison-cell">✗ Manual</div>
                <div className="comparison-cell">✗ Manual</div>
                <div className="comparison-cell">✗ Manual</div>
                <div className="comparison-cell">✓ Yes</div>
              </div>
              <div className="comparison-row">
                <div className="comparison-cell">Member Reliability Scores</div>
                <div className="comparison-cell highlight">✓ Yes</div>
                <div className="comparison-cell">✗ No</div>
                <div className="comparison-cell">✗ No</div>
                <div className="comparison-cell">✗ No</div>
                <div className="comparison-cell">✗ No</div>
                <div className="comparison-cell">✗ No</div>
              </div>
              <div className="comparison-row">
                <div className="comparison-cell">Multi-Currency Support</div>
                <div className="comparison-cell highlight">✓ Yes</div>
                <div className="comparison-cell">✗ No</div>
                <div className="comparison-cell">✗ No</div>
                <div className="comparison-cell">✗ No</div>
                <div className="comparison-cell">✗ No</div>
                <div className="comparison-cell">✓ Yes</div>
              </div>
              <div className="comparison-row">
                <div className="comparison-cell">Mobile App</div>
                <div className="comparison-cell highlight">✓ Yes</div>
                <div className="comparison-cell">✓ Yes</div>
                <div className="comparison-cell">✗ No</div>
                <div className="comparison-cell">⚠ Limited</div>
                <div className="comparison-cell">✗ No</div>
                <div className="comparison-cell">✓ Yes</div>
              </div>
              <div className="comparison-row">
                <div className="comparison-cell">Birthday Calendar</div>
                <div className="comparison-cell highlight">✓ Yes</div>
                <div className="comparison-cell">✗ No</div>
                <div className="comparison-cell">✗ No</div>
                <div className="comparison-cell">✗ No</div>
                <div className="comparison-cell">✗ No</div>
                <div className="comparison-cell">✗ No</div>
              </div>
              <div className="comparison-row">
                <div className="comparison-cell">Automation</div>
                <div className="comparison-cell highlight">✓ Full</div>
                <div className="comparison-cell">✗ None</div>
                <div className="comparison-cell">✗ None</div>
                <div className="comparison-cell">✗ None</div>
                <div className="comparison-cell">✗ None</div>
                <div className="comparison-cell">⚠ Partial</div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="cta-box">
            <h2>Ready to Make the Switch?</h2>
            <p>Join thousands of groups using GroupFund for better birthday contribution organization.</p>
            <div className="cta-buttons">
              <Link to="/waitlist" className="btn btn-primary btn-large">Try GroupFund Free</Link>
              <Link to="/how-it-works" className="btn btn-secondary btn-large">See How It Works</Link>
            </div>
          </div>

          {/* Related Links */}
          <div className="related-links">
            <h3>Learn More</h3>
            <div className="related-links-grid">
              <Link to="/features">View All Features →</Link>
              <Link to="/pricing">See Pricing →</Link>
              <Link to="/use-cases">View Use Cases →</Link>
              <Link to="/faq">Read FAQ →</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

