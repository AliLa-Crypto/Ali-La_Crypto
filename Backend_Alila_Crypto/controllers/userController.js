import User from "../models/User.js";

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

// ✏️ PUT aggiorna profilo (bio)
export const updateProfile = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.user.userId,
      { bio: req.body.bio },
      { new: true }
    ).select("-password");
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: "Errore aggiornamento profilo" });
  }
};