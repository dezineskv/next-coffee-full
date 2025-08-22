'use server';

import connectToMongoDB from '@/lib/db';
import Product from '@/models/Product';
import { Types } from 'mongoose';
import { revalidatePath } from 'next/cache';

// get all products
export const getAllProducts = async (formData: FormData) => {
  await connectToMongoDB();
  // sort products by time created most recent last
  try {
    const products = await Product.find().sort({ createdAt: -1 }); // -1 sorts in descending order (newest first)
    // Triggering revalidation of the specified path
    revalidatePath("/");
    // Returning the string representations
    return products.toString();
  } catch (error) {
    console.log(error);
    return { message: "error getting products" };
  }
};

export async function getProductById(id: string) {
  await connectToMongoDB();

  if (!Types.ObjectId.isValid(id)) {
    throw new Error('Invalid product ID');
  }

  const product = await Product.findById(id);
  if (!product) {
    throw new Error('Product not found');
  }

  return JSON.parse(JSON.stringify(product)); // to make it serializable
}

export async function updateProduct(id: string, updates: Partial<{ title: string; description: string }>) {
  await connectToMongoDB();

  if (!Types.ObjectId.isValid(id)) {
    throw new Error('Invalid product ID');
  }

  const updated = await Product.findByIdAndUpdate(id, updates, { new: true });
  if (!updated) {
    throw new Error('Product not found or update failed');
  }

  return JSON.parse(JSON.stringify(updated));
}