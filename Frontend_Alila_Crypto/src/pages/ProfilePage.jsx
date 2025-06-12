import React, { useEffect, useState } from "react";
import { Container, Form, Button, Card, Row, Col, Alert } from "react-bootstrap";
import api from "@/utils/api";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import AvatarModal from "@/components/Profile/AvatarModal";
import "@/styles/ProfilePage.css";
import { FaPlusCircle, FaPen } from "react-icons/fa";

const ProfilePage = () => {
  const [userData, setUserData] = useState({
    avatarURL: localStorage.getItem("avatarURL") || "",
  });

  const [bio, setBio] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const { login, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await api.get(`/auth/profile`);
        setUserData(res.data);
        localStorage.setItem("avatarURL", res.data.avatarURL || "");
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
      await api.put(`/auth/profile`, { bio });
      setSuccessMessage("✅ Profilo aggiornato con successo!");
      setUserData(prev => ({ ...prev, bio }));
      setBio("");
      document.getElementById("bio-section")?.scrollIntoView({ behavior: "smooth" });
    } catch (err) {
      setSuccessMessage("❌ Errore durante il salvataggio.");
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) return alert("Nessun file selezionato");

    const formData = new FormData();
    formData.append("avatar", selectedFile);

    try {
      const res = await api.post(`/auth/upload-avatar`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setUserData(prev => ({ ...prev, avatarURL: res.data.avatarURL }));
      localStorage.setItem("avatarURL", res.data.avatarURL);
      login(localStorage.getItem("token"));
      setSuccessMessage("✅ Avatar caricato con successo!");
    } catch (err) {
      setSuccessMessage("❌ Errore durante l'upload dell'immagine.");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userLevel");
    logout();
    navigate("/login");
  };

  if (!userData) return <p className="text-light p-5">Caricamento...</p>;

  return (
    <Container fluid className="py-5">
      <Row className="justify-content-center">
        <Col xs={12} md={10}>
          <Card className="profile-card shadow-lg p-4 d-flex flex-column flex-md-row">
            {/* Sidebar sinistra */}
            <Col md={4} className="border-end mb-4 mb-md-0 text-center">
              <h4 className="mb-3">👤 {userData.username}</h4>

              <div className="avatar-container" onClick={() => document.getElementById("avatarInput").click()}>
                {userData.avatarURL ? (
                  <div className="avatar-wrapper">
                    <img
                      src={userData.avatarURL}
                      alt="Avatar"
                      className="profile-avatar"
                      onClick={(e) => {
                        e.stopPropagation();
                        setShowModal(true);
                      }}
                    />
                    <FaPen className="avatar-icon edit" />
                  </div>
                ) : (
                  <div className="avatar-placeholder">
                    <FaPlusCircle className="avatar-icon add" />
                  </div>
                )}
              </div>

              <AvatarModal
                show={showModal}
                handleClose={() => setShowModal(false)}
                avatarURL={userData.avatarURL}
              />

              <input
                id="avatarInput"
                type="file"
                accept=".jpg,.jpeg,.png,.heic"
                style={{ display: "none" }}
                onChange={(e) => {
                  setSelectedFile(e.target.files[0]);
                  handleUpload();
                }}
              />

              <h5 className="mt-4">🔗 Moduli rapidi</h5>
              <div className="d-flex flex-column gap-2">
                <Button variant="outline-light" onClick={() => navigate("/dashboard")}>🏠 Dashboard</Button>
                <Button variant="outline-light" onClick={() => navigate("/learn")}>📚 Educazione</Button>
                <Button variant="outline-light" onClick={() => navigate("/forum")}>💬 Community</Button>
                <Button variant="outline-light" onClick={() => navigate("/portfolio")}>📈 Portfolio</Button>
                <Button variant="outline-light" onClick={() => navigate("/finanza-personale")}>💼 Finanza</Button>
                {userData.isAdmin && (
                  <Button variant="outline-warning" onClick={() => navigate("/admin/dashboard")}>
                    🛠️ Admin
                  </Button>
                )}
              </div>
            </Col>

            {/* Sezione destra */}
            <Col md={8} className="ps-md-4">
              <h2 className="mb-4">👩‍💻 Informazioni utente</h2>
              <p><strong>Username:</strong> {userData.username}</p>
              <p><strong>Email:</strong> {userData.email}</p>
              <p><strong>Livello:</strong> {userData.level}</p>
              <p><strong>XP:</strong> {userData.xp}</p>

              <div id="bio-section">
                <Form.Group className="my-4">
                  <Form.Label>📝 Bio</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    placeholder="Scrivi qualcosa su di te..."
                    className="profile-bio"
                  />
                </Form.Group>
              </div>

              {userData.bio && (
                <div className="mb-3" style={{ whiteSpace: "pre-wrap", color: "#ccc" }}>
                  <strong>📌 Bio salvata:</strong><br />
                  {userData.bio}
                </div>
              )}

              {successMessage && (
                <Alert variant={successMessage.startsWith("✅") ? "success" : "danger"}>
                  {successMessage}
                </Alert>
              )}

              <Row className="mt-4">
                <Col><Button variant="success" className="w-100" onClick={handleSave}>💾 Salva</Button></Col>
                <Col><Button variant="outline-danger" className="w-100" onClick={handleLogout}>🚪 Esci</Button></Col>
              </Row>
            </Col>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ProfilePage;