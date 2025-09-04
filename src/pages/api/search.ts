import type { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI as string;
let client: MongoClient | null = null;

async function getClient() {
  if (!client) {
    client = new MongoClient(uri);
    await client.connect();
  }
  return client;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { q } = req.query;
    if (!q || typeof q !== 'string') {
      return res.status(400).json({ results: [] });
    }

    const client = await getClient();
    const db = client.db('products');
    const collection = db.collection('products');

    const results = await collection
      .find({ title: { $regex: q, $options: 'i' } })
      .limit(10)
      .toArray();

    res.status(200).json({ results });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
