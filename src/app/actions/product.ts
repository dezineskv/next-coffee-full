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
// get single product
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
// edit single product
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

// delete product
export const deleteProduct = async (id: FormData) => {
  // Extracting Product ID from formData
  const productId = id.get("id");
  try {
    // Deleting the Product with the specified ID
    await Product.deleteOne({ _id: productId });
    // Triggering revalidation of the specified path
    revalidatePath("/");
    // Returning a success message after deleting the product
    return "Product deleted";
  } catch (error) {
    // Returning an error message if product deletion fails
    return { message: "error deleting product" };
  }
};

//create new products
export const createProducts = async (formData: FormData) => {
  await connectToMongoDB();
  // Extracting Product content from formData
  const product = formData.get("product");
  const title = formData.get("title");
  const description = formData.get("description");
  const image_url = formData.get("image_url");
  const roast_level = formData.get("roast_level");
  const price = formData.get("price");
  const origin = formData.get("origin");
  const weight_oz = formData.get("weight_oz");
  const in_stock = formData.get("in_stock");
  const sale = formData.get("sale");

  try {
    // Creating a new product using Product model & saving to var
    const newProduct = await Product.create({
      product,
      title,
      description,
      image_url,
      roast_level,
      price,
      origin,
      weight_oz,
      in_stock,
      sale,
    });
    // Saving the new product
    newProduct.save();
    // Triggering revalidation of the specified path
    revalidatePath("/");
    // Returning the string representation of the new product
    return newProduct.toString();
  } catch (error) {
    console.log(error);
    return { message: "error creating product" };
  }
};
