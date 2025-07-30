"use client";
import { TProduct } from "../types";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const api = axios.create({
  baseURL: "https://coffeeshop-back.onrender.com/api/data/",
});

const SingleProduct = ({ id }: { id: string }) => {
  const [singleProduct, setSingleProduct] = useState<TProduct>();

  // const ratingChanged = (newRating) => {
  //   console.log(newRating);
  // };
  const fetchProduct = async () => {
    try {
      const res = await axios.get(
        `https://coffeeshop-back.onrender.com/api/data/${id}`
      );
      setSingleProduct(res.data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

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
      <div className="flex flex-col justify-center gap-3 mx-auto w-full mt-20 mb-10 pb-10 h-full">
        <div className="card card-side bg-base-100 px-4 py-4 mx-auto text-center h-full">
          <div className="flex flex-col md:flex-row justify-center  gap-3">
            <figure className="max-w-[480px] mx-auto">
              <img
                src={singleProduct?.image_url}
                alt="Product Image"
                width={400}
                height={300}
              />
            </figure>
            <div className="card-body my-10 w-[300px] text-left ml-6 mt-0">
              <h2 className="text-2xl font-bold mb-6">
                {singleProduct?.title}
              </h2>
              <p>
                <span className="font-bold text-gray-700">
                  Product Description:&nbsp;
                </span>
                {singleProduct?.description}
              </p>
              <p>
                <span className="font-bold text-gray-700">Origin: </span>
                {singleProduct?.origin}
              </p>
              <p>
                <span className="font-bold text-gray-700">Roast Level: </span>
                {singleProduct?.roast_level}
              </p>
              <p>
                <span className="font-bold text-gray-700">Weight: </span>
                {singleProduct?.weight_oz} oz.
              </p>
              <p>
                <span className="font-bold text-gray-700">Product ID: </span>
                {singleProduct?._id}
              </p>
            </div>
            <div className="card-actions mt-auto flex flex-row justify-between items-end">
              <h3 className="font-bold text-3xl mr-4">
                {singleProduct?.price}
              </h3>
              <Button className="btn btn-primary">Buy Now</Button>
            </div>
          </div>
        </div>

        <div className="mx-auto">
          <Accordion
            type="single"
            collapsible
            className="w-full px-30 mt-10"
            defaultValue="item-1"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger>Product Information</AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>
                  Our flagship product combines cutting-edge technology with
                  sleek design. Built with premium materials, it offers
                  unparalleled performance and reliability.
                </p>
                <p>
                  Key features include advanced processing capabilities, and an
                  intuitive user interface designed for both beginners and
                  experts.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Shipping Details</AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>
                  We offer worldwide shipping through trusted courier partners.
                  Standard delivery takes 3-5 business days, while express
                  shipping ensures delivery within 1-2 business days.
                </p>
                <p>
                  All orders are carefully packaged and fully insured. Track
                  your shipment in real-time through our dedicated tracking
                  portal.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Return Policy</AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>
                  We stand behind our products with a comprehensive 30-day
                  return policy. If you&apos;re not completely satisfied, simply
                  return the item in its original condition.
                </p>
                <p>
                  Our hassle-free return process includes free return shipping
                  and full refunds processed within 48 hours of receiving the
                  returned item.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="flex flex-col justify-center mx-auto text-center mt-8">
          <p className="font-bold">Rate this product</p>
          <ReactStars
            className="ml-4"
            count={5}
            // onChange={ratingChanged}
            size={24}
            color2={"#ffd700"}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SingleProduct;
