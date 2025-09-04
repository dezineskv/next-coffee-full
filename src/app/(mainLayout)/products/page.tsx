// 'use server';

import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/ui/card';
import { Button } from '@/ui/button';
import '../../globals.css';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/ui/breadcrumb';
// import { useState } from 'react';
import { getAllProducts } from '@/actions/product';
import Product, { IProduct } from '@/models/Product';
import { TProduct } from '@/types/index';
import Image from 'next/image';
import FilterProducts from '@/components/FilterProds';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/ui/tabs';

export default async function CoffeeProducts() {
  try {
    const products = await Product.find();
    if (products.length === 0) {
      return <h1 className="text-xl font-bold text-red-400">You have no products</h1>;
    } else {
      return (
        <>
          <Header />
          <div className="bg-secondary pt-10 md:pl-24">
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
          <div className="bg-secondary mb-5 w-screen border-b-2 border-gray-900">
            <div className="my-container flex flex-col justify-center gap-6 py-6">
              <h1 className="text-center text-4xl font-bold">Kimbotic Coffee Products</h1>
              <p className="mx-auto max-w-2xl text-center text-foreground">
                Our roaster uses the best coffee beans!
              </p>

              {/* filter products */}
              <FilterProducts />

              {/* start cards */}
              <div className="flex flex-row flex-wrap items-center justify-center gap-8 py-10 sm:flex-col">
                <h1 className="w-6xl pl-6 text-xl">Enjoy Our Product Selection</h1>
                {/* map through data */}

                <Tabs defaultValue="account" className="w-6xl">
                  <TabsList className="ml-6">
                    <TabsTrigger value="account">All Products</TabsTrigger>
                    <TabsTrigger value="password">On Sale</TabsTrigger>
                  </TabsList>
                  <TabsContent value="account">
                    <div className="mx-auto mt-6 mx-auto flex md:flex-row flex-wrap items-center justify-center gap-8 py-10 sm:flex-col md:w-6xl">
                      {/* out-of-stock condition */}
                      {products.map((product: any) => (
                        <div
                          key={product._id}
                          className="flex flex-wrap items-center gap-8 pt-2 pb-10 md:flex-row"
                        >
                          {product.in_stock == 'no' ? (
                            <Card className="h-[480px] w-[320px] rounded-lg shadow-lg">
                              <CardHeader className="max-h-[60px]">
                                <CardTitle className="relative text-sm">
                                  <div className="absolute top-0 left-[-40px]">
                                    <span className="w-[120px] bg-red-400 p-2 text-white">
                                      OUT OF STOCK
                                    </span>
                                  </div>
                                </CardTitle>
                                <CardDescription>
                                  <div className="text-gray-320 mt-4 max-w-[260px] px-4 pt-4 text-left text-xl font-bold">
                                    {product.title}
                                  </div>
                                </CardDescription>
                              </CardHeader>
                              <CardContent className="mb-0">
                                <Image
                                  src={
                                    product?.image_url ||
                                    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/800px-Placeholder_view_vector.svg.png'
                                  }
                                  alt="product"
                                  width={225}
                                  height={120}
                                  className="mx-auto opacity-[.5]"
                                />
                              </CardContent>
                              <CardFooter className="mb-0 flex w-full flex-col justify-items-end pb-0 text-center">
                                <p className="mb-8 line-clamp-2 max-w-[225px] px-1 text-left">
                                  {product?.description}
                                </p>
                                <div className="text-foreground mx-auto mt-4 max-w-[220px] text-left text-lg">
                                  ${product?.price}
                                </div>
                                <div className="mt-auto pt-8">
                                  <Link href={`/products/${product._id}`}>
                                    <Button className="text-md mx-auto w-[200px] rounded-md bg-gray-900 px-5 py-4 text-white shadow-lg transition-all hover:scale-105">
                                      Details
                                    </Button>
                                  </Link>
                                </div>
                              </CardFooter>
                            </Card>
                          ) : (
                            // in stock products
                            <Card className="flex h-[480px] w-[320px] flex-col gap-4 rounded-lg shadow-lg">
                              <CardHeader className="relative max-h-[60px] w-[320px]">
                                <CardTitle className="text-sm">
                                  <div className="">
                                    {product?.sale == 'yes' && (
                                      <div className="absolute top-0 left-[-10px]">
                                        <span className="w-[120px] bg-amber-400 p-2 text-white">
                                          ON SALE
                                        </span>
                                      </div>
                                    )}
                                  </div>
                                  <div className="text-foreground mt-4 max-w-[260px] px-4 pt-4 text-left text-xl font-bold">
                                    {product?.title}
                                  </div>
                                </CardTitle>
                              </CardHeader>
                              <CardContent className="mb-0">
                                <Image
                                  src={
                                    product?.image_url ||
                                    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/800px-Placeholder_view_vector.svg.png'
                                  }
                                  alt="product"
                                  width={220}
                                  height={145}
                                  className="mx-auto h-[145px]"
                                />
                                <div className="text-foreground mx-auto mt-4 line-clamp-4 min-h-[60px] max-w-[220px] text-left text-base">
                                  {product?.description}
                                </div>
                                <div className="text-foreground mx-auto mt-4 max-w-[220px] text-left text-lg font-bold">
                                  ${product?.price}
                                </div>
                              </CardContent>
                              <CardFooter className="mt-auto mb-0 flex w-full flex-col pb-0 text-center">
                                <Link href={`/products/${product._id}`}>
                                  <Button className="text-md mx-auto w-[200px] rounded-md bg-gray-900 px-5 py-4 text-white shadow-lg transition-all hover:scale-105">
                                    Details
                                  </Button>
                                </Link>
                              </CardFooter>
                            </Card>
                          )}
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                  <TabsContent value="password" className="pt-6 pl-6">
                    Items here.
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
          <Footer />
        </>
      );
    }
  } catch (error) {
    console.log(error);
  }
}
