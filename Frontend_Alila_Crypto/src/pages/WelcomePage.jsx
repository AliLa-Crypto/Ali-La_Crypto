import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Alert } from "react-bootstrap"; 
import { motion } from "framer-motion";
import { FaSmileBeam, FaRocket, FaGem, FaInfoCircle } from "react-icons/fa";
import api from "@/utils/api";

const MotionDiv = motion.div;

const WelcomePage = () => {
  const navigate = useNavigate();
  
  const handleLevelSelect = async (level) => {
    try {
      const selectedLevel = level.toLowerCase();
      await api.put(`/auth/profile`, { level: selectedLevel });
      localStorage.setItem("userLevel", selectedLevel);
      navigate(`/dashboard`);
    } catch (err) {
      console.error("Errore livello:", err);
      // Fallback sicuro
      localStorage.setItem("userLevel", level.toLowerCase());
      navigate(`/dashboard`);
    }
  };

  return (
    <Container className="py-5 d-flex flex-column justify-content-center align-items-center" style={{ minHeight: "85vh" }}>
      
      {/* SEZIONE TITOLO (Senza stili inline) */}
      <MotionDiv 
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="welcome-header-container" // Nuova classe CSS da App.css
      >
        <h1 className="display-title mb-3">
          Benvenuto in <span className="text-warning">Ali&La Crypto</span>
        </h1>
        
        <p className="lead fs-3 mb-4 text-light">
          Scegli il tuo punto di partenza.
        </p>
        
        <p className="text-light opacity-75 fs-5 mb-4"> 
          La tua esperienza sarà personalizzata in base a questa scelta. 
          Non preoccuparti, il <strong>livello</strong> è solo un filtro iniziale per non annoiarti o confonderti.
        </p>

        <Alert variant="dark" className="d-inline-block border-secondary text-light bg-dark">
          <div className="text-center text-light">
            <FaInfoCircle className="me-2 text-info" />
          Se non scegli, inizierai automaticamente come <strong>Principiante</strong>.
          </div>
          <div className="text-center text-light">
            <FaInfoCircle className="me-2 text-info" />
            Potrai cambiare livello in qualsiasi momento dal tuo <strong>Profilo</strong>.
          </div>
        </Alert>
      </MotionDiv>

      {/* SEZIONE CARDS */}
      <Row className="g-4 w-100 justify-content-center">
        
        {/* Principiante */}
        <Col md={6} lg={4}>
          <MotionDiv 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="h-100"
          >
            <div className="crypto-card p-4 text-center" onClick={() => handleLevelSelect("principiante")}>
              <div className="card-icon-wrapper">
                <FaSmileBeam size={40} className="text-warning" />
              </div>
              <h3 className="text-warning mb-3">Principiante</h3>
              <p className="card-desc text-light opacity-75">
                Parti da zero? Impara cosa sono le crypto, come aprire un wallet e come proteggerti dalle truffe.
              </p>
              <div className="mt-3 badge bg-warning text-dark px-3 py-2 rounded-pill">Start Here</div>
            </div>
          </MotionDiv>
        </Col>

        {/* Intermedio */}
        <Col md={6} lg={4}>
          <MotionDiv 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="h-100"
          >
            <div className="crypto-card p-4 text-center" onClick={() => handleLevelSelect("intermedio")}>
              <div className="card-icon-wrapper">
                <FaRocket size={40} className="text-info" />
              </div>
              <h3 className="text-info mb-3">Intermedio</h3>
              <p className="card-desc text-light opacity-75">
                Hai già delle crypto? Scopri il mondo degli NFT, lo Staking e come usare gli Exchange decentralizzati.
              </p>
              <div className="mt-3 badge bg-info text-dark px-3 py-2 rounded-pill">Level Up</div>
            </div>
          </MotionDiv>
        </Col>

        {/* Pro */}
        <Col md={6} lg={4}>
          <MotionDiv 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="h-100"
          >
            <div className="crypto-card p-4 text-center" onClick={() => handleLevelSelect("pro")}>
              <div className="card-icon-wrapper">
                <FaGem size={40} className="text-danger" />
              </div>
              <h3 className="text-danger mb-3">Pro Trader</h3>
              <p className="card-desc text-light opacity-75">
                Per investitori esperti. Strategie di Trading, Analisi Tecnica avanzata e DeFi Yield Farming.
              </p>
              <div className="mt-3 badge bg-danger text-white px-3 py-2 rounded-pill">Max Power</div>
            </div>
          </MotionDiv>
        </Col>

      </Row>

    </Container>
  );
};

export default WelcomePage;