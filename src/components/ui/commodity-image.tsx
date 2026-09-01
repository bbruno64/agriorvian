"use client";

import { useState } from "react";
import Image from "next/image";

const FALLBACK_GRADIENT =
  "bg-gradient-to-br from-emerald-900 via-emerald-700 to-teal-600";

export function CommodityImage({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);

  if (failed || !src) {
    return <div className={`${FALLBACK_GRADIENT} ${className ?? ""}`} aria-hidden />;
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      unoptimized
      sizes="(max-width: 768px) 100vw, 33vw"
      loading="lazy"
      onError={() => setFailed(true)}
      className={`object-cover ${className ?? ""}`}
    />
  );
}