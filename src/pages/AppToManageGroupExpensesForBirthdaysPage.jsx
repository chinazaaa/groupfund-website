import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function AppToManageGroupExpensesForBirthdaysPage() {
  useEffect(() => {
    // Add FAQPage structured data
    const faqStructuredData = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the best app to manage group expenses for birthdays?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "GroupFund is the best app to manage group expenses for birthdays. It offers dedicated Birthday Groups with features like birthday calendars, wishlists, automatic reminders, contribution tracking, member reliability scores, multi-currency support, and in-app wallet system. It's specifically designed to handle birthday contributions without the hassle of spreadsheets or group chats."
          }
        },
        {
          "@type": "Question",
          "name": "How does an app to manage group expenses for birthdays work?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "An app to manage group expenses for birthdays works by creating Birthday Groups where members can track contributions for each person's birthday. GroupFund allows you to set fixed contribution amounts, track who has paid in real-time, send automatic reminders before birthdays, create birthday wishlists, and manage all birthday expenses in one centralized platform. Members can use auto-pay for automatic payments or make manual payments, and the app tracks everything automatically."
          }
        },
        {
          "@type": "Question",
          "name": "Is there a free app to manage group expenses for birthdays?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, GroupFund is free to start. You can create your first Birthday Group and start managing group expenses for birthdays at no cost. There are no subscription fees or hidden charges. The app is designed to make birthday expense management accessible to everyone."
          }
        },
        {
          "@type": "Question",
          "name": "What features should an app to manage group expenses for birthdays have?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A good app to manage group expenses for birthdays should have: birthday calendar to track all birthdays, wishlist feature for gift coordination, automatic reminders before birthdays, real-time contribution tracking, fixed contribution amounts, member reliability scores, multi-currency support, in-app wallet for receiving funds, contribution confirmation system, and group chat for communication. GroupFund includes all these features and more."
          }
        },
        {
          "@type": "Question",
          "name": "Can I use an app to manage group expenses for birthdays with international groups?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, GroupFund supports multi-currency groups, making it perfect for international birthday groups. You can create Birthday Groups in NGN, USD, GBP, EUR, CAD, AUD, and more. Members from different countries can contribute in the group's currency, and the app handles all the tracking and organization automatically."
          }
        }
      ]
    }

    const existingScript = document.querySelector('script[data-birthday-expenses-faq-schema]')
    if (existingScript) existingScript.remove()
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.setAttribute('data-birthday-expenses-faq-schema', 'true')
    script.textContent = JSON.stringify(faqStructuredData)
    document.head.appendChild(script)

    // Add SoftwareApplication structured data
    const softwareAppStructuredData = {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "GroupFund - App to Manage Group Expenses for Birthdays",
      "applicationCategory": "FinanceApplication",
      "operatingSystem": "iOS, Android",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "ratingCount": "100"
      },
      "description": "The best app to manage group expenses for birthdays. Create Birthday Groups, track contributions, manage wishlists, send automatic reminders, and organize birthday expenses effortlessly."
    }

    const existingAppScript = document.querySelector('script[data-birthday-expenses-app-schema]')
    if (existingAppScript) existingAppScript.remove()
    const appScript = document.createElement('script')
    appScript.type = 'application/ld+json'
    appScript.setAttribute('data-birthday-expenses-app-schema', 'true')
    appScript.textContent = JSON.stringify(softwareAppStructuredData)
    document.head.appendChild(appScript)

    return () => {
      const scriptToRemove = document.querySelector('script[data-birthday-expenses-faq-schema]')
      if (scriptToRemove) scriptToRemove.remove()
      const appScriptToRemove = document.querySelector('script[data-birthday-expenses-app-schema]')
      if (appScriptToRemove) appScriptToRemove.remove()
    }
  }, [])

  return (
    <>
      <SEO
        title="App to Manage Group Expenses for Birthdays - GroupFund | Best Birthday Expense Tracker"
        description="GroupFund is the best app to manage group expenses for birthdays. Create Birthday Groups, track contributions, manage wishlists, send automatic reminders, and organize all birthday expenses in one place. Free to start."
        keywords="app to manage group expenses for birthdays, best app for birthday expenses, birthday expense tracker app, manage birthday group expenses, birthday contribution app, group birthday expense management, birthday expense organizer app, app for birthday group expenses, birthday expense tracking app, manage group birthday expenses"
        canonical="https://www.groupfund.app/app-to-manage-group-expenses-for-birthdays"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">App to Manage Group Expenses for Birthdays</h1>
          <p className="page-subtitle">
            GroupFund is the best app to manage group expenses for birthdays. Organize birthday contributions, track payments, manage wishlists, and never miss a birthday celebration.
          </p>
        </div>
      </section>

      <section className="industry-page">
        <div className="container">
          <div className="industry-content">
            <div className="industry-section">
              <h2>What is an App to Manage Group Expenses for Birthdays?</h2>
              <p>
                An app to manage group expenses for birthdays is a specialized tool designed to help groups organize, track, and manage all birthday-related contributions and expenses. Instead of juggling WhatsApp messages, Excel spreadsheets, or bank transfer screenshots, these apps provide a centralized platform where everyone can see contribution status, deadlines, and progress in real-time.
              </p>
              <p>
                <strong>GroupFund</strong> is specifically designed as the best app to manage group expenses for birthdays, offering dedicated Birthday Groups with features tailored for birthday expense management.
              </p>
            </div>

            <div className="industry-section">
              <h2>Why You Need an App to Manage Group Expenses for Birthdays</h2>
              <p>
                Managing birthday expenses in groups can be challenging without the right tools. Here's why you need a dedicated app:
              </p>

              <div className="features-list">
                <div className="feature-item">
                  <h3>🎂 Never Miss a Birthday</h3>
                  <p>Birthday calendars keep track of all group members' birthdays, so you never forget to contribute or celebrate.</p>
                </div>
                <div className="feature-item">
                  <h3>📊 Real-Time Tracking</h3>
                  <p>See who has contributed, who hasn't, and how much has been collected in real-time - no manual updates needed.</p>
                </div>
                <div className="feature-item">
                  <h3>⏰ Automatic Reminders</h3>
                  <p>Get automatic reminders 7 days before, 1 day before, and on the birthday - no more manual chasing or forgotten contributions.</p>
                </div>
                <div className="feature-item">
                  <h3>🎁 Birthday Wishlists</h3>
                  <p>Celebrants can create and share wishlists with items, pictures, and prices. Group members can claim items to avoid duplicates.</p>
                </div>
                <div className="feature-item">
                  <h3>✅ Contribution Confirmation</h3>
                  <p>Celebrants can confirm or reject contributions they receive, ensuring accuracy and transparency in birthday expense tracking.</p>
                </div>
                <div className="feature-item">
                  <h3>💰 Fixed Contribution Amounts</h3>
                  <p>Set clear contribution amounts per person so everyone knows exactly what to pay - eliminates confusion and ensures fairness.</p>
                </div>
                <div className="feature-item">
                  <h3>🌍 Multi-Currency Support</h3>
                  <p>Works with NGN, USD, GBP, EUR, CAD, AUD, and more - perfect for international groups or groups with members in different countries.</p>
                </div>
                <div className="feature-item">
                  <h3>💳 Auto-Pay Available</h3>
                  <p>Set up automatic payments so your debit card is charged automatically on birthdays - never miss a contribution deadline.</p>
                </div>
                <div className="feature-item">
                  <h3>💼 In-App Wallet</h3>
                  <p>Receive contributions directly in your in-app wallet when others pay via auto-pay. View balance and transaction history anytime.</p>
                </div>
                <div className="feature-item">
                  <h3>📈 Member Reliability Scores</h3>
                  <p>See member payment history, on-time payment rates, and reliability scores before joining groups - make informed decisions.</p>
                </div>
                <div className="feature-item">
                  <h3>💬 Group Chat</h3>
                  <p>Communicate with group members directly within the app - coordinate birthday celebrations and stay connected.</p>
                </div>
                <div className="feature-item">
                  <h3>📱 Mobile & Web Access</h3>
                  <p>Access your birthday expense management from your phone, tablet, or computer - all synced in real-time.</p>
                </div>
              </div>
            </div>

            <div className="industry-section">
              <h2>How GroupFund Works as an App to Manage Group Expenses for Birthdays</h2>
              <p>
                GroupFund makes managing group expenses for birthdays simple and stress-free:
              </p>

              <div className="scaling-card">
                <h3>Step 1: Create a Birthday Group</h3>
                <p>
                  Set up your Birthday Group in seconds. Choose your currency, set contribution amounts, and add group members. 
                  Each member adds their birthday date, and the app automatically tracks all birthdays in your group.
                </p>
                <p><strong>Best for:</strong> Families, friend groups, workplaces, churches, schools, and any group that wants to organize birthday contributions.</p>
              </div>

              <div className="scaling-card">
                <h3>Step 2: Set Contribution Amounts</h3>
                <p>
                  Set a fixed contribution amount per person (e.g., $20, £15, or 5,000 NGN). Everyone knows exactly what to pay, 
                  eliminating confusion and ensuring fairness. The app calculates your yearly total upfront.
                </p>
                <p><strong>Best for:</strong> Ensuring everyone contributes fairly and you can budget for the year.</p>
              </div>

              <div className="scaling-card">
                <h3>Step 3: Create Birthday Wishlists (Optional)</h3>
                <p>
                  Celebrants can create birthday wishlists with items, pictures, and prices. Group members can view wishlists 
                  and claim items they want to gift, preventing duplicate purchases and ensuring people get gifts they actually want.
                </p>
                <p><strong>Best for:</strong> Coordinating group gifts and ensuring celebrants receive items they'll love.</p>
              </div>

              <div className="scaling-card">
                <h3>Step 4: Automatic Reminders</h3>
                <p>
                  GroupFund automatically sends reminders 7 days before each birthday, 1 day before, and on the birthday day. 
                  No more manual chasing or forgotten contributions. Everyone stays informed automatically.
                </p>
                <p><strong>Best for:</strong> Ensuring timely contributions without awkward individual reminders.</p>
              </div>

              <div className="scaling-card">
                <h3>Step 5: Track Contributions in Real-Time</h3>
                <p>
                  See who has contributed, who hasn't, and payment statuses (Not Paid, Paid, Confirmed, Not Received) in real-time. 
                  Get automatic progress updates like "8 out of 10 members have paid" without manual tracking.
                </p>
                <p><strong>Best for:</strong> Maintaining transparency and knowing exactly where you stand with birthday contributions.</p>
              </div>

              <div className="scaling-card">
                <h3>Step 6: Confirm Payments</h3>
                <p>
                  Celebrants can confirm or reject contributions they receive. Auto-pay payments are automatically confirmed. 
                  This two-step process ensures accuracy and transparency in birthday expense tracking.
                </p>
                <p><strong>Best for:</strong> Ensuring all contributions are accurately recorded and verified.</p>
              </div>
            </div>

            <div className="industry-section">
              <h2>Key Features of GroupFund as an App to Manage Group Expenses for Birthdays</h2>
              
              <h3>Birthday Calendar</h3>
              <p>
                Never miss a birthday with GroupFund's integrated birthday calendar. View all upcoming birthdays in your group, 
                see past birthdays, and plan contributions in advance. The calendar view makes it easy to see the full year at a glance.
              </p>

              <h3>Birthday Wishlists</h3>
              <p>
                Celebrants can create and share birthday wishlists with items, pictures, prices, and purchase links. Group members 
                can view wishlists, claim items they want to gift, and see what's been claimed to avoid duplicates. This makes gift 
                coordination effortless and ensures people receive gifts they actually want.
              </p>

              <h3>Automatic Payment Reminders</h3>
              <p>
                GroupFund automatically sends reminders 7 days before each birthday, 1 day before, and on the birthday day. These 
                reminders go to the whole group, keeping things neutral and professional. No more awkward individual messages or 
                forgotten contributions.
              </p>

              <h3>Real-Time Contribution Tracking</h3>
              <p>
                Track all birthday contributions in real-time. See who has paid, who hasn't, payment statuses, and progress updates 
                automatically. All group members can view the tracking dashboard, ensuring transparency and reducing questions.
              </p>

              <h3>Auto-Pay for Automatic Payments</h3>
              <p>
                Set up auto-pay so your debit card is automatically charged on birthdays. Choose "1 day before" or "same day" timing. 
                Auto-pay is available for groups using USD, EUR, GBP, CAD, or AUD. Never miss a contribution deadline again.
              </p>

              <h3>In-App Wallet System</h3>
              <p>
                Receive contributions directly in your in-app wallet when others pay via auto-pay. Multi-currency wallet balances for 
                USD, EUR, GBP, CAD, and AUD. View your balance and transaction history anytime. Withdraw funds to your bank account when ready.
              </p>

              <h3>Member Reliability Scores</h3>
              <p>
                See member payment history, on-time payment rates, and reliability scores (0-100) before joining groups. This helps 
                you make informed decisions about group participation and ensures you're joining groups with reliable members.
              </p>

              <h3>Group Health Metrics</h3>
              <p>
                Track group compliance metrics and health ratings. Preview groups before joining to see how well they maintain 
                contribution standards and member participation. This helps you choose the right groups for your needs.
              </p>

              <h3>Multi-Currency Support</h3>
              <p>
                Create Birthday Groups in NGN, USD, GBP, EUR, CAD, AUD, and more. Perfect for international groups or groups with 
                members in different countries. The app handles all currency tracking automatically.
              </p>

              <h3>Group Chat</h3>
              <p>
                Communicate with group members directly within the app. Real-time messaging helps coordinate birthday celebrations, 
                share updates, and stay connected. All group communication in one place.
              </p>
            </div>

            <div className="industry-section">
              <h2>Who Should Use an App to Manage Group Expenses for Birthdays?</h2>
              
              <div className="features-grid">
                <div className="feature-card">
                  <div className="feature-icon">👨‍👩‍👧‍👦</div>
                  <h3>Families</h3>
                  <p>Organize family birthday contributions without the chaos of WhatsApp groups or spreadsheets. Keep everything fair, transparent, and stress-free.</p>
                </div>

                <div className="feature-card">
                  <div className="feature-icon">👥</div>
                  <h3>Friend Groups</h3>
                  <p>Keep friend group birthday contributions organized. No more awkward reminders or forgotten payments. Everyone knows exactly what to contribute.</p>
                </div>

                <div className="feature-card">
                  <div className="feature-icon">💼</div>
                  <h3>Workplaces</h3>
                  <p>Organize office birthday funds professionally. Maintain clear records, track contributions, and ensure everyone contributes fairly for workplace birthdays.</p>
                </div>

                <div className="feature-card">
                  <div className="feature-icon">⛪</div>
                  <h3>Churches</h3>
                  <p>Manage church member birthday contributions without the administrative headache. Track payments, send reminders, and maintain transparency.</p>
                </div>

                <div className="feature-card">
                  <div className="feature-icon">🏫</div>
                  <h3>Schools</h3>
                  <p>Organize class or school group birthday contributions with ease. Set clear expectations, track payments, and ensure everyone contributes fairly.</p>
                </div>

                <div className="feature-card">
                  <div className="feature-icon">🏘️</div>
                  <h3>Community Organizations</h3>
                  <p>Perfect for neighborhood groups, alumni associations, sports clubs, and hobby organizations. Maintain transparency and fairness across diverse groups.</p>
                </div>
              </div>
            </div>

            <div className="industry-section">
              <h2>Benefits of Using GroupFund as an App to Manage Group Expenses for Birthdays</h2>
              
              <ul className="feature-list">
                <li><strong>Eliminates Spreadsheet Management:</strong> No more Excel or Google Sheets. All birthday expense tracking happens automatically in the app.</li>
                <li><strong>Reduces WhatsApp Chaos:</strong> Stop juggling birthday contribution messages in group chats. Everything is organized in one platform.</li>
                <li><strong>Prevents Forgotten Contributions:</strong> Automatic reminders ensure no one forgets to contribute for birthdays.</li>
                <li><strong>Ensures Fairness:</strong> Fixed contribution amounts mean everyone pays the same, eliminating confusion and disputes.</li>
                <li><strong>Maintains Transparency:</strong> All members can see contribution status, progress, and payment history - builds trust.</li>
                <li><strong>Saves Time:</strong> Automatic tracking, reminders, and confirmations save hours of manual work.</li>
                <li><strong>Works Internationally:</strong> Multi-currency support makes it perfect for groups with members in different countries.</li>
                <li><strong>Improves Gift Coordination:</strong> Birthday wishlists help coordinate gifts and prevent duplicates.</li>
                <li><strong>Builds Trust:</strong> Member reliability scores help you make informed decisions about group participation.</li>
                <li><strong>Free to Start:</strong> No subscription fees or hidden charges - accessible to everyone.</li>
              </ul>
            </div>

            <div className="industry-section">
              <h2>Common Challenges Solved by an App to Manage Group Expenses for Birthdays</h2>
              
              <div className="use-case-card">
                <h3>Challenge: Forgotten Birthdays</h3>
                <p><strong>Solution:</strong> Birthday calendars and automatic reminders ensure you never miss a birthday or forget to contribute.</p>
              </div>

              <div className="use-case-card">
                <h3>Challenge: Unclear Contribution Amounts</h3>
                <p><strong>Solution:</strong> Fixed contribution amounts per person eliminate confusion. Everyone knows exactly what to pay.</p>
              </div>

              <div className="use-case-card">
                <h3>Challenge: Manual Tracking in Spreadsheets</h3>
                <p><strong>Solution:</strong> Real-time automatic tracking eliminates the need for spreadsheets. Everything updates automatically.</p>
              </div>

              <div className="use-case-card">
                <h3>Challenge: Awkward Reminders</h3>
                <p><strong>Solution:</strong> Automatic group-wide reminders keep things neutral and professional. No more awkward individual messages.</p>
              </div>

              <div className="use-case-card">
                <h3>Challenge: Duplicate Gifts</h3>
                <p><strong>Solution:</strong> Birthday wishlists with item claiming prevent duplicate purchases and ensure coordinated gift giving.</p>
              </div>

              <div className="use-case-card">
                <h3>Challenge: International Groups</h3>
                <p><strong>Solution:</strong> Multi-currency support makes it easy to manage birthday expenses for groups with members in different countries.</p>
              </div>
            </div>

            <div className="industry-cta">
              <h2>Ready to Use the Best App to Manage Group Expenses for Birthdays?</h2>
              <p>
                Stop juggling WhatsApp messages, Excel spreadsheets, and forgotten payments. GroupFund makes managing group expenses 
                for birthdays simple, transparent, and stress-free. Free to start, no credit card required.
              </p>
              <div className="cta-buttons">
                <Link to="/get-started" className="btn btn-primary btn-large">
                  Start Your Free Birthday Group
                </Link>
                <Link to="/resources/setting-up-birthday-groups" className="btn btn-secondary btn-large">
                  Learn How to Set Up Birthday Groups
                </Link>
              </div>
            </div>

            <div className="related-resources">
              <h2>Related Resources</h2>
              <div className="resources-grid">
                <Link to="/best-practices/best-way-to-collect-money-from-group" className="resource-card">
                  <span className="resource-icon">💰</span>
                  <h3>Best Way to Collect Money from a Group</h3>
                  <p>Complete guide on collecting money for group gifts and events</p>
                </Link>
                <Link to="/resources/how-to-create-birthday-wishlist" className="resource-card">
                  <span className="resource-icon">🎁</span>
                  <h3>How to Create a Birthday Wishlist</h3>
                  <p>Step-by-step guide to creating effective birthday wishlists</p>
                </Link>
                <Link to="/use-cases/group-birthday-gifts" className="resource-card">
                  <span className="resource-icon">🎂</span>
                  <h3>Group Birthday Gifts Use Case</h3>
                  <p>Learn how to organize group birthday gifts effectively</p>
                </Link>
                <Link to="/resources/setting-up-birthday-groups" className="resource-card">
                  <span className="resource-icon">⚙️</span>
                  <h3>Setting Up Birthday Groups</h3>
                  <p>Complete guide to setting up and managing Birthday Groups</p>
                </Link>
                <Link to="/best-practices/group-birthday-gifts" className="resource-card">
                  <span className="resource-icon">✨</span>
                  <h3>Birthday Gift Collection Best Practices</h3>
                  <p>Best practices for collecting money for group birthday gifts</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .industry-page {
          padding: 3rem 0;
        }

        .industry-content {
          max-width: 900px;
          margin: 0 auto;
        }

        .industry-section {
          margin-bottom: 3rem;
        }

        .industry-section h2 {
          font-size: 1.75rem;
          margin-bottom: 1rem;
          color: #111827;
        }

        .industry-section h3 {
          font-size: 1.25rem;
          margin-bottom: 0.75rem;
          color: #111827;
        }

        .industry-section p {
          color: #4b5563;
          line-height: 1.8;
          margin-bottom: 1rem;
        }

        .feature-list {
          list-style-position: outside;
          padding-left: 1.5rem;
          color: #4b5563;
          line-height: 1.8;
        }

        .feature-list li {
          margin-bottom: 0.75rem;
        }

        .use-case-card {
          background: #f9fafb;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          padding: 1.5rem;
          margin-bottom: 1.5rem;
        }

        .use-case-card h3 {
          font-size: 1.25rem;
          margin-bottom: 0.75rem;
          color: #111827;
        }

        .use-case-card p {
          color: #4b5563;
          line-height: 1.7;
          margin-bottom: 0.75rem;
        }

        .scaling-card {
          background: white;
          border: 2px solid #e5e7eb;
          border-radius: 8px;
          padding: 1.5rem;
          margin-bottom: 1.5rem;
        }

        .scaling-card h3 {
          font-size: 1.25rem;
          margin-bottom: 1rem;
          color: #667eea;
        }

        .scaling-card p {
          color: #4b5563;
          line-height: 1.7;
          margin-bottom: 0.5rem;
        }

        .features-list {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
          margin-top: 1.5rem;
        }

        .feature-item {
          background: white;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          padding: 1.5rem;
        }

        .feature-item h3 {
          font-size: 1.1rem;
          margin-bottom: 0.5rem;
          color: #111827;
        }

        .feature-item p {
          color: #6b7280;
          font-size: 0.9rem;
          line-height: 1.6;
          margin: 0;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
          margin-top: 1.5rem;
        }

        .feature-card {
          background: white;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          padding: 1.5rem;
          text-align: center;
        }

        .feature-icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        .feature-card h3 {
          font-size: 1.1rem;
          margin-bottom: 0.5rem;
          color: #111827;
        }

        .feature-card p {
          color: #6b7280;
          font-size: 0.9rem;
          line-height: 1.6;
          margin-bottom: 1rem;
        }

        .industry-cta {
          text-align: center;
          padding: 2.5rem;
          background: #f9fafb;
          border-radius: 12px;
          margin: 3rem 0;
        }

        .industry-cta h2 {
          font-size: 1.5rem;
          margin-bottom: 0.75rem;
          color: #111827;
        }

        .industry-cta p {
          color: #6b7280;
          margin-bottom: 1.5rem;
        }

        .cta-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .related-resources {
          margin-top: 3rem;
          padding-top: 3rem;
          border-top: 2px solid #e5e7eb;
        }

        .related-resources h2 {
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
          color: #111827;
        }

        .resources-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1.5rem;
        }

        .resource-card {
          display: flex;
          flex-direction: column;
          padding: 1.5rem;
          background: white;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          text-decoration: none;
          color: inherit;
          transition: all 0.3s;
        }

        .resource-card:hover {
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transform: translateY(-2px);
        }

        .resource-icon {
          font-size: 2rem;
          margin-bottom: 0.75rem;
        }

        .resource-card h3 {
          font-size: 1rem;
          margin-bottom: 0.5rem;
          color: #111827;
        }

        .resource-card p {
          font-size: 0.85rem;
          color: #6b7280;
          margin: 0;
        }

        @media (max-width: 768px) {
          .resources-grid,
          .features-grid,
          .features-list {
            grid-template-columns: 1fr;
          }

          .cta-buttons {
            flex-direction: column;
          }

          .cta-buttons .btn {
            width: 100%;
          }
        }
      `}</style>
    </>
  )
}
