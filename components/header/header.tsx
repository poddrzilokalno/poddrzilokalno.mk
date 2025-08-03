import { useTranslations } from "next-intl";
import CtaButtonSection from "./cta-button-section/cta-button-section";
import MobileNav from "./navbar/mobile-nav";
import Navbar from "./navbar/navbar";
import { MountainIcon } from "lucide-react";
import Link from "next/link";

const Header = () => {
  const t = useTranslations("home.header");

  return (
    <header className="bg-blue-500 flex h-20 w-full items-center justify-around px-4 md:px-6">
      
      {/* TODO: The actual logo should be placed here */}
      <div className="flex items-center gap-2">
        <Link href="/" className="flex items-center justify-center gap-2">
          <MountainIcon className="h-6 w-6 text-primary" />
          <span className="font-bold text-lg text-white">{t("logo")}</span>
        </Link>
      </div>

      <div className="hidden lg:flex">
        <Navbar />
      </div>

      <div className="hidden lg:flex">
        <CtaButtonSection />
      </div>

      <MobileNav />
    </header>
  );
};

export default Header;
