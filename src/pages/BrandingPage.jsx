import React, { useEffect } from 'react'
import SEO from '../components/SEO'
import '../App.css'
import './BrandingPage.css'

export default function BrandingPage() {
  useEffect(() => {
    const webPageStructuredData = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Brand Guidelines - GroupFund",
      "description": "GroupFund brand guidelines, logo usage, colors, typography, and design standards for using GroupFund branding.",
      "url": "https://www.groupfund.app/branding"
    }
    const existingScript = document.querySelector('script[data-branding-schema]')
    if (existingScript) existingScript.remove()
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.setAttribute('data-branding-schema', 'true')
    script.textContent = JSON.stringify(webPageStructuredData)
    document.head.appendChild(script)
    return () => {
      const scriptToRemove = document.querySelector('script[data-branding-schema]')
      if (scriptToRemove) scriptToRemove.remove()
    }
  }, [])
  const primaryColors = [
    { name: 'Primary Purple', hex: '#6366f1', description: 'Indigo-500 - Main brand color' },
    { name: 'Primary Dark', hex: '#4f46e5', description: 'Indigo-600 - Darker variant for hover states' },
    { name: 'Primary Light', hex: '#818cf8', description: 'Indigo-400 - Lighter variant for gradients' },
  ]

  const secondaryColors = [
    { name: 'Secondary Pink', hex: '#ec4899', description: 'Pink-500 - Accent color' },
    { name: 'Accent/Warning', hex: '#f59e0b', description: 'Amber-500 - Warning states' },
    { name: 'Success', hex: '#10b981', description: 'Green-500 - Success states' },
    { name: 'Error', hex: '#ef4444', description: 'Red-500 - Error states' },
  ]

  const backgroundColors = [
    { name: 'Background', hex: '#ffffff', description: 'White - Main background' },
    { name: 'Background Light', hex: '#f8fafc', description: 'Slate-50 - Light background sections' },
    { name: 'Background Dark', hex: '#1e293b', description: 'Slate-800 - Dark sections' },
  ]

  const textColors = [
    { name: 'Text Dark', hex: '#0f172a', description: 'Slate-900 - Primary text' },
    { name: 'Text', hex: '#1e293b', description: 'Slate-800 - Secondary text' },
    { name: 'Text Light', hex: '#64748b', description: 'Slate-500 - Light text' },
    { name: 'Text White', hex: '#ffffff', description: 'White - Text on dark backgrounds' },
  ]

  return (
    <>
      <SEO
        title="Brand Guidelines - GroupFund Brand Colors and Design System"
        description="Explore GroupFund's brand colors, design guidelines, and visual identity. Download color palettes and learn how to use our brand assets."
        keywords="groupfund branding, brand colors, design system, brand guidelines, color palette"
        canonical="https://www.groupfund.app/branding"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Brand Guidelines</h1>
          <p className="page-subtitle">
            Our visual identity and design system for consistent brand representation.
          </p>
        </div>
      </section>

      <section className="branding-page">
        <div className="container">
          <div className="branding-content">
            
            {/* Primary Colors Section */}
            <div className="branding-section">
              <h2>Primary Colors</h2>
              <p className="section-description">
                Our primary color palette is built around purple/indigo tones that represent trust, innovation, and community.
              </p>
              <div className="color-grid">
                {primaryColors.map((color, index) => (
                  <div key={index} className="color-card">
                    <div 
                      className="color-swatch" 
                      style={{ backgroundColor: color.hex }}
                    >
                      <span className="color-hex">{color.hex}</span>
                    </div>
                    <div className="color-info">
                      <h3>{color.name}</h3>
                      <p>{color.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Secondary Colors Section */}
            <div className="branding-section">
              <h2>Secondary Colors</h2>
              <p className="section-description">
                Accent colors for specific use cases like warnings, success messages, and error states.
              </p>
              <div className="color-grid">
                {secondaryColors.map((color, index) => (
                  <div key={index} className="color-card">
                    <div 
                      className="color-swatch" 
                      style={{ backgroundColor: color.hex }}
                    >
                      <span className="color-hex">{color.hex}</span>
                    </div>
                    <div className="color-info">
                      <h3>{color.name}</h3>
                      <p>{color.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Background Colors Section */}
            <div className="branding-section">
              <h2>Background Colors</h2>
              <p className="section-description">
                Background colors for different sections and contexts throughout the application.
              </p>
              <div className="color-grid">
                {backgroundColors.map((color, index) => (
                  <div key={index} className="color-card">
                    <div 
                      className="color-swatch" 
                      style={{ 
                        backgroundColor: color.hex,
                        border: color.hex === '#ffffff' ? '1px solid #e0e0e0' : 'none'
                      }}
                    >
                      <span 
                        className="color-hex"
                        style={{ 
                          color: color.hex === '#ffffff' ? '#0f172a' : '#ffffff' 
                        }}
                      >
                        {color.hex}
                      </span>
                    </div>
                    <div className="color-info">
                      <h3>{color.name}</h3>
                      <p>{color.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Text Colors Section */}
            <div className="branding-section">
              <h2>Text Colors</h2>
              <p className="section-description">
                Text color hierarchy for optimal readability and visual hierarchy.
              </p>
              <div className="color-grid">
                {textColors.map((color, index) => (
                  <div key={index} className="color-card">
                    <div 
                      className="color-swatch" 
                      style={{ 
                        backgroundColor: color.hex,
                        border: color.hex === '#ffffff' ? '1px solid #e0e0e0' : 'none'
                      }}
                    >
                      <span 
                        className="color-hex"
                        style={{ 
                          color: color.hex === '#ffffff' ? '#0f172a' : '#ffffff' 
                        }}
                      >
                        {color.hex}
                      </span>
                    </div>
                    <div className="color-info">
                      <h3>{color.name}</h3>
                      <p>{color.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Usage Examples Section */}
            <div className="branding-section">
              <h2>Usage Examples</h2>
              <p className="section-description">
                See how our brand colors are applied in different contexts.
              </p>
              
              <div className="usage-examples">
                {/* Primary Gradient */}
                <div className="example-card">
                  <h3>Primary Gradient</h3>
                  <div 
                    className="gradient-example"
                    style={{
                      background: 'linear-gradient(135deg, #6366f1 0%, #818cf8 100%)',
                      color: 'white',
                      padding: '40px',
                      borderRadius: '12px',
                      textAlign: 'center'
                    }}
                  >
                    <p style={{ fontSize: '1.2rem', fontWeight: 600 }}>
                      Primary Gradient Background
                    </p>
                    <p style={{ marginTop: '8px', opacity: 0.9 }}>
                      Used for hero sections, CTAs, and key highlights
                    </p>
                  </div>
                </div>

                {/* Button Examples */}
                <div className="example-card">
                  <h3>Button Styles</h3>
                  <div className="button-examples">
                    <button 
                      className="btn btn-primary"
                      style={{ marginRight: '12px', marginBottom: '12px' }}
                    >
                      Primary Button
                    </button>
                    <button 
                      className="btn"
                      style={{
                        background: 'linear-gradient(135deg, #6366f1 0%, #818cf8 100%)',
                        color: 'white',
                        marginRight: '12px',
                        marginBottom: '12px'
                      }}
                    >
                      Gradient Button
                    </button>
                  </div>
                </div>

                {/* Status Examples */}
                <div className="example-card">
                  <h3>Status Colors</h3>
                  <div className="status-examples">
                    <div 
                      className="status-badge"
                      style={{
                        background: 'rgba(16, 185, 129, 0.1)',
                        color: '#10b981',
                        padding: '8px 16px',
                        borderRadius: '8px',
                        display: 'inline-block',
                        marginRight: '12px',
                        marginBottom: '12px',
                        fontWeight: 600
                      }}
                    >
                      Success
                    </div>
                    <div 
                      className="status-badge"
                      style={{
                        background: 'rgba(245, 158, 11, 0.1)',
                        color: '#f59e0b',
                        padding: '8px 16px',
                        borderRadius: '8px',
                        display: 'inline-block',
                        marginRight: '12px',
                        marginBottom: '12px',
                        fontWeight: 600
                      }}
                    >
                      Warning
                    </div>
                    <div 
                      className="status-badge"
                      style={{
                        background: 'rgba(239, 68, 68, 0.1)',
                        color: '#ef4444',
                        padding: '8px 16px',
                        borderRadius: '8px',
                        display: 'inline-block',
                        marginRight: '12px',
                        marginBottom: '12px',
                        fontWeight: 600
                      }}
                    >
                      Error
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Color Combinations Section */}
            <div className="branding-section">
              <h2>Color Combinations</h2>
              <p className="section-description">
                Recommended color combinations for optimal contrast and accessibility.
              </p>
              
              <div className="combination-grid">
                <div className="combination-card">
                  <div 
                    className="combination-preview"
                    style={{
                      background: 'linear-gradient(135deg, #6366f1 0%, #818cf8 100%)',
                      color: 'white',
                      padding: '32px',
                      borderRadius: '12px',
                      marginBottom: '16px'
                    }}
                  >
                    <h3 style={{ margin: 0, marginBottom: '8px' }}>Primary Gradient</h3>
                    <p style={{ margin: 0, opacity: 0.95 }}>With white text</p>
                  </div>
                  <p className="combination-note">✓ Excellent contrast</p>
                </div>

                <div className="combination-card">
                  <div 
                    className="combination-preview"
                    style={{
                      background: '#ffffff',
                      color: '#0f172a',
                      padding: '32px',
                      borderRadius: '12px',
                      marginBottom: '16px',
                      border: '1px solid #e0e0e0'
                    }}
                  >
                    <h3 style={{ margin: 0, marginBottom: '8px' }}>White Background</h3>
                    <p style={{ margin: 0, color: '#64748b' }}>With dark text</p>
                  </div>
                  <p className="combination-note">✓ Excellent contrast</p>
                </div>

                <div className="combination-card">
                  <div 
                    className="combination-preview"
                    style={{
                      background: '#1e293b',
                      color: '#ffffff',
                      padding: '32px',
                      borderRadius: '12px',
                      marginBottom: '16px'
                    }}
                  >
                    <h3 style={{ margin: 0, marginBottom: '8px' }}>Dark Background</h3>
                    <p style={{ margin: 0, color: '#64748b' }}>With white text</p>
                  </div>
                  <p className="combination-note">✓ Excellent contrast</p>
                </div>
              </div>
            </div>

            {/* Guidelines Section */}
            <div className="branding-section">
              <h2>Usage Guidelines</h2>
              <div className="guidelines-list">
                <div className="guideline-item">
                  <h3>Primary Colors</h3>
                  <ul>
                    <li>Use Primary Purple (#6366f1) as the main brand color for buttons, links, and key interactive elements</li>
                    <li>Use Primary Dark (#4f46e5) for hover states and active elements</li>
                    <li>Use Primary Light (#818cf8) in gradients with Primary Purple for visual interest</li>
                  </ul>
                </div>
                <div className="guideline-item">
                  <h3>Secondary Colors</h3>
                  <ul>
                    <li>Use Secondary Pink (#ec4899) sparingly as an accent color</li>
                    <li>Use Warning (#f59e0b) for cautionary messages and alerts</li>
                    <li>Use Success (#10b981) for positive feedback and completed actions</li>
                    <li>Use Error (#ef4444) for error messages and destructive actions</li>
                  </ul>
                </div>
                <div className="guideline-item">
                  <h3>Text Colors</h3>
                  <ul>
                    <li>Use Text Dark (#0f172a) for primary headings and important text</li>
                    <li>Use Text (#1e293b) for body text and secondary content</li>
                    <li>Use Text Light (#64748b) for captions, hints, and less important information</li>
                    <li>Use Text White (#ffffff) on dark backgrounds for optimal readability</li>
                  </ul>
                </div>
                <div className="guideline-item">
                  <h3>Background Colors</h3>
                  <ul>
                    <li>Use Background (#ffffff) as the default page background</li>
                    <li>Use Background Light (#f8fafc) for section separators and subtle backgrounds</li>
                    <li>Use Background Dark (#1e293b) for footers, dark sections, and contrast</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
