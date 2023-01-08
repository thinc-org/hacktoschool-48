import mongoose from "mongoose"
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
    console.error(err.message);
    process.exit(1);
  }
};