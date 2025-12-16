import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function HelpPage() {
  const [openSection, setOpenSection] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index)
  }

  const helpSections = [
    {
      title: "Getting Started",
      icon: "🚀",
      topics: [
        {
          question: "How do I create my first group?",
          answer: "Once we launch, creating a group is easy! Click 'Start Your Free Group' on the homepage, sign up with your email or phone number, verify your account with the OTP sent to your email, and follow the simple setup wizard. You'll be organizing contributions in minutes."
        },
        {
          question: "How do I sign up?",
          answer: "You can sign up with either your email address or phone number. After entering your details, you'll receive an OTP (One-Time Password) via email to verify your account. Enter the OTP code to complete verification. If you don't receive it, you can request a resend."
        },
        {
          question: "Do I need to pay to use GroupFund?",
          answer: "No! GroupFund is free to start. You can create your first group and start organizing birthday contributions at no cost. We believe in making group organization accessible to everyone."
        },
        {
          question: "How many groups can I create?",
          answer: "You can create multiple groups for different purposes - family, friends, church, work colleagues, etc. There's no limit to the number of groups you can manage."
        },
        {
          question: "How do I update my profile?",
          answer: "You can view and update your profile information at any time from your account settings. This includes your name, email, phone number, birthday, and other personal details. Your profile information helps other members identify you in groups."
        }
      ]
    },
    {
      title: "Managing Contributions",
      icon: "💰",
      topics: [
        {
          question: "How do I set contribution amounts?",
          answer: "When creating or editing a group, you can set a fixed contribution amount. This ensures everyone knows exactly what to contribute, eliminating confusion and ensuring fairness."
        },
        {
          question: "Can I change contribution amounts?",
          answer: "Yes, group administrators can update contribution amounts at any time. Changes will be reflected for all future birthdays, and members will be notified of any updates. Past contributions remain unchanged."
        },
        {
          question: "How do I mark a payment as confirmed?",
          answer: "When a member marks their payment as 'Paid', the celebrant can verify and mark it as 'Confirmed' if they received the payment, or 'Not Received' if they didn't. This two-step process ensures accuracy and transparency. The status will show as 'Paid' (awaiting confirmation), 'Confirmed' (received), or 'Not Received' (rejected)."
        },
        {
          question: "What if a celebrant rejects my contribution?",
          answer: "If a celebrant marks your contribution as 'Not Received', you'll be notified and the status will change to 'Not Received'. You can then follow up with the celebrant to resolve the issue. This helps ensure accurate tracking and resolves payment disputes."
        },
        {
          question: "What happens if someone doesn't pay?",
          answer: "GroupFund sends automatic reminders 7 days before each birthday, 1 day before, and on the deadline day. If someone still doesn't pay, the system tracks it as an overdue contribution and sends additional reminders. The app clearly shows who has paid and who hasn't, making it easy to follow up while maintaining transparency. Overdue contributions affect member reliability scores."
        },
        {
          question: "How do I track overdue contributions?",
          answer: "The app automatically tracks overdue contributions. You'll see which members have missed deadlines, and the system will send reminders. Overdue contributions are clearly marked and affect member reliability scores. Group administrators can view all overdue contributions in the group."
        },
        {
          question: "Can I see past birthdays and contribution history?",
          answer: "Yes! The birthday calendar shows both upcoming and past birthdays. You can view complete contribution history for each member, including received contributions, payment confirmations, overdue contributions, and payment statuses. This helps maintain transparency and track long-term participation."
        }
      ]
    },
    {
      title: "Payment Methods",
      icon: "💳",
      topics: [
        {
          question: "Does GroupFund process payments?",
          answer: "No, GroupFund doesn't hold or process payments directly. We're a tracking and organization tool. All payments are made directly between group members using their preferred payment methods (bank transfers, mobile money, etc.)."
        },
        {
          question: "What payment methods are supported?",
          answer: "GroupFund works with any payment method your group prefers - bank transfers, mobile money (USSD codes), cash, or online payment platforms. We simply help you track who has paid."
        },
        {
          question: "How do I share payment details with members?",
          answer: "All members can add bank account details in their profile. These details are visible to all group members for easy reference."
        }
      ]
    },
    {
      title: "Groups & Members",
      icon: "👥",
      topics: [
        {
          question: "How do I add members to my group?",
          answer: "Share your group invite code with people you want to join. They can use the code to preview the group (including member reliability scores and group health metrics) and request to join. You can then approve or reject their invitation based on their reliability scores and other factors."
        },
        {
          question: "Can I preview a group before joining?",
          answer: "Yes! When you receive an invite code, you can preview the group details including member reliability scores, group health metrics, contribution amounts, currency, maximum group size, and current members. This helps you make an informed decision before requesting to join."
        },
        {
          question: "What are member reliability scores?",
          answer: "Member reliability scores (0-100) are calculated based on total groups joined, total contributions made, total overdue contributions, on-time payment rate, and overall participation. Members are rated as Excellent, Good, Moderate, Poor, or New. These scores help you make informed decisions about which groups to join and which members to approve."
        },
        {
          question: "What is group health scoring?",
          answer: "Group health scoring tracks compliance metrics and overall group performance. It shows how well a group maintains contribution standards, member participation rates, and overall reliability. Groups with higher health scores are more likely to have consistent contributions and active members. You can see a group's health score when previewing it before joining."
        },
        {
          question: "Can I remove members from a group?",
          answer: "Yes, group administrators can remove members at any time. However, their contribution history will be preserved for record-keeping purposes. Removing a member doesn't affect their reliability score in other groups."
        },
        {
          question: "Can I leave a group?",
          answer: "Yes, you can leave a group at any time. Your contribution history will be preserved, but you'll no longer receive notifications or be able to contribute to future birthdays in that group."
        },
        {
          question: "What is the maximum group size?",
          answer: "You can set a maximum group size when creating your group. This helps everyone understand the total commitment and ensures the group stays manageable. You can update the maximum group size later if needed (admin only)."
        },
        {
          question: "Can I pause accepting new members?",
          answer: "Yes! Group administrators can pause accepting new member requests at any time. This is useful when you want to temporarily stop new members from joining. You can resume accepting requests whenever you're ready. This doesn't affect existing members or their contributions."
        },
        {
          question: "Can I close a group?",
          answer: "Yes, group administrators can close a group, which freezes all activity including new member requests and contributions. This is useful when a group has reached its goal or is no longer active. You can reopen closed groups at any time if needed."
        },
        {
          question: "Can I update group settings?",
          answer: "Yes, group administrators can update group settings including the group name, contribution amount, maximum members, and whether the group is accepting new requests. Changes to contribution amounts will apply to future birthdays, and members will be notified of updates."
        },
        {
          question: "Can members see each other's information?",
          answer: "Group members can see who has contributed, payment statuses, and member reliability scores. This transparency helps maintain trust and accountability within the group."
        }
      ]
    },
    {
      title: "Notifications & Reminders",
      icon: "🔔",
      topics: [
        {
          question: "How do reminders work?",
          answer: "GroupFund automatically sends reminders 7 days before each birthday, 1 day before, and on the deadline day. You can receive reminders via in-app notifications, push notifications, and email. You can customize your notification preferences in settings."
        },
        {
          question: "What types of notifications does GroupFund send?",
          answer: "GroupFund sends various notifications including birthday wishes, birthday reminders (7 days before, 1 day before, and same day), overdue contribution reminders, member join requests, contribution confirmations/rejections, and group updates. You can customize which notifications you receive."
        },
        {
          question: "Can I customize reminder settings?",
          answer: "Yes, you can adjust reminder preferences in your settings. Choose when you want to receive reminders (7 days before, 1 day before, same day), which notification channels to use (in-app, push, email), and which notification types you want to receive."
        },
        {
          question: "How do I manage in-app notifications?",
          answer: "You can view all your notifications in the in-app notification center. Mark individual notifications as read, mark all as read, and see your unread count. Notification preferences can be customized in settings."
        },
        {
          question: "What information do reminders include?",
          answer: "Reminders include the birthday person's name, contribution amount, deadline, and current payment status (e.g., '8 out of 10 members have paid'). Email reminders may include comprehensive information about multiple upcoming birthdays."
        },
        {
          question: "Do I receive email notifications?",
          answer: "Yes! GroupFund sends email notifications for OTP verification, password resets, birthday wishes, birthday reminders (7 days, 1 day, same day), overdue contribution reminders, comprehensive birthday summaries, contact form confirmations, and waitlist confirmations. You can customize email notification preferences in settings."
        }
      ]
    },
    {
      title: "Account & Security",
      icon: "🔐",
      topics: [
        {
          question: "How does OTP verification work?",
          answer: "When you sign up or need to verify your account, you'll receive a One-Time Password (OTP) via email. Enter the OTP code in the app to complete verification. If you don't receive it, you can request a resend. OTP verification ensures account security and helps prevent unauthorized access."
        },
        {
          question: "I forgot my password. How do I reset it?",
          answer: "Click 'Forgot Password' on the login page and enter your email address. You'll receive an OTP via email with instructions to reset your password. Follow the link and enter the OTP to create a new password."
        },
        {
          question: "Can I change my password?",
          answer: "Yes, if you're logged in, you can change your password from your account settings. You'll need to enter your current password and then set a new one. This helps keep your account secure."
        },
        {
          question: "How do I update my profile?",
          answer: "You can view and update your profile information from your account settings. This includes your name, email, phone number, birthday, and other personal details. Changes to your profile will be reflected across all your groups."
        },
        {
          question: "What is user verification?",
          answer: "User verification helps ensure account authenticity and security. Verified users have completed OTP verification and have their accounts marked as verified. This helps build trust within groups. You can see verification status on member profiles."
        },
        {
          question: "How do I delete my account?",
          answer: (
            <p>
              You can delete your account at any time by logging into the app and accessing the account deletion option in your settings. This will permanently delete your account and all associated data. For detailed instructions, visit our <Link to="/delete-account">Delete Account page</Link>.
            </p>
          )
        }
      ]
    },
    {
      title: "Technical Support",
      icon: "🛠️",
      topics: [
        {
          question: "The app isn't loading properly. What should I do?",
          answer: "Try closing and reopening the app, or restarting your device. Make sure you have a stable internet connection and that your app is updated to the latest version. If the problem persists, try uninstalling and reinstalling the app, or contact support for further assistance."
        },
        {
          question: "Can I use GroupFund on mobile?",
          answer: "Yes! GroupFund is fully responsive and works on all devices. We also have mobile apps coming soon for iOS and Android for an even better experience with push notifications."
        },
        {
          question: "How do I contact support?",
          answer: "You can reach out to us through the contact form on our website, and we'll get back to you within 24 hours. We're here to help!"
        }
      ]
    }
  ]

  // Filter sections and topics based on search query
  const filterSections = (sections, query) => {
    if (!query.trim()) return sections

    const lowerQuery = query.toLowerCase()
    
    return sections.map(section => {
      const matchingTopics = section.topics.filter(topic => 
        topic.question.toLowerCase().includes(lowerQuery) ||
        topic.answer.toLowerCase().includes(lowerQuery) ||
        section.title.toLowerCase().includes(lowerQuery)
      )

      if (matchingTopics.length > 0) {
        return {
          ...section,
          topics: matchingTopics
        }
      }
      return null
    }).filter(Boolean)
  }

  const filteredSections = filterSections(helpSections, searchQuery)

  // Auto-open sections when searching
  useEffect(() => {
    if (searchQuery.trim()) {
      const filtered = filterSections(helpSections, searchQuery)
      if (filtered.length > 0) {
        // Open the first matching section
        const firstMatchingIndex = helpSections.findIndex(section => 
          filtered.some(filteredSection => filteredSection.title === section.title)
        )
        if (firstMatchingIndex !== -1) {
          setOpenSection(firstMatchingIndex)
        }
      }
    } else {
      setOpenSection(null)
    }
  }, [searchQuery])

  return (
    <>
      <SEO
        title="Help & Support Center - GroupFund"
        description="Get help with GroupFund. Find answers to common questions about member reliability scores, group health metrics, notifications, contributions, and more. Learn how to use all features and get support."
        keywords="GroupFund help, support center, FAQ, member reliability scores, group health metrics, how to use GroupFund, customer support, OTP verification"
        canonical="https://groupfund.app/help"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Help & Support Center</h1>
          <p className="page-subtitle">
            Find answers to your questions and learn how to make the most of GroupFund.
          </p>
        </div>
      </section>

      <section className="help-page">
        <div className="container">
          <div className="help-search">
            <input 
              type="text" 
              placeholder="Search for help..." 
              className="help-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button 
                className="help-search-clear"
                onClick={() => setSearchQuery('')}
                aria-label="Clear search"
              >
                ×
              </button>
            )}
          </div>

          {searchQuery && filteredSections.length === 0 && (
            <div className="help-no-results">
              <p>No results found for "{searchQuery}"</p>
              <p>Try different keywords or <Link to="/contact">contact support</Link> for help.</p>
            </div>
          )}

          <div className="help-sections">
            {filteredSections.map((section, sectionIndex) => {
              // Find original index for opening/closing
              const originalIndex = helpSections.findIndex(s => s.title === section.title)
              return (
              <div key={sectionIndex} className="help-section">
                <button
                  className="help-section-header"
                  onClick={() => toggleSection(originalIndex)}
                >
                  <span className="help-section-icon">{section.icon}</span>
                  <h2>{section.title}</h2>
                  <span className="help-section-toggle">
                    {openSection === originalIndex ? '−' : '+'}
                  </span>
                </button>
                {openSection === originalIndex && (
                  <div className="help-section-content">
                    {section.topics.map((topic, topicIndex) => (
                      <div key={topicIndex} className="help-topic">
                        <h3>{topic.question}</h3>
                        <div>{typeof topic.answer === 'string' ? <p>{topic.answer}</p> : topic.answer}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              )
            })}
          </div>

          <div className="help-cta">
            <h2>Still Need Help?</h2>
            <p>Can't find what you're looking for? Our support team is here to help.</p>
            <div className="help-cta-buttons">
              <Link to="/contact" className="btn btn-primary btn-large">
                Contact Support
              </Link>
              <Link to="/faq" className="btn btn-secondary btn-large">
                View FAQ
              </Link>
              <Link to="/app-rules" className="btn btn-secondary btn-large">
                App Rules
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
