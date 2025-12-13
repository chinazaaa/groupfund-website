import React from 'react'
import SEO from '../components/SEO'
import '../App.css'

export default function AboutPage() {
  return (
    <>
      <SEO
        title="About GroupWallet - Our Mission to End Birthday Contribution Chaos"
        description="Learn about GroupWallet's mission to help families, churches, and groups organize birthday contributions effortlessly. Discover why we built this app and our commitment to transparency."
        keywords="about groupfund, groupfund mission, birthday app Nigeria, group contribution mission, our story"
        canonical="https://groupfund.app/about"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">About GroupWallet</h1>
          <p className="page-subtitle">
            We're on a mission to end birthday contribution chaos for groups everywhere.
          </p>
        </div>
      </section>

      <section className="about-page">
        <div className="container">
          <div className="about-content">
            <div className="about-section">
              <h2>Our Mission</h2>
              <p>
                GroupWallet was born from a simple frustration: organizing birthday contributions in group chats and spreadsheets is chaotic, time-consuming, and often unfair. We saw families, churches, schools, and friend groups struggling with the same problems—forgotten payments, unclear amounts, and endless WhatsApp messages.
              </p>
              <p>
                Our mission is to bring order, transparency, and fairness to group birthday contributions. We believe that celebrating birthdays should be joyful, not stressful. That's why we built GroupWallet—to make organizing contributions effortless so groups can focus on what matters: celebrating together.
              </p>
            </div>

            <div className="about-section">
              <h2>Why We Built GroupWallet</h2>
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
                GroupWallet solves all these problems with a simple, intuitive app that handles the organization automatically. We built it to be free, accessible, and powerful enough for any group size.
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
                  <p>GroupWallet is free to start because we believe everyone deserves organized, stress-free contributions.</p>
                </div>
              </div>
            </div>

            <div className="about-section">
              <h2>Our Commitment</h2>
              <p>
                We're committed to continuously improving GroupWallet based on user feedback. We listen to our community of families, churches, schools, and friend groups to make the app better every day. Your success in organizing contributions is our success.
              </p>
              <p>
                Whether you're managing a small family group or a large church community, we're here to make birthday contributions effortless. Join us in ending the chaos, one group at a time.
              </p>
            </div>

            <div className="cta-box">
              <h2>Ready to Join Our Mission?</h2>
              <p>Start organizing your group's birthday contributions today. It's free to get started!</p>
              <a href="#download" className="btn btn-primary btn-large">Start Your Free Group</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

