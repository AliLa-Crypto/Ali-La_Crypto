import React, { useState } from "react";
import { Form, Button, Alert, Container } from "react-bootstrap";
import api from "@/utils/api";

const LessonCreate = () => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    level: "principiante",
    category: "Generale",
    type: "testo",
    content: "",
    mediaUrl: "",
    mediaType: "",
    publicId: "",
  });

  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess("");
    setError("");

    try {
      await api.post("/admin/lessons", form);
      setSuccess("✅ Lezione creata con successo!");
      setForm({
        title: "",
        description: "",
        level: "principiante",
        category: "Generale",
        type: "testo",
        content: "",
        mediaUrl: "",
        mediaType: "",
        publicId: "",
      });
    } catch (err) {
      console.error("Errore nella creazione:", err);
      setError("❌ Errore nella creazione della lezione.");
    }
  };

  return (
    <Container className="text-light">
      <h2 className="mb-4">➕ Crea nuova lezione</h2>

      {success && <Alert variant="success">{success}</Alert>}
      {error && <Alert variant="danger">{error}</Alert>}

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Titolo</Form.Label>
          <Form.Control
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Inserisci il titolo della lezione"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Descrizione</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Breve descrizione della lezione"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Livello</Form.Label>
          <Form.Select name="level" value={form.level} onChange={handleChange}>
            <option value="principiante">Principiante</option>
            <option value="intermedio">Intermedio</option>
            <option value="pro">Pro</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Categoria</Form.Label>
          <Form.Control
            type="text"
            name="category"
            value={form.category}
            onChange={handleChange}
            placeholder="Es. Blockchain, NFT, Economia, ecc."
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Tipo di lezione</Form.Label>
          <Form.Select name="type" value={form.type} onChange={handleChange}>
            <option value="testo">Testo</option>
            <option value="video">Video</option>
            <option value="quiz">Quiz</option>
            <option value="pdf">PDF</option>
            <option value="immagine">Immagine</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Contenuto</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            name="content"
            value={form.content}
            onChange={handleChange}
            placeholder="Scrivi qui il contenuto della lezione (testo o descrizione del video/pdf)"
          />
        </Form.Group>

        <Button variant="primary" type="submit">💾 Salva lezione</Button>
      </Form>
    </Container>
  );
};

export default LessonCreate;