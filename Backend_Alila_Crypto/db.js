import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("✅ Connessione a MongoDB riuscita");
  } catch (err) {
    console.error("❌ Errore nella connessione al DB:", err);
    process.exit(1);
  }
};

export default connectDB;