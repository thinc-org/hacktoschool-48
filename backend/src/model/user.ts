import mongoose from "mongoose";

export type User = mongoose.InferSchemaType<typeof userSchema>;

const userSchema = new mongoose.Schema(
    {
        email: { type: String, required: true },
        passwordHash: { type: String, required: true },
        name: { type: String, required: true },
        surname: { type: String, required: true },
        courses: {type: []},
        role: {type: String, enum: ["instructor", "student"], required: true}

    }
)

export const UserModel = mongoose.model('User', userSchema);