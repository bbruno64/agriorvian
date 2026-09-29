import { destinations, type Commodity } from "./commodities";

export interface Market {
  slug: string;
  city: string;
  country: string;
  region: string;
  port: string;
  route: string;
  transitDays: string;
  title: string;
  description: string;
  intro: string;
  recommendation: string;
  commodityIds: string[];
}

function buildMarkets(): Market[] {
  const base = new Map(
    destinations.map((d) => [
      d.city,
      { port: d.port, route: d.route, transitDays: d.transitDays },
    ])
  );

  const get = (city: string) => {
    const b = base.get(city)!;
    return { ...b };
  };

  const ROTTERDAM = get("Rotterdam");
  const HAMBURG = get("Hamburg");
  const ANTWERP = get("Antwerp");
  const DUBAI = get("Dubai");
  const JEDDAH = get("Jeddah");
  const MUMBAI = get("Mumbai");
  const QINGDAO = get("Qingdao");
  const SHANGHAI = get("Shanghai");
  const MOMBASA = get("Mombasa");

  const europe = [
    "avocados",
    "nile-perch",
    "tilapia",
    "coffee",
    "zanzibar-spices",
    "cashew-kernels",
    "sesame",
  ];
  const middleEast = [
    "sesame",
    "zanzibar-spices",
    "nile-perch",
    "tilapia",
    "coffee",
    "cashew-rcn",
    "maize",
  ];
  const asia = [
    "cashew-rcn",
    "sesame",
    "pulses",
    "sunflower",
    "coffee",
    "cashew-kernels",
  ];
  const africa = ["maize", "pulses", "tilapia", "coffee", "sunflower", "sesame"];

  return [
    {
      slug: "rotterdam",
      city: "Rotterdam",
      country: "Netherlands",
      region: "Europe",
      ...ROTTERDAM,
      title: "Tanzania Commodity Exports to Rotterdam — Avocados, Fish & Coffee for the EU",
      description:
        "Buy Tanzanian avocados, Nile perch, coffee and spices delivered FOB Dar es Salaam or CIF Rotterdam (24–28 days via Suez). AgriOrvian ships lab-verified, cold-chain-protected cargo to Europe's largest port.",
      intro:
        "Rotterdam is Europe's busiest deep-sea port and the natural entry point for Tanzanian produce, fisheries, and specialty goods reaching the Netherlands, Germany, France, and the wider EU retail and foodservice market. AgriOrvian ships 20ft and 40ft reefer containers from the Port of Dar es Salaam, transiting the Suez Canal in 24–28 days, with full phytosanitary, EU-compliant, and temperature-monitored cold-chain documentation.",
      recommendation:
        "European buyers most often source these commodities from our catalog:",
      commodityIds: europe,
    },
    {
      slug: "hamburg",
      city: "Hamburg",
      country: "Germany",
      region: "Europe",
      ...HAMBURG,
      title: "Tanzania Exports to Hamburg — Avocados, Fish & Arabica Coffee for Germany",
      description:
        "Import Tanzanian avocados, Nile perch fillets, Arabica and Robust coffee to Hamburg in 25–29 days. AgriOrvian delivers CIF Hamburg with chilled reefer logistics and full EU documentation.",
      intro:
        "Hamburg is Germany's largest seaport and a hub for fresh produce, coffee, and seafood distribution across Northern Europe. We ship 20ft and 40ft reefer containers via the Port of Dar es Salaam to Hamburg in 25–29 days, backed by TAPHIS phytosanitary certificates, lab-verified quality, and continuous cold-chain tracking that European importers can audit.",
      recommendation:
        "German and Northern-European buyers most often source these commodities:",
      commodityIds: europe,
    },
    {
      slug: "antwerp",
      city: "Antwerp",
      country: "Belgium",
      region: "Europe",
      ...ANTWERP,
      title: "Tanzania Exports to Antwerp — Avocados, Cashew Kernels & Spices for the EU",
      description:
        "Tanzanian avocados, cashew kernels, coffee and Zanzibar spices shipped to Antwerp in 25–29 days. AgriOrvian provides CIF Antwerp with phytosanitary certification and cold-chain protection.",
      intro:
        "The Port of Antwerp-Bruges is the EU's largest integrated chemical and breakbulk hub and a major gateway for agri-food imports into Belgium, the Netherlands, and freight-forwarding networks across Europe. AgriOrvian's containers from Dar es Salaam reach Antwerp in 25–29 days, carrying lab-verified, EU-import-compliant consignments with complete traceability from farm to port.",
      recommendation:
        "Buyers importing through Antwerp most often choose these commodities:",
      commodityIds: europe,
    },
    {
      slug: "dubai",
      city: "Dubai",
      country: "United Arab Emirates",
      region: "Middle East",
      ...DUBAI,
      title: "Tanzania Commodity Imports to Dubai — Sesame & Spices for the Gulf",
      description:
        "Sesame seeds, Zanzibar spices, Nile perch and coffee exported from Dar es Salaam to Jebel Ali, Dubai in 12–15 days. AgriOrvian supplies Gulf importers with CIF Dubai reliability.",
      intro:
        "Jebel Ali, Dubai is the Gulf's trading capital and the primary redistribution hub for the UAE, Gulf Cooperation Council, and re-export trade into Africa and Asia. AgriOrvian's shipping line from the Port of Dar es Salaam to Jebel Ali takes 12–15 days — ideal for the short shelf-life window of sesame, spices, and chilled fish that Gulf importers and food manufacturers demand.",
      recommendation:
        "Middle-East buyers most often source these commodities from our catalog:",
      commodityIds: middleEast,
    },
    {
      slug: "jeddah",
      city: "Jeddah",
      country: "Saudi Arabia",
      region: "Middle East",
      ...JEDDAH,
      title: "Tanzania Exports to Jeddah — Sesame, Spices & Coffee for Saudi Arabia",
      description:
        "Sesame seeds, Zanzibar spices, Nile perch and coffee shipped from Tanga to Jeddah in just 8–10 days. AgriOrvian supplies Saudi food importers with CIF Jeddah delivery.",
      intro:
        "Jeddah serves the Red Sea corridor and supplies Saudi Arabia's large food-processing and foodservice sectors. Because the Port of Tanga is on the Red Sea route, AgriOrvian offers some of the shortest lead times to Saudi Arabia — just 8–10 days in transit — which keeps spice aroma, sesame purity, and fish quality at their peak on arrival.",
      recommendation:
        "Saudi and Red-Sea buyers most often source these commodities:",
      commodityIds: middleEast,
    },
    {
      slug: "mumbai",
      city: "Mumbai",
      country: "India",
      region: "Asia",
      ...MUMBAI,
      title: "Tanzania Exports to India — Raw Cashew & Pulses for Nhava Sheva",
      description:
        "High-outturn raw cashew nuts (RCN), pigeon peas and pulses shipped from Dar es Salaam to Nhava Sheva, Mumbai in 10–12 days. AgriOrvian supplies Indian processors and millers with premium Tunduru-origin cashew.",
      intro:
        "Mumbai (Nhava Sheva) is India's principal gateway for raw cashew nuts and pulses, the two product lines India imports at scale from East Africa. AgriOrvian's vessels from Dar es Salaam reach Nhava Sheva in 10–12 days, carrying Tunduru- and Newala-origin RCN with outturn 48–53 lbs, plus machine-clean and Sortex pulses that clear Indian customs smoothly.",
      recommendation:
        "Indian processors and traders most often source these commodities:",
      commodityIds: asia,
    },
    {
      slug: "qingdao",
      city: "Qingdao",
      country: "China",
      region: "Asia",
      ...QINGDAO,
      title: "Tanzania Exports to Qingdao — Cashew, Sesame & Pulses for China",
      description:
        "Tanzania raw cashew, sesame seeds and pulses shipped to Qingdao in 26–32 days via Singapore. AgriOrvian supports Chinese importers with SGS-verified lots and full documentation.",
      intro:
        "Qingdao is a major North-China hub for agri-commodity imports, serving food, oilseed, and feed processors across Shandong Province. AgriOrvian's route from Dar es Salaam via Singapore to Qingdao takes 26–32 days, with SGS pre-shipment inspection, phytosanitary certification, and moisture-sealed jute or PP-bag packaging engineered for the voyage.",
      recommendation:
        "Chinese importers most often source these commodities:",
      commodityIds: asia,
    },
    {
      slug: "shanghai",
      city: "Shanghai",
      country: "China",
      region: "Asia",
      ...SHANGHAI,
      title: "Tanzania Exports to Shanghai — Cashew Nuts & Sesame for China",
      description:
        "Raw cashew nuts, sesame seeds and sunflower shipped from Mtwara to Shanghai in 28–34 days. AgriOrvian delivers SGS-verified Tanzanian commodities to China's largest port.",
      intro:
        "Shanghai processes and redistributes more agri-commodity tonnage than any port in China, making it a priority destination for Tanzanian cashew, sesame, and oilseeds. AgriOrvian moves cargo from the Port of Mtwara via Singapore to Shanghai in 28–34 days, backed by SGS pre-shipment testing and export documentation aligned with Chinese import requirements.",
      recommendation:
        "Shanghai and East-China buyers most often source these commodities:",
      commodityIds: asia,
    },
    {
      slug: "mombasa",
      city: "Mombasa",
      country: "Kenya",
      region: "Africa",
      ...MOMBASA,
      title: "Tanzania Exports to Mombasa — Maize, Pulses & Tilapia for East Africa",
      description:
        "Non-GMO maize, pulses, tilapia and coffee shipped from Tanga to Mombasa in 2–3 days for East-African distribution. AgriOrvian serves regional trading houses with fast, reliable supply.",
      intro:
        "Mombasa is East Africa's busiest transshipment and trading hub, serving Kenya, Uganda, Rwanda, Burundi, and DRC demand for staple grains, pulses, and fish. From the Port of Tanga, AgriOrvian delivers to Mombasa in just 2–3 days, giving regional buyers the fastest route to Grade 1 non-GMO maize, machine-clean pulses, and fresh-frozen tilapia.",
      recommendation:
        "East-African regional traders most often source these commodities:",
      commodityIds: africa,
    },
  ];
}

export const markets: Market[] = buildMarkets();

export function getMarketBySlug(slug: string): Market | undefined {
  return markets.find((m) => m.slug === slug);
}

export function commoditiesForMarket(market: Market, all: Commodity[]): Commodity[] {
  return market.commodityIds
    .map((id) => all.find((c) => c.id === id))
    .filter((c): c is Commodity => Boolean(c));
}