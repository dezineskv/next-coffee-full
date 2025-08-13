"use client";

import { TProduct } from "../types";
// import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Button } from "@/components/ui/button";
import ReactStars from "react-stars";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Product from "@/models/Product";
import { getSingleProduct } from "@/lib/actions";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import { connectToMongoDB } from "@/lib/db";
import { usePathname } from "next/navigation";

interface Product {
  id: string;
}

const SingleProduct: React.FC<Product> = ({ id }) => {
  const [product, setProduct] = useState<TProduct | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await fetch(`https://next-coffee-full.vercel.app/api/product/${id}`); // Use your API route
        if (!response.ok) {
          throw new Error("Failed to fetch item");
        }
        const data: TProduct = await response.json();
        setProduct(data);
        console.log(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchItem();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!product) return <div>Item not found.</div>;

  return (
    <div>
      <h1>{product.title} here</h1>
      <p>{product.description}</p>
    </div>
  );
};

export default SingleProduct;
