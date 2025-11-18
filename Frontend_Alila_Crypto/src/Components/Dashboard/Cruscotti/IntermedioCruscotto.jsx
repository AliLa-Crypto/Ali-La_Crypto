import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaChartLine, FaLayerGroup, FaSearchDollar, FaRocket } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const IntermedioCruscotto = () => {
  const navigate = useNavigate();

  return (
    <Container fluid>
      <h2 className="mb-4">Livello Intermedio: Espandi i tuoi orizzonti.</h2>
      <p className="text-muted mb-4">Hai le basi. Ora è il momento di analizzare il mercato e capire la tecnologia.</p>
      
      <Row className="g-4">
        {/* Card 1: Analisi Mercato */}
        <Col md={6} lg={6}>
          <Card bg="dark" text="light" className="h-100 border-success shadow-sm">
            <Card.Body>
              <div className="d-flex align-items-center mb-3">
                <FaChartLine size={30} className="text-success me-3" />
                <Card.Title className="mb-0">Analisi di Mercato</Card.Title>
              </div>
              <Card.Text>
                Non comprare a caso. Analizza trend, capitalizzazione e volumi delle criptovalute principali.
              </Card.Text>
              <Button variant="outline-success" onClick={() => navigate('/strumenti/analisi')}>
                Vai ai Dati di Mercato
              </Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Card 2: Lezioni Intermedie */}
        <Col md={6} lg={6}>
          <Card bg="dark" text="light" className="h-100 border-secondary shadow-sm">
            <Card.Body>
              <div className="d-flex align-items-center mb-3">
                <FaLayerGroup size={30} className="text-info me-3" />
                <Card.Title className="mb-0">Staking & DeFi</Card.Title>
              </div>
              <Card.Text>
                Impara come far fruttare le tue crypto passivamente e scopri la finanza decentralizzata.
              </Card.Text>
              <Button variant="outline-info" onClick={() => navigate('/dashboard')}>
                Vai alle Lezioni
              </Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Card 3: Blockchain Explorer */}
        <Col md={6} lg={6}>
          <Card bg="dark" text="light" className="h-100 border-secondary shadow-sm">
            <Card.Body>
              <div className="d-flex align-items-center mb-3">
                <FaSearchDollar size={30} className="text-primary me-3" />
                <Card.Title className="mb-0">Blockchain Explorer</Card.Title>
              </div>
              <Card.Text>
                Impara a tracciare le transazioni e verificare i contratti direttamente sulla blockchain.
              </Card.Text>
              <Button variant="outline-primary" onClick={() => navigate('/strumenti/explorer')}>
                Usa gli Explorer
              </Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Card 4: Exchange */}
        <Col md={6} lg={6}>
          <Card bg="dark" text="light" className="h-100 border-secondary shadow-sm">
            <Card.Body>
              <div className="d-flex align-items-center mb-3">
                <FaRocket size={30} className="text-warning me-3" />
                <Card.Title className="mb-0">Exchange & Swap</Card.Title>
              </div>
              <Card.Text>
                Confronta le piattaforme migliori per scambiare le tue crypto con basse commissioni.
              </Card.Text>
              <Button variant="outline-warning" onClick={() => navigate('/strumenti/exchange')}>
                Lista Exchange
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default IntermedioCruscotto;