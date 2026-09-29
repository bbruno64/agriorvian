import { type Commodity } from "./commodities";
import { getMarketBySlug } from "./markets";

export interface TradeRouteShipping {
  port: string;
  route: string;
  transitDays: string;
}

export interface TradeRoute {
  slug: string;
  commodityId: string;
  marketSlug?: string;
  label: string;
  country: string;
  city: string;
  destinationPort: string;
  title: string;
  description: string;
  intro: string;
  demandNotes: string[];
  keywords: string[];
  shipping?: TradeRouteShipping;
}

const VIETNAM_SHIPPING: TradeRouteShipping = {
  port: "Port of Dar es Salaam",
  route: "Dar es Salaam → Singapore → Hai Phong",
  transitDays: "30–35 days",
};

export const tradeRoutes: TradeRoute[] = [
  {
    slug: "cashew-nuts-to-vietnam",
    commodityId: "cashew-rcn",
    label: "Cashew Nuts to Vietnam",
    country: "Vietnam",
    city: "Hai Phong & Ho Chi Minh City",
    destinationPort: "Hai Phong, Vietnam",
    title: "Tanzania Raw Cashew Nuts to Vietnam — Direct RCN Export",
    description:
      "Export raw cashew nuts (RCN) from Tanzania to Vietnam in 30–35 days. Tunduru & Newala origin, outturn 48–53 lbs, 50kg jute bags, FOB Dar es Salaam or CIF Hai Phong.",
    intro:
      "Vietnam is the world's largest importer of raw cashew nuts and the biggest single buyer of Tanzanian RCN, processing over two-thirds of global supply in the industrial belt around Binh Phuoc, Dong Nai, and Ho Chi Minh City. AgriOrvian ships high-outturn Tunduru and Newala origin RCN from the Port of Dar es Salaam via Singapore to Hai Phong and HCMC in 30–35 days, in 50 kg new jute bags matched to Vietnamese factory intake specs.",
    demandNotes: [
      "Vietnam's 2,000+ processing plants compete for African RCN aroma, taste, and yield — Tanzania's 48–53 lbs outturn is exactly what Vietnamese millers target.",
      "Tanzanian RCN is widely blended into the Vietnamese export kernel program that ships WW180–WW320 kernels to the EU and US.",
      "We offer 20ft and 40ft full-container lots with SGS pre-shipment inspection and phytosanitary certification to clear Vietnamese customs on first presentation.",
    ],
    keywords: [
      "raw cashew nuts to Vietnam",
      "Tanzania cashew export Hai Phong",
      "RCN 48-53 lbs Vietnamese buyer",
      "cashew processing mills Vietnam",
      "Tunduru cashew nuts export",
    ],
    shipping: VIETNAM_SHIPPING,
  },
  {
    slug: "cashew-nuts-to-india",
    commodityId: "cashew-rcn",
    marketSlug: "mumbai",
    label: "Cashew Nuts to India",
    country: "India",
    city: "Mumbai (Nhava Sheva)",
    destinationPort: "Nhava Sheva, Mumbai, India",
    title: "Tanzania Raw Cashew Nuts to India — Nhava Sheva RCN Supply",
    description:
      "Raw cashew nuts from Tunduru and Newala shipped Dar es Salaam to Nhava Sheva in 10–12 days. Outturn 48–53 lbs, moisture <10%, 50kg jute bags, SGS verified.",
    intro:
      "India is Africa cashew's most traditional buyer, with a dense network of processors in Maharashtra, Kerala, and Andhra Pradesh milling East African RCN for domestic and export kernel demand. AgriOrvian's vessels reach Nhava Sheva from Dar es Salaam in 10–12 days — the shortest transit of any deep-sea market we serve — carrying Tunduru- and Newala-origin raw cashew with outturn 48–53 lbs and moisture under 10%.",
    demandNotes: [
      "Indian millers reward high outturn; our Tunduru belt lots consistently grade 48–53 lbs with low defective-nut ratios under 5%.",
      "Short 10–12 day transit from Dar es Salaam to Nhava Sheva protects kernel weight and keeps moisture risk low on arrival.",
      "Phytosanitary (TAPHIS) certification and SGS pre-shipment inspection ship with every container to support smooth customs clearance.",
    ],
    keywords: [
      "raw cashew nuts to India",
      "Tanzania RCN Nhava Sheva",
      "cashew processors India supply",
      "48-53 lbs cashew exporters",
      "adar Africa cashew import",
    ],
  },
  {
    slug: "cashew-kernels-to-netherlands",
    commodityId: "cashew-kernels",
    marketSlug: "rotterdam",
    label: "Cashew Kernels to Netherlands",
    country: "Netherlands",
    city: "Rotterdam",
    destinationPort: "Rotterdam, Netherlands",
    title: "Processed Cashew Kernels to Netherlands — WW Grades CIF Rotterdam",
    description:
      "WW180–WW320 cashew kernels in vacuum tins shipped to Rotterdam in 24–28 days. Tanzania processing facility, HACCP + SGS verified, FOB Dar es Salaam or CIF Rotterdam.",
    intro:
      "The Netherlands is Europe's leading gateway for edible nuts, and Rotterdam channels cashew kernels into retail, foodservice, and Nordic and German processing programs. AgriOrvian exports WW, SW, and LWP kernel grades packed in 10 kg vacuum tins and 11.34 kg barrier bags from our Dar es Salaam processing facility, reaching Rotterdam in 24–28 days with HACCP compliance and SGS lab verification.",
    demandNotes: [
      "Dutch and European buyers value our strictly graded WW180, WW210, and WW320 whole counts with moisture at 5% or below.",
      "Nitrogen-flushed vacuum tins and barrier bags preserve color and crunch for premium retail programs after the Suez transit.",
      "EU importers receive complete HACCP, TBS, and SGS documentation plus EU-compliant phytosanitary filing support.",
    ],
    keywords: [
      "cashew kernels to Netherlands",
      "WW180 cashew kernels Rotterdam",
      "Tanzania cashew kernel export EU",
      "vacuum tin cashew distributor",
      "CIF Rotterdam edible nuts",
    ],
  },
  {
    slug: "cashew-kernels-to-germany",
    commodityId: "cashew-kernels",
    marketSlug: "hamburg",
    label: "Cashew Kernels to Germany",
    country: "Germany",
    city: "Hamburg",
    destinationPort: "Hamburg, Germany",
    title: "A-grade Cashew Kernels to Germany — CIF Hamburg Supply",
    description:
      "WW & SW cashew kernel grades in vacuum tins and barrier bags shipped to Hamburg in 25–29 days. Tanzania HACCP plant, lab-tested, FOB Dar es Salaam or CIF Hamburg.",
    intro:
      "Germany runs one of Europe's largest nut and snack-food industries, with Hamburg as the entry port for roasting and retail programs across the DACH region. AgriOrvian supplies whole and split cashew kernels in vacuum tins and barrier bags from our Dar es Salaam facility, delivering to Hamburg in 25–29 days on the direct route with full HACCP and SGS documentation.",
    demandNotes: [
      "Premium retail snack programs demand consistently sized, light-colored WW kernels — our N2-flushed packing locks in both.",
      "Direct Dar es Salaam → Hamburg sailings cut handling risk versus transshipment hubs.",
      "German food-safety compliance is backed by HACCP plant certification, TBS standards, and SGS pre-shipment laboratory results.",
    ],
    keywords: [
      "cashew kernels to Germany",
      "cashew wholesale Hamburg",
      "Tanzania cashew kernel exporter",
      "WW210 cashew retail private label",
      "CIF Hamburg nuts importer",
    ],
  },
  {
    slug: "avocados-to-netherlands",
    commodityId: "avocados",
    marketSlug: "rotterdam",
    label: "Avocados to Netherlands",
    country: "Netherlands",
    city: "Rotterdam",
    destinationPort: "Rotterdam, Netherlands",
    title: "Tanzania Avocados to Netherlands — Hass & Fuerte CIF Rotterdam",
    description:
      "Hass & Fuerte avocados, caliber 12–24, >21% dry matter, cold-chain packed to 4–6°C for a 24–28 day Suez transit to Rotterdam. GlobalGAP + TAPHIS certified.",
    intro:
      "Rotterdam is the EU's primary entry for avocados, and Dutch ripeners, packers, and retail programs are the most demanding on dry matter and shelf life. AgriOrvian picks Hass and Fuerte at maturity in the Mbeya, Njombe, and Arusha highlands, hydrocools to 4–6°C, and ships on a 24–28 day Suez reefer transit that lands a 15-day-plus shelf-life window on arrival in Rotterdam.",
    demandNotes: [
      "EU retail specs are matched to the mm: dry matter above 21%, caliber 12–24, with controlled-ethylene ripening on request.",
      "A strict pre-cooling and gel-ice cold-chain program protects flesh quality through the 24–28 day reefer voyage.",
      "GlobalGAP and TAPHIS phytosanitary certification meet EU plant-health requirements for first-clearance smoothness.",
    ],
    keywords: [
      "avocados to Netherlands",
      "Tanzania avocado Rotterdam import",
      "Hass avocado exporter EU",
      "avocado dry matter 21 percent",
      "CIF Rotterdam fresh produce",
    ],
  },
  {
    slug: "avocados-to-germany",
    commodityId: "avocados",
    marketSlug: "hamburg",
    label: "Avocados to Germany",
    country: "Germany",
    city: "Hamburg",
    destinationPort: "Hamburg, Germany",
    title: "Tanzania Avocado Export to Germany — Hass & Fuerte CIF Hamburg",
    description:
      "Hass and Fuerte avocados caliber 12–24 with >21% dry matter shipped to Hamburg in 25–29 days. Cold-chain protected, TAPHIS + GlobalGAP certified.",
    intro:
      "Germany's avocado consumption continues to grow through retail, foodservice, and ripeners around Hamburg and the Ruhr. AgriOrvian exports Hass and Fuerte from Tanzania's highlands with >21% dry matter, caliber 12–24 counts, and a 4–6°C cold chain that preserves 15+ days of shelf life through the 25–29 day voyage to Hamburg.",
    demandNotes: [
      "German buyers gain a southern-hemisphere seasonal window that extends year-round supply beyond the established import calendar.",
      "Count sizes and ripeness targets are configurable per order — ripened, ready-to-eat, or green pre-ripened for your ripener.",
      "Phytosanitary, GlobalGAP, and cold-chain temperature logs ship with every consignment to Hamburg.",
    ],
    keywords: [
      "avocados to Germany",
      "Tanzania avocado Hamburg import",
      "avocado exporter Germany retail",
      "Hass avocado CIF Hamburg",
      "southern hemisphere avocado window",
    ],
  },
  {
    slug: "avocados-to-uae",
    commodityId: "avocados",
    marketSlug: "dubai",
    label: "Avocados to UAE",
    country: "United Arab Emirates",
    city: "Dubai",
    destinationPort: "Jebel Ali, Dubai, UAE",
    title: "Tanzania Avocados to UAE — Hass & Fuerte CIF Jebel Ali",
    description:
      "Hass and Fuerte avocados shipped from Dar es Salaam to Jebel Ali, Dubai in 12–15 days. Caliber 12–24, cold-chain packed, TAPHIS certified for GCC retail.",
    intro:
      "Dubai's hospitality and premium retail sectors drive a fast-growing market for quality avocados, and the 12–15 day Gulf transit from Dar es Salaam keeps freshness high compared with longer EU voyages. AgriOrvian supplies GCC importers with Hass and Fuerte avocados packed to spec in 4kg and 10kg lugs, cold-chained at 4–6°C, and delivered CIF Jebel Ali.",
    demandNotes: [
      "Hotels, restaurants, and café chains across the UAE demand reliable caliber and consistent ripeness — matched per order.",
      "The short 12–15 day route preserves a generous shelf-life window for onward GCC re-export and retail.",
      "Phytosanitary certification and temperature-controlled reefer shipping meet Gulf import compliance to Jebel Ali.",
    ],
    keywords: [
      "avocados to Dubai",
      "Tanzania avocado UAE import",
      "avocado supplier GCC hotels",
      "Hass avocado CIF Jebel Ali",
      "fresh produce Dar es Salaam Dubai",
    ],
  },
  {
    slug: "coffee-to-germany",
    commodityId: "coffee",
    marketSlug: "hamburg",
    label: "Coffee to Germany",
    country: "Germany",
    city: "Hamburg",
    destinationPort: "Hamburg, Germany",
    title: "Tanzania Specialty Coffee Export to Germany — Arabica & Robusta",
    description:
      "Washed Arabica from Mbeya & Kilimanjaro and Robusta from Bukoba shipped to Hamburg in 25–29 days. AA/AB/PB grades, 82+ SCAA cupping, 60kg grain-pro bags.",
    intro:
      "Hamburg is Europe's coffee trading capital, and Germany roasts more coffee than any other EU member — an exact match for Tanzania's washed Arabica profile. AgriOrvian ships AA, AB, and PB grades from Mbeya and Kilimanjaro, plus Bukoba Robusta, in 60 kg grain-pro bags, landing at Hamburg in 25–29 days on the direct Dar es Salaam route.",
    demandNotes: [
      "Kilimanjaro and Mbeya washed Arabicas cup 82+ and fit specialty and high-volume commercial blends alike.",
      "Screen 15–18 with 10.5–11.5% moisture is milled to German roasting specifications, not generic lots.",
      "Traceable estate-level lots with phytosanitary documentation support German supply-chain and origin claims.",
    ],
    keywords: [
      "coffee to Germany",
      "Tanzania Arabica Hamburg import",
      "specialty coffee roaster Germany",
      "Kilimanjaro coffee export",
      "Robusta Bukoba buyer",
    ],
  },
  {
    slug: "coffee-to-china",
    commodityId: "coffee",
    marketSlug: "shanghai",
    label: "Coffee to China",
    country: "China",
    city: "Shanghai",
    destinationPort: "Shanghai, China",
    title: "Tanzania Specialty Coffee to China — Shanghai & East China Supply",
    description:
      "Washed Arabica and Robusta from Tanzania shipped Mtwara via Singapore to Shanghai in 28–34 days. AA/AB/PB grades in 60kg grain-pro bags, SGS verified.",
    intro:
      "China's coffee consumption is compounding fastest in the coastal hubs of Shanghai, Hangzhou, and Ningbo, where specialty roasters and café chains are building direct-trade menus around origin coffees. AgriOrvian exports washed Tanzanian Arabica and Robusta from the Port of Mtwara via Singapore to Shanghai in 28–34 days, with cupping scores, moisture specs, and full phytosanitary documentation.",
    demandNotes: [
      "Chinese specialty café chains are sourcing washed East African Arabica for light-roast menus — Tanzania cups cleanly at 82+.",
      "We offer traceable micro-lots and mill lots in 60 kg grain-pro bags sized for logistics to Shanghai and inland roasters.",
      "SGS pre-shipment verification and complete import documentation smooth clearance through China's coffee import regime.",
    ],
    keywords: [
      "coffee to China",
      "Tanzania coffee Shanghai",
      "specialty coffee China roaster",
      "Arabica micro-lot exporter China",
      "African coffee importer Shanghai",
    ],
  },
  {
    slug: "sesame-to-china",
    commodityId: "sesame",
    marketSlug: "qingdao",
    label: "Sesame to China",
    country: "China",
    city: "Qingdao & Shanghai",
    destinationPort: "Qingdao, China",
    title: "Tanzania Sesame Seeds to China — Purity ≥99.5% CIF Qingdao",
    description:
      "Natural white & Humera-grade sesame with ≥99.5% purity and ≥50% oil shipped Dar es Salaam via Singapore to Qingdao in 26–32 days. SGS verified, 25/50kg PP bags.",
    intro:
      "China is the largest buyer of East African sesame, and Qingdao plus Shanghai anchor the import programs feeding sesame paste, tahini, confectionery, and edible-oil food chains. AgriOrvian exports natural-white and Humera-grade sesame with ≥99.5% purity and ≥50% oil content, shipped in 25 kg and 50 kg PP bags via Singapore to Qingdao in 26–32 days.",
    demandNotes: [
      "Chinese sesame buyers grade heavily on purity and oil content — our ≥99.5% and ≥50% targets meet top-tier import specs.",
      "Moisture-sealed PP bags and SGS pre-shipment testing protect grade integrity on the 26–32 day voyage.",
      "Efficient clearance support for china-bound SPS documentation through Qingdao customs on first presentation.",
    ],
    keywords: [
      "sesame to China",
      "Tanzania sesame Qingdao",
      "Humera sesame China importer",
      "sesame purity 99.5 export",
      "African sesame Shanghai buyer",
    ],
  },
  {
    slug: "pulses-to-india",
    commodityId: "pulses",
    marketSlug: "mumbai",
    label: "Pulses to India",
    country: "India",
    city: "Mumbai (Nhava Sheva)",
    destinationPort: "Nhava Sheva, Mumbai, India",
    title: "Tanzania Pulses Export to India — Pigeon Peas & Beans Nhava Sheva",
    description:
      "Pigeon peas, chickpeas, kidney & mung beans, machine-clean 99% and Sortex 99.5%, shipped Dar es Salaam to Nhava Sheva in 10–12 days. SGS + TBS certified.",
    intro:
      "India is the world's largest pulses importer, and East African pigeon peas (toor dal) and beans clear through Nhava Sheva in volume. AgriOrvian exports pigeon peas, chickpeas, red kidney beans, and green mung beans — machine-clean 99% and Sortex 99.5% — in 25/50 kg PP bags, reaching Nhava Sheva in just 10–12 days from Dar es Salaam.",
    demandNotes: [
      "Sortex 99.5% and admixture under 1% match Indian dal-mill intake standards for toor, chana, and kidney beans.",
      "The 10–12 day transit is the fastest deep-sea window to Indian ports, protecting moisture and splitting performance.",
      "SGS pre-shipment, TBS certification, and phytosanitary documentation are prepared for smooth Nhava Sheva clearance.",
    ],
    keywords: [
      "pulses to India",
      "pigeon peas Tanzania export",
      "toor dal importer Nhava Sheva",
      "chickpeas kidney beans India",
      "Sortex 99.5 pulses supplier",
    ],
  },
  {
    slug: "sesame-to-uae",
    commodityId: "sesame",
    marketSlug: "dubai",
    label: "Sesame to UAE",
    country: "United Arab Emirates",
    city: "Dubai",
    destinationPort: "Jebel Ali, Dubai, UAE",
    title: "Sesame Seeds to UAE — Purity ≥99.5% CIF Jebel Ali",
    description:
      "Natural white & Humera-grade sesame shipped from Dar es Salaam to Jebel Ali in 12–15 days. ≥99.5% purity, ≥50% oil, 25/50kg PP bags, SGS verified.",
    intro:
      "Dubai re-exports sesame duty-free across the Gulf, Africa, and Asia while local tahini and confectionery mills consume directly — making Jebel Ali the busiest sesame gateway in the Middle East. AgriOrvian supplies natural-white and Humera-grade seeds with ≥99.5% purity and ≥50% oil on the 12–15 day route from Dar es Salaam.",
    demandNotes: [
      "High-oil, high-purity lots command premiums in Gulf re-export trade; our Humera-grade profiles are built for it.",
      "Dubai's re-export corridors let UAE buyers on-sell to Gulf Cooperation Council and East African markets from one hub.",
      "Freight and insurance options (FOB or CIF Jebel Ali) flex with how UAE buyers want to structure the trade.",
    ],
    keywords: [
      "sesame to Dubai",
      "Tanzania sesame UAE re-export",
      "tahini sesame supplier Gulf",
      "Humera grade seeds Jebel Ali",
      "sesame purity oil GCC buyer",
    ],
  },
  {
    slug: "sesame-to-saudi-arabia",
    commodityId: "sesame",
    marketSlug: "jeddah",
    label: "Sesame to Saudi Arabia",
    country: "Saudi Arabia",
    city: "Jeddah",
    destinationPort: "Jeddah, Saudi Arabia",
    title: "Sesame Seeds to Saudi Arabia — Tanga to Jeddah in 8–10 Days",
    description:
      "Natural & Humera-grade sesame exported from Tanga to Jeddah in just 8–10 days. ≥99.5% purity, ≥50% oil content, PP bags, TAPHIS + SGS certified.",
    intro:
      "Saudi Arabia's tahini and bakery sector is one of the Gulf's biggest, and the Red Sea route gives Tanzania a unique freight advantage. From the Port of Tanga, AgriOrvian delivers natural-white and Humera-grade sesame to Jeddah in only 8–10 days — preserving seed oils and aroma better than any longer routing.",
    demandNotes: [
      "The shortest transit in our network keeps moisture and FFA movement minimal, exactly what tahini mills demand.",
      "High-purity (≥99.5%) and high-oil (≥50%) specs meet Saudi Food and Drug Authority import expectations for sesame.",
      "Phytosanitary certification ships with every consignment, with SGS pre-shipment testing available on request.",
    ],
    keywords: [
      "sesame to Saudi Arabia",
      "Tanzania sesame Jeddah",
      "tahini sesame importer Saudi",
      "Tanga Jeddah sesame export",
      "Humera grade seeds Red Sea",
    ],
  },
  {
    slug: "spices-to-uae",
    commodityId: "zanzibar-spices",
    marketSlug: "dubai",
    label: "Zanzibar Spices to UAE",
    country: "United Arab Emirates",
    city: "Dubai",
    destinationPort: "Jebel Ali, Dubai, UAE",
    title: "Zanzibar Spices Export to UAE — Organic Cloves, Pepper & Cardamom",
    description:
      "Organic Zanzibar cloves, black pepper, cardamom, cinnamon & vanilla exported to Dubai in 12–15 days. Whole & ground, Islamic-market ready, SGS + organic certified.",
    intro:
      "Dubai is the spice trading capital of the Gulf, supplying the UAE, GCC, and re-export corridors to Africa and Asia. AgriOrvian exports organically certified Zanzibar cloves, black pepper, cardamom, cinnamon, and hand-cured vanilla on the 12–15 day Dar es Salaam → Jebel Ali route, in 25 kg poly-lined bags and retail-ready pouches.",
    demandNotes: [
      "Zanzibar's world-famous cloves (5–9mm hand-cleaned heads) and Malabar-type pepper (550g/l) hold premium Gulf positions.",
      "Organic certification plus air-tight, aroma-locked packing suit UAE spice houses and retail grocery programs.",
      "Short Gulf transit preserves volatile oil content and color that longer-handled spice cargo loses.",
    ],
    keywords: [
      "Zanzibar spices to Dubai",
      "cloves UAE organic supplier",
      "cardamom cinnamon Gulf import",
      "Zanzibar pepper wholesaler",
      "organic spice exporter Indian Ocean",
    ],
  },
  {
    slug: "nile-perch-to-netherlands",
    commodityId: "nile-perch",
    marketSlug: "rotterdam",
    label: "Nile Perch to Netherlands",
    country: "Netherlands",
    city: "Rotterdam",
    destinationPort: "Rotterdam, Netherlands",
    title: "Nile Perch Export to Netherlands — IQF Fillets CIF Rotterdam",
    description:
      "IQF Nile perch fillets, skin-on & skinless, PBO 10–15%, sizes 80/150 to 250/500g, from HACCP plants on Lake Victoria to Rotterdam. Fresh or frozen, reefer & air.",
    intro:
      "The Netherlands and wider Benelux are among the largest EU consumers of Nile perch, taking it through foodservice, catering, and retail frozen programs. AgriOrvian exports fresh and IQF skin-on, skinless, and PBO/PBI fillets from HACCP-certified Lake Victoria plants — 80/150 to 250/500g — delivered to Rotterdam by air freight or 40ft reefer with a complete cold chain.",
    demandNotes: [
      "Consistent white-flesh fillets with 10–15% protective glazing meet EU foodservice portioning and fry programs.",
      "Air freight to Rotterdam handles the 72-hour fresh window; IQF frozen covers volume programs at 2–3-week restocks.",
      "EU-compliant plant certification and HACCP documentation satisfy European import and retail audit requirements.",
    ],
    keywords: [
      "Nile perch to Netherlands",
      "IQF Nile perch fillets EU",
      "Lake Victoria fish exporter",
      "PBO glazing filleting plant",
      "Tanzania seafood foodservice Rotterdam",
    ],
  },
  {
    slug: "nile-perch-to-uae",
    commodityId: "nile-perch",
    marketSlug: "dubai",
    label: "Nile Perch to UAE",
    country: "United Arab Emirates",
    city: "Dubai",
    destinationPort: "Jebel Ali, Dubai, UAE",
    title: "Nile Perch Fillets to UAE — IQF, Fresh & Custom Cut",
    description:
      "IQF & fresh Nile perch fillets from Lake Victoria shipped or flown to Dubai in 12–15 days. Skin-on, skinless, PBO sizes 80/150–250/500g, HACCP certified.",
    intro:
      "Dubai's hotels, cruise dining, and retail counters consistently feature Nile perch — a white-fish favorite that outperforms price-volatile species. AgriOrvian supplies fresh and IQF fillets from Lake Victoria plants, skin-on, skinless, or PBO glazed, in sizes from 80/150 to 250/500g, delivered to UAE buyers by reefer (12–15 days) or air freight.",
    demandNotes: [
      "GCC hospitality buyers respect the stable, versatile white fillet — easily portioned for hotel and catering menus.",
      "Moisture-tight IECF glazing and gel-ice thermal lining maintain quality through the Gulf voyage.",
      "Cooperate with HACCP-certified plants and provide complete catch-origin and processing documentation for UAE import.",
    ],
    keywords: [
      "Nile perch Dubai",
      "white fish fillets UAE hotels",
      "IQF perch importer Jebel Ali",
      "Lake Victoria fishery Gulf",
      "Tanzania tilapia perch supplier Middle East",
    ],
  },
  {
    slug: "maize-to-kenya",
    commodityId: "maize",
    marketSlug: "mombasa",
    label: "Maize to Kenya",
    country: "Kenya",
    city: "Mombasa",
    destinationPort: "Mombasa, Kenya",
    title: "Non-GMO White Maize to Kenya — Mombasa in 2-3 Days",
    description:
      "Grade 1, zero-aflatoxin non-GMO white maize shipped from Tanga to Mombasa in 2-3 days. 0ppb tested, ≤13.5% moisture, 50kg bags for East African millers.",
    intro:
      "Kenya's flour millers import white maize across the region, and Mombasa is the delivery hub for the Nairobi, Rift Valley, and eastern milling corridors. AgriOrvian supplies Grade 1 non-GMO white maize with zero-aflatoxin screening from the central and southern harvests, sailing from Tanga to Mombasa in just 2–3 days.",
    demandNotes: [
      "Zero-aflatoxin (0 ppb tested) and ≤13.5% moisture match Kenyan mill intake specifications for food-grade maize.",
      "The 2–3 day route from Tanga is the fastest regional supply line — weeks faster than oceangoing maize.",
      "Test weights ≥74 kg/hl and ≤3% broken kernels deliver strong milling yields for flour, semovita, and starch customers.",
    ],
    keywords: [
      "maize to Kenya",
      "white maize Mombasa import",
      "zero aflatoxin maize supplier",
      "Tanzania grain East Africa",
      "Grade 1 maize miller Kenya",
    ],
  },
  {
    slug: "pulses-to-kenya",
    commodityId: "pulses",
    marketSlug: "mombasa",
    label: "Pulses to Kenya",
    country: "Kenya",
    city: "Mombasa",
    destinationPort: "Mombasa, Kenya",
    title: "Pulses & Beans to Kenya — Mombasa Regional Supply",
    description:
      "Pigeon peas, chickpeas, kidney & mung beans delivered from Tanga to Mombasa in 2-3 days. Machine-clean 99%, Sortex 99.5%, PP bags, TBS certified.",
    intro:
      "Regional pulse demand in Kenya, Uganda, and the wider Great Lakes market flows through Mombasa, where East African beans, pigeon peas, and green gram are distributed to wholesalers and processors. AgriOrvian supplies machine-clean 99% and Sortex 99.5% pulse lots from Tanga to Mombasa in 2–3 days.",
    demandNotes: [
      "Fast regional logistics give Kenyan wholesalers a reliable, low-inventory-risk pulse supply line.",
      "Sortex cleaning keeps admixture under 1% for retail-ready grading and processor intake.",
      "Flexible 25 kg and 50 kg bags suit both wholesaler redistribution and direct mill/processor offtake.",
    ],
    keywords: [
      "pulses to Kenya",
      "beans Mombasa wholesaler",
      "pigeon peas East Africa supplier",
      "green gram Kenya import",
      "Sortex pulses Tanga regional",
    ],
  },
  {
    slug: "tilapia-to-kenya",
    commodityId: "tilapia",
    marketSlug: "mombasa",
    label: "Tilapia to Kenya",
    country: "Kenya",
    city: "Mombasa",
    destinationPort: "Mombasa, Kenya",
    title: "Tilapia & Dagaa to Kenya — Fresh & Frozen, Mombasa 2-3 Days",
    description:
      "Wild & pond tilapia plus protein-rich dagaa (silver sardine) shipped Tanga to Mombasa in 2-3 days. 0-2°C fresh or frozen, gel-ice cartons, HACCP certified.",
    intro:
      "East Africa's demand for affordable fish protein keeps tilapia and dagaa routes from Lake Victoria to Kenya's coastal and inland markets among our busiest. AgriOrvian supplies wild and pond-grown tilapia plus dagaa in master cartons with gel-ice thermal lining, delivered from Tanga to Mombasa in 2–3 days — fresh at 0–2°C or frozen.",
    demandNotes: [
      "The 2–3 day route beats overland cold-chain risk for fresh tilapia heading to Mombasa and coastal retailers.",
      "Dagaa (silver sardine) moves in high volume to Kenyan and regional feed and food channels.",
      "HACCP-certified processing and TBS standards back food-safety compliance across the regional market.",
    ],
    keywords: [
      "tilapia to Kenya",
      "dagaa silver sardine Mombasa",
      "fresh tilapia East Africa supplier",
      "Lake Victoria fish Kenya",
      "frozen tilapia coastal market",
    ],
  },
];

export function getTradeRouteBySlug(slug: string): TradeRoute | undefined {
  return tradeRoutes.find((r) => r.slug === slug);
}

export function shippingForRoute(route: TradeRoute): TradeRouteShipping {
  if (route.shipping) return route.shipping;
  const market = route.marketSlug ? getMarketBySlug(route.marketSlug) : undefined;
  return {
    port: market?.port ?? "Port of Dar es Salaam",
    route: market?.route ?? "Dar es Salaam → Destination",
    transitDays: market?.transitDays ?? "Consult trade desk",
  };
}

export function routesForCommodity(
  commodityId: string,
  all: TradeRoute[] = tradeRoutes
): TradeRoute[] {
  return all.filter((r) => r.commodityId === commodityId);
}

export function routesForMarket(
  marketSlug: string,
  all: TradeRoute[] = tradeRoutes
): TradeRoute[] {
  return all.filter((r) => r.marketSlug === marketSlug);
}

export function bundleRoute(
  route: TradeRoute,
  getCommodity: (id: string) => Commodity | undefined
) {
  return {
    route,
    commodity: getCommodity(route.commodityId),
  };
}