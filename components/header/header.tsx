import { useTranslations } from "next-intl";
import MobileNav from "./navbar/mobile-nav";
import Navbar from "./navbar/navbar";
import Link from "next/link";
import CtaSection from "../shared/cta-section/cta-section";
import Image from "next/image";
import LanguageDropdown from "../language/language-dropdown";

const Header = () => {
  const t = useTranslations("home.header");

  return (
    <header className="bg-blue-500 flex h-24 w-full items-center justify-around px-4 md:px-6">
      <div className="flex items-center gap-2">
        <Link href="/" className="flex items-center justify-center gap-2">
          <Image
            width={160}
            height={160}
            src="/assets/logos/poddrzilokalno.png"
            alt="Poddrzi Lokalno Logo"
            className="hover:scale-105 transition-transform duration-300"
          />
        </Link>
        <div className="hidden lg:flex">
          <Navbar />
        </div>
      </div>

      <div className="hidden lg:flex items-center gap-4">
        <CtaSection buttonLabel={t("ctaSection.text")} />
        <LanguageDropdown />
      </div>

      <MobileNav />
    </header>
  );
};

export default Header;
