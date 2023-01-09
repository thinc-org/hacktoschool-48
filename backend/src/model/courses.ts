import { model, Schema, Document, InferSchemaType } from "mongoose";
import mongoose from "mongoose";

export type Course = InferSchemaType<typeof courseSchema>;

export const courseSchema: Schema = new Schema(
    {
        title: { type: String, required: true },
        description: { type: String, required: true },
        instructorName: { type: String, required: true },
    }
)

export const CourseModel = model('Course', courseSchema);
