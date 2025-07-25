"use client";

import Image from "next/image";
import Logo from "@/assets/poddrzilokalnologo.jpg";
import { MenuIcon, X } from "lucide-react";
import { navbarRoutes } from "@/constants";
import { NavbarItem } from "./navbar-item";
import { useState } from "react";
import { MobileNavbarMenu } from "./mobile-navbar-menu";

export const Navbar = () => {
  const [active, setActive] = useState("Почетна");
  const [isOpen, setIsOpen] = useState(false);

  const routes = navbarRoutes;

  return (
    <div className="py-5">
      <div className="w-full">
        <div className="flex items-center justify-between px-6 md:px-9">
          <Image src={Logo} alt="poddrzilokalno" height={40} width={40} />

          <div className="md:hidden">
            <MenuIcon
              className="h-6 w-6 cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          </div>

          <nav className="hidden md:flex gap-6 items-center">
            {routes.map((route, index) => (
              <NavbarItem
                key={index}
                label={route.label}
                href={route.href}
                active={active === route.label}
                onClick={() => setActive(route.label)}
              />
            ))}
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center cursor-pointer tracking-tight transform hover:scale-105 transition-transform duration-300">
              Почни веднаш
            </button>
          </nav>
        </div>

        <MobileNavbarMenu
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          active={active}
          setActive={setActive}
        />
      </div>
    </div>
  );
};
