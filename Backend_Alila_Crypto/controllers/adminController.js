import User from "../models/User.js";
import Post from "../models/Post.js";
import Lesson from "../models/Lesson.js";

// Per dashboard Admin
export const getAdminDashboard = async (req, res) => {
  try {
    const userCount = await User.countDocuments();
    const lessonCount = await Lesson.countDocuments();
    const flaggedPosts = await Post.countDocuments({ flagged: true });

    res.status(200).json({
      message: "🔐 Area Admin - Accesso autorizzato",
      stats: {
        utenti: userCount,
        lezioni: lessonCount,
        postSegnalati: flaggedPosts
      }
    });
  } catch (err) {
    console.error("❌ Errore Admin Dashboard:", err);
    res.status(500).json({ message: "Errore nel caricamento dati admin" });
  }
};

// Elenco completo utenti
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password");
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: "Errore nel recupero utenti" });
  }
};

// Cambia il ruolo utente (admin/user)
export const changeUserRole = async (req, res) => {
  const { level } = req.body;
  const isAdmin = level === "admin";

  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        isAdmin: isAdmin,
        level: isAdmin ? "Principiante" : level // fallback sicuro
      },
      { new: true }
    );

    console.log("▶️ Cambio ruolo utente:", req.params.id, "→", level);

    res.status(200).json({ message: "Ruolo aggiornato", user: updatedUser });
  } catch (err) {
    console.error("❌ Errore aggiornamento ruolo:", err);
    res.status(500).json({ message: "Errore aggiornamento ruolo" });
  }
};

// Blocca o sblocca un utente
export const toggleBlockUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    user.isBlocked = !user.isBlocked;
    await user.save();
    res.status(200).json({ message: user.isBlocked ? "Utente bloccato" : "Utente sbloccato" });
  } catch (err) {
    res.status(500).json({ message: "Errore nel blocco/sblocco" });
  }
};


// Elimina utente
export const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    await User.findByIdAndDelete(id);
    res.status(200).json({ message: "Utente eliminato" });
  } catch (err) {
    res.status(500).json({ message: "Errore nell'eliminazione utente" });
  }
};