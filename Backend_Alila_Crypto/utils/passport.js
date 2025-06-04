import passport from "passport";
import GoogleStrategy from "passport-google-oauth20";
import User from "../models/User.js";
import dotenv from "dotenv";

dotenv.config();

passport.use(
  new GoogleStrategy.Strategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL,
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        // 🔍 Cerca utente tramite ID Google
        let user = await User.findOne({ socialID: profile.id });

        if (!user) {
          // ⚠️ Verifica se lo username esiste già
          let existingUsername = await User.findOne({ username: profile.displayName });

          // 🎯 Se esiste, crea uno username unico aggiungendo parte dell’ID Google
          let finalUsername = profile.displayName;
          if (existingUsername) {
            finalUsername = `${profile.displayName}-${profile.id.slice(0, 4)}`;
          }

          // ✅ Crea nuovo utente senza password
          user = await User.create({
            username: finalUsername,
            email: profile.emails[0].value,
            socialID: profile.id,
            level: "principiante",
          });
        }

        return done(null, user);
      } catch (err) {
        console.error("❌ Errore durante login Google:", err);
        return done(err, false);
      }
    }
  )
);

// Serializzazione
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// De serializzazione
passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});