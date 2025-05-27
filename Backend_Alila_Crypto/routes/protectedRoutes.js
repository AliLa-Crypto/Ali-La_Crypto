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

// 🔐 Accesso SOLO per utenti con livello 'Beginner'
router.get("/beginner", verifyToken, checkLevel("Beginner"), (req, res) => {
  res.json({
    message: "✅ Accesso autorizzato per Beginner!",
    user: req.user,
  });
});

// 🔐 Accesso SOLO per utenti con livello 'Pro'
router.get("/pro", verifyToken, checkLevel("Pro"), (req, res) => {
  res.json({
    message: "🔒 Accesso riservato agli utenti Pro",
    user: req.user,
  });
});

export default router;