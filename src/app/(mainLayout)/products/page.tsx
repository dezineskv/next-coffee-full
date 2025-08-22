// 'use server'

import React from 'react';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import '../../globals.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import Product from '../../../models/Product';
import { getAllProducts, getProductById } from '@/app/actions/product';
import Image from 'next/image';

export default async function Products() {
  try {
    const products = await Product.find();
    if (products.length === 0) {
      return <h1 className="text-xl font-bold text-red-400">You have no products</h1>;
    } else {
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
          <div className="my-5 w-screen border-b-2 border-gray-900">
            <div className="my-container flex flex-col justify-center gap-6 py-12">
              <h1 className="text-center text-4xl font-bold">Kimbotic Coffee Products</h1>
              <p className="mx-auto max-w-2xl text-center text-gray-900">
                Our roaster uses the best coffee beans!
              </p>
              {/* start cards */}
              <div className="flex flex-col flex-wrap items-center justify-center gap-4 py-10 md:flex-row">
                {/* map through data */}
                {/* out-of-stock condition */}
                {products.map((product: any) => (
                  <div key={product._id}>
                    {product.in_stock == 'no' ? (
                      <Card className="h-[480px] w-[300px] rounded-lg shadow-lg">
                        <CardHeader className="max-h-[60px]">
                          <CardTitle className="text-sm">
                            <div className="flex flex-row justify-start">
                              <p className="h-[80px] w-[70%] pl-4 text-left text-2xl font-bold text-gray-300">
                                {product.title}
                              </p>
                              <div className="mx-5 mb-10 w-[35%] text-sm text-red-500">
                                OUT OF STOCK
                              </div>
                            </div>
                          </CardTitle>
                          <CardDescription></CardDescription>
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
                        <CardFooter className="mb-0 flex w-full flex-col pb-0 text-center">
                          <p className="mb-8 line-clamp-4 max-w-[225px] px-1 text-left">
                            {product?.description}
                          </p>
                          <Link href={`/edit/${product?._id}`}>
                            <Button className="text-md mx-auto w-[200px] rounded-md bg-gray-900 px-5 py-4 text-white shadow-lg transition-all hover:scale-105">
                              Details
                            </Button>
                          </Link>
                        </CardFooter>
                      </Card>
                    ) : (
                      // in stock products
                      <Card className="h-[480px] w-[300px] rounded-lg shadow-lg">
                        <CardHeader className="max-h-[60px]">
                          <CardTitle className="text-sm">
                            <div className="flex flex-row items-center justify-end">
                              {product?.sale == 'yes' && (
                                <div className="mr-2 w-[70px]">
                                  <span className="bg-amber-400 p-1 text-white">ON SALE</span>
                                </div>
                              )}
                            </div>
                          </CardTitle>
                          <CardDescription>
                            <p className="text-foreground max-w-[170px] px-4 text-left text-2xl font-bold">
                              {product?.title}
                            </p>
                          </CardDescription>
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
                            className="mx-auto h-[145px] overflow-hidden"
                          />
                        </CardContent>
                        <CardFooter className="mb-0 flex w-full flex-col pb-0 text-center">
                          <p className="mb-8 line-clamp-4 max-w-[225px] px-1 text-left">
                            {product?.description}
                          </p>
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
