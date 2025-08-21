"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { editProduct } from "../../lib/actions"; // This is a server action
import { useTransition } from "react";

const EditProducts = ({ id }: { id: string }) => {
  const router = useRouter();
  const [product, setProduct] = useState({ title: "", description: "" });
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch(`/api/product/${id}`); // You can replace this with a server action too
      const data = await res.json();
      if (data.success) {
        setProduct(data.data);
      }
    };

    if (id) fetchProduct();
  }, [id]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    startTransition(async () => {
      const result = await editProduct(id, product);
      if (result.success) {
        router.push(`/product/${id}`);
      } else {
        alert(result.error || "Failed to update product");
      }
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title</label>
        <input
          type="text"
          name="title"
          value={product.title}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Description</label>
        <textarea
          name="description"
          value={product.description}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" disabled={isPending}>
        {isPending ? "Updating..." : "Update Product"}
      </button>
    </form>
  );
};

export default EditProducts;
