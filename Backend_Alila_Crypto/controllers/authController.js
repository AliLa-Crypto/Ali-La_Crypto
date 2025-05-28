import User from "../models/User.js";
import OtpCode from "../models/OtpCode.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// REGISTRAZIONE UTENTE
export const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Controlla se l'utente esiste già
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "Email già registrata" });

    // Cripta la password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Crea utente
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: "Registrazione avvenuta con successo" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Errore server durante la registrazione" });
  }
};

// LOGIN NORMALE (senza 2FA)
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Cerca l’utente
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "Utente non trovato" });

    // Confronta la password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: "Credenziali non valide" });

    // Crea token JWT
    const token = jwt.sign(
      { userId: user._id, isAdmin: user.isAdmin, level: user.level },
      process.env.JWT_SECRET,
      { expiresIn: "3d" }
    );

    // Risposta con token + info base
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

// ✅ LOGIN CON 2FA – invia codice via email
export const loginWith2FA = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user)
      return res.status(404).json({ message: "Utente non trovato" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(401).json({ message: "Credenziali non valide" });

    const code = Math.floor(100000 + Math.random() * 900000).toString();
    const expiresAt = new Date(Date.now() + 5 * 60 * 1000);

    await OtpCode.create({ email, code, expiresAt });

    const msg = {
      to: email,
      from: "alilacrypto.dev@gmail.com",
      subject: "Il tuo codice di verifica Ali&La Crypto",
      text: `Il tuo codice di verifica è: ${code}`,
      html: `<strong>Il tuo codice di verifica è: ${code}</strong><br>Scade tra 5 minuti.`,
    };

    await sgMail.send(msg);
    res.status(200).json({ message: "Codice 2FA inviato alla tua email" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Errore nel login con 2FA" });
  }
};

// ✅ VERIFICA CODICE 2FA – rilascia JWT
export const verify2FA = async (req, res) => {
  try {
    const { email, code } = req.body;

    const otpEntry = await OtpCode.findOne({ email, code });
    if (!otpEntry || otpEntry.expiresAt < new Date()) {
      return res.status(400).json({ message: "Codice non valido o scaduto" });
    }

    const user = await User.findOne({ email });
    if (!user)
      return res.status(404).json({ message: "Utente non trovato" });

    // Genera token JWT
    const token = jwt.sign(
      { userId: user._id, level: user.level, isAdmin: user.isAdmin },
      process.env.JWT_SECRET,
      { expiresIn: "3d" }
    );

    // Elimina il codice usato
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