import exchangeList from "@/data/exchangeList";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const ExchangePage = () => {
  return (
    <Container fluid className="py-5 px-4">
      <Row className="gx-5">
        
        <Col xs={12} md={4} lg={3} className="text-white px-3 mb-4 mb-md-0">
          <div className="p-3 rounded text-white shadow-sm fw-bold bg-dark">
            <h5 className="mb-3">🔁 Exchange Affidabili</h5>
            <ul className="list-unstyled">
              {exchangeList.map(item => (
                <li key={item.slug} className="mb-2">
                  <Link to={`/strumenti/exchange/${item.slug}`}>
                    👉 {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Col>

        <Col xs={12} md={8} lg={9} className="text-warning fs-bold px-4" style={{ maxWidth: "1100px" }}>
          <h1 className="mb-4 fw-bold">Cos'è un Exchange di criptovalute?</h1>
          <p className="fs-4" >
            Gli exchange di criptovalute sono piattaforme digitali che permettono di comprare, vendere, scambiare e convertire criptovalute. Rappresentano il cuore pulsante dell’intero ecosistema crypto, poiché consentono agli utenti di accedere ai mercati, gestire i propri fondi e interagire con una vasta gamma di asset digitali. 
          </p>
          <p className="fs-4">
            Gli exchange possono essere centralizzati (CEX) come Binance, Crypto.com o Bitget, oppure decentralizzati (DEX) come Uniswap o PancakeSwap.
          </p>
          <p className="fs-4">
            I CEX offrono un’interfaccia user-friendly, alta liquidità, supporto clienti e funzionalità avanzate come futures, margin trading e staking, ma richiedono registrazione (KYC) e custodiscono i fondi per conto dell’utente. 
          </p>
          <p className="fs-4">
            I DEX, invece, non richiedono registrazione e offrono una gestione autonoma dei fondi, ma con meno strumenti e una curva di apprendimento più ripida. 
          </p>
          <p className="fs-4">
            I migliori exchange garantiscono sicurezza elevata, bassi costi di transazione, trasparenza, velocità di esecuzione e integrazione con wallet e API. Alcuni offrono anche bonus di benvenuto, cashback, carte crypto e funzionalità DeFi. Confrontare più exchange è fondamentale per scegliere quello più adatto alle proprie esigenze: investimenti a lungo termine, operatività giornaliera, accesso a nuove criptovalute, gestione professionale o semplice acquisto occasionale.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default ExchangePage;