import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function UseCasesPage() {
  const useCases = [
    {
      slug: 'families',
      title: 'For Families',
      description: 'Organize birthday contributions for your extended family with ease. Keep track of everyone\'s contributions, set fair amounts, and celebrate together without the stress.',
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
      description: 'Streamline birthday contributions for church members. Manage large groups efficiently, track member reliability, and maintain transparency in your church community.',
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
      description: 'Organize birthday contributions for teachers, staff, or students. Perfect for class groups, teacher associations, and school communities.',
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
      description: 'Keep your friend group\'s birthday celebrations organized. No more awkward reminders or forgotten contributions. Celebrate together effortlessly.',
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
      description: 'Organize birthday contributions for colleagues and team members. Perfect for office birthday funds, team celebrations, and workplace communities.',
      icon: '💼',
      keywords: 'workplace birthday contributions, office birthday fund, colleague birthday contributions Nigeria',
      benefits: [
        'Organize office birthday funds',
        'Track contributions for team members',
        'Professional and transparent system',
        'Easy to manage workplace groups'
      ]
    }
  ]

  return (
    <>
      <SEO
        title="Use Cases - GroupFund for Families, Churches, Schools & More"
        description="Discover how GroupFund helps families, churches, schools, friend groups, and workplaces organize birthday contributions effortlessly. Find the perfect solution for your group."
        keywords="birthday contributions use cases, family birthday app, church birthday contributions, school birthday fund, friend group contributions, workplace birthday fund"
        canonical="https://groupfund.app/use-cases"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Use Cases</h1>
          <p className="page-subtitle">
            GroupFund works perfectly for any group that wants to organize birthday contributions effortlessly.
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
            <p>Choose the use case that fits your group and start organizing birthday contributions today.</p>
            <Link to="/waitlist" className="btn btn-primary btn-large">Join the Waitlist</Link>
          </div>
        </div>
      </section>
    </>
  )
}

