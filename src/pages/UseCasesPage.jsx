import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function UseCasesPage() {
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
    }
  ]

  return (
    <>
      <SEO
        title="Use Cases - GroupFund for Families, Churches, Schools & More"
        description="Discover how GroupFund helps families, churches, schools, friend groups, workplaces, and community organizations organize contributions for birthdays, subscriptions, and events effortlessly. Find the perfect solution for your group."
        keywords="group contributions use cases, birthday groups, subscription groups, general groups, family contribution app, church contributions, school fund, friend group contributions, workplace fund, community organization contributions"
        canonical="https://groupfund.app/use-cases"
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

