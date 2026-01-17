import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function UsingWishlistsInGeneralGroupsPage() {
  useEffect(() => {
    const webPageStructuredData = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Using Wishlists in General Groups - GroupFund",
      "description": "Complete guide to using wishlists in General Groups for weddings, baby showers, graduations, and other events. Learn how to enable wishlists, create gift lists, and coordinate group gifts effectively.",
      "url": "https://www.groupfund.app/resources/using-wishlists-in-general-groups"
    }
    const existingScript = document.querySelector('script[data-general-wishlist-schema]')
    if (existingScript) existingScript.remove()
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.setAttribute('data-general-wishlist-schema', 'true')
    script.textContent = JSON.stringify(webPageStructuredData)
    document.head.appendChild(script)
    return () => {
      const scriptToRemove = document.querySelector('script[data-general-wishlist-schema]')
      if (scriptToRemove) scriptToRemove.remove()
    }
  }, [])

  return (
    <>
      <SEO
        title="Using Wishlists in General Groups - Event Gift Coordination Guide"
        description="Learn how to use wishlists in General Groups for weddings, baby showers, graduations, and other events. Complete guide to enabling wishlists, creating gift lists, claiming items, and coordinating group gifts effectively."
        keywords="general groups wishlist, wedding wishlist, baby shower wishlist, event wishlist, gift registry, group gift coordination, wedding registry, baby registry, graduation gifts, event gift planning"
        canonical="https://www.groupfund.app/resources/using-wishlists-in-general-groups"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Using Wishlists in General Groups</h1>
          <p className="page-subtitle">
            Complete guide to coordinating group gifts for weddings, baby showers, graduations, and events
          </p>
        </div>
      </section>

      <section className="resource-detail-page">
        <div className="container">
          <div className="resource-content">
            <div className="resource-meta">
              <span className="resource-category">Best Practices</span>
              <span className="resource-read-time">8 min read</span>
            </div>

            <div className="resource-section">
              <h2>Overview</h2>
              <p>
                Wishlists in General Groups allow admins to create and share gift lists for events like weddings, baby showers, graduations, housewarmings, and other special occasions. This feature helps coordinate group gift giving, prevents duplicate gifts, and ensures recipients receive items they actually want.
              </p>
              <p style={{ marginTop: '1rem', padding: '1rem', backgroundColor: '#f0f9ff', borderRadius: '6px' }}>
                <strong>Note:</strong> Wishlists are optional for General Groups. You can enable or disable wishlist functionality when creating the group or edit group settings later to turn it on or off.
              </p>
            </div>

            <div className="resource-section">
              <h2>When to Use Wishlists in General Groups</h2>
              <p>Wishlists are perfect for General Groups when organizing:</p>
              <ul className="resource-list">
                <li><strong>Weddings:</strong> Create a wedding registry with items you need for your new home together</li>
                <li><strong>Baby Showers:</strong> List baby essentials, nursery items, and gifts for expecting parents</li>
                <li><strong>Graduations:</strong> Share items you need as you start your career or continue education</li>
                <li><strong>Housewarmings:</strong> Create a list of household items, furniture, or decor you need</li>
                <li><strong>Anniversaries:</strong> Coordinate group gifts for milestone celebrations</li>
                <li><strong>Engagement Parties:</strong> Share items for couples preparing for marriage</li>
                <li><strong>Retirement Parties:</strong> List items for someone's retirement celebration</li>
                <li><strong>Any Event:</strong> Use wishlists for any occasion where you want coordinated gift giving</li>
              </ul>
            </div>

            <div className="resource-section">
              <h2>Enabling Wishlists in Your General Group</h2>
              
              <h3>When Creating a New General Group</h3>
              <p>When creating a General Group:</p>
              <ol className="resource-list">
                <li>Select "General Group" as the group type</li>
                <li>Fill in your group details (name, contribution amount, etc.)</li>
                <li>Look for the wishlist option in group settings</li>
                <li>Enable wishlist functionality if you want gift coordination</li>
                <li>Complete group creation</li>
              </ol>

              <h3>Enabling Wishlists in Existing Groups</h3>
              <p>If you already have a General Group without wishlists:</p>
              <ol className="resource-list">
                <li>Go to your General Group settings</li>
                <li>Find the "Wishlist enabled/disabled" option</li>
                <li>Toggle it to enable wishlists</li>
                <li>Save your changes</li>
                <li>Start adding items to your wishlist</li>
              </ol>

              <p style={{ marginTop: '1rem', padding: '1rem', backgroundColor: '#fff3cd', borderRadius: '6px' }}>
                <strong>Tip:</strong> You can enable or disable wishlists at any time. If you don't need gift coordination, you can leave it disabled. You can always enable it later if your needs change.
              </p>
            </div>

            <div className="resource-section">
              <h2>Creating Your Wishlist</h2>
              <p>Once wishlists are enabled, you (as the admin) can create and manage your wishlist:</p>
              
              <h3>Adding Items</h3>
              <ul className="resource-list">
                <li><strong>Item Name:</strong> Give each item a clear, descriptive name</li>
                <li><strong>Pictures:</strong> Add photos of items so members know exactly what to get</li>
                <li><strong>Price:</strong> Include the price so members know the cost</li>
                <li><strong>Quantity:</strong> Specify how many of each item you need (e.g., 4 dinner plates, 2 sets of towels)</li>
                <li><strong>Description:</strong> Add optional details like brand, size, color, or where to buy</li>
              </ul>

              <h3>Best Practices for Building Your Wishlist</h3>
              <ul className="resource-list">
                <li><strong>Variety in Price Points:</strong> Include items at different price ranges so everyone can participate</li>
                <li><strong>Practical Items:</strong> For weddings and housewarmings, include everyday items you actually need</li>
                <li><strong>Specific Details:</strong> Be specific about brands, sizes, colors, and quantities to avoid confusion</li>
                <li><strong>High-Quality Photos:</strong> Clear images help members identify exactly what you want</li>
                <li><strong>Regular Updates:</strong> Add new items as you think of them and remove items you've already received</li>
                <li><strong>Mix of Items:</strong> Combine practical necessities with fun or special items</li>
              </ul>
            </div>

            <div className="resource-section">
              <h2>How Group Members Use Your Wishlist</h2>
              
              <h3>Viewing the Wishlist</h3>
              <p>Once you've added items to your wishlist, all active group members can:</p>
              <ul className="resource-list">
                <li>View all available items in your wishlist</li>
                <li>See item details including pictures, prices, and quantities</li>
                <li>Check which items have been claimed and which are still available</li>
                <li>See how many of each item are needed vs. already claimed</li>
              </ul>

              <h3>Claiming Items</h3>
              <p>When members want to gift an item:</p>
              <ol className="resource-list">
                <li>They browse your wishlist and find items they want to purchase</li>
                <li>They claim the item(s) they plan to gift</li>
                <li>The item shows as "claimed" so others know it's taken</li>
                <li>Other members can see what's been claimed and choose different items</li>
                <li>This prevents duplicate gifts and coordinates gift giving</li>
              </ol>

              <p style={{ marginTop: '1rem', padding: '1rem', backgroundColor: '#d1fae5', borderRadius: '8px', borderLeft: '4px solid #10b981' }}>
                <strong>✅ Benefit:</strong> The claiming system ensures everyone can see what's already been claimed, preventing duplicate gifts and making coordination effortless.
              </p>
            </div>

            <div className="resource-section">
              <h2>Tracking Claims and Managing Your Wishlist</h2>
              
              <h3>Monitoring Claims</h3>
              <p>As the admin, you can:</p>
              <ul className="resource-list">
                <li><strong>View Claim Status:</strong> See which items have been claimed and by whom</li>
                <li><strong>Check Quantities:</strong> See how many items are needed vs. claimed (e.g., "2 of 4 claimed")</li>
                <li><strong>Track Availability:</strong> Know which items are still available for claiming</li>
                <li><strong>See Member Activity:</strong> View which members have claimed which items</li>
              </ul>

              <h3>Marking Items as Done</h3>
              <p>When you receive a gifted item:</p>
              <ol className="resource-list">
                <li>Mark the item as "done" in your wishlist</li>
                <li>This prevents new claims on that item</li>
                <li>Helps you track what you've received vs. what's still coming</li>
                <li>Keeps your wishlist current and accurate</li>
              </ol>

              <h3>Updating Your Wishlist</h3>
              <p>Keep your wishlist current by:</p>
              <ul className="resource-list">
                <li><strong>Adding New Items:</strong> Add items as you think of them</li>
                <li><strong>Removing Items:</strong> Remove items you no longer need or want</li>
                <li><strong>Updating Details:</strong> Edit item information like price, quantity, or description</li>
                <li><strong>Marking Received:</strong> Mark items as done when you receive them</li>
              </ul>
            </div>

            <div className="resource-section">
              <h2>Use Case Examples</h2>
              
              <div style={{ marginTop: '1.5rem', padding: '1.5rem', backgroundColor: '#f9fafb', borderRadius: '8px' }}>
                <h3 style={{ marginTop: '0' }}>💒 Wedding Wishlist</h3>
                <p><strong>Items to include:</strong></p>
                <ul style={{ marginLeft: '1.5rem' }}>
                  <li>Kitchen essentials (cookware, dinnerware, utensils)</li>
                  <li>Home decor (bedding, towels, artwork)</li>
                  <li>Appliances (coffee maker, toaster, blender)</li>
                  <li>Electronics (smart speakers, security cameras)</li>
                  <li>Furniture or home improvement items</li>
                  <li>Honeymoon fund contributions (if applicable)</li>
                </ul>
              </div>

              <div style={{ marginTop: '1.5rem', padding: '1.5rem', backgroundColor: '#f9fafb', borderRadius: '8px' }}>
                <h3 style={{ marginTop: '0' }}>👶 Baby Shower Wishlist</h3>
                <p><strong>Items to include:</strong></p>
                <ul style={{ marginLeft: '1.5rem' }}>
                  <li>Nursery essentials (crib sheets, blankets, mobiles)</li>
                  <li>Baby gear (strollers, car seats, high chairs)</li>
                  <li>Clothing (newborn and 0-6 months sizes)</li>
                  <li>Feeding supplies (bottles, breast pumps, bibs)</li>
                  <li>Diapers and baby care items</li>
                  <li>Books, toys, and developmental items</li>
                </ul>
              </div>

              <div style={{ marginTop: '1.5rem', padding: '1.5rem', backgroundColor: '#f9fafb', borderRadius: '8px' }}>
                <h3 style={{ marginTop: '0' }}>🎓 Graduation Wishlist</h3>
                <p><strong>Items to include:</strong></p>
                <ul style={{ marginLeft: '1.5rem' }}>
                  <li>Professional clothing and accessories</li>
                  <li>Electronics (laptop accessories, office supplies)</li>
                  <li>Career tools (briefcase, portfolio, business cards)</li>
                  <li>Home essentials (for moving out or starting a new job)</li>
                  <li>Travel items (luggage, travel accessories)</li>
                  <li>Gift cards for specific stores or services</li>
                </ul>
              </div>

              <div style={{ marginTop: '1.5rem', padding: '1.5rem', backgroundColor: '#f9fafb', borderRadius: '8px' }}>
                <h3 style={{ marginTop: '0' }}>🏠 Housewarming Wishlist</h3>
                <p><strong>Items to include:</strong></p>
                <ul style={{ marginLeft: '1.5rem' }}>
                  <li>Home decor and artwork</li>
                  <li>Kitchen and dining essentials</li>
                  <li>Storage solutions and organization items</li>
                  <li>Garden and outdoor supplies</li>
                  <li>Cleaning supplies and tools</li>
                  <li>Furniture or home improvement gift cards</li>
                </ul>
              </div>
            </div>

            <div className="resource-section">
              <h2>Tips for Effective Wishlist Management</h2>
              
              <h3>For Admins (Wishlist Creators)</h3>
              <ul className="resource-list">
                <li><strong>Start Early:</strong> Create your wishlist well before the event so members have time to browse and claim items</li>
                <li><strong>Be Specific:</strong> Include clear details, photos, and links when possible</li>
                <li><strong>Update Regularly:</strong> Keep your wishlist current by adding new items and marking received items</li>
                <li><strong>Thank Members:</strong> Express gratitude when items are claimed or received</li>
                <li><strong>Communicate:</strong> Let members know your wishlist is available and encourage them to use it</li>
                <li><strong>Include Variety:</strong> Offer items at different price points so everyone can participate</li>
              </ul>

              <h3>For Group Members (Gift Givers)</h3>
              <ul className="resource-list">
                <li><strong>Claim Early:</strong> Claim items you want to gift before they're taken</li>
                <li><strong>Respect Claims:</strong> Don't purchase items that others have already claimed</li>
                <li><strong>Check Details:</strong> Review item specifications (size, color, brand) before purchasing</li>
                <li><strong>Communicate:</strong> Let the admin know if you need to change your claim or if there are issues</li>
                <li><strong>Mark as Gifted:</strong> Follow up after giving to ensure the item was received</li>
              </ul>
            </div>

            <div className="resource-section">
              <h2>Differences from Birthday Wishlists</h2>
              <p>While wishlists in General Groups work similarly to Birthday Groups, there are some key differences:</p>
              <ul className="resource-list">
                <li><strong>Optional Feature:</strong> Wishlists are optional for General Groups (can be enabled/disabled), while they're always available in Birthday Groups</li>
                <li><strong>Admin-Created:</strong> In General Groups, the admin creates the wishlist (not the celebrant), since contributions go to the admin</li>
                <li><strong>Event-Specific:</strong> General Group wishlists are designed for events like weddings, baby showers, graduations, rather than individual birthdays</li>
                <li><strong>More Flexibility:</strong> General Groups allow you to turn wishlists on or off based on your needs</li>
              </ul>
            </div>

            <div className="resource-section">
              <h2>Common Questions</h2>
              
              <h3>Can I disable wishlists after enabling them?</h3>
              <p>
                Yes! You can enable or disable wishlists in your General Group at any time through group settings. If you disable wishlists, existing wishlist items will be hidden but not deleted - you can re-enable wishlists later to access them again.
              </p>

              <h3>Can co-admins manage the wishlist?</h3>
              <p>
                Wishlist management is typically handled by the group admin. Co-admins may have limited access depending on group settings. Check your group's specific permissions to see who can manage wishlists.
              </p>

              <h3>What if someone doesn't use the wishlist?</h3>
              <p>
                That's okay! Wishlists are a helpful tool for coordination, but members can still contribute without claiming items. The wishlist is meant to help coordinate gifts, not require their use.
              </p>

              <h3>Can I add items after the event has started?</h3>
              <p>
                Yes, you can add, edit, or remove items from your wishlist at any time. This is especially helpful if you receive items early and want to add new items or if your needs change.
              </p>
            </div>

            <div className="cta-box">
              <h2>Ready to Create Your Event Wishlist?</h2>
              <p>Start organizing group gifts for your wedding, baby shower, graduation, or event with wishlists in General Groups.</p>
              <div className="cta-buttons">
                <Link to="/resources/creating-general-groups-for-events" className="btn btn-primary btn-large">Create a General Group →</Link>
                <Link to="/resources" className="btn btn-secondary btn-large">View All Resources →</Link>
              </div>
            </div>

            <div className="related-links">
              <h3>Related Guides</h3>
              <div className="related-links-grid">
                <Link to="/resources/creating-general-groups-for-events">Creating General Groups for Events →</Link>
                <Link to="/resources/using-birthday-wishlists">Using Birthday Wishlists →</Link>
                <Link to="/resources/managing-event-contributions">Managing Event Contributions →</Link>
                <Link to="/use-cases/weddings">Wedding Use Cases →</Link>
                <Link to="/use-cases/baby-showers">Baby Shower Use Cases →</Link>
                <Link to="/resources">View All Resources →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
