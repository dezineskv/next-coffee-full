"use client";
import { TTodo } from "../types";
import axios from "axios";
import { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Testimonials from "./Testimonials";
import ReactStars from "react-stars";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";

const SingleProduct = ({ id }: { id: number }) => {
  const [singleTodo, setSingleTodo] = useState<TTodo>();

  const fetchTodo = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/products/${id}`);
      setSingleTodo(res.data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchTodo();
  }, [id]);
  console.log(singleTodo);

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
        Product Details
      </h2>
      <div className="flex flex-col justify-center gap-3 mx-auto w-11/12 mt-20 mb-10 pb-10 h-full">
        <div className="card card-side bg-base-100 shadow-sm max-w-10/12 px-4 py-4 mx-auto text-center h-full">
          <div className="flex flex-col md:flex-row justify-center  gap-3">
            <figure className="max-w-[480px] mx-auto">
              <img
                src={singleTodo?.image_url}
                alt="Product Image"
                width={400}
                height={300}
              />
            </figure>
            <div className="card-body my-10 w-[300px] text-left ml-6 mt-0">
              <h2 className="text-2xl font-bold mb-6">{singleTodo?.name}</h2>
              <p>
                <span className="font-bold text-gray-700">
                  Product Description:&nbsp;</span> 
                 {singleTodo?.description}
              </p>
              <p>
                <span className="font-bold text-gray-700">Origin: </span>
                {singleTodo?.origin}
              </p>
              <p>
                <span className="font-bold text-gray-700">Roast Level: </span>
                {singleTodo?.roast_level}
              </p>
              <p>
                <span className="font-bold text-gray-700">Weight: </span>
                {singleTodo?.weight_oz} oz.
              </p>
              <p>
                <span className="font-bold text-gray-700">Product ID: </span>
                {singleTodo?.id}
              </p>
            </div>
            <div className="card-actions mt-auto flex flex-row justify-between items-end">
              <h3 className="font-bold text-3xl mr-4">${singleTodo?.price}</h3>
              <Button className="btn btn-primary">Buy Now</Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center mx-auto text-center mt-8">
          <p className="font-bold">Rate this product</p>
          <ReactStars count={5} size={24} color2={"#ffd700"} />
        </div>
      </div>
      <Testimonials />
      <Footer />
    </>
  );
};

export default SingleProduct;
