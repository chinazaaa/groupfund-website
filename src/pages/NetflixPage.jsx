import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function NetflixSubscriptionPage() {
  useEffect(() => {
    const faqStructuredData = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How do I share Netflix family add-on cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "To share Netflix family add-on cost, create a Subscription Group in GroupFund, select Netflix as the platform, set the monthly contribution amount per person, and invite your family members using the unique invite code. GroupFund tracks who has paid their share of the Netflix family add-on cost, sends automatic reminders before the billing date, and provides real-time payment status updates. This makes it easy to split and manage Netflix family plan costs transparently."
          }
        },
        {
          "@type": "Question",
          "name": "What is the Netflix family add-on cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Netflix family add-on cost refers to the monthly subscription fee for Netflix family plans (like Netflix Premium at $22.99/month). When sharing Netflix with family or friends, you can split this cost among group members. For example, Netflix Premium ($22.99/month) shared among 4 people costs approximately $5.75 per person. GroupFund helps you organize, track, and manage these shared Netflix family add-on costs efficiently."
          }
        }
      ]
    }

    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.setAttribute('data-netflix-faq-schema', 'true')
    script.textContent = JSON.stringify(faqStructuredData)
    document.head.appendChild(script)

    return () => {
      const scriptToRemove = document.querySelector('script[data-netflix-faq-schema]')
      if (scriptToRemove) scriptToRemove.remove()
    }
  }, [])

  return (
    <>
      <SEO
        title="Share Netflix Subscription Costs | Netflix Family Add-On Cost | GroupFund"
        description="Split Netflix subscription costs and manage Netflix family add-on cost with GroupFund. Organize group contributions for Netflix Premium or Standard plans, track payments, manage deadlines, and share Netflix fairly among friends and family."
        keywords="netflix group subscription, share netflix cost, netflix payment splitting, netflix group contributions, split netflix subscription, netflix family plan, share netflix premium, netflix cost sharing, netflix family add on cost, netflix family add-on cost, netflix family addon cost"
        canonical="https://www.groupfund.app/subscription-groups/netflix"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">🎬 Share Netflix Subscription Costs</h1>
          <p className="page-subtitle">
            Split Netflix costs with friends and family. Track payments, manage deadlines, and share your Netflix subscription fairly.
          </p>
        </div>
      </section>

      <section className="group-type-detail-page">
        <div className="container">
          <div className="group-type-content">
            <div className="group-type-intro">
              <p>
                Netflix subscriptions are expensive when you're paying alone. GroupFund's Subscription Groups make it easy to share Netflix costs with friends and family. Set up monthly payment schedules, track who's paid, get automatic reminders, and manage your shared Netflix account efficiently.
              </p>
            </div>

            <div className="group-type-section">
              <h2>Why Share Netflix Costs?</h2>
              <div className="features-grid">
                <div className="feature-item">
                  <h3>💰 Save Money</h3>
                  <p>Split Netflix Premium ($22.99/month) between 4 people = $5.75 per person. Save up to $17/month compared to paying alone.</p>
                </div>
                <div className="feature-item">
                  <h3>📊 Track Payments</h3>
                  <p>See exactly who has paid and who owes for the month. No more chasing people in WhatsApp groups.</p>
                </div>
                <div className="feature-item">
                  <h3>⏰ Automatic Reminders</h3>
                  <p>Set your billing date and GroupFund sends reminders before payments are due. Never miss a payment deadline.</p>
                </div>
                <div className="feature-item">
                  <h3>✅ Admin Confirmation</h3>
                  <p>The account holder confirms payments when received, keeping everyone accountable and transparent.</p>
                </div>
                <div className="feature-item">
                  <h3>🔄 Automatic Recurring Billing</h3>
                  <p>With auto-pay enabled (USD, EUR, GBP, CAD, or AUD), set up true recurring subscriptions with automatic monthly billing. Stripe automatically charges members each month without requiring any action - no manual payment needed each billing cycle. Perfect for matching your Netflix billing cycle.</p>
                </div>
                <div className="feature-item">
                  <h3>📱 Mobile-Friendly</h3>
                  <p>Track payments on the go. Everyone can see payment status in real-time from their phones.</p>
                </div>
              </div>
            </div>

            <div className="group-type-section">
              <h2>Netflix Plans You Can Share</h2>
              <ul className="use-cases-list">
                <li><strong>Netflix Premium ($22.99/month):</strong> 4 screens, Ultra HD quality - perfect for sharing among 4 people at ~$5.75 each</li>
                <li><strong>Netflix Standard ($15.49/month):</strong> 2 screens, Full HD quality - ideal for sharing between 2 people at ~$7.75 each</li>
                <li><strong>Netflix Family Add-On Cost:</strong> Share Netflix family plan costs with friends and family. Split the monthly subscription fee among group members using GroupFund's Subscription Groups. Track who has paid their share of the Netflix family add-on cost, set automatic reminders, and manage payments transparently.</li>
                <li><strong>Any Netflix Subscription:</strong> Works with any Netflix plan type and billing cycle</li>
              </ul>
            </div>

            <div className="group-type-section">
              <h2>How to Share Netflix with GroupFund</h2>
              <ol className="how-it-works-list">
                <li>Create a Subscription Group and select "Netflix" as the platform</li>
                <li>Set your billing date (e.g., 15th of every month) for automatic reminders</li>
                <li>Add your payment account details (bank account, mobile money, etc.) where members send contributions</li>
                <li>Add login credential instructions in the group description (e.g., "Email me at example@email.com after payment for Netflix login")</li>
                <li>Invite friends/family using the unique invite code</li>
                <li>Members receive automatic reminders before the billing date</li>
                <li><strong>For auto-pay (USD, EUR, GBP, CAD, or AUD):</strong> Members enable auto-pay and Stripe automatically charges them each month - no action required. This creates true recurring subscriptions with automatic monthly billing.</li>
                <li><strong>For manual payments:</strong> Members mark their payment as "Paid" after sending money, and you (the admin) confirm when you receive each payment</li>
                <li>Everyone sees payment statuses in real-time</li>
                <li>Repeat every month - GroupFund handles the scheduling automatically, and with auto-pay, members are charged automatically each billing cycle</li>
              </ol>
            </div>

            <div className="group-type-section">
              <h2>Netflix Family Add-On Cost: How to Share It</h2>
              <p>
                The Netflix family add-on cost is the monthly subscription fee for Netflix family plans. When sharing Netflix with family or friends, you can split this cost among group members using GroupFund. Here's how it works:
              </p>
              <ul className="use-cases-list">
                <li><strong>Calculate Per-Person Cost:</strong> Divide the total Netflix subscription cost by the number of people sharing. For example, Netflix Premium ($22.99/month) ÷ 4 people = $5.75 per person</li>
                <li><strong>Set Up Subscription Group:</strong> Create a Subscription Group in GroupFund, select Netflix as the platform, and set the contribution amount per person</li>
                <li><strong>Track Payments:</strong> See who has paid their share of the Netflix family add-on cost and who still owes</li>
                <li><strong>Automatic Reminders:</strong> GroupFund sends reminders before the billing date so everyone pays on time</li>
                <li><strong>Transparent Management:</strong> All members can see payment statuses in real-time, eliminating confusion about who has paid</li>
              </ul>
              <p>
                <strong>Benefits:</strong> No more awkward conversations about money, no spreadsheets to manage, and everyone knows exactly how much they owe for the Netflix family add-on cost.
              </p>
            </div>

            <div className="group-type-section">
              <h2>Common Netflix Sharing Scenarios</h2>
              <div className="features-list">
                <div className="feature-item">
                  <h3>👨‍👩‍👧‍👦 Family Netflix Sharing</h3>
                  <p>Share Netflix Premium among family members. Parents, siblings, or extended family can split the cost while each having their own profile.</p>
                </div>
                <div className="feature-item">
                  <h3>🏠 Roommate Netflix Group</h3>
                  <p>Roommates sharing an apartment can split Netflix costs. Track who's paid and who hasn't without awkward conversations.</p>
                </div>
                <div className="feature-item">
                  <h3>👥 Friends Netflix Subscription</h3>
                  <p>Share Netflix with close friends. Keep track of contributions and ensure everyone pays their fair share each month.</p>
                </div>
                <div className="feature-item">
                  <h3>💼 Couples or Partners</h3>
                  <p>Split Netflix costs 50/50 with your partner. Track payments and maintain transparency in shared expenses.</p>
                </div>
              </div>
            </div>

            <div className="cta-box">
              <h2>Ready to Share Netflix Costs?</h2>
              <p>Start managing your Netflix subscription group today. Set up payment tracking, send reminders, and split costs fairly.</p>
              <div className="cta-buttons">
                <Link to="/get-started" className="btn btn-primary btn-large">Start Your Netflix Group</Link>
                <Link to="/group-types/subscription-groups" className="btn btn-secondary btn-large">Learn About Subscription Groups →</Link>
              </div>
            </div>

            <div className="related-links">
              <h3>Related Subscription Services</h3>
              <div className="related-links-grid">
                <Link to="/subscription-groups/spotify">Share Spotify Costs →</Link>
                <Link to="/subscription-groups/disney-plus">Share Disney+ Costs →</Link>
                <Link to="/subscription-groups/hulu">Share Hulu Costs →</Link>
                <Link to="/subscription-groups">View All Subscriptions →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}