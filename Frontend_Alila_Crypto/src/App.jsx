import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MyNavbar } from "./Components/MyNavbar";
import HomePage from './pages/HomePage';
import RegisterPage from "./pages/Register-Login/RegisterPage";
import LoginPage from "./pages/Register-Login/LoginPage";
import ForgotPasswordPage from "./pages/Register-Login/ForgotPasswordPage";
import ResetPasswordPage from "./pages/Register-Login/ResetPasswordPage";
import SelectLevelPage from './pages/SelectLevelPage';
import WelcomePage from "./pages/WelcomePage";
import DashboardPage from "./pages/DashboardPage";
import RedirectToUserDashboard from "./pages/RedirectToUserDashboard";
import ProfilePage from "./pages/ProfilePage";
import Footer from "./Components/Footer";

function App() {
  return (
    <Router>
      <MyNavbar />
      <div className="app-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<SelectLevelPage />} />
          <Route path="/register/:level" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/reset-password/:token" element={<ResetPasswordPage />} />
          <Route path="/welcome/:level" element={<WelcomePage />} />
          <Route path="/dashboard/:level" element={<DashboardPage />} />
          <Route path="/dashboard" element={<RedirectToUserDashboard />} />
          <Route path="/profilo" element={<ProfilePage />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
