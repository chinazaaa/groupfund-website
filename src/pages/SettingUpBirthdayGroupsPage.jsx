import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function SettingUpBirthdayGroupsPage() {
  return (
    <>
      <SEO
        title="Setting Up Birthday Groups - Complete Guide"
        description="Complete guide to creating and managing Birthday Groups. Learn how to add birthdays, set up wishlists, configure reminders, and organize birthday contributions effectively."
        keywords="birthday group setup, how to create birthday group, birthday contribution guide, birthday calendar setup, birthday wishlist guide"
        canonical="https://www.groupfund.app/resources/setting-up-birthday-groups"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Setting Up Birthday Groups</h1>
          <p className="page-subtitle">
            Complete guide to creating and managing Birthday Groups
          </p>
        </div>
      </section>

      <section className="resource-detail-page">
        <div className="container">
          <div className="resource-content">
            <div className="resource-meta">
              <span className="resource-category">Getting Started</span>
              <span className="resource-read-time">6 min read</span>
            </div>

            <div className="resource-section">
              <h2>What Are Birthday Groups?</h2>
              <p>
                Birthday Groups are designed specifically for organizing birthday contributions. They provide features tailored for birthday celebrations:
              </p>
              <ul className="resource-list">
                <li><strong>Birthday Calendar:</strong> Automatic calendar tracking of all member birthdays</li>
                <li><strong>Wishlists:</strong> Profile-level wishlists for gift coordination</li>
                <li><strong>Automatic Reminders:</strong> Reminders 7 days, 1 day, and on the birthday</li>
                <li><strong>Celebrant Confirmation:</strong> Birthday person confirms payments</li>
                <li><strong>Birthday Required:</strong> Members must have birthdays set in their profiles</li>
              </ul>
            </div>

            <div className="resource-section">
              <h2>Step 1: Create Your Birthday Group</h2>
              <p>When creating a new group in GroupFund:</p>
              <ol className="resource-list">
                <li>Select "Birthday Group" as the group type</li>
                <li>Enter a descriptive group name (e.g., "Smith Family", "College Friends")</li>
                <li>Choose your currency (NGN, USD, EUR, etc.)</li>
                <li>Set the contribution amount per person</li>
                <li>Set the maximum number of members</li>
              </ol>
            </div>

            <div className="resource-section">
              <h2>Step 2: Add Member Birthdays</h2>
              <p>
                For Birthday Groups, you need to add birthdays for all group members:
              </p>
              <ul className="resource-list">
                <li>Members must have birthdays set in their profiles to join</li>
                <li>You can add birthdays yourself when creating the group</li>
                <li>Members can also add their own birthdays when they join</li>
                <li>All birthdays appear in the group's birthday calendar</li>
                <li>Make sure all birthdays are added before the group starts contributing</li>
              </ul>
            </div>

            <div className="resource-section">
              <h2>Step 3: Set Up Birthday Wishlists</h2>
              <p>
                Birthday wishlists help coordinate gifts and avoid duplicates:
              </p>
              <ul className="resource-list">
                <li>Members can create wishlists in their profiles</li>
                <li>Add items with pictures and prices</li>
                <li>Group members can claim items they want to gift</li>
                <li>Track what's been claimed and what's still available</li>
                <li>Makes gift coordination easy and thoughtful</li>
              </ul>
            </div>

            <div className="resource-section">
              <h2>Step 4: Invite Members</h2>
              <p>
                Share your group invite code with people you want to join. Members can:
              </p>
              <ul className="resource-list">
                <li>Preview the group using the invite code</li>
                <li>See member reliability scores and group health metrics</li>
                <li>Request to join the group</li>
                <li>Get approved or rejected by the admin</li>
                <li>Must have their birthday set in their profile to join</li>
              </ul>
            </div>

            <div className="resource-section">
              <h2>Step 5: Set Up Payment Details</h2>
              <p>
                For Birthday Groups, celebrants add their own payment account details:
              </p>
              <ul className="resource-list">
                <li>Celebrants can add their bank account details</li>
                <li>Bank details are displayed to members when it's time to contribute</li>
                <li>Members transfer directly to celebrants' accounts</li>
                <li>GroupFund tracks the payments but doesn't process them</li>
                <li>Each birthday person manages their own account details</li>
              </ul>
            </div>

            <div className="resource-section">
              <h2>Managing Birthday Contributions</h2>
              <p>Once your Birthday Group is set up:</p>
              <ul className="resource-list">
                <li><strong>Automatic Reminders:</strong> GroupFund sends reminders 7 days before, 1 day before, and on the birthday</li>
                <li><strong>Payment Tracking:</strong> See who has paid and who hasn't in real-time</li>
                <li><strong>Celebrant Confirmation:</strong> Birthday person confirms when payments are received</li>
                <li><strong>Birthday Calendar:</strong> View all upcoming and past birthdays</li>
                <li><strong>Contribution History:</strong> Track all birthday contributions over time</li>
              </ul>
            </div>

            <div className="resource-section">
              <h2>Best Practices</h2>
              <ul className="resource-list">
                <li><strong>Add All Birthdays Early:</strong> Make sure all birthdays are added at the start</li>
                <li><strong>Set Clear Amounts:</strong> Communicate contribution amounts clearly</li>
                <li><strong>Use Wishlists:</strong> Encourage members to create wishlists for better gift coordination</li>
                <li><strong>Track Consistently:</strong> Confirm payments promptly to maintain accuracy</li>
                <li><strong>Plan Ahead:</strong> Use the birthday calendar to plan contributions in advance</li>
              </ul>
            </div>

            <div className="cta-box">
              <h2>Ready to Set Up Your Birthday Group?</h2>
              <p>Start organizing birthday contributions effortlessly with GroupFund. Create your first Birthday Group today.</p>
              <div className="cta-buttons">
                <Link to="/waitlist" className="btn btn-primary btn-large">Start Free with GroupFund</Link>
                <Link to="/how-it-works" className="btn btn-secondary btn-large">See How It Works</Link>
              </div>
            </div>

            <div className="related-links">
              <h3>Related Guides</h3>
              <div className="related-links-grid">
                <Link to="/resources/using-birthday-wishlists">Using Birthday Wishlists →</Link>
                <Link to="/resources/choosing-between-group-types">Choosing Between Group Types →</Link>
                <Link to="/resources/setting-up-your-first-group">Setting Up Your First Group →</Link>
                <Link to="/group-types/birthday-groups">Birthday Groups Overview →</Link>
                <Link to="/resources">View All Resources →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

