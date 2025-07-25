"use client";

import { navbarRoutes } from "@/constants";
import { X } from "lucide-react";
import Image from "next/image";
import Logo from "@/assets/poddrzilokalnologo.jpg";
import { NavbarItem } from "./navbar-item";

interface MobileNavbarMenuProps {
  isOpen: boolean;
  onClose: () => void;
  active: string;
  setActive: (label: string) => void;
}

export const MobileNavbarMenu = ({
  isOpen,
  onClose,
  active,
  setActive,
}: MobileNavbarMenuProps) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <div
      className={`fixed inset-0 z-50 transition-all duration-300 ${
        isOpen ? "visible" : "invisible"
      }`}
    >
      <div
        className={`absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={handleClose}
      />

      <div
        className={`absolute top-0 right-0 h-full w-64 bg-white shadow-lg p-6 flex flex-col transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={handleClose}
            className="text-blue-500 cursor-pointer transition"
          >
            <X size={24} />
          </button>
          <Image src={Logo} alt="Logo" height={30} />
        </div>

        <div className="flex flex-col items-center justify-center gap-4 flex-grow">
          {navbarRoutes.map((route, index) => (
            <NavbarItem
              key={index}
              label={route.label}
              href={route.href}
              active={active === route.label}
              onClick={() => {
                setActive(route.label);
              }}
            />
          ))}
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center cursor-pointer tracking-tight transform hover:scale-105 transition-transform duration-300">
            Почни веднаш
          </button>
        </div>
      </div>
    </div>
  );
};
