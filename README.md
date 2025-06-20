www.alilacrypto.com
# 💎 Ali&La Crypto – Piattaforma Web Educativa sul Mondo delle Criptovalute

**Ali&La Crypto** è una piattaforma web innovativa dedicata all'educazione nel campo delle **criptovalute** e della **blockchain** pensata per utenti di ogni livello: **Principiante**, **Intermedio**, **Pro**.

Il progetto nasce per offrire un'esperienza di apprendimento completa e accessibile, combinando contenuti multimediali, accesso protetto, gestione amministrativa e strumenti informativi nel mondo delle criptovalute. Ogni sezione è stata sviluppata per guidare gli utenti in un percorso di crescita strutturato, chiaro e coinvolgente.

---

## 🚧 Stato attuale del progetto (v1)

La piattaforma è attualmente in fase di sviluppo attivo.


## ✅ Funzionalità principali attualmente implementate

### 🔐 Autenticazione sicura
- Registrazione e login con email e password
- Login con Google (OAuth2)
- Verifica OTP via email (2FA)
- Protezione delle rotte e accesso differenziato in base al livello utente (Principiante, Intermedio, Pro)

### 👩‍🏫 Accademia (Modulo Educazione)
- Lezioni suddivise per livello di esperienza
- Contenuti multimediali integrati (testi, immagini, video, PDF)

### 🧠 Pannello Admin (Dashboard Amministratore)
- Gestione completa degli utenti (ruoli, livelli, accessi)
- Creazione, modifica e visualizzazione delle lezioni
- Upload e gestione dei file multimediali
- Moderazione di contenuti segnalati (post e commenti)
- Visualizzazione statistiche generali del sistema

### 📋 Dashboard personalizzata utente
- Sidebar dinamica con accesso ai moduli
- Visualizzazione personalizzata dei contenuti in base al livello
- Accesso rapido a lezioni e materiali formativi

### 🧰 Sezione Tool
- Accesso a risorse selezionate su:
  - Exchange (piattaforme di scambio crypto)
  - Wallet (custodial e non custodial)
  - Blockchain Explorer
  - Analisi di Mercato

---

## 🌐 Link alla piattaforma

🔗 **Sito Web (Frontend – Produzione)**  
👉https://ali-la-crypto.vercel.app/

🔗 **API Backend (Produzione)**  
👉 https://ali-la-crypto.onrender.com

---

## 🛠️ Stack Tecnologico

- **Frontend**: React + Vite, Bootstrap 5, Zustand, React Router, Chart.js, Framer Motion, React Icons
- **Backend**: Node.js, Express, MongoDB, Cloudinary, SendGrid, Passport.js
- **Deploy**: Vercel (frontend) + Render (backend)
- **Dominio personalizzato**: `alilacrypto.com`

---

## 📁 Struttura del repository

Ali-La_Crypto/
├── Backend_AliLa_Crypto → Backend con autenticazione, ruoli, API REST, moderazione
├── Frontend_AliLa_Crypto → Interfaccia utente React/Vite con dashboard e accademia
├── Modules_AliLa_Crypto.md → Documentazione tecnica dei moduli
├── Roadmap_AliLa_Crypto.md → Roadmap di sviluppo per le prossime versioni
├── CHANGELOG.md → Storico delle versioni (standard-version)
└── package.json, .gitignore → File di configurazione e setup
