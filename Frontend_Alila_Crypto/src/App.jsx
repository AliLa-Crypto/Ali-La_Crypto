import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginSuccess from "./Components/LoginSuccess";
import { MyNavbar } from "./Components/MyNavbar";
import HeroSection from './Components/HeroSection';
import Footer from "./Components/Footer";


function App() {
  
  return (
    <Router>
      <MyNavbar />
      <HeroSection />
      <Routes>
        {/* altre rotte */}
        <Route path="/login-success" element={<LoginSuccess />} />
        {/* es. dashboard utente */}
        <Route path="/dashboard" element={<p>Benvenuto nella dashboard!</p>} />
      </Routes>
      <Footer />  {/* Footer visibile su tutte le pagine */}
    </Router>
  )
}

export default App
