import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./db.js";

// Import ROUTERS
import authRoutes from "./routes/authRoutes.js";
import protectedRoutes from "./routes/protectedRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import communityRouts from "./routes/communityRoutes.js";
import lessonRoutes from "./routes/lessonRoutes.js";


dotenv.config();

const app = express();
const PORT = process.env.PORT || 3740;

// Middleware CORS e JSON
app.use(cors({
  origin: [
    'https://alilacrypto.com',
    'https://www.alilacrypto.com'
  ],
  credentials: true
}));
app.use(express.json());


// Connessione al DB
connectDB();

// API
app.use("/api/auth", authRoutes);
app.use("/api/protected", protectedRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/community", communityRouts);
app.use("/api/lessons", lessonRoutes);

// Rotta base di test
app.get("/", (req, res) => {
  res.send("🚀 Backend Ali&La Crypto attivo!");
});

app.listen(PORT, () => {
  console.log(`✅ Server avviato su http://localhost:${PORT}`);
});