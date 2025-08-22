// 'use server'

import React from "react";
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
import "@/app/globals.css";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

import Product from "@/models/Product";
import { getAllProducts, deleteProduct, getProductById } from "@/app/actions/product";
import Image from "next/image";

export default async function Products() {
  try {
    const products = await Product.find();
    if (products.length === 0) {
      return (
        <h1 className="text-red-400 font-bold text-xl">You have no products</h1>
      );
    } else {
      return (
        <>
          <Header />

          <div className="w-screen bg-slate-200 my-5">
            <div className="my-container flex flex-col gap-6 justify-center py-12">
              <h1 className="text-4xl text-center font-bold">Admin</h1>

              {/* start cards */}
              <div className="flex flex-col md:flex-row gap-4 justify-center items-center flex-wrap py-10 ">
                {/* map through data */}
                {/* out-of-stock condition */}
                {products.map((product: any) => (
                  <div key={product._id}>
                    {product?.in_stock == "no" ? (
                      <Card className="w-[300px] h-[380px]rounded-lg shadow-lg">
                        <CardHeader className="max-h-[30px]">
                          <CardTitle className="text-sm">
                            <div className="flex flex-row justify-start">
                              <p className="text-gray-300 text-2xl font-bold text-left pl-4 h-[80px] w-[75%]">
                                {product.title}
                              </p>
                              <div className="w-[35%] mb-10 mx-5 text-sm text-red-500">
                                OUT OF STOCK
                              </div>
                            </div>
                          </CardTitle>
                          <CardDescription></CardDescription>
                        </CardHeader>
                        <CardContent className="mb-0">
                          <Image
                            src={
                              (product?.image_url as string) ||
                              "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/800px-Placeholder_view_vector.svg.png"
                            }
                            alt="product"
                            width={225}
                            height={120}
                            className="mx-auto opacity-[.5]"
                          />
                        </CardContent>
                        <CardFooter className="flex flex-col text-center w-full mb-0 pb-0 ">
                          <p className="text-left mb-8 max-w-[225px] px-1 line-clamp-4">
                            {product?.description}
                          </p>
                          <p className="text-left mb-8 max-w-[225px] px-1 line-clamp-4">
                            {product?.price}
                          </p>
                          <Link href={`/admin/products/${product?._id}`}>
                            <Button className="bg-gray-900 text-white py-4 px-5 rounded-md text-md shadow-lg hover:scale-105 transition-all w-[200px] mx-auto">
                              Details
                            </Button>
                          </Link>
                        </CardFooter>
                      </Card>
                    ) : (
                      <Card className="w-[300px] h-[380px]rounded-lg shadow-lg">
                        <CardHeader className="max-h-[30px]">
                          <CardTitle className="text-sm">
                            <div className="flex flex-row justify-end items-center">
                              {product?.sale == "yes" && (
                                <div className="w-[70px] mb-10 mr-2">
                                  <span className="bg-amber-400 text-white p-1">
                                    ON SALE
                                  </span>
                                </div>
                              )}
                            </div>
                          </CardTitle>
                          <CardDescription>
                            <p className="text-foreground text-2xl font-bold text-left max-w-[225px] px-4">
                              {product?.title}
                            </p>
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="mb-0">
                          <Image
                            src={product?.image_url}
                            alt="product"
                            width={220}
                            height={145}
                            className="h-[145px] mx-auto overflow-hidden"
                          />
                        </CardContent>
                        <CardFooter className="flex flex-col text-center w-full mb-0 pb-0 ">
                          <p className="text-left mb-8 max-w-[225px] px-1 line-clamp-4">
                            {product?.description}
                          </p>
                          <p className="text-left mb-8 max-w-[225px] px-1 line-clamp-4">
                            {product?.price}
                          </p>

                          <div className="flex flex-row gap-4 justify-between">
                            {/* link to edit form */}
                            <Link href={`/admin/products/${product._id}`}>
                              <Button className="border rounded px-2 bg-blue-400 ml-5">
                                Edit
                              </Button>
                            </Link>
                            {/* delete */}
                            <form
                              className="flex justify-end pr-5"
                              action={async (formData: FormData) => {
                                "use server";
                                await deleteProduct(formData);
                              }}
                            >
                              <input
                                hidden
                                type="text"
                                name="id"
                                defaultValue={product._id.toString()}
                              />
                              <Button className="border rounded px-2 bg-red-400">
                                delete
                              </Button>
                            </form>
                          </div>
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
