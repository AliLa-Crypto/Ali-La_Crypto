import { Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Unauthorized = () => {
  const navigate = useNavigate();

  return (
    <Container className="text-center text-light py-5">
      <h1 className="display-4 text-danger mb-4">🚫 Accesso Negato</h1>
      <p className="fs-5">
        Non hai i permessi per accedere a questa sezione. Solo gli amministratori sono autorizzati.
      </p>
      <Button variant="warning" className="mt-4" onClick={() => navigate("/")}>
        🔙 Torna alla Home
      </Button>
    </Container>
  );
};

export default Unauthorized;