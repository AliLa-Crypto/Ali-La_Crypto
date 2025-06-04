import { createContext, useContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // oggetto utente o null

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setUser({
          level: decoded.level,
          isAdmin: decoded.isAdmin,
        });
      } catch (err) {
        console.error("Token non valido", err);
        localStorage.removeItem("accessToken");
        localStorage.removeItem("userLevel");
        setUser(null);
      }
    }
  }, []);

  const login = (token) => {
    try {
      const decoded = jwtDecode(token);
      localStorage.setItem("accessToken", token);
      localStorage.setItem("userLevel", decoded.level.toLowerCase());
      setUser({
        level: decoded.level,
        isAdmin: decoded.isAdmin,
      });
    } catch (err) {
      console.error("Errore nel salvataggio login:", err);
    }
  };

  const logout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("userLevel");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);