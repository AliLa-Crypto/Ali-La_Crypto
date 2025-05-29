import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "../styles/LevelSelector.css"
import { useNavigate } from "react-router-dom";

function LevelSelector() {
  const navigate = useNavigate();

  const handleSelect = (level) => {
    navigate(`/register/${level}`);
  };

  return (
    <section id="livelli" className="py-5 text-light">
      <Container>
        <h2 className="text-center fw-bold mb-5 display-5">Scegli il tuo livello</h2>
        <Row className="g-5 justify-content-center">
          <Col md={4}>
            <Card className="text-center border-warning h-100">
              <Card.Body>
                <Card.Title className="text-dark fs-2">Principiante</Card.Title>
                <Card.Text className="fw-bold">
                    Inizia dalle basi: wallet, blockchain, sicurezza e primi acquisti.
                </Card.Text>
                <Button variant="warning" className="fw-bold" onClick={() => handleSelect("principiante")}>
                  Entra
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="text-center border-success h-100">
              <Card.Body>
                <Card.Title className="text-white fs-2">Intermedio</Card.Title>
                <Card.Text className="fw-bold">
                    Approfondisci: altcoin, analisi grafici, exchange, NFT e staking
                </Card.Text>
                <Button variant="success" className="fw-bold" onClick={() => handleSelect("intermedio")}>
                  Entra
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="text-center border-danger h-100">
              <Card.Body>
                <Card.Title className="text-white fs-2">Pro</Card.Title>
                <Card.Text className="fw-bold">
                    Strategie avanzate, DeFi, trading, DAO, layer 2 e sicurezza evoluta.
                </Card.Text>
                <Button variant="danger" className="fw-bold" onClick={() => handleSelect("pro")}>
                  Entra
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default LevelSelector;