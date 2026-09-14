export interface Stat {
  label: string;
  value: number;
  suffix: string;
  note: string;
}

export const CONTACT = {
  email: "export@agriorvian.com",
  phone: "+255714454774",
  whatsappNumber: "255714454774",
  address: "Mbezi Makonde, Dar es Salaam, Tanzania",
  company: "AgriOrvian — A Division of Orvian Company Limited",
} as const;

export const HERO_IMAGE = "/hero.jpg";

export const liveMetrics: Stat[] = [
  { label: "Tons Exported", value: 48000, suffix: "+", note: "Across all commodities · annual" },
  { label: "Active Destinations", value: 24, suffix: "", note: "Countries across 4 continents" },
  { label: "Quality Certifications", value: 8, suffix: "", note: "Accredited & currently valid" },
  { label: "Port Delivery SLA", value: 96, suffix: "%", note: "On-time vessel loading" },
];
