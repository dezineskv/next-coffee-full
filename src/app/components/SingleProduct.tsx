"use client";

// import Product from "@/models/Product";
// import { connectToMongoDB } from "@/lib/db";
import Header from "../../app/components/Header";
import Footer from "../../app/components/Footer";
import DetailAccordion from "../../app/components/DetailAccordion";
import RatingProduct from "../../app/components/RatingProduct";
import { Button } from "@/components/ui/button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";

type ProductType = {
  _id?: string;
  title: string;
  description: string;
  image_url: string;
  origin: string;
  roast_level: string;
  price: string;
  weight_oz: string;
  in_stock: string;
  sale: string;
};

export default function SingleProduct({ id }: { id: string }) {
  const [product, setProduct] = useState<ProductType | null>(null);
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    if (id) {
      fetch(`/products/${id}`)
        .then((res) => {
          if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
          return res.json();
        })
        .then((data) => setProduct(data.data))
        .catch((err) => console.error("Error fetching product:", err));
    }
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!product) return <p>Product not found.</p>;

  // single product detail page
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

      <h2 className="mx-auto text-center pt-5 text-3xl font-bold header">
        {product.title}
      </h2>
      <div className="flex flex-col justify-center gap-3 mx-auto w-full mt-8 mb-10 pb-10 h-full">
        <div className="card card-side bg-base-100 px-4 py-4 mx-auto text-center h-full">
          <div className="flex flex-col md:flex-row justify-center  gap-3">
            <div className="flex flex-col">
              <Image
                src={product?.image_url || "/placeholder.png"}
                alt="Product Image"
                width={400}
                height={300}
                className="w-auto h-auto"
                priority
              />

              <div className="text-left">Small | Medium | Large</div>
            </div>
            <div className="card-body my-10 w-[300px] text-left ml-6 mt-0">
              <p>
                <span className="font-bold text-gray-700">
                  Product Description:&nbsp;
                </span>
                {product?.description}
              </p>
              <p>
                <span className="font-bold text-gray-700">Origin: </span>
                {product?.origin}
              </p>
              <p>
                <span className="font-bold text-gray-700">Roast Level: </span>
                {product?.roast_level}
              </p>
              <p>
                <span className="font-bold text-gray-700">Weight: </span>
                {product?.weight_oz} oz.
              </p>
              <p>
                <span className="font-bold text-gray-700">Product ID: </span>
                {product?._id}
              </p>
              <div className="card-actions flex flex-row justify-between items-center mt-6">
                <h3 className="font-bold text-3xl mr-4">{product?.price}</h3>
                <Button className="btn btn-primary">Buy Now</Button>
              </div>
            </div>
          </div>
        </div>
        {/* accordion */}
        <DetailAccordion />
        {/* rating */}
        <RatingProduct />
      </div>
      <Footer />
    </>
  );
}
