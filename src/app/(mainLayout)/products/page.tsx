"use client";
// import { TCoffee } from "../../types";
// import axios from "axios";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import "../../globals.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

type TProduct = {
  _id: string;
  title: string;
  description: string;
  image_url: string;
  origin: string;
  roast_level: string;
  price: string;
  weight_oz: string;
  in_stock: string;
  decaf: boolean;
  sale: string;
};
function Products() {
  const [coffees, setCoffees] = useState<TProduct[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/data")
      .then((res) => res.json())
      .then((data) => {
        setCoffees(data);
        console.log(data);

        setLoading(false);
      })
      .catch((err) => {
        console.error("API error:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (!coffees) return <p>No data found.</p>;
  console.log(coffees);

  return (
    <>
      <Header />
      <div className="my-container md:pl-24">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/products">Products</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="w-screen border-b-2 border-gray-900 my-5">
        <div className="my-container flex flex-col gap-6 justify-center py-12">
          <h1 className="text-4xl text-center font-bold">
            Kimbotic Coffee Products
          </h1>
          <p className="mx-auto text-gray-900 text-center max-w-2xl">
            Our roaster uses the best coffee beans!
          </p>
          {/* start cards */}
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center flex-wrap py-10 ">
            {/* map through data */}
            {coffees.map((item: TProduct) => (
              <div key={item?._id}>
                {item?.in_stock == "no" ? (
                  <Card className="min-w-[200px] min-h-[400px] max-h-[400px] rounded-lg shadow-lg">
                    <CardHeader>
                      <CardTitle className="text-sm text-red-500">
                        Inventory: OUT OF STOCK
                      </CardTitle>
                      <CardDescription>
                        <p className="text-gray-300 text-2xl font-bold text-left h-[80px]">
                          {item?.title}
                        </p>
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="mb-auto">
                      <img
                        src={item?.image_url}
                        alt="product"
                        width={200}
                        height={200}
                        className="mx-auto opacity-[.5]"
                      />
                    </CardContent>
                    <CardFooter className="text-center w-full mt-auto"></CardFooter>
                  </Card>
                ) : (
                  <Card className="min-w-[200px] min-h-[400px] max-h-[400px] rounded-lg shadow-lg">
                    <CardHeader>
                      <CardTitle className="text-sm">
                        <div className="flex flex-row justify-between items-center">
                          <div>Inventory: {item?._id}</div>
                          {item?.sale == "yes" && (
                            <div className="bg-amber-400 p-1">ON SALE</div>
                          )}
                        </div>
                      </CardTitle>
                      <CardDescription>
                        <p className="text-gray-900 text-2xl font-bold text-left h-[80px]">
                          {item?.title}
                        </p>
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="mb-auto">
                      <img
                        src={item?.image_url}
                        alt="product"
                        width={200}
                        height={200}
                        className="mx-auto"
                      />
                    </CardContent>
                    <CardFooter className="text-center w-full mt-auto">
                      <Link href={`/products/${item?._id}`}>
                        <Button className="bg-gray-900 text-white py-4 px-5 rounded-md text-md shadow-lg hover:scale-105 transition-all w-full">
                          Details
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Products;
