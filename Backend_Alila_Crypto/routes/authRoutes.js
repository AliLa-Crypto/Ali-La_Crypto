import express from "express";
import { register, login } from "../controllers/authController.js";
import passport from "passport";
import jwt from "jsonwebtoken";

const router = express.Router();

// 📝 Registrazione e login classico
router.post("/register", register);
router.post("/login", login);

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
    failureRedirect: "/login", // puoi cambiare con una tua pagina d'errore personalizzata
    session: false,            // usiamo JWT, non le sessioni
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

export default router;