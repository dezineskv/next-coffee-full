"use server";
import Product from "../models/Product";
import { Document, Model, Types } from "mongoose";
import { revalidatePath } from "next/cache";
import { connectToMongoDB } from "../lib/db";
import { stringToObjectId } from "./utils";

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
// get single product by id
export const getSingleProduct = async (id: string) => {
  try {
    await connectToMongoDB();
    const parsedId = stringToObjectId(id);

    if (!parsedId) {
      return { error: "Product not found" };
    }
    const product = await Product.findById(parsedId).lean().exec();
    if (product) {
      return {
        product,
      };
    } else {
      return { error: "product not found" };
    }
  } catch (error) {
    return { error };
  }
};
//update/patch product
export const editProduct = async (
  id: string,
  updateData: { title: string; description: string }
) => {
  await connectToMongoDB();

  try {
    const parsedId = stringToObjectId(id);

    const updatedProduct = await Product.findByIdAndUpdate(
      parsedId,
      { $set: updateData },
      { new: true }
    );

    if (!updatedProduct) {
      return { success: false, error: "Product not found" };
    }

    return { success: true, data: updatedProduct };
  } catch (error) {
    console.error("Error updating product:", error);
    return { success: false, error: "Error updating product" };
  }
};
