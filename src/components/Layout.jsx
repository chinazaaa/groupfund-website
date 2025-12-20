import { Link } from 'react-router-dom'
import { useState } from 'react'
import Breadcrumbs from './Breadcrumbs'
import './Layout.css'

export default function Layout({ children }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  return (
    <div className="App">
      {/* Navigation */}
      <nav className="navbar" role="navigation" aria-label="Main navigation">
        <div className="container">
          <div className="nav-content">
            <Link to="/" className="logo" style={{ textDecoration: 'none' }} onClick={closeMobileMenu}>
              <img src="/logo.png" alt="GroupFund" className="logo-img" />
            </Link>
            <button 
              className="mobile-menu-toggle" 
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
              aria-expanded={mobileMenuOpen}
            >
              <span className={mobileMenuOpen ? 'hamburger open' : 'hamburger'}>
                <span></span>
                <span></span>
                <span></span>
              </span>
            </button>
            <div className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
              <Link to="/how-it-works" className="nav-link" onClick={closeMobileMenu}>How It Works</Link>
              <Link to="/features" className="nav-link" onClick={closeMobileMenu}>Features</Link>
              <Link to="/blog" className="nav-link" onClick={closeMobileMenu}>Blog</Link>
              <Link to="/faq" className="nav-link" onClick={closeMobileMenu}>FAQ</Link>
              <Link to="/about" className="nav-link" onClick={closeMobileMenu}>About</Link>
              <Link to="/contact" className="nav-cta" style={{ textDecoration: 'none' }} onClick={closeMobileMenu}>Contact</Link>
            </div>
          </div>
        </div>
      </nav>
      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="mobile-menu-overlay" onClick={closeMobileMenu}></div>
      )}

      {/* Breadcrumbs */}
      <Breadcrumbs />

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="footer" role="contentinfo">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <Link to="/" className="footer-logo-link">
                <img src="/icon.png" alt="GroupFund" className="footer-logo-img" />
              </Link>
              <p className="footer-tagline">Organizing group contributions for birthdays, subscriptions, and events.</p>
            </div>
            <div className="footer-section">
              <h4>Product</h4>
              <ul className="footer-links">
                <li><Link to="/how-it-works">How It Works</Link></li>
                <li><Link to="/features">Features</Link></li>
                <li><Link to="/group-types">Group Types</Link></li>
                <li><Link to="/pricing">Pricing</Link></li>
                <li><Link to="/comparisons">Comparisons</Link></li>
                <li><Link to="/coming-soon-features">Coming Soon</Link></li>
                <li><Link to="/download">Download</Link></li>
                <li><Link to="/faq">FAQ</Link></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Resources</h4>
              <ul className="footer-links">
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/resources">Resources & Guides</Link></li>
                <li><Link to="/use-cases">Use Cases</Link></li>
                <li><Link to="/locations">Locations</Link></li>
                <li><Link to="/help">Help Center</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/branding">Brand Guidelines</Link></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Support</h4>
              <ul className="footer-links">
                <li><Link to="/help">Help Center</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/app-rules">App Rules</Link></li>
                <li><Link to="/privacy">Privacy Policy</Link></li>
                <li><Link to="/terms">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 GroupFund. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

