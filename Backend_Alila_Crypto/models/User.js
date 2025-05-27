import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: function () { return !this.socialID; } },
  level: { type: String, enum: ["Beginner", "Intermediate", "Pro"], default: "Beginner" },
  xp: { type: Number, default: 0 },
  completedLessons: [{ type: mongoose.Schema.Types.ObjectId, ref: "Lesson" }],
  isAdmin: { type: Boolean, default: false },
  avatarURL: String,
  socialID: String,
  bio: String,
  walletDemo: String,
}, { timestamps: true });

export default mongoose.model("User", userSchema);