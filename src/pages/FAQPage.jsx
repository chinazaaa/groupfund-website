import React, { useState } from 'react'
import SEO from '../components/SEO'
import '../App.css'

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "Is my money safe with GroupWallet?",
      answer: "GroupWallet doesn't hold or process payments directly. We're a tracking and organization tool. All payments are made directly between group members using their preferred payment methods (bank transfers, mobile money, etc.). We simply help you track who has paid and who hasn't, ensuring transparency and organization."
    },
    {
      question: "Can I use any currency?",
      answer: "Yes! GroupWallet supports multiple currencies including NGN (Nigerian Naira), USD (US Dollar), GBP (British Pound), EUR (Euro), and more. Each group can choose its preferred currency, and the app will display local bank details accordingly. This makes it perfect for international groups with members in different countries."
    },
    {
      question: "How do I confirm payments?",
      answer: "When a member makes a payment, they can mark it as 'Paid' in the app. The group administrator can then verify and mark it as 'Confirmed'. This two-step process ensures accuracy. Administrators can also see payment details and timestamps for full transparency."
    },
    {
      question: "What happens if someone doesn't pay?",
      answer: "GroupWallet sends automatic reminders 7 days before each birthday and on the deadline day. If someone still doesn't pay, the group administrator can see their status clearly marked as 'Not Paid'. The app provides helpful recaps showing payment progress (e.g., '8 out of 10 members have paid'). This transparency helps group administrators follow up appropriately while maintaining fairness."
    },
    {
      question: "Is there a limit to group size?",
      answer: "Each group has a maximum size that's set when you create the group. This helps you calculate your total yearly contribution amount upfront. The maximum size is displayed clearly, so you know exactly how many members can join and what your total contribution commitment will be."
    },
    {
      question: "How much does GroupWallet cost?",
      answer: "GroupWallet is free to start! You can create your first group and start organizing birthday contributions at no cost. We believe in making group organization accessible to everyone."
    },
    {
      question: "Can I use GroupWallet for events other than birthdays?",
      answer: "Currently, GroupWallet is optimized for birthday contributions. However, many groups use it creatively for other recurring group events. We're always working on new features based on user feedback."
    },
    {
      question: "Do I need to download an app?",
      answer: "Yes, GroupWallet is available as a mobile app for iOS and Android devices. You can download it from the App Store or Google Play Store. The mobile app provides the best experience with push notifications for reminders."
    },
    {
      question: "Can I export payment history?",
      answer: "Yes, group administrators can view and export contribution history. This helps with record-keeping and provides transparency for all group members."
    },
    {
      question: "What if I need help or have questions?",
      answer: "We're here to help! You can reach out to our support team through the Contact page. We typically respond within 24 hours and are happy to assist with any questions or issues you might have."
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <>
      <SEO
        title="GroupWallet FAQ - Frequently Asked Questions About Birthday Contributions"
        description="Get answers to common questions about GroupWallet: Is my money safe? Can I use any currency? How do I confirm payments? What happens if someone doesn't pay? Learn more about our birthday contribution app."
        keywords="groupfund FAQ, birthday app questions, group payment FAQ, is groupfund safe, currency support, payment confirmation, Nigeria"
        canonical="https://groupfund.app/faq"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Frequently Asked Questions</h1>
          <p className="page-subtitle">
            Everything you need to know about GroupWallet and organizing group birthday contributions.
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

