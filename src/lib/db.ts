'use server';
import mongoose from 'mongoose';

const MONGODB_URI: string | undefined = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable');
}

let cachedMongooseConnection: mongoose.Connection | null = null;

async function connectToMongoDB(): Promise<mongoose.Connection> {
  if (cachedMongooseConnection) {
    console.log('connected to cached MongoDB connection');
    return cachedMongooseConnection;
  }

  const conn = await mongoose.connect(MONGODB_URI as string);
  cachedMongooseConnection = conn.connection;
  console.log('connected to MongoDB as string');

  return cachedMongooseConnection;
}

export default connectToMongoDB;
