import Lesson from "../models/Lesson.js";

// GET tutte le lezioni
export const getAllLessons = async (req, res) => {
  try {
    const lessons = await Lesson.find();
    res.status(200).json(lessons);
  } catch (err) {
    res.status(500).json({ message: "Errore nel recupero lezioni" });
  }
};

// POST nuova lezione
export const createLesson = async (req, res) => {
  try {
    const {
      title,
      description,
      level,
      category,
      type,
      content = "",
      mediaUrl = "",
      mediaType = "",
      publicId = ""
    } = req.body;

    if (!title || !description || !level || !category || !type) {
      return res.status(400).json({ message: "Tutti i campi principali sono obbligatori." });
    }

    const newLesson = new Lesson({
      title,
      description,
      level,
      category,
      type,       // deve essere: "video", "pdf", "immagine", "testo", "quiz"
      content,
      mediaUrl,
      mediaType,  // può essere "video", "image", "pdf"
      publicId
    });

    await newLesson.save();
    res.status(201).json({ message: "Lezione creata con successo", lesson: newLesson });

  } catch (err) {
    console.error("❌ Errore nella creazione della lezione:", err);
    res.status(500).json({ message: "Errore nella creazione della lezione" });
  }
};

// PUT modifica lezione
export const updateLesson = async (req, res) => {
  const { id } = req.params;
  try {
    const updated = await Lesson.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json({ message: "Lezione aggiornata", lesson: updated });
  } catch (err) {
    res.status(500).json({ message: "Errore aggiornamento lezione" });
  }
};

// DELETE lezione
export const deleteLesson = async (req, res) => {
  const { id } = req.params;
  try {
    await Lesson.findByIdAndDelete(id);
    res.status(200).json({ message: "Lezione eliminata" });
  } catch (err) {
    res.status(500).json({ message: "Errore nell’eliminazione" });
  }
};

// ✅ Lezioni filtrate per livello utente (visibili nella Dashboard)
export const getLessonsForUser = async (req, res) => {
  try {
    const user = req.user; // Decodificato dal token JWT dal middleware
    if (!user || !user.level) {
      return res.status(401).json({ message: "Accesso non autorizzato" });
    }

    const lessons = await Lesson.find({ level: user.level });
    res.status(200).json(lessons);
  } catch (err) {
    console.error("Errore nel recupero lezioni:", err);
    res.status(500).json({ message: "Errore nel recupero lezioni" });
  }
};