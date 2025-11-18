import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaGraduationCap, FaWallet } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const PrincipianteCruscotto = () => {
  const navigate = useNavigate();
  return (
    <Container fluid>
      <h2 className="mb-4">Ciao! Benvenuto nel tuo viaggio Crypto.</h2>
      <Row>
        <Col md={6} className="mb-4">
          <Card bg="dark" text="light" className="h-100">
            <Card.Body>
              <FaGraduationCap size={30} className="text-warning mb-3" />
              <Card.Title>Inizia a Imparare</Card.Title>
              <Card.Text>Parti dalle basi. La tua prima lezione è pronta.</Card.Text>
              <Button variant="warning" onClick={() => navigate('/dashboard/learn')}>
                Vai alla Lezione 1
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className="mb-4">
          <Card bg="dark" text="light" className="h-100">
            <Card.Body>
              <FaWallet size={30} className="text-info mb-3" />
              <Card.Title>I Tuoi Primi Strumenti</Card.Title>
              <Card.Text>Scopri quali sono i Wallet più sicuri per iniziare.</Card.Text>
              <Button variant="info" onClick={() => navigate('/strumenti/wallet')}>
                Scopri i Wallet
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default PrincipianteCruscotto;