import { Navbar, Nav, Container, NavDropdown, Offcanvas } from 'react-bootstrap';
import logo from '../assets/logo3.png';
import { isUserLoggedIn } from '../utils/auth';

export function MyNavbar() {
  const loggedIn = isUserLoggedIn(); // check login

  return (
    <Navbar key="lg" expand="lg" bg="dark" variant="dark" sticky="top" className="py-3">
      <Container>
        {/* 🔹 Logo + titolo */}
        <Navbar.Brand href="/" className="d-flex align-items-center">
          <img
            src={logo}
            alt="Ali&La Crypto logo"
            width="45"
            height="45"
            className="d-inline-block align-middle me-3"
          />
          <span className="fw-bold fs-5">Ali&La Crypto</span>
        </Navbar.Brand>

        {/* 🔹 Chi siamo + Tool sempre visibili per sm/md */}
        <div className="d-lg-none d-flex ms-auto align-items-center gap-3">
          <Nav className="d-flex flex-row align-items-center">
            <Nav.Link href="#about" className="text-white me-4">Chi siamo</Nav.Link>
            <NavDropdown title="Tool" id="tool-dropdown-sm" menuVariant="dark" 
                         className="me-4 dropdown-absolute">
              <NavDropdown.Item href="#exchange">Exchange</NavDropdown.Item>
              <NavDropdown.Item href="#wallet">Wallet</NavDropdown.Item>
              <NavDropdown.Item href="#market">Analisi Mercato</NavDropdown.Item>
              <NavDropdown.Item href="#explorer">Explorer</NavDropdown.Item>
              <NavDropdown.Item href="#trading">Trading</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </div>

        {/* Toggle per aprire offcanvas */}
        <Navbar.Toggle aria-controls="offcanvas-navbar" />

        {/* 🔹 Offcanvas per sm/md + navbar classica da lg in su */}
        <Navbar.Offcanvas
          id="offcanvas-navbar"
          aria-labelledby="offcanvas-navbar-label"
          placement="end"
          className="bg-dark text-light"
        >
          <Offcanvas.Header closeButton closeVariant="white">
            <Offcanvas.Title id="offcanvas-navbar-label">Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="flex-grow-1 pe-3 fs-5">
              {/* 🔸 Solo visibile da lg in su */}
              <div className="d-none d-lg-flex w-100 justify-content-end align-items-center gap-4">
                <Nav.Link href="#about">Chi siamo</Nav.Link>
                <NavDropdown title="Tool" id="tool-dropdown-lg">
                  <NavDropdown.Item href="#exchange">Exchange</NavDropdown.Item>
                  <NavDropdown.Item href="#wallet">Wallet</NavDropdown.Item>
                  <NavDropdown.Item href="#market">Analisi Mercato</NavDropdown.Item>
                  <NavDropdown.Item href="#explorer">Explorer</NavDropdown.Item>
                  <NavDropdown.Item href="#trading">Trading</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Feed" id="feed-dropdown">
                  <NavDropdown.Item href="#news">News</NavDropdown.Item>
                  <NavDropdown.Item href="#articoli">Articoli</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#finanza">Finanza personale</Nav.Link>
                <Nav.Link href="#glossario">Glossario</Nav.Link>
                <Nav.Link href="#carrello">Carrello</Nav.Link>

                {!loggedIn ? (
                  <>
                    <Nav.Link href="/login" className="btn btn-outline-light">Accedi</Nav.Link>
                    <Nav.Link href="/register" 
                              className="btn btn-outline-light ms-2">Registrati</Nav.Link>
                  </>
                ) : (
                  <Nav.Link href="/profilo" className="btn btn-outline-light">Profilo</Nav.Link>
                )}
              </div>

              {/* 🔸 Solo sm/md – voci che non sono già sopra */}
              <div className="d-lg-none">
                <NavDropdown title="Feed" id="feed-dropdown-sm" menuVariant="dark">
                  <NavDropdown.Item href="#news">News</NavDropdown.Item>
                  <NavDropdown.Item href="#articoli">Articoli</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#finanza">Finanza personale</Nav.Link>
                <Nav.Link href="#glossario">Glossario</Nav.Link>
                <Nav.Link href="#carrello">Carrello</Nav.Link>

                {!loggedIn ? (
                  <>
                    <Nav.Link href="/login" className="btn btn-outline-light mt-3">Accedi</Nav.Link>
                    <Nav.Link href="/register" 
                              className="btn btn-outline-light mt-2">Registrati</Nav.Link>
                  </>
                ) : (
                  <Nav.Link href="/profilo" className="btn btn-outline-light mt-3">Profilo</Nav.Link>
                )}
              </div>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}