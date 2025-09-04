import mongoose from 'mongoose';
import { MongoClient, MongoClientOptions } from 'mongodb';

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

const connectDB = async () => {
  const connectUrl = process.env.MONGODB_URI;
  mongoose
    .connect(connectUrl!)
    .then(() => console.log('Database Connected Successfully'))
    .catch((e) => console.log(e));
};




// const uri = process.env.MONGODB_URI;
// const options: MongoClientOptions = {};

// let client;
// let clientPromise: Promise<MongoClient>;

// if (process.env.NODE_ENV === 'development') {
//   // In development mode, use a cached connection to prevent creating new connections on hot-reloads
//   let globalWithMongo = global as typeof globalThis & {
//     _mongoClientPromise?: Promise<MongoClient>;
//   };

//   if (!globalWithMongo._mongoClientPromise) {
//     client = new MongoClient(uri, options);
//     globalWithMongo._mongoClientPromise = client.connect();
//   }
//   clientPromise = globalWithMongo._mongoClientPromise;
// } else {
//   // In production mode, connect to the database directly
//   client = new MongoClient(uri, options);
//   clientPromise = client.connect();
// }

// Export a module-scoped MongoClient promise
export default connectDB;
