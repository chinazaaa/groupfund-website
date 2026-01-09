import React, { useState, useMemo } from 'react'
import SEO from '../components/SEO'
import { Link } from 'react-router-dom'
import '../App.css'

export default function SubscriptionGroupsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState(null)

  const subscriptions = [
    {
      slug: 'netflix',
      title: 'Netflix',
      description: 'Share Netflix costs with friends and family. Organize group contributions for Netflix subscriptions, track payments, and split streaming service costs fairly among group members.',
      icon: '🎬',
      keywords: 'netflix group subscription, share netflix cost, netflix payment splitting, netflix group contributions, split netflix subscription',
      category: 'Entertainment'
    },
    {
      slug: 'spotify',
      title: 'Spotify',
      description: 'Split Spotify Premium Family costs with your group. Manage music streaming subscriptions, track monthly contributions, and organize payments for Spotify group plans.',
      icon: '🎵',
      keywords: 'spotify group subscription, spotify family plan splitting, share spotify cost, spotify group payments, split spotify premium',
      category: 'Music'
    },
    {
      slug: 'disney-plus',
      title: 'Disney+',
      description: 'Share Disney+ subscription costs with your group. Coordinate contributions for Disney Plus, track payments, and split streaming costs for family and friends.',
      icon: '🏰',
      keywords: 'disney plus group subscription, share disney+ cost, disney plus payment splitting, split disney subscription, disney+ group contributions',
      category: 'Entertainment'
    },
    {
      slug: 'hulu',
      title: 'Hulu',
      description: 'Organize group contributions for Hulu subscriptions. Split streaming costs, track payments, and manage Hulu subscription sharing with friends and family.',
      icon: '📺',
      keywords: 'hulu group subscription, share hulu cost, hulu payment splitting, split hulu subscription, hulu group contributions',
      category: 'Entertainment'
    },
    {
      slug: 'hbo-max',
      title: 'HBO Max',
      description: 'Split HBO Max subscription costs with your group. Coordinate streaming service payments, track contributions, and share HBO Max fairly among members.',
      icon: '🎭',
      keywords: 'hbo max group subscription, share hbo max cost, hbo max payment splitting, split hbo subscription, hbo max group contributions',
      category: 'Entertainment'
    },
    {
      slug: 'apple-tv',
      title: 'Apple TV+',
      description: 'Share Apple TV+ subscription costs with friends and family. Organize group payments for Apple streaming services and track monthly contributions.',
      icon: '🍎',
      keywords: 'apple tv plus group subscription, share apple tv cost, apple tv payment splitting, split apple tv subscription, apple tv+ group contributions',
      category: 'Entertainment'
    },
    {
      slug: 'now-entertainment',
      title: 'NOW Entertainment',
      description: 'Share NOW Entertainment subscription costs with friends and family. Organize group payments for Sky/NOW streaming services including Peacock content and track monthly contributions.',
      icon: '📺',
      keywords: 'now entertainment group subscription, share now tv cost, now entertainment payment splitting, split now sky subscription, now entertainment group contributions',
      category: 'Entertainment'
    },
    {
        slug: 'peacock',
        title: 'Peacock',
        description: 'Share Peacock subscription costs with friends and family. Organize group payments for NBC streaming, live sports, and originals, and track monthly contributions.',
        icon: '📺',
        keywords: 'peacock group subscription, share peacock cost, peacock payment splitting, split peacock subscription, peacock group contributions',
        category: 'Entertainment'
      },    
      {
        slug: 'amazon-music',
        title: 'Amazon Music Unlimited',
        description: 'Share Amazon Music Unlimited subscription costs with friends and family. Organize group payments for ad-free music streaming, hi-res audio, and track monthly contributions.',
        icon: '🎵',
        keywords: 'amazon music unlimited group subscription, share amazon music cost, amazon music payment splitting, split amazon music subscription, amazon music family group contributions',
        category: 'Music'
      },        
    {
      slug: 'youtube-premium',
      title: 'YouTube Premium',
      description: 'Split YouTube Premium Family costs with your group. Manage ad-free streaming subscriptions, track payments, and organize YouTube Premium contributions.',
      icon: '▶️',
      keywords: 'youtube premium group subscription, youtube family plan splitting, share youtube premium cost, split youtube subscription, youtube premium group payments',
      category: 'Entertainment'
    },
    {
      slug: 'amazon-prime',
      title: 'Amazon Prime',
      description: 'Share Amazon Prime costs including Prime Video. Organize group contributions for Prime membership, track payments, and split subscription costs.',
      icon: '📦',
      keywords: 'amazon prime group subscription, share prime cost, prime video splitting, amazon prime group payments, split prime membership',
      category: 'Entertainment'
    },
    {
      slug: 'paramount-plus',
      title: 'Paramount+',
      description: 'Organize Paramount+ subscription sharing with your group. Split streaming costs, track monthly payments, and manage Paramount Plus contributions.',
      icon: '⛰️',
      keywords: 'paramount plus group subscription, share paramount+ cost, paramount plus payment splitting, split paramount subscription, paramount+ group contributions',
      category: 'Entertainment'
    },
    {
      slug: 'apple-music',
      title: 'Apple Music',
      description: 'Share Apple Music Family subscription costs. Organize group contributions for music streaming, track payments, and split Apple Music expenses fairly.',
      icon: '🎼',
      keywords: 'apple music group subscription, apple music family plan, share apple music cost, split apple music subscription',
      category: 'Music'
    },
    {
      slug: 'chatgpt-plus',
      title: 'ChatGPT Plus',
      description: 'Split ChatGPT Plus subscription costs with your team. Organize group contributions for AI tools, track monthly payments, and share access efficiently.',
      icon: '🤖',
      keywords: 'chatgpt plus subscription, share chatgpt cost, AI tool subscription splitting, chatgpt group payments',
      category: 'Productivity'
    },
    {
      slug: 'canva-pro',
      title: 'Canva Pro',
      description: 'Share Canva Pro subscription with your team. Organize design tool contributions, track payments, and split Canva costs for collaborative creative work.',
      icon: '🎨',
      keywords: 'canva pro subscription, share canva cost, design tool subscription splitting, canva group payments',
      category: 'Productivity'
    },
    {
        slug: 'hello-fresh',
        title: 'HelloFresh',
        description: 'Share HelloFresh subscription costs with friends and family. Organize group payments for meal kits, track contributions, and split delivery costs fairly.',
        icon: '🍽️',
        keywords: 'hellofresh group subscription, share hellofresh cost, hellofresh payment splitting, split hellofresh subscription, hellofresh group contributions',
        category: 'Food & Drinks'
      },
      {
        slug: 'uber-eats-pass',
        title: 'Uber Eats Pass',
        description: 'Share Uber Eats Pass (Uber One) subscription costs with household. Organize group payments for free delivery and discounts on food orders, and track contributions.',
        icon: '🚗',
        keywords: 'uber eats pass group subscription, share uber eats cost, uber one payment splitting, split uber eats subscription, uber eats group contributions',
        category: 'Food & Drinks'
      },      
      {
        slug: 'deliveroo-plus',
        title: 'Deliveroo Plus',
        description: 'Share Deliveroo Plus subscription costs with friends and family. Organize group payments for free delivery, credits, and discounts on restaurant orders, and track monthly contributions.',
        icon: '🍕',
        keywords: 'deliveroo plus group subscription, share deliveroo plus cost, deliveroo payment splitting, split deliveroo subscription, deliveroo group contributions',
        category: 'Food & Drinks'
      },
      {
        slug: 'just-eat-plus',
        title: 'Just Eat Plus',
        description: 'Share Just Eat Plus subscription costs with friends and family worldwide. Organize group payments for free delivery on takeaways and track contributions.',
        icon: '🍕',
        keywords: 'just eat plus group subscription, share just eat cost, just eat payment splitting, split just eat subscription, just eat group contributions',
        category: 'Food & Drinks'
      },      
      {
        slug: 'doordash-dashpass',
        title: 'DoorDash DashPass',
        description: 'Share DoorDash DashPass subscription costs with family sharing. Organize group payments for free delivery and perks on orders, and track monthly contributions.',
        icon: '🚚',
        keywords: 'doordash dashpass group subscription, share doordash cost, dashpass payment splitting, split doordash subscription, doordash group contributions',
        category: 'Food & Drinks'
      },      

      {
        slug: 'postmates-unlimited',
        title: 'Postmates Unlimited',
        description: 'Share Postmates Unlimited (via Uber One) subscription costs with friends. Organize group payments for waived delivery fees on orders over minimums, and track contributions.',
        icon: '🏃',
        keywords: 'postmates unlimited group subscription, share postmates cost, postmates payment splitting, split postmates subscription, postmates group contributions',
        category: 'Food & Drinks'
      },
      {
        slug: 'grubhub-plus',
        title: 'Grubhub+',
        description: 'Share Grubhub+ subscription costs with friends and family. Organize group payments for $0 delivery fees, lower service fees, and exclusive perks on food orders, and track monthly contributions.',
        icon: '🍔',
        keywords: 'grubhub plus group subscription, share grubhub cost, grubhub payment splitting, split grubhub subscription, grubhub group contributions',
        category: 'Food & Drinks'
      },
      {
        slug: 'gousto',
        title: 'Gousto',
        description: 'Share Gousto subscription costs with friends and family worldwide. Organize group payments for fresh meal kits and track monthly contributions.',
        icon: '🥗',
        keywords: 'gousto group subscription, share gousto cost, gousto payment splitting, split gousto subscription, gousto group contributions',
        category: 'Food & Drinks'
      },      
      {
        slug: 'blue-apron',
        title: 'Blue Apron',
        description: 'Share Blue Apron subscription costs with friends and family worldwide. Organize group payments for meal kits with global recipes and track contributions.',
        icon: '🍲',
        keywords: 'blue apron group subscription, share blue apron cost, blue apron payment splitting, split blue apron subscription, blue apron group contributions',
        category: 'Food & Drinks'
      },
      {
        slug: 'universal-yums',
        title: 'Universal Yums',
        description: 'Share Universal Yums subscription costs with friends and family worldwide. Organize group payments for international snacks and track contributions.',
        icon: '🍫',
        keywords: 'universal yums group subscription, share universal yums cost, universal yums payment splitting, split universal yums subscription, universal yums group contributions',
        category: 'Food & Drinks'
      },
      {
        slug: 'home-chef',
        title: 'Home Chef',
        description: 'Share Home Chef subscription costs with friends and family worldwide. Organize group payments for customizable meal kits and track contributions.',
        icon: '👨‍🍳',
        keywords: 'home chef group subscription, share home chef cost, home chef payment splitting, split home chef subscription, home chef group contributions',
        category: 'Food & Drinks'
      },
      {
        slug: 'bokksu',
        title: 'Bokksu',
        description: 'Share Bokksu subscription costs with friends and family worldwide. Organize group payments for Japanese snacks and tea, and track monthly contributions.',
        icon: '🍱',
        keywords: 'bokksu group subscription, share bokksu cost, bokksu payment splitting, split bokksu subscription, bokksu group contributions',
        category: 'Food & Drinks'
      },
      {
        slug: 'puregym-plus',
        title: 'PureGym Plus',
        description: 'Share PureGym Plus subscription costs with friends and family in the UK. Organize group payments for 24/7 gym access, classes, and buddy guests, and track monthly contributions.',
        icon: '🏋️',
        keywords: 'puregym plus group subscription, share puregym cost, puregym payment splitting, split puregym membership, puregym group contributions',
        category: 'Fitness & Health'
      },  
      {
        slug: 'the-gym-group-ultimate',
        title: 'The Gym Group Ultimate',
        description:
          'Share The Gym Group Ultimate membership costs with friends and family in the UK. Organize group payments for 24/7 multi-gym access, classes, guest passes, and track monthly contributions.',
        icon: '🏋️',
        keywords:
          'the gym group ultimate sharing, share the gym group cost, the gym group group subscription, the gym group payment splitting, split the gym group membership, the gym group group contributions',
        category: 'Fitness & Health'
      },          
      {
        slug: 'planet-fitness',
        title: 'Planet Fitness Black Card',
        description: 'Share Planet Fitness Black Card subscription costs with friends and family worldwide. Organize group payments for gym access and guest privileges, and track monthly contributions.',
        icon: '💪',
        keywords: 'planet fitness group subscription, share planet fitness cost, black card payment splitting, split gym membership, planet fitness group contributions',
        category: 'Fitness & Health'
      },
      {
        slug: 'la-fitness',
        title: 'LA Fitness',
        description: 'Share LA Fitness subscription costs with friends and family worldwide. Organize group payments for gym access, pools, classes, and track monthly contributions.',
        icon: '🏊',
        keywords: 'la fitness group subscription, share la fitness cost, la fitness payment splitting, split gym membership, la fitness group contributions',
        category: 'Fitness & Health'
      },
      {
        slug: 'apple-fitness-plus',
        title: 'Apple Fitness+',
        description: 'Share Apple Fitness+ subscription costs with family worldwide. Organize group payments for guided workouts, yoga, HIIT, and track contributions.',
        icon: '📱',
        keywords: 'apple fitness plus group subscription, share apple fitness cost, fitness+ payment splitting, split apple fitness subscription, apple fitness group contributions',
        category: 'Fitness & Health'
      },
      {
        slug: 'fitness-bliss',
        title: 'Fitness Bliss',
        description: 'Share Fitness Bliss subscription costs with friends and family worldwide. Organize group payments for strength training programs, form checks, and track monthly contributions.',
        icon: '🏃‍♂️',
        keywords: 'fitness bliss group subscription, share fitness bliss cost, fitbliss payment splitting, split fitness app subscription, fitness bliss group contributions',
        category: 'Fitness & Health'
      },      
      {
        slug: 'mindbody-family',
        title: 'Mindbody Family',
        description: 'Share Mindbody family account costs with friends and family worldwide. Organize group payments for gym bookings, classes, and track contributions via shared profiles.',
        icon: '🏋️',
        keywords: 'mindbody family group subscription, share mindbody cost, mindbody payment splitting, split gym booking subscription, mindbody group contributions',
        category: 'Fitness & Health'
      },
      {
        slug: 'showtime',
        title: 'Showtime',
        description: 'Share Showtime subscription costs with friends and family. Organize group payments for premium cable content, original series, and movies, and track monthly contributions.',
        icon: '🎬',
        keywords: 'showtime group subscription, share showtime cost, showtime payment splitting, split showtime subscription, showtime group contributions',
        category: 'Entertainment'
      },
      {
        slug: 'starz',
        title: 'Starz',
        description: 'Share Starz subscription costs with your group. Coordinate payments for premium movies, original series, and exclusive content, and track contributions.',
        icon: '⭐',
        keywords: 'starz group subscription, share starz cost, starz payment splitting, split starz subscription, starz group contributions',
        category: 'Entertainment'
      },
      {
        slug: 'amc-plus',
        title: 'AMC+',
        description: 'Share AMC+ subscription costs with friends and family. Organize group payments for AMC content, original series, and exclusive shows, and track monthly contributions.',
        icon: '📺',
        keywords: 'amc plus group subscription, share amc+ cost, amc plus payment splitting, split amc subscription, amc+ group contributions',
        category: 'Entertainment'
      },
      {
        slug: 'crunchyroll',
        title: 'Crunchyroll',
        description: 'Share Crunchyroll subscription costs with anime fans. Organize group payments for anime streaming, manga access, and ad-free viewing, and track contributions.',
        icon: '🎌',
        keywords: 'crunchyroll group subscription, share crunchyroll cost, crunchyroll payment splitting, split crunchyroll subscription, crunchyroll group contributions',
        category: 'Entertainment'
      },
      {
        slug: 'discovery-plus',
        title: 'Discovery+',
        description: 'Share Discovery+ subscription costs with your group. Coordinate payments for documentaries, reality shows, and educational content, and track monthly contributions.',
        icon: '🌍',
        keywords: 'discovery plus group subscription, share discovery+ cost, discovery plus payment splitting, split discovery subscription, discovery+ group contributions',
        category: 'Entertainment'
      },
      {
        slug: 'espn-plus',
        title: 'ESPN+',
        description: 'Share ESPN+ subscription costs with sports fans. Organize group payments for live sports, exclusive content, and sports analysis, and track contributions.',
        icon: '⚽',
        keywords: 'espn plus group subscription, share espn+ cost, espn plus payment splitting, split espn subscription, espn+ group contributions',
        category: 'Entertainment'
      },
      {
        slug: 'sling-tv',
        title: 'Sling TV',
        description: 'Share Sling TV subscription costs with friends and family. Organize group payments for live TV streaming, channels, and DVR access, and track monthly contributions.',
        icon: '📡',
        keywords: 'sling tv group subscription, share sling tv cost, sling tv payment splitting, split sling tv subscription, sling tv group contributions',
        category: 'Entertainment'
      },
      {
        slug: 'fubotv',
        title: 'FuboTV',
        description: 'Share FuboTV subscription costs with sports fans. Coordinate payments for live sports streaming, news, and entertainment channels, and track contributions.',
        icon: '🏈',
        keywords: 'fubotv group subscription, share fubotv cost, fubotv payment splitting, split fubo tv subscription, fubotv group contributions',
        category: 'Entertainment'
      },
      {
        slug: 'youtube-tv',
        title: 'YouTube TV',
        description: 'Share YouTube TV subscription costs with your group. Organize group payments for live TV streaming, unlimited DVR, and channel access, and track monthly contributions.',
        icon: '📺',
        keywords: 'youtube tv group subscription, share youtube tv cost, youtube tv payment splitting, split youtube tv subscription, youtube tv group contributions',
        category: 'Entertainment'
      },
      {
        slug: 'adobe-creative-cloud',
        title: 'Adobe Creative Cloud',
        description: 'Share Adobe Creative Cloud subscription costs with your team. Organize group payments for Photoshop, Illustrator, Premiere Pro, and all Adobe apps, and track contributions.',
        icon: '🎨',
        keywords: 'adobe creative cloud group subscription, share adobe cost, adobe payment splitting, split adobe subscription, adobe creative cloud group contributions',
        category: 'Productivity'
      },
      {
        slug: 'microsoft-365',
        title: 'Microsoft 365',
        description: 'Share Microsoft 365 subscription costs with your team. Coordinate payments for Office apps, cloud storage, and collaboration tools, and track monthly contributions.',
        icon: '📊',
        keywords: 'microsoft 365 group subscription, share microsoft 365 cost, microsoft office payment splitting, split microsoft 365 subscription, microsoft 365 group contributions',
        category: 'Productivity'
      },
      {
        slug: 'notion',
        title: 'Notion',
        description: 'Share Notion subscription costs with your team. Organize group payments for productivity tools, note-taking, and collaboration features, and track contributions.',
        icon: '📝',
        keywords: 'notion group subscription, share notion cost, notion payment splitting, split notion subscription, notion group contributions',
        category: 'Productivity'
      },
      {
        slug: 'grammarly-premium',
        title: 'Grammarly Premium',
        description: 'Share Grammarly Premium subscription costs with your team. Coordinate payments for writing assistance, grammar checking, and style suggestions, and track monthly contributions.',
        icon: '✍️',
        keywords: 'grammarly premium group subscription, share grammarly cost, grammarly payment splitting, split grammarly subscription, grammarly group contributions',
        category: 'Productivity'
      },
      {
        slug: 'linkedin-premium',
        title: 'LinkedIn Premium',
        description: 'Share LinkedIn Premium subscription costs with professionals. Organize group payments for networking features, job insights, and premium tools, and track contributions.',
        icon: '💼',
        keywords: 'linkedin premium group subscription, share linkedin premium cost, linkedin payment splitting, split linkedin subscription, linkedin premium group contributions',
        category: 'Productivity'
      },
      {
        slug: 'xbox-game-pass',
        title: 'Xbox Game Pass',
        description: 'Share Xbox Game Pass subscription costs with gamers. Organize group payments for game library access, Xbox Live Gold, and cloud gaming, and track monthly contributions.',
        icon: '🎮',
        keywords: 'xbox game pass group subscription, share xbox game pass cost, xbox payment splitting, split xbox subscription, xbox game pass group contributions',
        category: 'Gaming'
      },
      {
        slug: 'playstation-plus',
        title: 'PlayStation Plus',
        description: 'Share PlayStation Plus subscription costs with gaming friends. Coordinate payments for online multiplayer, free games, and exclusive discounts, and track contributions.',
        icon: '🎮',
        keywords: 'playstation plus group subscription, share playstation plus cost, ps plus payment splitting, split playstation subscription, playstation plus group contributions',
        category: 'Gaming'
      },
      {
        slug: 'nintendo-switch-online',
        title: 'Nintendo Switch Online',
        description: 'Share Nintendo Switch Online subscription costs with gamers. Organize group payments for online play, classic games, and cloud saves, and track monthly contributions.',
        icon: '🎮',
        keywords: 'nintendo switch online group subscription, share nintendo switch online cost, nintendo payment splitting, split nintendo subscription, nintendo switch online group contributions',
        category: 'Gaming'
      },
      {
        slug: 'dropbox',
        title: 'Dropbox',
        description: 'Share Dropbox subscription costs with your team. Organize group payments for cloud storage, file sharing, and collaboration tools, and track contributions.',
        icon: '📦',
        keywords: 'dropbox group subscription, share dropbox cost, dropbox payment splitting, split dropbox subscription, dropbox group contributions',
        category: 'Cloud Storage'
      },
      {
        slug: 'google-one',
        title: 'Google One',
        description: 'Share Google One subscription costs with family and friends. Coordinate payments for expanded Google Drive storage, Google Photos, and Gmail storage, and track monthly contributions.',
        icon: '☁️',
        keywords: 'google one group subscription, share google one cost, google one payment splitting, split google one subscription, google one group contributions',
        category: 'Cloud Storage'
      },
      {
        slug: 'icloud-plus',
        title: 'iCloud+',
        description: 'Share iCloud+ subscription costs with family members. Organize group payments for expanded Apple cloud storage, iCloud Private Relay, and Hide My Email, and track contributions.',
        icon: '☁️',
        keywords: 'icloud plus group subscription, share icloud+ cost, icloud payment splitting, split icloud subscription, icloud plus group contributions',
        category: 'Cloud Storage'
      },
      {
        slug: 'nordvpn',
        title: 'NordVPN',
        description: 'Share NordVPN subscription costs with friends and family. Organize group payments for VPN service, online privacy, and secure browsing, and track monthly contributions.',
        icon: '🔒',
        keywords: 'nordvpn group subscription, share nordvpn cost, nordvpn payment splitting, split nordvpn subscription, nordvpn group contributions',
        category: 'VPN'
      },
      {
        slug: 'expressvpn',
        title: 'ExpressVPN',
        description: 'Share ExpressVPN subscription costs with your group. Coordinate payments for VPN service, fast connections, and global server access, and track contributions.',
        icon: '🔐',
        keywords: 'expressvpn group subscription, share expressvpn cost, expressvpn payment splitting, split expressvpn subscription, expressvpn group contributions',
        category: 'VPN'
      },
      {
        slug: 'new-york-times',
        title: 'The New York Times',
        description: 'Share The New York Times subscription costs with news readers. Organize group payments for digital news access, articles, and premium content, and track monthly contributions.',
        icon: '📰',
        keywords: 'new york times group subscription, share nyt cost, nyt payment splitting, split new york times subscription, nyt group contributions',
        category: 'News'
      },
      {
        slug: 'wall-street-journal',
        title: 'The Wall Street Journal',
        description: 'Share The Wall Street Journal subscription costs with business professionals. Coordinate payments for business news, financial insights, and premium articles, and track contributions.',
        icon: '📈',
        keywords: 'wall street journal group subscription, share wsj cost, wsj payment splitting, split wall street journal subscription, wsj group contributions',
        category: 'News'
      }
  ]

  const categories = ['Entertainment', 'Music', 'Productivity', 'Food & Drinks', 'Fitness & Health', 'Gaming', 'Cloud Storage', 'VPN', 'News']

  // Filter subscriptions based on search query and selected category
  const filteredSubscriptions = useMemo(() => {
    return subscriptions.filter(sub => {
      // Category filter
      if (selectedCategory && sub.category !== selectedCategory) {
        return false
      }

      // Search filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase()
        const searchableText = `${sub.title} ${sub.description} ${sub.keywords}`.toLowerCase()
        return searchableText.includes(query)
      }

      return true
    })
  }, [searchQuery, selectedCategory])

  const handleCategoryClick = (category) => {
    if (category === 'All') {
      setSelectedCategory(null)
    } else if (selectedCategory === category) {
      setSelectedCategory(null)
    } else {
      setSelectedCategory(category)
    }
  }

  return (
    <>
    <SEO
      title="Subscription Groups - Manage Shared Subscriptions | GroupFund"
      description="Learn about Subscription Groups in GroupFund. Manage shared subscriptions like Netflix, Spotify, Disney+ with monthly or annual payment schedules, automatic deadline tracking, and reliable payment management."
      keywords="subscription groups, shared subscriptions, Netflix subscription, Spotify group subscription, subscription management, recurring payments"
      canonical="https://www.groupfund.app/subscription-groups"
    />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Share Subscription Costs</h1>
          <p className="page-subtitle">
          Subscription services are better when shared. From Netflix and Spotify to Disney+ and YouTube Premium to HelloFresh and Just Eat, to PureGym and Planet Fitness, GroupFund helps you organize group contributions, track payments, and split subscription costs fairly among friends and family.
          </p>
        
        </div>
      </section>

      <section className="subscription-groups-page">
        <div className="container">
          {/* Search and Filter Section */}
          <div style={{ marginBottom: '3rem', padding: '2rem', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
            <h3 style={{ marginBottom: '1rem', textAlign: 'center' }}>Find Your Subscription</h3>
            <p style={{ marginBottom: '1.5rem', color: '#666', textAlign: 'center' }}>
              Browse subscription services by category or search for a specific service. From Netflix and Spotify to ChatGPT and Canva, to HelloFresh and Just Eat, to PureGym and Planet Fitness, find the perfect subscription to share with your group.
            </p>
            
            {/* Search Input */}
            <div style={{ marginBottom: '1.5rem', maxWidth: '600px', margin: '0 auto 1.5rem' }}>
              <input
                type="text"
                placeholder="Search subscriptions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  fontSize: '1rem',
                  border: '1px solid #ddd',
                  borderRadius: '8px',
                  outline: 'none',
                  transition: 'border-color 0.3s ease'
                }}
                onFocus={(e) => e.target.style.borderColor = '#6366f1'}
                onBlur={(e) => e.target.style.borderColor = '#ddd'}
              />
            </div>

            {/* Category Filters */}
            <div className="category-filters">
              <button
                onClick={() => handleCategoryClick('All')}
                style={{
                  padding: '0.5rem 1rem',
                  backgroundColor: selectedCategory === null ? '#6366f1' : '#fff',
                  color: selectedCategory === null ? '#fff' : '#333',
                  border: '1px solid',
                  borderColor: selectedCategory === null ? '#6366f1' : '#ddd',
                  borderRadius: '20px',
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  fontWeight: selectedCategory === null ? '600' : '400'
                }}
                onMouseEnter={(e) => {
                  if (selectedCategory !== null) {
                    e.target.style.backgroundColor = '#f0f0f0'
                  }
                }}
                onMouseLeave={(e) => {
                  if (selectedCategory !== null) {
                    e.target.style.backgroundColor = '#fff'
                  }
                }}
              >
                All
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryClick(category)}
                  style={{
                    padding: '0.5rem 1rem',
                    backgroundColor: selectedCategory === category ? '#6366f1' : '#fff',
                    color: selectedCategory === category ? '#fff' : '#333',
                    border: '1px solid',
                    borderColor: selectedCategory === category ? '#6366f1' : '#ddd',
                    borderRadius: '20px',
                    fontSize: '0.9rem',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    fontWeight: selectedCategory === category ? '600' : '400'
                  }}
                  onMouseEnter={(e) => {
                    if (selectedCategory !== category) {
                      e.target.style.backgroundColor = '#f0f0f0'
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (selectedCategory !== category) {
                      e.target.style.backgroundColor = '#fff'
                    }
                  }}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Results count */}
            {(searchQuery || selectedCategory) && (
              <div style={{ marginTop: '1rem', textAlign: 'center', color: '#666', fontSize: '0.9rem' }}>
                {filteredSubscriptions.length === 0 ? (
                  <p>No subscriptions found matching your criteria.</p>
                ) : (
                  <p>Showing {filteredSubscriptions.length} {filteredSubscriptions.length === 1 ? 'subscription' : 'subscriptions'}</p>
                )}
              </div>
            )}
          </div>

          {/* <div className="subscription-groups-intro">
            <p>
              Subscription services are better when shared. From Netflix and Spotify to Disney+ and YouTube Premium, GroupFund helps you organize group contributions, track payments, and split subscription costs fairly among friends and family.
            </p>
            <div className="intro-cta">
              <a href="/group-types/subscription-groups" className="learn-more-link">
                Learn how Subscription Groups work →
              </a>
            </div>
          </div> */}

          {/* Subscriptions Grid */}
          {filteredSubscriptions.length > 0 ? (
            <div className="subscription-groups-grid">
              {filteredSubscriptions.map((subscription) => (
                <a 
                  key={subscription.slug} 
                  href={`/subscription-groups/${subscription.slug}`}
                  className="subscription-group-card"
                >
                  <div className="subscription-group-icon">{subscription.icon}</div>
                  <h2 className="subscription-group-title">{subscription.title}</h2>
                  <p className="subscription-group-description">{subscription.description}</p>
                  <div className="subscription-group-link">
                    <span>Learn More →</span>
                  </div>
                </a>
              ))}
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '3rem', color: '#666' }}>
              <p style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>No subscriptions found</p>
              <p>Try adjusting your search or category filter.</p>
            </div>
          )}

          <div className="subscription-groups-info">
            <h2>Why Share Subscription Costs?</h2>
            <div className="info-grid">
              <div className="info-card">
                <div className="info-icon">💰</div>
                <h3>Save Money</h3>
                <p>Split costs and save on monthly subscription expenses.</p>
              </div>
              <div className="info-card">
                <div className="info-icon">📊</div>
                <h3>Track Payments</h3>
                <p>Keep track of who's paid and who owes for the subscription.</p>
              </div>
              <div className="info-card">
                <div className="info-icon">⚖️</div>
                <h3>Fair Splitting</h3>
                <p>Ensure everyone pays their fair share of the subscription cost.</p>
              </div>
              <div className="info-card">
                <div className="info-icon">🔔</div>
                <h3>Payment Reminders</h3>
                <p>Automated reminders so no one forgets to contribute.</p>
              </div>
            </div>
          </div>

          <div className="subscription-groups-cta">
            <h2>Ready to Start Sharing Subscriptions?</h2>
            <p>Create your subscription group today and start splitting costs with friends and family. Whether it's Netflix, Spotify, or any other service, GroupFund makes it easy.</p>
            <div className="cta-buttons">
            <Link to="/get-started" className="btn btn-primary btn-large">Start Free with GroupFund</Link>
             <Link to="/how-it-works" className="btn btn-secondary btn-large">See How It Works</Link>
            </div>
          </div>

          <div className="related-pages">
            <h2>Related Pages</h2>
            <div className="related-grid">
             <Link to="/group-types/subscription-groups" className="related-card">
                <span className="related-icon">⚙️</span>
                <h3>How Subscription Groups Work</h3>
                <p>Learn about the features and setup process</p>
                </Link>
             <Link to="/use-cases" className="related-card">
                <span className="related-icon">📋</span>
                <h3>Use Cases</h3>
                <p>Explore all use cases for group contributions</p>
                </Link>
             <Link to="/group-types" className="related-card">
                <span className="related-icon">👥</span>
                <h3>Group Types</h3>
                <p>Learn about different types of groups</p>
                </Link>
            <Link to="/tools" className="related-card">
                <span className="related-icon">🧮</span>
                <h3>Cost Calculator</h3>
                <p>Calculate subscription cost splits</p>
                </Link>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .subscription-groups-page {
          padding: 3rem 0;
        }

        .subscription-groups-intro {
          text-align: center;
          max-width: 800px;
          margin: 0 auto 3rem;
          color: #6b7280;
          font-size: 1.1rem;
          line-height: 1.8;
        }

        .intro-cta {
          margin-top: 1.5rem;
        }

        .learn-more-link {
          display: inline-block;
          color: #6366f1;
          font-weight: 600;
          text-decoration: none;
          padding: 0.5rem 1rem;
          border: 2px solid #6366f1;
          border-radius: 6px;
          transition: all 0.3s;
        }

        .learn-more-link:hover {
          background: #6366f1;
          color: white;
        }

        .subscription-groups-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
        }

        .subscription-group-card {
          background: white;
          border: 2px solid #e5e7eb;
          border-radius: 12px;
          padding: 2rem;
          text-decoration: none;
          color: inherit;
          transition: all 0.3s;
          display: flex;
          flex-direction: column;
        }

        .subscription-group-card:hover {
          border-color: #6366f1;
          box-shadow: 0 8px 16px rgba(99, 102, 241, 0.15);
          transform: translateY(-4px);
        }

        .subscription-group-icon {
          font-size: 3.5rem;
          margin-bottom: 1rem;
        }

        .subscription-group-title {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 0.75rem;
          color: #111827;
        }

        .subscription-group-description {
          color: #6b7280;
          line-height: 1.7;
          margin-bottom: 1.5rem;
          flex-grow: 1;
        }

        .subscription-group-link {
          margin-top: auto;
          padding-top: 1rem;
          border-top: 1px solid #e5e7eb;
        }

        .subscription-group-link span {
          color: #6366f1;
          font-weight: 600;
          font-size: 1rem;
        }

        .subscription-group-card:hover .subscription-group-link span {
          color: #5568d3;
        }

        .subscription-groups-info {
          margin: 4rem 0;
          padding: 3rem 0;
          border-top: 2px solid #e5e7eb;
          border-bottom: 2px solid #e5e7eb;
        }

        .subscription-groups-info h2 {
          font-size: 1.75rem;
          text-align: center;
          margin-bottom: 2rem;
          color: #111827;
        }

        .info-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }

        .info-card {
          text-align: center;
          padding: 1.5rem;
        }

        .info-icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        .info-card h3 {
          font-size: 1.25rem;
          margin-bottom: 0.75rem;
          color: #111827;
        }

        .info-card p {
          color: #6b7280;
          line-height: 1.6;
        }

        .subscription-groups-cta {
          text-align: center;
          padding: 3rem 2rem;
          background: #f9fafb;
          border-radius: 12px;
          margin: 4rem 0;
        }

        .subscription-groups-cta h2 {
          font-size: 1.75rem;
          margin-bottom: 0.75rem;
          color: #111827;
        }

        .subscription-groups-cta p {
          color: #6b7280;
          margin-bottom: 2rem;
          font-size: 1.1rem;
        }

        .related-pages {
          margin-top: 4rem;
          padding-top: 3rem;
          border-top: 2px solid #e5e7eb;
        }

        .related-pages h2 {
          font-size: 1.75rem;
          margin-bottom: 2rem;
          color: #111827;
        }

        .related-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
        }

        .related-card {
          display: flex;
          flex-direction: column;
          padding: 1.5rem;
          background: white;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          text-decoration: none;
          color: inherit;
          transition: all 0.3s;
        }

        .related-card:hover {
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transform: translateY(-2px);
        }

        .related-icon {
          font-size: 2rem;
          margin-bottom: 0.75rem;
        }

        .related-card h3 {
          font-size: 1.1rem;
          margin-bottom: 0.5rem;
          color: #111827;
        }

        .related-card p {
          font-size: 0.9rem;
          color: #6b7280;
          margin: 0;
        }

        @media (max-width: 768px) {
          .subscription-groups-grid {
            grid-template-columns: 1fr;
          }

          .info-grid {
            grid-template-columns: 1fr;
          }

          .related-grid {
            grid-template-columns: 1fr;
          }

          .cta-buttons {
            flex-direction: column;
          }

          .cta-buttons .btn {
            width: 100%;
          }
        }
      `}</style>
    </>
  )
}