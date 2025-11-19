import "./App.css";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Suspense, lazy } from "react";

import { motion, AnimatePresence } from "framer-motion";

// TOASTIFY E IL SUO CSS
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Navbar/Footer li lascio non-lazy (sono globali e leggeri)
import { MyNavbar } from "./Components/MyNavbar";
import Footer from "./Components/Footer";

const MotionDiv = motion.div;

/* === Lazy pages/components === */
const HomePage              = lazy(() => import("@/pages/HomePage"));
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

const AboutPage             = lazy(() => import("@/pages/AboutPage"));
const ArticoliPage          = lazy(() => import("@/pages/ArticoliPage"));
const CarrelloPage          = lazy(() => import("@/pages/CarrelloPage"));
const NewsPage              = lazy(() => import("@/pages/NewsPage"));
const GlossarioPage         = lazy(() => import("@/pages/GlossarioPage"));
const FinanzaPage           = lazy(() => import("@/pages/FinanzaPage"));
const ForumPage             = lazy(() => import("@/pages/ForumPage"));
const PortfolioPage         = lazy(() => import("@/pages/PortfolioPage"));
const ChangeLevelPage = lazy(() => import("@/pages/ChangeLevelPage"));

// 1. DEFINISCI IL WRAPPER DI TRANSIZIONE PER SINGOLA PAGINA
const PageTransitionWrapper = ({ children }) => {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: -30 }} // Inizia invisibile e leggermente a destra
      animate={{ opacity: 1, y: 0 }}  // Si anima al 100% di opacità e posizione normale
      exit={{ opacity: 0, x: -20 }}   // Esce scomparendo e andando a sinistra
      transition={{ duration: 0.5 }}
      style={{ width: "100%" }}
    >
      {children}
    </MotionDiv>
  );
};


// ✅ 2. NUOVO COMPONENTE PER LA LOGICA DELLE ROTTE ANIMATE
const AnimatedRoutes = () => {
    // useLocation deve essere chiamato all'interno del Router
    const location = useLocation(); 

    return (
        // AnimatePresence monitora i cambi di location e gestisce le animazioni in uscita e in entrata
        <AnimatePresence mode="wait">
            {/* key={location.pathname} forza il remount del componente e innesca l'animazione */}
            <Routes key={location.pathname} location={location}>
                
                {/* TUTTE LE ROTTE DEVONO AVERE IL LORO ELEMENTO AVVOLTO IN <PageTransitionWrapper> */}
                
                <Route path="/" element=
                  {<PageTransitionWrapper><HomePage /></PageTransitionWrapper>} 
                />
                <Route path="/register" element=
                  {<PageTransitionWrapper><RegisterPage /></PageTransitionWrapper>} 
                />
                <Route path="/welcome" element=
                  {<PageTransitionWrapper><WelcomePage /></PageTransitionWrapper>} 
                />
                <Route path="/login" element=
                  {<PageTransitionWrapper><LoginPage /></PageTransitionWrapper>} 
                />
                <Route path="/forgot-password" element=
                  {<PageTransitionWrapper><ForgotPasswordPage /></PageTransitionWrapper>} 
                />
                <Route path="/reset-password/:token" element=
                  {<PageTransitionWrapper><ResetPasswordPage /></PageTransitionWrapper>} 
                />

                <Route path="/dashboard/:level" element=
                  {<PageTransitionWrapper><DashboardPage /></PageTransitionWrapper>} 
                />
                <Route path="/dashboard" element=
                  {<PageTransitionWrapper><RedirectToUserDashboard /></PageTransitionWrapper>} 
                />

                <Route path="/unauthorized" element=
                  {<PageTransitionWrapper><Unauthorized /></PageTransitionWrapper>} 
                />

                <Route
                    path="/admin/dashboard/*"
                    element={
                    <ProtectedRouteAdmin>
                    {/* La ProtectedRoute non può essere wrappata, quindi wrappiamo il contenuto */}
                        <PageTransitionWrapper><AdminDashboard /></PageTransitionWrapper> 
                    </ProtectedRouteAdmin>
                    }
                />

                <Route path="/lessons/*" element=
                  {<PageTransitionWrapper><LessonManager /></PageTransitionWrapper>} 
                />
                <Route path="/profilo" element=
                  {<PageTransitionWrapper><ProfilePage /></PageTransitionWrapper>} 
                />
                <Route path="/learn" element=
                  {<PageTransitionWrapper><LearnPage /></PageTransitionWrapper>} 
                />
                <Route path="/lessons/:id" element=
                  {<PageTransitionWrapper><LessonDetailPage /></PageTransitionWrapper>} 
                />

                <Route path="/strumenti/exchange" element=
                  {<PageTransitionWrapper><ExchangePage /></PageTransitionWrapper>} 
                />
                <Route path="/strumenti/wallet" element=
                  {<PageTransitionWrapper><WalletPage /></PageTransitionWrapper>} 
                />
                <Route path="/strumenti/analisi" element=
                  {<PageTransitionWrapper><MarketPage /></PageTransitionWrapper>} 
                />
                <Route path="/strumenti/explorer" element=
                  {<PageTransitionWrapper><ExplorerPage /></PageTransitionWrapper>} 
                />
                <Route path="/strumenti/trading" element=
                  {<PageTransitionWrapper><TradingPage /></PageTransitionWrapper>} 
                />
                <Route path="/strumenti/:categoria/:slug" element=
                  {<PageTransitionWrapper><PlatformDetailPage /></PageTransitionWrapper>} 
                />

                <Route path="/about" element=
                  {<PageTransitionWrapper><AboutPage /></PageTransitionWrapper>} 
                />
                <Route path="/news" element=
                  {<PageTransitionWrapper><NewsPage /></PageTransitionWrapper>} 
                />
                <Route path="/articoli" element=
                  {<PageTransitionWrapper><ArticoliPage /></PageTransitionWrapper>} 
                />
                <Route path="/carrello" element=
                  {<PageTransitionWrapper><CarrelloPage /></PageTransitionWrapper>} 
                />
                <Route path="/glossario" element=
                  {<PageTransitionWrapper><GlossarioPage /></PageTransitionWrapper>} 
                />
                <Route path="/finanza" element=
                  {<PageTransitionWrapper><FinanzaPage /></PageTransitionWrapper>} 
                />
                <Route path="/forum" element=
                  {<PageTransitionWrapper><ForumPage /></PageTransitionWrapper>} 
                />
                <Route path="/portfolio" element=
                  {<PageTransitionWrapper><PortfolioPage /></PageTransitionWrapper>} 
                />
                <Route path="/change-level" element=
                  {<PageTransitionWrapper><ChangeLevelPage /></PageTransitionWrapper>} 
                />
            </Routes>
        </AnimatePresence>
    );
}


// 3. FUNZIONE PRINCIPALE APP CHE RITORNA IL LAYOUT (semplificata)
function App() {
  return (
    <Router>
      <MyNavbar />

      {/* IL COMPONENTE QUI (sopra il contenuto) */}
      <ToastContainer 
        position="top-right" 
        autoClose={3000} 
        hideProgressBar={false} 
        newestOnTop={false} 
        closeOnClick 
        rtl={false} 
        pauseOnFocusLoss 
        draggable 
        pauseOnHover 
        theme="dark" 
      />

      <div className="app-content">
        {/* Fallback minimale per non tirare dentro react-bootstrap nello startup */}
        <Suspense fallback={<div className="p-5 text-center">Caricamento…</div>}>
          <AnimatedRoutes />
        </Suspense>
      </div>
      <Footer />
    </Router>
  );
}

export default App;