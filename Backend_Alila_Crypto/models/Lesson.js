import mongoose from "mongoose";

const lessonSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, default: "" },
  level: { type: String, enum: ["principiante", "intermedio", "pro"], required: true },
  category: { type: String, default: "Generale" },
  type: { type: String, enum: ["video", "pdf", "immagine", "testo", "quiz"], default: "testo" },
  content: { type: String, default: "" },
  mediaUrl: { type: String, default: "" },
  mediaType: { type: String, enum: ["video", "image", "pdf", ""], default: "" },
  publicId: { type: String, default: "" }, 
}, { timestamps: true });

export default mongoose.model("Lesson", lessonSchema);