// products.js - Curated Sachio Express Catalog Data

const PRODUCTS_DATA = [
  {
    id: "sachio-cleaner",
    title: "Sachio toilet cleaner",
    subtitle: "Sanctuary Solutions",
    category: "Sanitation",
    isDeal: true,
    badge: "-50%",
    priceNGN: 2500,
    originalPriceNGN: 5000,
    priceUSD: 2,
    originalPriceUSD: 4,
    image: "https://www.topinduscabin.com/storage/uploads/images/202604/14/1776154900_wwccTG4aXZ.png", // fallback or cleaner image
    rating: 4.9,
    reviewsCount: 38,
    description: "Royal Clean Heavy Duty Portable Toilet & Restroom Chemical Cleanser. Formulated with advanced antibacterial and anti-odour agents to keep mobile toilets, chemical cabins, and sanitation systems sterile, fresh, and stain-free.",
    specs: {
      "Volume": "1000ml / 1 Liter",
      "Scent": "Fresh Mountain Pine",
      "Formula": "10X Odour Neutralizer & Descaling Agent",
      "Application": "Mobile Toilets, Septic Tanks, Restroom Trailers",
      "Manufacturer": "Sanctuary Solutions / Sachio Chemical Co."
    }
  },
  {
    id: "top-site-toilet",
    title: "Portable Construction Site Toilet",
    subtitle: "Sachio Sanitation",
    category: "Mobile Toilets",
    isDeal: true,
    badge: "-30%",
    priceNGN: 480000,
    originalPriceNGN: 680000,
    priceUSD: 380,
    originalPriceUSD: 540,
    image: "https://www.topinduscabin.com/storage/uploads/images/202609/07/1788761421_gapKtqrqoV.jpg",
    rating: 4.8,
    reviewsCount: 52,
    description: "Heavy-duty HDPE standard portable construction site restroom. Built for endurance on rugged job sites, mining operations, and outdoor events. Features anti-slip floor, translucent roof for natural lighting, and high-capacity waste tank.",
    specs: {
      "Dimensions": "1000 x 1000 x 2300 mm",
      "Weight": "78 kg",
      "Material": "High Density Polyethylene (HDPE) with UV Protection",
      "Waste Tank": "190L / 50 Gallons with foot-pump flush",
      "Water Tank": "50L Clean Water Reservoir",
      "Warranty": "3 Years Structural Warranty"
    }
  },
  {
    id: "top-mobile-toilet",
    title: "Mobile Portable Toilet Cubicle",
    subtitle: "Sachio Global",
    category: "Mobile Toilets",
    isDeal: false,
    badge: "POPULAR",
    priceNGN: 520000,
    originalPriceNGN: 620000,
    priceUSD: 420,
    originalPriceUSD: 500,
    image: "https://www.topinduscabin.com/storage/uploads/images/202608/25/1787654299_fur7ifGc97.jpg",
    rating: 4.9,
    reviewsCount: 41,
    description: "Standard self-contained mobile toilet cabin with ceramic or HDPE sitting bowl, ventilation pipe, clothes hook, and lockable latch. Easy to move with integrated forklift pockets and lifting lugs.",
    specs: {
      "Dimensions": "1100 x 1100 x 2300 mm",
      "Material": "Double-wall molded virgin HDPE",
      "Flush Type": "Recirculating Chemical Flush / Fresh Water Flush",
      "Ventilation": "Integrated high-flow roof vent pipe"
    }
  },
  {
    id: "top-orange-toilet",
    title: "Orange Portable Toilet (Squat / Sit)",
    subtitle: "Sachio Sanitation",
    category: "Mobile Toilets",
    isDeal: true,
    badge: "-25%",
    priceNGN: 450000,
    originalPriceNGN: 600000,
    priceUSD: 360,
    originalPriceUSD: 480,
    image: "https://www.topinduscabin.com/storage/uploads/images/202412/12/1733983608_5g8Oen84Gl.jpg",
    rating: 4.7,
    reviewsCount: 29,
    description: "Vibrant high-visibility orange HDPE single mobile toilet. Highly favored for highway construction, public events, concerts, and municipal sanitation zones.",
    specs: {
      "Dimensions": "1050 x 1050 x 2280 mm",
      "Weight": "75 kg",
      "Color": "Signal Orange / Custom RAL",
      "Tank Capacity": "160L Sewage Tank"
    }
  },
  {
    id: "top-ada-toilet",
    title: "ADA Compliant Wheelchair Accessible Toilet",
    subtitle: "Sachio Special Needs",
    category: "Mobile Toilets",
    isDeal: false,
    badge: "ADA CERTIFIED",
    priceNGN: 1150000,
    originalPriceNGN: 1350000,
    priceUSD: 920,
    originalPriceUSD: 1080,
    image: "https://www.topinduscabin.com/storage/uploads/images/202409/12/1726131882_kI0j5g3XAu.jpg",
    rating: 5.0,
    reviewsCount: 19,
    description: "Extra-wide accessible restroom cabin designed according to international ADA barrier-free standards. Includes zero-step ground-level ramp, wrap-around stainless steel grab bars, and self-closing magnetic door.",
    specs: {
      "Dimensions": "1580 x 1580 x 2200 mm",
      "Door Width": "850 mm Clear Opening",
      "Safety": "Heavy duty stainless steel grab rails",
      "Features": "Ground level threshold, 360-degree wheelchair turn radius"
    }
  },
  {
    id: "top-container-toilet",
    title: "Portable Container Toilet Block for Sale",
    subtitle: "Sachio Modular",
    category: "Real Estate",
    isDeal: true,
    badge: "-15%",
    priceNGN: 3400000,
    originalPriceNGN: 4000000,
    priceUSD: 2700,
    originalPriceUSD: 3200,
    image: "https://www.topinduscabin.com/storage/uploads/images/202608/04/1785837396_dT3FghDCQp.jpg",
    rating: 4.9,
    reviewsCount: 14,
    description: "Multi-cubicle container toilet block built with insulated EPS/rockwool sandwich panels and hot-dip galvanized steel chassis. Includes multiple stalls, urinals, hand-wash sinks, and lighting.",
    specs: {
      "Size": "20ft (6058 x 2438 x 2591 mm)",
      "Configuration": "4 Stalls + 2 Urinals + 2 Sinks (Customizable)",
      "Insulation": "50mm Rockwool fire-rated sandwich panel",
      "Electrical": "Pre-wired waterproof LED and exhaust fans"
    }
  },
  {
    id: "top-expandable-house",
    title: "Expandable Modular Container House (20ft/40ft)",
    subtitle: "Sachio Prefab Villas",
    category: "Real Estate",
    isDeal: true,
    badge: "BESTSELLER",
    priceNGN: 9800000,
    originalPriceNGN: 12500000,
    priceUSD: 7800,
    originalPriceUSD: 9900,
    image: "https://www.topinduscabin.com/storage/uploads/images/202606/15/1781508380_prTl1mMi78.jpg",
    rating: 5.0,
    reviewsCount: 67,
    description: "State-of-the-art expandable modular home that expands into a 2 or 3 bedroom luxury residence within 15 minutes. Comes pre-installed with completed bathroom, kitchen cabinets, plumbing, and electricity.",
    specs: {
      "Expanded Area": "37 sqm (20ft) / 74 sqm (40ft)",
      "Setup Time": "15 minutes with 4 people",
      "Layout": "2 Bedrooms + 1 Living Room + 1 Bath + Kitchen",
      "Wind Resistance": "Grade 11 (120 km/h)",
      "Earthquake Proof": "Grade 8 Seismic Rating",
      "Lifespan": "25+ Years"
    }
  },
  {
    id: "top-space-capsule",
    title: "Futuristic Space Capsule House",
    subtitle: "Sachio Glamping Tech",
    category: "Real Estate",
    isDeal: false,
    badge: "LUXURY",
    priceNGN: 18500000,
    originalPriceNGN: 22000000,
    priceUSD: 14800,
    originalPriceUSD: 17500,
    image: "https://www.topinduscabin.com/storage/uploads/images/202409/29/1727580343_oJbkCQNUWO.jpg",
    rating: 5.0,
    reviewsCount: 32,
    description: "Ultra-luxury spaceship-inspired prefabricated living pod. Equipped with 270-degree curved panoramic tempered glass, smart voice-controlled home automation, skylight, and aviation-grade aluminum exterior.",
    specs: {
      "Dimensions": "8500 x 3300 x 3200 mm",
      "Exterior": "Aviation Aluminum Cladding Shell",
      "Glass": "Double-layer hollow Low-E panoramic glass",
      "Smart Home": "Whole-house voice control & motorized curtains",
      "Bathroom": "Integrated luxury wet & dry separated bathroom"
    }
  },
  {
    id: "top-apple-cabin",
    title: "Modern Apple Cabin Office & Studio Pod",
    subtitle: "Sachio Prefab Villas",
    category: "Real Estate",
    isDeal: true,
    badge: "-20%",
    priceNGN: 8200000,
    originalPriceNGN: 10250000,
    priceUSD: 6500,
    originalPriceUSD: 8200,
    image: "https://www.topinduscabin.com/storage/uploads/images/202511/02/1762078836_TD7ZFfWntN.jpg",
    rating: 4.9,
    reviewsCount: 26,
    description: "Streamlined modern pod with curved aerodynamic corners, full floor-to-ceiling glass wall, and soundproof insulation. Ideal for garden home offices, recording studios, luxury backyard retreats, or resort suites.",
    specs: {
      "Dimensions": "5800 x 2250 x 2450 mm",
      "Floor": "SPC waterproof luxury timber-grain flooring",
      "Structure": "Galvanized steel frame with thermal break",
      "Power": "Plug-and-play internal breaker box and sockets"
    }
  },
  {
    id: "top-guard-house",
    title: "Outdoor Mobile Security Guard Booth",
    subtitle: "Sachio Security Cabins",
    category: "Real Estate",
    isDeal: false,
    badge: "IN STOCK",
    priceNGN: 1800000,
    originalPriceNGN: 2100000,
    priceUSD: 1450,
    originalPriceUSD: 1680,
    image: "https://www.topinduscabin.com/storage/uploads/images/202510/10/1760081243_SUAVsfvw1R.jpg",
    rating: 4.8,
    reviewsCount: 45,
    description: "Weatherproof security sentry booth for parking facilities, estate checkpoints, embassies, and corporate headquarters. Includes built-in work desk, electrical ports, sliding windows, and exterior canopy.",
    specs: {
      "Dimensions": "1500 x 2000 x 2400 mm",
      "Wall Panel": "50mm Color Steel Sandwich Panel",
      "Windows": "Aluminium alloy sliding windows with mosquito mesh",
      "Internal": "Pre-installed work desk, switch, and power outlets"
    }
  },
  {
    id: "top-toilet-trailer",
    title: "Luxury Mobile Restroom Trailer (Multi-Station)",
    subtitle: "Sachio VIP Sanitation",
    category: "Restroom Trailers",
    isDeal: true,
    badge: "VIP SUITE",
    priceNGN: 14500000,
    originalPriceNGN: 18000000,
    priceUSD: 11500,
    originalPriceUSD: 14400,
    image: "https://www.topinduscabin.com/storage/uploads/images/202410/24/1729757686_ldqsfsEveh.jpg",
    rating: 5.0,
    reviewsCount: 21,
    description: "High-end towable mobile toilet trailer with separate male and female luxury suites. Fitted with air conditioning, porcelain flush toilets, LED vanity mirrors, background audio system, and clean water tank.",
    specs: {
      "Chassis": "Dual-axle towable road trailer with electric brakes",
      "Capacity": "2 to 4 Station individual private suites",
      "HVAC": "Built-in low-noise climate control A/C & heater",
      "Interior": "Porcelain toilets, solid marble-look countertops, LED sconces",
      "Tanks": "800L Freshwater / 1200L High Capacity Waste"
    }
  },
  {
    id: "top-trailer-caravan",
    title: "Caravan Mobile Toilet & Shower Trailer",
    subtitle: "Sachio VIP Sanitation",
    category: "Restroom Trailers",
    isDeal: false,
    badge: "NEW",
    priceNGN: 12800000,
    originalPriceNGN: 14500000,
    priceUSD: 10200,
    originalPriceUSD: 11600,
    image: "https://www.topinduscabin.com/storage/uploads/images/202212/18/1671376250_dXJjyfUouX.jpg",
    rating: 4.8,
    reviewsCount: 15,
    description: "Mobile shower and toilet combo trailer designed for film crews, remote work camps, festivals, and VIP outdoor catering. Towable by standard SUV or pickup truck.",
    specs: {
      "Stations": "2 Toilet Suites + 2 Hot Water Shower Rooms",
      "Hot Water": "Instant LPG gas / electric water heater",
      "Lighting": "Solar panel battery-assisted LED lighting system"
    }
  },
  {
    id: "top-handwash-double",
    title: "Double Users Portable Hand Wash Station",
    subtitle: "Sanctuary Solutions",
    category: "Sanitation",
    isDeal: true,
    badge: "-40%",
    priceNGN: 240000,
    originalPriceNGN: 400000,
    priceUSD: 190,
    originalPriceUSD: 320,
    image: "https://www.topinduscabin.com/storage/uploads/images/202506/08/1749395276_iuvBWaeuWl.jpg",
    rating: 4.9,
    reviewsCount: 73,
    description: "Hygienic hands-free foot-pump dual user hand washing sink. Perfect companion for portable toilets, outdoor dining venues, markets, and school grounds.",
    specs: {
      "Users": "2 persons simultaneously",
      "Freshwater Tank": "80 Liters",
      "Greywater Tank": "90 Liters",
      "Operation": "Hands-free hygienic foot pump (200ml per stroke)",
      "Dispenser": "Integrated soap dispensers and paper towel holders"
    }
  },
  {
    id: "top-handwash-wheels",
    title: "Mobile Hand Wash Station With Wheels",
    subtitle: "Sachio Sanitation",
    category: "Sanitation",
    isDeal: false,
    badge: "EASY ROLL",
    priceNGN: 195000,
    originalPriceNGN: 230000,
    priceUSD: 155,
    originalPriceUSD: 184,
    image: "https://www.topinduscabin.com/storage/uploads/images/202210/18/1666063063_B2jAUumwgQ.jpg",
    rating: 4.7,
    reviewsCount: 31,
    description: "Portable rotomolded standalone sink with built-in rolling wheels and molded pull handle. Effortless for one person to move, fill, and service.",
    specs: {
      "Dimensions": "480 x 420 x 850 mm",
      "Portability": "2 heavy duty rubber wheels + ergonomic handle",
      "Freshwater": "45 Liters capacity"
    }
  },
  {
    id: "top-hdpe-urinal",
    title: "4-Person HDPE Mobile Urinal Pod",
    subtitle: "Sachio Sanitation",
    category: "Mobile Toilets",
    isDeal: true,
    badge: "-30%",
    priceNGN: 380000,
    originalPriceNGN: 540000,
    priceUSD: 300,
    originalPriceUSD: 430,
    image: "https://www.topinduscabin.com/storage/uploads/images/202609/14/1789379398_NyvrsZrO9m.jpg",
    rating: 4.9,
    reviewsCount: 37,
    description: "Quadruple 4-station standing mobile urinal cross pod. Drastically reduces wait lines at festivals, sporting tournaments, and crowded public events.",
    specs: {
      "Simultaneous Users": "4 Men",
      "Capacity": "450L huge waste containment reservoir",
      "Material": "Rotomolded ultraviolet stabilized polyethylene",
      "Crane / Forklift": "Built-in top center lifting hook for easy transport"
    }
  },
  {
    id: "top-cooler-speaker",
    title: "Portable Party Cooler With Bluetooth Speakers",
    subtitle: "Sachio Outdoors",
    category: "Cooler Boxes",
    isDeal: true,
    badge: "-35%",
    priceNGN: 180000,
    originalPriceNGN: 280000,
    priceUSD: 145,
    originalPriceUSD: 224,
    image: "https://www.topinduscabin.com/storage/uploads/images/202211/08/1667900384_Esz5gDqZut.jpg",
    rating: 4.9,
    reviewsCount: 88,
    description: "Rugged rotomolded heavy-duty cooler chest featuring integrated waterproof IPX6 Bluetooth stereo sound system, LED party lighting, and bottle opener.",
    specs: {
      "Capacity": "45 Liters / 50 Quarts (Holds up to 60 cans)",
      "Ice Retention": "Up to 5 Days with 3-inch pressure-injected PU walls",
      "Audio": "2x 20W Hi-Fi waterproof speakers + 10-hour rechargeable battery",
      "Features": "Stainless steel locks, built-in ruler, bottle opener"
    }
  },
  {
    id: "top-ice-chest",
    title: "Heavy-Duty Rotomolded Ice Chest Cooler 65L",
    subtitle: "Sachio Outdoors",
    category: "Cooler Boxes",
    isDeal: false,
    badge: "5-DAY ICE",
    priceNGN: 145000,
    originalPriceNGN: 175000,
    priceUSD: 115,
    originalPriceUSD: 140,
    image: "https://www.topinduscabin.com/storage/uploads/images/202210/21/1666333374_d5D77Q2hlW.jpg",
    rating: 4.8,
    reviewsCount: 42,
    description: "Bear-resistant commercial grade ice box with freezer-style silicone rubber seal gasket and airtight t-latches for offshore fishing, expeditions, and camping.",
    specs: {
      "Volume": "65 Liters",
      "Insulation": "Polyurethane Foam Core 55mm thick",
      "Drainage": "Rapid-flow leakproof drain plug",
      "Weight": "12.5 kg"
    }
  },
  {
    id: "top-dome-tent",
    title: "Customized Geodesic Dome Glamping Tent",
    subtitle: "Sachio Outdoor Living",
    category: "Outdoor Tents",
    isDeal: true,
    badge: "-25%",
    priceNGN: 3200000,
    originalPriceNGN: 4250000,
    priceUSD: 2550,
    originalPriceUSD: 3400,
    image: "https://www.topinduscabin.com/storage/uploads/images/202608/31/1788170405_bvMT0JwWjl.jpg",
    rating: 5.0,
    reviewsCount: 28,
    description: "Architectural geodesic glamping dome with transparent panoramic bay window. Engineered with galvanized steel tube framework and 850g/sqm waterproof PVC membrane.",
    specs: {
      "Diameter": "6m / 20ft (28.3 sqm floor area)",
      "Framework": "Hot-dip galvanized steel Q235 with white baked finish",
      "Cover Fabric": "850g/m² PVC, UV resistant, DIN4102 B1 flame retardant",
      "Wind Rating": "100 km/h (Wind Load 0.5KN/sqm)"
    }
  },
  {
    id: "top-wedding-tent",
    title: "Outdoor Wedding Pinnacle & Marquee Tent",
    subtitle: "Sachio Structures",
    category: "Outdoor Tents",
    isDeal: false,
    badge: "EVENTS",
    priceNGN: 2900000,
    originalPriceNGN: 3400000,
    priceUSD: 2300,
    originalPriceUSD: 2700,
    image: "https://www.topinduscabin.com/storage/uploads/images/202210/12/1665562856_Nu2Zjxbr1Z.jpg",
    rating: 4.8,
    reviewsCount: 17,
    description: "High-peak pinnacle pagoda event tent for outdoor banquets, wedding receptions, and commercial exhibits. Sturdy aluminum alloy profile 6061/T6.",
    specs: {
      "Dimensions": "6x6m / 10x10m modular spans available",
      "Profile": "High-strength extruded aluminium alloy",
      "Fabric": "Heavy duty double PVC coated polyester textile"
    }
  },
  {
    id: "top-coffee-kiosk",
    title: "Flat Pack Coffee Kiosk & Mobile Food Pod",
    subtitle: "Sachio Commercial",
    category: "Real Estate",
    isDeal: true,
    badge: "-18%",
    priceNGN: 4200000,
    originalPriceNGN: 5100000,
    priceUSD: 3350,
    originalPriceUSD: 4080,
    image: "https://www.topinduscabin.com/storage/uploads/images/202610/14/1791966403_etTvJW1qsL.jpg",
    rating: 4.9,
    reviewsCount: 22,
    description: "Commercial prefab concession stand container kiosk with hydraulic opening service hatch, stainless serving counters, overhead led signage, and sink hookups.",
    specs: {
      "Dimensions": "3000 x 2200 x 2500 mm",
      "Service Window": "Gas-strut awning hatch with lock",
      "Electrical": "32A breaker, internal LED ceiling lights, 6x sockets",
      "Flooring": "Aluminium checkered anti-slip plate"
    }
  }
];

if (typeof module !== 'undefined') {
  module.exports = { PRODUCTS_DATA };
}
