import { useParams } from "react-router-dom";
import exchangeList from "@/data/exchangeList";
import walletList from "@/data/walletList";
import marketAnalysisList from "@/data/marketAnalysisList";
import explorerList from "@/data/explorerList";
import tradingList from "@/data/tradingList";
import FeatureList from "@/Components/FeatureList";
import { Container, Row, Col } from "react-bootstrap";

const PlatformDetailPage = () => {
  const { categoria, slug } = useParams();

  // Tutti i dati disponibili
  const allData = {
    exchange: exchangeList,
    wallet: walletList,
    analisi: marketAnalysisList,
    explorer: explorerList,
    trading: tradingList,
  };

  // Trova i dati corrispondenti alla categoria e allo slug
  const selectedData = allData[categoria]?.find(item => item.slug === slug);

  // Se la piattaforma non esiste
  if (!selectedData) {
    return <div className="text-center mt-5">⚠️ Nessuna piattaforma trovata.</div>;
  }

  return (
    <Container fluid className="py-5 px-4">
      <Row>
        {/* Colonna principale */}
        <Col md={8} className="text-white">
          <h1 className="mb-4">{selectedData.name}</h1>
          <p style={{ whiteSpace: "pre-line" }}>{selectedData.description}</p>
          <h5 className="mt-4 mb-3">✨ Funzionalità principali:</h5>
          <FeatureList features={selectedData.features} />
        </Col>

        {/* Sidebar con altre piattaforme della stessa categoria */}
        <Col md={4}>
          <div className="p-4 border rounded bg-light">
            <h5 className="mb-3">📚 Altre piattaforme in questa categoria</h5>
            <ul className="list-unstyled">
              {allData[categoria]
                .filter(item => item.slug !== slug)
                .map(item => (
                  <li key={item.slug}>
                    <a href={`/strumenti/${categoria}/${item.slug}`}>
                      👉 {item.name}
                    </a>
                  </li>
                ))}
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default PlatformDetailPage;