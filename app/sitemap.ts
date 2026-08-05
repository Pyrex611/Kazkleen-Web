import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://kazkleen.com';

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0, // Homepage is highest priority
    },
    // Note: As we componentize the site and create separate pages
    // for Services, About, etc., we will add them here.
  ]
}