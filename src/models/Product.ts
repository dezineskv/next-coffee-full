import mongoose, { Document, Schema, Model, Types, isValidObjectId } from 'mongoose';

export interface IProductClient {
  _id: string;
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
}

export type IProduct = {
  _id: string;
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

const ProductSchema = new Schema<IProductClient>(
  {
    // id: { type: String },
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

const Product: Model<IProductClient> =
  mongoose.models?.Product || mongoose.model<IProductClient>('Product', ProductSchema);
export default Product;
