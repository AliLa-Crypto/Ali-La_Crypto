import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "@/components/Dashboard/Sidebar";
import LearnPage from "@/pages/Users/LearnPage"
import api from "@/utils/api";
import "@/styles/DashboardPage.css";

const DashboardPage = () => {
  const navigate = useNavigate();
  const { level: paramLevel } = useParams();
  const [userLevel, setUserLevel] = useState("");
  const [accessMessage, setAccessMessage] = useState("");
  const [selectedModule, setSelectedModule] = useState("profile");

  useEffect(() => {
    const storedLevel = localStorage.getItem("userLevel");
    if (storedLevel) {
      setUserLevel(storedLevel);
    } else if (paramLevel) {
      setUserLevel(paramLevel);
    } else {
      navigate("/login");
    }
  }, [paramLevel, navigate]);

  useEffect(() => {
    const testAccess = async () => {
      try {
        const token = localStorage.getItem("token");
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

        const res = await api.get(`/protected${endpoint}`);

        setAccessMessage(res.data.message);
      } catch (err) {
        setAccessMessage(err.response?.data?.message || "Errore nell'accesso.");
      }
    };

    if (userLevel) testAccess();
  }, [userLevel]);

  const renderContent = () => {
    switch (selectedModule) {
      case "learn":
        return <LearnPage />;
      case "forum":
        return <p>💬 Forum community – Prossimamente!</p>;
      case "portfolio":
        return <p>📈 Portafoglio demo – Prossimamente!</p>;
      case "profile":
        return (
          <>
            <p>👤 Profilo utente con XP, livello e avatar.</p>
            {userLevel === "principiante" && (
              <p>Benvenuto! Inizia con i corsi base, crea il tuo wallet e fai il primo acquisto.</p>
            )}
            {userLevel === "intermedio" && (
              <p>Pronto per approfondire? Scopri gli NFT, staking e gli exchange decentralizzati.</p>
            )}
            {userLevel === "pro" && (
              <p>Benvenuto trader avanzato! Esplora la DeFi, DAO e strategie di yield farming.</p>
            )}
          </>
        );
      default:
        return <p>🔧 Sezione in sviluppo.</p>;
    }
  };

  return (
    <Container fluid className="pt-3 text-light">
      <Row className="gx-0">
        {/* Sidebar - occupa 3 colonne su md+, intera larghezza su xs */}
        <Col xs={12} md={3} lg={2} className="bg-black p-3 border-end border-secondary">
          <Sidebar onSelect={setSelectedModule} selected={selectedModule} />
        </Col>

        {/* Contenuto principale - occupa il resto */}
        <Col xs={12} md={9} lg={10} className="p-4">
          <h3 className="mb-3">Dashboard – Livello: {userLevel}</h3>
          {renderContent()}
        </Col>
      </Row>
    </Container>
  );
};

export default DashboardPage;