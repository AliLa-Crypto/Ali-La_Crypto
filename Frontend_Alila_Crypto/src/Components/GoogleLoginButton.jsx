import { GoogleLogin } from "@react-oauth/google";
import api from "@/utils/api";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";


const GoogleLoginButton = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleGoogleLogin = async (credentialResponse) => {
    try {
      const level = localStorage.getItem("level"); // recupera il livello scelto
      const response = await api.post(`/auth/google-popup`, {
        token: credentialResponse.credential,
        level, // lo passa al backend
      });

      const { token, user } = response.data;

      login(token); // Aggiorna lo stato globale
      localStorage.setItem("userLevel", user.level.toLowerCase());

      navigate(`/dashboard/${user.level.toLowerCase()}`);
    } catch (err) {
      console.error("❌ Errore Google Login:", err);
      alert("Errore durante il login con Google");
    }
  };

  return (
    <GoogleLogin
      onSuccess={handleGoogleLogin}
      onError={() => alert("Errore Google Login")}
    />
  );
};

export default GoogleLoginButton;
