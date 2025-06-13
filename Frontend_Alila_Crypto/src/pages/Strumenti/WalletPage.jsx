import walletList from "@/data/walletList";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const WalletPage = () => {
  return (
    <Container fluid className="py-5 px-4">
      <Row className="gx-5">
        <Col xs={12} md={4} lg={3} className="text-white px-3 mb-4 mb-md-0">
          <div className="p-3 rounded text-white shadow-sm fw-bold bg-dark">
            <h5 className="mb-3">👛 Wallet Affidabili</h5>
            <ul className="list-unstyled">
              {walletList.map(item => (
                <li key={item.slug} className="mb-2">
                  <Link to={`/strumenti/wallet/${item.slug}`}>👉 {item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </Col>

        <Col xs={12} md={8} lg={9} className="text-warning fs-bold px-4" style={{ maxWidth: "1100px" }}>
          <h1 className="mb-4 fw-bold">Cos'è un Wallet crypto?</h1>
          <p className="fs-4">
            I wallet crypto sono strumenti essenziali per chi possiede o vuole iniziare a utilizzare criptovalute. Consentono di conservare, ricevere, inviare e gestire asset digitali in modo sicuro.
          </p>
          <p className="fs-4">
            Esistono diverse tipologie di wallet: hot wallet (connessi a Internet) come Exodus, Phantom o Coinbase Wallet, e cold wallet (offline) come Ledger o Trezor.
          </p>
          <p className="fs-4">
            I wallet possono essere custodial (gestiti da una piattaforma, es. Binance Wallet o Bitget Wallet) oppure non-custodial, dove solo l’utente ha accesso alle chiavi private. 
          </p>
          <p className="fs-4">
            I non-custodial wallet rappresentano la vera essenza della decentralizzazione, perché danno pieno controllo all’utente. 
          </p>
          <p className="fs-4">
            Oltre alla sicurezza, molti wallet offrono integrazione con DApp, staking, swap integrati, gestione multi-chain e supporto NFT. I migliori wallet garantiscono interfacce intuitive, compatibilità multi-dispositivo (desktop, mobile, browser extension), backup e recovery affidabili, e sicurezza contro phishing e malware.
          </p>
          <p className="fs-4">
            Un buon wallet è come una cassaforte digitale: protegge i tuoi fondi e ti consente di interagire in modo sicuro con l’ecosistema crypto, sia in ambito DeFi, sia per semplici pagamenti peer-to-peer.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default WalletPage;