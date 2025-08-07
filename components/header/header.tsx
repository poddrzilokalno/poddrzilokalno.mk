import { useTranslations } from "next-intl";
import MobileNav from "./navbar/mobile-nav";
import Navbar from "./navbar/navbar";
import { MountainIcon } from "lucide-react";
import Link from "next/link";
import CtaSection from "../shared/cta-section/cta-section";
import Image from "next/image";

const Header = () => {
  const t = useTranslations("home.header");

  return (
    <header className="bg-blue-500 flex h-20 w-full items-center justify-around px-4 md:px-6">
      <div className="flex items-center gap-2">
        <Link href="/" className="flex items-center justify-center gap-2">
          <Image
            width={160}
            height={160}
            src="/assets/logos/poddrzilokalno.png"
            alt="Poddrzi Lokalno Logo"
          />
        </Link>
      </div>

      <div className="hidden lg:flex">
        <Navbar />
      </div>

      <div className="hidden lg:flex">
        <CtaSection buttonLabel={t("ctaSection.text")} />
      </div>

      <MobileNav />
    </header>
  );
};

export default Header;
