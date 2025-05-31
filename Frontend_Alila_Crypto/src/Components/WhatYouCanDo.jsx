import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaBookOpen, FaUsers, FaChartLine } from "react-icons/fa";
import "../styles/WhatYouCanDo.css";

function WhatYouCanDo() {
  return (
    <section className="features-section py-5 text-light">
      <Container>
        <h2 className="text-center fw-bold mb-5 display-5">Cosa puoi fare con Ali&La Crypto</h2>
        <Row className="g-4 justify-content-center text-center">
          <Col md={4}>
            <div className="feature-card p-4 bg-dark rounded shadow-sm h-100">
              <FaBookOpen size={40} className="mb-3 text-warning" />
              <h5 className="fw-bold">Imparare</h5>
              <p>Accedi a corsi, video e contenuti educativi crypto per ogni livello.</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="feature-card p-4 bg-dark rounded shadow-sm h-100">
              <FaUsers size={40} className="mb-3 text-success" />
              <h5 className="fw-bold">Connetterti</h5>
              <p>Partecipa alla community, forum, feed e gruppi tematici per utenti.</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="feature-card p-4 bg-dark rounded shadow-sm h-100">
              <FaChartLine size={40} className="mb-3 text-danger" />
              <h5 className="fw-bold">Monitorare</h5>
              <p>Gestisci il tuo portafoglio e segui il mercato in tempo reale.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default WhatYouCanDo;