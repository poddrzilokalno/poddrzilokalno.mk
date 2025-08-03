"use client";

import { MenuIcon, MountainIcon } from "lucide-react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../../ui/sheet";
import { navbarLinks } from "@/const";
import NavbarLink from "./navbar-links";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import CtaSection from "../../shared/cta-section/cta-section";

const MobileNav = () => {
  const pathname = usePathname();
  const t = useTranslations("home.header");

  return (
    <div className="lg:hidden ml-auto">
      <Sheet>
        <SheetTrigger asChild>
          <button>
            <MenuIcon className="text-white h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </button>
        </SheetTrigger>

        <SheetContent side="left" className="bg-blue-500">
          <SheetTitle className="sr-only">Mobile Navigation Menu</SheetTitle>

          <div className="grid gap-0 p-12">
            {/* TODO: The actual logo should be placed here */}
            <div className="flex items-center gap-2 mb-6">
              <Link href="/" className="flex items-center justify-center gap-2">
                <MountainIcon className="h-6 w-6 text-primary" />
                <span className="font-bold text-lg text-white">
                  {t("logo")}
                </span>
              </Link>
            </div>

            {navbarLinks.map((link, index) => {
              const isActive = pathname === link.href;

              return (
                <NavbarLink
                  key={link.href}
                  className={`flex w-full items-center py-3 text-lg border-b border-white/20
                    ${
                      isActive
                        ? "bg-white text-primary font-semibold rounded-md"
                        : "text-white hover:bg-white hover:text-primary hover:rounded-md px-2"
                    }
                    ${index === navbarLinks.length - 1 ? "border-b-0" : ""} 
                  `}
                  href={link.href}
                  content={link.content}
                />
              );
            })}
            <div className="mt-6">
              <CtaSection buttonLabel={t("ctaSection.text")} />
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
