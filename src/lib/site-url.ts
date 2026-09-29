export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  process.env.NEXT_PUBLIC_VERCEL_URL ??
  "https://agriorvian.com"
)
  .replace(/^https?:\/\//, "")
  .replace(/\/+$/, "");

export const BASE_URL = `https://${SITE_URL}`;