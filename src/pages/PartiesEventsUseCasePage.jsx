import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function PartiesEventsUseCasePage() {
  return (
    <>
      <SEO
        title="GroupFund for Parties & Events - Stress-Free Group Event Contributions"
        description="Plan group parties, birthdays, and events without money stress using GroupFund. Create shared grouppots, set contribution amounts, track payments, and keep everything transparent for your guests."
        keywords="party contributions, event group payments, birthday money pot, group event fund, collect money for parties"
        canonical="https://www.groupfund.app/use-cases/parties-and-events"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">GroupFund for Parties & Events</h1>
          <p className="page-subtitle">
            Plan birthdays, dinners, nights out, trips, and special events without chasing people for money. Create a shared pot, set contribution amounts, and track who has paid before the big day.
          </p>
        </div>
      </section>

      <section className="use-case-detail-page">
        <div className="container">
          <div className="use-case-content">
            <div className="use-case-section">
              <h2>Why Organizers Love GroupFund</h2>
              <p>
                Organizing parties and events is already a lot of work – adding group money collection on top makes it even harder. Between different budgets, late payers, and scattered transfers, it is easy to lose track of who has actually paid. GroupFund brings structure and transparency to event contributions so you can focus on planning a great experience instead of managing payments.
              </p>
              <p>
                Whether you are planning a birthday dinner, a group night out, a weekend trip, or a special celebration like a graduation or engagement party, GroupFund helps you collect money upfront, see who has contributed, and avoid awkward money conversations on the day.
              </p>
            </div>

            <div className="use-case-section">
              <h2>Key Features for Parties & Events</h2>
              <div className="features-list">
                <div className="feature-item">
                  <h3>🥳 Create Event Group Pots</h3>
                  <p>
                    Set up a dedicated group pot for each party or event. Give it a name, description, and goal amount so everyone knows exactly what they are contributing towards.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>💳 Collect Money Upfront</h3>
                  <p>
                    Ask everyone to contribute before you book venues, tickets, or activities. Reduce the risk of paying out of pocket and hoping people pay you back later.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>📅 Event Deadlines & Reminders</h3>
                  <p>
                    Set contribution deadlines based on your booking dates. Automatic reminders help guests pay on time so you can confirm bookings without last-minute stress.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>✅ Transparent Contribution Tracking</h3>
                  <p>
                    See in real time who has paid and who still needs to contribute. Keep everything in one place instead of scattered bank transfers and screenshots.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>🌍 Perfect for Any Group</h3>
                  <p>
                    Use GroupFund for close friends, colleagues, community groups, sports teams, or mixed groups where not everyone knows each other but still needs to chip in fairly.
                  </p>
                </div>
                <div className="feature-item">
                  <h3>⭐ Member Reliability Scores</h3>
                  <p>
                    See which friends consistently pay on time across events. Identify your reliable contributors and plan future trips and parties with confidence.
                  </p>
                </div>
              </div>
            </div>

            <div className="use-case-section">
              <h2>Common Party & Event Scenarios</h2>
              <ul className="scenarios-list">
                <li>
                  <strong>Birthday Dinners & Nights Out:</strong> Collect a fixed amount per person to cover food, drinks, and a group gift before the celebration.
                </li>
                <li>
                  <strong>Hen, Stag & Bachelor(ette) Parties:</strong> Plan multi-day events, activities, and accommodation with everyone contributing fairly in advance.
                </li>
                <li>
                  <strong>Group Trips & Weekends Away:</strong> Create a shared pot for accommodation, travel, and activities so no one is left chasing for money afterwards.
                </li>
                <li>
                  <strong>Office & Team Events:</strong> Organize team dinners, leaving dos, and celebrations by pooling contributions from colleagues in one place.
                </li>
                <li>
                  <strong>Community & Social Club Events:</strong> Collect money for end‑of‑season parties, meetups, and social events from members and attendees.
                </li>
              </ul>
            </div>

            <div className="use-case-section">
              <h2>How It Works for Parties & Events</h2>
              <ol className="steps-list">
                <li>
                  <strong>Create Your Event Group:</strong> Set up a General Group for your party, trip, or event and invite everyone who needs to contribute.
                </li>
                <li>
                  <strong>Set Contribution Amounts:</strong> Choose a fixed amount per person or custom amounts if some people are covering more of the cost.
                </li>
                <li>
                  <strong>Add Event Details & Deadlines:</strong> Add the event date, booking deadlines, and any notes so contributors know when and why they are paying.
                </li>
                <li>
                  <strong>Share the Group Invite Code:</strong> Share the GroupFund invite code in your group chat so everyone can join and see what they owe.
                </li>
                <li>
                  <strong>Track Contributions in Real Time:</strong> Monitor who has paid and send reminders to anyone who is still pending before the deadline.
                </li>
                <li>
                  <strong>Book with Confidence:</strong> Once enough people have contributed, use the pooled funds to pay for the venue, tickets, or activities without stress.
                </li>
              </ol>
            </div>

            <div className="cta-box">
              <h2>Ready to Plan Your Next Party or Event?</h2>
              <p>
                Use GroupFund to collect money upfront, track contributions, and remove the awkwardness from group money conversations for your next party, trip, or event.
              </p>
              <div className="cta-buttons">
                <Link to="/get-started" className="btn btn-primary btn-large">
                  Create an Event Group
                </Link>
                <Link to="/how-it-works" className="btn btn-secondary btn-large">
                  See How It Works
                </Link>
              </div>
            </div>

            <div className="related-links">
              <h3>Explore Other Use Cases</h3>
              <div className="related-links-grid">
                <Link to="/use-cases/families">For Families →</Link>
                <Link to="/use-cases/friend-groups">For Friend Groups →</Link>
                <Link to="/use-cases/workplace">For Workplace →</Link>
                <Link to="/use-cases/community-organizations">For Community Organizations →</Link>
                <Link to="/use-cases/weddings">For Weddings →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
