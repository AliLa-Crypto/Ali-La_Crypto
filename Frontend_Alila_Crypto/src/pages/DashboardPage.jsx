import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Alert } from "react-bootstrap";
import axios from "axios";


const DashboardPage = () => {
  const navigate = useNavigate();
  const { level: paramLevel } = useParams();
  const [userLevel, setUserLevel] = useState("");
  const [accessMessage, setAccessMessage] = useState("");

  useEffect(() => {
    // Recupera livello da localStorage o da URL
    const storedLevel = localStorage.getItem("userLevel");
    if (storedLevel) {
      setUserLevel(storedLevel);
    } else if (paramLevel) {
      setUserLevel(paramLevel);
    } else {
      navigate("/login"); // fallback
    }
  }, [paramLevel, navigate]);

  useEffect(() => {
    // Verifica accesso alla rotta protetta in base al livello
    const testAccess = async () => {
      try {
        const token = localStorage.getItem("accessToken");
        if (!token) {
          setAccessMessage("Token mancante. Effettua il login.");
          return;
        }

        const endpoint =
          userLevel === "pro"
            ? "/pro"
            : userLevel === "intermedio"
            ? "/intermedio"
            : "/principiante";

        const res = await axios.get(`http://localhost:3740/api/protected${endpoint}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setAccessMessage(res.data.message);
      } catch (err) {
        setAccessMessage(err.response?.data?.message || "Errore nell'accesso.");
      }
    };

    if (userLevel) testAccess();
  }, [userLevel]);

  return (
    <Container className="py-5 text-light">
      <h2 className="mb-4">Dashboard – Livello: {userLevel}</h2>

      {userLevel === "principiante" && (
        <p>Benvenuto! Inizia con i corsi base, crea il tuo wallet e fai il primo acquisto.</p>
      )}
      {userLevel === "intermedio" && (
        <p>Pronto per approfondire? Scopri gli NFT, staking e gli exchange decentralizzati.</p>
      )}
      {userLevel === "pro" && (
        <p>Benvenuto trader avanzato! Esplora la DeFi, DAO e strategie di yield farming.</p>
      )}
    </Container>
  );
};

export default DashboardPage;