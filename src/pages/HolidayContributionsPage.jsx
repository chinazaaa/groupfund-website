import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function HolidayContributionsPage() {
  useEffect(() => {
    const eventStructuredData = {
      "@context": "https://schema.org",
      "@type": "Event",
      "name": "Christmas Group Contributions",
      "description": "Organize group contributions for Christmas gifts, holiday parties, and festive celebrations. Perfect for families, workplaces, and communities.",
      "url": "https://www.groupfund.app/seasonal/holiday-contributions",
      "startDate": "2025-12-25",
      "endDate": "2025-12-25",
      "eventStatus": "https://schema.org/EventScheduled",
      "eventAttendanceMode": "https://schema.org/OnlineEventAttendanceMode",
      "organizer": {
        "@type": "Organization",
        "name": "GroupFund",
        "url": "https://www.groupfund.app"
      }
    }

    const webPageStructuredData = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Christmas & Holiday Group Contributions - GroupFund",
      "description": "Organize group contributions for Christmas, holiday gifts, Secret Santa, and festive celebrations. Free tool for families, workplaces, and communities.",
      "url": "https://www.groupfund.app/seasonal/holiday-contributions",
      "about": {
        "@type": "Thing",
        "name": "Christmas Group Contributions"
      }
    }

    const existingEventScript = document.querySelector('script[data-holiday-event-schema]')
    if (existingEventScript) existingEventScript.remove()
    const eventScript = document.createElement('script')
    eventScript.type = 'application/ld+json'
    eventScript.setAttribute('data-holiday-event-schema', 'true')
    eventScript.textContent = JSON.stringify(eventStructuredData)
    document.head.appendChild(eventScript)

    const existingWebPageScript = document.querySelector('script[data-holiday-webpage-schema]')
    if (existingWebPageScript) existingWebPageScript.remove()
    const webPageScript = document.createElement('script')
    webPageScript.type = 'application/ld+json'
    webPageScript.setAttribute('data-holiday-webpage-schema', 'true')
    webPageScript.textContent = JSON.stringify(webPageStructuredData)
    document.head.appendChild(webPageScript)

    return () => {
      const eventScriptToRemove = document.querySelector('script[data-holiday-event-schema]')
      if (eventScriptToRemove) eventScriptToRemove.remove()
      const webPageScriptToRemove = document.querySelector('script[data-holiday-webpage-schema]')
      if (webPageScriptToRemove) webPageScriptToRemove.remove()
    }
  }, [])

  return (
    <>
      <SEO
        title="Christmas Group Contributions - Organize Holiday Gift Funds & Secret Santa | GroupFund 2025"
        description="Organize Christmas group contributions, holiday gift funds, Secret Santa, and festive celebrations. Free tool for families, workplaces, and communities. Set deadlines, track payments, coordinate gifts. Perfect for Christmas 2025."
        keywords="Christmas group contributions, Christmas gift funds, Secret Santa contributions, holiday group payments, Christmas contributions 2025, organize Christmas gifts, holiday gift coordination, Christmas party contributions, festive season payments, Christmas gift tracking, group Christmas gifts, workplace Christmas contributions, family Christmas fund"
        canonical="https://www.groupfund.app/seasonal/holiday-contributions"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Christmas & Holiday Group Contributions 2025</h1>
          <p className="page-subtitle">
            Organize Christmas contributions, holiday gift funds, Secret Santa, and festive celebrations. Free tool for families, workplaces, and communities. Set deadlines, track payments, and coordinate Christmas gifts with ease.
          </p>
        </div>
      </section>

      <section className="industry-page">
        <div className="container">
          <div className="industry-content">
            <div className="industry-section">
              <h2>Why Christmas & Holiday Contributions Need Special Attention</h2>
              <p>
                Christmas and holiday seasons bring increased expenses, busy schedules, and multiple celebrations. Organizing group contributions during Christmas can be particularly challenging due to:
              </p>
              <ul className="feature-list">
                <li><strong>Multiple Christmas Celebrations:</strong> Office parties, family gatherings, Secret Santa exchanges, and gift-giving occasions all happening at once</li>
                <li><strong>Increased Christmas Expenses:</strong> People are already spending more on gifts, decorations, food, and travel during the holiday season</li>
                <li><strong>Busy Holiday Schedules:</strong> Everyone is juggling shopping, parties, travel, and family commitments</li>
                <li><strong>Coordinating Christmas Gifts:</strong> Organizing group gifts for multiple people requires careful planning and coordination</li>
                <li><strong>Managing Multiple Holiday Contributions:</strong> Christmas gifts, New Year parties, Secret Santa, and other festive events all need tracking</li>
                <li><strong>Holiday Budget Management:</strong> Planning and tracking increased seasonal spending across multiple groups</li>
                <li><strong>Last-Minute Christmas Rush:</strong> People often wait until the last minute, making deadline management critical</li>
              </ul>
            </div>

            <div className="industry-section">
              <h2>Christmas & Holiday Contribution Use Cases</h2>
              
              <div className="use-case-card">
                <h3>🎄 Christmas Gift Funds</h3>
                <p>
                  Organize Christmas contributions for family members, colleagues, or community members. Set contribution amounts, track who has paid, and coordinate gift purchases. Perfect for collecting money for Christmas gifts, coordinating group presents, and ensuring everyone contributes fairly before Christmas Day.
                </p>
                <p><strong>Best Group Type:</strong> General Groups with Christmas deadline (December 25th), or Birthday Groups if organizing birthday contributions during holidays</p>
                <p><strong>Popular For:</strong> Family Christmas funds, office Christmas gifts, community Christmas contributions, friend group Christmas presents</p>
              </div>

              <div className="use-case-card">
                <h3>🎁 Holiday Party Contributions</h3>
                <p>
                  Coordinate contributions for holiday parties, office celebrations, or community events. Set deadlines before the event and track all contributions.
                </p>
                <p><strong>Best Group Type:</strong> General Groups with party date as deadline</p>
              </div>

              <div className="use-case-card">
                <h3>🎉 New Year Celebrations</h3>
                <p>
                  Organize contributions for New Year parties, celebrations, or events. Track contributions and ensure all funds are collected before the celebration.
                </p>
                <p><strong>Best Group Type:</strong> General Groups with New Year deadline</p>
              </div>

              <div className="use-case-card">
                <h3>🎅 Secret Santa & Christmas Gift Exchanges</h3>
                <p>
                  Coordinate Secret Santa contributions or Christmas gift exchange funds. Set contribution amounts (typically $20-$50), track payments, and ensure everyone participates fairly. Perfect for office Secret Santa, family gift exchanges, and friend group Secret Santa events. Set deadlines before the gift exchange date to ensure all contributions are collected.
                </p>
                <p><strong>Best Group Type:</strong> General Groups with gift exchange deadline (usually 1-2 weeks before Christmas)</p>
                <p><strong>Popular For:</strong> Office Secret Santa, family Secret Santa, friend group gift exchanges, Christmas gift swaps</p>
              </div>

              <div className="use-case-card">
                <h3>🏠 Holiday Decorations & Events</h3>
                <p>
                  Organize contributions for holiday decorations, community events, or seasonal activities. Track who has contributed and manage funds for holiday-related expenses.
                </p>
                <p><strong>Best Group Type:</strong> General Groups with specific event deadlines</p>
              </div>
            </div>

            <div className="industry-section">
              <h2>Key Features for Holiday Contributions</h2>
              <div className="features-grid">
                <div className="feature-item">
                  <div className="feature-icon">📅</div>
                  <h3>Deadline Management</h3>
                  <p>Set deadlines tied to specific holidays or events to ensure contributions are collected on time.</p>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">🔔</div>
                  <h3>Automatic Reminders</h3>
                  <p>Get reminders before holiday deadlines so busy people don't miss contribution dates during the festive season.</p>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">🎁</div>
                  <h3>Gift Coordination</h3>
                  <p>Use wishlists and contribution tracking to coordinate gift giving and avoid duplicates.</p>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">📊</div>
                  <h3>Budget Tracking</h3>
                  <p>Track holiday contributions and manage budgets for increased seasonal spending.</p>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">✅</div>
                  <h3>Payment Confirmation</h3>
                  <p>Two-step confirmation ensures all holiday contributions are verified before funds are used.</p>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">💰</div>
                  <h3>Multiple Groups</h3>
                  <p>Create separate groups for different holidays or events to keep everything organized.</p>
                </div>
              </div>
            </div>

            <div className="industry-section">
              <h2>Best Practices for Christmas & Holiday Contributions</h2>
              <ul className="best-practices-list">
                <li><strong>Plan Early for Christmas:</strong> Set up Christmas contribution groups in early December (or even November) to give people time to contribute before the holiday rush. Don't wait until the last minute!</li>
                <li><strong>Set Clear Christmas Deadlines:</strong> Tie deadlines to specific dates (e.g., "December 20th for Christmas gifts" or "December 15th for Secret Santa") to ensure timely collection before Christmas Day.</li>
                <li><strong>Consider Holiday Budgets:</strong> Be mindful that people may have increased expenses during Christmas - set reasonable contribution amounts ($20-$50 for Secret Santa, $50-$200 for group gifts). Don't make it too expensive!</li>
                <li><strong>Use Automatic Reminders:</strong> Leverage automatic reminders (7 days before, 1 day before, and on deadline day) to help people remember deadlines during busy Christmas seasons.</li>
                <li><strong>Coordinate Christmas Gifts:</strong> Use wishlists or group communication to coordinate gift giving and avoid duplicate Christmas presents. Perfect for Secret Santa coordination!</li>
                <li><strong>Be Flexible During Holidays:</strong> Understand that Christmas schedules can be unpredictable - allow some flexibility when possible, but stick to deadlines for gift purchases.</li>
                <li><strong>Track Everything:</strong> Keep detailed records of all Christmas contributions for transparency and accountability. Everyone should see who has paid and who hasn't.</li>
                <li><strong>Create Separate Groups:</strong> Create separate groups for different Christmas events (Secret Santa, office party, family gifts) to keep everything organized.</li>
                <li><strong>Set Realistic Amounts:</strong> For Christmas 2025, consider inflation and increased costs. $25-$50 is typical for Secret Santa, $50-$200 for group gifts.</li>
              </ul>
            </div>

            <div className="industry-section">
              <h2>Getting Started with Christmas Contributions</h2>
              <p>
                Ready to organize contributions for Christmas 2025? Follow these simple steps:
              </p>
              <ol className="steps-list">
                <li><strong>Determine the Purpose:</strong> Decide what you're collecting for - Christmas gifts, Secret Santa, office party, family fund, etc.</li>
                <li><strong>Set a Christmas Deadline:</strong> Set a deadline that gives people enough time to contribute (e.g., December 20th for Christmas gifts, December 15th for Secret Santa). Make it at least 1-2 weeks before Christmas Day.</li>
                <li><strong>Choose Fair Contribution Amounts:</strong> Choose amounts that work for everyone's Christmas budget. Typical amounts: $20-$50 for Secret Santa, $50-$200 for group gifts.</li>
                <li><strong>Create a General Group:</strong> Create a General Group in GroupFund with the Christmas deadline. Name it clearly (e.g., "Office Secret Santa 2025" or "Family Christmas Fund").</li>
                <li><strong>Invite Participants:</strong> Share the group invite code with all participants. They can preview the group and request to join.</li>
                <li><strong>Track Contributions:</strong> Monitor who has paid and who hasn't. The app shows real-time payment status.</li>
                <li><strong>Confirm Payments:</strong> As payments are received, confirm them in the app. Members mark as "Paid" and you confirm receipt.</li>
                <li><strong>Use Automatic Reminders:</strong> Let GroupFund send automatic reminders 7 days before, 1 day before, and on the deadline day.</li>
                <li><strong>Coordinate Gifts:</strong> Use wishlists or group notes to coordinate Christmas gift purchases and avoid duplicates.</li>
              </ol>
            </div>

            <div className="industry-cta">
              <h2>Start Organizing Your Christmas Contributions Today</h2>
              <p>Join families, workplaces, and communities using GroupFund to manage Christmas contributions, Secret Santa, and holiday gift funds. Free to start, no credit card required. Perfect for Christmas 2025!</p>
              <div className="cta-buttons">
                <Link to="/get-started" className="btn btn-primary btn-large">Start Your Free Christmas Group</Link>
                <Link to="/how-it-works" className="btn btn-secondary btn-large">See How It Works</Link>
              </div>
              <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#6b7280' }}>
                ⚡ Set up in minutes • Free forever • Perfect for Secret Santa, Christmas gifts, and holiday parties
              </p>
            </div>

            <div className="related-resources">
              <h2>Related Resources</h2>
              <div className="resources-grid">
                <Link to="/group-types/general-groups" className="resource-card">
                  <span className="resource-icon">👥</span>
                  <h3>General Groups</h3>
                  <p>Learn about General Groups for events and celebrations</p>
                </Link>
                <Link to="/resources/budgeting-for-group-contributions" className="resource-card">
                  <span className="resource-icon">💰</span>
                  <h3>Budgeting for Contributions</h3>
                  <p>Plan and budget for group contributions</p>
                </Link>
                <Link to="/tools/yearly-contribution-estimator" className="resource-card">
                  <span className="resource-icon">📅</span>
                  <h3>Yearly Contribution Estimator</h3>
                  <p>Estimate your yearly contribution costs</p>
                </Link>
                <Link to="/resources/choosing-the-right-contribution-amount" className="resource-card">
                  <span className="resource-icon">💡</span>
                  <h3>Choosing Contribution Amounts</h3>
                  <p>Guide for setting fair contribution amounts</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .industry-page {
          padding: 3rem 0;
        }

        .industry-content {
          max-width: 900px;
          margin: 0 auto;
        }

        .industry-section {
          margin-bottom: 3rem;
        }

        .industry-section h2 {
          font-size: 1.75rem;
          margin-bottom: 1rem;
          color: #111827;
        }

        .industry-section p {
          color: #4b5563;
          line-height: 1.8;
          margin-bottom: 1rem;
        }

        .feature-list {
          list-style-position: outside;
          padding-left: 1.5rem;
          color: #4b5563;
          line-height: 1.8;
        }

        .feature-list li {
          margin-bottom: 0.75rem;
        }

        .use-case-card {
          background: #f9fafb;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          padding: 1.5rem;
          margin-bottom: 1.5rem;
        }

        .use-case-card h3 {
          font-size: 1.25rem;
          margin-bottom: 0.75rem;
          color: #111827;
        }

        .use-case-card p {
          color: #4b5563;
          line-height: 1.7;
          margin-bottom: 0.5rem;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
          margin-top: 1.5rem;
        }

        .feature-item {
          background: white;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          padding: 1.5rem;
          text-align: center;
        }

        .feature-icon {
          font-size: 2.5rem;
          margin-bottom: 0.75rem;
        }

        .feature-item h3 {
          font-size: 1.1rem;
          margin-bottom: 0.5rem;
          color: #111827;
        }

        .feature-item p {
          font-size: 0.9rem;
          color: #6b7280;
          line-height: 1.6;
        }

        .best-practices-list {
          list-style-position: outside;
          padding-left: 1.5rem;
          color: #4b5563;
          line-height: 1.8;
        }

        .best-practices-list li {
          margin-bottom: 1rem;
        }

        .best-practices-list strong {
          color: #111827;
        }

        .steps-list {
          list-style-position: outside;
          padding-left: 1.5rem;
          color: #4b5563;
          line-height: 1.8;
        }

        .steps-list li {
          margin-bottom: 0.75rem;
        }

        .industry-cta {
          text-align: center;
          padding: 2.5rem;
          background: #f9fafb;
          border-radius: 12px;
          margin: 3rem 0;
        }

        .industry-cta h2 {
          font-size: 1.5rem;
          margin-bottom: 0.75rem;
          color: #111827;
        }

        .industry-cta p {
          color: #6b7280;
          margin-bottom: 1.5rem;
        }

        .cta-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .related-resources {
          margin-top: 3rem;
          padding-top: 3rem;
          border-top: 2px solid #e5e7eb;
        }

        .related-resources h2 {
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
          color: #111827;
        }

        .resources-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1.5rem;
        }

        .resource-card {
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

        .resource-card:hover {
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transform: translateY(-2px);
        }

        .resource-icon {
          font-size: 2rem;
          margin-bottom: 0.75rem;
        }

        .resource-card h3 {
          font-size: 1rem;
          margin-bottom: 0.5rem;
          color: #111827;
        }

        .resource-card p {
          font-size: 0.85rem;
          color: #6b7280;
          margin: 0;
        }

        @media (max-width: 768px) {
          .features-grid {
            grid-template-columns: 1fr;
          }

          .resources-grid {
            grid-template-columns: 1fr;
          }

          .cta-buttons {
            flex-direction: column;
          }

          .cta-buttons .btn {
            width: 100%;
          }
        }
      `}</style>
    </>
  )
}

