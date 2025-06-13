// Lista degli Explorer piu importanti

export const explorerList = [
  {
    name: "Etherscan",
    slug: "etherscan",
    description: `**Etherscan** è il block explorer ufficiale della rete Ethereum e rappresenta uno degli strumenti più completi, affidabili e utilizzati da chiunque operi nell’ecosistema Ethereum. È una piattaforma gratuita e aperta che consente a utenti, sviluppatori, analisti e curiosi di esplorare in tempo reale tutti i dati pubblici della blockchain Ethereum. 

    Etherscan è nato con un obiettivo semplice ma potente: **rendere trasparente e accessibile la blockchain di Ethereum**, fornendo un'interfaccia user-friendly per interrogare transazioni, blocchi, smart contract, wallet e token. Il servizio è disponibile dal 2015 ed è diventato nel tempo lo **standard di riferimento** per l’intera industry.

    ### 🔹 Cosa si può fare con Etherscan?

    Su Etherscan è possibile:

    - Cercare qualsiasi **indirizzo pubblico** e visualizzare il bilancio, le transazioni in entrata e in uscita, i token detenuti e le interazioni con smart contract.
    - Analizzare il dettaglio di una **transazione**: hash, mittente, destinatario, valore trasferito, gas utilizzato, timestamp, stato e note.
    - Esplorare i **blocchi** in tempo reale, inclusi orario di convalida, miner, reward, dimensione, transazioni incluse.
    - Controllare e verificare **smart contract**: codice sorgente, ABI, stato di verifica, sicurezza, chiamate di funzione.
    - Monitorare l’attività dei **token ERC-20, ERC-721 e ERC-1155**: volume di scambio, trasferimenti, holders, metadata NFT.
    - Consultare **eventi di rete**: fork, upgrade, hard fork, merge, beacon chain.
    - Visualizzare classifiche: top wallet, top token, top miner, top dApps.

    ### 🔹 Funzionalità avanzate

    Etherscan offre strumenti anche per utenti avanzati e sviluppatori:

    - **Token Tracker**: scopri i token più attivi, appena creati, e monitorane la distribuzione.
    - **Gas Tracker**: mostra in tempo reale il costo medio del gas, le fee più basse e più alte, la congestione della rete.
    - **Analytics Dashboard**: grafici interattivi sull’uso di Ethereum, numero di transazioni giornaliere, media del gas, crescita wallet, ecc.
    - **Label System**: Etherscan applica “etichette” a wallet noti (es. Binance, Tether, Celsius) per migliorare la comprensione delle transazioni.
    - **API pubbliche**: permette a sviluppatori di interrogare la blockchain per costruire dApp, dashboard, tracker personalizzati.
    - **Smart Contract Verification**: chi sviluppa può caricare e verificare il proprio contratto, rendendolo trasparente e leggibile.
    - **Multichain view**: da Etherscan si possono navigare anche reti compatibili come Arbitrum, Optimism e zkEVM tramite link diretti.

    ### 🔹 Usi tipici di Etherscan

    Etherscan è uno strumento cruciale in decine di scenari pratici:
    - Verifica di un pagamento in ETH o token
    - Analisi di comportamenti sospetti (es. rug pull)
    - Monitoraggio del proprio portafoglio o di portafogli pubblici (es. whale)
    - Controllo delle transazioni in pending o fallite
    - Audit manuale di contratti smart prima di interagire
    - Studio e reverse engineering di smart contract famosi
    - Tracciamento attività di protocollo DeFi (Uniswap, Aave, Curve, ecc.)

    Etherscan è considerato **uno strumento di fiducia**, indipendente da exchange o fondi privati, e ha sempre mantenuto un’impostazione neutrale e tecnica. Il sito non gestisce asset, non offre servizi di custodia e non chiede mai seed phrase.

    ### 🔹 Accessibilità e account

    Etherscan è gratuito. Tuttavia, creando un account si può:
    - Salvare indirizzi nella propria watchlist
    - Ricevere notifiche via email su transazioni in entrata o uscita
    - Accedere a dashboard personalizzate
    - Usare API con chiavi private

    L’interfaccia è disponibile in più lingue ed è completamente mobile responsive.

    In sintesi, Etherscan è il **punto di accesso principale alla rete Ethereum**, ed è uno strumento imprescindibile per chiunque voglia navigare consapevolmente in questo ecosistema. Dalla semplice verifica di un wallet, all’audit tecnico di un protocollo DeFi, Etherscan è lo standard. Nessuna guida al mondo crypto è completa senza includere questo block explorer.`,
    features: [
        "Esplorazione completa di transazioni, wallet e contratti su Ethereum",
        "Verifica e visualizzazione di smart contract",
        "Token tracker per ERC-20, ERC-721, ERC-1155",
        "Dashboard analitici su rete, wallet, token e miner",
        "Etichettatura indirizzi noti (Binance, DeFi, whale)",
        "Gas Tracker in tempo reale",
        "API pubbliche per sviluppatori",
        "Monitoraggio NFT, DAO, DeFi",
        "Sistema di notifiche per utenti registrati",
        "Supporto per reti Layer 2 come Arbitrum e Optimism",
        "Strumento educativo e trasparente per tutta la community"
    ]
  },

  {
    name: "BscScan",
    slug: "bscscan",
    description: `**BscScan** è il block explorer ufficiale della **BNB Chain** (ex Binance Smart Chain), ed è stato creato dal team di Etherscan con l’obiettivo di offrire la stessa esperienza di esplorazione e trasparenza, ma sulla blockchain BNB. È uno strumento fondamentale per sviluppatori, utenti DeFi, investitori in token BEP-20 e chiunque operi su questa rete.

    BNB Chain è una delle blockchain più usate al mondo per transazioni veloci, costi ridotti e grande disponibilità di dApp e token. BscScan permette di visualizzare in tempo reale tutto ciò che accade sulla rete: transazioni, blocchi, smart contract, wallet, token, NFT e piattaforme DeFi.

    ### 🔹 Caratteristiche principali

    Con BscScan puoi:

    - **Cercare wallet e indirizzi**: mostra saldo in BNB, token BEP-20/NFT, cronologia completa delle transazioni.
    - **Analizzare transazioni**: verifica hash, stato (confermato, fallito, pending), commissioni gas, input/output di token.
    - **Esplorare smart contract**: verifica codice sorgente, leggi e scrivi funzioni, controlla autorizzazioni e interazioni.
    - **Tracciare token BEP-20, BEP-721 e BEP-1155**: volume, holders, grafici di distribuzione, creazione e metadata NFT.
    - **Controllare i blocchi minati**: tempo di produzione, transazioni per blocco, reward e produttori.

    ### 🔹 Strumenti avanzati

    - **Token Tracker**: visualizza i token più usati, nuovi contratti, ranking per numero di holder o volume.
    - **Gas Tracker BNB**: monitora il costo del gas sulla rete BNB Chain.
    - **Smart Contract Verification Tool**: verifica codice di nuovi smart contract e rendili pubblici per la community.
    - **API per sviluppatori**: accesso a tutti i dati pubblici della blockchain via endpoint REST.
    - **Label System**: identifica wallet di exchange, fondi, truffe note, progetti noti (es. PancakeSwap, Venus).
    - **Analytics**: grafici interattivi su transazioni giornaliere, volume, crescita utenti, TVL.
    - **Watchlist e notifiche**: salva wallet e ricevi alert per attività sospette o transazioni in entrata/uscita.

    ### 🔹 Utilizzi pratici

    - Monitorare wallet propri o di altri utenti
    - Verificare transazioni DeFi (depositi, yield, farming, bridge)
    - Controllare i dettagli di contratti interattivi prima di firmare
    - Esplorare NFT e asset su BNB Chain
    - Scoprire nuove dApp o progetti BEP-20
    - Indagare su progetti truffa, rug pull o movimenti sospetti

    BscScan è spesso usato da trader DeFi, utenti MetaMask, sviluppatori di dApp e appassionati di yield farming.

    ### 🔹 Differenze rispetto a Etherscan

    BscScan e Etherscan sono quasi identici per struttura, ma analizzano blockchain diverse:
    - **Etherscan** per Ethereum e Layer 2
    - **BscScan** per BNB Chain (BEP-20, PancakeSwap, Venus, Alpaca, ecc.)

    Entrambe sono altamente affidabili, open source e non gestiscono fondi o custodia.

    BscScan rappresenta quindi una **finestra trasparente e dettagliata sulla rete BNB**, usata da milioni di utenti ogni giorno. È un tool indispensabile per chi fa DeFi, trading, farming o sviluppo su questa blockchain ad alta velocità e basso costo.`,
    features: [
        "Esplorazione completa della rete BNB Chain",
        "Verifica di wallet, transazioni e contratti smart",
        "Supporto per token BEP-20, NFT BEP-721 e 1155",
        "Tracker gas e costi di rete in tempo reale",
        "Visualizzazione di blocchi minati e reward",
        "Strumenti avanzati per sviluppatori e audit",
        "Dashboard analitiche e grafici di rete",
        "API REST pubbliche e private",
        "Sistema di etichette per wallet e progetti noti",
        "Notifiche e watchlist per utenti registrati",
        "Interfaccia familiare a chi usa Etherscan"
    ]
  },

  {
    name: "Blockchain.com Explorer",
    slug: "blockchain-com-explorer",
    description: `**Blockchain.com Explorer** è uno dei più storici e popolari block explorer per **Bitcoin** e altre principali criptovalute. Fa parte della suite di servizi offerti da Blockchain.com, una delle aziende pionieristiche nel mondo delle criptovalute sin dal 2011. Il suo explorer è stato per anni il più utilizzato dagli utenti per visualizzare, verificare e comprendere il funzionamento delle transazioni su Bitcoin, diventando un punto di riferimento globale per chi si avvicinava per la prima volta al concetto di blockchain.

    Il Blockchain.com Explorer è progettato con un’interfaccia semplice e chiara che consente a chiunque di navigare nella blockchain in tempo reale. È uno strumento educativo, analitico e pratico al servizio di milioni di utenti ogni mese.

    ### 🔹 Cosa consente di fare

    Il Blockchain.com Explorer permette di:

    - **Cercare e visualizzare transazioni Bitcoin** inserendo un hash o l’indirizzo di un wallet.
    - Consultare il dettaglio di **blocchi confermati**: altezza, timestamp, dimensione, fee, numero di transazioni.
    - Esplorare **indirizzi Bitcoin** per visualizzare saldo, transazioni in entrata e uscita, numero di conferme.
    - Monitorare le **fee di rete in tempo reale**, suggerendo il miglior costo per una conferma veloce.
    - Verificare l’arrivo o lo stato di una transazione in pending (non ancora confermata).
    - Accedere a **statistiche globali** sulla rete: difficoltà, hashrate, mempool size, transazioni al secondo, nuovi indirizzi giornalieri.

    ### 🔹 Reti supportate

    Oltre a Bitcoin (BTC), Blockchain.com Explorer offre supporto per:

    - **Bitcoin Cash (BCH)**
    - **Ethereum (ETH)**
    - **Stellar (XLM)**

    È quindi utile anche per utenti multi-cripto che vogliono monitorare diverse reti da un’unica interfaccia.

    ### 🔹 Funzionalità aggiuntive

    - **Ricerca smart**: è possibile incollare un hash, un indirizzo o un numero di blocco e ottenere subito i dettagli relativi.
    - **Transazioni annotate**: il sistema evidenzia le transazioni verso exchange noti, protocolli e wallet riconosciuti.
    - **Timeline globale**: mostra l’attività di rete minuto per minuto.
    - **Grafici e analytics**: dati aggregati su market cap, volume giornaliero, costo medio per transazione, fee pagate, ricompense miner.
    - **Link rapido al wallet Blockchain.com**: utile per chi usa l’app ufficiale per custodire BTC o ETH.

    ### 🔹 Utilità pratica

    Questo explorer è usato quotidianamente da:

    - **Privati** che vogliono verificare l’avvenuto invio/ricezione di Bitcoin
    - **Commercianti** per confermare transazioni da clienti
    - **Analisti** per tracciare transazioni sospette o whale movement
    - **Educatori** per spiegare la struttura della blockchain di Bitcoin
    - **Miner** per controllare reward, difficoltà e tempo di blocco

    Essendo sviluppato da un'azienda nota, l’interfaccia è ottimizzata anche per dispositivi mobili ed è disponibile in più lingue.

    ### 🔹 Differenze rispetto ad altri explorer

    Rispetto ad altri explorer più tecnici (es. mempool.space o btc.com), Blockchain.com Explorer è pensato **per semplicità e immediatezza**, rendendolo perfetto per principianti e utenti occasionali.

    È anche considerato uno degli strumenti **più affidabili e longevi**, usato in contesti istituzionali, media finanziari e corsi universitari per visualizzare il funzionamento del Bitcoin in tempo reale.

    In sintesi, Blockchain.com Explorer rappresenta una **porta d’ingresso essenziale al mondo del Bitcoin**, con una reputazione consolidata e una capacità di semplificare la comprensione di una delle reti più complesse al mondo.`,
    features: [
        "Esplorazione completa della rete Bitcoin",
        "Ricerca per hash, indirizzo o numero di blocco",
        "Fee suggerite in tempo reale",
        "Dati statistici su hashrate, difficoltà, transazioni",
        "Interfaccia semplice e multi-lingua",
        "Supporto per BCH, ETH e XLM",
        "Cronologia delle transazioni per wallet",
        "Grafici e metriche globali della rete",
        "Annotazione automatica di transazioni note",
        "Visualizzazione mobile-friendly",
        "Accesso diretto al wallet Blockchain.com"
    ]
  },

  {
    name: "Solscan",
    slug: "solscan",
    description: `**Solscan** è il block explorer leader per la blockchain **Solana**, una delle reti più performanti e utilizzate nel panorama delle criptovalute per la sua velocità, scalabilità e commissioni irrisorie. Solscan è stato creato con l’obiettivo di fornire uno strumento completo e trasparente per l’analisi e la verifica delle transazioni sulla rete Solana, proponendo un'interfaccia accessibile a tutti — dai principianti ai tecnici.

    Nel contesto di una blockchain come Solana, dove i dati si muovono a velocità elevatissime, avere uno strumento come Solscan significa poter monitorare **in tempo reale** milioni di transazioni, smart contract, asset, NFT e interazioni DeFi.

    ### 🔹 Funzionalità principali

    Solscan permette agli utenti di:

    - Cercare qualsiasi **indirizzo wallet** e visualizzare cronologia, bilanci, token SPL e transazioni.
    - Esplorare il dettaglio di una **transazione Solana**: firma (signature), slot, fee pagate, esito, blocco, data/ora, programma chiamato.
    - Monitorare **blocchi e slot**: altezza, tempo di creazione, leader, transazioni.
    - Analizzare smart contract (programmi): codici, interazioni, autorità, aggiornamenti.
    - Visualizzare token SPL (standard di token su Solana), incluse supply, titolari, transazioni recenti.
    - Esplorare **NFT su Solana** con metadata, proprietà, collezione, artista, prezzi e vendite recenti.

    ### 🔹 Dashboard specifiche

    Solscan dispone di numerose dashboard dedicate:

    - **Token Tracker**: elenchi dei token più scambiati o appena creati.
    - **NFT Tracker**: collezioni più attive, volumi, mint, floor price.
    - **DeFi Tracker**: analisi di piattaforme come Serum, Raydium, Orca, Jupiter.
    - **Staking & Validator Dashboard**: monitoraggio di validatori, deleghe, commissioni e rendimenti.
    - **Governance & DAO**: supporto per esplorare i processi di governance e votazioni su Solana.

    ### 🔹 Altre funzionalità avanzate

    - **Cronologia di transazioni dettagliata** per wallet, contratti, collezioni NFT.
    - **Ricerca per token name, ID, mint address** o numero di slot.
    - **Visualizzazione delle istruzioni program** passo per passo (istruzioni CPI incluse).
    - **Link rapidi** a collezioni NFT o progetti DeFi noti.
    - **Supporto per account con più firme (multisig)**.
    - **Staking explorer** per chi partecipa alla sicurezza della rete.

    ### 🔹 Usabilità

    Solscan è progettato per un’esperienza fluida e leggibile:
    - Interfaccia chiara con evidenziazione delle funzioni
    - Modalità dark/light
    - Navigazione intuitiva tra NFT, token, transazioni, contratti
    - Tradotto in più lingue (incluso inglese, cinese, spagnolo)
    - 100% mobile friendly

    ### 🔹 Differenze con altri explorer di Solana

    Anche se esistono altri explorer per Solana (es. Solana Explorer ufficiale, SolanaFM), **Solscan è il più usato** per la sua interfaccia intuitiva, il supporto a NFT e DeFi, e l'aggiornamento costante con nuove funzionalità. È scelto da progetti come Magic Eden, Stepn, Saber, e DAO rilevanti dell’ecosistema.

    ### 🔹 A chi è utile Solscan

    - Utenti retail e appassionati NFT che vogliono verificare mint, floor price, attività collezioni
    - Trader DeFi che monitorano rendimenti, pool e swap
    - Sviluppatori di smart contract su Solana
    - Holder e investitori che monitorano il proprio portafoglio SPL
    - Staker e validatori interessati a statistiche sulla rete e performance

    Solscan è gratuito e open source, ma offre anche un account Pro per utenti aziendali, con grafici avanzati, API dedicate e monitoraggio intensivo.

    In sintesi, **Solscan è lo strumento più completo per comprendere e navigare la blockchain di Solana**, supportando tutte le componenti dell’ecosistema: NFT, token, staking, DeFi, contratti e governance.`,
    features: [
        "Visualizzazione transazioni Solana (signature, slot, fee)",
        "Ricerca wallet, token SPL, smart contract",
        "NFT tracker per collezioni, mint e floor price",
        "DeFi dashboard: Raydium, Orca, Serum, Jupiter",
        "Staking dashboard per validatori e deleganti",
        "Governance tracker e DAO support",
        "Supporto multisig e istruzioni CPI",
        "Interfaccia tradotta, dark mode, mobile ready",
        "Token e NFT analytics approfonditi",
        "Supporto API per uso avanzato",
        "Account Pro con dati premium per aziende"
    ]
  },

  {
    name: "Arbiscan",
    slug: "arbiscan",
    description: `**Arbiscan** è il block explorer ufficiale per la rete **Arbitrum**, una delle principali soluzioni di **Layer 2 per Ethereum**, costruita per offrire transazioni più rapide ed economiche mantenendo la sicurezza della mainnet Ethereum. Arbiscan è sviluppato dallo stesso team di Etherscan e segue lo stesso modello visivo e funzionale, rendendolo familiare per chi ha già utilizzato Etherscan o BscScan.

    Arbitrum sfrutta una tecnologia chiamata **Optimistic Rollup**, che consente di “comprimere” numerose transazioni in un’unica operazione che viene poi convalidata sulla blockchain principale di Ethereum. In questo contesto, Arbiscan svolge un ruolo cruciale nel fornire trasparenza e tracciabilità su una rete che gestisce un numero crescente di applicazioni DeFi, NFT, bridge e protocolli.

    ### 🔹 Cosa puoi fare con Arbiscan

    Arbiscan permette di:

    - Cercare qualsiasi **wallet o indirizzo smart contract** e visualizzare bilancio, cronologia delle transazioni, token posseduti, interazioni con dApp.
    - Verificare **transazioni** complete di hash, nonce, valore, data, stato, gas speso, e eventuali errori.
    - Visualizzare **blocchi recenti**, con numero, timestamp, produttore, dimensione e reward.
    - Analizzare **token ERC-20 e NFT compatibili** (ERC-721, ERC-1155) emessi su Arbitrum.
    - Interagire con **smart contract**: leggere, scrivere funzioni e verificarne il codice sorgente.
    - Seguire le attività di progetti DeFi come GMX, Radiant Capital, Dopex, Arbitrum Bridge, ecc.

    ### 🔹 Funzionalità avanzate

    Arbiscan offre tutti gli strumenti professionali derivati da Etherscan:

    - **Gas Tracker specifico per Arbitrum**
    - **Token e NFT Tracker** per nuovi asset lanciati
    - **Labeling** per indirizzi noti (bridge, exchange, pool, progetti)
    - **Dashboard analitiche**: numero transazioni, crescita utenti, utilizzo gas
    - **API pubbliche** per sviluppatori che vogliono costruire dApp
    - **Monitoraggio smart contract verificati** e supporto per proxy

    ### 🔹 Ecosistema supportato

    Arbiscan è essenziale per esplorare tutte le attività all’interno di:

    - **dApp DeFi** come GMX, Camelot, Radiant, Dopex, Vela, Zyber
    - **Bridge** da Ethereum e altre chain (LayerZero, Hop, Arbitrum Bridge)
    - **NFT Marketplace** come Treasure, Stratos
    - **Wallet compatibili** come MetaMask, Rabby, Ledger via Arbitrum RPC

    ### 🔹 Interfaccia e usabilità

    - Tema simile a Etherscan (dark/light)
    - Navigazione rapida tra moduli (Token, Contracts, Address, Internal Tx)
    - Disponibile anche in versione mobile responsive
    - Supporto multilingua e collegamenti diretti a Chainlist per RPC
    - Documentazione e API pubblica con dashboard gratuita

    ### 🔹 Perché usare Arbiscan

    Arbiscan è uno **strumento fondamentale per utenti avanzati** che usano la rete Arbitrum, ma anche per chi fa bridge da Ethereum o vuole verificare operazioni DeFi a basso costo.

    Grazie alla sua interfaccia familiare, Arbiscan consente di:
    - Tracciare **operazioni cross-chain**
    - Verificare **eventi DeFi e claim di token**
    - Monitorare **wallet sospetti o address whale**
    - Esplorare **gas fee molto basse rispetto a Ethereum L1**

    In conclusione, Arbiscan è il **punto d'accesso trasparente e affidabile per esplorare Arbitrum**, uno dei Layer 2 più promettenti dell’ecosistema Ethereum, già adottato da milioni di utenti e da decine di progetti d’avanguardia.`,
    features: [
        "Ricerca completa di wallet, token, transazioni su Arbitrum",
        "Esplorazione di blocchi e smart contract verificati",
        "Supporto per token ERC-20, NFT (ERC-721 e 1155)",
        "Interazione diretta con smart contract (read/write)",
        "Dashboard gas fee e congestione rete Arbitrum",
        "Label di wallet noti: exchange, DeFi, bridge",
        "Token tracker, NFT tracker e trending assets",
        "API per sviluppatori con chiavi gratuite",
        "Grafici e statistiche su utilizzo rete",
        "Interfaccia simile a Etherscan, mobile responsive",
        "Strumento indispensabile per utenti Arbitrum e DeFi"
    ]
  },

  {
    name: "Polygonscan",
    slug: "polygonscan",
    description: `**Polygonscan** è il block explorer ufficiale della blockchain **Polygon (precedentemente Matic Network)**, una delle più adottate soluzioni di scalabilità per Ethereum. Sviluppato dallo stesso team di Etherscan, Polygonscan offre un’interfaccia potente, veloce e intuitiva per esplorare ogni attività sulla rete Polygon, nota per le sue **basse commissioni**, **alta velocità di transazione** e compatibilità completa con l’EVM (Ethereum Virtual Machine).

    Polygon è utilizzato da centinaia di applicazioni decentralizzate (dApp), piattaforme DeFi, marketplace NFT, DAO e progetti Web3. Polygonscan consente di tenere traccia in tempo reale di transazioni, token, contratti e wallet in modo trasparente.

    ### 🔹 Funzionalità principali

    Polygonscan permette di:

    - Cercare qualsiasi **wallet address**, **hash di transazione**, **blocco** o **contratto smart**.
    - Esplorare **transazioni Polygon** (valori, gas fee, success/failure, nonce, ecc.).
    - Visualizzare **token ERC-20, ERC-721 e ERC-1155** creati o trasferiti su Polygon.
    - Interagire con **smart contract** tramite interfaccia "Read" e "Write".
    - Esplorare **blocs recenti** prodotti da validatori, con tempo, tx e reward.
    - Monitorare **NFT**, collezioni e transazioni collegate.

    ### 🔹 Tool avanzati

    - **Token Tracker**: scopri token più popolari, nuovi lanciati e con più holder.
    - **NFT Tracker**: collezioni più attive, token mintati, prezzi, transfer.
    - **Gas Tracker Polygon**: visualizza il costo medio per operazione.
    - **DeFi Dashboard**: attività su piattaforme come Aave, Quickswap, Curve.
    - **Analytics**: grafici giornalieri su transazioni, wallet, bridge, volume.
    - **Label Address**: identifica wallet di exchange, fondi, dApp note e anche truffe.

    ### 🔹 Ecosistema compatibile

    Polygonscan è compatibile con tutte le principali app su Polygon:

    - **DeFi**: Aave, Quickswap, Curve, Beefy
    - **NFT**: OpenSea su Polygon, NFT Drops, marketplaces low-fee
    - **Bridge**: Polygon Bridge, Hop, LayerZero
    - **DAO e Tool Web3**: Snapshot, Gnosis Safe

    ### 🔹 API e usabilità

    - API REST pubbliche gratuite per sviluppatori
    - Visualizzazioni mobile-friendly, dark/light mode
    - Navigazione veloce, ricerca smart e caching
    - Interfaccia familiare per chi ha già usato Etherscan o BscScan
    - Strumenti per audit e verifica codice

    ### 🔹 A cosa serve Polygonscan

    Polygonscan è essenziale per:

    - Verificare lo stato delle tue transazioni su Polygon
    - Monitorare e analizzare wallet personali o pubblici
    - Tracciare NFT o token ricevuti o venduti
    - Usare e testare contratti smart su Polygon
    - Scoprire nuovi token e progetti emergenti
    - Controllare fee, performance della rete, validatori attivi

    ### 🔹 Conclusione

    In sintesi, **Polygonscan è lo strumento di riferimento per navigare l’ecosistema Polygon**, offrendo un’analisi dettagliata e precisa in tempo reale. Che tu sia un utente retail, uno sviluppatore, un trader DeFi o un collezionista NFT, Polygonscan ti permette di tenere tutto sotto controllo in un’unica piattaforma potente e intuitiva.`,
    features: [
        "Esplorazione di wallet, transazioni, blocchi, contratti su Polygon",
        "Supporto completo per token ERC-20, NFT ERC-721/1155",
        "Smart contract interaction e codice verificato",
        "DeFi e NFT dashboard dedicate",
        "Gas tracker per fee Polygon",
        "Label address per exchange, fondi, progetti noti",
        "Grafici analitici su uso rete e volume",
        "API pubbliche per sviluppatori Web3",
        "Dark/light mode e interfaccia mobile responsive",
        "Compatibilità con bridge e DAO su Polygon",
        "Strumento ufficiale e sicuro dell’ecosistema Polygon"
    ]
  },

];

export default explorerList;