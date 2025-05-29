import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import logo from '../assets/SoloLogo.png';
import "../styles/HeroSection.css"

function HeroSection() {
  return (
    <section className="hero-section  text-light py-5">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} className="text-center text-md-start mb-4 mb-md-0">
            <h1 className="display-1 fw-bold">Scopri l’universo<br></br> delle crypto</h1>
            <p className="hero-subtitle mt-3 mb-4">
              Una piattaforma completa per formazione, finanza personale e social crypto. Ali&La Crypto ti guida passo dopo passo, dal livello principiante fino al livello esperto.
            </p>
            <Button href="#livelli" variant="primary" size="lg">Inizia ora</Button>
          </Col>
          <Col xs={12} md={6} className="text-center">
            <img src={logo} alt="Crypto Earth" className="img-fluid hero-img pt-5" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default HeroSection;