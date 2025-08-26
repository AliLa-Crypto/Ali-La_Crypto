import { jwtDecode } from "jwt-decode";

// Controlla se c'è token salvato
export const isUserLoggedIn = () => {
  const token = localStorage.getItem("token");
  return !!token;
};

// Decodifica il token per info utente
export const getUserFromToken = () => {
  const token = localStorage.getItem("token");
  if (!token) return null;
  try {
    return jwtDecode(token);
  } catch (err) {
    console.error("getUserFromToken: token non valido", err);
    return null;
  }
};

// Controlla se l'utente è Admin
export const isAdmin = () => {
  try {
    const token = localStorage.getItem("token");
    if (!token) return false;
    const decoded = jwtDecode(token);
    return decoded.isAdmin === true;
  } catch (error) {
    console.error("isAdmin: errore nella decodifica JWT", error);
    return false;
  }
};

// Estrai il token usato da axios
export const getToken = () => {
  return localStorage.getItem("token");
};