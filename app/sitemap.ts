import type { MetadataRoute } from "next";
import { products } from "@/constant/products";

const BASE_URL = "https://www.doktertani.co.id";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/produk`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/tentang`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/hubungi-kami`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/artikel`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
  ];

  const productPages: MetadataRoute.Sitemap = products.map((product) => ({
    url: `${BASE_URL}/produk/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Fetch articles from Strapi
  let articlePages: MetadataRoute.Sitemap = [];
  try {
    const res = await fetch(
      "https://api.doktertani.co.id/api/articles?fields[0]=slug&fields[1]=updatedAt&pagination[pageSize]=1000",
      { next: { revalidate: 3600 } }
    );
    if (res.ok) {
      const data = await res.json();
      articlePages = (data.data || []).map(
        (article: { slug: string; updatedAt: string }) => ({
          url: `${BASE_URL}/artikel/${article.slug}`,
          lastModified: new Date(article.updatedAt),
          changeFrequency: "weekly" as const,
          priority: 0.7,
        })
      );
    }
  } catch {
    // Silently fail - articles sitemap will be empty
  }

  return [...staticPages, ...productPages, ...articlePages];
}
