import React from "react";
import Image from "next/image";
import Logo from "../images/logo2.png";
import Subscribe from "./Subscribe";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import "../globals.css";
import "../globals.css";

export default function Footer() {
  return (
    <>
      <div className="my-container flex flex-col md:flex-row justify-between">
        <div className="text-left pl-4">
          <Image
            src={Logo}
            alt="Logo"
            width={180}
            height={110}
            className="max-w-[180px] md:px-5"
          />
        </div>
        <NavigationMenu className="flex flex-col md:flex-row justify-center items-start sm:pl-1 sm:pb-10 md:px-10 font-medium text-xl">
          <NavigationMenuList className="pointer-events-none">
            <NavigationMenuItem className="pointer-events-none">
              <NavigationMenuTrigger className="text-xl">
                Cafe Menu
              </NavigationMenuTrigger>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-xl">
                About Us
              </NavigationMenuTrigger>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-xl">
                Find Us
              </NavigationMenuTrigger>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-xl">
                Catering
              </NavigationMenuTrigger>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <Subscribe />
      </div>
      <div className="my-container flex justify-center items-center mx-auto text-sm h-25 border-t-2 border-white">
        Copyright &copy; 2025 KimV
      </div>
    </>
  );
}
