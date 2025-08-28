// 'use server'

import mongoose, { Document, Schema, Model } from 'mongoose';

export type IProduct = {
  _id?: any;
  id?: string; // optional or mapped
  title: string;
  description: string;
  image_url: string;
  origin: string;
  roast_level: string;
  price: string;
  weight_oz: string;
  in_stock: string;
  sale: string;
  category: string;
};

// export interface IProductDocument extends IProduct, Document {
//   createdAt: Date;
//   updatedAt: Date;
// }

const ProductSchema = new mongoose.Schema(
  {
    _id: { type: String },
    title: {
      type: String,
    },
    description: { type: String },
    image_url: { type: String },
    origin: { type: String },
    roast_level: { type: String },
    price: { type: String },
    weight_oz: { type: String },
    in_stock: { type: String },
    sale: { type: String },
    category: { type: String },
  },
  { timestamps: true }, // createdAt, updatedAt
);

const Product: Model<IProduct> =
  mongoose.models?.Product || mongoose.model<IProduct>('Product', ProductSchema);
export default Product;
