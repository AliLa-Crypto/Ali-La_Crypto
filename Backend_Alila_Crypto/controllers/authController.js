import User from "../models/User.js";
import OtpCode from "../models/OtpCode.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import sgMail from "@sendgrid/mail";
import crypto from "crypto";
import { OAuth2Client } from "google-auth-library";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

// 📌 REGISTRAZIONE
export const register = async (req, res) => {
  try {
    const { username, email, password, level } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "Email già registrata" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ 
      username, 
      email, 
      password: hashedPassword,
      level: (level || "principiante").toLowerCase(),
    });
    await newUser.save();

    // 🔐 Genera il token
    const token = jwt.sign(
      { userId: newUser._id, level: newUser.level, isAdmin: newUser.isAdmin },
      process.env.JWT_SECRET,
      { expiresIn: "3d" }
    );

    res.status(201).json({ message: "Registrazione avvenuta con successo", 
      token,
      user: {
        id: newUser._id,
        username: newUser.username,
        email: newUser.email,
        level: newUser.level,
        isAdmin: newUser.isAdmin,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Errore server durante la registrazione", 
      token,
      user: {
        id: newUser._id,
        username: newUser.username,
        email: newUser.email,
        level: newUser.level,
        isAdmin: newUser.isAdmin,
      }
    });
  }
};

// 🔐 LOGIN NORMALE
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "Utente non trovato" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: "Credenziali non valide" });

    const token = jwt.sign(
      { userId: user._id, isAdmin: user.isAdmin, level: user.level },
      process.env.JWT_SECRET,
      { expiresIn: "3d" }
    );

    res.status(200).json({
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        level: user.level,
        isAdmin: user.isAdmin,
      }
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Errore server durante il login" });
  }
};

// 🔐 LOGIN CON 2FA (invio codice via email)
export const loginWith2FA = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "Utente non trovato" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: "Credenziali non valide" });

    const code = Math.floor(100000 + Math.random() * 900000).toString();
    const expiresAt = new Date(Date.now() + 5 * 60 * 1000);
    await OtpCode.create({ email, code, expiresAt });

    const msg = {
      to: email,
      from: "alilacrypto.dev@gmail.com",
      subject: "Il tuo codice di verifica Ali&La Crypto",
      html: `<strong>Il tuo codice di verifica è: ${code}</strong><br>Scade tra 5 minuti.`,
    };

    await sgMail.send(msg);
    res.status(200).json({ message: "Codice 2FA inviato alla tua email" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Errore nel login con 2FA" });
  }
};

// ✅ VERIFICA CODICE 2FA
export const verify2FA = async (req, res) => {
  try {
    const { email, code } = req.body;

    // 🔁 Elimina OTP scaduti prima di verificare quello inserito
    await OtpCode.deleteMany({ expiresAt: { $lt: new Date() } });
    
    const otpEntry = await OtpCode.findOne({ email, code });
    if (!otpEntry || otpEntry.expiresAt < new Date()) {
      return res.status(400).json({ message: "Codice non valido o scaduto" });
    }

    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "Utente non trovato" });

    const token = jwt.sign(
      { userId: user._id, level: user.level, isAdmin: user.isAdmin },
      process.env.JWT_SECRET,
      { expiresIn: "3d" }
    );

    await OtpCode.deleteOne({ _id: otpEntry._id });

    res.status(200).json({
      message: "✅ Verifica completata",
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        level: user.level,
        isAdmin: user.isAdmin,
      },
    });
  } catch (err) {
    console.error("Errore 2FA SENDGRID:", err.response?.body || err);
    res.status(500).json({ message: "Errore durante verifica 2FA" });
  }
};

// 📩 RICHIESTA RESET PASSWORD (Invio email con link)
export const requestPasswordReset = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "Utente non trovato" });

    const token = crypto.randomBytes(32).toString("hex");
    const expiresAt = Date.now() + 1000 * 60 * 30;

    user.resetToken = token;
    user.resetTokenExpiry = expiresAt;
    await user.save();

    const resetLink = `http://localhost:5173/reset-password/${token}`;
    const msg = {
      to: email,
      from: process.env.SENDGRID_SENDER_EMAIL,
      subject: "Reimposta la tua password - Ali&La Crypto",
      html: `<p>Clicca il link per reimpostare la password:</p><a href="${resetLink}">${resetLink}</a>`,
    };

    console.log("➡️ EMAIL SENDGRID", msg);
    
    await sgMail.send(msg);
    res.json({ message: "Email inviata con il link di reimpostazione" });
  } catch (err) {
    console.error("Errore durante richiesta reset password:", err);
    res.status(500).json({ message: "Errore interno. Contatta il supporto." });
  }
};

// 🔁 RESET PASSWORD
export const resetPassword = async (req, res) => {
  const { token } = req.params;
  const { newPassword } = req.body;

  try {
    const user = await User.findOne({
      resetToken: token,
      resetTokenExpiry: { $gt: Date.now() },
    });

    if (!user) return res.status(400).json({ message: "Token non valido o scaduto" });

    user.password = await bcrypt.hash(newPassword, 10);
    user.resetToken = undefined;
    user.resetTokenExpiry = undefined;
    await user.save();

    res.json({ message: "Password aggiornata correttamente" });
  } catch (err) {
    console.error("Errore durante aggiornamento password:", err);
    res.status(500).json({ message: "Errore interno. Contatta il supporto." });
  }
};

// Autenticazione con Google 
export const loginWithGooglePopup = async (req, res) => {
  try {
    const { token } = req.body;

    console.log("📥 Token ricevuto da frontend:", token);
    console.log("📌 Audience attesa:", process.env.GOOGLE_CLIENT_ID);

    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();

    // Cerca o crea utente
    let user = await User.findOne({ email: payload.email });

    let isNewUser = false;

    if (!user) {
      user = await User.create({
        username: payload.name,
        email: payload.email,
        socialID: payload.sub,
        level: "principiante",
      });
      isNewUser = true;
    }

    const jwtToken = jwt.sign(
      { userId: user._id, level: user.level, isAdmin: user.isAdmin },
      process.env.JWT_SECRET,
      { expiresIn: "3d" }
    );

    res.status(200).json({ token: jwtToken, user, isNewUser });
  } catch (err) {
    console.error("❌ Errore Google Login:", err.response?.data || err.message || err);
    res.status(401).json({ message: "Token Google non valido" });
  }
};