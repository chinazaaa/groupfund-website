import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function SettingUpYourFirstGroupPage() {
  return (
    <>
      <SEO
        title="Setting Up Your First Group - Quick Start Guide"
        description="Learn how to set up your first birthday contribution group step-by-step. Quick start guide for beginners. Perfect for first-time users."
        keywords="setting up birthday contribution group, first group setup, how to create birthday group, group setup guide, beginner guide"
        canonical="https://groupfund.app/resources/setting-up-your-first-group"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Setting Up Your First Group</h1>
          <p className="page-subtitle">
            Quick start guide for creating your first birthday contribution group
          </p>
        </div>
      </section>

      <section className="resource-detail-page">
        <div className="container">
          <div className="resource-content">
            <div className="resource-meta">
              <span className="resource-category">Getting Started</span>
              <span className="resource-read-time">4 min read</span>
            </div>

            <div className="resource-section">
              <h2>Introduction</h2>
              <p>
                Setting up your first birthday contribution group is easier than you think. This quick start guide will walk you through the process step-by-step, so you can have your group up and running in minutes.
              </p>
            </div>

            <div className="resource-section">
              <h2>Step 1: Download and Sign Up</h2>
              <p>
                First, download the GroupFund app and create your account:
              </p>
              <ul className="resource-list">
                <li>Download GroupFund from the App Store or Google Play</li>
                <li>Sign up with your email or phone number</li>
                <li>Verify your account with the OTP code sent to you</li>
                <li>Complete your profile with your name and birthday</li>
              </ul>
            </div>

            <div className="resource-section">
              <h2>Step 2: Create Your Group</h2>
              <p>
                Once you're signed in, create your first group:
              </p>
              <ul className="resource-list">
                <li>Tap the "Create Group" button</li>
                <li>Enter a group name (e.g., "Smith Family", "St. Mary's Church", "Office Team")</li>
                <li>Choose your group's currency (NGN, USD, EUR, etc.)</li>
                <li>Set the contribution amount per person</li>
                <li>Set the maximum number of members</li>
              </ul>
            </div>

            <div className="resource-section">
              <h2>Step 3: Add Member Birthdays</h2>
              <p>
                Add birthdays for all group members:
              </p>
              <ul className="resource-list">
                <li>You can add birthdays yourself as the group creator</li>
                <li>Or let members add their own birthdays when they join</li>
                <li>Make sure all birthdays are added to the calendar</li>
              </ul>
            </div>

            <div className="resource-section">
              <h2>Step 4: Invite Members</h2>
              <p>
                Invite people to join your group:
              </p>
              <ul className="resource-list">
                <li>Share the group invite code with potential members</li>
                <li>Members can request to join using the code</li>
                <li>You'll receive notifications for join requests</li>
                <li>Approve or reject requests based on your preferences</li>
              </ul>
            </div>

            <div className="resource-section">
              <h2>Step 5: Set Up Payment Details</h2>
              <p>
                Configure how payments will work:
              </p>
              <ul className="resource-list">
                <li>Celebrants can add their bank account details</li>
                <li>Bank details are displayed to members when it's time to contribute</li>
                <li>Members transfer directly to celebrants' accounts</li>
                <li>GroupFund tracks the payments but doesn't process them</li>
              </ul>
            </div>

            <div className="resource-section">
              <h2>Step 6: Start Contributing</h2>
              <p>
                Once your group is set up, you're ready to start:
              </p>
              <ul className="resource-list">
                <li>When a birthday approaches, members receive automatic reminders</li>
                <li>Members transfer money to the celebrant's account</li>
                <li>Members mark their payment as "Paid" in the app</li>
                <li>Celebrants confirm receipt of payments</li>
                <li>Everyone can see payment statuses in real-time</li>
              </ul>
            </div>

            <div className="resource-section">
              <h2>Tips for First-Time Users</h2>
              <ul className="resource-list">
                <li><strong>Start Small:</strong> Begin with a small group (5-10 members) to get comfortable</li>
                <li><strong>Set Clear Rules:</strong> Communicate contribution amounts and deadlines clearly</li>
                <li><strong>Be Patient:</strong> It may take time for all members to join and get comfortable</li>
                <li><strong>Use Reminders:</strong> Let automatic reminders do the work for you</li>
                <li><strong>Stay Transparent:</strong> Make sure everyone can see payment statuses</li>
              </ul>
            </div>

            <div className="resource-section">
              <h2>Common First-Time Questions</h2>
              
              <h3>Do I need to add all birthdays at once?</h3>
              <p>
                No, you can add birthdays gradually. Members can also add their own birthdays when they join.
              </p>

              <h3>Can I change the contribution amount later?</h3>
              <p>
                Yes, but it's best to set it at the start of the year. Changing mid-year can create confusion.
              </p>

              <h3>What if someone doesn't want to join?</h3>
              <p>
                That's okay! GroupFund is optional. Only people who want to participate need to join.
              </p>

              <h3>How do I know if someone paid?</h3>
              <p>
                Members mark payments as "Paid" after transferring. Celebrants then confirm receipt. You can see all statuses in the app.
              </p>
            </div>

            <div className="cta-box">
              <h2>Ready to Set Up Your First Group?</h2>
              <p>GroupFund makes it easy to create and manage your first birthday contribution group.</p>
              <div className="cta-buttons">
                <Link to="/waitlist" className="btn btn-primary btn-large">Get Started Free</Link>
                <Link to="/how-it-works" className="btn btn-secondary btn-large">See How It Works</Link>
              </div>
            </div>

            <div className="related-links">
              <h3>Related Guides</h3>
              <div className="related-links-grid">
                <Link to="/resources/how-to-organize-birthday-contributions">How to Organize Birthday Contributions →</Link>
                <Link to="/resources/birthday-contribution-etiquette">Birthday Contribution Etiquette →</Link>
                <Link to="/resources/calculating-group-contributions">Calculating Contributions →</Link>
                <Link to="/resources">View All Resources →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

