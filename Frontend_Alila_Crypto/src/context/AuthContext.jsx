import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { AuthContext } from "./auth-context"; // <-- usa il context dal file separato

/** Unico export: componente Provider */
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // oggetto utente o null

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded = jwtDecode(token);
        const storedAvatar = localStorage.getItem("avatarURL") || "";

        setUser({
          level: decoded.level,
          isAdmin: decoded.isAdmin,
          avatarURL: storedAvatar,
        });
      } catch (err) {
        console.error("Token non valido", err);
        localStorage.removeItem("token");
        localStorage.removeItem("userLevel");
        setUser(null);
      }
    }
  }, []);

  const login = (token) => {
    try {
      const decoded = jwtDecode(token);
      localStorage.setItem("token", token);
      localStorage.setItem("userLevel", decoded.level.toLowerCase());
      const storedAvatar = localStorage.getItem("avatarURL") || "";

      setUser({
        level: decoded.level,
        isAdmin: decoded.isAdmin,
        avatarURL: storedAvatar,
      });
    } catch (err) {
      console.error("Errore nel salvataggio login:", err);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userLevel");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;