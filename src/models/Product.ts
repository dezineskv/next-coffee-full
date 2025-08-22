// 'use server'

import mongoose, { Document, Schema, Model } from 'mongoose';

export type IProduct = {
  title: string;
  description: string;
  image_url: string;
  origin: string;
  roast_level: string;
  price: string;
  weight_oz: string;
  in_stock: string;
  sale: string;
};

export interface IProductDocument extends IProduct, Document {
  createdAt: Date;
  updatedAt: Date;
}

const ProductSchema = new mongoose.Schema(
  {
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
  },
  { timestamps: true }, // createdAt, updatedAt
);

const Product: Model<IProductDocument> =
  mongoose.models?.Product || mongoose.model<IProductDocument>('Product', ProductSchema);
export default Product;
