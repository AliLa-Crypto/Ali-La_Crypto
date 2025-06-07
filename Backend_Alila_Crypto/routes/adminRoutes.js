import express from "express";
import { getAdminDashboard, getAllUsers, changeUserRole, toggleBlockUser, deleteUser } from "../controllers/adminController.js";
import { uploadLesson } from "../utils/multer.js";
import { getAllLessons, createLesson, updateLesson, deleteLesson } from "../controllers/lessonController.js";
import { getFlaggedContent, deleteFlaggedPost, approveFlaggedPost } from "../controllers/communityController.js";
import { flagComment, deleteFlaggedComment, approveFlaggedComment } from "../controllers/communityController.js";
import { verifyToken, checkAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/dashboard", verifyToken, checkAdmin, getAdminDashboard);

// UTENTI
router.get("/users", verifyToken, checkAdmin, getAllUsers);
router.patch("/users/:id/role", verifyToken, checkAdmin, changeUserRole);
router.patch("/users/:id/block", verifyToken, checkAdmin, toggleBlockUser);
router.delete("/users/:id", verifyToken, checkAdmin, deleteUser);

// 🔸 Lezioni - accesso riservato admin
router.get("/lessons", verifyToken, checkAdmin, getAllLessons);
router.post("/lessons", verifyToken, checkAdmin, createLesson);
router.post("/lessons/upload-media", verifyToken, checkAdmin, uploadLesson.single("file"),
  (req, res) => {
    if (!req.file?.path) {
      return res.status(400).json({ message: "File mancante o non valido" });
    }
    res.status(200).json({
      message: "Upload completato con successo",
      mediaUrl: req.file.path,
      publicId: req.file.filename,
    });
  }
);
router.put("/lessons/:id", verifyToken, checkAdmin, updateLesson);
router.delete("/lessons/:id", verifyToken, checkAdmin, deleteLesson);

// 🔸 Post segnalati
router.get("/flagged", verifyToken, checkAdmin, getFlaggedContent);
router.delete("/flagged/post/:id", verifyToken, checkAdmin, deleteFlaggedPost);
router.patch("/flagged/post/:id", verifyToken, checkAdmin, approveFlaggedPost);

// Commenti segnalati
router.patch("/:id/flag", verifyToken, flagComment);
router.delete("/flagged/comment/:id", verifyToken, checkAdmin, deleteFlaggedComment);
router.patch("/flagged/comment/:id", verifyToken, checkAdmin, approveFlaggedComment);

export default router;
