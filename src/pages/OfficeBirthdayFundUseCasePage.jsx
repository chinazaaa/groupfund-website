import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function OfficeBirthdayFundUseCasePage() {
  return (
    <>
      <SEO
        title="Office Birthday & Leaving Funds - Workplace Collections | GroupFund"
        description="Collect money for office birthday gifts, cakes, and leaving presents in one shared Workplace Group. Set suggested amounts, track who has paid, and avoid awkward chasing at work."
        keywords="office birthday fund, workplace birthday collection, collect money at work, leaving gift collection, office gift contributions, team birthday pot"
        canonical="https://www.groupfund.app/use-cases/office-birthday-fund"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Office Birthday & Leaving Funds</h1>
          <p className="page-subtitle">
            Collect money from colleagues for birthday gifts, cakes, and leaving presents in one shared Workplace Group. Keep contributions organised across teams, offices, and remote staff.
          </p>
        </div>
      </section>

      <section className="use-case-detail-page">
        <div className="container">
          <div className="use-case-content">
            <div className="use-case-section">
              <h2>Why Workplace Collections Get Awkward</h2>
              <p>
                Office birthday and leaving collections often rely on a physical envelope or one person sharing bank details, then quietly chasing colleagues to contribute. In hybrid teams, some people never even see the envelope or the message.
              </p>
              <p>
                GroupFund gives you a simple Workplace Group where everyone can contribute to the same birthday or leaving fund using one link. You keep the process transparent, optional, and easy for people in the office or working remotely.
              </p>
            </div>

            <div className="use-case-section">
              <h2>Key Features for Office Birthday & Leaving Funds</h2>
              <div className="features-list">
                <div className="feature-item">
                  <h3>🏢 Workplace Groups</h3>
                  <p>Create a Workplace Group for your team, department, or whole company to manage birthday and leaving collections together.</p>
                </div>
                <div className="feature-item">
                  <h3>🎂 Birthday & Leaving Group Pots</h3>
                  <p>Set up separate group pots within the same group for birthdays, leaving gifts, and other office celebrations.</p>
                </div>
                <div className="feature-item">
                  <h3>💰 Suggested Contribution Amounts</h3>
                  <p>Share a simple suggested amount (for example, £5–£10) while keeping contributions optional and flexible.</p>
                </div>
                <div className="feature-item">
                  <h3>📅 Clear Deadlines</h3>
                  <p>Set deadlines a few days before the birthday or last working day so you have time to buy a thoughtful gift.</p>
                </div>
                <div className="feature-item">
                  <h3>✅ Transparent Totals for Organisers</h3>
                  <p>See how much has been raised and how many people have contributed so you can match the gift to the budget.</p>
                </div>
                <div className="feature-item">
                  <h3>🌐 Works for Hybrid & Remote Teams</h3>
                  <p>Use the same link for colleagues in the office and those working remotely, across locations and time zones.</p>
                </div>
              </div>
            </div>

            <div className="use-case-section">
              <h2>Common Office Birthday & Leaving Scenarios</h2>
              <ul className="scenarios-list">
                <li><strong>Team Birthday Gifts:</strong> Collect for a gift, cake, or lunch to celebrate team members’ birthdays.</li>
                <li><strong>Company Birthday Fund:</strong> Run a central birthday pot for everyone in the organisation with a standard approach.</li>
                <li><strong>Leaving Gifts:</strong> Organise fair, transparent collections for colleagues who are moving on.</li>
                <li><strong>Team Milestones:</strong> Celebrate promotions, work anniversaries, and project wins with group gifts or treats.</li>
                <li><strong>Office Events:</strong> Collect money for shared lunches, seasonal parties, or charity days at work.</li>
              </ul>
            </div>

            <div className="use-case-section">
              <h2>How It Works for Office Birthday Funds</h2>
              <ol className="steps-list">
                <li><strong>Create a Workplace Group:</strong> Set up a group for your team or company and add a short description of how collections will work.</li>
                <li><strong>Set Up Birthday & Leaving Group Pots:</strong> Create separate birthday or leaving collections with the person’s name, occasion, and suggested amount.</li>
                <li><strong>Share the Invite Code:</strong> Post the GroupFund invite code in Slack, Teams, or email so colleagues can contribute from anywhere.</li>
                <li><strong>Set a Deadline:</strong> Choose a clear cut‑off date for each collection and include it in the announcement message.</li>
                <li><strong>Track Contributions:</strong> See contributions in real time so you know when you have enough for the planned gift.</li>
                <li><strong>Purchase the Gift:</strong> Once the deadline passes, close the collection and use the funds to buy the gift, cake, or voucher.</li>
                <li><strong>Thank Contributors:</strong> Share a quick thank‑you note (and optionally a photo of the gift) with everyone who took part.</li>
              </ol>
            </div>

            <div className="cta-box">
              <h2>Ready to Organize Office Birthday & Leaving Funds?</h2>
              <p>Create a Workplace Group today and make every office collection simple, transparent, and easy for everyone to join.</p>
              <div className="cta-buttons">
                <Link to="/get-started" className="btn btn-primary btn-large">
                  Start a Workplace Group
                </Link>
                <Link to="/best-practices/workplace-leaving-gifts" className="btn btn-secondary btn-large">
                  See Workplace Best Practices
                </Link>
              </div>
            </div>

            <div className="related-links">
              <h3>Explore Other Use Cases</h3>
              <div className="related-links-grid">
                <Link to="/use-cases/workplace">For Workplaces →</Link>
                <Link to="/use-cases/group-birthday-gifts">For Group Birthday Gifts →</Link>
                <Link to="/best-practices/group-birthday-gifts">Birthday Gift Best Practices →</Link>
                <Link to="/best-practices/workplace-leaving-gifts">Leaving Gift Best Practices →</Link>
                <Link to="/use-cases/shared-subscriptions">For Shared Subscriptions →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
