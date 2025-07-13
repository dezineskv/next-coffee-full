"use client";
import type React from "react";
import "../globals.css";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, ShoppingBag, X } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Logo from "../images/logo2.png";

const menuItems = [
  {
    title: "Coffee",
    href: "/cafe-menu",
    description: "Espresso, cappuccino, latte and more",
  },
  {
    title: "Food",
    href: "/cafe-menu",
    description: "Sandwiches, pastries, and light meals",
  },
  {
    title: "Beverages",
    href: "/cafe-menu",
    description: "Teas, smoothies, and cold drinks",
  },
  {
    title: "Desserts",
    href: "/cafe-menu",
    description: "Cakes, cookies, and sweet treats",
  },
];

const aboutItems = [
  {
    title: "Our Story",
    href: "/about",
    description: "Learn about our journey and mission",
  },
  {
    title: "Team",
    href: "/about",
    description: "Meet the people behind Kimbotic",
  },

];

const locationItems = [
  {
    title: "Headquarters",
    href: "/find",
    description: "123 Main St, Downtown",
  },
  {
    title: "Mall Location",
    href: "/find",
    description: "456 Shopping Center Blvd",
  },
  {
    title: "Airport Location",
    href: "/find",
    description: "Terminal 2, Gate Area",
  },
];

const cateringItems = [
  {
    title: "Corporate Events",
    href: "/services",
    description: "Professional catering for meetings and events",
  },
  {
    title: "Private Parties",
    href: "/services",
    description: "Custom catering for special occasions",
  },
  {
    title: "Delivery",
    href: "/services",
    description: "Order online for delivery",
  },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* <header className=" bg-gray-200/90 w-full sm:pt-5 md:pt-10 sm:pb-8 md:pl-2 mb-5"> */}

      <div className="bg-white my-container flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 pt-4 pb-10 px-0">
        {/* Logo and Mobile Menu Toggle */}
        <div className="flex items-center justify-between">
          <div className="flex justify-center items-center sm:pl-6">
            <Link href="/">
              <Image
                src={Logo}
                alt="Logo"
                width={300}
                height={180}
                className="w-auto max-w-[250px] sm:mx-auto sm:ml-6 md:pl-12 pb-4 pr-10 border-0"
              />
            </Link>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="sm:border-4 sm:border-gray-400 lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-8 w-8" />
            ) : (
              <Menu className="h-8 w-8" />
            )}
          </Button>
        </div>

        {/* Desktop Navigation -customized removed buttons and svg arrows*/}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList className="flex space-x-2">
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-xl font-medium">
                <Link href="/cafe-menu">Menu</Link>
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {menuItems.map((item) => (
                    <ListItem
                      key={item.title}
                      title={item.title}
                      href={item.href}
                    >
                      {item.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-xl font-medium">
                <Link href="/about">About</Link>
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-1 lg:w-[600px]">
                  {aboutItems.map((item) => (
                    <ListItem
                      key={item.title}
                      title={item.title}
                      href={item.href}
                    >
                      {item.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-xl font-medium">
                <Link href="/find">Find Us</Link>
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-1 lg:w-[600px]">
                  {locationItems.map((item) => (
                    <ListItem
                      key={item.title}
                      title={item.title}
                      href={item.href}
                    >
                      {item.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-xl font-medium">
              <Link href="/services">Services</Link>
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-1 lg:w-[600px]">
                  {cateringItems.map((item) => (
                    <ListItem
                      key={item.title}
                      title={item.title}
                      href={item.href}
                    >
                      {item.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        {/* Desktop Actions */}
        <div className="hidden lg:flex lg:flex-1 justify-end items-center gap-x-5">
          <Link
            href="/cart"
            className="relative text-xl font-medium text-gray-900"
          >
            <ShoppingBag className="w-11 h-10 bg-white hover:bg-gray-100 text-black rounded-full p-2 shadow-lg shadow-gray-300 hover:scale-105 transition-all" />
            {/* Cart badge*/}
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              2
            </span>
          </Link>
          <Button
            asChild
            className="bg-gray-900 text-white px-6 py-6 rounded-lg text-xl shadow-lg hover:scale-105 transition-all md:mr-12"
          >
            <Link href="/gift-vouchers">Buy Gift Cards</Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t pt-4 mt-4">
            <div className="flex flex-col space-y-4">
              {/* Mobile Menu Items */}
              <div className="space-y-3">
                <details className="group">
                  <summary className="text-xl font-medium cursor-pointer list-none flex items-center justify-between pl-6">
                    Menu
                    <span className="transition group-open:rotate-180">▼</span>
                  </summary>
                  <div className="mt-2 ml-4 space-y-2">
                    {menuItems.map((item) => (
                      <Link
                        key={item.title}
                        href={item.href}
                        className="block text-gray-600 hover:text-gray-900"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </details>
                <details className="group">
                  <summary className="text-xl font-medium cursor-pointer list-none flex items-center justify-between pl-6">
                    About
                    <span className="transition group-open:rotate-180">▼</span>
                  </summary>
                  <div className="mt-2 ml-4 space-y-2">
                    {aboutItems.map((item) => (
                      <Link
                        key={item.title}
                        href={item.href}
                        className="block text-gray-600 hover:text-gray-900"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </details>

                <details className="group">
                  <summary className="text-xl font-medium cursor-pointer list-none flex items-center justify-between pl-6">
                    Find Us
                  </summary>
                  <div className="mt-2 ml-4 space-y-2"></div>
                </details>

                <details className="group">
                  <summary className="text-xl font-medium cursor-pointer list-none flex items-center justify-between pl-6">
                    Catering
                    <span className="transition group-open:rotate-180">▼</span>
                  </summary>
                  <div className="mt-2 ml-4 space-y-2">
                    {cateringItems.map((item) => (
                      <Link
                        key={item.title}
                        href={item.href}
                        className="block text-gray-600 hover:text-gray-900"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </details>
              </div>

              {/* Mobile Actions */}
              <div className="flex flex-col space-y-4 pt-4 border-t ">
                <Link
                  href="/cart"
                  className="flex items-center space-x-3 text-xl font-medium text-gray-900"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <div className="relative pl-6">
                    <ShoppingBag className="h-6 w-6 " />
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                      2
                    </span>
                  </div>
                  <span>Shopping Cart</span>
                </Link>
                <Button asChild className="bg-gray-900 text-white text-xl py-6">
                  <Link
                    href="/gift-cards"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Buy Gift Cards
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* </header> */}
    </>
  );
}

const ListItem = ({
  className,
  title,
  children,
  href,
  ...props
}: {
  className?: string;
  title: string;
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
};
