import React, { useState } from 'react'
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
      answer: "Yes! When you receive an invite code, you can preview the group details including member reliability scores, group health metrics, contribution amounts, currency, and maximum group size. This helps you make an informed decision before requesting to join."
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
      answer: "GroupFund sends various notifications including birthday wishes, birthday reminders (7 days before, 1 day before, and on the same day), overdue contribution reminders, member join requests, contribution confirmations/rejections, and group updates. You can customize your notification preferences in settings."
    },
    {
      question: "How does OTP verification work?",
      answer: "When you sign up, you'll receive a One-Time Password (OTP) via email to verify your account. Enter the OTP code to complete verification. If you don't receive it, you can request a resend. OTP verification ensures account security and helps prevent unauthorized access."
    },
    {
      question: "Can I see past birthdays and contribution history?",
      answer: "Yes! The birthday calendar shows both upcoming and past birthdays. You can view complete contribution history for each member, including received contributions, payment confirmations, and overdue contributions. This helps maintain transparency and track long-term participation."
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
      answer: "GroupFund is free to start! You can create your first group and start organizing birthday contributions at no cost. We believe in making group organization accessible to everyone."
    },
    {
      question: "Can I use GroupFund for events other than birthdays?",
      answer: "Currently, GroupFund is optimized for birthday contributions. However, many groups use it creatively for other recurring group events. We're always working on new features based on user feedback."
    },
    {
      question: "Do I need to download an app?",
      answer: "Yes, GroupFund will be available as a mobile app for iOS and Android devices. You can download it from the App Store or Google Play Store soon. The mobile app provides the best experience with push notifications for reminders."
    },
    {
      question: "Can I export payment history?",
      answer: "Not at the moment. We're working on it."
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
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <>
      <SEO
        title="GroupFund FAQ - Frequently Asked Questions About Birthday Contributions"
        description="Get answers to common questions about GroupFund: member reliability scores, group health metrics, payment confirmation, OTP verification, group management, notifications, and more. Learn everything about our birthday contribution app."
        keywords="groupfund FAQ, birthday app questions, member reliability scores, group health metrics, group payment FAQ, is groupfund safe, currency support, payment confirmation, OTP verification, Nigeria"
        canonical="https://groupfund.app/faq"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Frequently Asked Questions</h1>
          <p className="page-subtitle">
            Everything you need to know about GroupFund and organizing group birthday contributions.
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
            <a href="/contact" className="btn btn-primary btn-large">Contact Support</a>
          </div>
        </div>
      </section>
    </>
  )
}

