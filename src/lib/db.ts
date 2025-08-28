import mongoose from 'mongoose';

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

export default connectDB;
