import express from "express";
import { register, login, loginWith2FA, verify2FA, requestPasswordReset, resetPassword, loginWithGooglePopup } from "../controllers/authController.js";
import { verifyToken } from "../middleware/authMiddleware.js";
import { getProfile, updateProfile } from "../controllers/userController.js";
import { uploadMulter, uploadCommunity } from "../utils/multer.js";
import { uploadAvatar } from "../controllers/userController.js";
import { createPost } from "../controllers/communityController.js";
import jwt from "jsonwebtoken";

const router = express.Router();

// 📝 Registrazione e login classico
router.post("/register", register);
router.post("/login", login);
router.post("/login-2fa", loginWith2FA);
router.post("/verify-2fa", verify2FA);
router.post("/forgot-password", requestPasswordReset);
router.post("/reset-password/:token", resetPassword);

// Login Google popup
router.post("/google-popup", loginWithGooglePopup);

// Logout
router.get("/logout", (req, res) => {
  req.logout(() => {
    res.redirect(`${process.env.CLIENT_URL}/login`);
  });
});

// Profilo
router.get("/profile", verifyToken, getProfile);
router.put("/profile", verifyToken, updateProfile);
router.post("/upload-avatar", verifyToken, uploadMulter.single("avatar"), uploadAvatar);

// Community
router.post("/community-post", verifyToken, uploadCommunity.single("media"), createPost);



export default router;