import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function SEO({ title, description, keywords, ogImage, canonical }) {
  const location = useLocation()

  useEffect(() => {
    // Update document title
    document.title = title

    // Update or create meta tags
    const updateMetaTag = (name, content, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name'
      let meta = document.querySelector(`meta[${attribute}="${name}"]`)
      if (!meta) {
        meta = document.createElement('meta')
        meta.setAttribute(attribute, name)
        document.head.appendChild(meta)
      }
      meta.setAttribute('content', content)
    }

    // Update description
    updateMetaTag('description', description)
    updateMetaTag('og:description', description, true)
    updateMetaTag('twitter:description', description)

    // Update title
    updateMetaTag('og:title', title, true)
    updateMetaTag('twitter:title', title)

    // Update keywords
    if (keywords) {
      updateMetaTag('keywords', keywords)
    }

    // Update OG image
    if (ogImage) {
      updateMetaTag('og:image', ogImage, true)
      updateMetaTag('twitter:image', ogImage)
    }

    // Generate canonical URL
    // If canonical is provided, use it; otherwise generate from current location
    let canonicalUrl = canonical
    if (!canonicalUrl) {
      // Generate from current location
      const path = location.pathname
      canonicalUrl = `https://www.groupfund.app${path === '/' ? '' : path}`
    } else {
      // Normalize provided canonical URL to use www.groupfund.app
      canonicalUrl = canonicalUrl.replace(/https?:\/\/(www\.)?groupfund\.app/g, 'https://www.groupfund.app')
    }

    // Ensure canonical URL always exists and is self-referential
    let link = document.querySelector('link[rel="canonical"]')
    if (!link) {
      link = document.createElement('link')
      link.setAttribute('rel', 'canonical')
      document.head.appendChild(link)
    }
    link.setAttribute('href', canonicalUrl)

    // Cleanup function
    return () => {
      // Optionally reset to default on unmount
    }
  }, [title, description, keywords, ogImage, canonical, location.pathname])

  return null
}

