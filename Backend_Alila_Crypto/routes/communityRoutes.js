import express from "express";
import { verifyToken } from "../middleware/authMiddleware.js";
import { uploadCommunity } from "../utils/multer.js";
import { createPost } from "../controllers/communityController.js";
import { createComment, getCommentsByPost } from "../controllers/communityController.js";

const router = express.Router();

// Post
router.post("/community-post", verifyToken, uploadCommunity.single("media"), createPost);

// Commenti ai post
router.post("/", verifyToken, createComment);
router.get("/:postId", verifyToken, getCommentsByPost);

export default router;