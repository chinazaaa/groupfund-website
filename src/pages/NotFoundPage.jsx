import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function NotFoundPage() {
  return (
    <>
      <SEO
        title="404 - Page Not Found | GroupFund"
        description="The page you're looking for doesn't exist. Return to GroupFund homepage or explore our features, blog, and resources."
        keywords="404, page not found, GroupFund"
        canonical="https://groupfund.app/404"
      />

      <section className="not-found-page">
        <div className="container">
          <div className="not-found-content">
            <h1 className="not-found-title">404</h1>
            <h2 className="not-found-heading">Page Not Found</h2>
            <p className="not-found-description">
              Oops! The page you're looking for doesn't exist. It might have been moved, deleted, or the URL might be incorrect.
            </p>
            <div className="not-found-actions">
              <Link to="/" className="btn btn-primary btn-large">
                Go to Homepage
              </Link>
              <Link to="/blog" className="btn btn-secondary btn-large">
                Browse Blog
              </Link>
            </div>
            <div className="not-found-links">
              <h3>Popular Pages:</h3>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/how-it-works">How It Works</Link></li>
                <li><Link to="/features">Features</Link></li>
                <li><Link to="/testimonials">Testimonials</Link></li>
                <li><Link to="/faq">FAQ</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
