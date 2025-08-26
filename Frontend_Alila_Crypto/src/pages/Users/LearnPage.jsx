import { useEffect, useState, useCallback } from "react";
import { Container, Row, Col } from "react-bootstrap";
import api from "@/utils/api";
import LessonCard from "@/Components/User/LessonCard";
import { getUserFromToken } from "@/utils/auth";
import "@/styles/LearnPage.css";

const LearnPage = () => {
  const [lessons, setLessons] = useState([]);
  const user = getUserFromToken();
  const userLevel = (user?.level || "").toLowerCase();

  // ✅ useCallback: funzione stabile, dipende solo dal livello utente
  const fetchLessons = useCallback(async () => {
    try {
      const res = await api.get("/lessons/public");
      const allLessons = res.data;

      const filtered = userLevel
        ? allLessons.filter((l) => (l.level || "").toLowerCase() === userLevel)
        : allLessons;

      setLessons(filtered);
    } catch (err) {
      console.error("❌ Errore nel caricamento lezioni", err);
    }
  }, [userLevel]);

  // ✅ l’effetto dipende dalla funzione (quindi dal livello)
  useEffect(() => {
    fetchLessons();
  }, [fetchLessons]);

  return (
    <Container className="mt-4 text-light">
      <h1 className="accademia-section">📚 Benvenuto nella tua Accademia</h1>
      <h2 className="mb-4">Lezioni per il tuo livello: {user?.level}</h2>
      <Row>
        {lessons.length > 0 ? (
          lessons.map((lesson) => (
            <Col key={lesson._id} xs={12} md={6} lg={3}>
              <LessonCard lesson={lesson} />
            </Col>
          ))
        ) : (
          <Col>
            <p className="text-warning">
              Nessuna lezione disponibile per il tuo livello.
            </p>
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default LearnPage;