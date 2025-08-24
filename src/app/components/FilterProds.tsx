// app/products/page.tsx
'use client';

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
import '../globals.css';
import Header from './Header';
import Footer from './Footer';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { useState } from 'react';
import { getProductsByCategory } from '@/app/actions/product';
import Product, { IProduct } from '@/models/Product';

export default function FilterProducts() {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleFilter = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const filteredProducts = await getProductsByCategory(selectedCategory);
      setProducts(filteredProducts);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>          

      <div className="md:pl-24 py-5 w-screen border-b-2 border-gray-900">
        <h1>Filter Products by Category</h1>
        <form onSubmit={handleFilter}>
          <input
            type="text"
            placeholder="Enter Category"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          />
          <button type="submit" disabled={loading}>
            {loading ? 'Filtering...' : 'Filter'}
          </button>
        </form>

        {error && <p style={{ color: 'red' }}>{error}</p>}

        <h2>Filtered Products:</h2>
        {products.length === 0 && !loading && <p>No products found for this category.</p>}
        <ul>
          {products.map((product) => (
            <li key={product._id}>
              {product.title} - {product.category}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
