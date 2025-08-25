'use client';
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Mid1 from '../images/mid1.png';
import Mid2 from '../images/mid2.png';
import Mid3 from '../images/mid3.png';
import '../globals.css';
import { motion } from 'framer-motion';
import Link from 'next/link';

function BestSelling() {
  const selling = [
    {
      id: 1,
      title: 'Espresso',
      href: '/products',
      description:
        'Known for its intense flavor, small serving size, and the crema, a layer of foam on top.',
      price: '4.99',
      thumb: 'https://i.ibb.co/whZ6mgB3/mid1.png',
    },
    {
      id: 2,
      title: 'Latte',
      href: '/products',
      description:
        "Known for its smooth, creamy texture and a balance of coffee and milk flavors. The word 'latte' itself means 'milk' in Italian.",
      price: '5.99',
      thumb: 'https://i.ibb.co/VYtmkJkm/mid2.png',
    },
    {
      id: 3,
      title: 'Cold Brew',
      href: '/products',
      description:
        'Our roaster starts with 100% Arabica coffee beans from Mexico (80%) and Colombia',
      price: '5.00',
      thumb: 'https://i.ibb.co/ymZ4sKHt/mid3.png',
    },
  ];
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: 150 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="bg-background">
          <div className="my-container mx-auto mt-10 flex flex-col justify-center gap-6 pt-10 md:pb-4">
            <h1 className="text-center text-4xl font-bold">Best Selling Coffee</h1>
            <p className="text-para mx-auto flex max-w-1/2 justify-center text-center">
              Order the best coffee in town!
            </p>
            {/* start 3 cards */}
            <div className="mx-auto flex flex-col justify-center gap-8 py-10 sm:flex-wrap md:flex-row">
              {selling.map((item) => (
                <Card key={item.id} className="max-w-80 shadow-lg sm:w-full md:w-1/3">
                  <div className="mx-auto flex flex-row justify-center">
                    <div className="flex flex-col justify-end">
                      <CardDescription>
                        <p className="font-bold text-red-500">#{item.id} Selling</p>
                      </CardDescription>
                      <CardTitle className="text-lg font-extrabold">{item.title}</CardTitle>
                    </div>
                    <Image
                      src={item.thumb}
                      alt="image"
                      width={150}
                      height={150}
                      className="h-[150px] w-[150px]"
                    />
                  </div>
                  <CardContent>
                    <p className="text-para max-w-2xl text-left">{item.description}</p>
                  </CardContent>
                  <CardFooter className="mt-auto flex flex-row items-end justify-between gap-4">
                    <h3 className="text-left text-lg font-bold">${item.price}</h3>
                    <Link href="/products">
                      <Button className="text-md rounded-md bg-gray-900 px-5 py-4 text-white shadow-lg transition-all hover:scale-105">
                        Order Now
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
      <div className="bg-background mx-auto pb-8 text-center">
        <Link href="/products">
          <Button className="text-md rounded-md bg-gray-900 px-5 py-4 text-white shadow-lg transition-all hover:scale-105">
            All Products
          </Button>
        </Link>
      </div>
    </>
  );
}

export default BestSelling;
