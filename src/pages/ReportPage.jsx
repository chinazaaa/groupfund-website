import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function ReportPage() {
  const [reportType, setReportType] = useState('group')
  const [reason, setReason] = useState('')
  const [description, setDescription] = useState('')
  const [groupId, setGroupId] = useState('')
  const [memberId, setMemberId] = useState('')
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    // In a real implementation, this would call the API
    // For now, we'll just show a success message
    setSubmitted(true)
  }

  const reportReasons = [
    { value: 'spam', label: 'Spam' },
    { value: 'inappropriate', label: 'Inappropriate Content' },
    { value: 'fraud', label: 'Fraud or Scam' },
    { value: 'harassment', label: 'Harassment' },
    { value: 'other', label: 'Other' }
  ]

  return (
    <>
      <SEO
        title="Report a Group or Member - GroupFund"
        description="Report groups or members for spam, fraud, harassment, or inappropriate behavior. Help keep GroupFund safe and trustworthy for everyone."
        keywords="report group, report member, report fraud, report spam, groupfund reporting, safety reporting"
        canonical="https://groupfund.app/report"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Report a Group or Member</h1>
          <p className="page-subtitle">
            Help us keep GroupFund safe and trustworthy
          </p>
        </div>
      </section>

      <section className="legal-page">
        <div className="container">
          <div className="legal-content">
            <div className="legal-section">
              <h2>About Reporting</h2>
              <p>
                If you encounter a group or member that violates our community guidelines, you can report them. Reports help us maintain a safe and trustworthy platform for everyone.
              </p>
              <p>
                <strong>Report Reasons:</strong>
              </p>
              <ul>
                <li><strong>Spam:</strong> Groups or members posting spam or unwanted content</li>
                <li><strong>Inappropriate:</strong> Content that violates community standards</li>
                <li><strong>Fraud:</strong> Suspected fraudulent activities or scams</li>
                <li><strong>Harassment:</strong> Harassment, bullying, or abusive behavior</li>
                <li><strong>Other:</strong> Any other violation of our terms of service</li>
              </ul>
            </div>

            <div className="legal-section">
              <h2>How Reports Work</h2>
              <p>
                When you submit a report:
              </p>
              <ul>
                <li><strong>Group Reports:</strong> Each pending report reduces the group's health score by 5 points. Groups with 3+ pending reports are automatically closed. Reports are included in health metrics.</li>
                <li><strong>Member Reports:</strong> Users with 3+ pending reports or 5+ total reports are marked as inactive. This affects all users, including group admins.</li>
                <li><strong>Review Process:</strong> Our team reviews all reports. Reviewed reports reduce health scores by 2 points (less impact than pending reports).</li>
                <li><strong>Spam Prevention:</strong> Duplicate pending reports from the same user are prevented. Public reports have a 24-hour cooldown per email/group or email/member combination.</li>
              </ul>
              <p style={{ marginTop: '1.5rem', padding: '1rem', backgroundColor: '#fef2f2', borderLeft: '4px solid #ef4444', borderRadius: '4px' }}>
                <strong>⚠️ Important:</strong> Please only report legitimate violations. False reports may result in action against your account. Reports are taken seriously and affect group health and member status.
              </p>
            </div>

            {!submitted ? (
              <div className="legal-section">
                <h2>Submit a Report</h2>
                <form onSubmit={handleSubmit} style={{ maxWidth: '600px' }}>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <label htmlFor="reportType" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
                      What are you reporting?
                    </label>
                    <select
                      id="reportType"
                      value={reportType}
                      onChange={(e) => setReportType(e.target.value)}
                      style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid #d1d5db', fontSize: '1rem' }}
                      required
                    >
                      <option value="group">A Group</option>
                      <option value="member">A Member</option>
                    </select>
                  </div>

                  {reportType === 'group' && (
                    <div style={{ marginBottom: '1.5rem' }}>
                      <label htmlFor="groupId" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
                        Group Name <span style={{ color: '#ef4444' }}>*</span>
                      </label>
                      <input
                        type="text"
                        id="groupId"
                        value={groupId}
                        onChange={(e) => setGroupId(e.target.value)}
                        placeholder="Enter the group name"
                        style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid #d1d5db', fontSize: '1rem' }}
                        required
                      />
                    </div>
                  )}

                  {reportType === 'member' && (
                    <>
                      <div style={{ marginBottom: '1.5rem' }}>
                        <label htmlFor="memberId" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
                          Member Name <span style={{ color: '#ef4444' }}>*</span>
                        </label>
                        <input
                          type="text"
                          id="memberId"
                          value={memberId}
                          onChange={(e) => setMemberId(e.target.value)}
                          placeholder="Enter the member name"
                          style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid #d1d5db', fontSize: '1rem' }}
                          required
                        />
                      </div>
                      <div style={{ marginBottom: '1.5rem' }}>
                        <label htmlFor="memberGroupId" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
                          Group Name (where you encountered this member) <span style={{ color: '#ef4444' }}>*</span>
                        </label>
                        <input
                          type="text"
                          id="memberGroupId"
                          value={groupId}
                          onChange={(e) => setGroupId(e.target.value)}
                          placeholder="Enter the group Name"
                          style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid #d1d5db', fontSize: '1rem' }}
                          required
                        />
                      </div>
                    </>
                  )}

                  <div style={{ marginBottom: '1.5rem' }}>
                    <label htmlFor="reason" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
                      Reason for Report <span style={{ color: '#ef4444' }}>*</span>
                    </label>
                    <select
                      id="reason"
                      value={reason}
                      onChange={(e) => setReason(e.target.value)}
                      style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid #d1d5db', fontSize: '1rem' }}
                      required
                    >
                      <option value="">Select a reason</option>
                      {reportReasons.map((r) => (
                        <option key={r.value} value={r.value}>{r.label}</option>
                      ))}
                    </select>
                  </div>

                  <div style={{ marginBottom: '1.5rem' }}>
                    <label htmlFor="description" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
                      Description <span style={{ color: '#ef4444' }}>*</span>
                    </label>
                    <textarea
                      id="description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Please provide details about the issue..."
                      rows="5"
                      style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid #d1d5db', fontSize: '1rem', fontFamily: 'inherit' }}
                      required
                    />
                  </div>

                  <div style={{ marginBottom: '1.5rem' }}>
                    <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
                      Your Email (for follow-up if needed)
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid #d1d5db', fontSize: '1rem' }}
                    />
                    <p style={{ marginTop: '0.5rem', fontSize: '0.875rem', color: '#64748b' }}>
                      Optional. We may contact you if we need more information about your report.
                    </p>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary btn-large"
                    style={{ width: '100%' }}
                  >
                    Submit Report
                  </button>
                </form>
              </div>
            ) : (
              <div className="legal-section">
                <div style={{ padding: '2rem', backgroundColor: '#f0fdf4', borderLeft: '4px solid #22c55e', borderRadius: '4px', textAlign: 'center' }}>
                  <h2 style={{ color: '#22c55e', marginBottom: '1rem' }}>✓ Report Submitted</h2>
                  <p style={{ marginBottom: '1.5rem' }}>
                    Thank you for your report. We take all reports seriously and will review it promptly. Reports affect group health scores and member status as appropriate.
                  </p>
                  <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <Link to="/" className="btn btn-secondary">Go to Home</Link>
                    <button
                      onClick={() => {
                        setSubmitted(false)
                        setReportType('group')
                        setReason('')
                        setDescription('')
                        setGroupId('')
                        setMemberId('')
                        setEmail('')
                      }}
                      className="btn btn-primary"
                    >
                      Submit Another Report
                    </button>
                  </div>
                </div>
              </div>
            )}

            <div className="legal-section">
              <h2>What Happens After You Report?</h2>
              <p>
                After submitting a report:
              </p>
              <ul>
                <li><strong>Immediate Impact:</strong> Pending reports immediately affect group health scores (reduces by 5 points) and member status</li>
                <li><strong>Automatic Actions:</strong> Groups with 3+ pending reports are automatically closed. Members with 3+ pending or 5+ total reports are marked inactive</li>
                <li><strong>Review Process:</strong> Our team reviews all reports. Once reviewed, the impact on health scores is reduced (2 points instead of 5)</li>
                <li><strong>Confidentiality:</strong> Your report is confidential. We don't share reporter information with the reported party</li>
                <li><strong>Follow-up:</strong> If we need more information, we may contact you using the email you provided</li>
              </ul>
            </div>

            <div className="legal-section">
              <h2>Need Help?</h2>
              <p>
                If you have questions about reporting or need assistance, please visit our <Link to="/help">Help page</Link> or <Link to="/contact">Contact us</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

