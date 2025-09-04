'use server';

import connectDB from '@/lib/db';
import Product, { IProduct } from '@/models/Product';
import { Types } from 'mongoose';
import { revalidatePath } from 'next/cache';
import { TProduct } from '@/types';
import { ToastContainer, toast } from 'react-toastify';

// get all products
export const getAllProducts = async (formData: FormData) => {
  await connectDB();
  // sort products by time created most recent last
  try {
    const products = await Product.find().sort({ createdAt: -1 }); // -1 sorts in descending order (newest first)
    // Triggering revalidation of the specified path
    revalidatePath('/');
    // Returning the string representations
    return products.toString();
  } catch (error) {
    console.log(error);
    return { message: 'error getting products' };
  }
};

// get single product
export async function getProductById(id: string): Promise<IProduct | null> {
  await connectDB();
  try {
    if (!Types.ObjectId.isValid(id)) {
      throw new Error('Invalid product ID');
    }

    const product = await Product.findById(id);
    if (!product) {
      throw new Error('Product not found');
    }

    return product.toObject();
  } catch (error) {
    console.error('Error finding product by ID:', error);
    return null;
  }
}

// edit single product
export async function updateProduct(
  id: string,
  updates: Partial<{
    title: string;
    description: string;
    image_url: string;
    price: string;
    sale: string;
    weight_oz: string;
    origin: string;
    in_stock: string;
    roast_level: string;
    category: string;
  }>,
) {
  await connectDB();

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
  const productId = id.get('id');
  try {
    // Deleting the Product with the specified ID
    await Product.deleteOne({ _id: productId });
    // Triggering revalidation of the specified path
    revalidatePath('/');
    // Returning a success message after deleting the product
    return { success: true, message: 'Item deleted successfully!' };
  } catch (error) {
    return { success: false, message: 'Error deleting item' };
  }
};

// export async function DELETE(request: NextRequest) {
//   const id = request.nextUrl.searchParams.get('id');
//   await EmailModel.findByIdAndDelete(id);
//   return NextResponse.json({ success: true, msg: 'Email deleted' });
// }

//create new products
export const createProducts = async (formData: FormData) => {
  await connectDB();
  // Extracting Product content from formData
  const product = formData.get('product');
  const title = formData.get('title');
  const description = formData.get('description');
  const image_url = formData.get('image_url');
  const roast_level = formData.get('roast_level');
  const price = formData.get('price');
  const origin = formData.get('origin');
  const weight_oz = formData.get('weight_oz');
  const in_stock = formData.get('in_stock');
  const sale = formData.get('sale');
  const category = formData.get('category');

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
      category,
    });
    // Saving the new product
    newProduct.save();
    // Triggering revalidation of the specified path
    revalidatePath('/');
    // Returning the string representation of the new product

    return newProduct.toString();
    //fix for toast message
  } catch (error) {
    console.log(error);
    return { success: false, message: 'error creating product' };
  }
};

// get products by getProductsByCategory
export async function getProductsByCategory(category: string): Promise<IProduct[]> {
  try {
    await connectDB(); // Establish connection
    const products = await Product.find({ category: category }).lean();
    return JSON.parse(JSON.stringify(products)); // Serialize for client-side
  } catch (error) {
    console.error('Error fetching products by category:', error);
    throw new Error('Failed to fetch products.');
  }
}
