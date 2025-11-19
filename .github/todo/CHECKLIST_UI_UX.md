Questo documento riflette lo stato attuale del progetto e stabilisce le priorità di sviluppo, focalizzandosi sulla coerenza funzionale, l'eleganza del design e la completezza dei moduli.

---

## **✅ UI/UX e Sviluppo Modulare – Nuova Checklist di Rifinitura**

Documento Aggiornato: CHECKLIST\_UI\_UX.md

Basato su: Analisi v1.14.0 e Roadmap Modulare

### **1\. 🔑 Modulo 1 & 2 – Coerenza Core e Autenticazione (Priorità: Massima)**

Obiettivo: Eliminare le confusioni di routing e finalizzare l'aspetto delle aree critiche.

| Area | Task | Stato | Dettagli Tecnici / Design |
| :---- | :---- | :---- | :---- |
| **Routing & Architettura** | **FIX CRITICO: Unificare l'Area Utente.** La rotta /dashboard deve essere l'**Hub di Progresso** (statistiche, XP, ultime lezioni), mentre /profilo deve essere l'**Area di Gestione Account** (impostazioni, password, 2FA). | \[ \] | Verificare che RedirectToUserDashboard.jsx e App.jsx non creino rotte dashboard duplicate. |
| **Login / Registrazione** | **UX/UI Form: Sostituire l'Emoji Occhio (👁️).** Migrare l'emoji in LoginPage.jsx e RegisterPage.jsx a un'icona SVG (es. FaEye di React Icons) e assicurare che l'area di click del bottone sia di almeno **44px** (per mobile touch target). | \[ \] | Modificare LoginPage.jsx e RegisterPage.jsx. |
| **Navbar / Footer** | **Rifinitura Responsiveness Generale.** Aumentare la spaziatura verticale dei link (es. py-2) nell'Offcanvas della Navbar su mobile. Ridurre la dimensione dei contenitori delle icone social nel footer su schermi XS. | \[ \] | Modificare MyNavbar.jsx e Footer.jsx (media query). |
| **Modal Avatar** | Migliorare la gestione del popup Modale su schermi XS per evitare overflow e garantire una visualizzazione ottimale dell'immagine. | \[ \] | Implementare regole CSS (es. max-width: 95vw) per la modale in ProfilePage.jsx e AvatarModal.jsx. |

---

### **2\. 📚 Modulo 3 – Educazione (Learn) & Lesson Detail (Priorità: Alta)**

Obiettivo: Migliorare drasticamente la presentazione e l'esperienza di consumo dei contenuti formativi.

| Area | Task | Stato | Dettagli Tecnici / Design |
| :---- | :---- | :---- | :---- |
| **Lesson Detail UI/UX** | **FIX CRITICO: Titolo Responsive.** Ridurre la dimensione del titolo in LessonDetailPage.jsx da display-3 (desktop) a display-5 (mobile) per garantirne la leggibilità su schermi piccoli senza overflow. | \[ \] | Aggiungere media query specifica in LessonDetailPage.css o usare classi Bootstrap responsive. |
| **iFrame PDF** | Rendere il viewer PDF/Video completamente responsive, sostituendo l'altezza fissa (height="600px") con un'altezza minima basata sull'altezza della viewport (es. min-height: 80vh) per un'esperienza utente moderna. | \[ \] | Modificare LessonDetailPage.jsx e LessonDetailPage.css. |
| **LearnPage Grid** | Aggiustare la griglia delle card in LearnPage.jsx per usare **3 colonne** su schermi grandi (lg={4}) anziché 4, per un layout più pulito e coerente con la larghezza delle card. | \[ \] | Modificare la classe \<Col\> in LearnPage.jsx da lg={3} a lg={4}. |
| **Gestione Progresso** | **Backend: API Completamento Lezione.** Implementare l'endpoint e la logica nel backend per registrare le lezioni completate e aggiornare il campo xp dell'utente. | \[ \] | Modificare lessonController.js e integrare la chiamata API in LessonDetailPage.jsx. |

---

### **3\. 📈 Modulo 9 – Trading e Mercato (Priorità: Media \- Funzionale)**

Obiettivo: Sostituire le pagine ComingSoon con le prime implementazioni di dati reali e strutturati.

| Area | Task | Stato | Dettagli Tecnici / Design |
| :---- | :---- | :---- | :---- |
| **Sidebar Strumenti** | **UX CRITICA MOBILE: Sidebar Navigazione.** Nascondere le sidebar (es. in ExchangePage.jsx, ExplorerPage.jsx, ecc.) su mobile (d-none d-lg-block) e sostituire la navigazione con un NavDropdown nella parte superiore della pagina per recuperare spazio verticale. | \[ \] | Rimodellare la colonna \<Col\> in src/pages/Strumenti/\*. |
| **Responsiveness** | **Regola .fs-4 Mobile.** Definire una media query globale per ridurre la dimensione del testo che usa .fs-4 (molto grande) a 1rem su schermi XS/SM per una migliore leggibilità. | \[ \] | Aggiungere la regola in App.css. |
| **MarketPage (UI)** | Rimuovere \<ComingSoon /\> da MarketPage.jsx e implementare una tabella dei prezzi fittizi (o da API CoinGecko/CMC free tier) e visualizzare 1-2 grafici di tendenza con Chart.js. | \[ \] | Integrazione FE/BE (Cache Dati). |
| **News Feed** | Rimuovere \<ComingSoon /\> da NewsPage.jsx e implementare un layout con titoli placeholder statici e una struttura per articoli. | \[ \] | Modificare NewsPage.jsx e ArticoliPage.jsx. |

---

### **4\. 💬 Modulo 4, 5, 6, 7 – Implementazione Moduli (Priorità: Bassa \- Contenuto)**

Obiettivo: Iniziare lo sviluppo delle funzionalità principali di Community, Gamification e Finanza.

| Area | Modulo | Task | Stato | Dettagli Tecnici / Design |
| :---- | :---- | :---- | :---- | :---- |
| **Community** | Modulo 4 | **Backend CRUD Forum.** Finalizzare la logica di gestione Post e Commenti. Aggiungere la possibilità di votare (up/down) o segnalare un contenuto (come previsto in communityController.js). | \[ \] | Finalizzare communityController.js e Post.js/Comment.js schema. |
| **Community** | Modulo 4 | **Frontend Forum.** Sostituire \<ComingSoon /\> in ForumPage.jsx con una vista base del feed dei post. | \[ \] | Necessita di nuovi componenti per Post/Commenti. |
| **Gamification** | Modulo 5 | **Backend XP Base.** Assicurarsi che il campo xp in User.js venga aggiornato dal backend quando l'utente completa azioni (es. lezione). | \[ \] | Modificare userController.js e lessonController.js (integrazione XP). |
| **Portfolio** | Modulo 6 | **Frontend Portfolio Demo.** Sostituire \<ComingSoon /\> in PortfolioPage.jsx e creare l'interfaccia per l'inserimento di transazioni fittizie e la visualizzazione di un grafico P/L di base (Chart.js). | \[ \] | Modificare PortfolioPage.jsx. |
| **Finanza Teorica** | Modulo 7 | **Contenuti Placeholder.** Rimuovere i \<ComingSoon /\> da GlossarioPage.jsx e FinanzaPage.jsx e inserire contenuti statici di alta qualità come placeholder. | \[ \] | Riempire GlossarioPage.jsx e FinanzaPage.jsx. |
| **Admin** | Modulo 8 | **Moderazione Funzionale.** Testare e finalizzare la logica di Moderazione Post/Commenti in PostModeration.jsx e adminRoutes.js. | \[ \] | Verificare le rotte deleteFlaggedPost/approveFlaggedPost. |

---

## **Guida Passo Passo: L'Esperienza Professionale**

### **💡 Fase 1: Coerenza Funzionale e Rifinitura UI**

1. **Risolvi la Logica Dashboard/Profilo:**  
   * **Dashboard (/dashboard/:level):** Deve essere la **HOME** dell'utente loggato. Controlla DashboardPage.jsx e i \*Cruscotto.jsx. Assicurati che il pulsante "Area Personale" nella sidebar della Dashboard (in Sidebar.jsx) punti a /profilo.  
   * **Profilo (/profilo):** In ProfilePage.jsx, concentra tutte le azioni di gestione account (Logout, Cambia Livello, Avatar, Bio, ecc.).  
   * **Azione Tecnica:** In App.jsx, rimuovi o verifica che non ci siano rotte duplicate per /profilo. Se ne hai due, rimuovi quella non funzionante.  
2. **Migliora la UX Form (Icone SVG):**  
   * Installa la libreria se necessario (già presente: react-icons).  
   * **Azione Tecnica (Esempio LoginPage.jsx):** Rimuovi l'emoji 👁️ e sostituiscilo con \<FaEye /\> o \<FaEyeSlash /\>.  
   * Per aumentare l'area di click a 44px, potresti aggiungere un min-height al \<Button\> in un CSS custom, ad esempio min-height: 44px;.  
3. **Applica i Fix Responsive alle Pagine Strumenti (Moduli 3 & 9):**  
   * **Font:** Modifica App.css per definire un font-size più piccolo per le classi Bootstrap fs-4 all'interno di una media query per mobile.  
   * **Lesson Detail:** Implementa le media query per i titoli e il CSS dinamico per i viewer come descritto in Checklist 2\.  
4. **Ombre e Tonalità (Polish Design):**  
   * L'eleganza si ottiene con dettagli minimi. In App.css, potenzia l'effetto hover delle card (.crypto-card:hover) con ombre più sofisticate (box-shadow: 0 0 25px rgba(255, 193, 7, 0.4);) e rimuovi gli \!important che non sono strettamente necessari, lasciando a Bootstrap il controllo di base della tipografia.

### **🐍 Fase 2: Sviluppo Funzionale e Contenuto**

Dopo aver completato la Fase 1, la piattaforma sarà stabile e bella. Concentrati sull'attivazione delle pagine **placeholder** per dare immediatamente valore all'utente, e inizia la logica del Forum.

1. **Attivazione Pagine Placeholder (Moduli 6, 7):** Sostituisci i componenti \<ComingSoon /\> in PortfolioPage.jsx, GlossarioPage.jsx e FinanzaPage.jsx con un layout vero e proprio e testo di presentazione. Non devono essere funzionali al 100%, ma devono apparire completi e utili.  
2. **Backend per il Forum (Modulo 4):** Finalizza la logica di voto e segnalazione in communityController.js e adminRoutes.js. Questo è un modulo complesso, concentrati solo sul backend per una settimana.  
3. **Integrazione XP (Modulo 5):** Assicurati che, una volta creata la funzione per completare una lezione, essa chiami l'aggiornamento XP (userController.js), preparandoti per la fase di Gamification.
