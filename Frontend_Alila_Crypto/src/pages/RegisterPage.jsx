import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Form, Button, InputGroup } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import "../styles/RegisterPage.css";

function RegisterPage() {
  
  const { level } = useParams();
  const selectedLevel = level || "";

  const formattedLevel =
    selectedLevel === "principiante"
      ? "Principiante"
      : selectedLevel === "intermedio"
      ? "Intermedio"
      : selectedLevel === "pro"
      ? "Pro"
      : "";

  // 👁️ password toggle
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

  const onSubmit = (data) => {
    alert(`Registrazione inviata per livello ${formattedLevel || data.selectedLevel}`);
    console.log(data);
  };

  return (
    <Container className="py-5 text-light">
      <h2 className="mb-4">Registrazione</h2>
      <Form onSubmit={handleSubmit(onSubmit)} className="bg-dark p-4 rounded shadow">


        {level && (
          <p className="mb-3">
            Livello selezionato: <strong>{formattedLevel}</strong>
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
          <Form.Control
            type={showPassword ? "text" : "password"}
            placeholder="Conferma la password"
            {...register("confirmPassword")}
          />
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
    </Container>
  );
}

export default RegisterPage;