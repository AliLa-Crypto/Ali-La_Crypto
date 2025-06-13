import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Container, Form, Button, Alert, InputGroup } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import api from "@/utils/api";
import { useAuth } from "@/context/AuthContext";
import GoogleLoginButton from "@/Components/GoogleLoginButton";

function LoginPage() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await api.post(`/auth/login`, {
        email: data.email,
        password: data.password,
      });

      const { token, user } = response.data;

      login(token); // Salva il token nel context e nel localStorage
      navigate(`/dashboard/${user.level.toLowerCase()}`);
    } catch (err) {
      alert(err.response?.data?.message || "Errore durante il login");
    }
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
          <InputGroup>
            <Form.Control
              type={showPassword ? "text" : "password"}
              placeholder="Inserisci la password"
              {...register("password", { required: "Password obbligatoria" })}
            />
            <Button variant="secondary" onClick={() => setShowPassword(prev => !prev)}>
              👁️
            </Button>
          </InputGroup>
          {errors.password && <Alert variant="warning" className="mt-2">{errors.password.message}</Alert>}
        </Form.Group>

        <Button variant="primary" type="submit" className="fw-bold w-100">
          Accedi
        </Button>

        <p className="text-center mt-4">oppure</p>

        <div className="d-flex justify-content-center mt-2">
          <GoogleLoginButton /> {/* ✅ COMPONENTE GOOGLE */}
        </div>

        <p className="mt-4 text-light">
          Non sei registrato?
          <Link to="/register" className="text-warning fw-bold ps-3">Registrati</Link>
        </p>
        <p className="mt-2">
          <Link to="/forgot-password" className="text-warning">Hai dimenticato la password?</Link>
        </p>
      </Form>
    </Container>
  );
}

export default LoginPage;