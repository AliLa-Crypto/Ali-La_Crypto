import { Container, Button } from 'react-bootstrap';
import { FaTools } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const ComingSoon = ({ title = "Pagina in Costruzione" }) => {
  const navigate = useNavigate();
  return (
    <Container className="text-center text-light py-5">
      <FaTools size={60} className="text-warning mb-4" />
      <h1 className="display-4">{title}</h1>
      <p className="fs-5">
        Stiamo lavorando per preparare questa sezione. Torna a trovarci presto!
      </p>
      <Button variant="warning" className="mt-4" onClick={() => navigate("/dashboard")}>
        Torna alla Area Personale
      </Button>
    </Container>
  );
};
export default ComingSoon;