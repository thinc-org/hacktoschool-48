import { model, Schema, Model, Document, InferSchemaType } from "mongoose";
import mongoose from "mongoose";

export type User = InferSchemaType<typeof userSchema>;

export const userSchema: Schema = new Schema(
    {
        email: { type: String },
        passwordHash: { type: [] },
        name: { type: String },
        surname: { type: String },
        id: { type: String },
        courses: {type: []},

    }
)

export const UserModel = mongoose.model('User', userSchema);