import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const industries = ['graphic-designer', 'video-editor', 'web-developer', 'copywriter', 'social-media-manager'];

  // Static power pages and tool routes
  const toolRoutes = [
    {
      url: 'https://CalculateFreelance.com/1099-tax-calculator',
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: 'https://CalculateFreelance.com/llc-tax-calculator',
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: 'https://CalculateFreelance.com/compare/1099-vs-w2',
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: 'https://calculatefreelance.com/1099-tax-calculator/texas',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: 'https://calculatefreelance.com/1099-tax-calculator/florida',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: 'https://calculatefreelance.com/1099-tax-calculator/illinois',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: 'https://calculatefreelance.com/1099-tax-calculator/georgia',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: 'https://calculatefreelance.com/calculator/physician',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
  ];

  const industryUrls = industries.map((ind) => ({
    url: `https://CalculateFreelance.com/calculator/${ind}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  return [
    {
      url: 'https://CalculateFreelance.com',
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    ...toolRoutes,
    {
      url: 'https://calculatefreelance.com/guides/w2-vs-1099',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: 'https://calculatefreelance.com/guides/copywriter-tax-deductions',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    ...industryUrls,
  ]
}
