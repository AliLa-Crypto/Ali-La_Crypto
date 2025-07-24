# ✅ UI/UX Fix Checklist – Ali&La Crypto

## 📱 Navbar (`MyNavbar.jsx`)

- [ ] Aggiungere `overflow-y: auto` (scroll) a `<Navbar.Offcanvas>` per menu lunghi su mobile
- [ ] Migliorare spacing link su mobile (`py-2`, padding responsive)
- [ ] Aggiungere media query per padding delle icone nav su XS/SM
- [ ] Migliorare focus visivo e accessibilità (tab, aria-label)

## 📉 Footer (`Footer.jsx`)

- [ ] Ridurre dimensione icone social su XS (<400px)
- [ ] Migliorare font-size link su mobile (min 14px)
- [ ] Migliorare contrasto link/footer su sfondi scuri

## 🧩 LevelSelector.jsx

- [ ] Aggiungere media query per testo delle card su XS/SM
- [ ] Migliorare distanziamento tra colonne su tablet
- [ ] Migliorare spaziatura verticale tra card (su XS)

## 🏠 HomePage.jsx / HeroSection.jsx

- [ ] Verificare padding e spaziature laterali su mobile
- [ ] Assicurarsi che `min-height: 100vh` funzioni su tutti i browser (aggiungere fallback CSS)

## 🔐 RegisterPage.jsx / LoginPage.jsx

- [ ] Migliorare leggibilità e padding dei form su mobile
- [ ] Sostituire emoji 👁️ con icona SVG e allargare area di click
- [ ] Usare `p-3` e font responsive per tutti gli input/label
- [ ] Allineare bene i link finali anche su XS/SM (flex-wrap, padding)
- [ ] Rendere tutti i messaggi di errore/feedback ben visibili anche su XS

## 📊 DashboardPage.jsx / Sidebar

- [ ] Aggiungere padding e font-size responsive a `.dashboard-content`
- [ ] Rendere sidebar scrollabile su mobile (`overflow-y: auto`)
- [ ] Nascondere sidebar su XS/SM (mostrare menu hamburger)
- [ ] Migliorare tap target dei bottoni (min 44px su mobile)

## 📚 LearnPage.jsx

- [ ] Cambiare griglia: `lg={3}` → `xs=12 sm=6 md=6 lg=4`
- [ ] Assicurarsi che card abbiano immagini fluide e titoli leggibili
- [ ] Aggiungere min-height alle card per layout omogeneo tra righe

## 📄 LessonDetailPage.jsx

- [ ] Ridurre `display-3` a `display-5` per titoli su XS/SM
- [ ] Applicare `overflow-wrap: break-word` per il container
- [ ] Rendere `iframe` PDF completamente responsive (width 100%, altezza dinamica)

## 📰 NewsPage / Glossario / Finanza

- [ ] Wrappare tutto in `<Container>` con `py-5 text-light text-center`
- [ ] Aggiungere placeholder di contenuto base per pagine vuote
- [ ] Migliorare visibilità dei titoli su background variabile

## 📊 Exchange / Wallet / Market / Explorer / Trading Pages

- [ ] Aggiungere media query per `.fs-4` su mobile (`font-size: 1rem`)
- [ ] Aggiungere `d-none d-lg-block` alla sidebar per nasconderla su XS/SM
- [ ] Ridurre padding su `<Container>` (`px-3 px-md-5`)
- [ ] Migliorare visibilità e tap area dei link sidebar (hover, text-light, min 44px)
- [ ] Aggiungere `target="_blank"` ai link esterni
- [ ] Evitare scroll orizzontale nelle tabelle su mobile

## 🧭 PlatformDetailPage.jsx

- [ ] Aggiungere `fs-5` su testo principale per leggibilità
- [ ] Migliorare sidebar su dispositivi piccoli (`overflow-auto`)
- [ ] Gestire `whiteSpace: pre-line` per testo multi-linea

---

### **Nuovi punti extra (scoperti durante analisi)**

- [ ] Implementare header sticky su pagine chiave (Dashboard, LearnPage, ecc.)
- [ ] Migliorare gestione modali/popup su XS (`max-width: 95vw`, `overflow-y: auto`)
- [ ] Uniformare area click di tutti i bottoni e link (min 44px su mobile)
- [ ] Migliorare visibilità messaggi di errore/alert in tutta l’app (colori, font, posizione)
- [ ] Prevenire scroll orizzontale su tutto il sito tramite CSS globale: `body { overflow-x: hidden }`

---
  
> Creare Issue collegate in GitHub, così poso assegnare task e tracciare avanzamento su ogni sezione!
