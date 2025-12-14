import React from 'react'
import SEO from '../components/SEO'
import '../App.css'

export default function PressPage() {
  return (
    <>
      <SEO
        title="Press & Media Kit - GroupFund"
        description="Media resources, press releases, and brand assets for journalists and content creators covering GroupFund."
        keywords="press, media kit, press release, brand assets, journalists, groupfund press"
        canonical="https://groupfund.app/press"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Press & Media Kit</h1>
          <p className="page-subtitle">
            Resources for journalists and content creators
          </p>
        </div>
      </section>

      <section className="legal-page">
        <div className="container">
          <div className="legal-content">
            <div className="legal-section">
              <h2>About GroupFund</h2>
              <p>
                GroupFund is a mobile application that helps families, churches, schools, and friend groups organize and track birthday contributions. We eliminate the chaos of managing group payments through WhatsApp groups and spreadsheets by providing a simple, transparent platform for tracking who has paid and who hasn't.
              </p>
              <p>
                <strong>Key Facts:</strong>
              </p>
              <ul>
                <li>Founded: 2025</li>
                <li>Headquarters: Global</li>
                <li>Platform: iOS and Android mobile app</li>
                <li>Mission: Bring order, transparency, and fairness to group birthday contributions</li>
                <li>Unique Value: We don't process payments - we're a tracking tool only</li>
              </ul>
            </div>

            <div className="legal-section">
              <h2>Press Inquiries</h2>
              <p>
                For press inquiries, interview requests, or media partnerships, please contact our press team:
              </p>
              <p>
                <strong>Email:</strong> press@groupfund.app<br />
                <strong>Response Time:</strong> We aim to respond within 24-48 hours
              </p>
            </div>

            <div className="legal-section">
              <h2>Brand Assets</h2>
              <p>
                Download our brand assets for use in articles, reviews, and other media coverage:
              </p>
              
              <h3>Logo</h3>
              <p>
                Our logo is available in multiple formats. Please use the appropriate version for your needs:
              </p>
              <ul>
                <li>High-resolution PNG (transparent background)</li>
                <li>SVG format for web use</li>
                <li>Color and monochrome versions</li>
              </ul>
              <p>
                <strong>Brand Guidelines:</strong> When using our logo, please maintain proper spacing and do not alter colors or proportions. For detailed brand guidelines, please contact press@groupfund.app
              </p>

              <h3>Screenshots</h3>
              <p>
                High-resolution app screenshots are available for use in articles and reviews. Contact us for access to the latest screenshots.
              </p>

              <h3>Product Images</h3>
              <p>
                Product images and promotional materials are available upon request.
              </p>
            </div>

            <div className="legal-section">
              <h2>Key Messages</h2>
              
              <h3>Problem We Solve</h3>
              <p>
                Organizing birthday contributions in group chats and spreadsheets is chaotic, time-consuming, and often unfair. Traditional methods fail because they lack transparency, make it easy to forget payments, and don't support multiple currencies.
              </p>

              <h3>Our Solution</h3>
              <p>
                GroupFund is a simple, intuitive app that automatically handles the organization of group birthday contributions. We provide transparency, automatic reminders, multi-currency support, and fair contribution tracking - all for free.
              </p>

              <h3>Key Differentiators</h3>
              <ul>
                <li>We don't process payments - we're a tracking tool only, which means we never see or store payment information</li>
                <li>Multi-currency support for international groups</li>
                <li>Automatic reminders 7 days before birthdays and on deadline day</li>
                <li>Transparent tracking so everyone knows who has paid</li>
                <li>Free to start - accessible to everyone</li>
              </ul>
            </div>

            <div className="legal-section">
              <h2>Press Releases</h2>
              <p>
                For the latest press releases and company announcements, please contact press@groupfund.app to be added to our media distribution list.
              </p>
            </div>

            <div className="legal-section">
              <h2>Founder/Team Availability</h2>
              <p>
                Our founders and team members are available for interviews, podcasts, and speaking engagements. Topics we can discuss include:
              </p>
              <ul>
                <li>The problem of organizing group contributions</li>
                <li>Building fintech solutions in Africa</li>
                <li>Product design and user experience</li>
                <li>Startup journey and lessons learned</li>
                <li>Future of group financial management</li>
              </ul>
              <p>
                To schedule an interview, please contact press@groupfund.app with your request, preferred format, and timeline.
              </p>
            </div>

            <div className="legal-section">
              <h2>Media Coverage</h2>
              <p>
                We're grateful for media coverage and would love to hear from you if you're writing about GroupFund. Please share your articles with us, and we'll be happy to promote them on our channels (with your permission).
              </p>
            </div>

            <div className="legal-section">
              <h2>Social Media</h2>
              <p>
                Follow us for the latest updates:
              </p>
              <ul>
                <li>Twitter/X: @GroupFundApp</li>
                <li>LinkedIn: GroupFund</li>
                <li>Website: <a href="https://groupfund.app">groupfund.app</a></li>
              </ul>
            </div>

            <div className="legal-section">
              <h2>Quick Facts</h2>
              <p>
                <strong>What is GroupFund?</strong><br />
                A mobile app that helps groups organize and track birthday contributions.
              </p>
              <p>
                <strong>How does it work?</strong><br />
                Create a group, invite members who add their birthdays, set contribution amounts, and track who has paid. The app sends automatic reminders and provides full transparency.
              </p>
              <p>
                <strong>Does GroupFund process payments?</strong><br />
                No. GroupFund is a tracking and organization tool only. All payments are made directly between group members using their preferred payment methods.
              </p>
              <p>
                <strong>Is it free?</strong><br />
                Yes, GroupFund is free to start. You can create your first group and start organizing at no cost.
              </p>
              <p>
                <strong>What currencies are supported?</strong><br />
                Multiple currencies including NGN (Nigerian Naira), USD (US Dollar), GBP (British Pound), EUR (Euro), and more.
              </p>
            </div>

            <div className="legal-section">
              <h2>Contact Information</h2>
              <p>
                <strong>Press Inquiries:</strong> press@groupfund.app<br />
                <strong>General Support:</strong> support@groupfund.app<br />
                <strong>Website:</strong> <a href="/contact">Contact Page</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

