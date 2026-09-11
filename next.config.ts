import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === "production";

// Applied on every response (dev and prod). None of these break local dev.
const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-DNS-Prefetch-Control", value: "off" },
  {
    key: "Permissions-Policy",
    value:
      "camera=(), microphone=(), geolocation=(), payment=(), usb=(), accelerometer=(), gyroscope=(), magnetometer=(), xr-spatial-tracking=()",
  },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
  { key: "Cross-Origin-Resource-Policy", value: "same-origin" },
];

// Content-Security-Policy is served by src/proxy.ts (per-request nonce +
// strict-dynamic) so framework scripts can execute without 'unsafe-inline'.
// HSTS is production-only; over plain HTTP it is ignored by browsers anyway.

const nextConfig: NextConfig = {
  poweredByHeader: false,
  experimental: {
    sri: {
      algorithm: "sha384",
    },
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          ...securityHeaders,
          ...(isProduction
            ? [
                {
                  key: "Strict-Transport-Security",
                  value: "max-age=63072000; includeSubDomains; preload",
                },
              ]
            : []),
        ],
      },
    ];
  },
};

export default nextConfig;