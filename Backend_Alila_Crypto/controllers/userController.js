import User from "../models/User.js";
import { v2 as cloudinary } from "cloudinary";

// 👤 GET profilo utente
export const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.userId).select("-password");
    if (!user) return res.status(404).json({ message: "Utente non trovato" });
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: "Errore nel caricamento profilo" });
  }
};

// ✏️ PUT aggiorna profilo (bio E/O level)
export const updateProfile = async (req, res) => {
  try {
    const { bio, level } = req.body; // Accetta sia bio che level

    const updateData = {};
    if (bio !== undefined) {
      updateData.bio = bio;
    }
    if (level && ["principiante", "intermedio", "pro"].includes(level.toLowerCase())) {
      updateData.level = level.toLowerCase();
    }

    const user = await User.findByIdAndUpdate(
      req.user.userId,
      { $set: updateData }, // Usa $set per aggiornare solo i campi forniti
      { new: true }
    ).select("-password");

    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: "Errore aggiornamento profilo" });
  }
};

// 📤 Carica avatar
export const uploadAvatar = async (req, res) => {
  try {
    const user = await User.findById(req.user.userId);
    if (!user) return res.status(404).json({ message: "Utente non trovato" });

    // Verifica file
    if (!req.file || !req.file.path) {
      return res.status(400).json({ message: "File avatar mancante o invalido." });
    }

    // Controlla i file prima dell'upload
    const allowedExtensions = ['jpg', 'jpeg', 'png'];
    const extension = req.file.originalname.split('.').pop().toLowerCase();

    if (!allowedExtensions.includes(extension)) {
      return res.status(400).json({ message: "Formato file non supportato. Usa jpg, jpeg o png." });
    }

    // 🔄 Cancella il vecchio avatar
    if (user.avatarPublicId) {
      await cloudinary.uploader.destroy(user.avatarPublicId);
    }

    // 🔁 Salva nuovo URL e public_id
    user.avatarURL = req.file.path;
    user.avatarPublicId = req.file.filename; // <-- viene da multer-storage-cloudinary
    await user.save();

    res.status(200).json({ avatarURL: user.avatarURL });
  } catch (error) {
    console.error("❌ Errore upload avatar:", error.message);
    res.status(500).json({ message: "Errore server", error: error.message });
  }
};

export const deleteAvatar = async (req, res) => {
  try {
    const user = await User.findById(req.user.userId);
    if (!user || !user.avatarPublicId) {
      return res.status(404).json({ message: "Nessun avatar da rimuovere." });
    }

    await cloudinary.uploader.destroy(user.avatarPublicId);
    user.avatarURL = "";
    user.avatarPublicId = "";
    await user.save();

    res.status(200).json({ message: "✅ Avatar eliminato con successo." });
  } catch (err) {
    console.error("❌ Errore eliminazione avatar:", err);
    res.status(500).json({ message: "Errore durante la cancellazione." });
  }
};