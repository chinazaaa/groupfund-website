import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function GroupChatBestPracticesPage() {
  return (
    <>
      <SEO
        title="Group Chat Best Practices - Effective Communication in GroupFund"
        description="Learn best practices for using group chat effectively. Tips for respectful communication, when to use mentions, managing notifications, and maintaining group harmony through chat."
        keywords="group chat best practices, chat etiquette, group communication, mention best practices, chat notifications, respectful messaging"
        canonical="https://www.groupfund.app/best-practices/group-chat-best-practices"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Group Chat Best Practices</h1>
          <p className="page-subtitle">
            Learn how to use group chat effectively and maintain respectful communication within your group
          </p>
        </div>
      </section>

      <section className="resource-detail-page">
        <div className="container">
          <div className="resource-content">
            <div className="resource-meta">
              <span className="resource-category">Best Practices</span>
              <span className="resource-read-time">5 min read</span>
            </div>

            <div className="resource-section">
              <h2>Introduction</h2>
              <p>
                Group chat is a powerful tool for coordinating contributions, sharing updates, and building community within your group. However, like any communication tool, it works best when everyone follows some basic best practices. This guide will help you and your group members use chat effectively and respectfully.
              </p>
            </div>

            <div className="resource-section">
              <h2>Keep Messages Relevant</h2>
              <p>
                Group chat should focus on group-related topics:
              </p>
              <ul className="resource-list">
                <li><strong>Payment Confirmations:</strong> "I've sent the payment, @Admin"</li>
                <li><strong>Deadline Reminders:</strong> "Don't forget, payment is due tomorrow!"</li>
                <li><strong>Coordination:</strong> "Can everyone confirm they've paid for this month?"</li>
                <li><strong>Group Updates:</strong> "The subscription has been renewed"</li>
                <li><strong>Questions:</strong> "What's the account number again?"</li>
              </ul>
              <p style={{ marginTop: '1rem', padding: '1rem', backgroundColor: '#fef2f2', borderLeft: '4px solid #ef4444', borderRadius: '4px' }}>
                <strong>⚠️ Avoid:</strong> Off-topic conversations, personal drama, spam, or unrelated discussions that clutter the chat and make it harder to find important information.
              </p>
            </div>

            <div className="resource-section">
              <h2>Use Mentions Wisely</h2>
              <p>
                Mentions (@username) are powerful but should be used thoughtfully:
              </p>
              <ul className="resource-list">
                <li><strong>When to Mention:</strong>
                  <ul style={{ marginTop: '0.5rem' }}>
                    <li>You need a specific person's attention</li>
                    <li>Asking a question directed at someone</li>
                    <li>Confirming payment with the admin</li>
                    <li>Notifying someone about an action they need to take</li>
                  </ul>
                </li>
                <li><strong>When NOT to Mention:</strong>
                  <ul style={{ marginTop: '0.5rem' }}>
                    <li>General announcements that apply to everyone</li>
                    <li>Casual conversation</li>
                    <li>When the person is already engaged in the conversation</li>
                    <li>Multiple mentions in quick succession</li>
                  </ul>
                </li>
              </ul>
              <p style={{ marginTop: '1rem', padding: '1rem', backgroundColor: '#f0f9ff', borderLeft: '4px solid #007bff', borderRadius: '4px' }}>
                <strong>💡 Tip:</strong> If you mention someone, wait for their response before mentioning them again. Give people time to respond.
              </p>
            </div>

            <div className="resource-section">
              <h2>Respect Notification Preferences</h2>
              <p>
                Not everyone wants notifications for every message:
              </p>
              <ul className="resource-list">
                <li><strong>Mention Notifications (Default: ON):</strong> Most people have this enabled, so use mentions when you need someone's attention</li>
                <li><strong>All Messages (Default: OFF):</strong> Most people don't want notifications for every message, so avoid spamming the chat</li>
                <li><strong>Be Mindful:</strong> If you're sending multiple messages in a row, consider combining them into one message</li>
                <li><strong>Urgent Matters:</strong> For urgent matters, use mentions to ensure people get notified</li>
              </ul>
            </div>

            <div className="resource-section">
              <h2>Maintain Professional Communication</h2>
              <p>
                Even in casual groups, maintain respectful communication:
              </p>
              <ul className="resource-list">
                <li><strong>Be Clear and Concise:</strong> Get to the point quickly</li>
                <li><strong>Use Proper Grammar:</strong> While casual is fine, clarity matters</li>
                <li><strong>Avoid All Caps:</strong> IT LOOKS LIKE YOU'RE SHOUTING</li>
                <li><strong>Be Respectful:</strong> Treat others as you'd like to be treated</li>
                <li><strong>Stay Positive:</strong> Keep the tone friendly and constructive</li>
                <li><strong>No Harassment:</strong> Never use chat for harassment, bullying, or inappropriate content</li>
              </ul>
            </div>

            <div className="resource-section">
              <h2>Timing Matters</h2>
              <p>
                Consider when you send messages:
              </p>
              <ul className="resource-list">
                <li><strong>Business Hours:</strong> For work-related groups, respect business hours</li>
                <li><strong>Time Zones:</strong> Be mindful of members in different time zones</li>
                <li><strong>Urgency:</strong> Only send urgent messages outside normal hours</li>
                <li><strong>Batch Messages:</strong> If you have multiple updates, send them together rather than one by one</li>
              </ul>
            </div>

            <div className="resource-section">
              <h2>Use Chat for Coordination</h2>
              <p>
                Group chat excels at coordination tasks:
              </p>
              <ul className="resource-list">
                <li><strong>Payment Confirmations:</strong> "Hey @Admin, payment sent!"</li>
                <li><strong>Status Updates:</strong> "8 out of 10 members have paid"</li>
                <li><strong>Deadline Reminders:</strong> "Reminder: Payment due tomorrow"</li>
                <li><strong>Quick Questions:</strong> "What's the deadline for this month?"</li>
                <li><strong>Group Decisions:</strong> "Should we increase the contribution amount?"</li>
              </ul>
            </div>

            <div className="resource-section">
              <h2>Don't Spam</h2>
              <p>
                Avoid sending too many messages in a short time:
              </p>
              <ul className="resource-list">
                <li><strong>Combine Messages:</strong> If you have multiple points, combine them into one message</li>
                <li><strong>Wait for Responses:</strong> Don't send follow-up messages immediately</li>
                <li><strong>Use Threads:</strong> If available, use threading for related topics</li>
                <li><strong>Edit Instead:</strong> If you made a mistake, edit the message rather than sending a correction</li>
              </ul>
            </div>

            <div className="resource-section">
              <h2>Handle Disagreements Privately</h2>
              <p>
                If conflicts arise:
              </p>
              <ul className="resource-list">
                <li><strong>Take It Private:</strong> Move disagreements to private messages</li>
                <li><strong>Stay Professional:</strong> Keep group chat positive and constructive</li>
                <li><strong>Involve Admin:</strong> If needed, ask the group admin to mediate</li>
                <li><strong>Report Issues:</strong> If someone violates group rules, report them</li>
              </ul>
            </div>

            <div className="resource-section">
              <h2>Admin Best Practices</h2>
              <p>
                Group admins have additional responsibilities:
              </p>
              <ul className="resource-list">
                <li><strong>Set Expectations:</strong> Clearly communicate chat guidelines when enabling chat</li>
                <li><strong>Moderate When Needed:</strong> Delete inappropriate messages promptly</li>
                <li><strong>Lead by Example:</strong> Follow all best practices yourself</li>
                <li><strong>Address Issues:</strong> Don't ignore problems - address them quickly</li>
                <li><strong>Disable If Needed:</strong> If chat becomes problematic, disable it temporarily</li>
              </ul>
            </div>

            <div className="resource-section">
              <h2>Common Mistakes to Avoid</h2>
              <ul className="resource-list">
                <li><strong>Over-mentioning:</strong> Mentioning people unnecessarily</li>
                <li><strong>Spamming:</strong> Sending too many messages in quick succession</li>
                <li><strong>Off-topic:</strong> Using chat for unrelated conversations</li>
                <li><strong>Being Vague:</strong> Unclear messages that require follow-up questions</li>
                <li><strong>Ignoring Context:</strong> Not reading previous messages before responding</li>
                <li><strong>Personal Drama:</strong> Bringing personal issues into group chat</li>
                <li><strong>Inappropriate Content:</strong> Sharing content that's not appropriate for the group</li>
              </ul>
            </div>

            <div className="resource-section">
              <h2>Examples of Good Chat Usage</h2>
              <div style={{ padding: '1rem', backgroundColor: '#f0fdf4', borderLeft: '4px solid #22c55e', borderRadius: '4px', marginTop: '1rem' }}>
                <p><strong>✅ Good:</strong> "Hey @John, I've sent the payment for this month's subscription. Please confirm when you receive it. Thanks!"</p>
              </div>
              <div style={{ padding: '1rem', backgroundColor: '#fef2f2', borderLeft: '4px solid #ef4444', borderRadius: '4px', marginTop: '1rem' }}>
                <p><strong>❌ Bad:</strong> "payment sent" (too vague, no mention, no context)</p>
              </div>
              <div style={{ padding: '1rem', backgroundColor: '#f0fdf4', borderLeft: '4px solid #22c55e', borderRadius: '4px', marginTop: '1rem' }}>
                <p><strong>✅ Good:</strong> "Reminder: Payment deadline is tomorrow. 7 out of 10 members have paid. Thanks everyone!"</p>
              </div>
              <div style={{ padding: '1rem', backgroundColor: '#fef2f2', borderLeft: '4px solid #ef4444', borderRadius: '4px', marginTop: '1rem' }}>
                <p><strong>❌ Bad:</strong> "PAYMENT DUE TOMORROW!!!" (too aggressive, all caps)</p>
              </div>
            </div>

            <div className="resource-section">
              <h2>When to Disable Chat</h2>
              <p>
                Sometimes it's better to disable chat:
              </p>
              <ul className="resource-list">
                <li><strong>Group Prefers External Chat:</strong> If your group already uses WhatsApp or another platform</li>
                <li><strong>Chat Becomes Problematic:</strong> If chat is causing more problems than it solves</li>
                <li><strong>Minimal Coordination Needed:</strong> If your group doesn't need frequent communication</li>
                <li><strong>Temporary Issues:</strong> Disable temporarily if there's a conflict, then re-enable later</li>
              </ul>
            </div>

            <div className="cta-box">
              <h2>Ready to Use Chat Effectively?</h2>
              <p>Follow these best practices to make group chat a valuable tool for your group coordination.</p>
              <div className="cta-buttons">
                <Link to="/resources/using-group-chat-and-messaging" className="btn btn-primary btn-large">Learn How to Use Chat →</Link>
                <Link to="/get-started" className="btn btn-secondary btn-large">Start Free with GroupFund</Link>
              </div>
            </div>

            <div className="related-links">
              <h3>Related Guides</h3>
              <div className="related-links-grid">
                <Link to="/resources/using-group-chat-and-messaging">Using Group Chat & Messaging →</Link>
                <Link to="/resources/birthday-contribution-etiquette">Group Contribution Etiquette →</Link>
                <Link to="/resources/subscription-group-best-practices">Subscription Group Best Practices →</Link>
                <Link to="/resources">View All Resources →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

