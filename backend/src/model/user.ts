import { model, Schema, Model, Document, InferSchemaType } from "mongoose";
import mongoose from "mongoose";

export type User = InferSchemaType<typeof userSchema>;

export const userSchema: Schema = new Schema(
    {
        email: { type: String, required: true },
        passwordHash: { type: String, required: true },
        name: { type: String, required: true },
        surname: { type: String, required: true },
        id: { type: String, required: true },
        courses: { type: [], required: true },

    }
)

export const UserModel = mongoose.model('User', userSchema);