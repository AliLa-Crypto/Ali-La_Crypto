import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

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