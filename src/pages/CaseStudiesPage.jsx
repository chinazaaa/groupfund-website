import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      slug: 'church-birthday-group',
      title: 'Grace Community Church: Transforming Member Birthday Contributions',
      description: 'How a 200-member church in Abuja streamlined birthday contributions, improved participation rates, and reduced administrative burden by 80%.',
      icon: '⛪',
      category: 'Churches',
      metrics: '200 members, 80% time savings, 95% participation rate',
      keywords: 'church contribution success story, church group payment case study, religious group contributions'
    },
    {
      slug: 'family-birthday-fund',
      title: 'Okafor Family Circle: Organizing 50+ Member Family Contributions',
      description: 'A large extended family in Lagos eliminated WhatsApp chaos and achieved 100% contribution transparency using GroupFund for birthday celebrations.',
      icon: '👨‍👩‍👧‍👦',
      category: 'Families',
      metrics: '50+ members, 100% transparency, zero missed payments',
      keywords: 'family contribution success story, family group payment case study, family birthday fund example'
    }
  ]

  return (
    <>
      <SEO
        title="Group Contribution Case Studies - Real Success Stories | GroupFund"
        description="Read detailed case studies showing how churches, families, and groups successfully use GroupFund to organize group contributions. Real results, metrics, and success stories."
        keywords="group contribution case studies, contribution app success stories, group payment case studies, church contribution case study, family contribution case study, groupfund success stories"
        canonical="https://groupfund.app/case-studies"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Case Studies & Success Stories</h1>
          <p className="page-subtitle">
            Discover how real groups are using GroupFund to transform their contribution management. Read detailed case studies with metrics, results, and real-world examples.
          </p>
        </div>
      </section>

      <section className="case-studies-page">
        <div className="container">
          <div className="case-studies-intro">
            <p>
              These case studies showcase real groups that have successfully implemented GroupFund to organize their contributions. Each study includes detailed before/after scenarios, specific metrics, and actionable insights you can apply to your own group.
            </p>
          </div>

          <div className="case-studies-grid">
            {caseStudies.map((study) => (
              <Link 
                key={study.slug} 
                to={`/case-studies/${study.slug}`}
                className="case-study-card"
              >
                <div className="case-study-header">
                  <div className="case-study-icon">{study.icon}</div>
                  <span className="case-study-category">{study.category}</span>
                </div>
                <h2 className="case-study-title">{study.title}</h2>
                <p className="case-study-description">{study.description}</p>
                <div className="case-study-metrics">
                  <span className="metrics-label">Key Results:</span>
                  <span className="metrics-value">{study.metrics}</span>
                </div>
                <div className="case-study-link">
                  <span>Read Full Case Study →</span>
                </div>
              </Link>
            ))}
          </div>

          <div className="case-studies-benefits">
            <h2>What You'll Learn from These Case Studies</h2>
            <div className="benefits-grid">
              <div className="benefit-card">
                <div className="benefit-icon">📊</div>
                <h3>Real Metrics</h3>
                <p>See actual results including participation rates, time savings, and efficiency improvements.</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">🔄</div>
                <h3>Before & After</h3>
                <p>Understand the challenges groups faced before GroupFund and how they solved them.</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">💡</div>
                <h3>Best Practices</h3>
                <p>Learn proven strategies and tactics you can implement in your own group.</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">✅</div>
                <h3>Proven Results</h3>
                <p>See how different types of groups achieve success with GroupFund.</p>
              </div>
            </div>
          </div>

          <div className="case-studies-cta">
            <h2>Ready to Create Your Own Success Story?</h2>
            <p>Start organizing your group contributions with GroupFund and join these successful groups.</p>
            <div className="cta-buttons">
              <Link to="/waitlist" className="btn btn-primary btn-large">Start Your Free Group</Link>
              <Link to="/testimonials" className="btn btn-secondary btn-large">View Testimonials →</Link>
            </div>
          </div>

          <div className="related-pages">
            <h2>Related Resources</h2>
            <div className="related-grid">
              <Link to="/testimonials" className="related-card">
                <span className="related-icon">💬</span>
                <h3>Testimonials</h3>
                <p>Read what users say about GroupFund</p>
              </Link>
              <Link to="/use-cases/churches" className="related-card">
                <span className="related-icon">⛪</span>
                <h3>For Churches</h3>
                <p>Learn how churches use GroupFund</p>
              </Link>
              <Link to="/use-cases/families" className="related-card">
                <span className="related-icon">👨‍👩‍👧‍👦</span>
                <h3>For Families</h3>
                <p>See how families organize contributions</p>
              </Link>
              <Link to="/best-practices" className="related-card">
                <span className="related-icon">✅</span>
                <h3>Best Practices</h3>
                <p>Learn proven strategies for success</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .case-studies-page {
          padding: 3rem 0;
        }

        .case-studies-intro {
          text-align: center;
          max-width: 800px;
          margin: 0 auto 3rem;
          color: #6b7280;
          font-size: 1.1rem;
          line-height: 1.8;
        }

        .case-studies-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
        }

        .case-study-card {
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

        .case-study-card:hover {
          border-color: #667eea;
          box-shadow: 0 8px 16px rgba(102, 126, 234, 0.15);
          transform: translateY(-4px);
        }

        .case-study-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1rem;
        }

        .case-study-icon {
          font-size: 3rem;
        }

        .case-study-category {
          background: #f3f4f6;
          color: #667eea;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.875rem;
          font-weight: 600;
        }

        .case-study-title {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 0.75rem;
          color: #111827;
        }

        .case-study-description {
          color: #6b7280;
          line-height: 1.7;
          margin-bottom: 1.5rem;
          flex-grow: 1;
        }

        .case-study-metrics {
          padding: 1rem;
          background: #f9fafb;
          border-radius: 8px;
          margin-bottom: 1rem;
        }

        .metrics-label {
          display: block;
          font-size: 0.875rem;
          color: #6b7280;
          margin-bottom: 0.25rem;
        }

        .metrics-value {
          display: block;
          font-size: 1rem;
          font-weight: 600;
          color: #111827;
        }

        .case-study-link {
          margin-top: auto;
          padding-top: 1rem;
          border-top: 1px solid #e5e7eb;
        }

        .case-study-link span {
          color: #667eea;
          font-weight: 600;
          font-size: 1rem;
        }

        .case-study-card:hover .case-study-link span {
          color: #5568d3;
        }

        .case-studies-benefits {
          margin: 4rem 0;
          padding: 3rem 0;
          border-top: 2px solid #e5e7eb;
          border-bottom: 2px solid #e5e7eb;
        }

        .case-studies-benefits h2 {
          font-size: 1.75rem;
          text-align: center;
          margin-bottom: 2rem;
          color: #111827;
        }

        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }

        .benefit-card {
          text-align: center;
          padding: 1.5rem;
        }

        .benefit-icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        .benefit-card h3 {
          font-size: 1.25rem;
          margin-bottom: 0.75rem;
          color: #111827;
        }

        .benefit-card p {
          color: #6b7280;
          line-height: 1.6;
        }

        .case-studies-cta {
          text-align: center;
          padding: 3rem 2rem;
          background: #f9fafb;
          border-radius: 12px;
          margin: 4rem 0;
        }

        .case-studies-cta h2 {
          font-size: 1.75rem;
          margin-bottom: 0.75rem;
          color: #111827;
        }

        .case-studies-cta p {
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
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
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
          .case-studies-grid {
            grid-template-columns: 1fr;
          }

          .benefits-grid {
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

