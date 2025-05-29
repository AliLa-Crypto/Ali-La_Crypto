import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaXTwitter, FaInstagram } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <Container>
        <Row className="text-center text-md-start">
          <Col md={4} className="mb-3">
            <h5>Ali&La Crypto</h5>
            <p>© {new Date().getFullYear()} Tutti i diritti riservati</p>
          </Col>
          <Col md={4} className="mb-3">
            <h6>Link Utili</h6>
            <ul className="list-unstyled">
              <li><a href="#about" className="text-light">Chi siamo</a></li>
              <li><a href="#finanza" className="text-light">Finanza personale</a></li>
              <li><a href="#glossario" className="text-light">Glossario</a></li>
            </ul>
          </Col>
          <Col md={4} className="mb-3">
            <h6 className='ps-5'>Seguici</h6>
            <div className="d-flex gap-3 justify-content-center justify-content-md-start">
                <a href="#" 
                className="bg-white rounded-circle p-2 d-flex align-items-center justify-content-center" 
                style={{ width: 40, height: 40 }}>
                    <FaFacebook size={20} color="#1877F2" />
                </a>
                <a href="#" 
                className="bg-white rounded-circle p-2 d-flex align-items-center justify-content-center" 
                style={{ width: 40, height: 40 }}>
                    <FaXTwitter size={20} color="#000" />
                </a>
                <a href="#" 
                className="bg-white rounded-circle p-2 d-flex align-items-center justify-content-center" 
                style={{ width: 40, height: 40 }}>
                    <FaInstagram size={20} color="#E1306C" />
                </a>
            </div>

          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;