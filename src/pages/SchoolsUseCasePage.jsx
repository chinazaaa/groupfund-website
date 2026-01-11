import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function SchoolsUseCasePage() {
  return (
    <>
      <SEO
        title="GroupFund for Schools - Organize School Group Contributions"
        description="Organize group contributions for teachers, staff, and students with GroupFund - birthdays, subscriptions, events. Perfect for class groups, teacher associations, and school communities."
        keywords="school group contributions, class contribution fund, teacher contributions, school contribution tracker, group contributions for schools"
        canonical="https://www.groupfund.app/use-cases/schools"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">GroupFund for Schools</h1>
          <p className="page-subtitle">
            Organize group contributions for teachers, staff, or students - birthdays, subscriptions, events. Perfect for class groups, teacher associations, and school communities.
          </p>
        </div>
      </section>

      <section className="use-case-detail-page">
        <div className="container">
          <div className="use-case-content">
            <div className="use-case-section">
              <h2>Why Schools Use GroupFund</h2>
              <p>
                Schools often need to organize birthday contributions for teachers, staff members, or even students. Whether it's a class group celebrating birthdays together or a teacher association organizing contributions, GroupFund makes it simple and transparent.
              </p>
              <p>
                With GroupFund, schools can maintain professional records, ensure fairness, and reduce the administrative burden of tracking contributions manually.
              </p>
            </div>

            <div className="use-case-section">
              <h2>Key Features for Schools</h2>
              <div className="features-list">
                <div className="feature-item">
                  <h3>🏫 Perfect for Class Groups</h3>
                  <p>Organize birthday contributions for entire classes or grade levels. Easy to set up and manage.</p>
                </div>
                <div className="feature-item">
                  <h3>👨‍🏫 Teacher Associations</h3>
                  <p>Manage contributions for teacher birthdays and staff celebrations. Professional and organized.</p>
                </div>
                <div className="feature-item">
                  <h3>📋 Maintain Records</h3>
                  <p>Keep complete records of all contributions for school administration and transparency.</p>
                </div>
                <div className="feature-item">
                  <h3>💰 Fixed Contribution Amounts</h3>
                  <p>Set standard amounts per person so everyone knows exactly what to contribute.</p>
                </div>
                <div className="feature-item">
                  <h3>📅 Birthday Calendar</h3>
                  <p>Never miss a teacher or student birthday with the integrated calendar view.</p>
                </div>
                <div className="feature-item">
                  <h3>✅ Transparent Tracking</h3>
                  <p>Everyone can see who has contributed, ensuring fairness and accountability.</p>
                </div>
                <div className="feature-item">
                  <h3>🔔 Automatic Reminders</h3>
                  <p>Reduce manual follow-ups with automatic reminders before each birthday.</p>
                </div>
                <div className="feature-item">
                  <h3>👥 Easy Group Management</h3>
                  <p>Approve member requests, manage group settings, and control membership easily.</p>
                </div>
                <div className="feature-item">
                  <h3>💬 School Group Chat</h3>
                  <p>Coordinate contributions with optional per-group chat. Mention teachers or students with @username, ask questions, share account details, and confirm payments - all in one place. Perfect for class groups and teacher associations.</p>
                </div>
              </div>
            </div>

            <div className="use-case-section">
              <h2>Common School Scenarios</h2>
              <ul className="scenarios-list">
                <li><strong>Class Birthday Funds:</strong> Organize contributions for students' birthdays within a class or grade level.</li>
                <li><strong>Teacher Associations:</strong> Manage birthday contributions for teachers and staff members.</li>
                <li><strong>School Staff:</strong> Organize contributions for administrative staff, janitors, and support staff birthdays.</li>
                <li><strong>Parent-Teacher Groups:</strong> Handle contributions for parent-teacher association members.</li>
                <li><strong>Alumni Groups:</strong> Manage birthday contributions for school alumni groups.</li>
              </ul>
            </div>

            <div className="use-case-section">
              <h2>How It Works for Schools</h2>
              <ol className="steps-list">
                <li><strong>Create Your School Group:</strong> Set up a group for your class, teacher association, or school community.</li>
                <li><strong>Set Contribution Amounts:</strong> Decide on a fair amount per person that works for your group.</li>
                <li><strong>Add Birthdays:</strong> Add all birthdays to the calendar - teachers, staff, or students.</li>
                <li><strong>Invite Members:</strong> Share an invite code with group members. They can request to join.</li>
                <li><strong>Track Contributions:</strong> Monitor payment statuses in real-time. See who has contributed and who hasn't.</li>
                <li><strong>Automatic Reminders:</strong> Members receive reminders before birthdays, reducing administrative work.</li>
                <li><strong>Maintain Records:</strong> Keep complete records of all contributions for school administration.</li>
              </ol>
            </div>

            <div className="use-case-section">
              <h2>Benefits for Schools</h2>
              <ul className="benefits-list">
                <li>Reduce administrative burden with automated tracking</li>
                <li>Maintain professional records of all contributions</li>
                <li>Ensure fairness across all group members</li>
                <li>Easy to set up and manage for any school group</li>
                <li>Transparent system that builds trust</li>
                <li>Support for multiple currencies for international schools</li>
                <li>Perfect for both small and large school groups</li>
              </ul>
            </div>

            <div className="cta-box">
              <h2>Ready to Organize Your School's Birthday Contributions?</h2>
              <p>Join schools using GroupFund to make birthday celebrations organized and stress-free.</p>
              <div className="cta-buttons">
                <Link to="/get-started" className="btn btn-primary btn-large">Start Your School Group</Link>
                <Link to="/how-it-works" className="btn btn-secondary btn-large">See How It Works</Link>
              </div>
            </div>

            <div className="related-links">
              <h3>Explore Other Use Cases</h3>
              <div className="related-links-grid">
                <Link to="/use-cases/families">For Families →</Link>
                <Link to="/use-cases/churches">For Churches →</Link>
                <Link to="/use-cases/friend-groups">For Friend Groups →</Link>
                <Link to="/use-cases/workplace">For Workplace →</Link>
                <Link to="/use-cases/community-organizations">For Community Organizations →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

