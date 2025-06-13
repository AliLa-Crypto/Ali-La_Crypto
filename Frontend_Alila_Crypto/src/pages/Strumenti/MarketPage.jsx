import marketAnalysisList from "@/data/marketAnalysisList";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const MarketPage = () => {
  return (
    <Container fluid className="py-5 px-4">
      <Row className="gx-5">
        <Col xs={12} md={4} lg={3} className="text-white px-3 mb-4 mb-md-0">
          <div className="p-3 rounded text-white shadow-sm fw-bold bg-dark">
            <h5 className="mb-3">📊 Piattaforme di Analisi</h5>
            <ul className="list-unstyled">
              {marketAnalysisList.map(item => (
                <li key={item.slug} className="mb-2">
                  <Link to={`/strumenti/analisi/${item.slug}`}>👉 {item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </Col>

        <Col xs={12} md={8} lg={9} className="text-warning fs-bold px-4" style={{ maxWidth: "1100px" }}>
          <h1 className="mb-4">Cos'è una piattaforma di analisi di mercato?</h1>
          <p className="fs-4">
            Le piattaforme di analisi di mercato sono strumenti fondamentali per chi vuole prendere decisioni informate nel mondo delle criptovalute. Offrono una panoramica dettagliata su prezzi, volumi, capitalizzazione, andamento dei progetti, metriche on-chain e segnali di trading. 
          </p>
          <p className="fs-4">
            Tra le più note troviamo TradingView, ideale per analisi tecnica con grafici avanzati,
          </p>
          <p className="fs-4">
            CoinMarketCap e CoinGecko per overview generali,
          </p>
          <p className="fs-4">
            CryptoQuant e Glassnode per metriche blockchain e sentiment, 
          </p>
          <p className="fs-4">
            Messari per ricerche approfondite
          </p>
          <p className="fs-4">
           Queste piattaforme permettono di filtrare progetti, impostare alert di prezzo, seguire gli sviluppi delle criptovalute e comparare trend storici. Alcune offrono anche report settimanali, calendari di eventi (airdrop, upgrade), punteggi di rischio e previsioni basate su AI. 
          </p>
          <p className="fs-4">
           Per investitori, trader e ricercatori, rappresentano strumenti essenziali per analizzare l’ecosistema crypto con dati reali, verificabili e aggiornati. 
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default MarketPage;