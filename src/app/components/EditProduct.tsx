// pages/products/[id]/edit.tsx (Pages Router Example)
'use client'
import { useState, useEffect } from 'react';
// import { useRouter } from 'next/router';

interface Product {
  _id: string;
  title: string;
  description: string;
}

export default function EditProduct({ id }: { id: string }) {
//   const router = useRouter();
    // const . = params.id;
  const [product, setProduct] = useState<Product | null>(null);
  const [formData, setFormData] = useState({ title: '', description: '' });

  useEffect(() => {
    if (id) {
      fetch(`/api/product/${id}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            setProduct(data.data);
            setFormData({ title: data.data.title, description: data.data.description });
          }
        });
    }
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch(`/api/product/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    // if (..success) {
    //   router.push(`/products/${.}`); // Redirect to product details page
    // } else {
    //   .('Error updating product');
    // }
  };

  if (!product) return <div>Loading...</div>;

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" value={formData.title} onChange={handleChange} />
      <input type="email" name="description" value={formData.description} onChange={handleChange} />
      <button type="submit">Save Changes</button>
    </form>
  );
}