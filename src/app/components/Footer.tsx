import React from 'react'
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

export default function Footer() {
  return (
    <>
    <div className="w-full flex sm:flex-col md:flex-row mx-auto justify-between max-w-7xl">
      <div className="w-7/12 flex flex-col sm:h-full md:justify-start gap-6 sm:py-10 pl-14 py-4 max-w[65%]">
        <div className="flex justify-start text-left pl-4">
          <Image
            src={Logo}
            alt="Logo"
            width={200}
            height={120}
            className="max-w-[200px] md:pl-14"
          />
        </div>

        <NavigationMenu className="flex flex-row justify-start items-start sm:pl-1 md:pl-14 max-w-full font-medium text-xl">
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
   </div>
   <Subscribe/>
      </div>
      <div className="w-full flex justify-center items-center mx-auto max-w-6xl text-sm h-25 border-t-2 border-gray">
        Copyright &copy; 2025 KimV
        </div>
    </>
  );
}