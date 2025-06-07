import mongoose from "mongoose";

const lessonSchema = new mongoose.Schema({
  title: { type: String, required: true },
  level: { type: String, enum: ["principiante", "intermedio", "pro"], required: true },
  type: { type: String, enum: ["video", "testo", "quiz"], default: "testo" },
  content: { type: String, default: "" },
  mediaUrl: { type: String, default: "" }
}, { timestamps: true });

export default mongoose.model("Lesson", lessonSchema);