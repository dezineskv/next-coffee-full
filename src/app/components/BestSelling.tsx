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
import Link from "next/link";

function BestSelling() {
  const selling = [
    {
      id: 1,
      title: "Espresso",
      href: "/products",
      description:
        "Known for its intense flavor, small serving size, and the crema, a layer of foam on top.",
      price: "4.99",
      thumb: "/mid1.png",
    },
    {
      id: 2,
      title: "Latte",
      href: "/products",
      description:
        "Known for its smooth, creamy texture and a balance of coffee and milk flavors. The word 'latte' itself means 'milk' in Italian.",
      price: "5.99",
      thumb: "/mid2.png",
    },
    {
      id: 3,
      title: "Cold Brew",
      href: "/products",
      description:
        "Our roaster starts with 100% Arabica coffee beans from Mexico (80%) and Colombia",
      price: "5.00",
      thumb: "/mid3.png",
    },
  ];
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: 150 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="my-container flex flex-col gap-6 justify-center mx-auto pt-10 md:pb-10 mt-5">
          <h1 className="text-4xl text-center font-bold ">
            Best Selling Coffee
          </h1>
          <p className="flex justify-center mx-auto text-gray-900 text-center max-w-1/2">
            Order the best coffee in town!
          </p>
          {/* start 3 cards */}
          <div className="flex flex-col md:flex-row gap-8 justify-center mx-auto py-10 sm:flex-wrap ">
            {selling.map((item) => (
              <Card
                key={item.id}
                className="sm:w-full md:w-1/3 max-w-80 shadow-lg"
              >
                  <div className="flex flex-row mx-auto justify-center">
                    <div className="flex flex-col justify-end ">
                      <CardDescription>
                        <p className="text-red-500 font-bold">
                          #{item.id} Selling
                        </p>
                      </CardDescription>
                      <CardTitle className="text-lg font-extrabold">
                        {item.title}
                      </CardTitle>
                    </div>
                    <img
                      src={item.thumb}
                      alt="image"
                      width={150}
                      height={200}
                      className="w-[150px] h-[150px]"
                    />
                  </div>
                  <CardContent>
                    <p className="text-gray-900 text-left max-w-2xl">
                      {item.description}
                    </p>
                  </CardContent>
                  <CardFooter className="flex flex-row justify-between items-end mt-auto gap-4 ">
                    <h3 className="text-left font-bold text-lg">
                      ${item.price}
                    </h3>
                    <Link href="/products">
                      <Button className="bg-gray-900 text-white py-4 px-5 rounded-md text-md shadow-lg hover:scale-105 transition-all">
                        Order Now
                      </Button>
                    </Link>
                  </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default BestSelling;
