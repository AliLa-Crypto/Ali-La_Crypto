import explorerList from "@/data/explorerList";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const ExplorerPage = () => {
  return (
    <Container fluid className="py-5 px-4">
      <Row className="gx-5">
        <Col xs={12} md={4} lg={3} className="text-white px-3 mb-4 mb-md-0">
          <div className="p-3 rounded text-white shadow-sm fw-bold bg-dark">
            <h5 className="mb-3">🔍 Blockchain Explorer</h5>
            <ul className="list-unstyled">
              {explorerList.map(item => (
                <li key={item.slug} className="mb-2">
                  <Link to={`/strumenti/explorer/${item.slug}`}>👉 {item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </Col>

        <Col xs={12} md={8} lg={9} className="text-warning fs-bold px-4" style={{ maxWidth: "1100px" }}>
          <h1 className="mb-4">Cos'è un blockchain explorer?</h1>
          <p className="fs-4">
            I Blockchain Explorer sono come i "motori di ricerca" delle reti crypto. Permettono di visualizzare pubblicamente e in tempo reale tutte le transazioni, blocchi, indirizzi, smart contract, token e attività di mining di una blockchain. 
          </p>
          <p className="fs-4">
            Ogni rete ha i suoi explorer principali: Etherscan per Ethereum, BscScan per BNB Chain, Solscan per Solana, Blockchair e Blockchain.com per Bitcoin. 
          </p>
          <p className="fs-4">
            Gli explorer sono strumenti trasparenti, open e affidabili, usati da trader, investitori, sviluppatori e utenti comuni per verificare la correttezza e lo stato di una transazione (es. "è arrivato il mio bonifico crypto?").
          </p>
          <p className="fs-4">
            Inoltre, offrono dettagli tecnici come gas fee, nonce, contract ABI, status degli NFT, verifiche di token e wallet, reputazione degli smart contract, e molto altro. 
          </p>
          <p className="fs-4">
            Per chi sviluppa su blockchain o vuole fare audit di progetti, sono strumenti imprescindibili. La loro funzione più importante è garantire trasparenza, tracciabilità e verifica pubblica di tutte le attività, valorizzando uno dei principi fondamentali della tecnologia blockchain.
          </p>
          
        </Col>
      </Row>
    </Container>
  );
};

export default ExplorerPage;