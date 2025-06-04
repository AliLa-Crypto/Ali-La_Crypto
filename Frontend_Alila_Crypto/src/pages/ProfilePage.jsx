import React, { useEffect, useState } from "react";
import { Container, Form, Button, Card, Row, Col } from "react-bootstrap";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const [userData, setUserData] = useState(null);
  const [bio, setBio] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const { logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("accessToken");
        const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/auth/profile`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUserData(res.data);
        setBio(res.data.bio || "");
      } catch (err) {
        console.error("Errore nel caricamento profilo:", err);
        navigate("/login");
      }
    };

    fetchProfile();
  }, [navigate]);

  const handleSave = async () => {
    try {
      const token = localStorage.getItem("accessToken");
      await axios.put(`${import.meta.env.VITE_BACKEND_URL}/auth/profile`, { bio }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setSuccessMessage("✅ Profilo aggiornato con successo!");
    } catch (err) {
      setSuccessMessage("❌ Errore durante il salvataggio.");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("userLevel");
    
    logout();           // ✅ cancella token + setta user a null
    navigate("/login"); // 🔁 Porta alla pagina di login
  };

  if (!userData) return <p className="text-light p-5">Caricamento...</p>;

  return (
    <Container className="py-5 d-flex justify-content-center">
      <Card bg="dark" text="light" className="shadow-lg p-4" style={{ maxWidth: "600px", width: "100%" }}>
        <h2 className="text-center mb-4">👤 Profilo Utente</h2>

        <p><strong>Username:</strong> {userData.username}</p>
        <p><strong>Email:</strong> {userData.email}</p>
        <p><strong>Livello:</strong> {userData.level}</p>
        <p><strong>XP:</strong> {userData.xp}</p>

        <Form.Group className="my-4">
          <Form.Label>📝 Descrizione personale (bio)</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            placeholder="Scrivi qualcosa su di te..."
          />
        </Form.Group>

        {successMessage && (
          <div className="alert alert-info">{successMessage}</div>
        )}

        <Row className="mt-4">
          <Col>
            <Button variant="success" onClick={handleSave} className="w-100">💾 Salva</Button>
          </Col>
          <Col>
            <Button variant="outline-danger" onClick={handleLogout} className="w-100">🚪 Esci</Button>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default ProfilePage;