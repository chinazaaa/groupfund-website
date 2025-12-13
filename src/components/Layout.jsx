import { Link } from 'react-router-dom'
import Breadcrumbs from './Breadcrumbs'
import './Layout.css'

export default function Layout({ children }) {
  return (
    <div className="App">
      {/* Navigation */}
      <nav className="navbar" role="navigation" aria-label="Main navigation">
        <div className="container">
          <div className="nav-content">
            <Link to="/" className="logo" style={{ textDecoration: 'none' }}>
              <img src="/logo.png" alt="GroupFund" className="logo-img" />
            </Link>
            <div className="nav-links">
              <Link to="/how-it-works" className="nav-link">How It Works</Link>
              <Link to="/features" className="nav-link">Features</Link>
              <Link to="/testimonials" className="nav-link">Testimonials</Link>
              <Link to="/blog" className="nav-link">Blog</Link>
              <Link to="/faq" className="nav-link">FAQ</Link>
              <Link to="/about" className="nav-link">About</Link>
              <Link to="/contact" className="nav-cta" style={{ textDecoration: 'none' }}>Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Breadcrumbs */}
      <Breadcrumbs />

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="footer" role="contentinfo">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3 className="footer-logo">GroupFund</h3>
              <p className="footer-tagline">Organizing group contributions, one birthday at a time.</p>
            </div>
            <div className="footer-section">
              <h4>Product</h4>
              <ul className="footer-links">
                <li><Link to="/how-it-works">How It Works</Link></li>
                <li><Link to="/features">Features</Link></li>
                <li><Link to="/download">Download</Link></li>
                <li><Link to="/faq">FAQ</Link></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Resources</h4>
              <ul className="footer-links">
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/testimonials">Testimonials</Link></li>
                <li><Link to="/help">Help Center</Link></li>
                <li><Link to="/about">About Us</Link></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Support</h4>
              <ul className="footer-links">
                <li><Link to="/help">Help Center</Link></li>
                <li><Link to="/contact">Contact</Link></li>
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

