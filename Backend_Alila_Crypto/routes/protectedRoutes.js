import express from "express";
import { verifyToken, checkLevel } from "../middleware/authMiddleware.js";

const router = express.Router();

// 🔐 Rotta accessibile da qualsiasi utente autenticato
router.get("/dashboard", verifyToken, (req, res) => {
  res.json({
    message: "🔒 Accesso consentito alla dashboard!",
    user: req.user,
  });
});

router.get("/principiante", verifyToken, checkLevel("Principiante"), (req, res) => {
  res.json({ message: "✅ Accesso autorizzato per Principiante!", user: req.user });
});

router.get("/intermedio", verifyToken, checkLevel("Intermedio"), (req, res) => {
  res.json({ message: "✅ Accesso autorizzato per Intermedio!", user: req.user });
});

router.get("/pro", verifyToken, checkLevel("Pro"), (req, res) => {
  res.json({ message: "🔒 Accesso riservato agli utenti Pro", user: req.user });
});

export default router;