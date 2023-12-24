import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "./WhatsApp Image 2023-12-03 at 15.24 1.png";
import "./Components.css";

const NavbarComponents = () => {
  return (
    <Navbar expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="/">
          <img className="logo-navbar" src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/layanan">Layananan</Nav.Link>
            <Nav.Link href="/paket-website">Paket Website</Nav.Link>
            <Nav.Link href="/jasa-lainnya">jasa lainnya</Nav.Link>
            <Nav.Link href="/kontak">Kontak</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponents;
