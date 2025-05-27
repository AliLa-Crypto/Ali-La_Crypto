import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LoginSuccess = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // ✅ Estrai il token dall'URL
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");

    if (token) {
      // 💾 Salva il token nel localStorage
      localStorage.setItem("accessToken", token);

      // ✅ Reindirizza dove vuoi (es. dashboard utente)
      navigate("/dashboard");
    } else {
      // ⚠️ Nessun token trovato → torna al login
      navigate("/login");
    }
  }, [navigate]);

  return <p>🔐 Login effettuato! Stai per essere reindirizzato...</p>;
};

export default LoginSuccess;