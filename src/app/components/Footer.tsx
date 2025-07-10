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
    <div className="bg-white mt-10 flex flex-col justify-center md:h-25">
      <div className="my-container flex flex-col md:flex-row justify-between items-center">
        <div className="text-left pl-4">
          <Image
            src={Logo}
            alt="Logo"
            width={180}
            height={110}
            className="max-w-[180px] md:px-5 md:pb-5"
          />
        </div>
        <div className="flex flex-row justify-between gap-4 items-center sm:pl-1 sm:pb-10 md:px-20 font-medium text-md">
          <p>Menu</p>
          <p>About</p>
          <p>Find Us</p>
          <p>Catering</p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center sm:pl-1 sm:pb-10 md:px-10 font-medium text-xl">
          <Subscribe />
        </div>
      </div>
      <div className="my-container flex justify-center items-center text-sm h-25 border-t-2 border-gray-200 text-gray-900 py-2">
        Copyright &copy; 2025 KimV
      </div>
      </div>
    </>
  );
}
