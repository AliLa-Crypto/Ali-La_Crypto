import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

/**
 * Connessione robusta a MongoDB (Atlas o locale)
 * - Legge MONGODB_URI oppure MONGO_URL dall'.env
 * - Forza il dbName (fallback) per evitare il default "test"
 * - Logga host e db connessi per diagnosticare
 * - Esce dal processo in caso di errore per far ripartire nodemon
 */
const connectDB = async () => {
  // [MOD] Supporto sia MONGODB_URI (nuovo) sia MONGO_URL (compatibilità)
  const uri = process.env.MONGODB_URI || process.env.MONGO_URL;
  const dbName = process.env.MONGO_DB || "Ali&La_Crypto"; // [MOD] fallback sicuro

  if (!uri) {
    console.error("❌ Variabile MONGODB_URI (o MONGO_URL) non impostata nell'.env");
    process.exit(1);
  }

  try {
    // [MOD] Opzioni utili: serverSelectionTimeout e socketTimeout
    // [MOD] dbName: se l'URI contiene già il DB, questa opzione lo conferma/override
    await mongoose.connect(uri, {
      dbName,
      serverSelectionTimeoutMS: 10_000,
      socketTimeoutMS: 45_000,
    });

    const conn = mongoose.connection;

    // [MOD] Log diagnostici: vedrai esattamente a quale host e DB ti sei connessa
    console.log("✅ Connessa a MongoDB");
    console.log("   • host:", conn.host);
    console.log("   • db:  ", conn.name); // <-- Deve stampare 'Ali&La_Crypto'

    // [MOD] Listener di errore runtime (non blocca, ma logga)
    conn.on("error", (err) => {
      console.error("⚠️  Errore runtime MongoDB:", err?.message || err);
    });

    // [MOD] Chiusura pulita su SIGINT (Ctrl+C)
    process.on("SIGINT", async () => {
      await mongoose.connection.close();
      console.log("👋 Connessione MongoDB chiusa. Bye!");
      process.exit(0);
    });
  } catch (err) {
    // [MOD] Log più chiaro dell'errore Atlas/DNS/SRV
    console.error("❌ Errore MongoDB:", err?.code || err?.name || "", err?.message || err);
    process.exit(1);
  }
};

export default connectDB;