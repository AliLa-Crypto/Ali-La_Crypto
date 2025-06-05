import Post from "../models/Post.js"; // Assicurati che esista il model Post

// 📩 Crea un nuovo post con media (immagine o video)
export const createPost = async (req, res) => {
  try {
    const newPost = new Post({
      testo: req.body.testo || "",
      mediaURL: req.file?.path || "",
      mediaPublicId: req.file?.filename || "",
      createdBy: req.user.userId
    });

    const saved = await newPost.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ message: "Errore creazione post", error: err.message });
  }
};