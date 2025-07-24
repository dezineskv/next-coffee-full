import React from "react";
import Image from "next/image";
import Subscribe from "./Subscribe";
import "../globals.css";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div className="bg-white mt-10 flex flex-col items-center justify-center pt-12">
        <div className="my-container flex flex-col md:flex-row justify-between items-center md:h-20">
          <div className="text-left pl-4 sm:mb-6">
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
          <div className="flex flex-row justify-between gap-4 items-start sm:pl-1 sm:py-10 md:px-20 md:pb-20 font-medium text-md">
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
          <div className="flex flex-col md:flex-row justify-center items-center sm:pl-1 sm:pb-10 md:px-10 font-medium text-xl">
            <Subscribe />
          </div>
        </div>
        <div className="my-container flex justify-center items-center text-sm border-t-2 border-gray-200 text-gray-900 pt-4 pb-8">
          Copyright &copy; 2025 KimV
        </div>
      </div>
    </>
  );
}
