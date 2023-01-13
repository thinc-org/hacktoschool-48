import mongoose from "mongoose";

export type Course = mongoose.InferSchemaType<typeof courseSchema>;

const courseSchema = new mongoose.Schema (
    {
        title: { type: String, required: true },
        description: { type: String, required: true },
        instructorName: { type: String, required: true },
        student: { type: [] },
        level: { type: String, enum: ["easy", "medium", "hard"], required:true }
    }
)

export const CourseModel = mongoose.model('Course', courseSchema);
