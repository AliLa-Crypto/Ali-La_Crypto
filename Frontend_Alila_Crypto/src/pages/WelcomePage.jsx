import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Button, Card, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaBookOpen, FaUsers, FaChartLine, FaSmileBeam, FaRocket, FaGem } from "react-icons/fa";

const WelcomePage = () => {
  const { level } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (level) {
      localStorage.setItem("userLevel", level);
    }
  }, [level]);

  const levelInfo = {
    principiante: {
      title: "Benvenuto, Principiante!",
      description: "Inizia il tuo viaggio nelle crypto con basi solide e strumenti facili da usare.",
      color: "warning",
    },
    intermedio: {
      title: "Benvenuto, Intermedio!",
      description: "Approfondisci altcoin, NFT, staking e strategie intermedie.",
      color: "success",
    },
    pro: {
      title: "Benvenuto, Pro!",
      description: "Trading avanzato, DeFi, DAO e strumenti professionali ti aspettano.",
      color: "danger",
    },
  };

  const iconMap = {
    principiante: <FaSmileBeam size={40} className="text-warning mb-3" />,
    intermedio: <FaRocket size={40} className="text-success mb-3" />,
    pro: <FaGem size={40} className="text-danger mb-3" />,
  };

  const current = levelInfo[level] || {
    title: "Benvenuto!",
    description: "Scopri cosa puoi fare sulla nostra piattaforma.",
    color: "light",
  };

  const currentIcon = iconMap[level] || <FaSmileBeam size={40} className="text-light mb-3" />;

  const handleGoToDashboard = () => {
    navigate(`/accademia/${level}`);
  };

  return (
    <Container className="py-5 text-light">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Card bg="dark" text="light" className="shadow-lg p-4 mb-5" style={{ maxWidth: "700px", margin: "0 auto" }}>
          <Card.Body className="text-center">
            {currentIcon}
            <h2 className={`text-${current.color} fw-bold mb-3`}>{current.title}</h2>
            <p className="fs-5">{current.description}</p>
            <Button variant={current.color} size="lg" className="mt-3" onClick={handleGoToDashboard}>
              Vai alla Accademia
            </Button>
          </Card.Body>
        </Card>

        <Row className="g-4 text-center">
            <h1>Cosa puoi fare sulla piattaforma</h1>
          <Col md={4}>
            <div className="p-4 bg-dark rounded shadow-sm h-100">
              <FaBookOpen size={40} className="mb-3 text-warning" />
              <h4 className="fw-bold">Impara in base al tuo livello</h4>
              <p className="large">Accedi a corsi, articoli e quiz pensati per il tuo profilo.</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="p-4 bg-dark rounded shadow-sm h-100">
              <FaUsers size={40} className="mb-3 text-success" />
              <h4 className="fw-bold">Unisciti alla community</h4>
              <p className="large">Partecipa a forum, gruppi e discussioni tra utenti come te.</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="p-4 bg-dark rounded shadow-sm h-100">
              <FaChartLine size={40} className="mb-3 text-danger" />
              <h4 className="fw-bold">Monitora il mercato</h4>
              <p className="large">Tieni d’occhio prezzi, portafoglio e trend in tempo reale.</p>
            </div>
          </Col>
        </Row>
      </motion.div>
    </Container>
  );
};

export default WelcomePage;