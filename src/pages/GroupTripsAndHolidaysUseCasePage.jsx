import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function GroupTripsAndHolidaysUseCasePage() {
  return (
    <>
      <SEO
        title="Group Trips & Holidays - Collect Money Together | GroupFund"
        description="Collect money for group trips and holidays without fronting all the costs. Use GroupFund to organise contributions for flights, Airbnb, villas, and activities in one shared Trip Group."
        keywords="group trip payments, collect money for group holiday, split travel costs with friends, Airbnb group payments, trip money pool, group holiday contributions"
        canonical="https://www.groupfund.app/use-cases/group-trips-and-holidays"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Group Trips & Holidays</h1>
          <p className="page-subtitle">
            Collect money from friends and family for flights, Airbnb, villas, and activities in one shared Trip Group. Stop fronting big costs on your own card and chasing people to pay you back.
          </p>
        </div>
      </section>

      <section className="use-case-detail-page">
        <div className="container">
          <div className="use-case-content">
            <div className="use-case-section">
              <h2>Why Group Trip Money Gets Messy</h2>
              <p>
                Planning a trip with friends is exciting until deposits are due and one person ends up paying for everything up front. With flights, accommodation, transfers, and activities, it is easy to lose track of who owes what.
              </p>
              <p>
                GroupFund brings all of your trip contributions into one place. Create a Trip Group, set clear amounts and deadlines, and collect everyone’s share before you confirm bookings so you are not left covering large balances alone.
              </p>
            </div>

            <div className="use-case-section">
              <h2>Key Features for Group Trips & Holidays</h2>
              <div className="features-list">
                <div className="feature-item">
                  <h3>🧳 Dedicated Trip Groups</h3>
                  <p>Create a Trip Group for each holiday with the destination, dates, and what the fund will cover (flights, Airbnb, activities, or all three).</p>
                </div>
                <div className="feature-item">
                  <h3>💰 Clear Per-Person Amounts</h3>
                  <p>Set suggested contribution amounts so everyone knows exactly what they need to send for each part of the trip.</p>
                </div>
                <div className="feature-item">
                  <h3>📅 Deposit & Balance Deadlines</h3>
                  <p>Use separate deadlines for deposits and final balances so people can spread payments and you can book on time.</p>
                </div>
                <div className="feature-item">
                  <h3>✅ Real-Time Progress Tracking</h3>
                  <p>See how much has been collected, who has paid, and when you have enough to confirm flights or accommodation.</p>
                </div>
                <div className="feature-item">
                  <h3>👥 Works for Any Group Type</h3>
                  <p>Perfect for friend trips, stag or hen weekends, birthday holidays, family trips, and group tours.</p>
                </div>
                <div className="feature-item">
                  <h3>🌍 Multi-Currency & International Support</h3>
                  <p>Ideal for groups spread across different countries who still need to contribute to the same holiday fund.</p>
                </div>
                <div className="feature-item">
                  <h3>💬 Trip Group Chat</h3>
                  <p>Coordinate trip contributions with optional per-group chat. Mention members with @username, discuss travel details, share account information, and confirm payments - all in one place. Perfect for planning group trips.</p>
                </div>
              </div>
            </div>

            <div className="use-case-section">
              <h2>Typical Group Trip Scenarios</h2>
              <ul className="scenarios-list">
                <li><strong>Friends’ City Breaks:</strong> Collect for shared Airbnb, trains or flights, and a couple of pre-booked activities.</li>
                <li><strong>Birthday Holidays:</strong> Organise a weekend away or destination birthday where everyone pays their share in advance.</li>
                <li><strong>Stag & Hen Trips:</strong> Collect for villas, activities, and group dinners without chasing people one by one.</li>
                <li><strong>Family Holidays:</strong> Coordinate contributions from siblings for accommodation and shared costs on family trips.</li>
                <li><strong>Group Tours & Retreats:</strong> Take deposits and instalments for group tours, church trips, or retreats in a structured way.</li>
              </ul>
            </div>

            <div className="use-case-section">
              <h2>How It Works for Group Trips & Holidays</h2>
              <ol className="steps-list">
                <li><strong>Create a Trip Group:</strong> Name the group after your destination and dates, and add a short description of what the money will cover.</li>
                <li><strong>Set Targets & Instalments:</strong> Choose a total target and, if needed, split it into deposit and final balance amounts per person.</li>
                <li><strong>Share the Invite Code:</strong> Drop the GroupFund invite code into your WhatsApp, Telegram, or group chat so everyone contributes in one place.</li>
                <li><strong>Set Clear Deadlines:</strong> Add dates for deposit and final payments so people know when they must pay to secure their place.</li>
                <li><strong>Track Contributions:</strong> Watch payments come in, send one or two group reminders, and see exactly when you have enough to book.</li>
                <li><strong>Confirm Bookings:</strong> Once targets are hit, close the group and use the collected funds to pay for flights, accommodation, and activities.</li>
                <li><strong>Travel Without Money Drama:</strong> Head into the trip knowing big costs are already handled and nobody is chasing IOUs.</li>
              </ol>
            </div>

            <div className="cta-box">
              <h2>Ready to Organize Your Next Group Trip?</h2>
              <p>Create a Trip Group in minutes, share one link with your friends, and keep every trip contribution organised from deposit to final payment.</p>
              <div className="cta-buttons">
                <Link to="/get-started" className="btn btn-primary btn-large">
                  Start a Trip Group
                </Link>
                <Link to="/best-practices/group-trips" className="btn btn-secondary btn-large">
                  See Trip Best Practices
                </Link>
              </div>
            </div>

            <div className="related-links">
              <h3>Explore Other Use Cases</h3>
              <div className="related-links-grid">
                <Link to="/use-cases/friend-groups">For Friend Groups →</Link>
                <Link to="/use-cases/families">For Families →</Link>
                <Link to="/use-cases/group-birthday-gifts">For Group Birthday Gifts →</Link>
                <Link to="/best-practices/international-groups">For International Trips →</Link>
                <Link to="/use-cases/shared-subscriptions">For Shared Subscriptions →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
