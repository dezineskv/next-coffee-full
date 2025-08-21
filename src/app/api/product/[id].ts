import { NextApiRequest, NextApiResponse } from 'next';
import clientPromise, { connectToMongoDB } from '@/lib/db';
import Product, { IProduct } from '@/models/Product';
import { ObjectId } from 'mongodb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const client = await clientPromise;
  const db = client.db('products');
  const { id } = req.query;

  if (req.method === 'GET') {
    try {
      const product = await db.collection('products').findOne({ _id: new ObjectId(id as string) });
      if (!product) return res.status(404).json({ error: 'Product not found' });
      return res.status(200).json({ data: product });
    } catch (err) {
      return res.status(500).json({ error: 'Failed to fetch product' });
    }
  }

  if (req.method === 'PATCH') {
    try {
      const updated = await db.collection('products').updateOne(
        { _id: new ObjectId(id as string) },
        { $set: req.body }
      );
      return res.status(200).json({ message: 'Product updated' });
      console.log('Product updated:', updated);
    } catch (err) {
      return res.status(500).json({ error: 'Failed to update product' });
      console.log(err);
    }
  }

  return res.status(405).json({ error: 'Method Not Allowed' });
}
