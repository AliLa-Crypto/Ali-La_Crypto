import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  testo: String,
  mediaURL: String,
  mediaPublicId: String,
  isFlagged: { type: Boolean, default: false },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
}, { timestamps: true });

export default mongoose.model("Post", postSchema);