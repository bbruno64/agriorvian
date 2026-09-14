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

// Static apps cannot use per-request CSP nonces: the nonce forces every page
// to be dynamically rendered (server round-trip per navigation). Next.js
// documents a static CSP instead. Here scripts are locked to same-origin plus
// Next's inline bootstrap, and SRI hashes pin every bundled JS file. This
// still blocks all third-party and remote script injection. Applied in
// production only; dev Turbopack HMR requires eval, so dev serves no CSP.
const cspHeader = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self'",
  "connect-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "manifest-src 'self'",
  "upgrade-insecure-requests",
].join("; ");

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
                { key: "Content-Security-Policy", value: cspHeader },
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