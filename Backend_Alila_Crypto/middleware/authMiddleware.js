import jwt from "jsonwebtoken";

// ✅ Verifica presenza e validità del token
export const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Token mancante o malformato" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Salva i dati utente nel req
    next();
  } catch (err) {
    return res.status(403).json({ message: "Token non valido o scaduto" });
  }
};

// ✅ Middleware per controllare il livello richiesto
export const checkLevel = (requiredLevel) => {
  return (req, res, next) => {
    if (!req.user || !req.user.level) {
      return res.status(403).json({ message: "Utente non autorizzato" });
    }

    if (req.user.level !== requiredLevel) {
      return res.status(403).json({ message: `Accesso riservato a utenti di livello: ${requiredLevel}` });
    }

    next(); // Utente con livello corretto
  };
};

// 🔐 (Bonus) Middleware per accesso admin
export const checkAdmin = (req, res, next) => {
  if (!req.user || !req.user.isAdmin) {
    return res.status(403).json({ message: "Accesso riservato agli amministratori" });
  }

  next(); // Utente è admin
};