import { useEffect, useState } from "react";
import { Container, Row, Col, Form, Spinner } from "react-bootstrap"; // Aggiunto Form e Spinner
import api from "@/utils/api";
import LessonCard from "@/Components/User/LessonCard";
import { getUserFromToken } from "@/utils/auth";
import "@/styles/LearnPage.css";

const LearnPage = () => {
  const [allLessons, setAllLessons] = useState([]); // Conterrà TUTTE le lezioni
  const [filteredLessons, setFilteredLessons] = useState([]); // Lezioni da mostrare
  const [loading, setLoading] = useState(true); // Stato di caricamento
  const user = getUserFromToken();
  
  // Il livello di default è quello dell'utente, ma può essere cambiato dal filtro
  const [selectedLevel, setSelectedLevel] = useState((user?.level || "principiante").toLowerCase());

  // Carica TUTTE le lezioni una sola volta al montaggio
  useEffect(() => {
    const fetchAllLessons = async () => {
      try {
        setLoading(true);
        const res = await api.get("/lessons/public");
        setAllLessons(res.data);
      } catch (err) {
        console.error("❌ Errore nel caricamento lezioni", err);
      } finally {
        setLoading(false);
      }
    };
    fetchAllLessons();
  }, []); // Array vuoto, esegue solo una volta

  // Filtra le lezioni ogni volta che 'allLessons' o 'selectedLevel' cambiano
  useEffect(() => {
    const filtered = allLessons.filter(
      (l) => (l.level || "").toLowerCase() === selectedLevel
    );
    setFilteredLessons(filtered);
  }, [allLessons, selectedLevel]); // Si ri-esegue quando i dati o il filtro cambiano

  return (
    <Container className="mt-4 text-light">
      <h1 className="accademia-section">📚 Benvenuto nella tua Accademia</h1>

      {/* 🔽 SEZIONE FILTRO LIVELLO 🔽 */}
      <Row className="my-4 p-3 bg-dark rounded align-items-center">
        <Col md={6}>
          <h2 className="mb-3 mb-md-0 h4">
            Stai vedendo le lezioni per il livello: 
            <strong className="text-warning text-capitalize"> {selectedLevel}</strong>
          </h2>
        </Col>
        <Col md={6}>
          <Form.Group>
            <Form.Label className="fw-bold">Mostra lezioni di un altro livello:</Form.Label>
            <Form.Select 
              value={selectedLevel} 
              onChange={(e) => setSelectedLevel(e.target.value)}
              className="bg-secondary text-white"
            >
              <option value="principiante">Principiante</option>
              <option value="intermedio">Intermedio</option>
              <option value="pro">Pro</option>
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>

      {/* 🔽 SEZIONE CONTENUTO LEZIONI 🔽 */}
      {loading ? (
        <div className="text-center">
          <Spinner animation="border" variant="warning" />
          <p>Caricamento lezioni...</p>
        </div>
      ) : (
        <Row>
          {filteredLessons.length > 0 ? (
            filteredLessons.map((lesson) => (
              <Col key={lesson._id} xs={12} md={6} lg={3} className="mb-4">
                <LessonCard lesson={lesson} />
              </Col>
            ))
          ) : (
            <Col>
              <p className="text-warning fs-5">
                😢 Nessuna lezione disponibile per il livello selezionato.
              </p>
            </Col>
          )}
        </Row>
      )}
    </Container>
  );
};

export default LearnPage;