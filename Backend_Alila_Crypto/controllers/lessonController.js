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
  const { title, level, type, content, mediaUrl } = req.body;
  try {
    const newLesson = new Lesson({ title, level, type, content, mediaUrl });
    await newLesson.save();
    res.status(201).json({ message: "Lezione creata con successo", lesson: newLesson });
  } catch (err) {
    res.status(500).json({ message: "Errore nella creazione lezione" });
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