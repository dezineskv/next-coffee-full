import React from 'react';
import Image from 'next/image';
import Subscribe from './Subscribe';
import '../../src/app/globals.css';
import Link from 'next/link';

export default function Footer() {
  return (
    <>
      <div className="bg-background mt-10 flex flex-col items-center justify-center pt-12">
        <div className="my-container flex flex-col items-center justify-between md:h-20 md:flex-row">
          <div className="pl-4 text-left sm:mb-6">
            <Link href="/">
              <Image
                src="https://i.ibb.co/23GsvNz7/logo2.png"
                alt="Logo"
                width={180}
                height={110}
                className="max-w-[180px] md:px-5 md:pb-5"
              />
            </Link>
          </div>
          <div className="text-md flex flex-row items-start justify-between gap-4 font-medium sm:py-10 sm:pl-1 md:px-20 md:pb-20">
            <Link href="/cafe-menu">
              <p>Menu</p>
            </Link>
            <Link href="/about">
              <p>About</p>
            </Link>
            <Link href="/products">
              <p>Products</p>
            </Link>
            <Link href="/services">
              <p>Services</p>
            </Link>
          </div>
          <div className="flex flex-col items-center justify-center text-xl font-medium sm:pb-10 sm:pl-1 md:flex-row md:px-10">
            <Subscribe />
          </div>
        </div>
        <div className="my-container flex items-center justify-center border-t-2 border-gray-200 pt-4 pb-8 text-sm text-gray-900">
          Copyright &copy; 2025 KimV
        </div>
      </div>
    </>
  );
}
