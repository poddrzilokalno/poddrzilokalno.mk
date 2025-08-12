import { Globe, Palette, Search, ShoppingCart, Users, Zap } from "lucide-react"

export const navbarLinks = [
  { href: "#portfolio", content: "portfolio" },
  { href: "#services", content: "services" },
  { href: "#about", content: "about" },
  { href: "#contact", content: "contact" },
]

export const featuredCompanies = [
  {
    name: "Company A",
    logo: "/assets/logos/funkogram.jpg",
    description: "Leading provider of innovative solutions.",
  },
  {
    name: "Company B",
    logo: "/assets/logos/funkogram.jpg",
    description: "Leading provider of innovative solutions.",
  },
  {
    name: "Company C",
    logo: "/assets/logos/funkogram.jpg",
    description: "Leading provider of innovative solutions.",
  },
  {
    name: "Company D",
    logo: "/assets/logos/funkogram.jpg",
    description: "Leading provider of innovative solutions.",
  },
  {
    name: "Company E",
    logo: "/assets/logos/funkogram.jpg",
    description: "Leading provider of innovative solutions.",
  },
  {
    name: "Company F",
    logo: "/assets/logos/funkogram.jpg",
    description: "Leading provider of innovative solutions.",
  },
  {
    name: "Company G",
    logo: "/assets/logos/funkogram.jpg",
    description: "Leading provider of innovative solutions.",
  },
  {
    name: "Company H",
    logo: "/assets/logos/funkogram.jpg",
    description: "Leading provider of innovative solutions.",
  },
]

export const services = [
  {
    id: "webDevelopment",
    icon: Globe,
    features: ["responsive", "seo", "performance", "security"],
  },
  {
    id: "branding",
    icon: Palette,
    features: ["logoDesign", "brandIdentity", "guidelines", "marketing"],
  },
  {
    id: "digitalMarketing",
    icon: Search,
    features: ["socialMedia", "contentMarketing", "ppc", "analytics"],
  },
  {
    id: "ecommerce",
    icon: ShoppingCart,
    features: ["onlineStore", "paymentGateway", "inventory", "shipping"],
  },
  {
    id: "consulting",
    icon: Users,
    features: ["strategy", "optimization", "training", "support"],
  },
  {
    id: "automation",
    icon: Zap,
    features: ["workflow", "integration", "efficiency", "reporting"],
  },
]

export const portfolioItems = [
  {
    id: "project1",
    image: "/modern-restaurant-website.png",
    category: "webDevelopment",
  },
  {
    id: "project2",
    image: "/fashion-brand-logo.png",
    category: "branding",
  },
  {
    id: "project3",
    image: "/ecommerce-online-store-interface.png",
    category: "ecommerce",
  },
  {
    id: "project4",
    image: "/social-media-campaign.png",
    category: "digitalMarketing",
  },
  {
    id: "project5",
    image: "/business-consulting-dashboard.png",
    category: "consulting",
  },
  {
    id: "project6",
    image: "/workflow-automation-system.png",
    category: "automation",
  },
]

export const images = [
  { id: 1, img: "/assets/photo.jpg" },
  { id: 2, img: "/assets/photo.jpg" },
  { id: 3, img: "/assets/photo.jpg" },
  { id: 4, img: "/assets/photo.jpg" }
];

export const aboutStats = [
  { id: "clients", value: 150, suffix: "+" },
  { id: "projects", value: 300, suffix: "+" },
  { id: "experience", value: 5, suffix: "" },
]

export const aboutFeatures = ["expertise", "support", "results", "innovation"]

export type FeaturedCompanies = typeof featuredCompanies
export type Service = (typeof services)[0]
export type PortfolioItem = (typeof portfolioItems)[0]
