import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function SeasonalPage() {
  useEffect(() => {
    const webPageStructuredData = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Seasonal - GroupFund",
      "description": "Organize group contributions for seasonal events: holidays, back-to-school, wedding season, and more. Perfect for seasonal group contributions.",
      "url": "https://groupfund.app/seasonal"
    }
    const existingScript = document.querySelector('script[data-seasonal-schema]')
    if (existingScript) existingScript.remove()
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.setAttribute('data-seasonal-schema', 'true')
    script.textContent = JSON.stringify(webPageStructuredData)
    document.head.appendChild(script)
    return () => {
      const scriptToRemove = document.querySelector('script[data-seasonal-schema]')
      if (scriptToRemove) scriptToRemove.remove()
    }
  }, [])

  const seasonalContent = [
    {
      slug: 'new-year-contributions',
      title: 'New Year Contributions',
      description: 'Organize group contributions for New Year celebrations. Manage New Year party funds, New Year resolution groups, and New Year dinner contributions. Perfect for families, workplaces, and communities.',
      icon: '🎉',
      keywords: 'new year group contributions, New Year party funds, New Year resolution groups, New Year dinner contributions, New Year group payments'
    },
    {
      slug: 'valentine-contributions',
      title: 'Valentine\'s Day Contributions',
      description: 'Organize group contributions for Valentine\'s Day celebrations. Manage couple gifts, romantic dinner funds, and love-themed events with ease. Perfect for friends planning group dates, office celebrations, or community Valentine events.',
      icon: '💝',
      keywords: 'valentine group contributions, valentine\'s day group payments, romantic celebration contributions, couple gift funds, valentine event payments, love day group funds'
    },
    {
      slug: 'st-patricks-day-contributions',
      title: 'St. Patrick\'s Day Contributions',
      description: 'Organize group contributions for St. Patrick\'s Day celebrations. Manage party funds, parade contributions, and Irish-themed events with ease. Perfect for friend groups, office celebrations, and community St. Patrick\'s Day events.',
      icon: '☘️',
      keywords: 'st patricks day group contributions, st patrick\'s day party funds, st patricks day group payments, irish celebration contributions, st patricks day event payments'
    },
    {
      slug: 'easter-contributions',
      title: 'Easter Contributions',
      description: 'Organize group contributions for Easter celebrations. Manage Easter egg hunts, holiday brunch funds, and spring festivities with ease. Perfect for families, churches, and community Easter events.',
      icon: '🐰',
      keywords: 'easter group contributions, easter egg hunt payments, easter celebration contributions, easter brunch funds, spring holiday group payments, easter event contributions'
    },
    {
      slug: 'memorial-day-contributions',
      title: 'Memorial Day Contributions',
      description: 'Organize group contributions for Memorial Day celebrations. Manage BBQ funds, family gathering contributions, and remembrance events with ease. Perfect for families, communities, and workplaces honoring Memorial Day.',
      icon: '🇺🇸',
      keywords: 'memorial day group contributions, memorial day party funds, memorial day group payments, memorial day bbq contributions, memorial day event payments'
    },
    {
      slug: 'mothers-day-contributions',
      title: 'Mother\'s Day Contributions',
      description: 'Organize group contributions for Mother\'s Day celebrations. Manage gift funds, brunch expenses, and spa day treats with ease. Perfect for siblings pooling together, workplace celebrations, or extended family gatherings.',
      icon: '🌸',
      keywords: 'mothers day group contributions, mother\'s day group payments, mother\'s day celebration contributions, mom gift funds, mother\'s day brunch payments, family gift group fund, mom appreciation contributions'
    },
    {
      slug: 'teacher-appreciation-contributions',
      title: 'Teacher Appreciation Contributions',
      description: 'Organize group contributions for teacher appreciation. Manage gift funds, classroom supplies, and thank-you celebrations with ease. Perfect for parent groups, students, and school communities honoring educators.',
      icon: '🍎',
      keywords: 'teacher appreciation group contributions, teacher gift funds, classroom supply contributions, teacher thank you payments, educator gift group fund, teacher appreciation week contributions'
    },
    {
      slug: 'graduation-contributions',
      title: 'Graduation Contributions',
      description: 'Organize group contributions for graduation celebrations. Manage gift funds, party expenses, and achievement rewards with ease. Perfect for families, classmates, and friends celebrating academic milestones.',
      icon: '🎓',
      keywords: 'graduation group contributions, graduation gift funds, grad party payments, graduation celebration contributions, achievement gift group fund, graduation event payments'
    },
    {
      slug: 'fathers-day-contributions',
      title: 'Father\'s Day Contributions',
      description: 'Organize group contributions for Father\'s Day celebrations. Manage father\'s day gift funds, brunch contributions, and family gatherings with ease. Perfect for families, workplaces, and communities.',
      icon: '👨',
      keywords: 'fathers day group contributions, father\'s day group payments, father\'s day celebration contributions, father\'s day brunch funds, family gathering group payments, father\'s day event contributions'
    },
    {
      slug: 'independence-day-contributions',
      title: 'Independence Day Contributions',
      description: 'Organize group contributions for Independence Day celebrations. Manage independence day gift funds, brunch contributions, and family gatherings with ease. Perfect for families, workplaces, and communities.',
      icon: '🇺🇸',
      keywords: 'independence day group contributions, independence day group payments, independence day celebration contributions, independence day brunch funds, family gathering group payments, independence day event contributions'
    },
    {
      slug: 'back-to-school-contributions',
      title: 'Back to School Contributions',
      description: 'Coordinate group contributions for back-to-school expenses, school supplies, teacher gifts, and education-related costs. Perfect for parent groups, PTA organizations, and school communities.',
      icon: '📚',
      keywords: 'school group contributions, back to school payments, education group contributions, school supply contributions, teacher gift funds'
    },
    {
      slug: 'labor-day-contributions',
      title: 'Labor Day Contributions',
      description: 'Organize group contributions for Labor Day celebrations. Manage labor day gift funds, brunch contributions, and family gatherings with ease. Perfect for families, workplaces, and communities.',
      icon: '👷',
      keywords: 'labor day group contributions, labor day group payments, labor day celebration contributions, labor day brunch funds, family gathering group payments, labor day event contributions'
    },
    {
      slug: 'halloween-contributions',
      title: 'Halloween Contributions',
      description: 'Organize group contributions for Halloween celebrations. Manage halloween gift funds, brunch contributions, and family gatherings with ease. Perfect for families, workplaces, and communities.',
      icon: '🎃',
      keywords: 'halloween group contributions, halloween group payments, halloween celebration contributions, halloween brunch funds, family gathering group payments, halloween event contributions'
    },
    {
      slug: 'diwali-contributions',
      title: 'Diwali Contributions',
      description: 'Organize group contributions for Diwali celebrations. Manage diwali gift funds, brunch contributions, and family gatherings with ease. Perfect for families, workplaces, and communities.',
      icon: '🕉️',
      keywords: 'diwali group contributions, diwali group payments, diwali celebration contributions, diwali brunch funds, family gathering group payments, diwali event contributions'
    },
    {
      slug: 'thanksgiving-contributions',
      title: 'Thanksgiving Contributions',
      description: 'Organize group contributions for Thanksgiving celebrations. Manage thanksgiving gift funds, brunch contributions, and family gatherings with ease. Perfect for families, workplaces, and communities.',
      icon: '🦃',
      keywords: 'thanksgiving group contributions, thanksgiving group payments, thanksgiving celebration contributions, thanksgiving brunch funds, family gathering group payments, thanksgiving event contributions'
    },
    {
      slug: 'holiday-contributions',
      title: 'Holiday Contributions',
      description: 'Organize group contributions during holiday seasons. Manage Christmas contributions, holiday gift funds, and seasonal celebrations with ease. Perfect for families, workplaces, and communities.',
      icon: '🎄',
      keywords: 'holiday group contributions, Christmas group payments, holiday season contributions, holiday gift funds, seasonal group payments'
    },
    {
      slug: 'christmas-contributions',
      title: 'Christmas Contributions',
      description: 'Organize group contributions for Christmas celebrations. Manage Secret Santa funds, Christmas gift contributions, holiday party expenses, and Christmas dinner funds with ease. Perfect for families, workplaces, and communities.',
      icon: '🎅',
      keywords: 'christmas group contributions, christmas gift funds, secret santa contributions, christmas party funds, christmas group payments, holiday gift contributions'
    },
    {
      slug: 'hanukkah-contributions',
      title: 'Hanukkah Contributions',
      description: 'Organize group contributions for Hanukkah celebrations. Manage Festival of Lights funds, Hanukkah gift contributions, and traditional celebration expenses with ease. Perfect for Jewish families, communities, and organizations.',
      icon: '🕎',
      keywords: 'hanukkah group contributions, hanukkah gift funds, festival of lights contributions, hanukkah celebration funds, hanukkah group payments, jewish holiday contributions'
    },
    {
      slug: 'kwanzaa-contributions',
      title: 'Kwanzaa Contributions',
      description: 'Organize group contributions for Kwanzaa celebrations. Manage Kwanzaa gift funds, community celebration contributions, and traditional celebration expenses with ease. Perfect for families, communities, and organizations celebrating Kwanzaa.',
      icon: '🕯️',
      keywords: 'kwanzaa group contributions, kwanzaa gift funds, kwanzaa celebration contributions, kwanzaa community funds, kwanzaa group payments, african american holiday contributions'
    },
    {
      slug: 'chinese-new-year-contributions',
      title: 'Chinese New Year Contributions',
      description: 'Organize group contributions for Chinese New Year and Lunar New Year celebrations. Manage red envelope funds, celebration contributions, and traditional New Year expenses with ease. Perfect for families, communities, and organizations.',
      icon: '🧧',
      keywords: 'chinese new year group contributions, lunar new year contributions, chinese new year gift funds, red envelope contributions, chinese new year celebration funds, lunar new year group payments'
    },
    {
      slug: 'ramadan-eid-contributions',
      title: 'Ramadan & Eid Contributions',
      description: 'Organize group contributions for Ramadan and Eid celebrations. Manage iftar dinner funds, Eid gift contributions, and religious celebration expenses with ease. Perfect for Muslim families, communities, and organizations.',
      icon: '🌙',
      keywords: 'ramadan group contributions, eid contributions, iftar dinner funds, eid gift funds, ramadan celebration contributions, eid al-fitr contributions, eid al-adha contributions'
    },
    // Year-round life events (not tied to specific dates)
    {
      slug: 'baby-shower-contributions',
      title: 'Baby Shower Contributions',
      description: 'Organize group contributions for baby shower celebrations. Manage gift funds, party expenses, and baby essentials with ease. Perfect for friends, family members, and coworkers celebrating new parents.',
      icon: '👶',
      keywords: 'baby shower group contributions, baby gift funds, baby shower party payments, new baby gift group fund, baby celebration contributions, baby shower event payments'
    },
    {
      slug: 'wedding-season-contributions',
      title: 'Wedding Season Contributions',
      description: 'Organize group contributions for weddings, bridal parties, and wedding-related events. Coordinate bridal shower contributions, wedding gift funds, and celebration expenses.',
      icon: '💒',
      keywords: 'wedding group contributions, wedding season payments, bridal party contributions, wedding gift funds, bridal shower contributions'
    },
    {
      slug: 'housewarming-contributions',
      title: 'Housewarming Contributions',
      description: 'Organize group contributions for housewarming celebrations. Manage gift funds, party expenses, and home essentials with ease. Perfect for friends, colleagues, and family members welcoming someone to their new home.',
      icon: '🏠',
      keywords: 'housewarming group contributions, new home gift funds, housewarming party payments, house gift group fund, moving gift contributions, new home celebration payments'
    },
    {
      slug: 'office-party-contributions',
      title: 'Office Party Contributions',
      description: 'Organize group contributions for office celebrations. Manage party expenses, team lunches, and workplace events with ease. Perfect for coworkers planning holiday parties, retirement celebrations, or team-building activities.',
      icon: '🎊',
      keywords: 'office party group contributions, workplace celebration payments, team lunch funds, office event contributions, company party group payments, workplace gathering contributions'
    }
  ]

  return (
    <>
      <SEO
        title="Seasonal Group Contributions - Christmas, Holiday, Back to School, Wedding Season | GroupFund"
        description="Organize group contributions for seasonal events: Christmas, holidays, back-to-school, wedding season, and more. Manage Christmas contributions, Secret Santa, holiday gift funds, school payments, wedding funds, and seasonal celebrations with GroupFund."
        keywords="seasonal group contributions, Christmas contributions, holiday contributions, Christmas group payments, Secret Santa contributions, Christmas gift funds, back to school contributions, wedding season payments, seasonal gift funds, holiday season payments, Christmas 2025, organize Christmas gifts"
        canonical="https://www.groupfund.app/seasonal"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Seasonal Group Contributions</h1>
          <p className="page-subtitle">
            Organize group contributions for seasonal events and celebrations. Whether it's Christmas, holidays, back-to-school, wedding season, or other special times, GroupFund helps you manage seasonal contributions effectively.
          </p>
        </div>
      </section>

      <section className="seasonal-page">
        <div className="container">
          <div className="seasonal-intro">
            <p>
              Different seasons bring unique opportunities and challenges for organizing group contributions. From holiday celebrations to back-to-school expenses and wedding seasons, GroupFund provides solutions tailored to seasonal contribution needs.
            </p>
          </div>

          <div className="seasonal-grid">
            {seasonalContent.map((seasonal) => (
              <Link 
                key={seasonal.slug} 
                to={`/seasonal/${seasonal.slug}`}
                className="seasonal-card"
              >
                <div className="seasonal-icon">{seasonal.icon}</div>
                <h2 className="seasonal-title">{seasonal.title}</h2>
                <p className="seasonal-description">{seasonal.description}</p>
                <div className="seasonal-link">
                  <span>Learn More →</span>
                </div>
              </Link>
            ))}
          </div>

          <div className="seasonal-info">
            <h2>Why Seasonal Contributions Matter</h2>
            <div className="info-grid">
              <div className="info-card">
                <div className="info-icon">📅</div>
                <h3>Timely Planning</h3>
                <p>Plan ahead for seasonal expenses and celebrations with deadline management and reminders.</p>
              </div>
              <div className="info-card">
                <div className="info-icon">🎁</div>
                <h3>Gift Coordination</h3>
                <p>Coordinate gift giving during holidays and special seasons to avoid duplicates and ensure everyone gets what they want.</p>
              </div>
              <div className="info-card">
                <div className="info-icon">💰</div>
                <h3>Budget Management</h3>
                <p>Manage seasonal budgets effectively with contribution tracking and planning tools.</p>
              </div>
              <div className="info-card">
                <div className="info-icon">🤝</div>
                <h3>Fair Contributions</h3>
                <p>Ensure fair and transparent contributions during busy seasonal periods.</p>
              </div>
            </div>
          </div>

          <div className="seasonal-cta">
            <h2>Ready to Organize Your Seasonal Contributions?</h2>
            <p>Start organizing group contributions for holidays, back-to-school, wedding season, and other special times. GroupFund makes seasonal contribution management easy.</p>
            <div className="cta-buttons">
            <Link to="/get-started" className="btn btn-primary btn-large">Start Your Free Group</Link>
            <Link to="/how-it-works" className="btn btn-secondary btn-large">See How It Works</Link>
            </div>
          </div>

          <div className="related-pages">
            <h2>Related Pages</h2>
            <div className="related-grid">
              <Link to="/use-cases" className="related-card">
                <span className="related-icon">📋</span>
                <h3>Use Cases</h3>
                <p>Explore use cases for different group types</p>
              </Link>
              <Link to="/group-types" className="related-card">
                <span className="related-icon">👥</span>
                <h3>Group Types</h3>
                <p>Learn about Birthday, Subscription, and General Groups</p>
              </Link>
              <Link to="/resources" className="related-card">
                <span className="related-icon">📚</span>
                <h3>Resources</h3>
                <p>Guides and best practices for group contributions</p>
              </Link>
              <Link to="/tools" className="related-card">
                <span className="related-icon">🛠️</span>
                <h3>Tools</h3>
                <p>Free calculators and planning tools</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .seasonal-page {
          padding: 3rem 0;
        }

        .seasonal-intro {
          text-align: center;
          max-width: 800px;
          margin: 0 auto 3rem;
          color: #6b7280;
          font-size: 1.1rem;
          line-height: 1.8;
        }

        .seasonal-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
        }

        .seasonal-card {
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

        .seasonal-card:hover {
          border-color: #667eea;
          box-shadow: 0 8px 16px rgba(102, 126, 234, 0.15);
          transform: translateY(-4px);
        }

        .seasonal-icon {
          font-size: 3.5rem;
          margin-bottom: 1rem;
        }

        .seasonal-title {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 0.75rem;
          color: #111827;
        }

        .seasonal-description {
          color: #6b7280;
          line-height: 1.7;
          margin-bottom: 1.5rem;
          flex-grow: 1;
        }

        .seasonal-link {
          margin-top: auto;
          padding-top: 1rem;
          border-top: 1px solid #e5e7eb;
        }

        .seasonal-link span {
          color: #667eea;
          font-weight: 600;
          font-size: 1rem;
        }

        .seasonal-card:hover .seasonal-link span {
          color: #5568d3;
        }

        .seasonal-info {
          margin: 4rem 0;
          padding: 3rem 0;
          border-top: 2px solid #e5e7eb;
          border-bottom: 2px solid #e5e7eb;
        }

        .seasonal-info h2 {
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

        .seasonal-cta {
          text-align: center;
          padding: 3rem 2rem;
          background: #f9fafb;
          border-radius: 12px;
          margin: 4rem 0;
        }

        .seasonal-cta h2 {
          font-size: 1.75rem;
          margin-bottom: 0.75rem;
          color: #111827;
        }

        .seasonal-cta p {
          color: #6b7280;
          margin-bottom: 2rem;
          font-size: 1.1rem;
        }

        .cta-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
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
          .seasonal-grid {
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

