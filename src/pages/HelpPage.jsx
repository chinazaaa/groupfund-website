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
          answer: "Creating a group is easy! Click 'Start Your Free Group' on the homepage, sign up with your email or phone number, and follow the simple setup wizard. You'll be organizing contributions in minutes."
        },
        {
          question: "Do I need to pay to use GroupFund?",
          answer: "No! GroupFund is free to start. You can create your first group and start organizing birthday contributions at no cost. We believe in making group organization accessible to everyone."
        },
        {
          question: "How many groups can I create?",
          answer: "You can create multiple groups for different purposes - family, friends, church, work colleagues, etc. There's no limit to the number of groups you can manage."
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
          question: "What happens if someone doesn't pay?",
          answer: "GroupFund sends automatic reminders 7 days before each birthday and on the deadline day. The app clearly shows who has paid and who hasn't, making it easy to follow up while maintaining transparency."
        },
        {
          question: "Can I change contribution amounts?",
          answer: "Yes, group administrators can update contribution amounts at any time. Changes will be reflected for all future birthdays, and members will be notified of any updates."
        },
        {
          question: "How do I mark a payment as confirmed?",
          answer: "When a member marks their payment as 'Paid', the group administrator can verify and mark it as 'Confirmed'. This two-step process ensures accuracy and transparency."
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
          answer: "Group administrators can add bank account details or payment instructions in the group settings. These details are visible to all group members for easy reference."
        }
      ]
    },
    {
      title: "Groups & Members",
      icon: "👥",
      topics: [
        {
          question: "How do I add members to my group?",
          answer: "Share your group invite code with people you want to join. They can use the code to request to join your group, and you can approve or reject their invitation."
        },
        {
          question: "Can I remove members from a group?",
          answer: "Yes, group administrators can remove members at any time. However, their contribution history will be preserved for record-keeping purposes."
        },
        {
          question: "What is the maximum group size?",
          answer: "You can set a maximum group size when creating your group. This helps everyone understand the total commitment and ensures the group stays manageable."
        },
        {
          question: "Can members see each other's information?",
          answer: "Group members can see who has contributed and payment statuses, but personal payment details and account information remain private to maintain security."
        }
      ]
    },
    {
      title: "Notifications & Reminders",
      icon: "🔔",
      topics: [
        {
          question: "How do reminders work?",
          answer: "GroupFund automatically sends reminders 7 days before each birthday and on the deadline day. You can also enable push notifications in the app settings for instant updates."
        },
        {
          question: "Can I customize reminder settings?",
          answer: "Yes, you can adjust reminder preferences in your group settings. Choose when and how often you want to receive reminders about upcoming birthdays and payment deadlines."
        },
        {
          question: "What information do reminders include?",
          answer: "Reminders include the birthday person's name, contribution amount, deadline, and current payment status (e.g., '8 out of 10 members have paid')."
        }
      ]
    },
    {
      title: "Technical Support",
      icon: "🛠️",
      topics: [
        {
          question: "The app isn't loading properly. What should I do?",
          answer: "Try refreshing the page or clearing your browser cache. If the problem persists, make sure you're using a supported browser (Chrome, Firefox, Safari, or Edge) and have a stable internet connection."
        },
        {
          question: "I forgot my password. How do I reset it?",
          answer: "Click 'Forgot Password' on the login page and enter your email address. You'll receive instructions to reset your password."
        },
        {
          question: "Can I use GroupFund on mobile?",
          answer: "Yes! GroupFund is fully responsive and works on all devices. We also have mobile apps coming soon for iOS and Android for an even better experience."
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
        description="Get help with GroupFund. Find answers to common questions, learn how to use features, and get support for organizing group birthday contributions."
        keywords="GroupFund help, support center, FAQ, how to use GroupFund, customer support"
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
                        <p>{topic.answer}</p>
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
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
