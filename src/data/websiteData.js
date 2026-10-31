// src/data/websiteData.js
// Complete dataset representing Sachio Express

export const COMPANY_INFO = {
  name: "Sachio Express",
  shortName: "Sachio Express",
  logo: "https://www.topinduscabin.com/storage/uploads/images/202407/04/1720072035_dzJiXxFXaq.png",
  slogan: "Professional Portable Products Manufacturer",
  description: "Sachio Express has been successfully creating and distributing innovative, high quality portable container houses, portable toilets, tents, cooler boxes etc around the world for over 15 years.",
  address: "801-9 Unit, No 837 Lianting Road, Xiang'an District, Xiamen, Fujian Province, China",
  factories: "Manufacturing facilities located in Quanzhou, Fujian and Weifang, Shandong covering more than 10,000 square meters with over 200 skilled employees.",
  hotline1: "+86 15959387358",
  hotline2: "+86 5923388958",
  email: "sales1@sachioexpress.com",
  whatsapp: "+86 15959387358",
  whatsappUrl: "https://api.whatsapp.com/send?phone=+8615959387358&text=Hello%20Sachio%20Express,%20I%20am%20interested%20in%20your%20products",
  wechatQr: "https://www.topinduscabin.com/storage/uploads/images/202209/28/1664374900_GDOjxU2RR0.png",
  socials: {
    facebook: "https://www.facebook.com/profile.php?id=61588789251748",
    tiktok: "https://www.tiktok.com/@topindus_",
    linkedin: "https://cn.linkedin.com/company/topindus",
    youtube: "https://www.youtube.com/@LeoXu-bz7yd",
    instagram: "https://www.instagram.com/topindus4"
  }
};

export const LANGUAGES = [
  { code: 'en', name: 'English', flag: 'https://www.topinduscabin.com/storage/uploads/images/202209/22/1663832156_DYTQyb6jRL.jpg' },
  { code: 'de', name: 'Deutsch', flag: 'https://www.topinduscabin.com/storage/uploads/images/202209/22/1663832215_wQOkQ7TDYR.jpg' },
  { code: 'es', name: 'Español', flag: 'https://www.topinduscabin.com/storage/uploads/images/202209/22/1663832227_VXf6UfmmIU.jpg' },
  { code: 'pt', name: 'Português', flag: 'https://www.topinduscabin.com/storage/uploads/images/202209/22/1663832242_iPGvfOD2F6.jpg' },
  { code: 'ko', name: '한국의', flag: 'https://www.topinduscabin.com/storage/uploads/images/202209/22/1663832258_DwMgDuRtt4.jpg' },
  { code: 'ms', name: 'Melayu', flag: 'https://www.topinduscabin.com/storage/uploads/images/202209/22/1663832285_OtFf4zsGb6.jpg' },
  { code: 'ar', name: 'العربية', flag: 'https://www.topinduscabin.com/storage/uploads/images/202209/22/1663832304_pi2X1nENFH.jpg' },
  { code: 'vi', name: 'Tiếng Việt', flag: 'https://www.topinduscabin.com/storage/uploads/images/202209/22/1663832320_mD6XRpSyNK.jpg' },
  { code: 'th', name: 'ไทย', flag: 'https://www.topinduscabin.com/storage/uploads/images/202209/22/1663832335_84wdtpJtSr.jpg' },
  { code: 'hi', name: 'हिंदी', flag: 'https://www.topinduscabin.com/storage/uploads/images/202209/22/1663832352_HH3tpEyUYq.jpg' },
];

export const HERO_SLIDES = [
  {
    id: 1,
    image: "https://www.topinduscabin.com/storage/uploads/images/202606/25/1782378097_jIoscygYfg.jpg",
    title: "HEAVY STEEL STRUCTURE BUILDING",
    subtitle: "Custom Engineered Industrial Frameworks & Multistory Commercial Facilities",
    linkText: "Explore Steel Structures",
    category: "Prefab House"
  },
  {
    id: 2,
    image: "https://www.topinduscabin.com/storage/uploads/images/202606/25/1782377303_s52NSNJl7S.jpg",
    title: "K & T TYPE PREFABRICATED HOUSING",
    subtitle: "Rapid Deployment Temporary Accommodation, Site Offices & Labor Camps",
    linkText: "View Modular Houses",
    category: "Prefab House"
  },
  {
    id: 3,
    image: "https://www.topinduscabin.com/storage/uploads/images/202607/23/1784799382_mWWldZamxM.jpg",
    title: "MODERN EXPANDABLE CONTAINER HOMES",
    subtitle: "20ft & 40ft Wings Foldable Living Units with Bathroom, Kitchen & Electrical Pre-installed",
    linkText: "Discover Container Homes",
    category: "Container House"
  },
  {
    id: 4,
    image: "https://www.topinduscabin.com/storage/uploads/images/202606/25/1782376747_lNdmmha7wv.jpg",
    title: "HEAVY DUTY HDPE PORTABLE TOILETS",
    subtitle: "Durable Chemical Sanitation Cubicles, Restroom Trailers & Shower Stations",
    linkText: "Browse Mobile Sanitation",
    category: "Portable Bathroom"
  }
];

export const PRODUCT_CATEGORIES = [
  {
    id: 'prefab-house',
    num: '01',
    title: 'Prefab House',
    desc: 'Portable K&T Type House, Steel Structure Building, Triangle House, etc.',
    image: 'https://www.topinduscabin.com/storage/uploads/images/202604/23/1776938905_OzK5RGUDc3.png',
    subcategories: [
      { name: 'K & T Type Prefab House', slug: 'k-t-type-prefab-house' },
      { name: 'Steel Structure Building', slug: 'steel-structure-building' },
      { name: 'Triangle House', slug: 'triangle-house' }
    ]
  },
  {
    id: 'container-house',
    num: '02',
    title: 'Container House',
    desc: 'Expandable Container House, Detachable Container House, Flat Pack Container House, Folding Container House, Space Capsule House, Apple Cabin House, Guard House, etc.',
    image: 'https://www.topinduscabin.com/storage/uploads/images/202604/23/1776940075_ofNLvpgxoO.png',
    subcategories: [
      { name: 'Expandable Container House', slug: 'expandable-container-house' },
      { name: 'Detachable Container House', slug: 'detachable-container-house' },
      { name: 'Flat Pack Container House', slug: 'flat-pack-container-house' },
      { name: 'Folding Container House', slug: 'folding-container-house' },
      { name: 'Space Capsule House', slug: 'space-capsule-house' },
      { name: 'Apple Cabin House', slug: 'apple-cabin-house' },
      { name: 'Guard House', slug: 'guard-house' }
    ]
  },
  {
    id: 'portable-bathroom',
    num: '03',
    title: 'Portable Bathroom',
    desc: 'Steel Structure Toilet, Portable Toilet, Portable Shower Room, Portable Urinal, Portable Hand Wash Station, etc.',
    image: 'https://www.topinduscabin.com/storage/uploads/images/202604/14/1776154900_wwccTG4aXZ.png',
    subcategories: [
      { name: 'Portable Toilet', slug: 'portable-toilet' },
      { name: 'Portable Shower Room', slug: 'portable-shower-room' },
      { name: 'Portable Urinal', slug: 'portable-urinal' },
      { name: 'Portable Hand Wash Station', slug: 'portable-hand-wash-station' },
      { name: 'Accessories', slug: 'bathroom-accessories' }
    ]
  },
  {
    id: 'portable-tent',
    num: '04',
    title: 'Portable Tent',
    desc: 'Dome Tent, Steel Structure Tent, Camping Tent, Party Tent, Trade Show Tent, Wedding Tent, Stage Truss, etc.',
    image: 'https://www.topinduscabin.com/storage/uploads/images/202604/14/1776154624_u2p0LFbUp0.png',
    subcategories: [
      { name: 'Camping Tent', slug: 'camping-tent' },
      { name: 'Party Tent', slug: 'party-tent' },
      { name: 'Trade Show Tent', slug: 'trade-show-tent' },
      { name: 'Wedding Tent', slug: 'wedding-tent' },
      { name: 'Stage Truss', slug: 'stage-truss' },
      { name: 'Portable Box', slug: 'portable-box' },
      { name: 'Accessories', slug: 'tent-accessories' }
    ]
  },
  {
    id: 'mobile-trailer',
    num: '05',
    title: 'Mobile Trailer',
    desc: 'Mobile Trailer Toilet, Mobile Food Trailer, Mobile Trailer House, etc.',
    image: 'https://www.topinduscabin.com/storage/uploads/images/202605/21/1779357542_iPSpvVRFxW.png',
    subcategories: [
      { name: 'Mobile Trailer Toilet', slug: 'mobile-trailer-toilet' },
      { name: 'Mobile Food Trailer', slug: 'mobile-food-trailer' },
      { name: 'Mobile Trailer House', slug: 'mobile-trailer-house' }
    ]
  }
];

export const KEY_METRICS = [
  {
    icon: 'https://www.topinduscabin.com/storage/uploads/images/202209/22/1663833759_063mP5QMNn.png',
    count: 25000,
    suffix: '',
    label: 'Workshop area (square meters)'
  },
  {
    icon: 'https://www.topinduscabin.com/storage/uploads/images/202209/22/1663833779_AYqzLpV87A.png',
    count: 200,
    suffix: '+',
    label: 'Professional Employees'
  },
  {
    icon: 'https://www.topinduscabin.com/storage/uploads/images/202209/22/1663833798_Cpop54V6Bb.png',
    count: 8000,
    suffix: '',
    label: 'Monthly Production Capacity'
  },
  {
    icon: 'https://www.topinduscabin.com/storage/uploads/images/202209/22/1663833817_L5vyZnJ8sP.png',
    count: 350,
    suffix: '+',
    label: 'Clients Of Cooperation'
  }
];

export const SERVICES = [
  {
    id: 1,
    icon: 'https://www.topinduscabin.com/storage/uploads/images/202209/22/1663833837_crQ3y97lWe.png',
    title: 'Professional Team',
    desc: 'More than 20 staffs in technical & design engineering.'
  },
  {
    id: 2,
    icon: 'https://www.topinduscabin.com/storage/uploads/images/202209/22/1663833897_DHwKIOtCs2.png',
    title: 'Customization',
    desc: 'Sachio Express can customize according to customers\' drawings, site constraints, and requests.'
  },
  {
    id: 3,
    icon: 'https://www.topinduscabin.com/storage/uploads/images/202209/22/1663833918_RZdR5UP58G.png',
    title: 'ISO Certificate',
    desc: 'Certified quality standards: ISO 9001, ISO 14001 & ISO 45001.'
  },
  {
    id: 4,
    icon: 'https://www.topinduscabin.com/storage/uploads/images/202209/22/1663833947_Ol2BwnmS2N.png',
    title: 'After Service',
    desc: 'Dedicated 24 hours customer response and global technical assistance.'
  },
  {
    id: 5,
    icon: 'https://www.topinduscabin.com/storage/uploads/images/202209/22/1663833969_G9BJVhnsuC.png',
    title: 'Quality Assurance',
    desc: '3 to 6 years of comprehensive quality warranty and structural protection.'
  },
  {
    id: 6,
    icon: 'https://www.topinduscabin.com/storage/uploads/images/202209/22/1663833993_mR6WDvRK6N.png',
    title: 'Fast Delivery',
    desc: 'High volume inventory and streamlined shipping preparation for fast international dispatch.'
  }
];

export const SHOWCASE_PROJECTS = [
  {
    id: 'mexico-steel-platform',
    title: 'Steel Structure Platform Project in Mexico: 22 Containers Successfully Loaded',
    date: 'October 22, 2026',
    image: 'https://www.topinduscabin.com/storage/uploads/images/202610/22/1792640311_43mnFjG7y7.jpg',
    excerpt: 'Sachio Express has successfully completed the container loading of a steel structure platform project for a client in Mexico, with a total shipment of 22 containers. From initial design to professional manufacturing and export packaging.',
    location: 'Mexico',
    specs: '22 Ocean Containers, Structural Steel Beam Fabrication, Hot-dip Galvanized Finish'
  },
  {
    id: 'australia-multifunctional-unit',
    title: 'Sachio Express Completes Custom Multi-Functional Container Unit for Australian Client',
    date: 'October 10, 2026',
    image: 'https://www.topinduscabin.com/storage/uploads/images/202610/10/1791601666_8nrV93p31U.jpg',
    excerpt: 'Designed for outdoor use, this innovative modular solution integrates a kitchen, laundry room, and bathroom into one compact container unit, providing a practical and convenient living solution.',
    location: 'Australia',
    specs: 'Integrated Kitchen, Ensuite Bathroom, Laundry Bay, Insulated Wood-grain Panels'
  },
  {
    id: 'tanzania-breeding-project',
    title: 'Tanzania Steel Structure Breeding Project: Quality in Every Detail',
    date: 'September 30, 2026',
    image: 'https://www.topinduscabin.com/storage/uploads/images/202609/30/1790751288_tWQYEmHSpn.jpg',
    excerpt: 'Sachio Express completed the production and container loading of a steel structure agricultural breeding facility in Tanzania, with a total steel quantity of approximately 300 tons.',
    location: 'Tanzania, Africa',
    specs: '300 Tons Total Steel, Hot-dip Galvanized Trusses, Anti-corrosion Coatings'
  },
  {
    id: 'guatemala-5-story-warehouse',
    title: 'Sachio Express Guatemala 5-Story Steel Structure Project',
    date: 'September 24, 2026',
    image: 'https://www.topinduscabin.com/storage/uploads/images/202609/24/1790229973_cL9M6ba9AO.jpg',
    excerpt: 'Completed production of a 5-story steel structure warehouse project in Guatemala with over 6,000㎡ building area, shipped securely across 8 standard shipping containers.',
    location: 'Guatemala',
    specs: '6,000+ sqm Total Area, 5 Stories Multi-level Framework, 8 Containers Shipped'
  },
  {
    id: 'trinidad-school-project',
    title: 'Sachio Express Steel Structure School Project in Trinidad and Tobago',
    date: 'September 17, 2026',
    image: 'https://www.topinduscabin.com/storage/uploads/images/202609/17/1789616240_Yu6cIunDdl.jpg',
    excerpt: 'Completed the production and container loading of a customized school building project for educational facilities in the Caribbean with rapid bolting assembly.',
    location: 'Trinidad and Tobago',
    specs: 'Modular Classrooms, Prefabricated Steel Truss Roof, Cyclone-resistant Design'
  },
  {
    id: 'australian-horse-farm-expandable',
    title: 'Expandable Prefabricated Modular House Customized for an Australian Horse Farm',
    date: 'September 10, 2026',
    image: 'https://www.topinduscabin.com/storage/uploads/images/202609/10/1789023757_qtZ3jGI2rW.jpg',
    excerpt: 'Customized 40FT Two-Wing Expandable Foldable Container House with raised steel support platforms and panoramic outdoor veranda canopy overlooking the farm.',
    location: 'Australia',
    specs: '40ft Two-Wing Expandable, Elevated Foundation Pillars, Extended Decking & Canopy'
  }
];

export const ALL_PRODUCTS = [
  {
    id: 'expandable-20ft',
    name: '20ft Two-Wing Expandable Container House',
    category: 'Container House',
    subCategory: 'Expandable Container House',
    image: 'https://www.topinduscabin.com/storage/uploads/images/202604/23/1776940075_ofNLvpgxoO.png',
    features: ['Pre-wired & Plumbed', '10-Minute Rapid Deployment', 'Built-in Bathroom & Kitchenette'],
    dimensions: '5900 x 6300 x 2480 mm (Open)',
    structure: 'Galvanized Steel Frame + 50/75mm EPS/Rockwool Sandwich Panels',
    lifespan: '20-25 Years'
  },
  {
    id: 'expandable-40ft',
    name: '40ft Luxury Expandable Living Container Villa',
    category: 'Container House',
    subCategory: 'Expandable Container House',
    image: 'https://www.topinduscabin.com/storage/uploads/images/202609/10/1789023757_qtZ3jGI2rW.jpg',
    features: ['3 Bedrooms + Living Room', 'Double-glazed French Windows', 'Integrated Smart Electric System'],
    dimensions: '11800 x 6300 x 2480 mm',
    structure: 'Q235 Heavy Gauge Steel with Fluorocarbon Paint',
    lifespan: '30 Years'
  },
  {
    id: 'space-capsule-e8',
    name: 'Space Capsule Futuristic Glamping Cabin',
    category: 'Container House',
    subCategory: 'Space Capsule House',
    image: 'https://www.topinduscabin.com/storage/uploads/images/202610/10/1791601666_8nrV93p31U.jpg',
    features: ['270-degree Curved Skylight Glass', 'Aviation Aluminum Shell', 'Voice Controlled Smart Living'],
    dimensions: '8500 x 3300 x 3200 mm',
    structure: 'Galvanized Steel Subframe + Aviation Aluminum Exterior',
    lifespan: '40 Years'
  },
  {
    id: 'flat-pack-office',
    name: 'Standard Flat Pack Container Office / Cabin',
    category: 'Container House',
    subCategory: 'Flat Pack Container House',
    image: 'https://www.topinduscabin.com/storage/uploads/images/202607/23/1784799382_mWWldZamxM.jpg',
    features: ['Stackable up to 3 Floors', 'Modular Interlocking System', 'Forklift Pockets for Easy Move'],
    dimensions: '6055 x 2438 x 2896 mm (20ft High Cube)',
    structure: 'Heavy Welded Top & Bottom Frame with Corner Castings',
    lifespan: '20 Years'
  },
  {
    id: 'hdpe-site-toilet',
    name: 'Standard HDPE Construction Site Portable Toilet',
    category: 'Portable Bathroom',
    subCategory: 'Portable Toilet',
    image: 'https://www.topinduscabin.com/storage/uploads/images/202604/14/1776154900_wwccTG4aXZ.png',
    features: ['Foot Pump Recirculating Flush', '190L Large Sewage Tank', 'Anti-UV Double Wall Polyethylene'],
    dimensions: '1000 x 1000 x 2300 mm',
    structure: 'High Density Polyethylene (HDPE)',
    lifespan: '10-15 Years'
  },
  {
    id: 'handicap-accessible-toilet',
    name: 'Wheelchair Accessible ADA Compliant Portable Restroom',
    category: 'Portable Bathroom',
    subCategory: 'Portable Toilet',
    image: 'https://www.topinduscabin.com/storage/uploads/images/202604/14/1776154900_wwccTG4aXZ.png',
    features: ['Ground Level Roll-in Threshold', 'Full Interior Grab Bars', 'Extra-Wide Self-Closing Door'],
    dimensions: '1600 x 1600 x 2350 mm',
    structure: 'Reinforced Molded HDPE with Textured Floor',
    lifespan: '15 Years'
  },
  {
    id: 'mobile-trailer-toilet-luxury',
    name: '2-Station Luxury VIP Mobile Restroom Trailer',
    category: 'Mobile Trailer',
    subCategory: 'Mobile Trailer Toilet',
    image: 'https://www.topinduscabin.com/storage/uploads/images/202605/21/1779357542_iPSpvVRFxW.png',
    features: ['Air Conditioning & Heating', 'Porcelain Pedestal Flushing Toilets', 'Vanity Mirrors & LED Soft Lighting'],
    dimensions: '3800 x 2000 x 2800 mm',
    structure: 'DOT/EEC Certified Dual Axle Chassis + Fiberglass Shell',
    lifespan: '15 Years'
  },
  {
    id: 'mobile-catering-trailer',
    name: 'Commercial Food & Coffee Catering Trailer',
    category: 'Mobile Trailer',
    subCategory: 'Mobile Food Trailer',
    image: 'https://www.topinduscabin.com/storage/uploads/images/202605/21/1779357542_iPSpvVRFxW.png',
    features: ['Stainless Steel Counters', 'Range Hood Exhaust System', 'Non-slip Aluminum Diamond Plate Floor'],
    dimensions: '4000 x 2100 x 2400 mm',
    structure: 'Galvanized Tow Bar Chassis + Stainless Steel Interior',
    lifespan: '15 Years'
  },
  {
    id: 'k-type-prefab-house',
    name: 'Standard Slope-Roof K-Type Prefab House',
    category: 'Prefab House',
    subCategory: 'K & T Type Prefab House',
    image: 'https://www.topinduscabin.com/storage/uploads/images/202604/23/1776938905_OzK5RGUDc3.png',
    features: ['Low Cost High Capacity Housing', 'Dismountable & Reusable 5+ Times', 'Wind Resistance Class 10'],
    dimensions: 'Customized (Standard 1K = 1820mm grid)',
    structure: 'Light Gauge C-channel Steel + Sandwich Board',
    lifespan: '15 Years'
  },
  {
    id: 'heavy-steel-building',
    name: 'Industrial Portal Frame Steel Structure Warehouse',
    category: 'Prefab House',
    subCategory: 'Steel Structure Building',
    image: 'https://www.topinduscabin.com/storage/uploads/images/202606/25/1782378097_jIoscygYfg.jpg',
    features: ['Clear Span up to 40m without Columns', 'Overhead Crane Beam Integration', 'Severe Weather Resistance'],
    dimensions: 'Engineered per project (e.g. 60m x 30m x 9m)',
    structure: 'Q355B H-Section Steel Column & Beam',
    lifespan: '50 Years'
  },
  {
    id: 'geodesic-dome-tent',
    name: 'Geodesic Glamping Dome Tent with Glass Panel Door',
    category: 'Portable Tent',
    subCategory: 'Camping Tent',
    image: 'https://www.topinduscabin.com/storage/uploads/images/202604/14/1776154624_u2p0LFbUp0.png',
    features: ['850g/sqm Waterproof PVC Membrane', 'Thermal Insulation Layer Option', 'Panoramic Clear Bay Window'],
    dimensions: '6m / 8m / 10m Diameter Options',
    structure: 'Hot-dip Galvanized Steel Circular Pipe Q235',
    lifespan: '15 Years'
  },
  {
    id: 'commercial-party-tent',
    name: 'Large Clear Span Aluminum Event & Party Marquee',
    category: 'Portable Tent',
    subCategory: 'Party Tent',
    image: 'https://www.topinduscabin.com/storage/uploads/images/202604/14/1776154624_u2p0LFbUp0.png',
    features: ['Modular Extendable Length in 5m Bays', 'Flame Retardant DIN4102 B1/M2', 'Wind Loading up to 100km/h'],
    dimensions: '10m to 40m Clear Span, Custom Length',
    structure: 'Hard Pressed Extruded Aluminum Alloy 6061/T6',
    lifespan: '20 Years'
  }
];

export const HOT_TAGS = [
  "HDPE Portable Toilet",
  "wedding tent",
  "HDPE Porta Potty",
  "Chinese 20ft Expandable Container House For Living",
  "Welded Flat Pack Container House",
  "Circulating HDPE portable toilet for disabled",
  "Recycling HDPE portable toilet for disabled",
  "Prefab k house manufacturer",
  "flat pack container cafe bar",
  "Expandable Container House with Balcony Supplier"
];
