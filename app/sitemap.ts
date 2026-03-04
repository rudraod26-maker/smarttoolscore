import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://smarttoolscore.com",
      lastModified: new Date(),
    },
    {
      url: "https://smarttoolscore.com/tools",
      lastModified: new Date(),
    },
    {
      url: "https://smarttoolscore.com/ai-tools",
      lastModified: new Date(),
    },
    {
      url: "https://smarttoolscore.com/about",
      lastModified: new Date(),
    },
    {
      url: "https://smarttoolscore.com/contact",
      lastModified: new Date(),
    },
    {
      url: "https://smarttoolscore.com/privacy",
      lastModified: new Date(),
    },
    {
      url: "https://smarttoolscore.com/terms",
      lastModified: new Date(),
    },
  ];
}