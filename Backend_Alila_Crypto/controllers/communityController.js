import Post from "../models/Post.js";
import Comment from "../models/Comment.js";

// 📩 Per creare un nuovo post con media (immagine o video)
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

// Leggi i post segnalati
export const getFlaggedContent = async (req, res) => {
  try {
    const flaggedPosts = await Post.find({ isFlagged: true });
    const flaggedComments = await Comment.find({ isFlagged: true });
    res.status(200).json({ posts: flaggedPosts, comments: flaggedComments });
  } catch (err) {
    res.status(500).json({ message: "Errore nel recupero contenuti segnalati" });
  }
};

// Elimina un post segnalato
export const deleteFlaggedPost = async (req, res) => {
  const { id } = req.params;
  try {
    await Post.findByIdAndDelete(id);
    res.status(200).json({ message: "Post eliminato" });
  } catch (err) {
    res.status(500).json({ message: "Errore nell'eliminazione del post" });
  }
};

// Approvazione
export const approveFlaggedPost = async (req, res) => {
  const { id } = req.params;
  try {
    await Post.findByIdAndUpdate(id, { isFlagged: false });
    res.status(200).json({ message: "Post approvato (segnalazione rimossa)" });
  } catch (err) {
    res.status(500).json({ message: "Errore nella rimozione flag" });
  }
};

//     Commenti sotto i post
// Crea un commento
export const createComment = async (req, res) => {
  const { postId, content } = req.body;
  try {
    const newComment = new Comment({
      post: postId,
      author: req.user.id,
      content
    });
    await newComment.save();
    res.status(201).json(newComment);
  } catch (err) {
    res.status(500).json({ message: "Errore nella creazione commento" });
  }
};

// Leggi commenti di un post
export const getCommentsByPost = async (req, res) => {
  const { postId } = req.params;
  try {
    const comments = await Comment.find({ post: postId }).populate("author", "username");
    res.status(200).json(comments);
  } catch (err) {
    res.status(500).json({ message: "Errore nel recupero commenti" });
  }
};

// Segnala un commento
export const flagComment = async (req, res) => {
  const { id } = req.params;
  try {
    await Comment.findByIdAndUpdate(id, { isFlagged: true });
    res.status(200).json({ message: "Commento segnalato" });
  } catch (err) {
    res.status(500).json({ message: "Errore nella segnalazione" });
  }
};

// Elimina commento (Admin)
export const deleteFlaggedComment = async (req, res) => {
  const { id } = req.params;
  try {
    await Comment.findByIdAndDelete(id);
    res.status(200).json({ message: "Commento eliminato" });
  } catch (err) {
    res.status(500).json({ message: "Errore eliminazione commento" });
  }
};

// Approvazione (rimuove segnalazione)
export const approveFlaggedComment = async (req, res) => {
  const { id } = req.params;
  try {
    await Comment.findByIdAndUpdate(id, { isFlagged: false });
    res.status(200).json({ message: "Commento approvato" });
  } catch (err) {
    res.status(500).json({ message: "Errore approvazione" });
  }
};