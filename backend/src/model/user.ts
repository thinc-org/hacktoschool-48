import { model, Schema, Model, Document } from "mongoose";
import mongoose from "mongoose";

const userSchema: Schema = new Schema(
    {
        email: { type: String, required: true },
        password: { type: String, required: true },
        name: { type: String, required: true },
        surname: { type: String, required: true },
        id: { type: String, required: true },
        courses: { type: [], required: true },
    }
)

const User = mongoose.model('User', userSchema);

module.exports = User;