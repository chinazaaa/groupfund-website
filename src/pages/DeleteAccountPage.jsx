import React from 'react'
import SEO from '../components/SEO'
import '../App.css'

export default function DeleteAccountPage() {
  return (
    <>
      <SEO
        title="Delete Your Account - GroupFund"
        description="Learn how to delete your GroupFund account. You can delete your account at any time by logging into the app and accessing the account deletion option in your settings."
        keywords="delete account, account deletion, remove account, groupfund delete account"
        canonical="https://www.groupfund.app/delete-account"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Delete Your Account</h1>
          <p className="page-subtitle">
            Learn how to permanently delete your GroupFund account and data.
          </p>
        </div>
      </section>

      <section className="legal-page">
        <div className="container">
          <div className="legal-content">
            <div className="legal-section">
              <h2>How to Delete Your Account</h2>
              <p>
                You can delete your account at any time by logging into the app and accessing the account deletion option in your settings. This will permanently delete your account and all associated data.
              </p>
              <p>
                To delete your account:
              </p>
              <ol>
                <li>Open the GroupFund app on your device</li>
                <li>Log in to your account</li>
                <li>Navigate to your profile </li>
                <li>Find and click the "Delete Account" option</li>
                <li>Follow the prompts to confirm the deletion</li>
              </ol>
            </div>

            <div className="legal-section">
              <h2>What Happens When You Delete Your Account</h2>
              <p>
                When you delete your account, the following will occur:
              </p>
              <ul>
                <li>Your account will be permanently deleted</li>
                <li>All your personal information will be removed from our systems</li>
                <li>Your group memberships will be removed</li>
                <li>Your contribution history will be deleted</li>
                <li>You will no longer receive notifications or reminders</li>
              </ul>
              <p>
                <strong>Please note:</strong> Account deletion is permanent and cannot be undone. Make sure you want to delete your account before proceeding.
              </p>
            </div>

            <div className="legal-section">
              <h2>Need Help?</h2>
              <p>
                If you're having trouble deleting your account or have questions about the process, please contact our support team:
              </p>
              <p>
                <strong>Email:</strong> support@groupfund.app<br />
                <strong>Website:</strong> <a href="/contact">Contact Page</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}





