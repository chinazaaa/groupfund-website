import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function AboutPage() {
  return (
    <>
      <SEO
        title="About GroupFund - Our Mission to End Group Contribution Chaos"
        description="Learn about GroupFund's mission to help families, churches, and groups organize contributions for birthdays, subscriptions, and events effortlessly. Discover why we built this app and our commitment to transparency."
        keywords="about groupfund, groupfund mission, group contribution app, group contribution mission, our story"
        canonical="https://groupfund.app/about"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">About GroupFund</h1>
          <p className="page-subtitle">
            We're on a mission to end group contribution chaos for groups everywhere.
          </p>
        </div>
      </section>

      <section className="about-page">
        <div className="container">
          <div className="about-content">
            <div className="about-section">
              <h2>Our Mission</h2>
              <p>
                GroupFund was born from a simple frustration: organizing group contributions in group chats and spreadsheets is chaotic, time-consuming, and often unfair. We saw families, churches, schools, and friend groups struggling with the same problems, like forgotten payments, unclear amounts, and endless WhatsApp messages - whether for birthdays, shared subscriptions, or events.
              </p>
              <p>
                Our mission is to bring order, transparency, and fairness to group contributions of all kinds. We believe that organizing contributions should be effortless, not stressful. That's why we built GroupFund to support Birthday Groups, Subscription Groups (for shared subscriptions like Netflix, Spotify), and General Groups (for weddings, events, any purpose), so groups can focus on what matters: coming together.
              </p>
            </div>

            <div className="about-section">
              <h2>Why We Built GroupFund</h2>
              <p>
                After experiencing the frustration of managing group contributions ourselves, we realized there had to be a better way. Traditional methods like WhatsApp groups and Excel spreadsheets fail because they:
              </p>
              <ul className="about-list">
                <li>Lack transparency about who has paid and who hasn't</li>
                <li>Make it easy to forget payment deadlines</li>
                <li>Don't support multiple currencies for international groups</li>
                <li>Require constant manual tracking and reminders</li>
                <li>Create awkward situations when following up on payments</li>
              </ul>
              <p>
                GroupFund solves all these problems with a simple, intuitive app that handles the organization automatically. We built it to be free, accessible, and powerful enough for any group size.
              </p>
            </div>

            <div className="about-section">
              <h2>Our Values</h2>
              <div className="values-grid">
                <div className="value-card">
                  <h3>Transparency</h3>
                  <p>Everyone should see who has contributed and who hasn't. No hidden information, no confusion.</p>
                </div>
                <div className="value-card">
                  <h3>Fairness</h3>
                  <p>Fixed amounts and clear expectations ensure everyone contributes equally and fairly.</p>
                </div>
                <div className="value-card">
                  <h3>Simplicity</h3>
                  <p>Organizing contributions shouldn't be complicated. We keep it simple and intuitive.</p>
                </div>
                <div className="value-card">
                  <h3>Accessibility</h3>
                  <p>GroupFund is free to start because we believe everyone deserves organized, stress-free contributions.</p>
                </div>
              </div>
            </div>

            <div className="about-section">
              <h2>Our Commitment</h2>
              <p>
                We're committed to continuously improving GroupFund based on user feedback. We listen to our community of families, churches, schools, and friend groups to make the app better every day. Your success in organizing contributions is our success.
              </p>
              <p>
                Whether you're managing a small family group or a large church community, we're here to make group contributions effortless - for birthdays, subscriptions, events, and more. Join us in ending the chaos, one group at a time.
              </p>
            </div>

            <div className="cta-box">
              <h2>Ready to Join Our Mission?</h2>
              <p>Start organizing your group's contributions today - for birthdays, subscriptions, or any purpose. It's free to get started!</p>
              <Link to="/waitlist" className="btn btn-primary btn-large">Start Your Free Group</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

