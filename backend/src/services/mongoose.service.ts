import * as argon2 from "argon2";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import { Request, Response } from "express";

import { userSchema } from "../model/user";

export const collections: { food?: mongoose.Collection, review?: mongoose.Collection } = {};

export async function connectToDatabase() {
  dotenv.config();

  try {
    await mongoose.connect(process.env.DB_CONN_STRING || "", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    

    console.log(`Successfully connected to MongoDB at ${process.env.DB_CONN_STRING}`);

    const db = mongoose.connection;

    const foodCollection = db.collection("food");
    collections.food = foodCollection;

    const reviewCollection = db.collection("review");
    collections.review = reviewCollection;

    console.log(`Successfully accessed collections: ${foodCollection.collectionName}, ${reviewCollection.collectionName}`);
  } catch (err) {
    console.error(`Error connecting to MongoDB: ${err}`);
    process.exit(1);
  }
}

async function hashPassword(pass: string): Promise<string> {
  // Hash the password
  const hash = await argon2.hash(pass);
  return hash;
}