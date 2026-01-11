import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function HowToCreateBirthdayWishlistPage() {
  // Add HowTo structured data
  useEffect(() => {
    const howToStructuredData = {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "How to Create a Birthday Wishlist",
      "description": "Step-by-step guide on how to create a birthday wishlist for group gift giving. Learn how to add items, set prices, include photos, and organize your wishlist effectively.",
      "image": "https://www.groupfund.app/og-image.jpg",
      "url": "https://www.groupfund.app/resources/how-to-create-birthday-wishlist",
      "totalTime": "PT15M",
      "estimatedCost": {
        "@type": "MonetaryAmount",
        "currency": "USD",
        "value": "0"
      },
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Access Your Profile",
          "text": "Log into your GroupFund account and navigate to your profile settings. Birthday wishlists are profile-level features available for Birthday Groups.",
          "image": "https://www.groupfund.app/og-image.jpg"
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Start Creating Your Wishlist",
          "text": "Click on 'Create Wishlist' or 'Add Items' to begin building your birthday wishlist. You can add items at any time, but it's best to start well before your birthday.",
          "image": "https://www.groupfund.app/og-image.jpg"
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Add Item Details",
          "text": "For each item, add a clear, descriptive name (e.g., 'Nike Air Max 270 - Size 9' instead of just 'shoes'). Include a photo so people know exactly what to buy. Add the approximate price to help group members budget.",
          "image": "https://www.groupfund.app/og-image.jpg"
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "Set Quantities and Links",
          "text": "Specify how many of each item you need. If you want multiple of the same item, set the quantity accordingly. Optionally, add links to where items can be purchased to make it easier for gift givers.",
          "image": "https://www.groupfund.app/og-image.jpg"
        },
        {
          "@type": "HowToStep",
          "position": 5,
          "name": "Add Variety at Different Price Points",
          "text": "Include items at various price points - budget-friendly items (under $20), mid-range items ($20-$50), and premium items. This ensures everyone in your group can participate regardless of their budget.",
          "image": "https://www.groupfund.app/og-image.jpg"
        },
        {
          "@type": "HowToStep",
          "position": 6,
          "name": "Review and Organize",
          "text": "Review your wishlist to ensure it's well-organized and includes 10-20 items. Prioritize your most wanted items by placing them first. Make sure all information is accurate and up-to-date.",
          "image": "https://www.groupfund.app/og-image.jpg"
        },
        {
          "@type": "HowToStep",
          "position": 7,
          "name": "Share with Group Members",
          "text": "Your wishlist is automatically visible to all group members who share at least one active Birthday Group with you. No need to manually share links - it's seamlessly integrated.",
          "image": "https://www.groupfund.app/og-image.jpg"
        }
      ]
    }

    // Remove existing HowTo structured data if any
    const existingScript = document.querySelector('script[data-howto-create-wishlist-schema]')
    if (existingScript) {
      existingScript.remove()
    }

    // Add new structured data
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.setAttribute('data-howto-create-wishlist-schema', 'true')
    script.textContent = JSON.stringify(howToStructuredData)
    document.head.appendChild(script)

    return () => {
      const scriptToRemove = document.querySelector('script[data-howto-create-wishlist-schema]')
      if (scriptToRemove) {
        scriptToRemove.remove()
      }
    }
  }, [])

  return (
    <>
      <SEO
        title="How to Create a Birthday Wishlist - Step-by-Step Guide"
        description="Learn how to create a birthday wishlist step-by-step. Discover tips for adding items, setting prices, including photos, and organizing your wishlist for effective group gift coordination. Perfect for Birthday Groups."
        keywords="how to create a birthday wishlist, create birthday wishlist, birthday wishlist guide, make birthday wishlist, birthday gift list, wishlist creation, birthday groups"
        canonical="https://www.groupfund.app/resources/how-to-create-birthday-wishlist"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">How to Create a Birthday Wishlist</h1>
          <p className="page-subtitle">
            A step-by-step guide to creating an effective birthday wishlist for group gift giving (available for Birthday Groups)
          </p>
        </div>
      </section>

      <section className="resource-detail-page">
        <div className="container">
          <div className="resource-content">
            <div className="resource-meta">
              <span className="resource-category">Guide</span>
              <span className="resource-read-time">8 min read</span>
            </div>

            <div className="resource-section">
              <h2>Introduction</h2>
              <p>
                Creating a birthday wishlist is the first step toward ensuring you receive gifts you'll actually love and use. A well-crafted wishlist helps your friends and family know exactly what you want, eliminates guesswork, and prevents duplicate gifts. In GroupFund, birthday wishlists are seamlessly integrated into Birthday Groups, making gift coordination effortless for everyone involved.
              </p>
              <p>
                This guide will walk you through the entire process of creating a birthday wishlist, from accessing the feature to adding your first items. Whether you're creating your first wishlist or looking to improve an existing one, you'll find practical tips and best practices here.
              </p>
            </div>

            <div className="resource-section">
              <h2>What You'll Need</h2>
              <p>
                Before you start creating your birthday wishlist, make sure you have:
              </p>
              <ul className="resource-list">
                <li><strong>A GroupFund Account:</strong> You need to be signed up and logged in</li>
                <li><strong>A Birthday Group:</strong> Wishlists are available for Birthday Groups only</li>
                <li><strong>Item Ideas:</strong> Think about what you'd like to receive for your birthday</li>
                <li><strong>Photos (Optional but Recommended):</strong> Pictures of items help gift givers know exactly what to buy</li>
                <li><strong>Price Information:</strong> Approximate prices help people budget their gifts</li>
              </ul>
            </div>

            <div className="resource-section">
              <h2>Step-by-Step Guide to Creating Your Birthday Wishlist</h2>
              
              <h3>Step 1: Access Your Profile</h3>
              <p>
                To create a birthday wishlist, you'll need to access your profile settings in GroupFund. Birthday wishlists are profile-level features, which means they're visible to all group members who share at least one active Birthday Group with you.
              </p>
              <ul className="resource-list">
                <li>Log into your GroupFund account</li>
                <li>Navigate to your profile or account settings</li>
                <li>Look for the "Birthday Wishlist" or "My Wishlist" section</li>
                <li>If you don't see this option, make sure you're part of at least one Birthday Group</li>
              </ul>

              <h3>Step 2: Start Creating Your Wishlist</h3>
              <p>
                Once you've accessed the wishlist section, click on "Create Wishlist" or "Add Items" to begin building your list. You can add items at any time, but it's best to start well before your birthday so group members have time to see your list and plan their purchases.
              </p>
              <p>
                <strong>Pro Tip:</strong> Start adding items 2-3 weeks before your birthday to give people enough time to browse and claim items.
              </p>

              <h3>Step 3: Add Your First Item</h3>
              <p>
                When adding items to your wishlist, include as much detail as possible:
              </p>
              <ul className="resource-list">
                <li><strong>Item Name:</strong> Be specific and descriptive. Instead of "shoes," write "Nike Air Max 270 - Size 9" or "Black Leather Ankle Boots - Size 8"</li>
                <li><strong>Photo:</strong> Upload a clear photo of the item. This helps people know exactly what they're buying and reduces confusion</li>
                <li><strong>Price:</strong> Add the approximate price or price range. This helps group members budget their gifts</li>
                <li><strong>Description (Optional):</strong> Add any additional details like color preferences, size, brand, or specific features</li>
              </ul>
              <p>
                <strong>Example of a Good Item Entry:</strong>
              </p>
              <ul className="resource-list">
                <li>Name: "Apple AirPods Pro (2nd Generation)"</li>
                <li>Photo: Clear product image</li>
                <li>Price: $249</li>
                <li>Link: Amazon product page (optional)</li>
                <li>Quantity: 1</li>
              </ul>

              <h3>Step 4: Set Quantities and Add Purchase Links</h3>
              <p>
                For each item, specify how many you need:
              </p>
              <ul className="resource-list">
                <li>If you only need one of an item, set quantity to 1</li>
                <li>If you want multiple (e.g., "3 pairs of socks"), set the quantity accordingly</li>
                <li>This helps prevent people from buying more than you need</li>
              </ul>
              <p>
                Adding purchase links is optional but highly recommended:
              </p>
              <ul className="resource-list">
                <li>Include links to where items can be purchased (Amazon, store websites, etc.)</li>
                <li>This makes it easier for gift givers to find and buy the exact item</li>
                <li>It also helps ensure they get the right size, color, or model</li>
              </ul>

              <h3>Step 5: Add Variety at Different Price Points</h3>
              <p>
                One of the most important aspects of creating an effective wishlist is including items at various price points. This ensures everyone in your group can participate regardless of their budget:
              </p>
              <ul className="resource-list">
                <li><strong>Budget-Friendly Items:</strong> Include items under $20 or 5,000 for those on tight budgets. Examples: books, small accessories, gift cards, snacks, or small tech accessories</li>
                <li><strong>Mid-Range Items:</strong> Add items in the $20-$50 or 5,000-15,000 range. Examples: clothing items, small electronics, home decor, or beauty products</li>
                <li><strong>Premium Items:</strong> Include larger items that multiple people can contribute toward. Examples: electronics, furniture, experiences, or high-end products</li>
              </ul>
              <p>
                <strong>Why This Matters:</strong> Not everyone in your group will have the same budget. By including items at different price points, you ensure that everyone can participate and feel included in your celebration.
              </p>

              <h3>Step 6: Organize and Prioritize Your Wishlist</h3>
              <p>
                A well-organized wishlist is easier for people to navigate:
              </p>
              <ul className="resource-list">
                <li><strong>Prioritize Important Items:</strong> Place your most wanted items at the top of your list</li>
                <li><strong>Keep It Manageable:</strong> Aim for 10-20 items rather than hundreds. Too many options can be overwhelming</li>
                <li><strong>Group Similar Items:</strong> If possible, group similar items together (e.g., all clothing items, all tech items)</li>
                <li><strong>Update Regularly:</strong> Remove items you no longer want and add new ones as your preferences change</li>
              </ul>

              <h3>Step 7: Review and Finalize</h3>
              <p>
                Before sharing your wishlist, take a moment to review it:
              </p>
              <ul className="resource-list">
                <li>Check that all item names are clear and descriptive</li>
                <li>Verify that photos are clear and show the item accurately</li>
                <li>Ensure prices are accurate or at least approximate</li>
                <li>Make sure quantities are correct</li>
                <li>Verify that links work (if you've added them)</li>
                <li>Check that you have variety in price points</li>
              </ul>
            </div>

            <div className="resource-section">
              <h2>Best Practices for Creating an Effective Wishlist</h2>
              
              <h3>Be Specific</h3>
              <p>
                Vague descriptions lead to confusion and unwanted gifts. Instead of "something nice" or "surprise me," be specific about what you want. Include brand names, sizes, colors, and model numbers when applicable.
              </p>

              <h3>Include Visuals</h3>
              <p>
                Photos are incredibly helpful. They eliminate guesswork and ensure people buy exactly what you want. If you can't find a photo online, take one yourself or describe the item in great detail.
              </p>

              <h3>Update Regularly</h3>
              <p>
                Your preferences may change, or items may become unavailable. Regularly update your wishlist to keep it current. Mark items as "done" when you receive them to prevent duplicate purchases.
              </p>

              <h3>Be Realistic</h3>
              <p>
                While it's okay to include dream items, make sure most of your list consists of items that are actually available and within reasonable price ranges for your group members.
              </p>

              <h3>Consider Your Group</h3>
              <p>
                Think about who's in your Birthday Group and what they might be comfortable spending. If your group consists of students or people on tight budgets, include more affordable options.
              </p>
            </div>

            <div className="resource-section">
              <h2>Common Mistakes to Avoid</h2>
              
              <h3>Being Too Vague</h3>
              <p>
                Avoid generic descriptions like "something I'll like" or "surprise me." Be specific about what you want.
              </p>

              <h3>Only Including Expensive Items</h3>
              <p>
                If your wishlist only has expensive items, many group members won't be able to participate. Always include budget-friendly options.
              </p>

              <h3>Not Updating Your List</h3>
              <p>
                An outdated wishlist with unavailable items or items you no longer want frustrates gift givers. Keep your list current.
              </p>

              <h3>Forgetting to Add Photos</h3>
              <p>
                Photos make a huge difference. Without them, people might buy the wrong item, color, or size.
              </p>

              <h3>Creating the List Too Late</h3>
              <p>
                Don't wait until the last minute. Give people at least 2-3 weeks to see your list and plan their purchases.
              </p>
            </div>

            <div className="resource-section">
              <h2>What Happens After You Create Your Wishlist?</h2>
              <p>
                Once you've created your birthday wishlist:
              </p>
              <ul className="resource-list">
                <li><strong>Automatic Sharing:</strong> Your wishlist is automatically visible to all group members who share at least one active Birthday Group with you</li>
                <li><strong>Item Claims:</strong> Group members can view your wishlist and claim items they want to purchase</li>
                <li><strong>Real-Time Updates:</strong> You'll see in real-time which items have been claimed and by whom</li>
                <li><strong>Coordination:</strong> The claim system prevents duplicate purchases and helps coordinate gift giving</li>
                <li><strong>Tracking:</strong> You can track what's been claimed and what you'll receive</li>
              </ul>
            </div>

            <div className="resource-section">
              <h2>Tips for Success</h2>
              <ul className="resource-list">
                <li><strong>Start Early:</strong> Create your wishlist 2-3 weeks before your birthday</li>
                <li><strong>Be Thoughtful:</strong> Think about what you actually need and want, not just what's trendy</li>
                <li><strong>Include Variety:</strong> Mix of price points, categories, and item types</li>
                <li><strong>Keep It Updated:</strong> Regularly update your list as items are claimed or your preferences change</li>
                <li><strong>Be Grateful:</strong> Remember to thank people for their gifts, regardless of what they choose</li>
                <li><strong>Mark Items as Done:</strong> When you receive an item, mark it as done to prevent duplicate purchases</li>
              </ul>
            </div>

            <div className="cta-box">
              <h2>Ready to Create Your Birthday Wishlist?</h2>
              <p>GroupFund makes creating and managing birthday wishlists effortless for Birthday Groups. Start building your wishlist today and make gift giving easier for everyone in your group.</p>
              <div className="cta-buttons">
                <Link to="/get-started" className="btn btn-primary btn-large">Start Free with GroupFund</Link>
                <Link to="/how-it-works" className="btn btn-secondary btn-large">See How It Works</Link>
              </div>
            </div>

            <div className="related-links">
              <h3>Related Guides</h3>
              <div className="related-links-grid">
                <Link to="/resources/using-birthday-wishlists">Using Birthday Wishlists →</Link>
                <Link to="/resources/setting-up-birthday-groups">Setting Up Birthday Groups →</Link>
                <Link to="/resources/how-to-organize-birthday-contributions">How to Organize Birthday Contributions →</Link>
                <Link to="/resources">View All Resources →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}


