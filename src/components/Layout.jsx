import { Link } from 'react-router-dom'
import { useState, useCallback } from 'react'
import { FaInstagram, FaXTwitter, FaLinkedin, FaTiktok } from 'react-icons/fa6'
import Breadcrumbs from './Breadcrumbs'
import NewYearAnimation from './NewYearAnimation'
import './Layout.css'

// 🎉 NEW YEAR MODE: Set to false after New Year season to remove animation
const NEW_YEAR_MODE = false

export default function Layout({ children }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen(prev => !prev)
  }, [])

  const closeMobileMenu = useCallback(() => {
    setMobileMenuOpen(false)
  }, [])

  return (
    <div className="App">
      {NEW_YEAR_MODE && <NewYearAnimation />}
      {/* Navigation */}
      <nav className="navbar" role="navigation" aria-label="Main navigation">
        <div className="container">
          <div className="nav-content">
            <Link to="/" className="logo" style={{ textDecoration: 'none' }} onClick={closeMobileMenu}>
              <img 
                src="/logo.png" 
                alt="GroupFund" 
                className="logo-img" 
                fetchpriority="high"
                loading="eager"
                width="120"
                height="120"
              />
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
              <Link to="/faq" className="nav-link" onClick={closeMobileMenu}>FAQ</Link>
              <Link to="/about" className="nav-link" onClick={closeMobileMenu}>About</Link>
              <Link to="/contact" className="nav-link" onClick={closeMobileMenu}>Contact</Link>
              <Link to="/get-started" className="nav-cta" onClick={closeMobileMenu}>Get Started</Link>
              {/* <a href="https://app.groupfund.app/login" className="nav-link" onClick={closeMobileMenu} target="_blank" rel="noopener noreferrer">Login</a> */}
              {/* <a href="https://app.groupfund.app/signup" className="nav-cta" style={{ textDecoration: 'none' }} onClick={closeMobileMenu} target="_blank" rel="noopener noreferrer">Sign Up</a> */}
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
              <p className="footer-tagline">
                Organizing group contributions for birthdays, subscriptions, and events.
              </p>

              {/* Social media links */}
              <div className="footer-social">
                <a
                  href="https://www.instagram.com/thegroupfundapp"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GroupFund on Instagram"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://x.com/thegroupfundapp"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GroupFund on X (Twitter)"
                >
                  <FaXTwitter />
                </a>
                <a
                  href="https://www.linkedin.com/company/thegroupfundapp"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GroupFund on LinkedIn"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://www.tiktok.com/@thegroupfundapp"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GroupFund on TikTok"
                >
                  <FaTiktok />
                </a>
              </div>
            </div>

            <div className="footer-section">
              <h4>Product</h4>
              <ul className="footer-links">
                <li><Link to="/get-started">Get Started</Link></li>
                <li><Link to="/how-it-works">How It Works</Link></li>
                <li><Link to="/features">Features</Link></li>
                <li><Link to="/group-types">Group Types</Link></li>
                <li><Link to="/subscription-groups">Subscription Groups</Link></li>
                <li><Link to="/pricing">Pricing</Link></li>
                <li><Link to="/comparisons">Comparisons</Link></li>
                <li><Link to="/coming-soon-features">Coming Soon</Link></li>
                <li><Link to="/download">Download</Link></li>
                <li><Link to="/faq">FAQ</Link></li>
                {/* <li><a href="https://app.groupfund.app/login" target="_blank" rel="noopener noreferrer">Login</a></li>
                <li><a href="https://app.groupfund.app/signup" target="_blank" rel="noopener noreferrer">Sign Up</a></li> */}
              </ul>
            </div>

            <div className="footer-section">
              <h4>Resources</h4>
              <ul className="footer-links">
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/resources">Resources & Guides</Link></li>
                <li><Link to="/tools">Tools</Link></li>
                <li><Link to="/best-practices">Best Practices</Link></li>
                <li><Link to="/case-studies">Case Studies</Link></li>
                <li><Link to="/glossary">Glossary</Link></li>
                <li><Link to="/use-cases">Use Cases</Link></li>
                <li><Link to="/industries">Industries</Link></li>
                <li><Link to="/seasonal">Seasonal</Link></li>
                <li><Link to="/locations">Locations</Link></li>
                <li><Link to="/help">Help Center</Link></li>
                <li><Link to="/about">About Us</Link></li>
                {/* <li><Link to="/branding">Brand Guidelines</Link></li> */}
              </ul>
            </div>

            <div className="footer-section">
              <h4>Support</h4>
              <ul className="footer-links">
                <li><Link to="/help">Help Center</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/report">Report</Link></li>
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
