import { MetadataRoute } from "next";
import { articles } from "./ai-tools/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = "https://yourdomain.com"; // change after deployment

  const articleUrls = articles.map((article) => ({
    url: `${siteUrl}/ai-tools/${article.slug}`,
    lastModified: new Date(),
  }));

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
    },
    {
      url: `${siteUrl}/finance`,
      lastModified: new Date(),
    },
    {
      url: `${siteUrl}/ai-tools`,
      lastModified: new Date(),
    },
    {
      url: `${siteUrl}/tools/emi-calculator`,
      lastModified: new Date(),
    },
    {
      url: `${siteUrl}/tools/loan-calculator`,
      lastModified: new Date(),
    },
    {
      url: `${siteUrl}/tools/word-counter`,
      lastModified: new Date(),
    },
    {
      url: `${siteUrl}/privacy-policy`,
      lastModified: new Date(),
    },
    {
      url: `${siteUrl}/terms`,
      lastModified: new Date(),
    },
    {
      url: `${siteUrl}/about`,
      lastModified: new Date(),
    },
    {
      url: `${siteUrl}/contact`,
      lastModified: new Date(),
    },
    ...articleUrls,
  ];
}