import React, { useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import axios from "axios";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${import.meta.env.VITE_BACKEND_URL}/auth/forgot-password`, { email });
      setMessage("Controlla la tua email per reimpostare la password.");
    } catch (err) {
      setMessage("Errore. Riprova.");
    }
  };

  return (
    <Container className="py-5 text-light">
      <h3>Hai dimenticato la password?</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Email registrata</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>
        <Button type="submit" variant="warning">Invia link</Button>
      </Form>
      {message && <Alert variant="info" className="mt-3">{message}</Alert>}
    </Container>
  );
};

export default ForgotPasswordPage;