import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./db.js";

// Import ROUTERS
import authRoutes from "./routes/authRoutes.js";
import protectedRoutes from "./routes/protectedRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.SERVER_PORT || 3001;

// Middleware CORS e JSON
app.use(cors({
  origin: "http://localhost:5173",  // ✅ frontend
  credentials: true
}));
app.use(express.json());


// Connessione al DB
connectDB();

// API
app.use("/api/auth", authRoutes);
app.use("/api/protected", protectedRoutes);

// Rotta base di test
app.get("/", (req, res) => {
  res.send("🚀 Backend Ali&La Crypto attivo!");
});

app.listen(PORT, () => {
  console.log(`✅ Server avviato su http://localhost:${PORT}`);
});