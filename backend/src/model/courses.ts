import { model, Schema, Document, InferSchemaType } from "mongoose";
import mongoose from "mongoose";

export type Course = InferSchemaType<typeof courseSchema>;

export const courseSchema: Schema = new Schema(
    {
        title: { type: String, required: true },
        description: { type: String, required: true },
        instructorName: { type: String, required: true },
        student: { type: [] }
    }
)
//function will be created after run mongoose.service.ts
export const CourseModel = () => model('Course', courseSchema);
