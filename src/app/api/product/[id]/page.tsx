"use client";

import Product from "@/models/Product";
import { connectToMongoDB } from "@/lib/db";

// export default async function handler(req, res) {
//   await connectToMongoDB();
//   const { id } = req.query;
//   const product = await Product.findById(id);
//   res.status(200).json(product);
// }
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

type ProductType = {
  title: string;
  description: string;
  // add other fields as needed
};

export default function ProductPage() {
  const router = useRouter();
  const { id } = router.query;

  const [product, setProduct] = useState<ProductType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return; // wait for router to be ready

    const fetchProduct = async () => {
      try {
        const res = await fetch(`/api/product/${id}`);
        const data = await res.json();
        setProduct(data.data.product);
        console.log(data.data.product);
      } catch (err) {
        console.error("Error fetching product:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!product) return <p>Product not found.</p>;

  return (
    <div>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
    </div>
  );
}
