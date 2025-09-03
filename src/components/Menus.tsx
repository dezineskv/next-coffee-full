import React from 'react';
import Image from 'next/image';
import { Button } from '@/ui/button';
import '../../src/app/globals.css';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/ui/table';

function Menu() {
  // list of items to map through
  const products = [
    {
      product: 'Drip Coffee',
      sizes: 'S, M, L, XL',
      price: '$5.00',
      options: 'Customizable',
    },
    {
      product: 'Iced Coffee',
      sizes: 'S, M, L, XL',
      price: '$6.00',
      options: 'Customizable',
    },
    {
      product: 'Espresso',
      sizes: 'Single, Double, Triple',
      price: '$6.00',
      options: 'Customizable',
    },
    {
      product: 'Cappuccino',
      sizes: 'Single, Double',
      price: '$4.00',
      options: 'Customizable',
    },
    {
      product: 'Donuts',
      sizes: 'N/A',
      price: '$2.00',
      options: 'As-is',
    },
  ];

  return (
    <>
      <div className="bg-background">
        <div className="my-container flex sm:flex-col pb-10 sm:px-6 md:flex-row">
          <div className="sm:w-[300px] md:mr-10 md:mb-6 md:ml-6 md:w-1/2 md:max-w-[400px]">
            <Image
              src="https://i.ibb.co/kgX1NFZW/alowishus-coffee.png"
              alt="coffee cups image"
              width={400}
              height={400}
              className="z-30 min-w-80"
            />
          </div>
          <div className="flex flex-col justify-center md:w-1/2 md:max-w-[600px]">
            <h3 className="pb-3 text-center text-4xl font-bold">This Season's Specials</h3>
            <p className="pb-6 text-center">Don't miss out on these seasonal specials</p>
            <Table className="bg-background rounded-lg p-3 shadow-lg">
              <TableCaption className="font-xs text-gray-700">
                *Prices vary by by location
              </TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="mt-4 px-12 text-lg font-semibold">PRODUCT</TableHead>
                  <TableHead className="mt-4 px-12 text-lg font-semibold">SIZES</TableHead>
                  <TableHead className="mt-4 px-12 text-right text-lg font-semibold">
                    PRICE*
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="text-para py-8">
                {products.map((product) => (
                  <TableRow key={product.product}>
                    <TableCell className="px-12 font-bold">{product.product}</TableCell>
                    <TableCell className="px-12 font-medium">{product.sizes}</TableCell>
                    <TableCell className="pr-15 pl-11 text-right font-bold">
                      {product.price}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
              {/* <TableFooter>
              <TableRow>
                <TableCell colSpan={3}>Total</TableCell>
                <TableCell className="text-right">$2,500.00</TableCell>
              </TableRow>
            </TableFooter> */}
            </Table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Menu;
