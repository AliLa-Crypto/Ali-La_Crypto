import User from "../models/User.js";
import Post from "../models/Post.js";
import Lesson from "../models/Lesson.js";
import Comment from "../models/Comment.js";

// Per dashboard Admin
export const getAdminDashboard = async (req, res) => {
  try {
    // 1. Recupero dati da MongoDB
    const users = await User.find();
    const lessons = await Lesson.find();
    const flaggedPosts = await Post.find({ flagged: true });
    const flaggedComments = await Comment.find({ flagged: true });

    // 2. Conteggio utenti per livello
    const utentiPerLivello = {
      principiante: users.filter(u => u.level?.toLowerCase() === "principiante").length,
      intermedio: users.filter(u => u.level?.toLowerCase() === "intermedio").length,
      pro: users.filter(u => u.level?.toLowerCase() === "pro").length,
    };

    // 3. Conteggio lezioni per categoria (dinamico)
    const lezioniPerCategoria = {};
    lessons.forEach(l => {
      const cat = l.category?.trim() || "Senza categoria";
      lezioniPerCategoria[cat] = (lezioniPerCategoria[cat] || 0) + 1;
    });

    // 4. Conteggio contenuti segnalati
    const segnalazioni = {
      post: flaggedPosts.length,
      commenti: flaggedComments.length,
    };

    // 5. Risposta JSON completa
    res.status(200).json({
      message: "🔐 Area Admin - Accesso autorizzato",
      stats: {
        utenti: users.length,
        lezioni: lessons.length,
        postSegnalati: flaggedPosts.length,
        utentiPerLivello,
        lezioniPerCategoria,
        segnalazioni,
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