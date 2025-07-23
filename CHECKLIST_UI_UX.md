### ✅ UI/UX Fix Checklist – Ali&La Crypto

#### 📱 Navbar (MyNavbar.jsx)
- [ ] Aggiungere `scroll` a `<Navbar.Offcanvas>`
- [ ] Migliorare spacing link su mobile (`py-2`)
- [ ] Aggiungere media query per padding icone nav

#### 📉 Footer (Footer.jsx)
- [ ] Ridure dimensione icone social su xs
- [ ] Migliorare font-size link su mobile

#### 🧩 LevelSelector.jsx
- [ ] Aggiungere media query per testo card
- [ ] Migliorare distanziamento tra colonne su tablet

#### 🏠 HomePage.jsx
- [ ] Verificare padding e spaziature in `HeroSection`
- [ ] Assicurarmi che `min-height: 100vh` se necessario

#### 🔐 RegisterPage.jsx
- [ ] Migliorare leggibilità dei form su mobile
- [ ] Ingrandire emoji 👁️ o sostituirla con icona vera
- [ ] Usare `p-3` e font responsive

#### 🔐 LoginPage.jsx
- [ ] Stessi fix di RegisterPage
- [ ] Rendere cliccabile comodamente l’occhio 👁️
- [ ] Allineare bene i link finali anche su viewport piccoli

#### 📊 DashboardPage.jsx
- [ ] Aggiungere padding e font size a `.dashboard-content`
- [ ] Rendere scrollabile sidebar su mobile
- [ ] Ottimizzare layout `LearnPage`/moduli se presenti

#### 📚 LearnPage.jsx
- [ ] Cambiare colonna: `lg={3}` → `xs=12 sm=6 md=6 lg=4`
- [ ] Assicurarmi che le card abbiano immagine fluida e titoli leggibili

#### 📄 LessonDetailPage.jsx
- [ ] Ridure `display-3` a `display-5` per mobile
- [ ] Applicare `overflow-wrap: break-word` in `.lesson-detail-container`
- [ ] Rendere `iframe` PDF più adattabile (altezza responsive)

#### 📰 NewsPage / Glossario / Finanza
- [ ] Wrappa in `<Container>` con `py-5 text-light text-center`
- [ ] Aggiungere un paragrafo placeholder di contenuto base

#### 📊 Exchange / Wallet / Market / Explorer / Trading Pages
- [ ] Aggiungere media query per `.fs-4` su mobile (`font-size: 1rem`)
- [ ] Aggiungere `d-none d-lg-block` alla sidebar per nasconderla su mobile
- [ ] Ridure padding su `Container` (`px-3 px-md-5`)
- [ ] Migliorare visibilità dei link sidebar con `hover` e `text-light`
- [ ] Aggiungere `target="_blank"` ai link se portano a fonti esterne

#### 🧭 PlatformDetailPage.jsx
- [ ] Aggiungere `fs-5` su testo principale
- [ ] Migliorare sidebar su dispositivi piccoli (`overflow-auto`)
- [ ] Gestire `whiteSpace: pre-line` per testo multi-linea
