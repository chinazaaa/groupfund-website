import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function SettingUpYourFirstGroupPage() {
  // Add HowTo structured data
  useEffect(() => {
    const howToStructuredData = {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "Setting Up Your First Group",
      "description": "Quick start guide for creating your first group - birthday, subscription, or general",
      "image": "https://www.groupfund.app/og-image.jpg",
      "url": "https://www.groupfund.app/resources/setting-up-your-first-group",
      "totalTime": "PT4M",
      "estimatedCost": {
        "@type": "MonetaryAmount",
        "currency": "USD",
        "value": "0"
      },
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Download and Sign Up",
          "text": "Download GroupFund from the App Store or Google Play. Sign up with your email. Verify your account with the OTP code sent to you. Complete your profile with your name and birthday."
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Create Your Group",
          "text": "Tap the 'Create Group' button. Choose your group type (Birthday, Subscription, or General). Enter a group name. Choose your group's currency (NGN, USD, EUR, etc.). Set the contribution amount per person. Set the maximum number of members. For Subscription Groups: Set frequency, platform, and deadline. For General Groups: Optionally set a deadline."
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Set Up Group-Specific Details",
          "text": "For Birthday Groups: Add birthdays for all group members. For Subscription Groups: Subscription deadline is already set. For General Groups: Optional deadline can be set."
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "Invite Members",
          "text": "Share the group invite code with potential members. Members can request to join using the code. You'll receive notifications for join requests. Approve or reject requests based on your preferences."
        },
        {
          "@type": "HowToStep",
          "position": 5,
          "name": "Set Up Payment Details",
          "text": "Celebrants can add their bank account details. Bank details are displayed to members when it's time to contribute. Members transfer directly to celebrants' accounts. GroupFund tracks the payments but doesn't process them."
        },
        {
          "@type": "HowToStep",
          "position": 6,
          "name": "Start Contributing",
          "text": "Before deadlines, members receive automatic reminders. Members transfer money to the appropriate account (celebrant's for Birthday Groups, admin's for Subscription/General Groups). Members mark their payment as 'Paid' in the app. Admins or celebrants confirm receipt of payments. Everyone can see payment statuses in real-time."
        }
      ]
    }

    const existingScript = document.querySelector('script[data-howto-schema]')
    if (existingScript) existingScript.remove()
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.setAttribute('data-howto-schema', 'true')
    script.textContent = JSON.stringify(howToStructuredData)
    document.head.appendChild(script)
    return () => {
      const scriptToRemove = document.querySelector('script[data-howto-schema]')
      if (scriptToRemove) scriptToRemove.remove()
    }
  }, [])

  return (
    <>
      <SEO
        title="Setting Up Your First Group - Quick Start Guide"
        description="Learn how to set up your first group step-by-step - birthday, subscription, or general. Quick start guide for beginners. Perfect for first-time users."
        keywords="setting up group, first group setup, how to create group, group setup guide, beginner guide, birthday groups, subscription groups, general groups"
        canonical="https://www.groupfund.app/resources/setting-up-your-first-group"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Setting Up Your First Group</h1>
          <p className="page-subtitle">
            Quick start guide for creating your first group - birthday, subscription, or general
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
                Setting up your first group is easier than you think. This quick start guide will walk you through the process step-by-step, so you can have your group up and running in minutes - whether it's a Birthday Group, Subscription Group, or General Group.
              </p>
            </div>

            <div className="resource-section">
              <h2>Step 1: Download and Sign Up</h2>
              <p>
                First, download the GroupFund app and create your account:
              </p>
              <ul className="resource-list">
                <li>Download GroupFund from the App Store or Google Play</li>
                <li>Sign up with your email </li>
                <li>Verify your account with the OTP code sent to you</li>              </ul>
            </div>

            <div className="resource-section">
              <h2>Step 2: Create Your Group</h2>
              <p>
                Once you're signed in, create your first group:
              </p>
              <ul className="resource-list">
                <li>Tap the "Create Group" button</li>
                <li>Choose your group type: Birthday Group, Subscription Group (for shared subscriptions), or General Group (for events, any purpose)</li>
                <li>Enter a group name (e.g., "Smith Family", "Netflix Subscription", "Wedding Fund")</li>
                <li>Choose your group's currency (NGN, USD, EUR, etc.)</li>
                <li>Set the contribution amount per person</li>
                <li>Set the maximum number of members</li>
                <li>For Subscription Groups: Set frequency (monthly/annual), platform name, and deadline day</li>
                <li>For General Groups: Optionally set a deadline date</li>
                <li>For Birthday Groups: You'll need to have your birthday set in your profile</li>
              </ul>
            </div>

            <div className="resource-section">
              <h2>Step 3: Set Up Group-Specific Details</h2>
              <p>
                Configure details based on your group type:
              </p>
              <ul className="resource-list">
                <li><strong>For Birthday Groups:</strong> Add birthdays for all group members. You can add birthdays yourself or let members add their own when they join. Make sure all birthdays are added to the calendar.</li>
                <li><strong>For Subscription Groups:</strong> The subscription deadline is already set. Members will get reminders before the deadline.</li>
                <li><strong>For General Groups:</strong> If you set a deadline, members will get reminders before it. If no deadline, you can track contributions without a specific date.</li>
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
                Configure how payments will work. You have two options:
              </p>
              
              <h3>Option 1: Automatic Payments (Auto-Pay)</h3>
              <p>For groups using USD, EUR, or GBP:</p>
              <ul className="resource-list">
                <li>Add a debit card to your account</li>
                <li>Enable auto-pay for the group</li>
                <li>Choose payment timing: "1 day before" or "same day"</li>
                <li>Your card is automatically charged on payment dates</li>
                <li>Payments are processed securely via Stripe and automatically confirmed</li>
                <li>Funds are credited to recipient's in-app wallet balance</li>
                <li>Fees apply (contributor pays, recipient receives full amount)</li>
              </ul>
              
              <h3>Option 2: Manual Payments</h3>
              <p>For all currencies (including NGN and others):</p>
              <ul className="resource-list">
                <li>Celebrants/admins add their bank account details</li>
                <li>Bank details are displayed to members when it's time to contribute</li>
                <li>Members transfer directly to celebrants' or admins' accounts (outside the app)</li>
                <li>Members mark payment as "Paid" in the app</li>
                <li>Recipients confirm they received the payment</li>
                <li>No fees apply to manual payments</li>
              </ul>
            </div>

            <div className="resource-section">
              <h2>Step 6: Start Contributing</h2>
              <p>
                Once your group is set up, you're ready to start:
              </p>
              <ul className="resource-list">
                <li>Before deadlines, members receive automatic reminders (7 days, 1 day, same day for birthdays; before subscription deadlines; before event deadlines)</li>
                <li>Members transfer money to the appropriate account (celebrant's for Birthday Groups, admin's for Subscription/General Groups)</li>
                <li>Members mark their payment as "Paid" in the app</li>
                <li>Admins or celebrants confirm receipt of payments</li>
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
                No. Members can add their own birthday to their profile.
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
                Members mark payments as "Paid" after transferring. Celebrants or admins then confirm receipt. You can see all statuses in the app.
              </p>
            </div>

            <div className="cta-box">
              <h2>Ready to Set Up Your First Group?</h2>
              <p>GroupFund makes it easy to create and manage your first birthday contribution group.</p>
              <div className="cta-buttons">
                <Link to="/get-started" className="btn btn-primary btn-large">Get Started for Free</Link>
                <Link to="/how-it-works" className="btn btn-secondary btn-large">See How It Works</Link>
              </div>
            </div>

            <div className="related-links">
              <h3>Related Guides</h3>
              <div className="related-links-grid">
                <Link to="/resources/how-to-organize-birthday-contributions">How to Organize Group Contributions →</Link>
                <Link to="/resources/birthday-contribution-etiquette">Group Contribution Etiquette →</Link>
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

