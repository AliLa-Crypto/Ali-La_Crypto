import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Form, Button, InputGroup, Alert } from "react-bootstrap";
import api from "@/utils/api";

const ResetPasswordPage = () => {
  const { token } = useParams();
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");
  const [confermaPassword, setConfermaPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newPassword !== confermaPassword) {
      setMessage("❌ Le password non coincidono");
      return;
    }

    try {
      await api.post(`/auth/reset-password/${token}`, {
        newPassword,
      });
      setMessage("Password aggiornata. Ora puoi accedere.");
      setNewPassword("");
      setConfermaPassword("");

    } catch (err) {
      setMessage("Errore. Token scaduto o non valido.");
    }
  };

  return (
    <Container className="py-5 text-light">
      <h3>Reimposta la tua password</h3>
      <Form onSubmit={handleSubmit}>
        
        <Form.Group className="mb-3">
          <Form.Label>Nuova Password</Form.Label>
          <InputGroup>
            <Form.Control
              type={showPassword ? "text" : "password"}
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
            <Button variant="secondary" onClick={() => setShowPassword((prev) => !prev)}>
              {showPassword ? "🙈" : "👁️"}
            </Button>
          </InputGroup>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Conferma Password</Form.Label>
          <InputGroup>
            <Form.Control
              type={showConfirm ? "text" : "password"}
              value={confermaPassword}
              onChange={(e) => setConfermaPassword(e.target.value)}
              required
            />
            <Button variant="secondary" onClick={() => setShowConfirm((prev) => !prev)}>
              {showConfirm ? "🙈" : "👁️"}
            </Button>
          </InputGroup>
        </Form.Group>

        <Button type="submit" variant="success">Conferma</Button>
      </Form>
      {message && <Alert variant="info" className="mt-3">{message}</Alert>}
    </Container>
  );
};

export default ResetPasswordPage;