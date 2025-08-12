'use client'

import Product from "@/models/Product";
import { connectToMongoDB } from "@/lib/db";

// export default async function handler(req, res) {
//   await connectToMongoDB();
//   const { id } = req.query;
//   const product = await Product.findById(id);
//   res.status(200).json(product);
// }
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function ProductsPage() {
  const router = useRouter();
//   const { id } = router.query;

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // if (!id) return; 
    // wait for router to be ready

    const fetchProducts = async () => {
      try {
        const res = await fetch(`/api/product`); // Use your API route
        const data = await res.json();
        setProduct(data);
        console.log(data.product);
      } catch (err) {
        console.error('Error fetching products:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (!products) return <p>Product not found.</p>;

  return (
    <div>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
    </div>
  );
}
