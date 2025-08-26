import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

// Navbar/Footer li lascio non-lazy (sono globali e leggeri)
import { MyNavbar } from "./Components/MyNavbar";
import Footer from "./Components/Footer";

/* === Lazy pages/components === */
const HomePage              = lazy(() => import("@/pages/HomePage"));
const SelectLevelPage       = lazy(() => import("@/pages/SelectLevelPage"));
const RegisterPage          = lazy(() => import("@/pages/Register-Login/RegisterPage"));
const LoginPage             = lazy(() => import("@/pages/Register-Login/LoginPage"));
const ForgotPasswordPage    = lazy(() => import("@/pages/Register-Login/ForgotPasswordPage"));
const ResetPasswordPage     = lazy(() => import("@/pages/Register-Login/ResetPasswordPage"));

const WelcomePage           = lazy(() => import("@/pages/WelcomePage"));
const DashboardPage         = lazy(() => import("@/pages/DashboardPage"));
const RedirectToUserDashboard = lazy(() => import("@/pages/RedirectToUserDashboard"));

const Unauthorized          = lazy(() => import("@/pages/Unauthorized"));
const ProfilePage           = lazy(() => import("@/pages/ProfilePage"));

const LearnPage             = lazy(() => import("@/pages/Users/LearnPage"));
const LessonDetailPage      = lazy(() => import("@/pages/Users/LessonDetailPage"));

const AdminDashboard        = lazy(() => import("@/pages/Admin/AdminDashboard"));
const LessonManager         = lazy(() => import("@/Components/Admin/LessonManager"));
const ProtectedRouteAdmin   = lazy(() => import("@/Components/Admin/ProtectedRouteAdmin"));

const ExchangePage          = lazy(() => import("@/pages/Strumenti/ExchangePage"));
const WalletPage            = lazy(() => import("@/pages/Strumenti/WalletPage"));
const MarketPage            = lazy(() => import("@/pages/Strumenti/MarketPage"));
const ExplorerPage          = lazy(() => import("@/pages/Strumenti/ExplorerPage"));
const TradingPage           = lazy(() => import("@/pages/Strumenti/TradingPage"));
const PlatformDetailPage    = lazy(() => import("@/pages/Strumenti/PlatformDetailPage"));

const NewsPage              = lazy(() => import("@/pages/NewsPage"));
const GlossarioPage         = lazy(() => import("@/pages/GlossarioPage"));
const FinanzaPage           = lazy(() => import("@/pages/FinanzaPage"));

function App() {
  return (
    <Router>
      <MyNavbar />
      <div className="app-content">
        {/* Fallback minimale per non tirare dentro react-bootstrap nello startup */}
        <Suspense fallback={<div className="p-5 text-center">Caricamento…</div>}>
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

            <Route
              path="/admin/dashboard/*"
              element={
                <ProtectedRouteAdmin>
                  <AdminDashboard />
                </ProtectedRouteAdmin>
              }
            />

            <Route path="/lessons/*" element={<LessonManager />} />
            <Route path="/profilo" element={<ProfilePage />} />
            <Route path="/learn" element={<LearnPage />} />
            <Route path="/lessons/:id" element={<LessonDetailPage />} />

            <Route path="/strumenti/exchange" element={<ExchangePage />} />
            <Route path="/strumenti/wallet" element={<WalletPage />} />
            <Route path="/strumenti/analisi" element={<MarketPage />} />
            <Route path="/strumenti/explorer" element={<ExplorerPage />} />
            <Route path="/strumenti/trading" element={<TradingPage />} />
            <Route path="/strumenti/:categoria/:slug" element={<PlatformDetailPage />} />

            <Route path="/news" element={<NewsPage />} />
            <Route path="/glossario" element={<GlossarioPage />} />
            <Route path="/finanza" element={<FinanzaPage />} />
          </Routes>
        </Suspense>
      </div>
      <Footer />
    </Router>
  );
}

export default App;