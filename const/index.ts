import {
  Globe,
  Palette,
  PartyPopper,
  Search,
  ShoppingCart,
  Users,
  Zap,
} from "lucide-react";

export const navbarLinks = [
  { href: "#portfolio", content: "portfolio" },
  { href: "#services", content: "services" },
  { href: "#about", content: "about" },
  { href: "#contact", content: "contact" },
];

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
];

export const services = [
  {
    id: "softwareSolutions",
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
    id: "events",
    icon: PartyPopper,
    features: ["onlineStore", "paymentGateway", "inventory", "shipping"],
  },
];

export const portfolioItems = [
  {
    id: "project1",
    image: "/modern-restaurant-website.png",
    category: "eCode",
    link: "https://ecode.mk/",
  },
  {
    id: "project2",
    image: "/fashion-brand-logo.png",
    category: "mrtherapy",
    link: "https://www.instagram.com/p/DIEercbsSgX/?img_index=1",
  },
  {
    id: "project3",
    image: "/ecommerce-online-store-interface.png",
    category: "funkogram",
    link: "https://funkogram.mk/",
  },
  {
    id: "project4",
    image: "/social-media-campaign.png",
    category: "heatchek",
    link: "https://www.youtube.com/@HeatCheck",
  },
  {
    id: "project5",
    image: "/business-consulting-dashboard.png",
    category: "partyandpadel",
    link: "https://www.instagram.com/p/DLrsX8moiRz/",
  },
  {
    id: "project6",
    image: "/workflow-automation-system.png",
    category: "swm",
    link: "https://streetworkoutmacedonia.mk/",
  },
];

export const images = [
  { id: 1, img: "/assets/photo.jpg" },
  { id: 2, img: "/assets/photo.jpg" },
  { id: 3, img: "/assets/photo.jpg" },
  { id: 4, img: "/assets/photo.jpg" },
];

export const aboutStats = [
  { id: "clients", value: 50, suffix: "+" },
  { id: "projects", value: 150, suffix: "+" },
  { id: "experience", value: 3, suffix: "+" },
];

export const aboutFeatures = ["expertise", "support", "results", "innovation"];

export type FeaturedCompanies = typeof featuredCompanies;
export type Service = (typeof services)[0];
export type PortfolioItem = (typeof portfolioItems)[0];
