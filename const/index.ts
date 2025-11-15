import { Globe, Palette, PartyPopper, Search } from "lucide-react";

export const navbarLinks = [
  { href: "#portfolio", content: "portfolio" },
  { href: "#services", content: "services" },
  { href: "#about", content: "about" },
  { href: "#contact", content: "contact" },
];

export const featuredCompanies = [
  {
    name: "Funkogram MK",
    logo: "/assets/logos/funkogram.svg",
  },
  {
    name: "FIBA",
    logo: "/assets/logos/fiba.png",
  },
  {
    name: "Heat Check",
    logo: "/assets/logos/heat-check.png",
  },
  {
    name: "Street Workout Macedonia",
    logo: "/assets/logos/swm.PNG",
  },
  {
    name: "Mr. Therapy",
    logo: "/assets/logos/mr-therapy.png",
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
    desktopImage: "/assets/logos/ecode.png",
    category: "eCode",
    link: "https://ecode.mk/",
  },
  {
    id: "project2",
    desktopImage: "/assets/logos/mr-therapy.png",
    category: "mrtherapy",
    link: "https://www.instagram.com/p/DIEercbsSgX/?img_index=1",
  },
  {
    id: "project3",
    desktopImage: "/assets/logos/funkogram.svg",
    category: "funkogram",
    link: "https://funkogram.mk/",
  },
  {
    id: "project4",
    desktopImage: "/assets/logos/heat-check.png",
    category: "heatchek",
    link: "https://www.youtube.com/@HeatCheck",
  },
  {
    id: "project5",
    desktopImage: "/assets/logos/party-and-padel.png",
    category: "partyandpadel",
    link: "https://www.instagram.com/p/DLrsX8moiRz/",
  },
  {
    id: "project6",
    desktopImage: "/assets/logos/swm.PNG",
    category: "swm",
    link: "https://streetworkoutmacedonia.mk/",
  },
];

export const images = [
  { id: 1, img: "/assets/pl1.jpg" },
  { id: 2, img: "/assets/pl2.jpg" },
  { id: 3, img: "/assets/pl3.jpg" },
  { id: 4, img: "/assets/pl4.jpg" },
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
