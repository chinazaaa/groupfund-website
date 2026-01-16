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
          answer: "Creating a group is easy! Navigate to Get Started and choose the platform you want to use, sign up with your email, verify your account with the OTP sent to your email, and follow the simple setup wizard. You'll be organizing contributions in minutes."
        },
        {
          question: "How do I sign up?",
          answer: "You can sign up with your email address. After entering your details, you'll receive an OTP (One-Time Password) via email to verify your account. Enter the OTP code to complete verification. If you don't receive it, you can request a resend."
        },
        {
          question: "Do I need to pay to use GroupFund?",
          answer: "No! GroupFund is free to start. You can create your first group and start organizing group contributions at no cost - for birthdays, subscriptions, events, and more. We believe in making group organization accessible to everyone."
        },
        {
          question: "How many groups can I create?",
          answer: "You can create multiple groups for different purposes - family, friends, church, work colleagues, etc. There's no limit to the number of groups you can manage."
        },
        {
          question: "How do I update my profile?",
          answer: "You can view and update your profile information at any time from your account settings. However, you can only update your name, ema, as. To update others, please contact support@groupfund.app."
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
          answer: "Yes! Only full admins (not co-admins) can update contribution amounts at any time. When you change the contribution amount, all active group members (except you, the admin) will be automatically notified via email, push notification, and in-app notification. The email notification includes the old and new contribution amounts, clearly indicates whether it increased or decreased, and gives members the option to review and leave the group if they're not comfortable with the change. Changes to contribution amounts apply to future contributions only, and all members are kept informed for full transparency."
        },
        {
          question: "How do I mark a payment as confirmed?",
          answer: "When a member marks their payment as 'Paid', the admin or co-admin (for Subscription/General Groups) or celebrant (for Birthday Groups) can verify and mark it as 'Confirmed' if they received the payment, or 'Not Received' if they didn't. This two-step process ensures accuracy and transparency. The status will show as 'Paid' (awaiting confirmation), 'Confirmed' (received), or 'Not Received' (rejected). Note: For birthday contributions, only the celebrant can confirm/reject, not admins or co-admins."
        },
        {
          question: "What if an admin, co-admin, or celebrant rejects my contribution?",
          answer: "If an admin or co-admin (for Subscription/General Groups) or celebrant (for Birthday Groups) marks your contribution as 'Not Received', you'll be notified and the status will change to 'Not Received'. You can then follow up with them to resolve the issue. This helps ensure accurate tracking and resolves payment disputes."
        },
        {
          question: "What happens if someone doesn't pay?",
          answer: "GroupFund sends automatic reminders 7 days before each deadline (birthday for Birthday Groups, subscription deadline for Subscription Groups, event deadline for General Groups), 1 day before, and on the deadline day. If someone still doesn't pay, the system tracks it as an overdue contribution and sends additional reminders. The app clearly shows who has paid and who hasn't, making it easy to follow up while maintaining transparency. Overdue contributions affect member reliability scores."
        },
        {
          question: "How do I track overdue contributions?",
          answer: "The app automatically tracks overdue contributions. You'll see which members have missed deadlines, and the system will send reminders. Overdue contributions are clearly marked and affect member reliability scores. Group administrators can view all overdue contributions in the group."
        },
        {
          question: "Can I see past contributions and contribution history?",
          answer: "Yes! For Birthday Groups, the birthday calendar shows both upcoming and past birthdays. For all group types, you can view complete contribution history for each member, including received contributions, payment confirmations, overdue contributions, and payment statuses. This helps maintain transparency and track long-term participation."
        },
        {
          question: "Can I export payment history?",
          answer: "Not at the moment. We're working on it. Once available, you'll be able to export your contribution history for record-keeping and transparency purposes."
        }
      ]
    },
    {
      title: "Payment Methods & Auto-Pay",
      icon: "💳",
      topics: [
        {
          question: "Does GroupFund process payments?",
          answer: "Yes! GroupFund processes automatic payments (auto-pay) securely via Stripe, a PCI-DSS compliant payment processor. For manual payments, payments are made directly between group members using their preferred payment methods (bank transfers, mobile money, etc.), and we help you track who has paid."
        },
        {
          question: "How does auto-pay work?",
          answer: "Auto-pay allows your debit card to be automatically charged on payment dates (birthdays, subscription deadlines, or event deadlines). You can choose to be charged '1 day before' or 'same day'. Auto-pay is only available for groups using USD, EUR, GBP, CAD, or AUD. You need a valid debit card and bank account details. Payments are processed securely via Stripe and automatically confirmed. If payment fails after 2 attempts, auto-pay is disabled and you'll be notified."
        },
        {
          question: "What payment methods are supported?",
          answer: "For auto-pay: Debit cards (Visa, Mastercard, etc.) processed via Stripe. For manual payments: Any payment method your group prefers - bank transfers, mobile money (USSD codes), cash, or online payment platforms. Manual payments work for all currencies."
        },
        {
          question: "What are the fees for auto-pay?",
          answer: "When you use auto-pay, you pay fees (added on top of contribution amount): payment processor fee (Stripe) + platform fee (1-2%). Recipient receives full contribution amount. Manual payments have no fees. All fees are displayed transparently before you confirm."
        },
        {
          question: "How do I enable or disable auto-pay?",
          answer: "You can enable auto-pay for a group if: the group uses USD, EUR, GBP, CAD, or AUD; you have a valid debit card; you have bank account details; you have no overdue payments. You can disable auto-pay at any time. Critical actions like enabling/disabling auto-pay require two-factor authentication (authenticator app)."
        },
        {
          question: "What happens if my auto-pay payment fails?",
          answer: "If your automatic payment fails, the system will retry once (max 2 attempts total). If both attempts fail, auto-pay will be automatically disabled for that group, and you'll receive an email notification. Contributions revert to manual payment. You can re-enable auto-pay after resolving the issue (e.g., updating your card, ensuring sufficient funds)."
        },
        {
          question: "How do I share payment details with members?",
          answer: "All members can add bank account details in their profile. These details are stored in our system and displayed to group members for manual payments. Bank details are also used to process withdrawals from your wallet."
        }
      ]
    },
    {
      title: "Wallet & Withdrawals",
      icon: "💼",
      topics: [
        {
          question: "What is the wallet system?",
          answer: "The wallet is an in-app balance where you receive funds when others contribute to you via auto-pay. Wallet balance can only be used to receive payments and withdraw to your bank account - it cannot be used to pay contributions (you must use a debit card for that). Wallet is only available for USD, EUR, GBP, CAD, and AUD currencies."
        },
        {
          question: "How do I view my wallet balance?",
          answer: "You can view your wallet balance and transaction history in the app. The wallet shows all incoming payments from auto-pay contributions, withdrawal history, and current balance."
        },
        {
          question: "How do withdrawals work?",
          answer: "You can withdraw funds from your wallet to your bank account at any time. Withdrawals are subject to a 24-hour security hold period for fraud prevention. Minimum withdrawal amounts: $10 USD, €10 EUR, £10 GBP, C$10 CAD, A$10 AUD. Withdrawal fees: FREE for GBP and EUR, 1% fee for USD, CAD, and AUD. You'll receive an email notification when your withdrawal request is received. Funds will be sent to your bank account within 24 hours. You must have valid bank account details in your profile to withdraw."
        },
        {
          question: "What are the withdrawal fees?",
          answer: "Withdrawal fees vary by currency: GBP (British Pound) - FREE, EUR (Euro) - FREE, USD (US Dollar) - 1% fee, CAD (Canadian Dollar) - 1% fee, AUD (Australian Dollar) - 1% fee. Minimum withdrawal amounts: $10 USD, €10 EUR, £10 GBP, C$10 CAD, A$10 AUD. All fees are displayed transparently before you confirm a withdrawal."
        },
        {
          question: "Why is there a 24-hour hold on withdrawals?",
          answer: "The 24-hour security hold period helps prevent fraudulent withdrawals. It gives you time to detect and report any unauthorized withdrawal requests. You'll receive an email notification when your withdrawal is requested. If you didn't request it, contact security@groupfund.app immediately."
        },
        {
          question: "Can I view transaction history and bank statements?",
          answer: "Yes! You can view complete transaction history including all contributions (auto-pay and manual), wallet transactions, withdrawals, fees, and payment confirmations. Access detailed records and bank statements for all your financial activity in the app."
        },
        {
          question: "Can I delete my account if I have wallet balance?",
          answer: "No, you cannot delete your account if you have a wallet balance greater than zero. You must withdraw all funds from your wallet before deleting your account."
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
          answer: "Yes! When you receive an invite code, you can preview the group details including member reliability scores, group health metrics, contribution amounts, currency, maximum group size, and current members. This helps you make an informed decision before requesting to join. ⚠️ Important: Please verify the identity of the group admin before joining. GroupFund is not liable for any fraudulent activities or financial losses. Only join groups with people you trust."
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
          answer: "Yes, group administrators and co-admins can remove regular members at any time. However, co-admins cannot remove other admins or co-admins - only full admins can do that. Contribution history will be preserved for record-keeping purposes. Removing a member doesn't affect their reliability score in other groups."
        },
        {
          question: "Can I leave a group?",
          answer: "Yes, you can leave a group at any time. Your contribution history will be preserved, but you'll no longer receive notifications or be able to contribute to future contributions in that group."
        },
        {
          question: "What is the maximum group size?",
          answer: "You can set a maximum group size when creating your group. This helps everyone understand the total commitment and ensures the group stays manageable. You can update the maximum group size later if needed (admin only)."
        },
        {
          question: "Can I pause accepting new members?",
          answer: "Yes! Group administrators and co-admins can pause accepting new member requests at any time. This is useful when you want to temporarily stop new members from joining. You can resume accepting requests whenever you're ready. This doesn't affect existing members or their contributions."
        },
        {
          question: "Can I close a group?",
          answer: "Yes, but only the main admin (group creator) can close or reopen a group, which freezes all activity including new member requests and contributions. Co-admins cannot close or reopen groups. This is useful when a group has reached its goal or is no longer active. You can reopen closed groups at any time if needed."
        },
        {
          question: "Can I update group settings?",
          answer: "Yes, group administrators and co-admins can update many group settings including the group name, group notes, accepting requests toggle, chat enabled/disabled, wishlist enabled/disabled (for General Groups), and deadlines. However, only full admins can change critical settings like contribution amount, max members, and currency. Co-admins also cannot close/reopen groups or delete groups - only the main admin (creator) can do that. When the contribution amount is updated, all active members (except the admin) will receive email, push, and in-app notifications with details about the old and new amounts. Changes to contribution amounts apply to future contributions only, and members are given the option to review and leave the group if they're not comfortable with the change."
        },
        {
          question: "Can I use wishlists in General Groups?",
          answer: "Yes! When creating a General Group, you can choose to enable wishlist functionality for gift coordination. You can also edit group settings later to turn wishlist on or off. Wishlists in General Groups work the same way as Birthday Groups - you can add items with pictures and prices, members can claim items they want to gift, and you can track what's been claimed to avoid duplicates. This is perfect for events like weddings, baby showers, or graduations where you want to coordinate specific gifts."
        },
        {
          question: "Can members see each other's information?",
          answer: "Group members can see who has contributed, payment statuses, and member reliability scores. This transparency helps maintain trust and accountability within the group."
        },
        {
          question: "How does the wishlist claiming feature work?",
          answer: "For Birthday Groups and General Groups (when enabled), you can create and share a wishlist with items you'd like to receive. Group members can view the wishlist and claim items they want to gift. When a member claims an item, it shows as 'claimed' so others know it's taken. You can see which items have been claimed and by whom, and can mark items as 'done' when received. This helps avoid duplicate gifts and ensures you get items you actually want. For General Groups, wishlist can be enabled or disabled in group settings."
        },
        {
          question: "How do I share subscription login credentials with group members?",
          answer: "You can share subscription login credentials (email, password, etc.) with group members using the group notes or description field. Add instructions in the group description like 'Email me at abc@example.com for login details' or 'Contact me via WhatsApp for credentials'. This way, all members can see how to get access to the subscription after they've contributed. The group description is visible to all members after they've joined the group, making it easy to share contact information or instructions for accessing the shared subscription service."
        },
        {
          question: "How does group chat work?",
          answer: "GroupFund includes an optional per-group chat feature. When creating or editing a group, group creators can enable or disable chat (chat is disabled by default). When enabled, active group members can send messages, view message history with pagination, and mention other members using @username or @FirstName LastName. You can customize your chat notification preferences: get notified when mentioned (default: ON) or get notified for all messages (default: OFF). Chat is automatically disabled for closed groups. Only the message sender, group admin, or co-admin can delete messages."
        },
        {
          question: "What is a co-admin role?",
          answer: "The co-admin role provides a middle tier between regular members and full admins. Co-admins can help manage groups but have restricted permissions. They can: approve/reject member requests, remove regular members (but not admins or other co-admins), confirm subscription and general contributions, update group name and notes, toggle accepting requests and chat, and update deadlines. However, co-admins cannot: change contribution amount, max members, or currency; close/reopen groups; delete groups; promote/demote members to/from co-admin; or remove admins or other co-admins. Only full admins can promote/demote co-admins. For birthday contributions, only the celebrant can confirm/reject, not admins or co-admins."
        },
        {
          question: "How do I promote someone to co-admin?",
          answer: "Only full admins can promote members to co-admin or demote co-admins back to regular members. When you promote or demote someone, they receive an in-app notification about the role change. Co-admins are useful for large groups where the main admin needs help with day-to-day management tasks like approving members and confirming contributions."
        }
      ]
    },
    {
      title: "Notifications & Reminders",
      icon: "🔔",
      topics: [
        {
          question: "How do reminders work?",
          answer: "GroupFund automatically sends reminders 7 days before each deadline (birthday for Birthday Groups, subscription deadline for Subscription Groups, event deadline for General Groups), 1 day before, and on the deadline day. You can receive reminders via in-app notifications, push notifications, and email. You can customize your notification preferences in settings."
        },
        {
          question: "What types of notifications does GroupFund send?",
          answer: "GroupFund sends various notifications including birthday wishes (for Birthday Groups), reminders for birthdays/subscriptions/events (7 days before, 1 day before, and same day), overdue contribution reminders, member join requests, contribution confirmations/rejections, contribution amount updates (when group admins change contribution amounts), group updates, chat mentions (when someone mentions you in group chat), and chat messages (if you enable notifications for all messages). You can customize which notifications you receive."
        },
        {
          question: "Can I customize reminder settings?",
          answer: "Yes, you can adjust reminder preferences in your settings. Choose when you want to receive reminders (7 days before, 1 day before, same day), which notification channels to use (in-app, push, email), and which notification types you want to receive. For Birthday Groups, you can customize reminder preferences for 7 days before, 1 day before, and same day reminders. For Subscription and General Groups, you can customize reminders before deadlines. You can also choose to receive or disable specific notification types like birthday wishes, overdue reminders, member requests, confirmations, and group updates."
        },
        {
          question: "How do I manage in-app notifications?",
          answer: "You can view all your notifications in the in-app notification center. Mark individual notifications as read, mark all as read, and see your unread count. Notification preferences can be customized in settings."
        },
        {
          question: "What information do reminders include?",
          answer: "Reminders include the recipient's name (celebrant for Birthday Groups, admin for Subscription/General Groups), contribution amount, deadline, and current payment status (e.g., '8 out of 10 members have paid'). Email reminders may include comprehensive information about multiple upcoming deadlines."
        },
        {
          question: "Do I receive email notifications?",
          answer: "Yes! GroupFund sends email notifications for OTP verification, password resets, birthday wishes (for Birthday Groups), reminders for birthdays/subscriptions/events (7 days, 1 day, same day), overdue contribution reminders, comprehensive summaries, contact form confirmations, and waitlist confirmations. You can customize email notification preferences in settings."
        },
        {
          question: "What are the default email notification preferences?",
          answer: "By default, important email notifications are ON: payment success, autopay success/disabled, payment failure, withdrawal requests/completed/failed, deadline updates, and contribution amount updates. Birthday reminders, comprehensive reminders, overdue reminders, max members updates, member left notifications, and monthly newsletters default to OFF. Security-related emails (OTP, welcome, birthday wishes, holiday emails, security alerts) are always sent and cannot be disabled."
        },
        {
          question: "What are the default in-app and push notification preferences?",
          answer: "Most in-app and push notifications default to ON, including group invites/approvals/rejections, contribution confirmations, deadline updates, birthday reminders/wishes, autopay notifications, overdue reminders, wishlist notifications, chat mentions, withdrawal notifications, member updates, and role changes. However, chat_message notifications default to OFF (can be noisy). You can customize any of these in your settings. Security notifications (if any) are always sent and cannot be disabled."
        },
        {
          question: "Which notifications cannot be disabled?",
          answer: "Security-related notifications cannot be disabled and are always sent: OTP emails for verification, welcome emails (sent once at signup), birthday wish emails (to the celebrant), holiday emails (Christmas, New Year), security alerts (auto-pay changes, bank account changes, wallet updates), contact confirmations, waitlist confirmations, and beta invitations (admin). All other notifications can be customized in your settings."
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
          question: "What is two-factor authentication (2FA)?",
          answer: "Two-factor authentication (2FA) is required for critical actions like adding/deleting debit cards, changing bank account details, withdrawing funds, and enabling/disabling auto-pay. 2FA uses authenticator apps (Google Authenticator, Authy, Microsoft Authenticator, or similar) to generate verification codes. You must set up an authenticator app in your account settings to use these features."
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
          answer: "You can view and update your profile information from your account settings. However, you can only update includes your name. To update others, please contact support@groupfund.app."
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
      title: "Safety & Reporting",
      icon: "🛡️",
      topics: [
        {
          question: "How do I report a group or member?",
          answer: (
            <p>
              You can report groups or members for spam, fraud, harassment, inappropriate content, or other violations. Visit our <Link to="/report">Report page</Link> to submit a report. You can report either a group or a member, select a reason (spam, inappropriate, fraud, harassment, or other), and provide details about the issue. Reports help maintain platform safety.
            </p>
          )
        },
        {
          question: "What happens when I report a group?",
          answer: "When you report a group: (1) Each pending report reduces the group's health score by 5 points, (2) Groups with 3+ pending reports are automatically closed, (3) Reports are included in health metrics and displayed in health text, (4) Our team reviews all reports, and reviewed reports reduce health by 2 points (less impact than pending reports). This helps identify and address problematic groups quickly."
        },
        {
          question: "What happens when I report a member?",
          answer: "When you report a member: (1) Users with 3+ pending reports are marked as inactive (is_active = false), (2) Users with 5+ total reports are also marked as inactive, (3) This affects all users, including group admins, (4) When a group admin is reported, it also affects the group's health. Reports help protect the community from problematic members."
        },
        {
          question: "What reasons can I report for?",
          answer: "You can report groups or members for: (1) Spam - unwanted or repetitive content, (2) Inappropriate - content that violates community standards, (3) Fraud - suspected fraudulent activities or scams, (4) Harassment - bullying or abusive behavior, (5) Other - any other violation of our terms of service. Please only report legitimate violations."
        },
        {
          question: "Are there limits on reporting?",
          answer: "Yes, to prevent spam: (1) Duplicate pending reports from the same user are prevented, (2) Public reports (from the website) have a 24-hour cooldown per email/group or email/member combination, (3) This prevents abuse of the reporting system while still allowing legitimate reports. Authenticated users (logged in) can report groups or members they're part of."
        },
        {
          question: "Will the person I report know it was me?",
          answer: "No, your report is confidential. We don't share reporter information with the reported party. However, if we need more information about your report, we may contact you using the email you provided (if you included one)."
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

  // Add FAQPage structured data
  useEffect(() => {
    const extractText = (answer) => {
      if (typeof answer === 'string') {
        return answer
      }
      if (answer && answer.props && answer.props.children) {
        if (typeof answer.props.children === 'string') {
          return answer.props.children
        }
        return answer.props.children.toString()
      }
      return String(answer)
    }

    const allQuestions = helpSections.flatMap(section => 
      section.topics.map(topic => ({
        "@type": "Question",
        "name": topic.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": extractText(topic.answer)
        }
      }))
    )

    const faqStructuredData = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "url": "https://www.groupfund.app/help",
      "mainEntity": allQuestions
    }

    const existingScript = document.querySelector('script[data-help-faq-schema]')
    if (existingScript) existingScript.remove()
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.setAttribute('data-help-faq-schema', 'true')
    script.textContent = JSON.stringify(faqStructuredData)
    document.head.appendChild(script)

    return () => {
      const scriptToRemove = document.querySelector('script[data-help-faq-schema]')
      if (scriptToRemove) scriptToRemove.remove()
    }
  }, [])

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
        canonical="https://www.groupfund.app/help"
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
              <Link to="/glossary" className="btn btn-secondary btn-large">
                Glossary
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
