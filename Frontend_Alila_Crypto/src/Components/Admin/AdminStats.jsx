import React, { useEffect, useState } from "react";
import { Card, Row, Col, Container, Spinner, Alert } from "react-bootstrap";
import api from "@/utils/api";

const AdminStats = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchStats = async () => {
    try {
      const res = await api.get("/admin/dashboard");
      setStats(res.data.stats);
    } catch {
      setError("❌ Errore nel caricamento delle statistiche.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStats();
  }, []);

  return (
    <Container className="text-light">
      <h2 className="mb-4">📊 Statistiche Generali</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      {loading ? (
        <Spinner animation="border" />
      ) : (
        <Row className="g-4">
          <Col md={4}>
            <Card bg="primary" text="light" className="text-center shadow">
              <Card.Body>
                <Card.Title>👥 Utenti Registrati</Card.Title>
                <Card.Text className="fs-3">{stats.utenti}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card bg="success" text="light" className="text-center shadow">
              <Card.Body>
                <Card.Title>📚 Lezioni Totali</Card.Title>
                <Card.Text className="fs-3">{stats.lezioni}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card bg="danger" text="light" className="text-center shadow">
              <Card.Body>
                <Card.Title>🚩 Post Segnalati</Card.Title>
                <Card.Text className="fs-3">{stats.postSegnalati}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default AdminStats;