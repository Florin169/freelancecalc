import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const industries = ['graphic-designer', 'video-editor', 'web-developer', 'copywriter', 'social-media-manager'];
  
  const industryUrls = industries.map((ind) => ({
    url: `https://CalculateFreelance.com/calculator/${ind}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: 'https://CalculateFreelance.com',
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 1,
    },
    {
      url: 'https://CalculateFreelance.com/compare/1099-vs-w2',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    ...industryUrls,
  ]
}