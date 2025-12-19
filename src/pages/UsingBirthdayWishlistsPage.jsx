import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function UsingBirthdayWishlistsPage() {
  // Add HowTo structured data
  useEffect(() => {
    const howToStructuredData = {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "How to Use Birthday Wishlists for Group Gift Giving",
      "description": "A complete guide to creating and using birthday wishlists for coordinated group gift giving",
      "image": "https://groupfund.app/og-image.jpg",
      "totalTime": "PT10M",
      "estimatedCost": {
        "@type": "MonetaryAmount",
        "currency": "USD",
        "value": "0"
      },
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Create Your Wishlist",
          "text": "Add items you want for your birthday. Include names, pictures, prices, and quantities. Add variety at different price points so everyone can participate."
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Share with Group Members",
          "text": "Your wishlist is automatically visible to all group members who share at least one active group with you. No need to manually share links."
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Group Members Claim Items",
          "text": "Group members can view your wishlist and claim items they want to purchase. This prevents duplicates and coordinates gift giving."
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "Track Claims and Availability",
          "text": "See in real-time what's been claimed and what's still available. View claim counts and remaining quantities for each item."
        },
        {
          "@type": "HowToStep",
          "position": 5,
          "name": "Mark Items as Done",
          "text": "When you receive an item, mark it as done. This prevents new claims and helps you track what you've received."
        }
      ]
    }

    // Remove existing HowTo structured data if any
    const existingScript = document.querySelector('script[data-howto-schema]')
    if (existingScript) {
      existingScript.remove()
    }

    // Add new structured data
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.setAttribute('data-howto-schema', 'true')
    script.textContent = JSON.stringify(howToStructuredData)
    document.head.appendChild(script)

    return () => {
      const scriptToRemove = document.querySelector('script[data-howto-schema]')
      if (scriptToRemove) {
        scriptToRemove.remove()
      }
    }
  }, [])

  return (
    <>
      <SEO
        title="How to Use Birthday Wishlists - Complete Guide for Group Gift Giving"
        description="Learn how to create and use birthday wishlists for coordinated group gift giving in Birthday Groups. Step-by-step guide to sharing wishlists, claiming items, and avoiding duplicate gifts. Note: Wishlists are available for Birthday Groups only."
        keywords="birthday wishlists, how to use wishlists, group gift giving, birthday gift coordination, wishlist guide, gift giving tips, birthday groups"
        canonical="https://groupfund.app/resources/using-birthday-wishlists"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">How to Use Birthday Wishlists</h1>
          <p className="page-subtitle">
            A complete guide to creating and using birthday wishlists for coordinated group gift giving (available for Birthday Groups)
          </p>
        </div>
      </section>

      <section className="resource-detail-page">
        <div className="container">
          <div className="resource-content">
            <div className="resource-meta">
              <span className="resource-category">Best Practices</span>
              <span className="resource-read-time">10 min read</span>
            </div>

            <div className="resource-section">
              <h2>Introduction</h2>
              <p>
                Birthday wishlists transform group gift giving from a guessing game into a coordinated, thoughtful process. Available for Birthday Groups in GroupFund, wishlists let you share exactly what you want while helping group members coordinate their purchases. Instead of receiving duplicate gifts or items you don't need, wishlists ensure everyone gets what they want. This guide will walk you through everything you need to know about using birthday wishlists effectively.
              </p>
            </div>

            <div className="resource-section">
              <h2>What Are Birthday Wishlists?</h2>
              <p>
                Birthday wishlists are curated lists of items you want for your birthday. In GroupFund, wishlists are profile-level, meaning they're visible to all group members who share at least one active group with you. This makes gift coordination seamless and eliminates the need for endless group chat messages.
              </p>
              <p>
                Key features of birthday wishlists include:
              </p>
              <ul className="resource-list">
                <li><strong>Item Details:</strong> Add items with names, pictures, prices, and quantities</li>
                <li><strong>Claim System:</strong> Group members can claim items they want to purchase</li>
                <li><strong>Availability Tracking:</strong> See "X taken, Y remaining" for each item</li>
                <li><strong>Done Status:</strong> Mark items as done when received</li>
                <li><strong>Group-Based Access:</strong> Only group members can view and claim items</li>
              </ul>
            </div>

            <div className="resource-section">
              <h2>For Celebrants: Creating Your Wishlist</h2>
              
              <h3>Step 1: Add Items to Your Wishlist</h3>
              <p>
                Start by adding items you want for your birthday. When adding items:
              </p>
              <ul className="resource-list">
                <li><strong>Be Specific:</strong> Use clear, descriptive names (e.g., "Nike Air Max 270 - Size 9" not just "shoes")</li>
                <li><strong>Add Pictures:</strong> Include photos so people know exactly what they're buying</li>
                <li><strong>Include Prices:</strong> Add approximate prices when possible to help people budget</li>
                <li><strong>Set Quantities:</strong> Specify if you need multiple of the same item</li>
                <li><strong>Add Links:</strong> Provide links to where items can be purchased (optional but helpful)</li>
              </ul>

              <h3>Step 2: Add Variety at Different Price Points</h3>
              <p>
                Include items at various price points so everyone can participate:
              </p>
              <ul className="resource-list">
                <li><strong>Budget-Friendly:</strong> Items under $20 or ₦5,000 for those on tight budgets</li>
                <li><strong>Mid-Range:</strong> Items in the $20-$50 or ₦5,000-₦15,000 range</li>
                <li><strong>Premium Items:</strong> Larger items that multiple people can contribute toward</li>
              </ul>
              <p>
                This ensures everyone in your group can participate regardless of their budget.
              </p>

              <h3>Step 3: Keep Your Wishlist Updated</h3>
              <p>
                Regularly update your wishlist to keep it current:
              </p>
              <ul className="resource-list">
                <li><strong>Mark Items as Done:</strong> When you receive an item, mark it as done to prevent new claims</li>
                <li><strong>Add New Items:</strong> Update your list as your preferences change</li>
                <li><strong>Adjust Quantities:</strong> Update quantities based on what's been claimed</li>
                <li><strong>Remove Unavailable Items:</strong> Remove items that are no longer available or wanted</li>
              </ul>
            </div>

            <div className="resource-section">
              <h2>For Group Members: Claiming and Purchasing Items</h2>
              
              <h3>Step 1: View the Wishlist</h3>
              <p>
                When a group member has a birthday coming up, you can view their wishlist. The wishlist shows:
              </p>
              <ul className="resource-list">
                <li><strong>All Available Items:</strong> Everything the celebrant wants</li>
                <li><strong>Claim Status:</strong> Which items have been claimed and by whom</li>
                <li><strong>Remaining Quantities:</strong> How many of each item are still needed</li>
                <li><strong>Item Details:</strong> Pictures, prices, and descriptions</li>
              </ul>

              <h3>Step 2: Claim Items Before Purchasing</h3>
              <p>
                Always claim an item before purchasing it. This is crucial because:
              </p>
              <ul className="resource-list">
                <li><strong>Prevents Duplicates:</strong> Others can see what you've claimed</li>
                <li><strong>Coordinates Purchases:</strong> Helps distribute gifts evenly</li>
                <li><strong>Shows Availability:</strong> Updates the "remaining" count for others</li>
                <li><strong>Reserves Your Choice:</strong> Ensures you get to buy the item you want</li>
              </ul>
              <p>
                <strong>Important:</strong> Don't purchase items that others have already claimed. Always check the claim status before buying.
              </p>

              <h3>Step 3: Purchase and Update Status</h3>
              <p>
                After claiming an item:
              </p>
              <ul className="resource-list">
                <li><strong>Purchase the Item:</strong> Buy it from the store or website</li>
                <li><strong>Confirm Purchase:</strong> The system tracks that you've claimed it</li>
                <li><strong>Respect Claims:</strong> Don't buy items others have claimed, even if you see them in stores</li>
              </ul>
            </div>

            <div className="resource-section">
              <h2>Best Practices for Effective Wishlists</h2>
              
              <h3>For Celebrants</h3>
              <ul className="resource-list">
                <li><strong>Be Specific:</strong> Don't just say "something nice" - include exact items</li>
                <li><strong>Include Variety:</strong> Add items at different price points</li>
                <li><strong>Update Regularly:</strong> Keep your list current and mark received items</li>
                <li><strong>Don't Overwhelm:</strong> Include 10-20 items rather than hundreds</li>
                <li><strong>Add Context:</strong> Include pictures, prices, and links when possible</li>
                <li><strong>Set Priorities:</strong> Add your most wanted items first</li>
              </ul>

              <h3>For Group Members</h3>
              <ul className="resource-list">
                <li><strong>Claim Early:</strong> Popular items get claimed quickly</li>
                <li><strong>Always Claim First:</strong> Never purchase without claiming first</li>
                <li><strong>Respect Claims:</strong> Don't buy items others have claimed</li>
                <li><strong>Check Availability:</strong> Look at remaining quantities before claiming</li>
                <li><strong>Communicate:</strong> Ask questions if you're unsure about an item</li>
                <li><strong>Update Status:</strong> Mark items as purchased when you buy them</li>
              </ul>
            </div>

            <div className="resource-section">
              <h2>Common Scenarios and Solutions</h2>
              
              <h3>Scenario 1: Multiple People Want the Same Item</h3>
              <p>
                If multiple people want to buy the same item, the first person to claim it gets priority. Others should choose different items from the wishlist. If the celebrant needs multiple of the same item, they can set the quantity accordingly.
              </p>

              <h3>Scenario 2: Item Is No Longer Available</h3>
              <p>
                If an item becomes unavailable, the celebrant should remove it from their wishlist or mark it as unavailable. If you've already claimed an item that becomes unavailable, communicate with the celebrant about alternatives.
              </p>

              <h3>Scenario 3: You Want to Buy Something Not on the List</h3>
              <p>
                While you can always buy something not on the wishlist, it's better to check with the celebrant first or choose from their wishlist. The wishlist exists to ensure people get what they want.
              </p>

              <h3>Scenario 4: Celebrant Receives Item Before You Buy It</h3>
              <p>
                If the celebrant receives an item from someone else before you purchase it, they should mark it as done. This will prevent you from buying a duplicate. Always check the wishlist status before making a purchase.
              </p>
            </div>

            <div className="resource-section">
              <h2>Benefits of Using Wishlists</h2>
              
              <h3>For Celebrants</h3>
              <ul className="resource-list">
                <li><strong>Get What You Want:</strong> Receive gifts you'll actually use and appreciate</li>
                <li><strong>Avoid Duplicates:</strong> No more receiving three of the same item</li>
                <li><strong>Track Gifts:</strong> See what's been claimed and what you'll receive</li>
                <li><strong>Set Expectations:</strong> Help people understand your preferences</li>
                <li><strong>Save Time:</strong> No need to return or exchange unwanted gifts</li>
              </ul>

              <h3>For Group Members</h3>
              <ul className="resource-list">
                <li><strong>Know What to Buy:</strong> See exactly what the celebrant wants</li>
                <li><strong>Avoid Duplicates:</strong> Coordinate purchases with other group members</li>
                <li><strong>Budget Planning:</strong> See prices and plan your gift budget</li>
                <li><strong>Confidence:</strong> Know your gift will be appreciated</li>
                <li><strong>Easy Coordination:</strong> No need for multiple messages or group chats</li>
              </ul>
            </div>

            <div className="resource-section">
              <h2>Tips for Success</h2>
              <ul className="resource-list">
                <li><strong>Start Early:</strong> Create your wishlist well before your birthday</li>
                <li><strong>Be Realistic:</strong> Include items that are actually available and affordable</li>
                <li><strong>Update Frequently:</strong> Keep your wishlist current as items are claimed</li>
                <li><strong>Communicate:</strong> If you have questions, ask the celebrant</li>
                <li><strong>Respect the System:</strong> Always claim before purchasing</li>
                <li><strong>Be Flexible:</strong> If your first choice is claimed, choose another item</li>
              </ul>
            </div>

            <div className="cta-box">
              <h2>Ready to Start Using Birthday Wishlists?</h2>
              <p>GroupFund makes creating and managing birthday wishlists effortless for Birthday Groups. Share your preferences, coordinate gifts, and ensure everyone gets what they want. Note: Wishlists are available for Birthday Groups only.</p>
              <div className="cta-buttons">
                <Link to="/waitlist" className="btn btn-primary btn-large">Start Free with GroupFund</Link>
                <Link to="/how-it-works" className="btn btn-secondary btn-large">See How It Works</Link>
              </div>
            </div>

            <div className="related-links">
              <h3>Related Guides</h3>
              <div className="related-links-grid">
                <Link to="/resources/how-to-organize-birthday-contributions">How to Organize Birthday Contributions →</Link>
                <Link to="/resources/birthday-contribution-etiquette">Birthday Contribution Etiquette →</Link>
                <Link to="/resources">View All Resources →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

