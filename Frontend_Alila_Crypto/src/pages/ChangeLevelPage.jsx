import { useNavigate } from "react-router-dom";
import { Container, Card, Row, Col, Button } from "react-bootstrap";
import { FaSmileBeam, FaRocket, FaGem, FaArrowLeft } from "react-icons/fa";
import api from "@/utils/api";
import { toast } from "react-toastify";

const ChangeLevelPage = () => {
  const navigate = useNavigate();
  
  const handleLevelSelect = async (level) => {
    try {
      const selectedLevel = level.toLowerCase();
      await api.put(`/auth/profile`, { level: selectedLevel });
      localStorage.setItem("userLevel", selectedLevel);
      toast.success(`Livello aggiornato a: ${level.toUpperCase()}`);
      navigate(`/dashboard`); 
    } catch (err) {
      console.error("Errore cambio livello:", err);
      toast.error("Errore nell'aggiornamento del livello.");
    }
  };

  return (
    <Container className="py-5 text-light">
      <Button variant="outline-light" className="mb-4 px-4 rounded-pill" onClick={() => navigate('/profile')}>
        <FaArrowLeft className="me-2" /> Torna al Profilo
      </Button>

      <div className="text-center mb-5">
        <h1 className="display-5 fw-bold mb-3">Cambia il tuo Percorso</h1>
        <p className="lead text-muted" style={{ maxWidth: "700px", margin: "0 auto" }}>
            Le tue competenze sono cresciute? O vuoi ripassare le basi? <br/>
            Cambia livello per sbloccare un cruscotto diverso.
        </p>
      </div>

      <Row className="g-4 justify-content-center text-center">
        {/* Principiante */}
        <Col md={4}>
          <Card className="bg-dark text-light p-4 h-100 border-secondary hover-card" onClick={() => handleLevelSelect("principiante")}>
            <Card.Body>
                <FaSmileBeam size={70} className="text-warning mb-4" />
                <h2 className="h3 fw-bold text-warning">Principiante</h2>
                <hr className="border-warning my-3 opacity-50"/>
                <p className="fs-5">Torna alle basi: Wallet, Sicurezza e primo acquisto.</p>
            </Card.Body>
          </Card>
        </Col>

        {/* Intermedio */}
        <Col md={4}>
          <Card className="bg-dark text-light p-4 h-100 border-secondary hover-card" onClick={() => handleLevelSelect("intermedio")}>
            <Card.Body>
                <FaRocket size={70} className="text-success mb-4" />
                <h2 className="h3 fw-bold text-success">Intermedio</h2>
                <hr className="border-success my-3 opacity-50"/>
                <p className="fs-5">Approfondisci: NFT, Staking e finanza decentralizzata.</p>
            </Card.Body>
          </Card>
        </Col>

        {/* Pro */}
        <Col md={4}>
          <Card className="bg-dark text-light p-4 h-100 border-secondary hover-card" onClick={() => handleLevelSelect("pro")}>
            <Card.Body>
                <FaGem size={70} className="text-danger mb-4" />
                <h2 className="h3 fw-bold text-danger">Pro</h2>
                <hr className="border-danger my-3 opacity-50"/>
                <p className="fs-5">Massimi livelli: Trading algoritmico, leve e Yield Farming.</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ChangeLevelPage;