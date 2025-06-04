import express from "express";
import { register, login, loginWith2FA, verify2FA, requestPasswordReset, resetPassword, loginWithGooglePopup } from "../controllers/authController.js";
import { verifyToken } from "../middleware/authMiddleware.js";
import { getProfile, updateProfile } from "../controllers/userController.js";
import passport from "passport";
import jwt from "jsonwebtoken";

const router = express.Router();

// 📝 Registrazione e login classico
router.post("/register", register);
router.post("/login", login);
router.post("/login-2fa", loginWith2FA);
router.post("/verify-2fa", verify2FA);
router.get("/profile", verifyToken, getProfile);
router.put("/profile", verifyToken, updateProfile);
router.post("/forgot-password", requestPasswordReset);
router.post("/reset-password/:token", resetPassword);

// 🔐 Avvia login con Google
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
    prompt: "select_account", // forza la scelta account ad ogni login
  })
);

// 🔄 Callback dopo login Google
router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/login", 
    session: false,
  }),
  (req, res) => {
    // ✅ Genera token JWT personalizzato
    const token = jwt.sign(
      {
        userId: req.user._id,
        level: req.user.level,
        isAdmin: req.user.isAdmin,
      },
      process.env.JWT_SECRET,
      { expiresIn: "3d" }
    );

    // 🔁 Reindirizza al frontend con il token
    res.redirect(`http://localhost:5173/login-success?token=${token}`);
  }
);

// Logout
router.get("/logout", (req, res) => {
  req.logout(() => {
    res.redirect(`${process.env.CLIENT_URL}/login`);
  });
});

router.post("/google-popup", loginWithGooglePopup);


export default router;