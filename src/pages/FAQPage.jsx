import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "Is my money safe with GroupFund?",
      answer: "GroupFund doesn't hold or process payments directly. We're a tracking and organization tool. All payments are made directly between group members using their preferred payment methods (bank transfers, mobile money, etc.). We simply help you track who has paid and who hasn't, ensuring transparency and organization."
    },
    {
      question: "Can I use any currency?",
      answer: "Yes! GroupFund supports multiple currencies including NGN (Nigerian Naira), USD (US Dollar), GBP (British Pound), EUR (Euro), and more. Each group can choose its preferred currency, and the app will display local bank details accordingly. This makes it perfect for international groups with members in different countries."
    },
    {
      question: "How do I confirm payments?",
      answer: "When a member makes a payment, they can mark it as 'Paid' in the app. The celebrant can then verify and mark it as 'Confirmed' if they received the payment, or 'Not Received' if they didn't. This two-step process ensures accuracy. Everyone can also see payment details and timestamps for full transparency."
    },
    {
      question: "What is a member reliability score?",
      answer: "Member reliability scores (0-100) help you make informed decisions about joining groups. The score is based on a member's total contributions, on-time payment rate, total groups joined, and overdue contributions. Members are rated as Excellent, Good, Moderate, Poor, or New. You can view these scores before joining a group to ensure you're joining reliable members."
    },
    {
      question: "What is group health scoring?",
      answer: "Group health scoring tracks compliance metrics and overall group performance. It shows how well a group maintains contribution standards, member participation rates, and overall reliability. Groups with higher health scores are more likely to have consistent contributions and active members. You can preview a group's health score before joining."
    },
    {
      question: "Can I preview a group before joining?",
      answer: "Yes! When you receive an invite code, you can preview the group details including member reliability scores, group health metrics, contribution amounts, currency, and maximum group size. This helps you make an informed decision before requesting to join. ⚠️ Important: Please verify the identity of the group admin before joining. GroupFund is not liable for any fraudulent activities or financial losses. Only join groups with people you trust."
    },
    {
      question: "How do I pause accepting new members to my group?",
      answer: "Group administrators can pause accepting new member requests at any time. This is useful when you want to temporarily stop new members from joining. You can resume accepting requests whenever you're ready. This doesn't affect existing members or their contributions."
    },
    {
      question: "Can I close a group?",
      answer: "Yes, group administrators can close a group, which freezes all activity including new member requests and contributions. This is useful when a group has reached its goal or is no longer active. You can reopen closed groups at any time if needed."
    },
    {
      question: "What notification types does GroupFund send?",
      answer: "GroupFund sends various notifications including birthday wishes (for birthday groups), reminders (7 days before, 1 day before, and on the same day for birthdays; before subscription deadlines; before event deadlines), overdue contribution reminders, member join requests, contribution confirmations/rejections, contribution amount updates (when group admins change contribution amounts - includes email with old/new amounts, push, and in-app notifications), and group updates. You can customize your notification preferences in settings."
    },
    {
      question: "How does OTP verification work?",
      answer: "When you sign up, you'll receive a One-Time Password (OTP) via email to verify your account. Enter the OTP code to complete verification. If you don't receive it, you can request a resend. OTP verification ensures account security and helps prevent unauthorized access."
    },
    {
      question: "Can I see past birthdays and contribution history?",
      answer: "Yes! For Birthday Groups, the calendar shows both upcoming and past birthdays. For all group types, you can view complete contribution history for each member, including received contributions, payment confirmations, and overdue contributions. This helps maintain transparency and track long-term participation."
    },
    {
      question: "What happens if a celebrant rejects a contribution?",
      answer: "If a celebrant marks a contribution as 'Not Received', the status changes to 'Not Received' and the member will be notified. The member can then follow up to resolve the issue. This two-step confirmation system (Paid → Confirmed/Not Received) ensures accuracy and helps resolve payment disputes."
    },
    {
      question: "What happens if someone doesn't pay?",
      answer: "GroupFund sends automatic reminders 7 days before each birthday, 1 day before, and on the deadline day. If someone still doesn't pay, the system tracks it as an overdue contribution and sends additional reminders. The group administrator can see their status clearly marked as 'Not Paid' or 'Overdue'. The app provides helpful recaps showing payment progress (e.g., '8 out of 10 members have paid'). This transparency helps people follow up appropriately while maintaining fairness. Overdue contributions also affect member reliability scores."
    },
    {
      question: "Is there a limit to group size?",
      answer: "Each group has a maximum size that's set when you create the group. This helps you calculate your total yearly contribution amount upfront. The maximum size is displayed clearly, so you know exactly how many members can join and what your total contribution commitment will be."
    },
    {
      question: "How much does GroupFund cost?",
      answer: "GroupFund is free to start! You can create your first group and start organizing group contributions at no cost. We believe in making group organization accessible to everyone."
    },
    {
      question: "What types of groups can I create?",
      answer: "GroupFund supports three types of groups: 1) Birthday Groups - for organizing birthday contributions with wishlists and birthday reminders (requires birthday to be set in profile); 2) Subscription Groups - for managing shared subscriptions like Netflix, Spotify (monthly or annual frequency, no birthday required); 3) General Groups - for any purpose like weddings, baby showers, events (optional deadline, no birthday required)."
    },
    {
      question: "Do I need to set my birthday to use GroupFund?",
      answer: "You only need to set your birthday if you want to create or join Birthday Groups. For Subscription Groups and General Groups, no birthday is required. You can set your birthday in your profile settings at any time."
    },
    {
      question: "How do Subscription Groups work?",
      answer: "Subscription Groups are for managing shared subscriptions like Netflix, Spotify, etc. You set the subscription platform name, choose monthly or annual frequency, set a deadline day (and month for annual subscriptions), and set the contribution amount. Members contribute to the admin (group creator) who pays for the subscription. You'll get reminders before subscription deadlines."
    },
    {
      question: "How do I share subscription login credentials with group members?",
      answer: "You can share subscription login credentials (email, password, etc.) with group members using the group notes or description field. For example, you can add instructions like 'Email me at abc@example.com for login details' or 'Contact me via WhatsApp for credentials' in the group description. This way, members can see how to get access to the subscription after they've contributed. The group description is visible to all members after they've joined the group, making it easy to share contact information or instructions for accessing the shared subscription."
    },
    {
      question: "How do General Groups work?",
      answer: "General Groups are for any purpose - weddings, baby showers, events, or anything else. You set a contribution amount, optional deadline date, and maximum members. Members contribute to the admin (group creator) who manages the funds. You'll get reminders before deadlines (if set) and overdue reminders if deadlines pass."
    },
    {
      question: "Who receives contributions in different group types?",
      answer: "For Birthday Groups, contributions go to the birthday celebrant (their account details are shown). For Subscription Groups and General Groups, contributions go to the admin (group creator) - their account details are displayed to members. The admin is responsible for paying the subscription or managing the funds."
    },
    {
      question: "Do I need to download an app?",
      answer: "Yes, GroupFund will be available as a mobile app for iOS and Android devices. You can download it from the App Store or Google Play Store soon. The mobile app provides the best experience with push notifications for reminders."
    },
    {
      question: "Can I export payment history?",
      answer: "Not at the moment. We're working on it. Once available, you'll be able to export your contribution history for record-keeping and transparency purposes."
    },
    {
      question: "Can I change contribution amounts after creating a group?",
      answer: "Yes! Group administrators can update contribution amounts at any time. When you change the contribution amount, all active group members (except you, the admin) will be automatically notified via email, push notification, and in-app notification. The email notification includes the old and new contribution amounts, clearly indicates whether it increased or decreased, and gives members the option to review and leave the group if they're not comfortable with the change. Changes apply to future contributions only, ensuring transparency and giving members the opportunity to adjust their participation if needed."
    },
    {
      question: "How does the birthday wishlist claiming feature work?",
      answer: "For Birthday Groups, celebrants can create and share a birthday wishlist with items they'd like to receive. Group members can view the wishlist and claim items they want to gift. When a member claims an item, it shows as 'claimed' so others know it's taken. The celebrant can see which items have been claimed and by whom, and can mark items as 'done' when received. This helps avoid duplicate gifts and ensures the celebrant gets items they actually want."
    },
    {
      question: "How do I customize notification preferences?",
      answer: "You can customize notification preferences in your account settings. For Birthday Groups, you can choose to receive reminders 7 days before, 1 day before, and/or on the same day. For Subscription and General Groups, you can customize reminders before deadlines. You can also choose which notification channels to use (in-app, push, email) and which notification types you want to receive (birthday wishes, overdue reminders, member requests, confirmations, group updates). You can enable or disable specific notification types based on your preferences."
    },
    {
      question: "What if I need help or have questions?",
      answer: "We're here to help! You can reach out to our support team through the Contact page. We typically respond within 24 hours and are happy to assist with any questions or issues you might have."
    },
    {
      question: "How do I delete my account?",
      answer: (
        <>
          You can delete your account at any time by logging into the app and accessing the account deletion option in your settings. This will permanently delete your account and all associated data. For detailed instructions, visit our <Link to="/delete-account">Delete Account page</Link>.
        </>
      )
    },
    {
      question: "How do I report a group or member?",
      answer: "You can report groups or members for spam, fraud, harassment, inappropriate content, or other violations. Visit our Report page to submit a report. Reports affect group health scores (pending reports reduce health by 5 points) and member status (users with 3+ pending or 5+ total reports are marked inactive). Groups with 3+ pending reports are automatically closed. All reports are reviewed by our team."
    },
    {
      question: "What happens when I report a group or member?",
      answer: "When you report a group or member: (1) Pending reports immediately reduce group health scores by 5 points, (2) Groups with 3+ pending reports are automatically closed, (3) Members with 3+ pending reports or 5+ total reports are marked as inactive, (4) Our team reviews all reports, and reviewed reports reduce health by 2 points (less impact). Reports help maintain platform safety and affect group health metrics."
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  // Add FAQPage structured data
  useEffect(() => {
    // Helper function to extract text from React elements
    const extractText = (answer) => {
      if (typeof answer === 'string') {
        return answer
      }
      if (answer && answer.props && answer.props.children) {
        if (typeof answer.props.children === 'string') {
          return answer.props.children
        }
        // For nested elements, try to get text content
        return answer.props.children.toString()
      }
      return String(answer)
    }

    const faqStructuredData = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": extractText(faq.answer)
        }
      }))
    }

    // Remove existing FAQ structured data if any
    const existingScript = document.querySelector('script[data-faq-schema]')
    if (existingScript) {
      existingScript.remove()
    }

    // Add new structured data
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.setAttribute('data-faq-schema', 'true')
    script.textContent = JSON.stringify(faqStructuredData)
    document.head.appendChild(script)

    return () => {
      const scriptToRemove = document.querySelector('script[data-faq-schema]')
      if (scriptToRemove) {
        scriptToRemove.remove()
      }
    }
  }, [])

  return (
    <>
      <SEO
        title="GroupFund FAQ - Frequently Asked Questions About Group Contributions"
        description="Get answers to common questions about GroupFund: group types (birthday, subscription, general), member reliability scores, group health metrics, payment confirmation, OTP verification, group management, notifications, and more."
        keywords="groupfund FAQ, group contribution app questions, birthday groups, subscription groups, general groups, member reliability scores, group health metrics, group payment FAQ, is groupfund safe, currency support, payment confirmation, OTP verification"
        canonical="https://groupfund.app/faq"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Frequently Asked Questions</h1>
          <p className="page-subtitle">
            Everything you need to know about GroupFund and organizing group contributions for birthdays, subscriptions, and events.
          </p>
        </div>
      </section>

      <section className="faq-page">
        <div className="container">
          <div className="faq-container">
            {faqs.map((faq, index) => (
              <div key={index} className={`faq-item ${openIndex === index ? 'open' : ''}`}>
                <button
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openIndex === index}
                >
                  <span>{faq.question}</span>
                  <span className="faq-icon">{openIndex === index ? '−' : '+'}</span>
                </button>
                {openIndex === index && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="cta-box">
            <h2>Still Have Questions?</h2>
            <p>Can't find what you're looking for? Our support team is here to help.</p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <a href="/contact" className="btn btn-primary btn-large">Contact Support</a>
              <Link to="/app-rules" className="btn btn-secondary btn-large">View App Rules</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

