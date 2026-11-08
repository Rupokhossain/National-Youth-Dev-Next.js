// src/lib/galleryData.ts

export interface GalleryItem {
  id: string;
  title: string;
  category: "all" | "labs" | "women" | "ict" | "ceremony";
  categoryLabel: string;
  image: string;
  location: string;
  date: string;
  description: string;
  featured?: boolean;
}

export const galleryItems: GalleryItem[] = [
  {
    id: "gal-2",
    title: "Industrial Sewing, Tailoring & Women Empowerment Lab",
    category: "women",
    categoryLabel: "Women Empowerment",
    image: "/images/gallery-2.jpg",
    location: "Narayanganj Apparel Training Academy",
    date: "Session 2026",
    description: "Female trainees mastering high-speed industrial lockstitch machines, modern garments pattern drafting, and entrepreneurial apparel design.",
    featured: true,
  },
  {
    id: "gal-1",
    title: "Refrigeration, HVAC & Mechanical Workshop",
    category: "labs",
    categoryLabel: "Practical Labs",
    image: "/images/gallery-1.jpg",
    location: "Bogura Regional Vocational Hub",
    date: "Session 2026",
    description: "Expert instructor demonstrating HVAC manifold gauges, flaring tools, and copper brazing techniques to trainees.",
  },
  {
    id: "gal-5",
    title: "Hardware, PCB Circuitry & LED TV Servicing",
    category: "labs",
    categoryLabel: "Practical Labs",
    image: "/images/gallery-5.jpg",
    location: "Gazipur Industrial Skills Institute",
    date: "Session 2026",
    description: "Hands-on diagnostic training on motherboard troubleshooting, power supply repairs, and electronic sensor alignments.",
  },
  {
    id: "gal-4",
    title: "Interactive Computer Lab & Database Workstations",
    category: "ict",
    categoryLabel: "ICT & Digital",
    image: "/images/gallery-4.jpg",
    location: "Dhaka Central Technical Campus",
    date: "Session 2026",
    description: "Trainees engaged in dedicated 1:1 computer workstations with instructor mentoring for office productivity and data analysis.",
  },
  {
    id: "gal-6",
    title: "Women in Tech: Digital Literacy & Freelancing Batch",
    category: "women",
    categoryLabel: "Women Empowerment",
    image: "/images/gallery-6.jpg",
    location: "Dhaka Central Hub",
    date: "Session 2026",
    description: "Special batch of female trainees graduating in professional office management, documentation, and international remote freelancing.",
  },
  {
    id: "gal-7",
    title: "Electrical House Wiring & Motor Installation Lab",
    category: "labs",
    categoryLabel: "Practical Labs",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
    location: "Chattogram Technical Campus",
    date: "Session 2026",
    description: "Industrial safety standards, 3-phase star-delta motor control wiring, and magnetic contactor demonstrations.",
  },
  {
    id: "gal-8",
    title: "National Youth Skill Day Convocation & Certificate Ceremony",
    category: "ceremony",
    categoryLabel: "Convocation & Events",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
    location: "National Convention Auditorium, Dhaka",
    date: "Annual Ceremony",
    description: "Over 1,200 graduates receiving government-recognized trade diplomas from chief guests, honoring academic distinction.",
  },
  {
    id: "gal-9",
    title: "Graphic Design & Digital Creative Studio",
    category: "ict",
    categoryLabel: "ICT & Digital",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&q=80",
    location: "Sylhet Vocational Center",
    date: "Session 2026",
    description: "Creative design studio lab where students build brand identities, vector illustrations, and print media layouts.",
  },
];
