export interface CourseModule {
  moduleNumber: number;
  title: string;
  hours: number;
  topics: string[];
}

export interface Course {
  id: string;
  slug: string;
  title: string;
  category: string;
  categorySlug: string;
  shortDescription: string;
  fullDescription: string;
  thumbnail: string;
  duration: string;
  totalHours: number;
  seatsTotal: number;
  seatsRemaining: number;
  fee: string;
  isGovtSubsidized: boolean;
  minQualification: string;
  schedule: string;
  centersAvailable: string;
  admissionDeadline: string;
  learningOutcomes: string[];
  modules: CourseModule[];
  careerOpportunities: string[];
}

export const coursesData: Course[] = [
  {
    id: "course-1",
    slug: "computer-office-application-graphic-design",
    title: "Computer Office Application & Graphic Design",
    category: "ICT & Digital Engineering",
    categorySlug: "ict-digital",
    shortDescription:
      "Master word processing, advanced spreadsheets, digital presentations, database management, and foundational Adobe Photoshop & Illustrator.",
    fullDescription:
      "This 3-month comprehensive diploma is designed for aspiring office executives, administrative officers, and freelancers. It combines government standard computer literacy with high-demand digital graphics creation, ensuring candidates are fully prepared for both civil service exams and private sector employment.",
    thumbnail:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop",
    duration: "3 Months",
    totalHours: 360,
    seatsTotal: 30,
    seatsRemaining: 8,
    fee: "Government Subsidized (BDT 1,000)",
    isGovtSubsidized: true,
    minQualification: "Minimum SSC / Equivalent (Any Group)",
    schedule: "Sunday - Thursday (9:00 AM - 1:00 PM)",
    centersAvailable: "All 64 District Regional Hubs",
    admissionDeadline: "December 15, 2026",
    learningOutcomes: [
      "Typing speed in English (30+ WPM) and Bangla Bijoy/Avro (20+ WPM)",
      "Advanced Microsoft Word formatting, indexing, and official memo drafting",
      "Financial data calculation, charts, and macros using Microsoft Excel",
      "Relational database management and query building in Microsoft Access",
      "Vector branding, logo creation, and banner design using Adobe Illustrator",
      "Photo retouching, clipping path, and visual marketing in Adobe Photoshop",
      "Digital marketplace setup on Upwork, Fiverr, and local freelancing platforms",
    ],
    modules: [
      {
        moduleNumber: 1,
        title: "Computer Fundamentals, OS & Fast Typing",
        hours: 60,
        topics: [
          "Hardware architecture, BIOS configuration & Windows OS management",
          "Touch typing techniques in English and Unicode Bangla",
          "File system management, security protocols & cloud storage backup",
        ],
      },
      {
        moduleNumber: 2,
        title: "Advanced Office Productivity Suite",
        hours: 120,
        topics: [
          "MS Word: Official letters, tables, headers, mail merge & doc security",
          "MS Excel: VLOOKUP, XLOOKUP, Pivot Tables, conditional formatting & formulas",
          "MS PowerPoint: Professional slide decks, transitions & multimedia",
          "MS Access: Form creation, queries, report generation & databases",
        ],
      },
      {
        moduleNumber: 3,
        title: "Digital Graphic Design & Creative Tools",
        hours: 100,
        topics: [
          "Adobe Photoshop: Layers, masks, clipping paths, retouching & color balancing",
          "Adobe Illustrator: Pen tool mastery, typography, vector logos & print flyers",
          "Design psychology, color theory, and print output resolutions (CMYK vs RGB)",
        ],
      },
      {
        moduleNumber: 4,
        title: "Internet, Cybersecurity & Freelance Readiness",
        hours: 80,
        topics: [
          "Email etiquette, web research, cybersecurity hygiene & malware defense",
          "Creating professional portfolios and setting up verified freelancer profiles",
          "Final capstone project presentation and national board practical viva",
        ],
      },
    ],
    careerOpportunities: [
      "Computer Operator in Govt Ministries and Autonomous Bodies",
      "Data Entry Specialist and Administrative Assistant",
      "Junior Graphic Designer at Advertising Agencies",
      "Independent Marketplace Freelancer (Fiverr / Upwork / Local)",
    ],
  },
  {
    id: "course-2",
    slug: "electrical-house-wiring-industrial-automation",
    title: "Electrical House Wiring & Motor Automation",
    category: "Electrical & Industrial Power",
    categorySlug: "electrical-power",
    shortDescription:
      "Hands-on technical workshop in commercial electrical installation, distribution boards, circuit breakers, safety grounding, and industrial motors.",
    fullDescription:
      "A hands-on program dedicated to producing certified electrical technicians. Learners work in fully equipped electrical laboratories with real industrial wiring panels, single & three-phase distribution systems, and motor control circuits.",
    thumbnail:
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1200&auto=format&fit=crop",
    duration: "6 Months",
    totalHours: 720,
    seatsTotal: 25,
    seatsRemaining: 5,
    fee: "Free (Includes Toolkits & Safety Gear)",
    isGovtSubsidized: true,
    minQualification: "Minimum JSC / Class 8 Pass",
    schedule: "Saturday - Wednesday (10:00 AM - 2:00 PM)",
    centersAvailable: "48 District Technical Labs",
    admissionDeadline: "December 20, 2026",
    learningOutcomes: [
      "Safe handling of electrical measurement tools (multimeter, megger, clamp meter)",
      "Residential, commercial, and conduit pipe surface wiring",
      "Installation of sub-distribution boards (SDB), MDB, and changeover switches",
      "Earth resistance testing and modern earthing installation",
      "Single and three-phase motor forward-reverse control circuits",
      "Solar home system sizing, inverter setup, and battery maintenance",
    ],
    modules: [
      {
        moduleNumber: 1,
        title: "Electrical Science & Safety Protocols",
        hours: 120,
        topics: [
          "Ohm's Law, Joule's Law, AC/DC theory, safety gloves & fire hazards",
          "First aid for electrical shocks and workplace hazard prevention",
        ],
      },
      {
        moduleNumber: 2,
        title: "Domestic & Commercial Wiring Practice",
        hours: 300,
        topics: [
          "Conduit piping, concealed wiring, and DB board connections",
          "MCB, MCCB, and RCCB breaker calculations and leakage protection",
        ],
      },
      {
        moduleNumber: 3,
        title: "Industrial Motors & Automation Controls",
        hours: 300,
        topics: [
          "Magnetic contactors, push button stations & timer circuits",
          "Star-Delta starters and motor rewinding techniques",
        ],
      },
    ],
    careerOpportunities: [
      "Certified Electrician in Real Estate and Construction",
      "Industrial Maintenance Technician in RMG and Manufacturing Plants",
      "Substation Operator at Power Distribution Companies",
      "Independent Electrical Contractor & Business Owner",
    ],
  },
  {
    id: "course-3",
    slug: "certified-electric-gas-welding-technology",
    title: "Certified Electric & Gas Welding Technology",
    category: "Mechanical & Gas Welding",
    categorySlug: "welding-fabrication",
    shortDescription:
      "Heavy industrial welding mastery covering Shielded Metal Arc (SMAW), TIG, MIG, and gas cutting techniques adhering to international safety standards.",
    fullDescription:
      "Welding is one of the highest-demand technical trades both domestically in shipbuilding, fabrication, and construction, and internationally in Middle Eastern and European labor markets. This course provides intensive practical booth training.",
    thumbnail:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200&auto=format&fit=crop",
    duration: "3 Months",
    totalHours: 360,
    seatsTotal: 20,
    seatsRemaining: 4,
    fee: "Government Subsidized (BDT 1,500)",
    isGovtSubsidized: true,
    minQualification: "Class 8 Pass / SSC Preferred",
    schedule: "Sunday - Thursday (8:30 AM - 1:30 PM)",
    centersAvailable: "32 Regional Heavy Workshop Centers",
    admissionDeadline: "December 18, 2026",
    learningOutcomes: [
      "Mastery of Oxy-Acetylene gas flame adjustment and metal cutting",
      "Electric arc welding in flat (1G), horizontal (2G), and vertical (3G) positions",
      "Tungsten Inert Gas (TIG) and Metal Inert Gas (MIG) welding techniques",
      "Non-destructive testing (NDT) inspection and weld defect prevention",
    ],
    modules: [
      {
        moduleNumber: 1,
        title: "Oxy-Acetylene Cutting & Gas Welding",
        hours: 100,
        topics: ["Cylinder safety, regulator calibration, and bevel cutting"],
      },
      {
        moduleNumber: 2,
        title: "Arc Welding (SMAW) Workshop",
        hours: 160,
        topics: ["Electrode selection, current setting, and multi-pass groove welding"],
      },
      {
        moduleNumber: 3,
        title: "TIG/MIG & Fabrication Inspection",
        hours: 100,
        topics: ["Inert shielding gases, aluminum & stainless steel joints, quality testing"],
      },
    ],
    careerOpportunities: [
      "Shipyard & Heavy Fabrication Welder",
      "Overseas Certified Welder (Middle East, Japan, Korea, Europe)",
      "Structural Steel Fabricator",
      "Own Metal Workshop Entrepreneur",
    ],
  },
  {
    id: "course-4",
    slug: "refrigeration-air-conditioning-servicing",
    title: "Refrigeration & Air Conditioning (RAC) Servicing",
    category: "Refrigeration & AC (HVAC)",
    categorySlug: "refrigeration-hvac",
    shortDescription:
      "Complete diagnostics, installation, refrigerant charging, compressor troubleshooting, and maintenance for split ACs and commercial refrigerators.",
    fullDescription:
      "With soaring demand in residential, commercial, and industrial cold storage sectors, this program trains technicians in mechanical refrigeration cycles, electrical control systems, and modern eco-friendly refrigerants.",
    thumbnail:
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=1200&auto=format&fit=crop",
    duration: "3 Months",
    totalHours: 360,
    seatsTotal: 20,
    seatsRemaining: 6,
    fee: "Government Subsidized (BDT 1,000)",
    isGovtSubsidized: true,
    minQualification: "Minimum Class 8 / JSC Pass",
    schedule: "Sunday - Thursday (9:00 AM - 1:00 PM)",
    centersAvailable: "40 District Hubs Nationwide",
    admissionDeadline: "December 22, 2026",
    learningOutcomes: [
      "Understanding vapor compression cycles and refrigerant thermodynamic properties",
      "Copper tubing cutting, bending, swaging, flaring, and silver brazing",
      "Vacuum pumping, leak testing with nitrogen, and R32/R410A gas charging",
      "Inverter AC PCB troubleshooting and sensor diagnosis",
    ],
    modules: [
      {
        moduleNumber: 1,
        title: "RAC Thermodynamics & Mechanical Cycle",
        hours: 120,
        topics: ["Compressors, condensers, expansion devices, and evaporators"],
      },
      {
        moduleNumber: 2,
        title: "Copper Piping & Brazing Practice",
        hours: 120,
        topics: ["Gas torch brazing, pressure testing, and dehydration vacuum"],
      },
      {
        moduleNumber: 3,
        title: "Inverter AC Installation & Service",
        hours: 120,
        topics: ["Split AC indoor/outdoor mounting, error codes, and maintenance"],
      },
    ],
    careerOpportunities: [
      "HVAC Maintenance Technician in Commercial High-Rises",
      "Customer Service Engineer at Electronics Brands (Walton, Singer, Gree)",
      "Self-employed AC Installation and Repair Specialist",
    ],
  },
  {
    id: "course-5",
    slug: "professional-hotel-culinary-management",
    title: "Professional Hotel Management & Food Production",
    category: "Hospitality & Culinary Arts",
    categorySlug: "hospitality-culinary",
    shortDescription:
      "International hospitality standards, culinary arts, banquet service, front office management, and hygiene safety with guaranteed 5-star hotel internship.",
    fullDescription:
      "An upscale vocational course grooming students for the thriving tourism, aviation, and hospitality sectors. Taught by executive chefs and hospitality managers, the program includes a 3-month classroom phase and a 3-month paid hotel internship.",
    thumbnail:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop",
    duration: "6 Months",
    totalHours: 720,
    seatsTotal: 25,
    seatsRemaining: 9,
    fee: "Government Subsidized (BDT 2,500)",
    isGovtSubsidized: true,
    minQualification: "Minimum SSC / Equivalent",
    schedule: "Monday - Friday (10:00 AM - 3:00 PM)",
    centersAvailable: "Dhaka, Cox's Bazar, Sylhet & Chattogram Hubs",
    admissionDeadline: "December 25, 2026",
    learningOutcomes: [
      "Continental, Asian, and traditional culinary cooking techniques",
      "Food hygiene, HACCP safety standards, and kitchen knife skills",
      "Front-office guest relations, PMS reservation software, and concierge services",
      "Food and beverage banquet dining etiquette and table arrangements",
    ],
    modules: [
      {
        moduleNumber: 1,
        title: "Culinary Arts & Commercial Kitchen Operations",
        hours: 180,
        topics: ["Stocks, sauces, main courses, pastry baking, and nutrition"],
      },
      {
        moduleNumber: 2,
        title: "Front Office & Hospitality Management",
        hours: 180,
        topics: ["Check-in procedures, billing, telephone etiquette, and guest service"],
      },
      {
        moduleNumber: 3,
        title: "Industry Hotel Internship",
        hours: 360,
        topics: ["Hands-on practical shifts at partner 4-star and 5-star hotels"],
      },
    ],
    careerOpportunities: [
      "Commis Chef in Luxury Hotels and Cruise Lines",
      "Front Desk Officer and Guest Service Representative",
      "F&B Steward in Airlines and International Resorts",
      "Catering & Restaurant Business Entrepreneur",
    ],
  },
  {
    id: "course-6",
    slug: "commercial-dairy-poultry-farm-entrepreneurship",
    title: "Commercial Dairy & Poultry Farm Entrepreneurship",
    category: "Modern Agriculture & Dairy",
    categorySlug: "agriculture-livestock",
    shortDescription:
      "High-yield dairy cow rearing, automated poultry farm management, disease vaccination, bio-security, and direct youth development loan processing.",
    fullDescription:
      "Crafted specifically for rural and semi-urban youth aiming to establish self-reliant agro-businesses. The curriculum emphasizes breed selection, feed ration formulation, automated shed design, and connecting graduates with government youth credit (ঋণ) facilities.",
    // Verified, high-definition Unsplash dairy cattle & livestock farm photo
    thumbnail:
      "https://images.unsplash.com/photo-1500595046743-cd271d694d30?q=80&w=1200&auto=format&fit=crop",
    duration: "1 Month Intensive",
    totalHours: 160,
    seatsTotal: 30,
    seatsRemaining: 12,
    fee: "Free (Includes Field Visits & Free Study Guide)",
    isGovtSubsidized: true,
    minQualification: "Literate / Minimum Class 8 Pass",
    schedule: "Saturday - Thursday (9:00 AM - 2:00 PM)",
    centersAvailable: "All 64 District Youth Training Complexes",
    admissionDeadline: "December 10, 2026",
    learningOutcomes: [
      "Selection of Friesian crossbred cattle and high-yielding broiler/layer poultry",
      "Cost-effective feed preparation, silage making, and nutrient balancing",
      "Vaccination scheduling, biosecurity protocols, and emergency treatment",
      "Preparation of bankable project proposals for Youth Development Microcredit",
    ],
    modules: [
      {
        moduleNumber: 1,
        title: "Dairy Cow Rearing & Milk Preservation",
        hours: 60,
        topics: ["Housing designs, silage fermentation, artificial insemination, and milking hygiene"],
      },
      {
        moduleNumber: 2,
        title: "Modern Poultry & Egg Production",
        hours: 50,
        topics: ["Brooding management, temperature control, ventilation, and flock health"],
      },
      {
        moduleNumber: 3,
        title: "Agro-Business Finance & Govt Loan Linkage",
        hours: 50,
        topics: ["Profit-loss projections, marketing milk/meat, and youth loan application"],
      },
    ],
    careerOpportunities: [
      "Independent Dairy Farm Owner",
      "Commercial Broiler/Layer Poultry Producer",
      "Livestock Feed & Medicine Retailer",
      "Village Agro-Extension Youth Leader",
    ],
  },
];
