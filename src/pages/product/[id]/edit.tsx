    // // pages/products/[id]/edit.tsx
    // import { useState, useEffect } from 'react';
    // import { useRouter } from 'next/router';

    // interface Product {
    //   _id: string;
    //   name: string;
    //   description: string;
    // }

    // export default function EditProduct() {
    //   const router = useRouter();
    //   const { id } = router.query;
    //   const [product, setProduct] = useState<Product | null>(null);
    //   const [formData, setFormData] = useState({ title: '', description: '' });

    //   useEffect(() => {
    //     if (id) {
    //       fetch(`/api/product/${id}`)
    //         .then((res) => res.json())
    //         .then((data) => {
    //           if (data.success) {
    //             setProduct(data.data);
    //             setFormData({ title: data.data.title, description: data.data.description });
    //           }
    //         });
    //     }
    //   }, [id]);

    //   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    //     setFormData({ ...formData, [e.target.name]: e.target.value });
    //   };

    //   const handleSubmit = async (e: React.FormEvent) => {
    //     e.preventDefault();
    //     try {
    //       const res = await fetch(`/api/product/${id}`, {
    //         method: 'PATCH',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify(formData),
    //       });
    //       const data = await res.json();
    //       if (data.success) {
    //         router.push(`/products`); // Redirect to product details page or a success message
    //         console.log('Product updated successfully:', data.data);
    //       } else {
    //         console.error('Update failed:', data.error);
    //       }
    //     } catch (error) {
    //       console.error('Error updating product:', error);
    //     }
    //   };

    //   if (!product) return <div>Loading...</div>;

    //   return (
    //     <div>
    //       {/* <h1>Edit Product: {product.title}</h1> */}
    //       <form onSubmit={handleSubmit}>
    //         <label>
    //           Title:
    //           <input type="text" name="title" value={formData.title} onChange={handleChange} />
    //         </label>
    //         <label>
    //           Description:
    //           <textarea name="description" value={formData.description} onChange={handleChange} />
    //         </label>
    //         <button type="submit">Update product</button>
    //       </form>
    //     </div>
    //   );
    // }