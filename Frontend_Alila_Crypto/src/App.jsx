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
import AdminDashboard from "./pages/Admin/AdminDashboard";
import LessonManager from './Components/Admin/LessonManager';
import ProtectedRouteAdmin from "./Components/Admin/ProtectedRouteAdmin";
import Unauthorized from "./pages/Unauthorized";
import ProfilePage from "./pages/ProfilePage";
import LearnPage from './pages/Users/LearnPage';
import LessonDetailPage from './pages/Users/LessonDetailPage';
import ExchangePage from "@/pages/Strumenti/ExchangePage";
import WalletPage from "@/pages/Strumenti/WalletPage";
import MarketPage from "@/pages/Strumenti/MarketPage";
import ExplorerPage from "@/pages/Strumenti/ExplorerPage";
import TradingPage from "@/pages/Strumenti/TradingPage";
import PlatformDetailPage from "@/pages/Strumenti/PlatformDetailPage";
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
          <Route path="/unauthorized" element={<Unauthorized />} />
          <Route path="/admin/dashboard/*"  element={
            <ProtectedRouteAdmin>
              <AdminDashboard />
            </ProtectedRouteAdmin>
          } />
          <Route path="/lessons/*" element={<LessonManager />} />
          <Route path="/profilo" element={<ProfilePage />} />
          <Route path="/learn" element={<LearnPage />} />
          <Route path="/lessons/:id" element={<LessonDetailPage />} />

          <Route path="/strumenti/exchange" element={<ExchangePage />} />
          <Route path="/strumenti/wallet" element={<WalletPage />} />
          <Route path="/strumenti/analisi" element={<MarketPage />} />
          <Route path="/strumenti/explorer" element={<ExplorerPage />} />
          <Route path="/strumenti/trading" element={<TradingPage />} />

          {/* pagina dinamica */}
          <Route path="/strumenti/:categoria/:slug" element={<PlatformDetailPage />} />

        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
