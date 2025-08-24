// app/products/page.tsx
'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import '../globals.css';
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
      <div className="w-6xl border-b-2 border-gray-600 py-5 md:px-24">
        <h1 className="mb-4 text-xl">Filter Products by Category</h1>
        <form onSubmit={handleFilter}>
          <input
            type="text"
            placeholder="Enter Category"
            className="border-gray mr-4 pr-10 border-1"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          />
          <Button type="submit" disabled={loading}>
            {loading ? 'Filtering...' : 'Filter'}
          </Button>
        </form>

        {error && <p style={{ color: 'red' }}>{error}</p>}
        <div className="flex flex-col">
          <h1 className="mb-4 text-lg">Results:</h1>
          {products.length === 0 && !loading && (
            <p className="text-gray">No products found for this category. Try filtering.</p>
          )}
        </div>
        <ul>
          {products.map((product) => (
            <li key={product._id} className="font-bold">
              <Link href={`/products/${product._id}`}>
                {product.title} - {product.category}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
