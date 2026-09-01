import { Hero } from "@/components/home/hero";
import { MetricBanner } from "@/components/home/metric-banner";
import { FeaturedGrid } from "@/components/home/featured-grid";
import { QualityProcess } from "@/components/home/quality-process";
import { Destinations } from "@/components/home/destinations";
import { TrustBadges } from "@/components/home/trust-badges";
import { liveMetrics } from "@/data/site";
import { QualityCTABanner } from "@/components/home/quality-cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <MetricBanner stats={liveMetrics} />
      <FeaturedGrid />
      <QualityProcess />
      <Destinations />
      <TrustBadges />
      <QualityCTABanner />
    </>
  );
}
