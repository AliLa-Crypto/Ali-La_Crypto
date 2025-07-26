import React, { useState } from 'react';
import { Navbar, Nav, Container, NavDropdown, Offcanvas } from 'react-bootstrap';
import { FaHome, FaUsers, FaTools, FaNewspaper, FaWallet, FaBook, FaShoppingCart, FaUserCircle, FaUserCheck, FaSignInAlt, FaPiggyBank } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

const logoSrc = "/logo3.png";


export function MyNavbar() {
  
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const { user } = useAuth();
  const loggedIn = Boolean(user?.level);

  return (
    <Navbar key="lg" expand="lg" bg="dark" variant="dark" sticky="top" className="navbar-custom">
      <Container fluid>
        {/* 🔹 Logo + titolo */}
        <Navbar.Brand href="/" className="d-flex align-items-center navbar-brand-responsive">
          <img
            src={logoSrc}
            alt="Ali&La Crypto logo"
            width="45"
            height="45"
            className="d-inline-block align-middle me-3"
          />
          <span className="fw-bold brand-title ">Ali&La Crypto</span>
        </Navbar.Brand>

        {/* 🔹Home + Chi siamo sempre visibili per sm/md */}
        <div className="d-lg-none d-flex ms-auto align-items-center gap-1">
          <Nav className="d-flex flex-row align-items-center">
            <Nav.Link className='navbar-icon-link text-white' 
                      aria-label="Home"
                      data-tooltip="Home"
                      tabIndex="0"
                      as={Link} to="/">
                        <FaHome />
            </Nav.Link>
            <Nav.Link className="navbar-icon-link text-white me-2"
                      aria-label="Chi siamo"
                      data-tooltip="Chi siamo"
                      as={Link} to="/about" >
                        <FaUsers />
            </Nav.Link>
          
          </Nav>
        </div>

        {/* Toggle per aprire offcanvas */}
        <Navbar.Toggle aria-controls="offcanvas-navbar" onClick={() => setShowOffcanvas(true)} />

        {/* 🔹 Offcanvas per sm/md + navbar classica da lg in su */}
        <Navbar.Offcanvas
          id="offcanvas-navbar"
          aria-labelledby="offcanvas-navbar-label"
          placement="end"
          className="bg-dark text-light offcanvas-scroll"
          show={showOffcanvas}
          onHide={() => setShowOffcanvas(false)}>
          <Offcanvas.Header closeButton closeVariant="white">
            <Offcanvas.Title id="offcanvas-navbar-label"></Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="flex-grow-1 pe-3 fs-5">
              {/* 🔸 Solo visibile da lg in su */}
              <div className="d-none d-lg-flex w-100 justify-content-center align-items-center gap-4">
                <Nav.Link className='nav-link-custom navbar-icon-link text-white me-3' 
                          aria-label="Home"
                          data-tooltip="Home"
                          tabIndex="0"
                          as={Link} to="/">
                            <FaHome />
                </Nav.Link>
                <Nav.Link className='nav-link-custom navbar-icon-link'
                          aria-label="Chi siamo"
                          data-tooltip="Chi siamo"
                          as={Link} to="/about">
                            <FaUsers />
                </Nav.Link>
                <NavDropdown title={<FaTools data-tooltip="Strumenti" />}
                             id="tool-dropdown"
                             menuVariant="dark"
                             className="navbar-icon-link"
                             aria-label="Strumenti"
                             data-tooltip="Strumenti">
                  <NavDropdown.Item as={Link} to="/strumenti/exchange">Exchange</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/strumenti/wallet">Wallet</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/strumenti/market">Analisi Mercato</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/strumenti/explorer">Explorer</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/strumenti/trading">Trading</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title={<FaNewspaper data-tooltip="Notizie" />}
                             className="navbar-icon-link"
                             id="notizie-dropdown"
                             menuVariant="dark"
                             aria-label="Notizie"
                             data-tooltip="Notizie">
                  <NavDropdown.Item as={Link} to="/news">News</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/articoli">Articoli</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link className='nav-link-custom navbar-icon-link'
                          aria-label="Finanza personale"
                          data-tooltip="Finanza personale"
                          as={Link} to="/finanza">
                            <FaPiggyBank />
                </Nav.Link>
                <Nav.Link className='nav-link-custom navbar-icon-link'
                          aria-label="Glossario"
                          data-tooltip="Glossario"
                          as={Link} to="/glossario">
                            <FaBook />
                </Nav.Link>
                <Nav.Link className='nav-link-custom navbar-icon-link'
                          aria-label="Carrello"
                          data-tooltip="Carrello"
                          as={Link} to="/carrello">
                            <FaShoppingCart />
                </Nav.Link>

                {!loggedIn ? (
                  <Nav.Link className="nav-link-custom navbar-icon-link btn btn-outline-light"
                            aria-label="Accedi"
                            data-tooltip="Accedi"
                            as={Link} to="/login" >
                              <FaSignInAlt />
                  </Nav.Link>
                ) : (
                  <>
                    <Nav.Link as={Link} to={`/dashboard/${user.level.toLowerCase()}`}
                              className="nav-link-custom navbar-icon-link text-white"
                              aria-label="Area Personale"
                              data-tooltip="Area Personale">
                                <FaUserCheck />
                    </Nav.Link>
                    <Nav.Link as={Link} to="/profilo" 
                              className="nav-link-custom navbar-icon-link btn btn-outline-light"
                              aria-label="Profilo"
                              data-tooltip="Profilo">
                                <FaUserCircle />
                    </Nav.Link>
                  </>
                )}
              </div>

              {/* 🔸 Solo sm/md – voci che non sono già sopra */}
              <div className="d-lg-none">
                <NavDropdown title="Strumenti" 
                             id="tool-dropdown" 
                             menuVariant="dark" 
                             className=" dropdown-absolute">
                  <NavDropdown.Item as={Link} to="/strumenti/exchange" onClick={() => setShowOffcanvas(false)}>Exchange</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/strumenti/wallet" onClick={() => setShowOffcanvas(false)}>Wallet</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/strumenti/market" onClick={() => setShowOffcanvas(false)}>Analisi Mercato</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/strumenti/explorer" onClick={() => setShowOffcanvas(false)}>Explorer</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/strumenti/trading" onClick={() => setShowOffcanvas(false)}>Trading</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Notizie" 
                             id="feed-dropdown-sm" 
                             menuVariant="dark" >
                  <NavDropdown.Item as={Link} to="/news" onClick={() => setShowOffcanvas(false)}>News</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/articoli" onClick={() => setShowOffcanvas(false)}>Articoli</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link className='nav-link-custom' 
                          as={Link} to="/finanza" 
                          onClick={() => setShowOffcanvas(false)}>Finanza personale</Nav.Link>
                <Nav.Link className='nav-link-custom' 
                          as={Link} to="/glossario" 
                          onClick={() => setShowOffcanvas(false)}>Glossario</Nav.Link>
                <Nav.Link className='nav-link-custom' 
                          as={Link} to="/carrello" 
                          onClick={() => setShowOffcanvas(false)}>Carrello</Nav.Link>

                {!loggedIn ? (
                  <Nav.Link as={Link} to="/login" className="nav-link-custom btn btn-outline-light mt-3 pe-4" onClick={() => setShowOffcanvas(false)}>Accedi</Nav.Link>
                ) : (
                  <>
                    <Nav.Link as={Link} to={`/dashboard/${user.level.toLowerCase()}`} className="nav-link-custom text-white" onClick={() => setShowOffcanvas(false)}>
                      Area Personale
                    </Nav.Link>
                    <Nav.Link as={Link} to="/profilo" className="nav-link-custom btn btn-outline-light" onClick={() => setShowOffcanvas(false)}>
                      Profilo
                    </Nav.Link>
                  </>
                )}
              </div>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}