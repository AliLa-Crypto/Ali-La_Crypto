import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Spinner, Alert, Button, Badge } from "react-bootstrap";
import { motion } from "framer-motion";
import api from "@/utils/api";
import { getUserFromToken } from "@/utils/auth";
import "@/styles/LessonDetailPage.css";

// ✅ Import immagini locali
import nft1 from "@/assets/backgrounds/nft1.webp";
// import nft2 from "@/assets/backgrounds/nft2.png";
// import fallback from "@/assets/backgrounds/Logo1.png"; // immagine generica

// ✅ Componenti “maiuscoli” derivati da motion (evita l’errore ESLint)
const MotionImg = motion.img;
const MotionDiv = motion.div;

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

        if (!user || user.level.toLowerCase() !== fetchedLesson.level.toLowerCase()) {
          setErrorMsg("⛔ Non sei autorizzato a visualizzare questa lezione.");
          return;
        }

        setLesson(fetchedLesson);
      } catch (err) {
        console.error(err);
        setErrorMsg("❌ Errore nel caricamento della lezione.");
      } finally {
        setLoading(false);
      }
    };

    fetchLesson();
  }, [id, user]);

  const handleBack = () => {
    navigate("/learn");
  };

  if (loading) return <Spinner animation="border" className="m-5" />;

  if (errorMsg) {
    return (
      <Container className="text-light mt-5">
        <Alert variant="danger">{errorMsg}</Alert>
        <Button variant="secondary" onClick={handleBack}>
          ⬅️ Torna alle lezioni
        </Button>
      </Container>
    );
  }

  // ✅ Assegna immagine in base alla categoria
  let imageUrl = "https://source.unsplash.com/1600x400/?technology,digital";
  if (lesson.category === "NFT") imageUrl = nft1;
  // else if (lesson.category === "Criptovalute") imageUrl = nft2;
  // else if (lesson.category === "Blockchain") imageUrl = "https://source.unsplash.com/1600x400/?blockchain,technology";
  // else if (lesson.category === "Finanza") imageUrl = "https://source.unsplash.com/1600x400/?finance,economy";

  return (
    <Container className="lesson-detail-container px-5 py-4 text-light lead">
      {/* ✅ Copertina dinamica */}
      <MotionImg
        src={imageUrl}
        alt="cover"
        className="img-fluid rounded mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        style={{ maxHeight: "300px", objectFit: "cover", width: "100%" }}
      />

      <MotionDiv
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="fw-bold display-3 mb-2 text-center">{lesson.title}</h1>

        <div className="mb-3 d-flex justify-content-center lead">
          <Badge bg="info" className="me-2">
            📘 Categoria: {lesson.category}
          </Badge>
          <Badge bg="secondary">🎓 Livello: {lesson.level}</Badge>
        </div>

        {lesson.description && (
          <div className="bg-info bg-opacity-25 rounded p-4 mb-4">
            <h5 className="text-warning">🎯 Obiettivo della lezione:</h5>
            <p>{lesson.description}</p>
          </div>
        )}

        {lesson.content && (
          <div className="mb-4">
            <p style={{ whiteSpace: "pre-line" }}>{lesson.content}</p>
          </div>
        )}

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

        <Button variant="primary" onClick={handleBack}>
          ⬅️ Torna alle lezioni
        </Button>
      </MotionDiv>
    </Container>
  );
};

export default LessonDetailPage;