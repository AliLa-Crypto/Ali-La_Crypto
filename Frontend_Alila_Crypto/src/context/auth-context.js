import { createContext, useContext } from "react";

/** Context “puro” (nessun componente qui) */
export const AuthContext = createContext(null);

/** Hook di comodo per leggere il context */
export const useAuth = () => useContext(AuthContext);
