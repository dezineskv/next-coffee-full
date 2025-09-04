'use client';
import type React from 'react';
import '../../src/app/globals.css';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, ShoppingBag, X } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/ui/navigation-menu';
import { Button } from '@/ui/button';
import { cn } from '@/lib/utils';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/ui/dropdown-menu';
import { Moon, Sun, Lock } from 'lucide-react';
import { useTheme } from 'next-themes';
import Searches from '@/components/Searches';
import Product from '@/models/Product';
import connectDB from '@/lib/db';
import ProductLIst from './ProductList';

const aboutItems = [
  {
    title: 'Our Story',
    href: '/about',
    description: 'Learn about our journey and mission',
  },
  {
    title: 'Team',
    href: '/about',
    description: 'Meet the people behind Kimbotic',
  },
  {
    title: 'Locations',
    href: '/find',
    description: 'Kimbotic Coffee Headquarters',
  },
];

const productsItems = [
  {
    title: 'All Products',
    href: '/products',
    description: 'Cakes, cookies, sweet treats and more',
  },
  {
    title: 'Menu',
    href: '/cafe-menu',
    description: 'Espresso, cappuccino, latte and more',
  },
  {
    title: 'Admin Login',
    href: '/login',
    description: 'Inventory management',
  },
];

const cateringItems = [
  {
    title: 'Corporate Events',
    href: '/services',
    description: 'Professional catering for meetings and events',
  },
  {
    title: 'Private Parties',
    href: '/services',
    description: 'Custom catering for special occasions',
  },
  {
    title: 'Delivery',
    href: '/services',
    description: 'Order online for delivery',
  },
];

const Header: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');



  // export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cartQuantity, setCartQuantity] = useState(0);
  const { theme, setTheme } = useTheme();

  const incrementQuantity = () => setCartQuantity(cartQuantity + 1);
  const decrementQuantity = () => setCartQuantity(Math.max(0, cartQuantity - 1));

  return (
    <>
      {/* <header className=" bg-gray-200/90 w-full sm:pt-5 md:pt-10 sm:pb-8 md:pl-2 mb-5"> */}

      <div className="bg-background flex flex-col gap-4 px-auto py-10 sm:mx-3 sm:w-[90%] sm:px-3 md:flex-row md:items-center md:justify-between mx-auto max-w-7xl">
        {/* Logo and Mobile Menu Toggle */}
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start pl-6">
            <Link href="/">
              <Image
                src={
                  theme == 'dark'
                    ? 'https://i.ibb.co/XrBqjX0k/logo3-d.png'
                    : 'https://i.ibb.co/23GsvNz7/logo2.png'
                }
                alt="Logo"
                width={200}
                height={80}
                className="w-auto max-w-[200px] border-0 pr-4 pb-4 sm:mx-auto sm:ml-6 md:pl-4"
                priority={true}
              />
            </Link>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="mr-8 sm:border-4 sm:border-gray-400 lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
          </Button>
        </div>

        {/* Desktop Navigation -customized */}
        <NavigationMenu className="hidden lg:flex pl-20">
          <NavigationMenuList className="flex space-x-1 ml-8 pl-8">
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-lg font-medium">
                <Link href="/about">About</Link>
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-1 lg:w-[600px]">
                  {aboutItems.map((item) => (
                    <ListItem key={item.title} title={item.title} href={item.href}>
                      {item.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-lg font-medium">
                <Link href="/products">Products</Link>
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-1 lg:w-[600px]">
                  {productsItems.map((item) => (
                    <ListItem key={item.title} title={item.title} href={item.href}>
                      {item.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-lg font-medium">
                <Link href="/services">Services</Link>
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-1 lg:w-[600px]">
                  {cateringItems.map((item) => (
                    <ListItem key={item.title} title={item.title} href={item.href}>
                      {item.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        {/* Desktop Actions */}

        <div className="sm:mx-6 sm:px-4 md:mb-4 md:ml-10 md:pl-10 md:mr-0">
          <Searches />
          {/* <ProductLIst query={searchQuery} /> */}
        </div>

        <div className="hidden items-center justify-end gap-x-5 lg:flex lg:flex-1">
          <span className="relative mt-[4px] pt-1 text-xl font-medium text-gray-900">
            <DropdownMenu>
              <DropdownMenuTrigger>
                <ShoppingBag className="h-10 w-11 rounded-full bg-white p-2 text-black shadow-md shadow-gray-300 transition-all hover:scale-105 hover:bg-gray-100" />
                {/* Cart badge*/}
                <span className="absolute -top-1 -right-1 mt-[4px] flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                  {cartQuantity}
                </span>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <div className="flex w-full flex-col items-center gap-4">
                    <div className="flex flex-row pt-[4px] pl-2">
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
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                        {cartQuantity}
                      </span>
                    </div>
                    <div className="flex flex-row pb-1 pl-2">
                      <button onClick={incrementQuantity}>
                        <div className="flex flex-row justify-between pb-1 pl-2">
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
                          <span className="pl-2 font-bold text-black">1</span>
                        </div>
                      </button>
                    </div>
                    <div className="flex flex-row justify-between pb-1 pl-2">
                      <button onClick={decrementQuantity}>
                        <div className="flex flex-row justify-between pb-1 pl-2">
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
                          <span className="pl-2 font-bold text-black">1</span>
                        </div>
                      </button>
                    </div>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <div className="border-1-top border-gray mx-auto">
                    <Link href="/login">Log In</Link>&nbsp;
                    <Link href="/login">Admin</Link>
                  </div>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </span>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="h-[40px] w-[44px] rounded-full bg-white px-4 py-4 font-bold shadow-md shadow-gray-200 transition-all hover:scale-105 hover:bg-gray-200">
                <Moon className="text-background absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 text-black transition-all dark:scale-0 dark:-rotate-90" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme('light')}>Light</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme('dark')}>Dark</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme('system')}>System</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="mt-4 border-t pt-4 lg:hidden">
            <div className="flex flex-col space-y-4 space-x-3">
              {/* Mobile Menu Items */}
              <div className="space-y-3">
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between pl-6 text-xl font-medium">
                    About
                    <span className="transition group-open:rotate-180">▼</span>
                  </summary>
                  <div className="mt-2 ml-6 space-y-2">
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
                  <summary className="flex cursor-pointer list-none items-center justify-between pl-6 text-xl font-medium">
                    Products <span className="transition group-open:rotate-180">▼</span>
                  </summary>
                  <div className="mt-2 ml-6 space-y-2">
                    {productsItems.map((item) => (
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
                  <summary className="flex cursor-pointer list-none items-center justify-between pl-6 text-xl font-medium">
                    Catering
                    <span className="transition group-open:rotate-180">▼</span>
                  </summary>
                  <div className="mt-2 ml-6 space-y-2">
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
              <div className="flex flex-col space-y-4 border-t pt-4">
                <Link
                  href="/login"
                  className="flex items-center space-x-3 text-xl font-medium text-gray-900"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <div className="relative pl-6">
                    <ShoppingBag className="h-6 w-6" />
                    <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                      2
                    </span>
                  </div>
                  <span>Shopping Cart</span>
                </Link>
                <Button asChild className="mx-6 bg-gray-900 py-6 text-xl text-white">
                  <Link href="/products" onClick={() => setIsMobileMenuOpen(false)}>
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
};

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
            'hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none',
            className,
          )}
          {...props}
        >
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">{children}</p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
};
export default Header;
