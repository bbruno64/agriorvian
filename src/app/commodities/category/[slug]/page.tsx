import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ChevronRight, PackageSearch } from "lucide-react";
import {
  commodities,
  commodityCategories,
  type Category,
} from "@/data/commodities";
import { categorySeo, itemListSchema, breadcrumbSchema, slugify } from "@/lib/seo";
import { JsonLd } from "@/components/jsonld";
import { CommodityLinkCard } from "@/components/commodities/commodity-link-card";
import { Button } from "@/components/ui/button";

type Props = {
  params: Promise<{ slug: string }>;
};

function categoryFromSlug(slug: string): Category | undefined {
  return commodityCategories.find((c) => slugify(c) === slug);
}

export function generateStaticParams() {
  return commodityCategories.map((category) => ({ slug: slugify(category) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = categoryFromSlug(slug);
  if (!category) return {};
  return categorySeo(category);
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = categoryFromSlug(slug);
  if (!category) notFound();

  const items = commodities.filter((c) => c.category === category);

  return (
    <div className="bg-[#fafaf8]">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Commodities", path: "/commodities" },
          { name: category, path: `/commodities/category/${slug}` },
        ])}
      />
      <JsonLd
        data={itemListSchema(
          items.map((c) => ({ name: c.name, path: `/commodities/${c.id}` }))
        )}
      />

      <section className="bg-emerald-gradient py-14 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="text-sm text-emerald-100/80">
            <ol className="flex flex-wrap items-center gap-1.5">
              <li>
                <Link href="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <ChevronRight className="h-3.5 w-3.5" />
              </li>
              <li>
                <Link href="/commodities" className="hover:text-white">
                  Commodities
                </Link>
              </li>
              <li>
                <ChevronRight className="h-3.5 w-3.5" />
              </li>
              <li aria-current="page" className="font-semibold text-amber-300">
                {category}
              </li>
            </ol>
          </nav>
          <h1 className="mt-4 text-3xl font-bold sm:text-4xl">
            Tanzania {category} — Bulk Export &amp; Supply
          </h1>
          <p className="mt-3 max-w-2xl text-emerald-100/85">
            High-grade {category.toLowerCase()} sourced directly from trusted
            Tanzanian growers and packhouses, with laboratory-verified quality,
            export-grade packaging, and cold-chain logistics to global markets.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            <span className="font-semibold text-slate-900">{items.length}</span>{" "}
            commodity{items.length !== 1 ? "ies" : "y"} available for export
          </p>
          <Button asChild variant="outline">
            <Link href="/commodities">
              Browse all commodities <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        {items.length ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((c) => (
              <CommodityLinkCard key={c.id} commodity={c} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-14 text-center">
            <PackageSearch className="mx-auto h-10 w-10 text-slate-300" />
            <p className="mt-4 text-slate-500">
              No commodities listed in this category yet.
            </p>
          </div>
        )}
      </section>

      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-14 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            Sourcing {category.toLowerCase()} in bulk?
          </h2>
          <p className="max-w-2xl text-slate-600">
            Get a proforma quote with confirmed grades, specs, packaging, and
            Incoterms for your destination port.
          </p>
          <Button asChild size="lg" className="bg-amber-gradient px-7 py-6 text-base font-semibold hover:opacity-90">
            <Link href="/quote">
              Request Proforma Quote <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}