import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "../../ui/navigation-menu";
import { navbarLinks } from "@/const";
import NavbarLink from "./navbar-links";

const Navbar = () => {
  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList>
        {navbarLinks.map((link) => (
          <NavigationMenuItem key={link.href}>
            <NavbarLink
              className={`${navigationMenuTriggerStyle()} bg-blue-500 text-white hover:bg-white hover:text-primary transition-colors duration-200`}
              href={link.href}
              content={link.content}
            />
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navbar;
