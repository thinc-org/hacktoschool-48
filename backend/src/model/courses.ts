import mongoose from "mongoose";

export type Course = mongoose.InferSchemaType<typeof courseSchema>;

const courseSchema = new mongoose.Schema (
    {
        title: { type: String, required: true },
        description: { type: String, required: true },
        instructorName: { type: String, required: true },
        student: { type: [] }
    }
)

export const CourseModel = mongoose.model('Course', courseSchema);
