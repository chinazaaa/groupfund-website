import { useEffect } from 'react'

export default function SEO({ title, description, keywords, ogImage, canonical }) {
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

    // Update canonical URL
    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]')
      if (!link) {
        link = document.createElement('link')
        link.setAttribute('rel', 'canonical')
        document.head.appendChild(link)
      }
      link.setAttribute('href', canonical)
    }

    // Cleanup function
    return () => {
      // Optionally reset to default on unmount
    }
  }, [title, description, keywords, ogImage, canonical])

  return null
}

