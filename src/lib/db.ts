"use server";

import mongoose from "mongoose";

let isConnected = false;

export async function connectToMongoDB() {
  if (isConnected) {
    console.log("✅ MongoDB already connected");
    return;
  }

  try {
    const mongoUri = process.env.MONGODB_URI;
    if (!mongoUri) {
      throw new Error("MONGODB_URI environment variable is not defined");
    }
    await mongoose.connect(mongoUri);
    isConnected = true;
    console.log("🚀 MongoDB connection established");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    throw new Error("Failed to connect to MongoDB");
  }
}
