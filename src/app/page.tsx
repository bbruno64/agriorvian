import { Hero } from "@/components/home/hero";
import { MetricBanner } from "@/components/home/metric-banner";
import { FeaturedGrid } from "@/components/home/featured-grid";
import { QualityProcess } from "@/components/home/quality-process";
import { Destinations } from "@/components/home/destinations";
import { TrustBadges } from "@/components/home/trust-badges";
import { liveMetrics } from "@/data/site";
import { QualityCTABanner } from "@/components/home/quality-cta";
import { HomeFaq } from "@/components/home/home-faq";
import { JsonLd } from "@/components/jsonld";
import { itemListSchema, faqSchema, homeFaqs } from "@/lib/seo";
import { commodities } from "@/data/commodities";

export default function HomePage() {
  const featured = commodities.filter((c) => c.featured);
  return (
    <>
      <JsonLd
        data={itemListSchema(
          featured.map((c) => ({
            name: c.name,
            path: `/commodities/${c.id}`,
          }))
        )}
      />
      <JsonLd data={faqSchema(homeFaqs)} />
      <Hero />
      <MetricBanner stats={liveMetrics} />
      <FeaturedGrid />
      <QualityProcess />
      <Destinations />
      <HomeFaq />
      <TrustBadges />
      <QualityCTABanner />
    </>
  );
}