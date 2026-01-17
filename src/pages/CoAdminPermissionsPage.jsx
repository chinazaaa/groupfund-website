import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function CoAdminPermissionsPage() {
  useEffect(() => {
    const webPageStructuredData = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Co-Admin Permissions - GroupFund",
      "description": "Learn what co-admins can and cannot do in GroupFund groups. Complete guide to co-admin permissions, responsibilities, and limitations for group management.",
      "url": "https://www.groupfund.app/resources/co-admin-permissions"
    }
    const existingScript = document.querySelector('script[data-coadmin-permissions-schema]')
    if (existingScript) existingScript.remove()
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.setAttribute('data-coadmin-permissions-schema', 'true')
    script.textContent = JSON.stringify(webPageStructuredData)
    document.head.appendChild(script)
    return () => {
      const scriptToRemove = document.querySelector('script[data-coadmin-permissions-schema]')
      if (scriptToRemove) scriptToRemove.remove()
    }
  }, [])

  return (
    <>
      <SEO
        title="Co-Admin Permissions - What Co-Admins Can Do | GroupFund"
        description="Complete guide to co-admin permissions in GroupFund groups. Learn what co-admins can and cannot do, including group management, member management, contribution management, and permissions comparison table."
        keywords="co-admin permissions, group admin permissions, group management, co-admin role, group permissions, member management, contribution management"
        canonical="https://www.groupfund.app/resources/co-admin-permissions"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Co-Admin Permissions</h1>
          <p className="page-subtitle">
            Understanding what co-admins can and cannot do in GroupFund groups
          </p>
        </div>
      </section>

      <section className="resource-detail-page">
        <div className="container">
          <div className="resource-content">
            <div className="resource-meta">
              <span className="resource-category">Group Management</span>
              <span className="resource-read-time">5 min read</span>
            </div>

            <div className="resource-section">
              <h2>Overview</h2>
              <p>
                Co-admins have limited administrative permissions designed to help manage groups while maintaining important safeguards. They can assist with day-to-day operations but cannot modify critical group settings.
              </p>
            </div>

            <div className="resource-section">
              <h2>✅ Co-Admins CAN Do</h2>
              
              <h3>Group Management</h3>
              <p>Co-admins can update most group settings including:</p>
              <ul className="resource-list">
                <li><strong>Group name</strong></li>
                <li><strong>Notes</strong></li>
                <li><strong>Deadlines</strong> (for general and subscription groups)</li>
                <li><strong>Accepting requests toggle</strong> - Can pause or resume accepting new member requests</li>
                <li><strong>Chat enabled/disabled</strong> (for general groups)</li>
                <li><strong>Wishlist enabled/disabled</strong> (for general groups)</li>
                <li><strong>Public/private status</strong> (for subscription groups only)</li>
              </ul>
              <p style={{ marginTop: '1rem', padding: '1rem', backgroundColor: '#fff3cd', borderLeft: '4px solid #ffc107', borderRadius: '4px' }}>
                <strong>⚠️ Restrictions:</strong> Cannot change contribution amount or max members
              </p>

              <h3>Member Management</h3>
              <ul className="resource-list">
                <li><strong>Approve or reject member join requests</strong> - Can approve or reject pending members</li>
                <li><strong>Remove members</strong> - Can remove regular members from the group</li>
                <li><strong>View all members</strong> - Can see both active and pending members</li>
                <li><strong>Leave group freely</strong> - No restrictions on leaving the group</li>
              </ul>

              <h3>Contribution Management</h3>
              <ul className="resource-list">
                <li><strong>Confirm contributions</strong> - Can mark subscription and general contributions as confirmed (payment received)</li>
                <li><strong>Reject contributions</strong> - Can mark subscription and general contributions as not received</li>
                <li><strong>Make contributions</strong> - Can contribute like any regular member (not excluded from payment obligations)</li>
              </ul>
              <p style={{ marginTop: '1rem', padding: '1rem', backgroundColor: '#f0f9ff', borderRadius: '6px' }}>
                <strong>Note:</strong> For birthday contributions, only the celebrant can confirm or reject contributions, not admins or co-admins.
              </p>

              <h3>Personal Features</h3>
              <ul className="resource-list">
                <li><strong>Add/manage personal bank accounts</strong> - Can add, update, and delete their own bank accounts for personal withdrawals</li>
              </ul>
            </div>

            <div className="resource-section">
              <h2>❌ Co-Admins CANNOT Do</h2>
              
              <h3>Group Settings</h3>
              <ul className="resource-list">
                <li><strong>Change contribution amount</strong> - Only admins can modify this critical setting</li>
                <li><strong>Change max members</strong> - Only admins can modify this setting (for birthday groups)</li>
              </ul>

              <h3>Member Management</h3>
              <ul className="resource-list">
                <li><strong>Promote/demote members</strong> - Cannot change member roles (promote to co-admin or demote co-admin to member). Only admins can do this.</li>
                <li><strong>Remove admins</strong> - Cannot remove other admins from the group</li>
                <li><strong>Remove other co-admins</strong> - Cannot remove other co-admins, only regular members</li>
              </ul>

              <h3>Group Lifecycle</h3>
              <ul className="resource-list">
                <li><strong>Close groups</strong> - Only the group creator or system admin can close groups</li>
                <li><strong>Reopen groups</strong> - Only the group creator or system admin can reopen closed groups</li>
                <li><strong>Delete groups</strong> - Only system admins can delete groups</li>
                <li><strong>Transfer admin role</strong> - Cannot transfer admin ownership</li>
              </ul>

              <h3>System Features</h3>
              <ul className="resource-list">
                <li><strong>System admin functions</strong> - Cannot access platform-wide admin features (user management, system statistics, etc.)</li>
              </ul>
            </div>

            <div className="resource-section">
              <h2>Permission Summary Table</h2>
              <div style={{ overflowX: 'auto', marginTop: '1.5rem' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #e5e7eb' }}>
                  <thead>
                    <tr style={{ backgroundColor: '#f9fafb' }}>
                      <th style={{ padding: '0.75rem', textAlign: 'left', border: '1px solid #e5e7eb' }}>Action</th>
                      <th style={{ padding: '0.75rem', textAlign: 'center', border: '1px solid #e5e7eb' }}>Co-Admin</th>
                      <th style={{ padding: '0.75rem', textAlign: 'center', border: '1px solid #e5e7eb' }}>Admin</th>
                      <th style={{ padding: '0.75rem', textAlign: 'left', border: '1px solid #e5e7eb' }}>Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={{ padding: '0.75rem', border: '1px solid #e5e7eb' }}>Update group name</td>
                      <td style={{ padding: '0.75rem', textAlign: 'center', border: '1px solid #e5e7eb', color: '#10b981', fontWeight: '600' }}>✅</td>
                      <td style={{ padding: '0.75rem', textAlign: 'center', border: '1px solid #e5e7eb', color: '#10b981', fontWeight: '600' }}>✅</td>
                      <td style={{ padding: '0.75rem', border: '1px solid #e5e7eb' }}>-</td>
                    </tr>
                    <tr style={{ backgroundColor: '#f9fafb' }}>
                      <td style={{ padding: '0.75rem', border: '1px solid #e5e7eb' }}>Update contribution amount</td>
                      <td style={{ padding: '0.75rem', textAlign: 'center', border: '1px solid #e5e7eb', color: '#ef4444', fontWeight: '600' }}>❌</td>
                      <td style={{ padding: '0.75rem', textAlign: 'center', border: '1px solid #e5e7eb', color: '#10b981', fontWeight: '600' }}>✅</td>
                      <td style={{ padding: '0.75rem', border: '1px solid #e5e7eb' }}>Critical setting</td>
                    </tr>
                    <tr>
                      <td style={{ padding: '0.75rem', border: '1px solid #e5e7eb' }}>Update max members</td>
                      <td style={{ padding: '0.75rem', textAlign: 'center', border: '1px solid #e5e7eb', color: '#ef4444', fontWeight: '600' }}>❌</td>
                      <td style={{ padding: '0.75rem', textAlign: 'center', border: '1px solid #e5e7eb', color: '#10b981', fontWeight: '600' }}>✅</td>
                      <td style={{ padding: '0.75rem', border: '1px solid #e5e7eb' }}>Critical setting</td>
                    </tr>
                    <tr style={{ backgroundColor: '#f9fafb' }}>
                      <td style={{ padding: '0.75rem', border: '1px solid #e5e7eb' }}>Update deadlines</td>
                      <td style={{ padding: '0.75rem', textAlign: 'center', border: '1px solid #e5e7eb', color: '#10b981', fontWeight: '600' }}>✅</td>
                      <td style={{ padding: '0.75rem', textAlign: 'center', border: '1px solid #e5e7eb', color: '#10b981', fontWeight: '600' }}>✅</td>
                      <td style={{ padding: '0.75rem', border: '1px solid #e5e7eb' }}>-</td>
                    </tr>
                    <tr>
                      <td style={{ padding: '0.75rem', border: '1px solid #e5e7eb' }}>Update other settings</td>
                      <td style={{ padding: '0.75rem', textAlign: 'center', border: '1px solid #e5e7eb', color: '#10b981', fontWeight: '600' }}>✅</td>
                      <td style={{ padding: '0.75rem', textAlign: 'center', border: '1px solid #e5e7eb', color: '#10b981', fontWeight: '600' }}>✅</td>
                      <td style={{ padding: '0.75rem', border: '1px solid #e5e7eb' }}>Notes, chat, wishlist, etc.</td>
                    </tr>
                    <tr style={{ backgroundColor: '#f9fafb' }}>
                      <td style={{ padding: '0.75rem', border: '1px solid #e5e7eb' }}>Approve/reject members</td>
                      <td style={{ padding: '0.75rem', textAlign: 'center', border: '1px solid #e5e7eb', color: '#10b981', fontWeight: '600' }}>✅</td>
                      <td style={{ padding: '0.75rem', textAlign: 'center', border: '1px solid #e5e7eb', color: '#10b981', fontWeight: '600' }}>✅</td>
                      <td style={{ padding: '0.75rem', border: '1px solid #e5e7eb' }}>-</td>
                    </tr>
                    <tr>
                      <td style={{ padding: '0.75rem', border: '1px solid #e5e7eb' }}>Remove regular members</td>
                      <td style={{ padding: '0.75rem', textAlign: 'center', border: '1px solid #e5e7eb', color: '#10b981', fontWeight: '600' }}>✅</td>
                      <td style={{ padding: '0.75rem', textAlign: 'center', border: '1px solid #e5e7eb', color: '#10b981', fontWeight: '600' }}>✅</td>
                      <td style={{ padding: '0.75rem', border: '1px solid #e5e7eb' }}>-</td>
                    </tr>
                    <tr style={{ backgroundColor: '#f9fafb' }}>
                      <td style={{ padding: '0.75rem', border: '1px solid #e5e7eb' }}>Remove co-admins</td>
                      <td style={{ padding: '0.75rem', textAlign: 'center', border: '1px solid #e5e7eb', color: '#ef4444', fontWeight: '600' }}>❌</td>
                      <td style={{ padding: '0.75rem', textAlign: 'center', border: '1px solid #e5e7eb', color: '#10b981', fontWeight: '600' }}>✅</td>
                      <td style={{ padding: '0.75rem', border: '1px solid #e5e7eb' }}>Co-admins cannot remove other co-admins</td>
                    </tr>
                    <tr>
                      <td style={{ padding: '0.75rem', border: '1px solid #e5e7eb' }}>Remove admins</td>
                      <td style={{ padding: '0.75rem', textAlign: 'center', border: '1px solid #e5e7eb', color: '#ef4444', fontWeight: '600' }}>❌</td>
                      <td style={{ padding: '0.75rem', textAlign: 'center', border: '1px solid #e5e7eb', color: '#ef4444', fontWeight: '600' }}>❌</td>
                      <td style={{ padding: '0.75rem', border: '1px solid #e5e7eb' }}>No one can remove admins</td>
                    </tr>
                    <tr style={{ backgroundColor: '#f9fafb' }}>
                      <td style={{ padding: '0.75rem', border: '1px solid #e5e7eb' }}>Promote/demote members</td>
                      <td style={{ padding: '0.75rem', textAlign: 'center', border: '1px solid #e5e7eb', color: '#ef4444', fontWeight: '600' }}>❌</td>
                      <td style={{ padding: '0.75rem', textAlign: 'center', border: '1px solid #e5e7eb', color: '#10b981', fontWeight: '600' }}>✅</td>
                      <td style={{ padding: '0.75rem', border: '1px solid #e5e7eb' }}>Only admins can change roles</td>
                    </tr>
                    <tr>
                      <td style={{ padding: '0.75rem', border: '1px solid #e5e7eb' }}>Confirm/reject contributions</td>
                      <td style={{ padding: '0.75rem', textAlign: 'center', border: '1px solid #e5e7eb', color: '#10b981', fontWeight: '600' }}>✅</td>
                      <td style={{ padding: '0.75rem', textAlign: 'center', border: '1px solid #e5e7eb', color: '#10b981', fontWeight: '600' }}>✅</td>
                      <td style={{ padding: '0.75rem', border: '1px solid #e5e7eb' }}>Subscription & general groups only</td>
                    </tr>
                    <tr style={{ backgroundColor: '#f9fafb' }}>
                      <td style={{ padding: '0.75rem', border: '1px solid #e5e7eb' }}>Close group</td>
                      <td style={{ padding: '0.75rem', textAlign: 'center', border: '1px solid #e5e7eb', color: '#ef4444', fontWeight: '600' }}>❌</td>
                      <td style={{ padding: '0.75rem', textAlign: 'center', border: '1px solid #e5e7eb', color: '#10b981', fontWeight: '600' }}>✅*</td>
                      <td style={{ padding: '0.75rem', border: '1px solid #e5e7eb' }}>*Only creator or system admin</td>
                    </tr>
                    <tr>
                      <td style={{ padding: '0.75rem', border: '1px solid #e5e7eb' }}>Reopen group</td>
                      <td style={{ padding: '0.75rem', textAlign: 'center', border: '1px solid #e5e7eb', color: '#ef4444', fontWeight: '600' }}>❌</td>
                      <td style={{ padding: '0.75rem', textAlign: 'center', border: '1px solid #e5e7eb', color: '#10b981', fontWeight: '600' }}>✅*</td>
                      <td style={{ padding: '0.75rem', border: '1px solid #e5e7eb' }}>*Only creator or system admin</td>
                    </tr>
                    <tr style={{ backgroundColor: '#f9fafb' }}>
                      <td style={{ padding: '0.75rem', border: '1px solid #e5e7eb' }}>Delete group</td>
                      <td style={{ padding: '0.75rem', textAlign: 'center', border: '1px solid #e5e7eb', color: '#ef4444', fontWeight: '600' }}>❌</td>
                      <td style={{ padding: '0.75rem', textAlign: 'center', border: '1px solid #e5e7eb', color: '#ef4444', fontWeight: '600' }}>❌</td>
                      <td style={{ padding: '0.75rem', border: '1px solid #e5e7eb' }}>System admin only</td>
                    </tr>
                    <tr>
                      <td style={{ padding: '0.75rem', border: '1px solid #e5e7eb' }}>Leave group</td>
                      <td style={{ padding: '0.75rem', textAlign: 'center', border: '1px solid #e5e7eb', color: '#10b981', fontWeight: '600' }}>✅</td>
                      <td style={{ padding: '0.75rem', textAlign: 'center', border: '1px solid #e5e7eb', color: '#f59e0b', fontWeight: '600' }}>⚠️</td>
                      <td style={{ padding: '0.75rem', border: '1px solid #e5e7eb' }}>Admins can only leave if not the only admin</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="resource-section">
              <h2>Important Notes</h2>
              
              <div style={{ marginTop: '1.5rem', padding: '1.5rem', backgroundColor: '#f0f9ff', borderRadius: '8px', borderLeft: '4px solid #007bff' }}>
                <h3 style={{ marginTop: '0' }}>1. Co-admins can leave groups freely</h3>
                <p style={{ marginBottom: '0' }}>
                  Unlike admins, co-admins have no restrictions on leaving groups. Admins can only leave if they are not the only admin in the group.
                </p>
              </div>

              <div style={{ marginTop: '1.5rem', padding: '1.5rem', backgroundColor: '#f0f9ff', borderRadius: '8px', borderLeft: '4px solid #007bff' }}>
                <h3 style={{ marginTop: '0' }}>2. Bank accounts are personal</h3>
                <p style={{ marginBottom: '0' }}>
                  Co-admins can manage their own bank accounts, but group manual payment displays only show the admin's bank account. Members see the admin's account details for manual payments.
                </p>
              </div>

              <div style={{ marginTop: '1.5rem', padding: '1.5rem', backgroundColor: '#f0f9ff', borderRadius: '8px', borderLeft: '4px solid #007bff' }}>
                <h3 style={{ marginTop: '0' }}>3. Progressive permissions</h3>
                <p style={{ marginBottom: '0' }}>
                  Co-admins have more permissions than regular members but fewer than admins, creating a helpful middle tier for group management. This allows admins to delegate day-to-day tasks while maintaining control over critical settings.
                </p>
              </div>

              <div style={{ marginTop: '1.5rem', padding: '1.5rem', backgroundColor: '#f0f9ff', borderRadius: '8px', borderLeft: '4px solid #007bff' }}>
                <h3 style={{ marginTop: '0' }}>4. Role hierarchy</h3>
                <p style={{ marginBottom: '0', fontWeight: '600' }}>
                  Admin &gt; Co-Admin &gt; Member
                </p>
              </div>
            </div>

            <div className="cta-box">
              <h2>Need More Information?</h2>
              <p>Learn more about group management and admin features in GroupFund.</p>
              <div className="cta-buttons">
                <Link to="/faq" className="btn btn-primary btn-large">View FAQ →</Link>
                <Link to="/help" className="btn btn-secondary btn-large">Help Center →</Link>
                <Link to="/app-rules" className="btn btn-secondary btn-large">App Rules →</Link>
              </div>
            </div>

            <div className="related-links">
              <h3>Related Guides</h3>
              <div className="related-links-grid">
                <Link to="/faq">FAQ →</Link>
                <Link to="/help">Help Center →</Link>
                <Link to="/app-rules">App Rules →</Link>
                <Link to="/glossary">Glossary →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
