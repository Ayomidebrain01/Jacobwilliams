/**
 * ============================================================
 *  JACOB WILLIAMS — LISTINGS DATA
 *  ============================================================
 *  This is the ONLY file you need to edit to manage listings.
 *
 *  TO ADD A LISTING:    Copy any existing object, paste it at
 *                       the top of the array, give it a new id.
 *  TO EDIT A LISTING:   Find it by id and change the values.
 *  TO REMOVE A LISTING: Delete the whole object.
 *
 *  status options:  "For Sale" | "New" | "Pending" | "Sold"
 *
 *  categories: array of tags for filtering
 *    "luxury"          — $1M+ premium properties
 *    "investment"      — strong rental / ROI potential
 *    "new-construction"— built within last 4 years
 *    "family"          — top schools, space, suburbs
 *    "condo-townhome"  — attached / multi-level properties
 * ============================================================
 */

const LISTINGS = [
  {
    id: 1,
    status: "For Sale",
    price: "$1,450,000",
    address: "4812 Shadyside Ln",
    neighborhood: "River Oaks",
    city: "Houston, TX 77019",
    beds: 4,
    baths: 3.5,
    sqft: "3,800",
    garage: 2,
    lot: "0.22 Acres",
    yearBuilt: 2016,
    propertyType: "Single Family Home",
    hoa: "$320 / month",
    tax: "~$28,000 / year (est.)",
    school: "Houston ISD (River Oaks Elementary)",
    mls: "HAR-2025-10041",
    daysOnMarket: 7,
    categories: ["luxury", "family"],
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1400&q=80",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1400&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1400&q=80",
      "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=1400&q=80"
    ],
    description: [
      "Welcome to 4812 Shadyside Lane — a beautifully appointed residence in the heart of River Oaks. This four-bedroom home combines classic architecture with refined modern updates, offering an exceptional standard of living in Houston's most prestigious neighborhood.",
      "The open-plan main level features a chef's kitchen with quartz countertops, professional appliances, and a large island that flows naturally into the living and dining areas. Floor-to-ceiling windows flood the home with natural light and offer views of the manicured rear garden.",
      "The primary suite is a true retreat, featuring a spa-inspired ensuite bathroom with a soaking tub, walk-in shower, and custom closets. Three additional bedrooms each offer generous proportions and easy access to well-appointed bathrooms.",
      "Situated minutes from River Oaks Country Club, top dining, and Houston's finest schools, this property represents exceptional value in one of the city's most sought-after zip codes."
    ],
    features: [
      "Chef's kitchen with quartz countertops",
      "Open-plan living and dining",
      "Primary suite with spa bath",
      "2-car attached garage",
      "Landscaped rear garden",
      "Hardwood floors throughout",
      "Smart home system",
      "Covered outdoor entertaining area",
      "Custom closets and millwork",
      "River Oaks school district",
      "Minutes from River Oaks Country Club",
      "New roof (2022)"
    ],
    nearby: [
      { name: "River Oaks Country Club", dist: "0.5 mi" },
      { name: "River Oaks Elementary", dist: "0.6 mi" },
      { name: "The Galleria", dist: "2.3 mi" },
      { name: "Downtown Houston", dist: "4.6 mi" }
    ]
  },
  {
    id: 2,
    status: "New",
    price: "$975,000",
    address: "2203 Rutland St",
    neighborhood: "The Heights",
    city: "Houston, TX 77008",
    beds: 3,
    baths: 2,
    sqft: "2,100",
    garage: 2,
    lot: "0.14 Acres",
    yearBuilt: 2020,
    propertyType: "Single Family Home",
    hoa: "None",
    tax: "~$18,500 / year (est.)",
    school: "Houston ISD (Harvard Elementary)",
    mls: "HAR-2025-10042",
    daysOnMarket: 2,
    categories: ["new-construction"],
    images: [
      "https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?w=1400&q=80",
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1400&q=80",
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1400&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1400&q=80"
    ],
    description: [
      "Nestled in one of Houston's most vibrant and walkable neighborhoods, 2203 Rutland Street is a beautifully designed modern craftsman home built in 2020. The Heights lifestyle — boutique shops, acclaimed restaurants, and scenic bike trails — is literally steps from your door.",
      "The thoughtfully designed interior offers an open living space anchored by a gourmet kitchen with waterfall island, custom cabinetry, and high-end appliances. The living room opens through French doors to a private covered porch.",
      "Three bedrooms include a serene primary suite with a luxurious bathroom featuring double vanities and an oversized walk-in shower. Both guest bedrooms offer excellent natural light and generous closet space.",
      "With no HOA, a private 2-car garage, and a prime walkable location, this home is a rare find in one of Houston's most desirable inner-loop neighborhoods."
    ],
    features: [
      "Modern craftsman architecture",
      "Open kitchen with waterfall island",
      "French doors to covered porch",
      "Primary suite with double vanities",
      "2-car detached garage",
      "No HOA",
      "Walking distance to Heights restaurants",
      "Hardwood floors throughout",
      "Energy-efficient construction (2020)",
      "Private backyard",
      "Laundry room with utility sink",
      "Pre-wired for security system"
    ],
    nearby: [
      { name: "Heights Mercantile", dist: "0.2 mi" },
      { name: "Harvard Elementary", dist: "0.4 mi" },
      { name: "White Oak Bayou Trail", dist: "0.3 mi" },
      { name: "Downtown Houston", dist: "3.1 mi" }
    ]
  },
  {
    id: 3,
    status: "For Sale",
    price: "$2,100,000",
    address: "7701 Hunters Creek Dr",
    neighborhood: "Memorial",
    city: "Houston, TX 77024",
    beds: 5,
    baths: 4,
    sqft: "4,200",
    garage: 3,
    lot: "0.35 Acres",
    yearBuilt: 2014,
    propertyType: "Single Family Home",
    hoa: "$500 / month",
    tax: "~$38,000 / year (est.)",
    school: "Spring Branch ISD (Memorial Elementary)",
    mls: "HAR-2025-10043",
    daysOnMarket: 11,
    categories: ["luxury", "family"],
    images: [
      "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=1400&q=80",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1400&q=80",
      "https://images.unsplash.com/photo-1598228723793-52759bba239c?w=1400&q=80",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&q=80"
    ],
    description: [
      "Commanding one of Memorial's finest lots, 7701 Hunters Creek Drive is an exceptional five-bedroom estate offering the scale, privacy, and finishes that discerning buyers demand. Situated behind a gated motor court on a quiet, tree-lined street, this home delivers refined luxury living.",
      "The entry opens to soaring ceilings and a gracious staircase. A formal dining room, paneled study, and expansive family room with fireplace anchor the main level. The gourmet kitchen is a chef's dream, complete with a La Cornue range, marble countertops, and a butler's pantry.",
      "Outside, a covered loggia overlooks a resort-style pool, spa, and lush landscaped grounds — ideal for Houston's year-round entertaining lifestyle. The primary suite above features dual spa bathrooms and a custom dressing room.",
      "Zoned to Spring Branch ISD's highly rated Memorial schools and moments from Memorial Park, Buffalo Bayou, and the best of Houston's inner loop."
    ],
    features: [
      "Gated motor court entry",
      "Resort-style pool and spa",
      "La Cornue range & marble counters",
      "Butler's pantry",
      "Primary suite with dual spa baths",
      "3-car garage with epoxy floors",
      "Formal dining & paneled study",
      "Covered loggia & outdoor kitchen",
      "Generator (whole home)",
      "Custom dressing room",
      "Spring Branch ISD schools",
      "0.35 acre landscaped lot"
    ],
    nearby: [
      { name: "Memorial Park", dist: "1.2 mi" },
      { name: "Memorial Elementary", dist: "0.7 mi" },
      { name: "CityCentre Houston", dist: "1.8 mi" },
      { name: "The Galleria", dist: "3.5 mi" }
    ]
  },
  {
    id: 4,
    status: "Pending",
    price: "$785,000",
    address: "1822 Westheimer Rd",
    neighborhood: "Montrose",
    city: "Houston, TX 77098",
    beds: 3,
    baths: 2.5,
    sqft: "1,950",
    garage: 2,
    lot: "0.10 Acres",
    yearBuilt: 2019,
    propertyType: "Townhome",
    hoa: "$175 / month",
    tax: "~$15,200 / year (est.)",
    school: "Houston ISD (Poe Elementary)",
    mls: "HAR-2025-10044",
    daysOnMarket: 5,
    categories: ["condo-townhome", "investment"],
    images: [
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1400&q=80",
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1400&q=80",
      "https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?w=1400&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1400&q=80"
    ],
    description: [
      "Set on one of Montrose's most energetic corridors, 1822 Westheimer Road is a sleek, contemporary townhome offering three bedrooms and an exceptional location in Houston's most culturally vibrant neighborhood.",
      "The open main living level is defined by high ceilings, wide-plank oak flooring, and a modern kitchen featuring Bosch appliances, quartz counters, and a large peninsula. A powder room and private outdoor terrace complete the floor.",
      "The third-floor primary suite is a peaceful retreat, away from street noise, with a generous walk-in closet and a spa-like bathroom. Two lower-level bedrooms share a well-appointed full bathroom.",
      "Steps from Montrose's acclaimed restaurants, galleries, and nightlife — and within minutes of the Museum District and Midtown. This is the quintessential inner-loop Houston lifestyle property."
    ],
    features: [
      "Contemporary 2019 construction",
      "Wide-plank oak flooring",
      "Bosch kitchen appliances",
      "Private rooftop terrace",
      "Third-floor primary retreat",
      "2-car garage",
      "Low-maintenance landscaping",
      "Energy Star certified",
      "Steps from Montrose restaurants",
      "Museum District nearby",
      "Walkable neighborhood",
      "Smart thermostat & locks"
    ],
    nearby: [
      { name: "Menil Collection", dist: "0.8 mi" },
      { name: "Museum District", dist: "1.0 mi" },
      { name: "Poe Elementary", dist: "0.5 mi" },
      { name: "Downtown Houston", dist: "3.4 mi" }
    ]
  },
  {
    id: 5,
    status: "For Sale",
    price: "$1,175,000",
    address: "5509 Maple St",
    neighborhood: "Bellaire",
    city: "Houston, TX 77401",
    beds: 4,
    baths: 3,
    sqft: "2,800",
    garage: 2,
    lot: "0.18 Acres",
    yearBuilt: 2017,
    propertyType: "Single Family Home",
    hoa: "None",
    tax: "~$22,000 / year (est.)",
    school: "Bellaire ISD (Bellaire Elementary)",
    mls: "HAR-2025-10045",
    daysOnMarket: 14,
    categories: ["luxury", "family"],
    images: [
      "https://images.unsplash.com/photo-1598228723793-52759bba239c?w=1400&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1400&q=80",
      "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=1400&q=80",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1400&q=80"
    ],
    description: [
      "Located in the heart of the City of Bellaire — Houston's beloved 'Bayou City within a city' — 5509 Maple Street is a superbly finished four-bedroom home that ticks every box for families seeking top schools, community, and quality construction.",
      "The home's generous proportions shine in the open-concept main living area, where a gourmet kitchen with custom white cabinetry, stainless appliances, and quartz counters overlooks a bright breakfast area and family room with fireplace.",
      "Four bedrooms include a large primary suite with a luxurious bathroom and walk-in closet. Upstairs, a flexible game room can serve as a fifth bedroom, playroom, or home office.",
      "No HOA, zoned to the highly rated Bellaire ISD, and moments from the West University border and Rice Village's boutique shopping and dining — an ideal family home in one of Houston's safest communities."
    ],
    features: [
      "Zoned to top-rated Bellaire ISD",
      "No HOA",
      "Gourmet kitchen with white cabinetry",
      "Family room with fireplace",
      "Upstairs game/flex room",
      "Primary suite with walk-in closet",
      "2-car attached garage",
      "Covered back patio",
      "Hardwood floors main level",
      "Walking distance to parks",
      "Minutes from Rice Village",
      "Cul-de-sac street"
    ],
    nearby: [
      { name: "Bellaire Elementary", dist: "0.4 mi" },
      { name: "Rice Village", dist: "1.5 mi" },
      { name: "West University Place", dist: "0.8 mi" },
      { name: "Medical Center", dist: "3.2 mi" }
    ]
  },
  {
    id: 6,
    status: "Sold",
    price: "$2,450,000",
    address: "3301 Rice Blvd",
    neighborhood: "West University",
    city: "Houston, TX 77005",
    beds: 5,
    baths: 4.5,
    sqft: "4,600",
    garage: 3,
    lot: "0.28 Acres",
    yearBuilt: 2015,
    propertyType: "Single Family Home",
    hoa: "$200 / month",
    tax: "~$44,000 / year (est.)",
    school: "West University Elementary",
    mls: "HAR-2025-10046",
    daysOnMarket: 9,
    categories: ["luxury"],
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1400&q=80",
      "https://images.unsplash.com/photo-1598228723793-52759bba239c?w=1400&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1400&q=80",
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1400&q=80"
    ],
    description: [
      "3301 Rice Boulevard is a landmark West University Place residence — a distinguished five-bedroom estate that sold in just 9 days for $80,000 over the asking price. A showcase of what Jacob Williams delivers for his sellers.",
      "This gracious home offered an extraordinary blend of formal and informal living spaces. The grand entry opened to a paneled library, formal dining room, and a spectacular kitchen-family room at the rear of the home.",
      "The resort-style rear grounds featured a covered outdoor kitchen, pool, and spa set against mature landscaping. Three upper-level bedrooms and a primary suite with sitting room rounded out the exceptional floor plan.",
      "Sold $80,000 over asking. If you're considering selling in West University or the surrounding neighborhoods, contact Jacob today for a complimentary market analysis."
    ],
    features: [
      "Sold $80K over asking price",
      "Resort pool, spa & outdoor kitchen",
      "Paneled library",
      "Formal dining room",
      "Primary suite with sitting room",
      "3-car garage",
      "Mature landscaping",
      "Smart home system",
      "West University Elementary district",
      "Walking distance to Rice University",
      "Multiple living areas",
      "Wine cellar"
    ],
    nearby: [
      { name: "Rice University", dist: "0.6 mi" },
      { name: "West University Elementary", dist: "0.3 mi" },
      { name: "Rice Village", dist: "0.5 mi" },
      { name: "Museum District", dist: "1.8 mi" }
    ]
  },
  {
    id: 7,
    status: "For Sale",
    price: "$549,000",
    address: "420 Cinco Ranch Blvd",
    neighborhood: "Katy",
    city: "Houston, TX 77494",
    beds: 4,
    baths: 3,
    sqft: "2,400",
    garage: 2,
    lot: "0.16 Acres",
    yearBuilt: 2018,
    propertyType: "Single Family Home",
    hoa: "$120 / month",
    tax: "~$10,500 / year (est.)",
    school: "Katy ISD (Cinco Ranch Elementary)",
    mls: "HAR-2025-10047",
    daysOnMarket: 18,
    categories: ["family", "investment"],
    images: [
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1400&q=80",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1400&q=80",
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1400&q=80",
      "https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?w=1400&q=80"
    ],
    description: [
      "Situated in the master-planned Cinco Ranch community, 420 Cinco Ranch Blvd is an immaculate four-bedroom home zoned to Katy ISD — consistently ranked among Texas's best school districts. Ideal for families seeking space, value, and community.",
      "The open-plan living and kitchen area is the heart of the home, featuring granite countertops, stainless appliances, and a large island breakfast bar. A dedicated dining area and flex room complete the main level.",
      "Four well-proportioned bedrooms include a primary suite with double vanities, a soaking tub, and separate walk-in shower. A large backyard with covered patio is perfect for Texas outdoor living.",
      "Cinco Ranch residents enjoy resort-style amenities including multiple pools, walking trails, tennis courts, and scenic lakes — all within minutes. Easy access to I-10 and the Energy Corridor for commuters."
    ],
    features: [
      "Katy ISD schools",
      "Open kitchen with granite island",
      "Primary suite with soaking tub",
      "Covered back patio",
      "2-car garage",
      "Community pools & trails",
      "Flex/study room",
      "Sprinkler system",
      "Energy-efficient 2018 build",
      "Cul-de-sac location",
      "Walking distance to Cinco Ranch Lake",
      "Minutes to I-10 & Energy Corridor"
    ],
    nearby: [
      { name: "Cinco Ranch Elementary", dist: "0.5 mi" },
      { name: "Cinco Ranch Lake & Park", dist: "0.3 mi" },
      { name: "LaCenterra at Cinco Ranch", dist: "1.2 mi" },
      { name: "I-10 / Energy Corridor", dist: "4.0 mi" }
    ]
  },
  {
    id: 8,
    status: "New",
    price: "$895,000",
    address: "1609 First Colony Blvd",
    neighborhood: "Sugar Land",
    city: "Sugar Land, TX 77479",
    beds: 4,
    baths: 3.5,
    sqft: "3,100",
    garage: 3,
    lot: "0.21 Acres",
    yearBuilt: 2021,
    propertyType: "Single Family Home",
    hoa: "$220 / month",
    tax: "~$16,800 / year (est.)",
    school: "Fort Bend ISD (First Colony Elementary)",
    mls: "HAR-2025-10048",
    daysOnMarket: 3,
    categories: ["new-construction", "family"],
    images: [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1400&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1400&q=80",
      "https://images.unsplash.com/photo-1598228723793-52759bba239c?w=1400&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1400&q=80"
    ],
    description: [
      "Just listed — 1609 First Colony Blvd is a stunning 2021-built home in Sugar Land's prestigious First Colony community. Offering four bedrooms, a 3-car garage, and an exceptional open floor plan, this home is the best value in the neighborhood.",
      "The soaring two-story entry gives way to a formal dining room and dedicated study before opening to a spectacular great room and chef's kitchen — complete with a GE Café appliance suite, quartz counters, and a large island.",
      "The primary suite on the main level is a haven of calm with bay windows overlooking the garden, spa-like bathroom, and custom walk-in closet system. Three additional bedrooms and a game room occupy the upper level.",
      "Fort Bend ISD schools, community walking trails, and easy access to Sugar Land Town Center, the Brazos River, and major Houston highways make this an ideal lifestyle choice."
    ],
    features: [
      "2021 new construction",
      "GE Café appliance suite",
      "Two-story entry foyer",
      "Main-level primary suite",
      "Game room upstairs",
      "3-car garage",
      "Fort Bend ISD (top-rated)",
      "Bay windows in primary suite",
      "Custom closet system",
      "Community walking trails",
      "Quartz countertops throughout",
      "Tankless water heater"
    ],
    nearby: [
      { name: "First Colony Elementary", dist: "0.6 mi" },
      { name: "Sugar Land Town Center", dist: "1.4 mi" },
      { name: "Brazos River Park", dist: "2.0 mi" },
      { name: "Highway 59 / Southwest Frwy", dist: "2.5 mi" }
    ]
  },
  {
    id: 9,
    status: "Pending",
    price: "$665,000",
    address: "2200 Main St",
    neighborhood: "Midtown",
    city: "Houston, TX 77002",
    beds: 3,
    baths: 2,
    sqft: "1,800",
    garage: 2,
    lot: "0.08 Acres",
    yearBuilt: 2022,
    propertyType: "Townhome",
    hoa: "$250 / month",
    tax: "~$13,000 / year (est.)",
    school: "Houston ISD (Poe Elementary)",
    mls: "HAR-2025-10049",
    daysOnMarket: 4,
    categories: ["condo-townhome", "investment", "new-construction"],
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&q=80",
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1400&q=80",
      "https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?w=1400&q=80",
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1400&q=80"
    ],
    description: [
      "Positioned at the epicentre of Houston's most dynamic urban neighbourhood, 2200 Main Street is a brand-new 2022 luxury townhome offering three bedrooms, a private rooftop terrace, and the very best of Midtown walkability.",
      "The stunning interior showcases 10-foot ceilings, engineered hardwood floors, and a chef's kitchen featuring Italian cabinetry, Bosch appliances, and Calacatta marble-look quartz countertops. The main living level opens to a private balcony.",
      "The third-floor primary suite offers spectacular skyline views, a spa bathroom with frameless glass shower, and a custom walk-in closet. Two secondary bedrooms and a full bath occupy the second level.",
      "Steps from the METRORail, Midtown Park, and Houston's best restaurants and nightlife. This is urban Houston living at its absolute finest — under contract in just 4 days."
    ],
    features: [
      "2022 luxury construction",
      "Private rooftop terrace",
      "Houston skyline views",
      "Italian cabinetry in kitchen",
      "Bosch appliance package",
      "10-foot ceilings",
      "Engineered hardwood floors",
      "2-car garage",
      "Steps from METRORail",
      "Midtown Park walkable",
      "Calacatta quartz countertops",
      "Frameless glass shower"
    ],
    nearby: [
      { name: "Midtown Park", dist: "0.1 mi" },
      { name: "METRORail Main Street", dist: "0.2 mi" },
      { name: "Downtown Houston", dist: "1.2 mi" },
      { name: "Museum District", dist: "1.5 mi" }
    ]
  }
];
