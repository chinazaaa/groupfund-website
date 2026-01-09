import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function StudentsUseCasePage() {
  return (
    <>
      <SEO
        title="GroupFund for Students - Organize College Group Contributions"
        description="Organize group contributions for college students, study groups, and dorm expenses with GroupFund. Track contributions, set fair amounts, and manage shared costs effortlessly. Perfect for student organizations and university communities."
        keywords="student contributions, college group payments, dorm expenses, study group payments, university contributions, student organization contributions"
        canonical="https://www.groupfund.app/use-cases/students"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">GroupFund for Students</h1>
          <p className="page-subtitle">
            Organize group contributions for college students, study groups, and dorm expenses. Track contributions, set fair amounts, and manage shared costs effortlessly.
          </p>
        </div>
      </section>

      <section className="use-case-detail-page">
        <div className="container">
          <div className="use-case-content">
            <div className="use-case-section">
              <h2>Why Students Love GroupFund</h2>
              <p>
                College life involves many shared expenses - dorm costs, study materials, subscriptions, and events. GroupFund makes it easy for students to organize contributions, track payments, and avoid awkward money conversations with roommates and study groups.
              </p>
              <p>
                Whether you're splitting dorm expenses, organizing study group subscriptions, or managing contributions for college events, GroupFund helps you keep everything organized and transparent.
              </p>
            </div>

            <div className="use-case-section">
              <h2>Key Features for Students</h2>
              <div className="features-list">
                <div className="feature-item">
                  <h3>🏠 Dorm & Housing Expenses</h3>
                  <p>Split rent, utilities, and shared dorm expenses with roommates. Track monthly payments and see who has paid.</p>
                </div>
                <div className="feature-item">
                  <h3>📚 Study Group Subscriptions</h3>
                  <p>Share study materials, online courses, and educational subscriptions with your study group. Use Subscription Groups for recurring payments.</p>
                </div>
                <div className="feature-item">
                  <h3>🎓 Student Organization Events</h3>
                  <p>Organize contributions for college events, club activities, and student organization expenses. Set deadlines tied to event dates.</p>
                </div>
                <div className="feature-item">
                  <h3>💰 Fair Contribution Amounts</h3>
                  <p>Set equal or custom amounts per person. Everyone knows exactly what to contribute, avoiding confusion.</p>
                </div>
                <div className="feature-item">
                  <h3>📅 Automatic Reminders</h3>
                  <p>Get reminders before deadlines so you never miss a payment. Perfect for busy student schedules.</p>
                </div>
                <div className="feature-item">
                  <h3>✅ Transparent Tracking</h3>
                  <p>See who has paid and who still needs to contribute. No more awkward reminders or forgotten payments.</p>
                </div>
              </div>
            </div>

            <div className="use-case-section">
              <h2>Common Student Scenarios</h2>
              <ul className="scenarios-list">
                <li><strong>Dorm Room Expenses:</strong> Split rent, utilities, internet, and shared supplies with roommates.</li>
                <li><strong>Study Group Subscriptions:</strong> Share online courses, study materials, and educational tools.</li>
                <li><strong>Student Club Events:</strong> Organize contributions for club activities, events, and equipment.</li>
                <li><strong>College Party Contributions:</strong> Split costs for parties, events, and social gatherings.</li>
                <li><strong>Graduation Contributions:</strong> Organize group gifts and contributions for graduating classmates.</li>
              </ul>
            </div>

            <div className="cta-box">
              <h2>Ready to Organize Your Student Group Contributions?</h2>
              <p>Join thousands of students who use GroupFund to make shared expenses stress-free.</p>
              <div className="cta-buttons">
                <Link to="/get-started" className="btn btn-primary btn-large">Start Your Student Group</Link>
                <Link to="/use-cases" className="btn btn-secondary btn-large">View All Use Cases</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

