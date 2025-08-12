import Header from "@/components/header/header";
import HeroSection from "@/components/hero/hero-section";
import AboutSection from "@/components/about/about-section";
import ContactSection from "@/components/contact/contact-section";
import Footer from "@/components/footer/footer";
import ServicesSection from "@/components/services/services-section";
import PortfolioSection from "@/components/portfolio/portfolio-section";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      {/* <FeaturedCompaniesSection /> */}
      <AboutSection />
      <ContactSection />
      <Footer />
    </>
  );
}
