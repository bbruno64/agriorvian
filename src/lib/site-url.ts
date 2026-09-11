import { headers } from "next/headers";

export async function getBaseUrl(): Promise<string> {
  const header = await headers();
  const host =
    header.get("x-forwarded-host") ?? header.get("host") ?? "agriorvian.com";
  const protocol = process.env.NODE_ENV === "production" ? "https" : "http";
  return `${protocol}://${host}`;
}