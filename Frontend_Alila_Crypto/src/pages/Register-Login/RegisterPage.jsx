import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Form, Button, InputGroup, Alert } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import axios from "axios";
import "@/styles/RegisterPage.css";
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { useAuth } from "../../context/AuthContext"; // <== IMPORTA


function RegisterPage() {
  const { level } = useParams();
  const navigate = useNavigate();
  const { login } = useAuth();
  const [serverError, setServerError] = useState("");

  const formattedLevel =
    level === "principiante"
      ? "Principiante"
      : level === "intermedio"
      ? "Intermedio"
      : level === "pro"
      ? "Pro"
      : "";

  const [showPassword, setShowPassword] = useState(false);

  const schema = Yup.object().shape({
    username: Yup.string().required("Username obbligatorio"),
    email: Yup.string().email("Email non valida").required("Email obbligatoria"),
    password: Yup.string().min(6, "Minimo 6 caratteri").required("Password obbligatoria"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Le password non coincidono")
      .required("Conferma la password"),
    terms: Yup.boolean().oneOf([true], "Devi accettare i termini"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    try {
      setServerError(""); // reset errori precedenti
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/auth/register`, {
        username: data.username,
        email: data.email,
        password: data.password,
        level: formattedLevel || "principiante",
      });

      if (response.status === 201) {
        const token = response.data.token;
        if (token) login(token); // <== aggiorna il context
        navigate(`/welcome/${level}`);
      }
    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        setServerError(err.response.data.message);
      } else {
        setServerError("Errore nella registrazione. Riprova.");
      }
    }
  };

  return (
    <Container className="py-5 text-light">
      <h2 className="mb-4">Registrazione</h2>
      <Form onSubmit={handleSubmit(onSubmit)} className="bg-dark p-4 rounded shadow">
        {serverError && <Alert variant="danger">{serverError}</Alert>}

        {level && (
          <p className="mb-3">
            Livello selezionato: <strong>{level}</strong>
          </p>
        )}

        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Inserisci il tuo username" {...register("username")} />
          <p className="text-danger small">{errors.username?.message}</p>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Inserisci la tua email" {...register("email")} />
          <p className="text-danger small">{errors.email?.message}</p>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <InputGroup>
            <Form.Control
              type={showPassword ? "text" : "password"}
              placeholder="Crea una password"
              {...register("password")}
            />
            <Button variant="secondary" onClick={() => setShowPassword((prev) => !prev)}>
              👁️
            </Button>
          </InputGroup>
          <p className="text-danger small">{errors.password?.message}</p>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Conferma Password</Form.Label>
          <InputGroup>
            <Form.Control
              type={showPassword ? "text" : "password"}
              placeholder="Conferma la password"
              {...register("confirmPassword")}
            />
            <Button variant="secondary" onClick={() => setShowPassword((prev) => !prev)}>
              👁️
            </Button>
          </InputGroup>
          <p className="text-danger small">{errors.confirmPassword?.message}</p>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Check
            type="checkbox"
            label="Accetto i termini e le condizioni"
            {...register("terms")}
          />
          <p className="text-danger small">{errors.terms?.message}</p>
        </Form.Group>

        <Button variant="primary" type="submit" className="fw-bold">
          Registrati
        </Button>
      </Form>

      <p className="text-center mt-4">oppure</p>
      <div className="d-flex justify-content-center mt-2">
        <GoogleLogin
          onSuccess={async (credentialResponse) => {
            const googleToken = credentialResponse.credential;

            if (!googleToken) {
              alert("Token Google mancante");
              return;
            }

            try {
              const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/auth/google-popup`, {
                token: googleToken,
              });

              const { token, user, isNewUser } = response.data;

              login(token); // <-- aggiorna lo stato globale e localStorage

              if (isNewUser) {
                navigate(`/welcome/${user.level.toLowerCase()}`);
              } else {
                navigate(`/dashboard/${user.level.toLowerCase()}`);
              }
            } catch (err) {
              console.error("❌ Errore Google Login:", err);
              alert("Errore durante la registrazione con Google");
            }
          }}
          onError={() => {
            alert("Errore Google Login");
          }}
        />

      </div>

    </Container>
  );
}

export default RegisterPage;