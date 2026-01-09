import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function UsingGroupChatAndMessagingPage() {
  return (
    <>
      <SEO
        title="Using Group Chat & Messaging - Complete Guide to GroupFund Chat"
        description="Complete guide to GroupFund's per-group chat feature. Learn how to enable chat, mention members, customize notification preferences, and use chat effectively for group communication."
        keywords="group chat, messaging, group communication, mention notifications, chat preferences, group messaging guide, how to use group chat"
        canonical="https://www.groupfund.app/resources/using-group-chat-and-messaging"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Using Group Chat & Messaging</h1>
          <p className="page-subtitle">
            Complete guide to GroupFund's per-group chat feature for seamless group communication
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
              <h2>What is Group Chat?</h2>
              <p>
                GroupFund's per-group chat feature allows group members to communicate directly within the app. Chat is <strong>optional and disabled by default</strong>, giving group creators full control over whether their group uses chat or not.
              </p>
              <p>
                When enabled, active group members can send messages, view message history, mention other members, and receive smart notifications. This eliminates the need to switch between GroupFund and external messaging apps like WhatsApp.
              </p>
            </div>

            <div className="resource-section">
              <h2>Key Features</h2>
              <ul className="resource-list">
                <li><strong>Optional Per-Group Chat:</strong> Enable or disable chat when creating or editing a group</li>
                <li><strong>Member Mentions:</strong> Mention members using @username or @FirstName LastName</li>
                <li><strong>Smart Autocomplete:</strong> Get suggestions when typing @ to mention someone</li>
                <li><strong>Customizable Notifications:</strong> Choose to get notified for mentions only or all messages</li>
                <li><strong>Message History:</strong> View past messages with pagination</li>
                <li><strong>Message Management:</strong> Delete your own messages (or admins can delete any message)</li>
                <li><strong>Active Members Only:</strong> Only active group members can participate</li>
                <li><strong>Auto-Disable for Closed Groups:</strong> Chat is automatically disabled when groups are closed</li>
              </ul>
            </div>

            <div className="resource-section">
              <h2>Enabling Chat for Your Group</h2>
              <p>As a group creator, you can enable chat when:</p>
              <ol className="resource-list">
                <li><strong>Creating a New Group:</strong> Toggle the "Enable Chat" option during group creation</li>
                <li><strong>Editing an Existing Group:</strong> Go to group settings and toggle chat on/off</li>
              </ol>
              <p style={{ marginTop: '1rem', padding: '1rem', backgroundColor: '#f0f9ff', borderLeft: '4px solid #007bff', borderRadius: '4px' }}>
                <strong>💡 Tip:</strong> Chat is disabled by default. You must explicitly enable it if you want your group to use chat.
              </p>
            </div>

            <div className="resource-section">
              <h2>Sending Messages</h2>
              <p>To send a message in group chat:</p>
              <ol className="resource-list">
                <li>Open the group chat screen</li>
                <li>Type your message (1-2000 characters)</li>
                <li>Optionally mention members using @username</li>
                <li>Send the message</li>
              </ol>
              <p style={{ marginTop: '1rem' }}>
                <strong>Requirements:</strong>
              </p>
              <ul className="resource-list">
                <li>You must be an active member of the group</li>
                <li>Chat must be enabled for the group</li>
                <li>Group must be active (not closed)</li>
              </ul>
            </div>

            <div className="resource-section">
              <h2>Mentioning Members</h2>
              <p>The mention system allows you to notify specific members:</p>
              <ul className="resource-list">
                <li><strong>Format:</strong> Use @username or @FirstName LastName</li>
                <li><strong>Autocomplete:</strong> When you type @, you'll see suggestions of group members</li>
                <li><strong>Smart Matching:</strong> The system prioritizes exact matches, then names that start with your query, then names that contain it</li>
                <li><strong>Notifications:</strong> Mentioned members get notified (if they have mention notifications enabled)</li>
              </ul>
              <p style={{ marginTop: '1rem' }}>
                <strong>Example:</strong> "Hey @John Doe, can you confirm payment?" will notify John if he has mention notifications enabled.
              </p>
            </div>

            <div className="resource-section">
              <h2>Notification Preferences</h2>
              <p>You can customize how you receive chat notifications:</p>
              <ul className="resource-list">
                <li><strong>Mention Notifications (Default: ON):</strong> Get notified when someone mentions you using @username</li>
                <li><strong>All Messages Notifications (Default: OFF):</strong> Get notified for every message in the group chat</li>
              </ul>
              <p style={{ marginTop: '1rem' }}>
                <strong>How to Update:</strong>
              </p>
              <ol className="resource-list">
                <li>Go to your account settings</li>
                <li>Navigate to notification preferences</li>
                <li>Toggle "Notify on Chat Mentions" and/or "Notify on All Chat Messages"</li>
                <li>Save your preferences</li>
              </ol>
              <p style={{ marginTop: '1rem', padding: '1rem', backgroundColor: '#fff7ed', borderLeft: '4px solid #f59e0b', borderRadius: '4px' }}>
                <strong>💡 Note:</strong> If you're mentioned in a message, you'll get a mention notification even if "All Messages" is disabled. The system won't send duplicate notifications.
              </p>
            </div>

            <div className="resource-section">
              <h2>Viewing Message History</h2>
              <p>Message history is displayed with pagination:</p>
              <ul className="resource-list">
                <li><strong>Chronological Order:</strong> Messages are shown oldest first</li>
                <li><strong>Pagination:</strong> Load 50 messages at a time (default)</li>
                <li><strong>User Information:</strong> Each message shows the sender's name and timestamp</li>
                <li><strong>Deleted Messages:</strong> Soft-deleted messages are hidden from view</li>
              </ul>
            </div>

            <div className="resource-section">
              <h2>Deleting Messages</h2>
              <p>You can delete messages you've sent:</p>
              <ul className="resource-list">
                <li><strong>Your Messages:</strong> You can delete any message you sent</li>
                <li><strong>Admin/Co-Admin Privilege:</strong> Group admins and co-admins can delete any message in the group</li>
                <li><strong>Soft Delete:</strong> Messages are soft-deleted (hidden but can be restored if needed)</li>
                <li><strong>Already Deleted:</strong> You cannot delete a message that's already been deleted</li>
              </ul>
            </div>

            <div className="resource-section">
              <h2>Best Practices</h2>
              <ul className="resource-list">
                <li><strong>Keep Messages Relevant:</strong> Use chat for group-related discussions</li>
                <li><strong>Use Mentions Wisely:</strong> Only mention members when you need their attention</li>
                <li><strong>Respect Notification Preferences:</strong> Be mindful that not everyone wants notifications for all messages</li>
                <li><strong>Keep It Professional:</strong> Maintain respectful communication within groups</li>
                <li><strong>Use for Coordination:</strong> Chat is great for coordinating payments, confirming contributions, and group updates</li>
                <li><strong>Don't Spam:</strong> Avoid sending too many messages in a short time</li>
              </ul>
            </div>

            <div className="resource-section">
              <h2>When Chat is Disabled</h2>
              <p>Chat is automatically disabled in these situations:</p>
              <ul className="resource-list">
                <li><strong>By Default:</strong> New groups have chat disabled unless explicitly enabled</li>
                <li><strong>Closed Groups:</strong> Chat is automatically disabled when a group is closed</li>
                <li><strong>Admin Choice:</strong> Group creators can disable chat at any time</li>
              </ul>
              <p style={{ marginTop: '1rem' }}>
                When chat is disabled, members cannot send or view messages, but existing message history is preserved.
              </p>
            </div>

            <div className="resource-section">
              <h2>Security & Permissions</h2>
              <p>GroupFund ensures secure and appropriate chat usage:</p>
              <ul className="resource-list">
                <li><strong>Active Members Only:</strong> Only active group members can send/view messages</li>
                <li><strong>Group Validation:</strong> Membership is validated on every request</li>
                <li><strong>Message Length Limits:</strong> Messages must be 1-2000 characters</li>
                <li><strong>Admin/Co-Admin Controls:</strong> Group admins and co-admins can delete any message</li>
                <li><strong>Soft Delete:</strong> Deleted messages are preserved but hidden</li>
              </ul>
            </div>

            <div className="resource-section">
              <h2>Common Use Cases</h2>
              <ul className="resource-list">
                <li><strong>Payment Confirmations:</strong> "Hey @Admin, I've sent the payment!"</li>
                <li><strong>Deadline Reminders:</strong> "Don't forget, payment is due tomorrow!"</li>
                <li><strong>Coordination:</strong> "Can everyone confirm they've paid for this month's subscription?"</li>
                <li><strong>Updates:</strong> "The subscription has been renewed, everyone should have access now"</li>
                <li><strong>Questions:</strong> "What's the account number again?"</li>
                <li><strong>Thank You Messages:</strong> "Thanks everyone for the birthday contributions!"</li>
              </ul>
            </div>

            <div className="resource-section">
              <h2>Troubleshooting</h2>
              <p><strong>I can't send messages:</strong></p>
              <ul className="resource-list">
                <li>Check if chat is enabled for the group</li>
                <li>Verify you're an active member</li>
                <li>Ensure the group is not closed</li>
              </ul>
              <p style={{ marginTop: '1rem' }}>
                <strong>I'm not receiving notifications:</strong>
              </p>
              <ul className="resource-list">
                <li>Check your notification preferences in settings</li>
                <li>Verify you have "Notify on Chat Mentions" enabled if you want mention notifications</li>
                <li>Enable "Notify on All Chat Messages" if you want notifications for every message</li>
                <li>Check your device notification settings</li>
              </ul>
              <p style={{ marginTop: '1rem' }}>
                <strong>Mentions aren't working:</strong>
              </p>
              <ul className="resource-list">
                <li>Use the exact format: @username or @FirstName LastName</li>
                <li>Wait for autocomplete suggestions to appear</li>
                <li>Select a member from the suggestions list</li>
              </ul>
            </div>

            <div className="cta-box">
              <h2>Ready to Use Group Chat?</h2>
              <p>Enable chat for your group and start communicating seamlessly within GroupFund.</p>
              <div className="cta-buttons">
                <Link to="/get-started" className="btn btn-primary btn-large">Start Free with GroupFund</Link>
                <Link to="/features" className="btn btn-secondary btn-large">View All Features →</Link>
              </div>
            </div>

            <div className="related-links">
              <h3>Related Guides</h3>
              <div className="related-links-grid">
                <Link to="/resources/setting-up-your-first-group">Setting Up Your First Group →</Link>
                <Link to="/resources/setting-up-birthday-groups">Setting Up Birthday Groups →</Link>
                <Link to="/resources/setting-up-subscription-groups">Setting Up Subscription Groups →</Link>
                <Link to="/resources/creating-general-groups-for-events">Creating General Groups for Events →</Link>
                <Link to="/resources">View All Resources →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

