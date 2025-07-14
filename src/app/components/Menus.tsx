import React from "react";
import Cup from "../images/alowishus-coffee.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import "../globals.css";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

function Menu() {
  // list of items to map through
  const products = [
    {
      product: "Drip Coffee",
      sizes: "S, M, L, XL",
      price: "$5.00",
      options: "Customizable",
    },
    {
      product: "Iced Coffee",
      sizes: "S, M, L, XL",
      price: "$6.00",
      options: "Customizable",
    },
    {
      product: "Espresso",
      sizes: "Single, Double, Triple",
      price: "$6.00",
      options: "Customizable",
    },
    {
      product: "Cappuccino",
      sizes: "Single, Double",
      price: "$4.00",
      options: "Customizable",
    },
    {
      product: "Donuts",
      sizes: "N/A",
      price: "$2.00",
      options: "As-is",
    },
  ];

  return (
    <>
      <div className=" bg-white">
   
        <div className="my-container bg-white flex flex-col md:flex-row sm:px-6 md:mt-10">
          <div className="sm:w-full sm:min-w[300px] md:w-1/2 md:max-w-[400px] md:ml-6 md:mr-10">
            <Image
              src={Cup}
              alt="coffee cups image"
              width={400}
              height={400}
              className="min-w-80 z-30"
            />
          </div>
          <div className="flex flex-col justify-center md:w-1/2 md:max-w-[600px]">
            <h3 className="font-bold text-4xl pb-3 text-center">
              This Season's Specials
            </h3>
            <p className="text-center pb-6">
              Don't miss out on these seasonal specials
            </p>
            <Table className="bg-white p-3 rounded-lg shadow-lg">
              <TableCaption className="text-gray-700 font-xs">
                *Prices varFy by location
              </TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-lg px-12 mt-4 font-semibold">
                    PRODUCT
                  </TableHead>
                  <TableHead className="text-lg px-12 mt-4 font-semibold">
                    SIZES
                  </TableHead>
                  <TableHead className="px-12 mt-4 font-semibold text-lg text-right">
                    PRICE*
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="py-6">
                {products.map((product) => (
                  <TableRow key={product.product}>
                    <TableCell className="font-bold text-gray-700 px-12">
                      {product.product}
                    </TableCell>
                    <TableCell className="font-medium text-gray-700 px-12">
                      {product.sizes}
                    </TableCell>
                    <TableCell className="font-bold text-gray-700 text-right pl-11 pr-15">
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
