import express from "express"
import mongoose from "mongoose"
import cors from "cors"

import { connectToDatabase } from "./services/mongoose.service"
import { router } from "./routes/hacktoschool.routes"

const app = express();
const port = 3000;

app.use(cors())
app.use(express.json())

connectToDatabase()
    .then(() => {
        app.use("/", router);

        app.listen(port, () => {
            console.log(`Server started at http://localhost:${port}`);
        });
    })
    .catch((error: Error) => {
        console.error("Database connection failed", error);
        process.exit();
    });