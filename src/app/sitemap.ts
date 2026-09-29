import type { MetadataRoute } from "next";
import { BASE_URL } from "@/lib/site-url";
import { commodities, commodityCategories } from "@/data/commodities";
import { markets } from "@/data/markets";
import { tradeRoutes } from "@/data/trade-routes";

const lastModified = new Date("2026-09-29");

function page(
  path: string,
  priority: number,
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]
): MetadataRoute.Sitemap[number] {
  return {
    url: `${BASE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    page("/", 1, "weekly"),
    page("/commodities", 0.9, "weekly"),
    page("/quote", 0.9, "monthly"),
    page("/about", 0.8, "monthly"),
    page("/quality", 0.8, "monthly"),
    page("/contact", 0.8, "monthly"),
    page("/privacy", 0.3, "yearly"),
    page("/terms", 0.3, "yearly"),
  ];

  const commodityPages = commodities.map((c) =>
    page(`/commodities/${c.id}`, 0.9, "weekly")
  );

  const categoryPages = commodityCategories.map((category) =>
    page(
      `/commodities/category/${slugifyCategory(category)}`,
      0.7,
      "monthly"
    )
  );

  const marketPages = markets.map((market) =>
    page(`/market/${market.slug}`, 0.7, "monthly")
  );

  const tradeRoutePages = tradeRoutes.map((route) =>
    page(`/trade-route/${route.slug}`, 0.8, "monthly")
  );

  return [
    ...staticPages,
    ...commodityPages,
    ...categoryPages,
    ...marketPages,
    ...tradeRoutePages,
  ];
}

function slugifyCategory(category: string): string {
  return category
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}