import { model, Schema, Model, Document, InferSchemaType } from "mongoose";
import mongoose from "mongoose";

export type User = InferSchemaType<typeof userSchema>;

export const userSchema = new Schema(
    {
        email: { type: String },
        passwordHash: { type: String, required: true },
        name: { type: String },
        surname: { type: String },
        id: { type: String, required: true },
        courses: {type: []},
        role: {type: String},

    }
)

export const UserModel = () => mongoose.model('User', userSchema);