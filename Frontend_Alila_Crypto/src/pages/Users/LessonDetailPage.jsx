import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Spinner, Alert, Button } from "react-bootstrap";
import api from "@/utils/api";
import { getUserFromToken } from "@/utils/auth";
import "@/styles/LessonDetailPage.css";

const LessonDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [lesson, setLesson] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  const user = getUserFromToken();

  useEffect(() => {
    const fetchLesson = async () => {
      try {
        const res = await api.get(`/lessons/${id}`);
        const fetchedLesson = res.data;

        // Verifica se il livello dell'utente è autorizzato
        if (!user || user.level !== fetchedLesson.level) {
          setErrorMsg("⛔ Non sei autorizzato a visualizzare questa lezione.");
          return;
        }

        setLesson(fetchedLesson);
      } catch (err) {
        setErrorMsg("❌ Errore nel caricamento della lezione.");
      } finally {
        setLoading(false);
      }
    };

    fetchLesson();
  }, [id, user]);

  if (loading) return <Spinner animation="border" className="m-5" />;

  if (errorMsg) return (
    <Container className="text-light mt-5">
      <Alert variant="danger">{errorMsg}</Alert>
      <Button variant="secondary" onClick={() => navigate("/dashboard/" + user.level)}>⬅️ Torna alle lezioni</Button>
    </Container>
  );

  return (
    <Container className="text-light mt-4">
      <h2 className="mb-3">{lesson.title}</h2>
      <p><strong>Descrizione:</strong> {lesson.description}</p>
      <p><strong>Livello:</strong> {lesson.level}</p>
      <p><strong>Categoria:</strong> {lesson.category}</p>
      <p><strong>Tipo:</strong> {lesson.type}</p>

      {/* Contenuto testuale */}
      {lesson.content && (
        <div className="mb-4">
          <h5>📝 Contenuto:</h5>
          <p>{lesson.content}</p>
        </div>
      )}

      {/* Media */}
      {lesson.mediaType === "video" && (
        <div className="mb-4">
          <h5>🎬 Video:</h5>
          <video controls width="100%" src={lesson.mediaUrl}></video>
        </div>
      )}
      {lesson.mediaType === "pdf" && (
        <div className="mb-4">
          <h5>📄 PDF:</h5>
          <iframe src={lesson.mediaUrl} width="100%" height="600px" title="PDF" />
        </div>
      )}
      {lesson.mediaType === "image" && (
        <div className="mb-4">
          <h5>🖼️ Immagine:</h5>
          <img src={lesson.mediaUrl} alt="media" className="img-fluid rounded" />
        </div>
      )}

      <Button variant="primary" onClick={() => navigate("/dashboard/" + user.level)}>⬅️ Torna alle lezioni</Button>

    </Container>
  );
};

export default LessonDetailPage;