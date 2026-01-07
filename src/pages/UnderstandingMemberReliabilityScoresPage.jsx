import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function UnderstandingMemberReliabilityScoresPage() {
  return (
    <>
      <SEO
        title="Understanding Member Reliability Scores - Complete Guide"
        description="Learn how member reliability scores work in GroupFund. Understand how scores are calculated, what they mean, and how to use them to make informed decisions about group membership."
        keywords="member reliability scores, reliability scores explained, group member reliability, payment reliability, member rating system"
        canonical="https://www.groupfund.app/resources/understanding-member-reliability-scores"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Understanding Member Reliability Scores</h1>
          <p className="page-subtitle">
            Complete guide to how member reliability scores work and how to use them
          </p>
        </div>
      </section>

      <section className="resource-detail-page">
        <div className="container">
          <div className="resource-content">
            <div className="resource-meta">
              <span className="resource-category">Getting Started</span>
              <span className="resource-read-time">5 min read</span>
            </div>

            <div className="resource-section">
              <h2>Introduction</h2>
              <p>
                Member reliability scores help you make informed decisions about joining groups and accepting new members. This guide explains how reliability scores work, how they're calculated, and how to use them effectively.
              </p>
            </div>

            <div className="resource-section">
              <h2>What Are Member Reliability Scores?</h2>
              <p>
                Member reliability scores are a 0-100 rating that indicates how reliable a member is at contributing on time. Higher scores mean more reliable members. These scores help you:
              </p>
              <ul className="resource-list">
                <li>Decide which groups to join</li>
                <li>Make informed decisions about accepting new members</li>
                <li>Understand member payment patterns</li>
                <li>Maintain group quality</li>
              </ul>
            </div>

            <div className="resource-section">
              <h2>How Scores Are Calculated</h2>
              <p>
                Reliability scores are calculated based on several factors:
              </p>
              
              <h3>1. Total Contributions</h3>
              <p>
                The number of contributions a member has made across all groups. More contributions generally indicate more experience and reliability.
              </p>

              <h3>2. On-Time Payment Rate</h3>
              <p>
                The percentage of payments made on or before the deadline. Members who consistently pay on time have higher scores.
              </p>

              <h3>3. Total Groups Joined</h3>
              <p>
                The number of groups a member is part of. Active participation across multiple groups can indicate reliability.
              </p>

              <h3>4. Overdue Contributions</h3>
              <p>
                The number of overdue or missed contributions. Fewer overdue payments means a higher score.
              </p>
            </div>

            <div className="resource-section">
              <h2>Score Ranges and Ratings</h2>
              <p>
                Members are rated based on their scores:
              </p>
              
              <h3>Excellent (90-100)</h3>
              <p>
                Highly reliable members who consistently contribute on time. These members have excellent payment history and are very trustworthy.
              </p>

              <h3>Good (70-89)</h3>
              <p>
                Reliable members with good payment history. Occasional late payments but generally dependable.
              </p>

              <h3>Moderate (50-69)</h3>
              <p>
                Members with moderate reliability. May have some late payments or missed contributions, but generally participate.
              </p>

              <h3>Poor (30-49)</h3>
              <p>
                Members with poor reliability. Frequent late payments or missed contributions. Consider carefully before accepting.
              </p>

              <h3>New (0-29 or New Members)</h3>
              <p>
                New members without enough history to calculate a reliable score. Give them a chance, but monitor closely.
              </p>
            </div>

            <div className="resource-section">
              <h2>How to Use Reliability Scores</h2>
              
              <h3>When Joining Groups</h3>
              <p>
                Before joining a group, check member reliability scores:
              </p>
              <ul className="resource-list">
                <li>Look at the average reliability of group members</li>
                <li>Check if there are many members with poor scores</li>
                <li>Consider the group's overall health</li>
                <li>Make an informed decision about joining</li>
              </ul>

              <h3>When Accepting New Members</h3>
              <p>
                When reviewing join requests:
              </p>
              <ul className="resource-list">
                <li>Check the member's reliability score</li>
                <li>Review their payment history if available</li>
                <li>Consider the group's current health</li>
                <li>Accept or reject based on reliability</li>
              </ul>

              <h3>For Group Management</h3>
              <p>
                Use scores to manage your group:
              </p>
              <ul className="resource-list">
                <li>Identify members who may need extra reminders</li>
                <li>Recognize highly reliable members</li>
                <li>Make decisions about group membership</li>
                <li>Maintain group quality standards</li>
              </ul>
            </div>

            <div className="resource-section">
              <h2>Improving Your Reliability Score</h2>
              <p>
                If you want to improve your reliability score:
              </p>
              <ul className="resource-list">
                <li><strong>Pay On Time:</strong> Always contribute before or on the deadline</li>
                <li><strong>Be Consistent:</strong> Maintain consistent payment behavior across all groups</li>
                <li><strong>Participate Actively:</strong> Join and contribute to multiple groups</li>
                <li><strong>Avoid Overdue Payments:</strong> Don't let payments become overdue</li>
                <li><strong>Confirm Receipts:</strong> If you're a celebrant, confirm payments promptly</li>
              </ul>
            </div>

            <div className="resource-section">
              <h2>Understanding Score Limitations</h2>
              <p>
                Reliability scores are helpful but have limitations:
              </p>
              <ul className="resource-list">
                <li><strong>New Members:</strong> New members don't have enough history for accurate scores</li>
                <li><strong>Context Matters:</strong> Consider individual circumstances, not just scores</li>
                <li><strong>Not Perfect:</strong> Scores are indicators, not guarantees</li>
                <li><strong>Can Change:</strong> Scores improve or decline based on recent behavior</li>
              </ul>
            </div>

            <div className="cta-box">
              <h2>Ready to Use Reliability Scores?</h2>
              <p>GroupFund automatically calculates and displays member reliability scores to help you make informed decisions.</p>
              <div className="cta-buttons">
                <Link to="/get-started" className="btn btn-primary btn-large">Start Free with GroupFund</Link>
                <Link to="/features">View Features →</Link>
              </div>
            </div>

            <div className="related-links">
              <h3>Related Guides</h3>
              <div className="related-links-grid">
                <Link to="/resources/setting-up-your-first-group">Setting Up Your First Group →</Link>
                <Link to="/resources/how-to-organize-birthday-contributions">How to Organize Birthday Contributions →</Link>
                <Link to="/resources/managing-large-group-contributions">Managing Large Groups →</Link>
                <Link to="/resources">View All Resources →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

