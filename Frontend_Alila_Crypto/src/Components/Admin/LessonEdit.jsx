// src/components/Admin/LessonEdit.jsx
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Form, Button, Alert, Spinner } from "react-bootstrap";
import api from "@/utils/api";

const LessonEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [lesson, setLesson] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchLesson = async () => {
      try {
        const res = await api.get("/admin/lessons");
        const found = res.data.find((l) => l._id === id);
        if (found) setLesson(found);
        else setMessage("❌ Lezione non trovata");
      } catch {
        setMessage("❌ Errore nel caricamento");
      }
    };
    fetchLesson();
  }, [id]);

  const handleChange = (e) => {
    setLesson({ ...lesson, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.put(`/admin/lessons/${id}`, lesson);
      setMessage("✅ Lezione aggiornata");
      setTimeout(() => navigate("/admin/dashboard/lessons/list"), 1500);
    } catch {
      setMessage("❌ Errore durante l'aggiornamento");
    }
  };

  if (!lesson) return <Spinner animation="border" />;

  return (
    <div className="text-light">
      <h3>✏️ Modifica Lezione</h3>
      {message && <Alert variant={message.startsWith("✅") ? "success" : "danger"}>{message}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-2">
          <Form.Label>Titolo</Form.Label>
          <Form.Control name="title" value={lesson.title} onChange={handleChange} required />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label>Descrizione</Form.Label>
          <Form.Control name="description" value={lesson.description} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label>Livello</Form.Label>
          <Form.Select name="level" value={lesson.level} onChange={handleChange}>
            <option value="principiante">Principiante</option>
            <option value="intermedio">Intermedio</option>
            <option value="pro">Pro</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label>Categoria</Form.Label>
          <Form.Control name="category" value={lesson.category} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label>Tipo</Form.Label>
          <Form.Select name="type" value={lesson.type} onChange={handleChange}>
            <option value="testo">Testo</option>
            <option value="video">Video</option>
            <option value="pdf">PDF</option>
            <option value="immagine">Immagine</option>
            <option value="quiz">Quiz</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Contenuto</Form.Label>
          <Form.Control as="textarea" rows={4} name="content" value={lesson.content} onChange={handleChange} />
        </Form.Group>
        <Button variant="success" type="submit">💾 Salva modifiche</Button>
      </Form>
    </div>
  );
};

export default LessonEdit;