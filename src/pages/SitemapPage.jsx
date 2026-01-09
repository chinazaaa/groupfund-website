import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function SitemapPage() {
  const pages = [
    {
      category: "Main Pages",
      links: [
        { path: "/", label: "Home" },
        { path: "/get-started", label: "Get Started" },
        { path: "/how-it-works", label: "How It Works" },
        { path: "/features", label: "Features" },
        { path: "/coming-soon-features", label: "Coming Soon Features" },
        { path: "/download", label: "Download" },
        { path: "/pricing", label: "Pricing" },
        { path: "/waitlist", label: "Join Waitlist" }
      ]
    },
    {
      category: "Group Types",
      links: [
        { path: "/group-types", label: "Group Types Overview" },
        { path: "/group-types/birthday-groups", label: "Birthday Groups" },
        { path: "/group-types/subscription-groups", label: "Subscription Groups" },
        { path: "/group-types/general-groups", label: "General Groups" }
      ]
    },
    {
      category: "Subscription Groups",
      links: [
        { path: "/subscription-groups", label: "Subscription Groups Overview" },
        { path: "/subscription-groups/netflix", label: "Netflix Subscription Groups" },
        { path: "/subscription-groups/spotify", label: "Spotify Subscription Groups" },
        { path: "/subscription-groups/disney-plus", label: "Disney+ Subscription Groups" },
        { path: "/subscription-groups/hulu", label: "Hulu Subscription Groups" },
        { path: "/subscription-groups/hbo-max", label: "HBO Max Subscription Groups" },
        { path: "/subscription-groups/apple-tv", label: "Apple TV+ Subscription Groups" },
        { path: "/subscription-groups/youtube-premium", label: "YouTube Premium Subscription Groups" },
        { path: "/subscription-groups/amazon-prime", label: "Amazon Prime Subscription Groups" },
        { path: "/subscription-groups/paramount-plus", label: "Paramount+ Subscription Groups" },
        { path: "/subscription-groups/apple-music", label: "Apple Music Subscription Groups" },
        { path: "/subscription-groups/chatgpt-plus", label: "ChatGPT Plus Subscription Groups" },
        { path: "/subscription-groups/canva-pro", label: "Canva Pro Subscription Groups" },
        { path: "/subscription-groups/now-entertainment", label: "NOW Entertainment Subscription Groups" },
        { path: "/subscription-groups/peacock", label: "Peacock Subscription Groups" },
        { path: "/subscription-groups/amazon-music", label: "Amazon Music Unlimited Subscription Groups" },
        { path: "/subscription-groups/deliveroo-plus", label: "Deliveroo Plus Subscription Groups" },
        { path: "/subscription-groups/just-eat-plus", label: "Just Eat+ Subscription Groups" },
        { path: "/subscription-groups/doordash-dashpass", label: "DoorDash DashPass Subscription Groups" },
        { path: "/subscription-groups/postmates-unlimited", label: "Postmates Unlimited Subscription Groups" },
        { path: "/subscription-groups/grubhub-plus", label: "Grubhub+ Subscription Groups" },
        { path: "/subscription-groups/gousto", label: "Gousto Subscription Groups" },
        { path: "/subscription-groups/universal-yums", label: "Universal Yums Subscription Groups" },
        { path: "/subscription-groups/blue-apron", label: "Blue Apron Subscription Groups" },
        { path: "/subscription-groups/hello-fresh", label: "HelloFresh Subscription Groups" },
        { path: "/subscription-groups/uber-eats-pass", label: "Uber Eats Pass Subscription Groups" },
        { path: "/subscription-groups/home-chef", label: "Home Chef Subscription Groups" },
        { path: "/subscription-groups/bokksu", label: "Bokksu Subscription Groups" },
        { path: "/subscription-groups/puregym-plus", label: "PureGym Plus Subscription Groups" },
          { path: "/subscription-groups/the-gym-group-ultimate", label: "The Gym Group Ultimate Subscription Groups" },
        { path: "/subscription-groups/la-fitness", label: "LA Fitness Subscription Groups" },
        { path: "/subscription-groups/apple-fitness-plus", label: "Apple Fitness+ Subscription Groups" },
        { path: "/subscription-groups/fitness-bliss", label: "Fitness Bliss Subscription Groups" },
        { path: "/subscription-groups/mindbody-family", label: "Mindbody Family Subscription Groups" },
        { path: "/subscription-groups/planet-fitness", label: "Planet Fitness Subscription Groups" },
        { path: "/subscription-groups/showtime", label: "Showtime Subscription Groups" },
        { path: "/subscription-groups/starz", label: "Starz Subscription Groups" },
        { path: "/subscription-groups/amc-plus", label: "AMC+ Subscription Groups" },
        { path: "/subscription-groups/crunchyroll", label: "Crunchyroll Subscription Groups" },
        { path: "/subscription-groups/discovery-plus", label: "Discovery+ Subscription Groups" },
        { path: "/subscription-groups/espn-plus", label: "ESPN+ Subscription Groups" },
        { path: "/subscription-groups/sling-tv", label: "Sling TV Subscription Groups" },
        { path: "/subscription-groups/fubotv", label: "FuboTV Subscription Groups" },
        { path: "/subscription-groups/youtube-tv", label: "YouTube TV Subscription Groups" },
        { path: "/subscription-groups/adobe-creative-cloud", label: "Adobe Creative Cloud Subscription Groups" },
        { path: "/subscription-groups/microsoft-365", label: "Microsoft 365 Subscription Groups" },
        { path: "/subscription-groups/notion", label: "Notion Subscription Groups" },
        { path: "/subscription-groups/grammarly-premium", label: "Grammarly Premium Subscription Groups" },
        { path: "/subscription-groups/linkedin-premium", label: "LinkedIn Premium Subscription Groups" },
        { path: "/subscription-groups/xbox-game-pass", label: "Xbox Game Pass Subscription Groups" },
        { path: "/subscription-groups/playstation-plus", label: "PlayStation Plus Subscription Groups" },
        { path: "/subscription-groups/nintendo-switch-online", label: "Nintendo Switch Online Subscription Groups" },
        { path: "/subscription-groups/dropbox", label: "Dropbox Subscription Groups" },
        { path: "/subscription-groups/google-one", label: "Google One Subscription Groups" },
        { path: "/subscription-groups/icloud-plus", label: "iCloud+ Subscription Groups" },
        { path: "/subscription-groups/nordvpn", label: "NordVPN Subscription Groups" },
        { path: "/subscription-groups/expressvpn", label: "ExpressVPN Subscription Groups" },
        { path: "/subscription-groups/new-york-times", label: "The New York Times Subscription Groups" },
        { path: "/subscription-groups/wall-street-journal", label: "The Wall Street Journal Subscription Groups" }
      ]
    },
    {
      category: "Use Cases",
      links: [
        { path: "/use-cases", label: "Use Cases Overview" },
        { path: "/use-cases/families", label: "For Families" },
        { path: "/use-cases/churches", label: "For Churches" },
        { path: "/use-cases/schools", label: "For Schools" },
        { path: "/use-cases/friend-groups", label: "For Friend Groups" },
        { path: "/use-cases/workplace", label: "For Workplace" },
        { path: "/use-cases/community-organizations", label: "For Community Organizations" },
        { path: "/use-cases/shared-subscriptions", label: "For Shared Subscriptions" },
        { path: "/use-cases/group-trips-and-holidays", label: "For Group Trips & Holidays" },
        { path: "/use-cases/office-birthday-fund", label: "For Office Birthday Fund" },
        { path: "/use-cases/shared-rent-and-bills", label: "For Shared Rent & Bills" },
        { path: "/use-cases/group-birthday-gifts", label: "For Group Birthday Gifts" },
        { path: "/use-cases/weddings", label: "For Weddings" },
        { path: "/use-cases/baby-showers", label: "For Baby Showers" },
        { path: "/use-cases/parties-and-events", label: "For Parties & Events" },
        { path: "/use-cases/graduations", label: "For Graduations" },
        { path: "/use-cases/sports-teams", label: "For Sports Teams" },
        { path: "/use-cases/hobby-groups", label: "For Hobby Groups" },
        { path: "/use-cases/alumni-associations", label: "For Alumni Associations" },
        { path: "/use-cases/students", label: "For Students" },
        { path: "/use-cases/roommates", label: "For Roommates" },
        { path: "/use-cases/couples", label: "For Couples" },
        { path: "/use-cases/emergency-funds", label: "Emergency Funds" },
        { path: "/use-cases/funeral-memorial", label: "Funeral & Memorial Contributions" },
        { path: "/use-cases/savings-groups", label: "Savings Groups & ROSCAs" },
        { path: "/use-cases/non-profits", label: "For Non-Profits & Charities" },
        { path: "/use-cases/moving-relocation", label: "Moving & Relocation Expenses" },
        { path: "/use-cases/home-renovation", label: "Home Renovation Projects" }
      ]
    },
    {
      category: "Comparisons",
      links: [
        { path: "/comparisons", label: "Comparisons Overview" },
        { path: "/comparisons/whatsapp-groups", label: "vs. WhatsApp Groups" },
        { path: "/comparisons/excel-spreadsheets", label: "vs. Excel Spreadsheets" },
        { path: "/comparisons/google-sheets", label: "vs. Google Sheets" },
        { path: "/comparisons/manual-methods", label: "vs. Manual Methods" },
        { path: "/comparisons/splitwise", label: "vs. Splitwise" },
        { path: "/comparisons/venmo", label: "vs. Venmo" }
      ]
    },
    {
      category: "Locations",
      links: [
        { path: "/locations", label: "Locations Overview" },
        { path: "/locations/nigeria", label: "Nigeria" },
        { path: "/locations/lagos", label: "Lagos" },
        { path: "/locations/united-states", label: "United States" },
        { path: "/locations/new-york", label: "New York" },
        { path: "/locations/canada", label: "Canada" },
        { path: "/locations/toronto", label: "Toronto" },
        { path: "/locations/australia", label: "Australia" },
        { path: "/locations/sydney", label: "Sydney" },
        { path: "/locations/ghana", label: "Ghana" },
        { path: "/locations/accra", label: "Accra" },
        { path: "/locations/south-africa", label: "South Africa" },
        { path: "/locations/johannesburg", label: "Johannesburg" },
        { path: "/locations/brazil", label: "Brazil" },
        { path: "/locations/sao-paulo", label: "São Paulo" },
        { path: "/locations/germany", label: "Germany" },
        { path: "/locations/berlin", label: "Berlin" },
        { path: "/locations/ireland", label: "Ireland" },
        { path: "/locations/dublin", label: "Dublin" },
        { path: "/locations/france", label: "France" },
        { path: "/locations/paris", label: "Paris" },
        { path: "/locations/netherlands", label: "Netherlands" },
        { path: "/locations/amsterdam", label: "Amsterdam" },
        { path: "/locations/switzerland", label: "Switzerland" },
        { path: "/locations/zurich", label: "Zurich" },
        { path: "/locations/united-kingdom", label: "United Kingdom" },
        { path: "/locations/london", label: "London" },
        { path: "/locations/india", label: "India" },
        { path: "/locations/mumbai", label: "Mumbai" },
        { path: "/locations/kenya", label: "Kenya" },
        { path: "/locations/nairobi", label: "Nairobi" },
        { path: "/locations/mexico", label: "Mexico" },
        { path: "/locations/mexico-city", label: "Mexico City" },
        { path: "/locations/spain", label: "Spain" },
        { path: "/locations/italy", label: "Italy" },
        { path: "/locations/china", label: "China" },
        { path: "/locations/japan", label: "Japan" },
        { path: "/locations/barcelona", label: "Barcelona" },
        { path: "/locations/milan", label: "Milan" },
        { path: "/locations/tokyo", label: "Tokyo" },
        { path: "/locations/shanghai", label: "Shanghai" },
        { path: "/locations/manila", label: "Manila" },
{ path: "/locations/philippines", label: "Philippines" },
{ path: "/locations/poland", label: "Poland" },
{ path: "/locations/south-korea", label: "South Korea" },
{ path: "/locations/estonia", label: "Estonia" },
{ path: "/locations/uganda", label: "Uganda" },
{ path: "/locations/pakistan", label: "Pakistan" },
{ path: "/locations/russia", label: "Russia" },
{ path: "/locations/ukraine", label: "Ukraine" },
{ path: "/locations/turkey", label: "Turkey" },
{ path: "/locations/indonesia", label: "Indonesia" },
{ path: "/locations/malaysia", label: "Malaysia" },
{ path: "/locations/colombia", label: "Colombia" },
{ path: "/locations/finland", label: "Finland" },
{ path: "/locations/sweden", label: "Sweden" },
{ path: "/locations/vietnam", label: "Vietnam" },
{ path: "/locations/yemen", label: "Yemen" },
{ path: "/locations/iraq", label: "Iraq" },
{ path: "/locations/jordan", label: "Jordan" },
{ path: "/locations/jamaica", label: "Jamaica" },
{ path: "/locations/singapore", label: "Singapore" },
{ path: "/locations/lebanon", label: "Lebanon" },
{ path: "/locations/sri-lanka", label: "Sri Lanka" },
{ path: "/locations/serbia", label: "Serbia" },
{ path: "/locations/afghanistan", label: "Afghanistan" },
{ path: "/locations/warsaw", label: "Warsaw" },
{ path: "/locations/seoul", label: "Seoul" },
{ path: "/locations/tallinn", label: "Tallinn" },
{ path: "/locations/kampala", label: "Kampala" },
{ path: "/locations/islamabad", label: "Islamabad" },
{ path: "/locations/moscow", label: "Moscow" },
{ path: "/locations/kyiv", label: "Kyiv" },
{ path: "/locations/istanbul", label: "Istanbul" },
{ path: "/locations/jakarta", label: "Jakarta" },
{ path: "/locations/kuala-lumpur", label: "Kuala Lumpur" },
{ path: "/locations/bogota", label: "Bogota" },
{ path: "/locations/helsinki", label: "Helsinki" },
{ path: "/locations/stockholm", label: "Stockholm" },
{ path: "/locations/ho-chi-minh-city", label: "Ho Chi Minh City" },
{ path: "/locations/sanaa", label: "Sanaa" },
{ path: "/locations/baghdad", label: "Baghdad" },
{ path: "/locations/amman", label: "Amman" },
{ path: "/locations/kingston", label: "Kingston" },
{ path: "/locations/singapore-city", label: "Singapore City" },
{ path: "/locations/beirut", label: "Beirut" },
{ path: "/locations/colombo", label: "Colombo" },
{ path: "/locations/belgrade", label: "Belgrade" },
{ path: "/locations/kabul", label: "Kabul" }

      ]
    },
    {
      category: "Resources",
      links: [
        { path: "/resources", label: "Resources Overview" },
        { path: "/resources/how-to-organize-birthday-contributions", label: "How to Organize Group Contributions" },
        { path: "/resources/birthday-contribution-etiquette", label: "Group Contribution Etiquette" },
        { path: "/resources/calculating-group-contributions", label: "Calculating Group Contributions" },
        { path: "/resources/multi-currency-group-payments", label: "Multi-Currency Group Payments" },
        { path: "/resources/managing-large-group-contributions", label: "Managing Large Group Contributions" },
        { path: "/resources/avoiding-birthday-contribution-mistakes", label: "Avoiding Group Contribution Mistakes" },
        { path: "/resources/setting-up-your-first-group", label: "Setting Up Your First Group" },
        { path: "/resources/understanding-member-reliability-scores", label: "Understanding Member Reliability Scores" },
        { path: "/resources/budgeting-for-group-contributions", label: "Budgeting for Group Contributions" },
        { path: "/resources/choosing-the-right-contribution-amount", label: "Choosing the Right Contribution Amount" },
        { path: "/resources/advanced-group-management-strategies", label: "Advanced Group Management Strategies" },
        { path: "/resources/optimizing-payment-confirmation-workflows", label: "Optimizing Payment Confirmation Workflows" },
        { path: "/resources/using-birthday-wishlists", label: "How to Use Birthday Wishlists" },
        { path: "/resources/how-to-create-birthday-wishlist", label: "How to Create a Birthday Wishlist" },
        { path: "/resources/birthday-wishlist-meaning", label: "Birthday Wishlist Meaning" },
        { path: "/resources/setting-up-birthday-groups", label: "Setting Up Birthday Groups" },
        { path: "/resources/setting-up-subscription-groups", label: "Setting Up Subscription Groups" },
        { path: "/resources/creating-general-groups-for-events", label: "Creating General Groups for Events" },
        { path: "/resources/subscription-group-best-practices", label: "Subscription Group Best Practices" },
        { path: "/resources/managing-event-contributions", label: "Managing Event Contributions" },
        { path: "/resources/choosing-between-group-types", label: "Choosing Between Group Types" },
        { path: "/resources/subscription-deadline-management", label: "Subscription Deadline Management" },
        { path: "/resources/admin-account-details-guide", label: "Admin Account Details Guide" },
        { path: "/resources/organizing-international-group-contributions", label: "Organizing International Group Contributions" },
        { path: "/resources/subscription-group-payment-schedules", label: "Subscription Group Payment Schedules" },
        { path: "/blog", label: "Blog" },
        { path: "/testimonials", label: "Testimonials" },
        { path: "/faq", label: "FAQ" },
        { path: "/help", label: "Help & Support" },
        { path: "/glossary", label: "Glossary" }
      ]
    },
    {
      category: "Tools",
      links: [
        { path: "/tools", label: "Tools Overview" },
        { path: "/tools/contribution-calculator", label: "Contribution Calculator" },
        { path: "/tools/yearly-contribution-estimator", label: "Yearly Contribution Estimator" }
      ]
    },
    {
      category: "Industries",
      links: [
        { path: "/industries", label: "Industries Overview" },
        { path: "/industries/real-estate", label: "Real Estate" },
        { path: "/industries/healthcare", label: "Healthcare" },
        { path: "/industries/retail", label: "Retail" },
        { path: "/industries/education", label: "Education" },
        { path: "/industries/finance", label: "Finance" },
        { path: "/industries/technology", label: "Technology" },
        { path: "/industries/hospitality", label: "Hospitality" }
      ]
    },
    {
      category: "Best Practices",
      links: [
        { path: "/best-practices", label: "Best Practices Overview" },
        { path: "/best-practices/managing-large-groups", label: "Managing Large Groups" },
        { path: "/best-practices/international-groups", label: "International Groups" },
        { path: "/best-practices/group-trips-with-friends", label: "Group Trips with Friends" },
        { path: "/best-practices/workplace-leaving-gifts", label: "Workplace Leaving Gifts" },
        { path: "/best-practices/group-birthday-gifts", label: "Group Birthday Gifts" }
      ]
    },
    {
      category: "Case Studies",
      links: [
        { path: "/case-studies", label: "Case Studies Overview" },
        { path: "/case-studies/church-birthday-group", label: "Church Birthday Group" },
        { path: "/case-studies/family-birthday-fund", label: "Family Birthday Fund" },
        { path: "/case-studies/school-subscription-group", label: "School Subscription Group" },
        { path: "/case-studies/workplace-event-group", label: "Workplace Event Group" }
      ]
    },
    {
      category: "Seasonal",
      links: [
        { path: "/seasonal", label: "Seasonal Overview" },
        { path: "/seasonal/holiday-contributions", label: "Holiday Contributions" },
        { path: "/seasonal/back-to-school-contributions", label: "Back to School Contributions" },
        { path: "/seasonal/wedding-season-contributions", label: "Wedding Season Contributions" },
        { path: "/seasonal/housewarming-contributions", label: "Housewarming Contributions" },
        { path: "/seasonal/office-party-contributions", label: "Office Party Contributions" },
        { path: "/seasonal/thanksgiving-contributions", label: "Thanksgiving Contributions" },
        { path: "/seasonal/new-year-contributions", label: "New Year Contributions" },
        { path: "/seasonal/valentine-contributions", label: "Valentine's Day Contributions" },
        { path: "/seasonal/easter-contributions", label: "Easter Contributions" },
        { path: "/seasonal/mothers-day-contributions", label: "Mother's Day Contributions" },
        { path: "/seasonal/teacher-appreciation-contributions", label: "Teacher Appreciation Contributions" },
        { path: "/seasonal/graduation-contributions", label: "Graduation Contributions" },
        { path: "/seasonal/fathers-day-contributions", label: "Father's Day Contributions" },
        { path: "/seasonal/independence-day-contributions", label: "Independence Day Contributions" },
        { path: "/seasonal/labor-day-contributions", label: "Labor Day Contributions" },
        { path: "/seasonal/halloween-contributions", label: "Halloween Contributions" },
        { path: "/seasonal/diwali-contributions", label: "Diwali Contributions" },
        { path: "/seasonal/baby-shower-contributions", label: "Baby Shower Contributions" },
      ]
    },
    {
      category: "Company",
      links: [
        { path: "/about", label: "About Us" },
        { path: "/contact", label: "Contact" },
        { path: "/press", label: "Press" },
        { path: "/careers", label: "Careers" },
        { path: "/branding", label: "Branding Guidelines" }
      ]
    },
    {
      category: "Legal & Policies",
      links: [
        { path: "/privacy", label: "Privacy Policy" },
        { path: "/terms", label: "Terms of Service" },
        { path: "/cookie-policy", label: "Cookie Policy" },
        { path: "/app-rules", label: "App Rules" },
        { path: "/security", label: "Security" },
        { path: "/accessibility", label: "Accessibility" },
        { path: "/delete-account", label: "Delete Account" },
        { path: "/report", label: "Report a Group or Member" }
      ]
    },
    {
      category: "Blog Posts",
      links: [
        { path: "/blog/how-to-organize-valentines-day-contributions-romantic-celebrations", label: "How to Organize Valentine's Day Contributions and Romantic Celebrations" },
        { path: "/blog/galentines-day-organize-group-celebrations-friends", label: "Galentine's Day: How to Organize Group Celebrations with Friends" },
        { path: "/blog/how-to-organize-group-gifts-couples-valentines-anniversaries", label: "How to Organize Group Gifts for Couples: Valentine's Day and Anniversaries" },
        { path: "/blog/romantic-date-night-funds-organizing-group-contributions-couples", label: "Romantic Date Night Funds: Organizing Group Contributions for Couples" },
        { path: "/blog/how-to-organize-new-year-contributions-party-funds-2026", label: "How to Organize New Year Contributions and Party Funds in 2026" },
        { path: "/blog/how-to-organize-christmas-contributions-secret-santa-2025", label: "How to Organize Christmas Contributions and Secret Santa in 2025" },
        { path: "/blog/managing-group-contributions-during-holiday-seasons", label: "Managing Group Contributions During Holiday Seasons" },
        { path: "/blog/building-trust-contribution-groups-complete-guide", label: "Building Trust in Contribution Groups: A Complete Guide" },
        { path: "/blog/handle-contribution-disputes-fairly-professionally", label: "How to Handle Contribution Disputes Fairly and Professionally" },
        { path: "/blog/mobile-first-contribution-management-why-matters", label: "Mobile-First Contribution Management: Why It Matters" },
        { path: "/blog/scaling-contribution-group-5-to-50-members", label: "Scaling Your Contribution Group: From 5 to 50 Members" },
        { path: "/blog/psychology-group-contributions-makes-people-pay-time", label: "The Psychology of Group Contributions: What Makes People Pay on Time" },
        { path: "/blog/organize-birthday-contributions-without-stress", label: "How to Organize Group Contributions Without Stress" },
        { path: "/blog/why-whatsapp-groups-fail-tracking-payments", label: "Why WhatsApp Groups Fail at Tracking Group Payments" },
        { path: "/blog/best-ways-collect-money-events-nigeria", label: "The Best Ways to Collect Money for Events in Nigeria" },
        { path: "/blog/groupfund-vs-traditional-methods-comparison", label: "GroupFund vs. Traditional Methods: A Comparison" },
        { path: "/blog/tips-fair-birthday-contribution-management", label: "5 Tips for Fair Group Contribution Management" },
        { path: "/blog/churches-streamline-member-birthday-contributions", label: "How Churches Can Streamline Member Contributions" },
        { path: "/blog/how-birthday-wishlists-make-gift-giving-easier", label: "How Birthday Wishlists Make Gift Giving Easier for Groups" },
        { path: "/blog/how-to-manage-shared-subscriptions-subscription-groups", label: "How to Manage Shared Subscriptions with Subscription Groups" },
        { path: "/blog/organizing-group-contributions-weddings-events", label: "Organizing Group Contributions for Weddings and Events" },
        { path: "/blog/subscription-groups-vs-manual-payment-tracking", label: "Subscription Groups vs. Manual Payment Tracking: Which is Better?" },
        { path: "/blog/setting-up-first-subscription-group-step-by-step", label: "Setting Up Your First Subscription Group: Step-by-Step Guide" },
        { path: "/blog/best-practices-general-groups-events-weddings", label: "Best Practices for General Groups: Events, Weddings, and More" },
        { path: "/blog/how-to-collect-money-group-events-lagos-nigeria", label: "How to Collect Money for Group Events in Lagos, Nigeria" },
        { path: "/blog/managing-multiple-subscription-groups-tips-strategies", label: "Managing Multiple Subscription Groups: Tips and Strategies" },
        { path: "/blog/groupfund-vs-splitwise-group-payments-comparison", label: "GroupFund vs. Splitwise: Which is Better for Group Payments?" },
        { path: "/blog/how-to-organize-baby-shower-contributions-general-groups", label: "How to Organize Baby Shower Contributions with General Groups" },
        { path: "/blog/subscription-group-admin-guide-managing-shared-services", label: "Subscription Group Admin Guide: Managing Shared Services" },
        { path: "/blog/complete-guide-group-contribution-types-birthday-subscription-general", label: "The Complete Guide to Group Contribution Types: Birthday, Subscription, and General" },
        { path: "/blog/how-to-organize-easter-contributions-spring-celebrations", label: "How to Organize Easter Contributions and Spring Celebrations" },
        { path: "/blog/mothers-day-group-gift-coordination-complete-guide", label: "Mother's Day Group Gift Coordination: A Complete Guide" },
        { path: "/blog/fathers-day-contributions-organizing-group-gifts-celebrations", label: "Father's Day Contributions: Organizing Group Gifts and Celebrations" },
        { path: "/blog/how-to-organize-graduation-contributions-celebration-funds", label: "How to Organize Graduation Contributions and Celebration Funds" },
        { path: "/blog/summer-vacation-group-planning-organizing-trip-contributions", label: "Summer Vacation Group Planning: Organizing Trip Contributions" },
        { path: "/blog/back-to-school-contributions-organizing-group-funds-students", label: "Back-to-School Contributions: Organizing Group Funds for Students" },
        { path: "/blog/how-to-organize-halloween-party-contributions-costume-funds", label: "How to Organize Halloween Party Contributions and Costume Funds" },
        { path: "/blog/thanksgiving-group-planning-organizing-dinner-contributions", label: "Thanksgiving Group Planning: Organizing Dinner Contributions" }
      ]
    }
  ]

  return (
    <>
      <SEO
        title="Sitemap - All Pages | GroupFund"
        description="Browse all pages on the GroupFund website. Find features, blog posts, support resources, and more."
        keywords="sitemap, GroupFund pages, website navigation"
        canonical="https://www.groupfund.app/sitemap"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Sitemap</h1>
          <p className="page-subtitle">
            Find all pages and content on the GroupFund website.
          </p>
        </div>
      </section>

      <section className="sitemap-page">
        <div className="container">
          <div className="sitemap-content">
            {pages.map((category, index) => (
              <div key={index} className="sitemap-category">
                <h2 className="sitemap-category-title">{category.category}</h2>
                <ul className="sitemap-links">
                  {category.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link to={link.path}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="sitemap-note">
            <p>
              <strong>Note:</strong> This is a human-readable sitemap. For search engines, 
              see our <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer">XML sitemap</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
