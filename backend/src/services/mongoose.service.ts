// External Dependencies
import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";
// Global Variables
export const collections: { student?: mongoDB.Collection,teacher?: mongoDB.Collection,admin?:mongoDB.Collection } = {}
// Initialize Connection
export async function connectToDatabase () {
    dotenv.config();
 
    const client: mongoDB.MongoClient = new mongoDB.MongoClient(process.env.DB_CONN_STRING ||"");
            
    await client.connect();

    //usercollection access
    const db1: mongoDB.Db = client.db(process.env.DB_USER);
   //student collection
    const studentcollection: mongoDB.Collection = db1.collection("student");
 
  collections.student = studentcollection;
    //teacher collection
    const teachercollection: mongoDB.Collection = db1.collection("teacher");
 
  collections.teacher = teachercollection;
    //admin collection
    const admincollection: mongoDB.Collection = db1.collection("admin");
 
  collections.admin = admincollection;
       
         console.log(`Successfully connected to database: ${db1.databaseName}`);
 }