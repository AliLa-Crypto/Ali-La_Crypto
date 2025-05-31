import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginSuccess from "./Components/LoginSuccess";
import { MyNavbar } from "./Components/MyNavbar";
import HomePage from './pages/HomePage';
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import SelectLevelPage from './pages/SelectLevelPage';
import Footer from "./Components/Footer";

function App() {
  return (
    <Router>
      <MyNavbar />
      <div className="app-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login-success" element={<LoginSuccess />} />
          <Route path="/dashboard" element={<p>Benvenuto nella dashboard!</p>} />
          <Route path="/register" element={<SelectLevelPage />} />
          <Route path="/register/:level" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
