"use server";
import Product from "../models/Product";
import { Document, Model, Types } from "mongoose";
import { revalidatePath } from "next/cache";
import { connectToMongoDB } from "../lib/db";

//create new products
export const createProducts = async (formData: FormData) => {
  await connectToMongoDB();
  // Extracting Product content and time from formData
  const product = formData.get("product");
  const title = formData.get("title");
  const description = formData.get("description");
  const image_url = formData.get("image_url");
  try {
    // Creating a new product using Product model
    const newProduct = await Product.create({
      product,
      title,
      description,
      image_url,
      // origin,
      // roast_level,
      // price,
      // weight_oz,
      // in_stock,
      // sale,
    });
    // Saving the new product
    newProduct.save();
    // Triggering revalidation of the specified path ("/")
    revalidatePath("/");
    // Returning the string representation of the new product
    return newProduct.toString();
  } catch (error) {
    console.log(error);
    return { message: "error creating product" };
  }
};
// delete product
export const deleteProduct = async (id: FormData) => {
  // Extracting Product ID from formData
  const productId = id.get("id");
  try {
    // Deleting the Product with the specified ID
    await Product.deleteOne({ _id: productId });
    // Triggering revalidation of the specified path ("/")
    revalidatePath("/");
    // Returning a success message after deleting the product
    return "product deleted";
  } catch (error) {
    // Returning an error message if product deletion fails
    return { message: "error deleting product" };
  }
};
// get all products
export const getAllProducts = async (formData: FormData) => {
  await connectToMongoDB();

  try {
    const products = await Product.find().sort({ createdAt: -1 }); // -1 sorts in descending order (newest first)
    // Triggering revalidation of the specified path ("/")
    revalidatePath("/");
    // Returning the string representation
    return products.toString();
  } catch (error) {
    console.log(error);
    return { message: "error getting products" };
  }
};
