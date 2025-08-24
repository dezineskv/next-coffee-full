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
import '@/app/globals.css';

import Product from '@/models/Product';
import { getAllProducts, deleteProduct, getProductById } from '@/app/actions/product';
import Image from 'next/image';

export default async function Products() {
  try {
    const products = await Product.find();
    if (products.length === 0) {
      return <h1 className="text-xl font-bold text-red-400">You have no products</h1>;
    } else {
      return (
        <>
          <div className="my-5 w-full bg-slate-200">
            <div className="my-container flex flex-col justify-center gap-6 py-12">
              <h1 className="text-center text-4xl font-bold">Admin</h1>
              <p className="text-center">Update product(s)</p>
              {/* start cards */}
              <div className="flex flex-col flex-wrap items-center justify-center gap-4 py-10 md:flex-row">
                {/* map through data */}
                {/* out-of-stock condition */}
                {products.map((product: any) => (
                  <div key={product._id?.toString()}>
                    <Card className="h-auto w-[310px] rounded-lg">
                      <div className="flex flex-col gap-2">
                        <CardHeader className="w-full px-4 text-left">
                          <CardTitle className="w-full text-sm">
                            <h3 className="text-left text-xl">{product.title as string}</h3>
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="mb-0">
                          <Image
                            src={
                              (product?.image_url as string) ||
                              'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/800px-Placeholder_view_vector.svg.png'
                            }
                            alt="product"
                            width={225}
                            height={120}
                            className="h-[120px] w-[225px]"
                          />
                        </CardContent>
                      </div>
                      <p className="line-clamp-4 w-full px-5 text-left leading-5">
                        {product?.description as string}
                      </p>
                      <p className="line-clamp-4 w-[225px] px-5 text-left leading-5">
                        In stock: {product?.in_stock as string}
                      </p>
                      <p className="line-clamp-4 w-[225px] px-5 text-left leading-5">
                        On sale: {product?.sale as string}
                      </p>
                      <p className="line-clamp-4 w-[225px] px-5 text-left leading-5">
                        Roast level: {product?.roast_level as string}
                      </p>
                      <p className="line-clamp-4 w-[225px] px-5 text-left leading-5">
                        Price: {product.price as string}
                      </p>
                      <p className="line-clamp-4 w-[225px] px-5 text-left leading-5">
                        Origin: {product?.origin as string}
                      </p>
                      <p className="line-clamp-4 w-[225px] px-5 text-left leading-5">
                        Weight: {product?.weight_oz as string} oz.
                      </p>
                      <p className="line-clamp-4 w-[225px] px-5 text-left leading-5">
                        Category: {product?.category as string} oz.
                      </p>
                      <div className="flex flex-row justify-between">
                        {/* link to edit form */}
                        <Link href={`/admin/products/${product._id}`}>
                          <Button className="ml-5 w-20 rounded border bg-blue-400 px-2">
                            Edit
                          </Button>
                        </Link>
                        {/* delete form */}
                        <form
                          className="flex justify-end pr-5"
                          action={async (formData: FormData) => {
                            'use server';
                            await deleteProduct(formData);
                          }}
                        >
                          <input
                            hidden
                            type="text"
                            name="id"
                            defaultValue={product._id.toString()}
                          />
                          <Button className="w-20 rounded border bg-red-400 px-2">delete</Button>
                        </form>
                      </div>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      );
    }
  } catch (error) {
    console.log(error);
  }
}
