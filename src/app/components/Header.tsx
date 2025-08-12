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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

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
  {
    title: "Locations",
    href: "/find",
    description: "Kimbotic Coffee Headquarters",
  },
];

const productsItems = [
  {
    title: "All Products",
    href: "/products",
    description: "Cakes, cookies, sweet treats and more",
  },
    {
    title: "Product Inventory",
    href: "/all-products",
    description: "Add, remove products",
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
  const [cartQuantity, setCartQuantity] = useState(0);
  const { theme, setTheme } = useTheme();

  const incrementQuantity = () => setCartQuantity(cartQuantity + 1);
  const decrementQuantity = () =>
    setCartQuantity(Math.max(0, cartQuantity - 1));

  return (
    <>
      {/* <header className=" bg-gray-200/90 w-full sm:pt-5 md:pt-10 sm:pb-8 md:pl-2 mb-5"> */}

      <div className="bg-background my-container flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 py-10 px-0">
        {/* Logo and Mobile Menu Toggle */}
        <div className="flex items-center justify-between">
          <div className="flex justify-center items-center sm:pl-6">
            <Link href="/">
              <Image
                src={
                  theme == "dark"
                    ? "https://i.ibb.co/XrBqjX0k/logo3-d.png"
                    : "https://i.ibb.co/23GsvNz7/logo2.png"
                }
                alt="Logo"
                width={300}
                height={180}
                className="w-auto max-w-[250px] sm:mx-auto sm:ml-6 md:pl-12 pb-4 pr-10 border-0"
                priority={true}
              />
            </Link>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="sm:border-4 sm:border-gray-400 lg:hidden mr-8"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-8 w-8 " />
            ) : (
              <Menu className="h-8 w-8 " />
            )}
          </Button>
        </div>

        {/* Desktop Navigation -customized */}
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
                <Link href="/products">Products</Link>
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-1 lg:w-[600px]">
                  {productsItems.map((item) => (
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
          <span className="relative text-xl font-medium text-gray-900">
            <DropdownMenu>
              <DropdownMenuTrigger>
                <ShoppingBag className="w-11 h-10 bg-white hover:bg-gray-100 text-black rounded-full p-2 shadow-lg shadow-gray-300 hover:scale-105 transition-all" />
                {/* Cart badge*/}
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartQuantity}
                </span>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <div className="flex flex-col gap-4w-full items-center">
                    <div className="pl-2 pb-1 flex flex-row ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="lucide lucide-shopping-cart-icon lucide-shopping-cart"
                      >
                        <circle cx="8" cy="21" r="1" />
                        <circle cx="19" cy="21" r="1" />
                        <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                      </svg>
                      &nbsp; Items&nbsp;
                      <span className="bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                        {cartQuantity}
                      </span>
                    </div>
                    <div className="pl-2 pb-1 flex flex-row ">
                      <button onClick={incrementQuantity}>
                        <div className="pl-2 pb-1 flex flex-row justify-between">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="lucide lucide-plus-icon lucide-plus"
                        >
                          <path d="M5 12h14" />
                          <path d="M12 5v14" />
                        </svg>
                        <span className="font-bold text-black pl-2">1</span>
                        </div>
                      </button>
                
                    </div>
                    <div className="pl-2 pb-1 flex flex-row justify-between">
                      <button onClick={decrementQuantity}>
                        <div className="pl-2 pb-1 flex flex-row justify-between">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="lucide lucide-minus-icon lucide-minus"
                        >
                          <path d="M5 12h14" />
                        </svg>
                        <span className="font-bold text-black pl-2">1</span>
                        </div>
                      </button>
                    </div>
                  </div>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </span>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="bg-white font-bold py-4 px-4 rounded-full shadow-lg shadow-gray-200 h-[40px] w-[44px] hover:scale-105 transition-all hover:bg-gray-200">
                <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0 text-background" />
                <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90 text-black" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button
            asChild
            className="bg-gray-900 text-white px-6 py-6 rounded-lg text-xl shadow-lg hover:scale-105 transition-all md:mr-12"
          >
            <Link href="/products">Buy Gift Cards</Link>
          </Button>
        </div>

    {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t pt-4 mt-4">
            <div className="flex flex-col space-y-4 space-x-3">
              {/* Mobile Menu Items */}
              <div className="space-y-3 ">
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
                    Products
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
                <Button
                  asChild
                  className="bg-gray-900 text-white text-xl py-6 mx-6"
                >
                  <Link
                    href="/products"
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
