import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../App.css'

export default function Breadcrumbs({ items = [] }) {
  const location = useLocation()

  // Auto-generate breadcrumbs from path if items not provided
  const generateBreadcrumbs = () => {
    if (items.length > 0) return items

    const pathSegments = location.pathname.split('/').filter(Boolean)
    const breadcrumbs = [{ label: 'Home', path: '/' }]

    let currentPath = ''
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`
      
      // Special handling for blog posts
      if (segment === 'blog' && pathSegments.length > 1 && index === 0) {
        breadcrumbs.push({
          label: 'Blog',
          path: '/blog'
        })
        // Skip the slug, it will be handled as the current page
        return
      }
      
      // Convert slug to readable label
      const label = segment
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')

      breadcrumbs.push({
        label: label,
        path: currentPath
      })
    })

    return breadcrumbs
  }

  const breadcrumbItems = generateBreadcrumbs()

  // Add BreadcrumbList structured data
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbItems.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.label,
        "item": `https://groupfund.app${item.path}`
      }))
    }

    // Remove existing breadcrumb structured data if any
    const existingScript = document.querySelector('script[data-breadcrumb-schema]')
    if (existingScript) {
      existingScript.remove()
    }

    // Add new structured data
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.setAttribute('data-breadcrumb-schema', 'true')
    script.textContent = JSON.stringify(structuredData)
    document.head.appendChild(script)

    return () => {
      const scriptToRemove = document.querySelector('script[data-breadcrumb-schema]')
      if (scriptToRemove) {
        scriptToRemove.remove()
      }
    }
  }, [breadcrumbItems])

  // Don't show breadcrumbs on homepage
  if (location.pathname === '/') {
    return null
  }

  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <div className="container">
        <ol className="breadcrumb-list">
          {breadcrumbItems.map((item, index) => {
            const isLast = index === breadcrumbItems.length - 1
            return (
              <li key={item.path} className="breadcrumb-item">
                {isLast ? (
                  <span className="breadcrumb-current" aria-current="page">
                    {item.label}
                  </span>
                ) : (
                  <>
                    <Link to={item.path} className="breadcrumb-link">
                      {item.label}
                    </Link>
                    <span className="breadcrumb-separator" aria-hidden="true">
                      /
                    </span>
                  </>
                )}
              </li>
            )
          })}
        </ol>
      </div>
    </nav>
  )
}
