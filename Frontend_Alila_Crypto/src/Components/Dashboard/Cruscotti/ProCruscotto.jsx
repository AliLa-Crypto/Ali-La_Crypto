import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaChartArea, FaBriefcase, FaUsers, FaShieldAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const ProCruscotto = () => {
  const navigate = useNavigate();

  return (
    <Container fluid>
      <h2 className="mb-4 text-danger">Livello Pro: Padroneggia il mercato.</h2>
      <p className="text-muted mb-4">Strumenti avanzati per trader esperti e gestione professionale del portafoglio.</p>
      
      <Row className="g-4">
        {/* Card 1: Trading Avanzato */}
        <Col md={12} lg={8}>
          <Card bg="dark" text="light" className="h-100 border-danger shadow-sm">
            <Card.Body>
              <div className="d-flex align-items-center mb-3">
                <FaChartArea size={35} className="text-danger me-3" />
                <Card.Title className="mb-0 fs-4">Trading Station</Card.Title>
              </div>
              <Card.Text>
                Grafici in tempo reale, indicatori tecnici avanzati (RSI, MACD) e strumenti per il day trading.
              </Card.Text>
              <Button variant="danger" size="lg" onClick={() => navigate('/strumenti/trading')}>
                Apri Trading Station
              </Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Card 2: Portfolio Management */}
        <Col md={6} lg={4}>
          <Card bg="dark" text="light" className="h-100 border-warning shadow-sm">
            <Card.Body>
              <div className="d-flex align-items-center mb-3">
                <FaBriefcase size={30} className="text-warning me-3" />
                <Card.Title className="mb-0">Portfolio Tracker</Card.Title>
              </div>
              <Card.Text>
                Traccia il P&L (Profitti e Perdite) di tutti i tuoi asset su diverse chain in un unico posto.
              </Card.Text>
              <Button variant="outline-warning" onClick={() => navigate('/portfolio')}>
                Gestisci Portfolio
              </Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Card 3: Forum Esperti */}
        <Col md={6} lg={6}>
          <Card bg="dark" text="light" className="h-100 border-secondary shadow-sm">
            <Card.Body>
              <div className="d-flex align-items-center mb-3">
                <FaUsers size={30} className="text-light me-3" />
                <Card.Title className="mb-0">Community Pro</Card.Title>
              </div>
              <Card.Text>
                Discuti strategie avanzate, yield farming e previsioni con altri utenti esperti.
              </Card.Text>
              <Button variant="outline-light" onClick={() => navigate('/forum')}>
                Vai al Forum
              </Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Card 4: Sicurezza Avanzata */}
        <Col md={6} lg={6}>
          <Card bg="dark" text="light" className="h-100 border-secondary shadow-sm">
            <Card.Body>
              <div className="d-flex align-items-center mb-3">
                <FaShieldAlt size={30} className="text-info me-3" />
                <Card.Title className="mb-0">Hardware Wallets</Card.Title>
              </div>
              <Card.Text>
                Confronta i migliori Cold Wallet per mettere al sicuro capitali importanti.
              </Card.Text>
              <Button variant="outline-info" onClick={() => navigate('/strumenti/wallet')}>
                Sicurezza Crypto
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ProCruscotto;