import Image from "next/image";
import Logo from "@/assets/poddrzilokalnologo.jpg";
import { MenuIcon } from "lucide-react";

export const Navbar = () => {
  return (
    <div className="py-5">
      <div className="container mx-auto px-3">
        <div className="flex items-center justify-between">
          <Image src={Logo} alt="poddrzilokalno" height={40} width={40} />
          <MenuIcon className="h-5 w-5 md:hidden" />
          <nav className="hidden md:flex gap-6 text-black/60 items-center">
            <a href="#">Почетна</a>
            <a href="#">Пакети</a>
            <a href="#">Проекти</a>
            <a href="#">Искуства</a>
            <a href="#">За нас</a>
            <button className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex align-items justify-center tracking-tight">
              Почни веднаш
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};
