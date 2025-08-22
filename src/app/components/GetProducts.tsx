import Product from "../../models/Product";
import { deleteProduct, updateProduct } from "@/app/actions/product";
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
import { useState, useEffect } from "react";
import EditProduct from "./EditProduct";
import Image from "next/image";

interface Product {
  _id: string;
  title: string;
  description: string;
}

export default async function GetProducts() {
  try {
    const products = await Product.find();
    if (products.length === 0) {
      return (
        <h1 className="text-red-400 font-bold text-xl">You have no products</h1>
      );
    } else {
      return (
        <>
          <div className="w-full mt-8">
            <h1 className="text-4xl text-black text-center font-bold">
              Product Inventory
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-10">
              {products.map((product: any) => (
                <Card
                  className="h-auto rounded-lg w-[310px]"
                  key={product._id?.toString()}
                >
                  <div className="flex flex-col gap-2">
                    <CardHeader className="w-full px-4 text-left">
                      <CardTitle className="w-full text-sm">
                        <h3 className="text-xl text-center">
                          {product.title as string}
                        </h3>
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="mb-0">
                      <Image
                        src={product?.image_url}
                        alt="product"
                        width={225}
                        height={120}
                        className="w-[225px] h-[120px]"
                      />
                    </CardContent>
                  </div>
                  <p className="text-left leading-5 px-5 w-[225px] line-clamp-4">
                    {product.description as string}
                  </p>
                  <p className="text-left leading-5 px-5 w-[225px] line-clamp-4">
                    In stock: {product.in_stock as string}
                  </p>
                  <p className="text-left leading-5 px-5 w-[225px] line-clamp-4">
                    On sale: {product.sale as string}
                  </p>
                  <p className="text-left leading-5 px-5 w-[225px] line-clamp-4">
                    Roast level: {product.roast_level as string}
                  </p>
                  <p className="text-left leading-5 px-5 w-[225px] line-clamp-4">
                    Price: {product.price as string}
                  </p>
                  <p className="text-left leading-5 px-5 w-[225px] line-clamp-4">
                    Origin: {product.origin as string}
                  </p>
                  <p className="text-left leading-5 px-5 w-[225px] line-clamp-4">
                    Weight: {product.weight_oz as string} oz.
                  </p>
                  <div className="flex flex-row justify-between">
                 
                    <Link href={`/admin/products/${product._id}`}>
                      <Button className="border rounded px-2 bg-blue-400 ml-5">
                        Edit
                      </Button>
                    </Link>
                    {/* </form> */}
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
                </Card>
              ))}
            </div>
          </div>
        </>
      );
    }
  } catch (error) {
    console.log(error);
  }
}
