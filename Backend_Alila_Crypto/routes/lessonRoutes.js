import express from "express";
import Lesson from "../models/Lesson.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/public", verifyToken, async (req, res) => {
  try {
    const lessons = await Lesson.find();
    res.status(200).json(lessons);
  } catch (err) {
    res.status(500).json({ message: "Errore nel recupero delle lezioni" });
  }
});

// ✅ Recupera una singola lezione per ID
router.get("/:id", verifyToken, async (req, res) => {
  try {
    const lesson = await Lesson.findById(req.params.id);
    if (!lesson) {
      return res.status(404).json({ message: "Lezione non trovata" });
    }
    res.status(200).json(lesson);
  } catch (err) {
    console.error("Errore nel recupero lezione:", err);
    res.status(500).json({ message: "Errore del server" });
  }
});

export default router;