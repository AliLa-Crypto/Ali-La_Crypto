import { useState, useEffect } from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

// Import Componenti e Context
import Sidebar from "@/Components/Dashboard/Sidebar";
import LearnPage from "@/pages/Users/LearnPage";
import { useAuth } from "@/context/auth-context";
import "@/styles/DashboardPage.css";

// Import Cruscotti per Livello
import PrincipianteCruscotto from "@/Components/Dashboard/Cruscotti/PrincipianteCruscotto";
import IntermedioCruscotto from "@/Components/Dashboard/Cruscotti/IntermedioCruscotto";
import ProCruscotto from "@/Components/Dashboard/Cruscotti/ProCruscotto";

const DashboardPage = () => {
  const navigate = useNavigate();
  const { user, loading: authLoading } = useAuth(); 
  
  // Stato per la navigazione laterale (Default: 'dashboard')
  const [selectedModule, setSelectedModule] = useState("dashboard");
  
  // Stato locale per forzare l'aggiornamento quando cambia il localStorage
  const [currentLevel, setCurrentLevel] = useState("principiante");

  // EFFETTO: Sincronizza il livello. 
  // Priorità: 1. localStorage (Appena aggiornato) -> 2. User Token (Login) -> 3. Default
  useEffect(() => {
    const updateLevel = () => {
      const stored = localStorage.getItem("userLevel");
      // Se c'è un valore salvato manualmente, usalo. Altrimenti usa quello del token.
      if (stored) {
        setCurrentLevel(stored.toLowerCase());
      } else if (user?.level) {
        setCurrentLevel(user.level.toLowerCase());
      }
    };

    updateLevel();
    
    // Listener opzionale: se cambi pagina e torni, questo assicura che sia fresco
    window.addEventListener('storage', updateLevel);
    return () => window.removeEventListener('storage', updateLevel);
  }, [user, selectedModule]); // Si aggiorna se cambia l'utente o se navighi nel menu

  // Funzione che sceglie QUALE Cruscotto mostrare
  const renderLevelDashboard = () => {
    // Usiamo lo stato calcolato 'currentLevel' invece di 'user.level' diretto
    switch (currentLevel) {
      case "intermedio":
        return <IntermedioCruscotto />;
      case "pro":
        return <ProCruscotto />;
      case "principiante":
      default:
        return <PrincipianteCruscotto />;
    }
  };

  // Funzione principale che decide il CONTENUTO
  const renderContent = () => {
    if (authLoading && !user) {
      return (
        <div className="text-center py-5">
          <Spinner animation="border" variant="warning" />
          <p className="mt-3">Caricamento dashboard...</p>
        </div>
      );
    }

    switch (selectedModule) {
      case "dashboard":
        return renderLevelDashboard();
        
      case "learn":
        return <LearnPage />;
        
      case "forum":
        return (
            <div className="text-center py-5">
                <h3>💬 Community Forum</h3>
                <p className="lead">Stiamo costruendo uno spazio sicuro per discutere.</p>
                <span className="badge bg-warning text-dark">In Arrivo</span>
            </div>
        );
        
      case "portfolio":
        return (
            <div className="text-center py-5">
                <h3>📈 Portfolio Tracker</h3>
                <p className="lead">Tieni traccia dei tuoi investimenti in tempo reale.</p>
                <span className="badge bg-info text-dark">In Arrivo</span>
            </div>
        );
        
      case "profile":
        return (
            <div className="bg-dark p-5 rounded border border-secondary text-center">
                <h3>👤 Il tuo Profilo</h3>
                <p className="text-muted mb-4">Gestisci avatar, bio, password e cambia il tuo livello di esperienza.</p>
                <button 
                    className="btn btn-warning btn-lg" 
                    onClick={() => navigate('/profile')} 
                >
                    Vai alla Pagina Profilo Completa
                </button>
            </div>
        );

      default:
        return renderLevelDashboard();
    }
  };

  return (
    <Container fluid className="pt-3 text-light dashboard-container">
      <Row className="gx-0">
        
        {/* SIDEBAR (Mobile First) */}
        <Col xs={12} lg={2} className="bg-black p-3 border-end-lg border-secondary sidebar-wrapper">
          <Sidebar 
            onSelect={setSelectedModule} 
            selected={selectedModule} 
          />
        </Col>

        {/* CONTENUTO PRINCIPALE */}
        <Col xs={12} lg={10} className="p-4 content-wrapper">
          <div className="d-block d-lg-none mb-3 text-end">
             <span className="badge bg-secondary text-capitalize">Livello: {currentLevel}</span>
          </div>

          {renderContent()}
        </Col>
      </Row>
    </Container>
  );
};

export default DashboardPage;