import tradingList from "@/data/tradingList";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const TradingPage = () => {
  return (
    <Container fluid className="py-5 px-4">
      <Row className="gx-5">
        <Col xs={12} md={4} lg={3} className="text-white px-3 mb-4 mb-md-0">
          <div className="p-3 rounded text-white shadow-sm fw-bold bg-dark">
            <h5 className="mb-3">📉 Piattaforme di Trading</h5>
            <ul className="list-unstyled">
              {tradingList.map(item => (
                <li key={item.slug} className="mb-2">
                  <Link to={`/strumenti/trading/${item.slug}`}>👉 {item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </Col>

        <Col xs={12} md={8} lg={9} className="text-warning fs-bold px-4" style={{ maxWidth: "1100px" }}>
          <h1 className="mb-4">Cos'è una piattaforma di trading crypto?</h1>
          <p className="fs-4">
            Le piattaforme di trading crypto offrono strumenti avanzati per operare attivamente sui mercati: grafici multi-timeframe, ordini condizionati, margin/futures trading, strategie automatizzate, integrazione con API e trading bot. 
          </p>
          <p className="fs-4">
            Alcune sono estensioni degli exchange (come Bitget Pro o Binance Pro), altre sono indipendenti (come TradingView o 3Commas).
          </p>
          <p className="fs-4">
            I trader professionisti utilizzano queste piattaforme per massimizzare profitti, gestire il rischio e ottimizzare ogni operazione. Le funzionalità includono: grafici TradingView, ordini OCO, trailing-stop, take profit, analisi on-chain, copy trading, bot a griglia o DCA, backtest e gestione API. 
          </p>
          <p className="fs-4">
            Le piattaforme più complete offrono anche sezioni dedicate al sentiment di mercato, alert personalizzati, integrazione con wallet, portafogli visivi e analisi del portafoglio. 
          </p>
          <p className="fs-4">
            Sono progettate per offrire velocità, precisione, controllo e un'interfaccia ottimizzata per chi opera più volte al giorno. Tuttavia, molte sono accessibili anche a utenti intermedi grazie a modalità semplificate, tutorial e percorsi guidati. 
          </p>
          <p className="fs-4">
            Saper utilizzare correttamente una piattaforma di trading è un’abilità fondamentale per chi vuole affrontare i mercati crypto in modo attivo e professionale.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default TradingPage;