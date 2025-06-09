// src/components/Admin/LessonList.jsx
import React, { useEffect, useState } from "react";
import { Table, Button, Spinner, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import api from "@/utils/api";

const LessonList = () => {
  const [lessons, setLessons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const fetchLessons = async () => {
    try {
      const res = await api.get("/admin/lessons");
      setLessons(res.data);
    } catch {
      setMessage("❌ Errore nel recupero delle lezioni");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Sei sicuro di voler eliminare questa lezione?")) return;
    try {
      await api.delete(`/admin/lessons/${id}`);
      setLessons((prev) => prev.filter((lesson) => lesson._id !== id));
      setMessage("✅ Lezione eliminata");
    } catch {
      setMessage("❌ Errore durante l'eliminazione");
    }
  };

  useEffect(() => {
    fetchLessons();
  }, []);

  return (
    <div className="text-light">
      <h3>📚 Elenco Lezioni</h3>
      {message && <Alert variant={message.startsWith("✅") ? "success" : "danger"}>{message}</Alert>}
      {loading ? (
        <Spinner animation="border" />
      ) : (
        <Table striped bordered hover responsive variant="dark">
          <thead>
            <tr>
              <th>Titolo</th>
              <th>Livello</th>
              <th>Tipo</th>
              <th>Categoria</th>
              <th>Azioni</th>
            </tr>
          </thead>
          <tbody>
            {lessons.map((lesson) => (
              <tr key={lesson._id}>
                <td>{lesson.title}</td>
                <td>{lesson.level}</td>
                <td>{lesson.type}</td>
                <td>{lesson.category}</td>
                <td>
                  <Button
                    variant="warning"
                    size="sm"
                    onClick={() => navigate(`/admin/dashboard/lessons/edit/${lesson._id}`)}
                  >
                    ✏️ Modifica
                  </Button>{" "}
                  <Button variant="danger" size="sm" onClick={() => handleDelete(lesson._id)}>
                    ❌ Elimina
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
};

export default LessonList;