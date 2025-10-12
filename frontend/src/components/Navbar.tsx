import { NavLink, useLocation } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export const Navbar = () => {
  const location = useLocation();
  return (
    <NavigationMenu className="bg-green-800 p-5">
      <NavigationMenuList className="flex flex-row items-center justify-center gap-20 text-white shadow-black">
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <NavLink
              to="/"
              className={location.pathname === "/" ? "font-bold" : ""}
            >
              Home
            </NavLink>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <NavLink
              to="/list"
              className={location.pathname === "/list" ? "font-bold" : ""}
            >
              Expenses
            </NavLink>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <NavLink
              to="/add"
              className={location.pathname === "/add" ? "font-bold" : ""}
            >
              Add Expense
            </NavLink>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
