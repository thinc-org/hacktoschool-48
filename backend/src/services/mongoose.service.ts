// // External Dependencies
// import * as mongoDB from "mongodb";
// import * as dotenv from "dotenv";
// // Global Variables
// export const collections: { student?: mongoDB.Collection,teacher?: mongoDB.Collection,admin?:mongoDB.Collection, course?:mongoDB.Collection} = {}
// // Initialize Connection
// export async function connectToDatabase () {
//     dotenv.config();
 
//     const client: mongoDB.MongoClient = new mongoDB.MongoClient(process.env.DB_CONN_STRING ||"");
            
//     await client.connect();

//     //usercollection access
//     const db1: mongoDB.Db = client.db(process.env.DB_USER);
//    //student collection
//     const studentcollection: mongoDB.Collection = db1.collection("student");
 
//   collections.student = studentcollection;
//     //teacher collection
//     const teachercollection: mongoDB.Collection = db1.collection("teacher");
 
//   collections.teacher = teachercollection;
//     //admin collection
//     const admincollection: mongoDB.Collection = db1.collection("admin");
 
//   collections.admin = admincollection;
       
//          console.log(`Successfully connected to database: ${db1.databaseName}`);

//   //usercollection access
//   const db2: mongoDB.Db = client.db(process.env.DB_COURSE_NAME);
//  }

 // suggestion code from chatGPT
 // External Dependencies
import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";
import * as mongoose from "mongoose";
import { CourseModel } from "../model/courses";
import { UserModel } from "../model/user";

// Initialize Connection
async function _connectToDatabase() {
  dotenv.config();
  try {
    // Validate environment variables
    if (!process.env.DB_CONN_STRING) {
      throw new Error("Missing DB_CONN_STRING environment variable");
    }
    if (!process.env.DB_NAME) {
      throw new Error("Missing DB_NAME environment variable");
    }
    if (!process.env.DB_COURSE_NAME) {
      throw new Error("Missing DB_COURSE_NAME environment variable");
    }

    // Connect to the database
    const connection: mongoose.Connection = await mongoose.createConnection(process.env.DB_CONN_STRING, {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
      dbName: process.env.DB_NAME
    });

    // Connect to the course database
    const courseConnection: mongoose.Connection = await mongoose.createConnection(process.env.DB_CONN_STRING, {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
      dbName: process.env.DB_COURSE_NAME
    });

    // Initialize collections
    const collections = {
      user: UserModel(),
      course: CourseModel(),

    };

    console.log(`Successfully connected to database: ${connection.name}`);
    console.log(`Successfully connected to database: ${courseConnection.name}`);

    return collections;
  } catch (error) {
    console.error(error);
  }
}

export let collections: Awaited<ReturnType<typeof _connectToDatabase>> | undefined = undefined;

export const connectToDatabase = async () => {
  collections = await _connectToDatabase();
}


/*{
  title: String,
  description: String,
  instruction: String,
  student: [],
student: courseConnection.model("student", new mongoose.Schema({
  email: String,
  password: String,
  name: String,
  surname: String,
  id: String,
  courses: [],
  role: String,
})),
teacher: courseConnection.model("teacher", new mongoose.Schema({
  title: String,
  description: String,
  instruction: String,
  student: [],
})),
}*/