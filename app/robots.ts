import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // Disallow indexing of internal API routes or assets if needed
      disallow: ['/_next/', '/api/'], 
    },
    sitemap: 'https://kazkleen.com/sitemap.xml',
  }
}