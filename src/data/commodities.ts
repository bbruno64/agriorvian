export type Category =
  | "Produce"
  | "Nuts & Seeds"
  | "Seafood"
  | "Grains & Spices";

export type ShippingMethod = "Air Freight" | "Sea Freight" | "Reefer" | "Mix";

export interface CommoditySpec {
  label: string;
  value: string;
}

export interface Commodity {
  id: string;
  name: string;
  category: Category;
  tagline: string;
  description: string;
  hsCode: string;
  origin: string;
  grades: string[];
  specs: CommoditySpec[];
  packaging: string[];
  shipping: ShippingMethod[];
  certifications: string[];
  shelfLife: string;
  minOrder: string;
  icon: string;
  image: string;
  featured?: boolean;
}

export const commodityCategories: Category[] = [
  "Produce",
  "Nuts & Seeds",
  "Seafood",
  "Grains & Spices",
];

export const commodities: Commodity[] = [
  {
    id: "avocados",
    name: "Avocados (Hass & Fuerte)",
    category: "Produce",
    tagline: "Premium Moroccan-grade count sizes from Tanzania's highlands",
    description:
      "High-dry-matter Hass and Fuerte avocados harvested at peak maturity, packed under strict cold-chain discipline to preserve creamy texture and extended shelf life for European retail and processing markets.",
    hsCode: "0804.40",
    origin: "Mbeya, Njombe, Arusha highlands",
    grades: ["Caliber 12–24", "15-day minimum shelf life"],
    specs: [
      { label: "Caliber", value: "12–24 count" },
      { label: "Dry Matter", value: ">21%" },
      { label: "Cold Chain", value: "4–6°C" },
      { label: "Fruit Size", value: "170–350g" },
      { label: "Ripening", value: "Controlled ethylene" },
    ],
    packaging: ["4kg lugs", "10kg lugs", "Single-layer retail trays"],
    shipping: ["Reefer", "Sea Freight"],
    certifications: ["Phytosanitary (TAPHIS)", "GlobalGAP"],
    shelfLife: "18–24 days from pack date",
    minOrder: "1 × 20ft reefer (approx. 9.6 MT)",
    icon: "leaf",
    image:
      "https://images.unsplash.com/photo-1726177551991-270f9e79b65e?q=80&w=1000&auto=format&fit=crop",
    featured: true,
  },
  {
    id: "pineapples",
    name: "Pineapples (Smooth Cayenne)",
    category: "Produce",
    tagline: "Sweet, golden air and sea freight grades",
    description:
      "Vibrant, juicy Smooth Cayenne pineapples from coastal and Morogoro farms, offered in both air-freight premium and sea-freight reefer grades for the Middle East and European markets.",
    hsCode: "0804.50",
    origin: "Coastal & Morogoro regions",
    grades: ["Air-Freight Premium", "Sea-Freight Reefer"],
    specs: [
      { label: "Weight", value: "1.2–2.2 kg" },
      { label: "Brix", value: "12°+ at harvest" },
      { label: "Cold Chain", value: "7–8°C" },
      { label: "Color", value: "Shell 2 / 3 (25–50%)" },
    ],
    packaging: ["Cartons 8–12 pcs", "Master cartons with gel-ice"],
    shipping: ["Air Freight", "Sea Freight"],
    certifications: ["Phytosanitary (TAPHIS)", "GlobalGAP"],
    shelfLife: "21 days under reefer",
    minOrder: "1,000 kg air / 1 × 20ft reefer",
    icon: "pinecone",
    image:
      "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "mangoes",
    name: "Mangoes (Kent & Sensation)",
    category: "Produce",
    tagline: "Aromatic, fiberless export grades",
    description:
      "Export-grade Kent and Sensation mangoes grown in the lowland regions, selected for uniform maturity and handled with hot-water treatment and cold chain to reach global retail shelves in peak condition.",
    hsCode: "0804.50",
    origin: "Tanga, Coast, Ruvu",
    grades: ["Kent", "Sensation", "Air & Sea grades"],
    specs: [
      { label: "Weight", value: "350–650 g" },
      { label: "Maturity", value: "Color break + %SSC" },
      { label: "Cold Chain", value: "10–12°C" },
      { label: "Treatment", value: "Hot water dip / VHT" },
    ],
    packaging: ["Cartons 4–6 pcs", "Single-layer trays"],
    shipping: ["Air Freight", "Sea Freight", "Reefer"],
    certifications: ["Phytosanitary (TAPHIS)", "GlobalGAP"],
    shelfLife: "14–18 days",
    minOrder: "1,000 kg air / 1 × 20ft reefer",
    icon: "citrus",
    image:
      "https://images.unsplash.com/photo-1553279768-865429fa0078?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "passion-fruit",
    name: "Passion Fruit",
    category: "Produce",
    tagline: "High-acidity purple hybrid for juice & concentrate",
    description:
      "Vibrant purple passion fruit with intense aroma and balanced acidity, ideal for fresh juice, concentrate, and beverage processors across Europe and the Middle East.",
    hsCode: "0810.90",
    origin: "Ruvuma, Iringa, Kagera",
    grades: ["Fresh export", "Processing grade"],
    specs: [
      { label: "Diameter", value: "5–7 cm" },
      { label: "Acidity", value: "3.0–4.5%" },
      { label: "Brix", value: "14–16°" },
      { label: "Cold Chain", value: "7–10°C" },
    ],
    packaging: ["Cartons 2–5 kg", "Bulk bins for processing"],
    shipping: ["Air Freight", "Sea Freight"],
    certifications: ["Phytosanitary (TAPHIS)"],
    shelfLife: "10–14 days",
    minOrder: "500 kg air",
    icon: "flame",
    image:
      "https://images.unsplash.com/photo-1546548970-71785318a17b?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "cashew-rcn",
    name: "Raw Cashew Nuts (RCN)",
    category: "Nuts & Seeds",
    tagline: "High-outturn Tunduru & Newala origin",
    description:
      "Premium raw cashew nuts with excellent outturn and low moisture, sourced from Tanzania's southern cashew belt (Tunduru, Newala, Masasi) — the world's trusted RCN origin for India and Vietnam processing.",
    hsCode: "0801.31",
    origin: "Tunduru, Newala, Masasi",
    grades: ["Outturn 48–53 lbs"],
    specs: [
      { label: "Outturn", value: "48–53 lbs" },
      { label: "Nut Count", value: "180–210 / kg" },
      { label: "Moisture", value: "<10%" },
      { label: "Defective Nuts", value: "≤5%" },
    ],
    packaging: ["50 kg new jute bags", "1.8 MT jumbo bags"],
    shipping: ["Sea Freight"],
    certifications: ["Phytosanitary (TAPHIS)", "SGS Pre-shipment"],
    shelfLife: "12 months (dry storage)",
    minOrder: "1 × 20ft (approx. 18 MT)",
    icon: "nut",
    image:
      "https://images.unsplash.com/photo-1573555657105-47a0bb37c3ea?q=80&w=1000&auto=format&fit=crop",
    featured: true,
  },
  {
    id: "cashew-kernels",
    name: "Processed Cashew Kernels",
    category: "Nuts & Seeds",
    tagline: "Whole & split grades, vacuum-packed",
    description:
      "Laboratory-cleaned, fully processed cashew kernels in WW, SW, and LWP grades, vacuum-packed in tins and barrier bags to lock in freshness for premium retail and foodservice customers.",
    hsCode: "0801.32",
    origin: "Dar es Salaam processing facility",
    grades: ["WW180", "WW210", "WW320", "SW", "LWP"],
    specs: [
      { label: "Moisture", value: "≤5%" },
      { label: "Counts", value: "180–320 per lb" },
      { label: "Grade", value: "Specified per order" },
      { label: "Test", value: "SGS / TBS lab verified" },
    ],
    packaging: ["10 kg vacuum tins", "11.34 kg barrier bags", "25 kg cartons"],
    shipping: ["Sea Freight", "Air Freight"],
    certifications: ["SGS Pre-shipment", "HACCP", "TBS"],
    shelfLife: "18 months (N2 flushed)",
    minOrder: "1 × 20ft (approx. 14 MT)",
    icon: "nut",
    image:
      "https://images.unsplash.com/photo-1594900689460-fdad3599342c?q=80&w=1000&auto=format&fit=crop",
    featured: true,
  },
  {
    id: "sesame",
    name: "Sesame Seeds (Natural & Hulled)",
    category: "Nuts & Seeds",
    tagline: "Humera-grade, high-purity East African's finest",
    description:
      "Natural white and hulled sesame seeds with exceptional purity and oil content from the northern and central growing belts, sought after by Middle Eastern and Asian buyers for tahini, confectionery, and oil.",
    hsCode: "1207.40",
    origin: "Humera corridor, Dodoma, Singida",
    grades: ["Natural White", "Hulled", "Humera grade"],
    specs: [
      { label: "Purity", value: "≥99.5%" },
      { label: "Oil Content", value: "≥50%" },
      { label: "Moisture", value: "≤7%" },
      { label: "FFA", value: "≤1.5%" },
    ],
    packaging: ["25 kg / 50 kg PP bags", "1.5 MT jumbo bags"],
    shipping: ["Sea Freight"],
    certifications: ["Phytosanitary (TAPHIS)", "SGS Pre-shipment"],
    shelfLife: "12 months (dry, ventilated)",
    minOrder: "1 × 20ft (approx. 20 MT)",
    icon: "seed",
    image:
      "https://images.unsplash.com/photo-1708949125682-c0cb09727101?q=80&w=1000&auto=format&fit=crop",
    featured: true,
  },
  {
    id: "sunflower",
    name: "Sunflower Seeds & Crude Oil",
    category: "Nuts & Seeds",
    tagline: "High-oleic non-GMO from Central Tanzania",
    description:
      "High-oleic, non-GMO sunflower seeds and cold-pressed crude oil from Central Tanzania, with superior oxidative stability for food manufacturers and edible-oil blenders.",
    hsCode: "1206.00 / 1512.11",
    origin: "Central Tanzania (Singida, Dodoma)",
    grades: ["Confectionary seed", "Crude oil 100%"],
    specs: [
      { label: "Oil Content", value: "40–48% (seed)" },
      { label: "Oleic Acid", value: "≥75% (high-oleic)" },
      { label: "Moisture", value: "≤9%" },
      { label: "FFA", value: "≤1.0% (oil)" },
    ],
    packaging: ["50 kg bags", "ISO tank / flexitank (oil)"],
    shipping: ["Sea Freight"],
    certifications: ["Non-GMO cert", "SGS Pre-shipment"],
    shelfLife: "12 months",
    minOrder: "1 × 20ft",
    icon: "sunflower",
    image:
      "https://images.unsplash.com/photo-1740993384743-dc8f2879f398?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "nile-perch",
    name: "Lake Victoria Nile Perch",
    category: "Seafood",
    tagline: "Fresh & frozen, IQF skin-on/skinless fillets",
    description:
      "World-renowned Nile Perch from Lake Victoria, processed at HACCP-certified facilities into fresh and IQF fillets (skin-on, skinless, PBO/PBI) for European foodservice and retail programs.",
    hsCode: "0304.83",
    origin: "Lake Victoria (Mwanza, Mara, Kagera)",
    grades: ["Fresh fillets", "Frozen IQF", "PBO / PBI"],
    specs: [
      { label: "Product", value: "Skin-on / skinless fillets" },
      { label: "Glazing", value: "PBO (10–15%)" },
      { label: "Sizes", value: "80/150, 150/250, 250/500g" },
      { label: "Frozen", value: "IQF, -18°C storage" },
    ],
    packaging: ["Master cartons 20–40 lb", "Gel-ice thermal lining"],
    shipping: ["Air Freight", "Reefer"],
    certifications: ["HACCP", "TBS", "EU-compliant plant"],
    shelfLife: "24 months frozen / 72h fresh",
    minOrder: "1,000 kg air / 1 × 40ft reefer",
    icon: "fish",
    image:
      "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=1000&auto=format&fit=crop",
    featured: true,
  },
  {
    id: "tilapia",
    name: "Tilapia & Sea-Catch",
    category: "Seafood",
    tagline: "Whole fish & fillets, master carton delivery",
    description:
      "Freshwater tilapia and selected sea-catch commodities, packed in master cartons with gel-ice thermal lining for reliable cold-chain delivery across African and Middle Eastern markets.",
    hsCode: "0302.83 / 0303.23",
    origin: "Lake Victoria, coastal fisheries",
    grades: ["Whole (various sizes)", "Fillets", "Sea-catch mix"],
    specs: [
      { label: "Size", value: "150g – 1kg+ whole" },
      { label: "Temperature", value: "0–2°C fresh" },
      { label: "Packaging", value: "Gel-ice lined cartons" },
    ],
    packaging: ["Master cartons 15–20 kg"],
    shipping: ["Air Freight", "Reefer"],
    certifications: ["HACCP", "TBS"],
    shelfLife: "21 days chilled",
    minOrder: "500 kg",
    icon: "waves",
    image:
      "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "maize",
    name: "Non-GMO White Maize",
    category: "Grains & Spices",
    tagline: "Grade 1, zero aflatoxin export quality",
    description:
      "Grade 1 non-GMO white maize with controlled moisture and rigorous zero-aflatoxin screening, delivered from central and southern harvests to regional flour millers and starch processors.",
    hsCode: "1005.90",
    origin: "Ruvuma, Iringa, Mbeya corridor",
    grades: ["Grade 1", "Non-GMO"],
    specs: [
      { label: "Moisture", value: "≤13.5%" },
      { label: "Aflatoxin", value: "0 ppb (tested)" },
      { label: "Broken Kernels", value: "≤3%" },
      { label: "Test Weight", value: "≥74 kg/hl" },
    ],
    packaging: ["50 kg bags", "Bulk / 1mt jumbo"],
    shipping: ["Sea Freight", "Mix"],
    certifications: ["TBS", "SGS Pre-shipment", "Phytosanitary (TAPHIS)"],
    shelfLife: "12 months (dry silo)",
    minOrder: "1 × 20ft (approx. 21 MT)",
    icon: "wheat",
    image:
      "https://images.unsplash.com/photo-1551754655-cd27e38d2076?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "pulses",
    name: "Pulses & Beans",
    category: "Grains & Spices",
    tagline: "Pigeon peas, chickpeas, kidney & mung beans",
    description:
      "A full portfolio of food-grade pulses — pigeon peas, chickpeas, red kidney beans, and green mung beans — cleaned, graded, and color-sorted for the Indian subcontinent and global markets.",
    hsCode: "0713.31 / 0713.10 / 0713.33 / 0713.32",
    origin: "Southern highlands & central Tanzania",
    grades: ["Machine-clean 99%", "Sortex 99.5%"],
    specs: [
      { label: "Moisture", value: "≤10%" },
      { label: "Purity", value: "≥99% (Sortex)" },
      { label: "Admixture", value: "≤1%" },
      { label: "Size", value: "Per grade spec" },
    ],
    packaging: ["25 / 50 kg PP bags", "1.5 MT jumbos"],
    shipping: ["Sea Freight"],
    certifications: ["Phytosanitary (TAPHIS)", "SGS Pre-shipment", "TBS"],
    shelfLife: "24 months (dry)",
    minOrder: "1 × 20ft",
    icon: "bean",
    image:
      "https://images.unsplash.com/photo-1515543904379-3d757afe72e4?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "coffee",
    name: "Green Coffee Beans",
    category: "Grains & Spices",
    tagline: "Washed Arabica & Robusta specialty lots",
    description:
      "Fully washed Arabica from Mbeya and Kilimanjaro and premium Robusta from Bukoba, carefully milled and graded for specialty roasters and commercial buyers worldwide.",
    hsCode: "0901.11",
    origin: "Mbeya, Kilimanjaro, Bukoba",
    grades: ["AA", "AB", "PB", "Specialty lot"],
    specs: [
      { label: "Variety", value: "Arabica / Robusta" },
      { label: "Moisture", value: "10.5–11.5%" },
      { label: "Screen", value: "15–18" },
      { label: "Cupping", value: "82+ SCAA specialty" },
    ],
    packaging: ["60 kg grain-pro bags"],
    shipping: ["Sea Freight", "Air Freight"],
    certifications: ["Phytosanitary (TAPHIS)"],
    shelfLife: "12 months (green)",
    minOrder: "1 × 20ft (approx. 20 MT)",
    icon: "coffee",
    image:
      "https://images.unsplash.com/photo-1587734195503-904fca47e0e9?q=80&w=1000&auto=format&fit=crop",
    featured: true,
  },
  {
    id: "zanzibar-spices",
    name: "Zanzibar Spices",
    category: "Grains & Spices",
    tagline: "Organic cloves, pepper, cardamom, cinnamon, vanilla",
    description:
      "World-famous Zanzibar spices — organic cloves, black pepper, cardamom, cinnamon, and hand-cured vanilla — sourced from island spice farms and graded for leading spice houses and premium food brands.",
    hsCode: "0907–0910 / 0904.21",
    origin: "Zanzibar & Pemba",
    grades: ["Organic certified", "Whole & ground"],
    specs: [
      { label: "Cloves", value: "Hand-cleaned, 5–9mm head" },
      { label: "Pepper", value: "Malabar-type, 550g/l" },
      { label: "Vanilla", value: "Cure grade 10–18%" },
      { label: "Purity", value: "95–99%" },
    ],
    packaging: ["25 kg poly-lined bags", "Retail-ready pouches"],
    shipping: ["Sea Freight", "Air Freight"],
    certifications: ["Organic", "Phytosanitary (TAPHIS)"],
    shelfLife: "24 months",
    minOrder: "250 kg",
    icon: "flame",
    image:
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "tobacco-tea",
    name: "Unmanufactured Tobacco & Tea",
    category: "Grains & Spices",
    tagline: "Grade A bulk export packaging",
    description:
      "Grade A unmanufactured tobacco leaf and high-quality black tea in bulk export packaging, sourced from Tanzania's established auction floors and estates with full compliance documentation.",
    hsCode: "2401.10 / 0902.40",
    origin: "Tabora, Mbeya (tobacco); Southern highlands (tea)",
    grades: ["Tobacco Grade A", "Black Tea CTC / Orthodox"],
    specs: [
      { label: "Tobacco", value: "FCV, uniform leaf" },
      { label: "Tea", value: "Broken / Souchong grades" },
      { label: "Moisture", value: "≤10% (tea ≤8%)" },
    ],
    packaging: ["Hogsheads / bales (tobacco)", "25/50 kg tea chests"],
    shipping: ["Sea Freight"],
    certifications: ["TBS", "Phytosanitary (TAPHIS)"],
    shelfLife: "18–24 months",
    minOrder: "1 × 20ft",
    icon: "sprout",
    image:
      "https://images.unsplash.com/photo-1649779117064-107e63b88758?q=80&w=1000&auto=format&fit=crop",
  },
];

export function getCommodityById(id: string): Commodity | undefined {
  return commodities.find((c) => c.id === id);
}

export const destinations = [
  {
    city: "Rotterdam",
    country: "Netherlands",
    region: "Europe",
    port: "Port of Dar es Salaam",
    route: "Dar es Salaam → Suez → Rotterdam",
    transitDays: "24–28 days",
  },
  {
    city: "Dubai",
    country: "UAE",
    region: "Middle East",
    port: "Port of Dar es Salaam",
    route: "Dar es Salaam → Jebel Ali",
    transitDays: "12–15 days",
  },
  {
    city: "Mumbai",
    country: "India",
    region: "Asia",
    port: "Port of Dar es Salaam",
    route: "Dar es Salaam → Nhava Sheva",
    transitDays: "10–12 days",
  },
  {
    city: "Qingdao",
    country: "China",
    region: "Asia",
    port: "Port of Dar es Salaam",
    route: "Dar es Salaam → Singapore → Qingdao",
    transitDays: "26–32 days",
  },
  {
    city: "Antwerp",
    country: "Belgium",
    region: "Europe",
    port: "Port of Dar es Salaam",
    route: "Dar es Salaam → Antwerp",
    transitDays: "25–29 days",
  },
  {
    city: "Jeddah",
    country: "Saudi Arabia",
    region: "Middle East",
    port: "Port of Tanga",
    route: "Tanga → Jeddah",
    transitDays: "8–10 days",
  },
  {
    city: "Mombasa",
    country: "Kenya",
    region: "Africa",
    port: "Port of Tanga",
    route: "Tanga → Mombasa (transshipment)",
    transitDays: "2–3 days",
  },
  {
    city: "Shanghai",
    country: "China",
    region: "Asia",
    port: "Port of Mtwara",
    route: "Mtwara → Singapore → Shanghai",
    transitDays: "28–34 days",
  },
  {
    city: "Hamburg",
    country: "Germany",
    region: "Europe",
    port: "Port of Dar es Salaam",
    route: "Dar es Salaam → Hamburg",
    transitDays: "25–29 days",
  },
];

export const qualitySteps = [
  {
    step: "01",
    title: "Direct Sourcing",
    description:
      "Cultivated relationships with vetted outgrower networks and estates across Tanzania to secure consistent, traceable supply at origin.",
    icon: "sprout",
  },
  {
    step: "02",
    title: "Lab Analysis & Grading",
    description:
      "Every lot undergoes moisture, purity, outturn, residue, and quality-grading analysis in accredited labs before a single bag is shipped.",
    icon: "flask",
  },
  {
    step: "03",
    title: "Cold Chain Packaging",
    description:
      "Export-grade packaging with gel-ice lining, vacuum tins, and moisture barrier bags keeps products at spec from packhouse to port.",
    icon: "snowflake",
  },
  {
    step: "04",
    title: "Phytosanitary Inspection",
    description:
      "TAPHIS-certified inspection and fumigation where required, with documentation issued to meet destination-country import compliance.",
    icon: "shield",
  },
  {
    step: "05",
    title: "Port Clearance & Shipping",
    description:
      "In-house freight forwarding through Dar es Salaam, Tanga, and Mtwara ports for on-time vessel booking and full bill-of-lading support.",
    icon: "ship",
  },
];

export const trustBadges = [
  { name: "Phytosanitary", org: "TAPHIS", icon: "shield" },
  { name: "GlobalGAP", org: "Certificate", icon: "badge" },
  { name: "BRELA", org: "Registered Company", icon: "file" },
  { name: "TRA", org: "Tax Compliant", icon: "receipt" },
  { name: "TBS", org: "Standards Bureau", icon: "check" },
  { name: "SGS", org: "Pre-shipment Testing", icon: "flask" },
];

export const shipments = [
  { label: "Tons Exported", value: 48000, suffix: "+", note: "Across all commodities / annual" },
  { label: "Active Destinations", value: 24, suffix: "", note: "Countries on 4 continents" },
  { label: "Quality Certifications", value: 8, suffix: "", note: "Accredited & current" },
  { label: "Port Delivery SLA", value: 96, suffix: "%", note: "On-time vessel loading" },
];
