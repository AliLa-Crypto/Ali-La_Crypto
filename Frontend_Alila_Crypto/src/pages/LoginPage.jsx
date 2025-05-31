import React from "react";
import { useForm } from "react-hook-form";
import { Container, Form, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    // Qui inviare le credenziali al backend
    console.log("Dati di login:", data);
    alert("Accesso in corso...");
  };

  return (
    <Container className="py-5 text-light">
      <h2 className="mb-4">Accedi al tuo account</h2>

      <Form onSubmit={handleSubmit(onSubmit)} className="bg-dark p-4 rounded shadow">
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Inserisci la tua email"
            {...register("email", { required: "Email obbligatoria" })}
          />
          {errors.email && <Alert variant="warning" className="mt-2">{errors.email.message}</Alert>}
        </Form.Group>

        <Form.Group className="mb-4" controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Inserisci la password"
            {...register("password", { required: "Password obbligatoria" })}
          />
          {errors.password && <Alert variant="warning" className="mt-2">{errors.password.message}</Alert>}
        </Form.Group>

        <Button variant="primary" type="submit" className="fw-bold">
          Accedi
        </Button>

        <p className="mt-4 text-light">
          Non sei registrato?
          <Link to="/register" className="text-warning fw-bold ps-3">Registrati</Link>
        </p>
      </Form>
    </Container>
  );
}

export default LoginPage;