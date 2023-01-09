import mongoose, { Collection } from "mongoose"
import * as mongoDB from "mongodb"
import * as dotenv from "dotenv"

export const connectToDatabase = async () => {
  dotenv.config();
  try {
    await mongoose.connect(process.env.DB_CONN_STRING ||""), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    };
    console.log('MongoDB connected...');
  } catch (err) {
    process.exit(1);
  }

  const client: mongoose.Connect(process.env.DB_CONN_STRING ||"")
  const db: mongoDB.Db = client.db(process.env.DB_NAME);



  Collection.course = coursecollection;
};