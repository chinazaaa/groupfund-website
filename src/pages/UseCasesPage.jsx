import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function UseCasesPage() {
  useEffect(() => {
    const webPageStructuredData = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Use Cases - GroupFund",
      "description": "Discover how GroupFund is used by families, churches, schools, workplaces, and other groups to organize contributions for birthdays, subscriptions, and events.",
      "url": "https://groupfund.app/use-cases"
    }
    const existingScript = document.querySelector('script[data-use-cases-schema]')
    if (existingScript) existingScript.remove()
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.setAttribute('data-use-cases-schema', 'true')
    script.textContent = JSON.stringify(webPageStructuredData)
    document.head.appendChild(script)
    return () => {
      const scriptToRemove = document.querySelector('script[data-use-cases-schema]')
      if (scriptToRemove) scriptToRemove.remove()
    }
  }, [])

  const useCases = [
    {
      slug: 'families',
      title: 'For Families',
      description: 'Organize contributions for birthdays, shared subscriptions, and family events with ease. Keep track of everyone\'s contributions, set fair amounts, and celebrate together without the stress.',
      icon: '👨‍👩‍👧‍👦',
      keywords: 'family birthday contributions, family group payments, extended family birthday fund',
      benefits: [
        'Track contributions across multiple family members',
        'Set fair contribution amounts for everyone',
        'Never miss a family member\'s birthday',
        'Transparent tracking so everyone knows who contributed'
      ]
    },
    {
      slug: 'churches',
      title: 'For Churches',
      description: 'Streamline contributions for birthdays, subscriptions, and church events. Manage large groups efficiently, track member reliability, and maintain transparency in your church community.',
      icon: '⛪',
      keywords: 'church birthday contributions, church member contributions, church birthday fund Nigeria',
      benefits: [
        'Manage large church groups efficiently',
        'Track member reliability scores',
        'Maintain transparency in contributions',
        'Automatic reminders for church members'
      ]
    },
    {
      slug: 'schools',
      title: 'For Schools',
      description: 'Organize group contributions for teachers, staff, or students. Perfect for class groups, teacher associations, and school communities - for birthdays, subscriptions, events, and more.',
      icon: '🏫',
      keywords: 'school birthday contributions, class birthday fund, teacher birthday contributions',
      benefits: [
        'Perfect for class groups and teacher associations',
        'Easy to set up and manage',
        'Track contributions for school events',
        'Maintain records for school administration'
      ]
    },
    {
      slug: 'friend-groups',
      title: 'For Friend Groups',
      description: 'Keep your friend group\'s contributions organized - for birthdays, shared subscriptions, or events. No more awkward reminders or forgotten contributions.',
      icon: '👥',
      keywords: 'friend group birthday contributions, friend group birthday fund, group birthday tracker',
      benefits: [
        'Keep friend groups organized',
        'Avoid awkward payment reminders',
        'Fair contribution amounts for everyone',
        'Celebrate together without stress'
      ]
    },
    {
      slug: 'workplace',
      title: 'For Workplace',
      description: 'Organize contributions for colleagues and team members - birthdays, shared subscriptions, team events. Perfect for office funds and workplace communities.',
      icon: '💼',
      keywords: 'workplace birthday contributions, office birthday fund, colleague birthday contributions Nigeria',
      benefits: [
        'Organize office birthday funds',
        'Track contributions for team members',
        'Professional and transparent system',
        'Easy to manage workplace groups'
      ]
    },
    {
      slug: 'community-organizations',
      title: 'For Community Organizations',
      description: 'Organize birthday contributions for community organizations, neighborhood groups, alumni associations, and clubs. Perfect for any community-based group.',
      icon: '🏘️',
      keywords: 'community birthday contributions, neighborhood birthday fund, alumni birthday contributions, community organization contributions',
      benefits: [
        'Perfect for neighborhood groups and alumni associations',
        'Manage sports clubs and hobby groups',
        'Transparent system for community organizations',
        'Easy to set up for any community group'
      ]
    },
    {
      slug: 'shared-subscriptions',
      title: 'For Shared Subscriptions',
      description: 'Manage shared subscriptions like Netflix, Spotify, Disney+, and more with Subscription Groups. Set monthly or annual payment schedules, track deadlines, and never miss a payment.',
      icon: '📺',
      keywords: 'shared subscriptions, Netflix subscription sharing, Spotify group subscription, subscription management app, shared streaming services',
      benefits: [
        'Manage Netflix, Spotify, and other shared subscriptions',
        'Set monthly or annual payment frequencies',
        'Track subscription deadlines automatically',
        'Share admin account details securely'
      ]
    },
    // {
    //   slug: 'discovering-subscription-groups',
    //   title: 'Discovering Reliable Subscription Groups',
    //   description: 'Find and join reliable subscription groups using Group Discovery. Search for Netflix, Spotify, and other shared subscription groups, see health metrics before joining, and make informed decisions about which groups to join.',
    //   icon: '🔍',
    //   keywords: 'discover subscription groups, find subscription groups, reliable subscription groups, Netflix subscription groups, Spotify subscription groups, group discovery, find reliable groups',
    //   benefits: [
    //     'Search for subscription groups by platform or name',
    //     'See health metrics and reliability scores before joining',
    //     'Make informed decisions about which groups to join',
    //     'Find groups where members consistently pay on time',
    //     'Avoid unreliable groups with poor payment history'
    //   ]
    // },
    {
      slug: 'weddings',
      title: 'For Weddings',
      description: 'Organize wedding contributions with General Groups. Set contribution amounts, track payments, and manage deadlines for your special day. Perfect for couples planning their wedding.',
      icon: '💒',
      keywords: 'wedding contributions, wedding fund, wedding gift organization, wedding planning, group wedding contributions',
      benefits: [
        'Organize wedding contributions effortlessly',
        'Track who has contributed and who hasn\'t',
        'Set deadlines for wedding payments',
        'Transparent system for wedding planning'
      ]
    },
    {
      slug: 'baby-showers',
      title: 'For Baby Showers',
      description: 'Plan baby shower contributions with General Groups. Organize group gifts, track contributions, and ensure the celebration is stress-free for everyone involved.',
      icon: '👶',
      keywords: 'baby shower contributions, baby shower planning, baby shower gifts, group baby shower contributions',
      benefits: [
        'Organize baby shower contributions easily',
        'Track group gift contributions',
        'Set deadlines for baby shower payments',
        'Celebrate without the stress'
      ]
    },
    {
      slug: 'parties-and-events',
      title: 'For Parties & Events',
      description: 'Plan group parties, birthdays, and nights out with General Groups. Create a shared event pot, set contribution amounts, and track who has paid before the big day. Perfect for organizers who don’t want to chase people for money.',
      icon: '🥳',
      keywords: 'party contributions, event fund, birthday group pot, party money collection, group event payments',
      benefits: [
        'Collect money for parties and events in one place',
        'See who has paid and who still needs to contribute',
        'Set deadlines so everyone pays before the event',
        'Keep party expenses transparent for the whole group'
      ]
    },    
    {
      slug: 'graduations',
      title: 'For Graduations',
      description: 'Organize graduation contributions and gifts with General Groups. Perfect for class groups, families, and friends celebrating graduation milestones together.',
      icon: '🎓',
      keywords: 'graduation contributions, graduation gifts, graduation fund, class graduation contributions',
      benefits: [
        'Organize graduation contributions',
        'Track group gift payments',
        'Celebrate graduation milestones together',
        'Easy to manage for class groups'
      ]
    },
    {
      slug: 'sports-teams',
      title: 'For Sports Teams',
      description: 'Manage team contributions for equipment, subscriptions, and events. Perfect for sports clubs, teams, and athletic organizations organizing group payments.',
      icon: '⚽',
      keywords: 'sports team contributions, team fund, sports club contributions, athletic group payments',
      benefits: [
        'Organize team equipment contributions',
        'Manage sports subscription payments',
        'Track team event contributions',
        'Perfect for sports clubs and teams'
      ]
    },
    {
      slug: 'hobby-groups',
      title: 'For Hobby Groups',
      description: 'Organize contributions for hobby groups, book clubs, gaming groups, and interest-based communities. Manage shared subscriptions, events, and group expenses.',
      icon: '🎨',
      keywords: 'hobby group contributions, book club contributions, gaming group payments, interest group contributions',
      benefits: [
        'Manage hobby group subscriptions',
        'Organize group event contributions',
        'Track shared hobby expenses',
        'Perfect for interest-based communities'
      ]
    },
    {
      slug: 'alumni-associations',
      title: 'For Alumni Associations',
      description: 'Organize contributions for alumni events, reunions, and shared subscriptions. Perfect for alumni associations managing group payments and maintaining connections.',
      icon: '🎓',
      keywords: 'alumni contributions, alumni association payments, reunion contributions, alumni group fund',
      benefits: [
        'Organize alumni event contributions',
        'Manage reunion payments',
        'Track alumni group subscriptions',
        'Maintain connections through organized contributions'
      ]
    }
  ]

  return (
    <>
      <SEO
        title="Use Cases - GroupFund for Families, Churches, Schools & More"
        description="Discover how GroupFund helps families, churches, schools, friend groups, workplaces, sports teams, hobby groups, and community organizations organize contributions for birthdays, subscriptions, weddings, baby showers, graduations, and events effortlessly. Find the perfect solution for your group type."
        keywords="group contributions use cases, birthday groups, subscription groups, general groups, family contribution app, church contributions, school fund, friend group contributions, workplace fund, community organization contributions, shared subscriptions use case, wedding contributions, baby shower contributions, sports team contributions, hobby group payments, alumni contributions"
        canonical="https://www.groupfund.app/use-cases"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Use Cases</h1>
          <p className="page-subtitle">
            GroupFund works perfectly for any group that wants to organize contributions for birthdays, subscriptions, events, and more.
          </p>
        </div>
      </section>

      <section className="use-cases-page">
        <div className="container">
          <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Find Your Perfect Use Case</h2>
            <p style={{ fontSize: '1.1rem', color: '#666', maxWidth: '800px', margin: '0 auto' }}>
              GroupFund works for any group that needs to organize contributions. Whether you're managing birthdays, 
              shared subscriptions, or planning events, we have a solution tailored to your needs. Explore our use cases 
              to discover how different groups use GroupFund to simplify their contribution management.
            </p>
            {/* <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <span style={{ padding: '0.5rem 1rem', backgroundColor: '#e7f3ff', borderRadius: '20px', fontSize: '0.9rem', fontWeight: '500' }}>Birthday Groups</span>
              <span style={{ padding: '0.5rem 1rem', backgroundColor: '#e7f3ff', borderRadius: '20px', fontSize: '0.9rem', fontWeight: '500' }}>Subscription Groups</span>
              <span style={{ padding: '0.5rem 1rem', backgroundColor: '#e7f3ff', borderRadius: '20px', fontSize: '0.9rem', fontWeight: '500' }}>General Groups</span>
            </div> */}
          </div>

          <div className="use-cases-grid">
            {useCases.map((useCase) => (
              <article key={useCase.slug} className="use-case-card">
                <div className="use-case-icon">{useCase.icon}</div>
                <h2 className="use-case-title">{useCase.title}</h2>
                <p className="use-case-description">{useCase.description}</p>
                <ul className="use-case-benefits">
                  {useCase.benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
                <Link 
                  to={`/use-cases/${useCase.slug}`} 
                  className="btn btn-primary"
                >
                  Learn More →
                </Link>
              </article>
            ))}
          </div>

          <div className="cta-box">
            <h2>Ready to Get Started?</h2>
            <p>Choose the use case that fits your group and start organizing contributions today - for birthdays, subscriptions, or any purpose.</p>
            <Link to="/waitlist" className="btn btn-primary btn-large">Join the Waitlist</Link>
          </div>
        </div>
      </section>
    </>
  )
}

