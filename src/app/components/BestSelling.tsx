'use client'
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Mid1 from "../images/mid1.png";
import Mid2 from "../images/mid2.png";
import Mid3 from "../images/mid3.png";
import "../globals.css";
import { motion } from "framer-motion";

function BestSelling() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: 150 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="my-container flex flex-col gap-6 justify-center mx-auto pt-10 md:pb-10 mt-5">
          <h1 className="text-4xl text-center font-bold">
            Best Selling Coffee
          </h1>
          <p className="flex justify-center mx-auto text-gray-900 text-center max-w-1/2">
            lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum
            dolor sit amet, consectetur adipiscing elit
          </p>
          {/* start 3 cards */}
          <div className="flex flex-col md:flex-row gap-8 justify-center mx-auto py-10 sm:flex-wrap ">
            <Card className="sm:w-full md:w-1/3 max-w-80 shadow-lg">
              <div className="flex flex-row mx-auto justify-center">
                <div className="flex flex-col justify-end ">
                  <CardDescription>
                    <p className="text-red-500 font-bold">#1 Selling</p>
                  </CardDescription>
                  <CardTitle className="text-lg font-extrabold">
                    Espresso
                  </CardTitle>
                </div>
                <Image
                  src={Mid1}
                  alt="Mid"
                  width={150}
                  height={200}
                  className="w-[150px] h-[150px]"
                />
              </div>
              <CardContent>
                <p className="text-gray-900 text-left max-w-2xl">
                  lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </CardContent>
              <CardFooter className="flex flex-row justify-between gap-4 ">
                <h3 className="text-left font-bold text-lg">$59.99</h3>
                <Button className="bg-gray-900 text-white py-4 px-5 rounded-md text-md shadow-lg hover:scale-105 transition-all">
                  Order Now
                </Button>
              </CardFooter>
            </Card>
            <Card className="sm:w-full md:w-1/3 max-w-80 shadow-lg">
              <div className="flex flex-row mx-auto justify-center">
                <div className="flex flex-col justify-end ">
                  <CardDescription>
                    <p className="text-red-500 font-bold">#2 Selling</p>
                  </CardDescription>
                  <CardTitle className="text-lg font-extrabold">
                    Latte
                  </CardTitle>
                </div>
                <Image
                  src={Mid2}
                  alt="Mid"
                  width={150}
                  height={200}
                  className="w-[150px] h-[150px]"
                />
              </div>
              <CardContent>
                <p className="text-gray-900 text-left max-w-2xl">
                  lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </CardContent>
              <CardFooter className="flex flex-row justify-between gap-4 ">
                <h3 className="text-left font-bold text-lg">$59.99</h3>
                <Button className="bg-gray-900 text-white py-4 px-5 rounded-md text-md shadow-lg hover:scale-105 transition-all">
                  Order Now
                </Button>
              </CardFooter>
            </Card>
            <Card className="sm:w-full md:w-1/3 max-w-80 shadow-lg">
              <div className="flex flex-row mx-auto justify-center">
                <div className="flex flex-col justify-end ">
                  <CardDescription>
                    <p className="text-red-500 font-bold">#3 Selling</p>
                  </CardDescription>
                  <CardTitle className="text-lg font-extrabold">
                    Cold Brew
                  </CardTitle>
                </div>
                <Image
                  src={Mid3}
                  alt="Mid"
                  width={150}
                  height={200}
                  className="w-[150px] h-[150px]"
                />
              </div>
              <CardContent>
                <p className="text-gray-900 text-left max-w-2xl">
                  lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </CardContent>
              <CardFooter className="flex flex-row justify-between gap-4 ">
                <h3 className="text-left font-bold text-lg">$59.99</h3>
                <Button className="bg-gray-900 text-white py-4 px-5 rounded-md text-md shadow-lg hover:scale-105 transition-all">
                  Order Now
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default BestSelling;
