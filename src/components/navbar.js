import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import "../css/navbar.css";
import { Link } from "react-router-dom";
import Cart from "./cart";
import Products from "./products";
import { useSelector } from "react-redux";

function Navbar_Component() {
  let selector = useSelector((state) => state.poroductscart);
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary"
      style={{ backgroundColor: "transparent" }}
    >
      <Container className="container-navbar">
        <Navbar.Brand href="#home">
          <img
            src={require("../images/light-logo-cut.jpg")}
            alt="logo"
            className="logo"
          />
          <span className="logo-name">ArtGallery</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to="login" className="nav-link">
              <i className="fa-solid fa-sort-down"></i> Login
            </Link>
            <Link to="/" href="#home" className="nav-link">
              <i className="fa-solid fa-sort-down"></i> Home
            </Link>
            <Link to="/products" className="nav-link">
              <i className="fa-solid fa-sort-down"></i> Products
            </Link>
            <Link to={"/about"} href="#link" className="nav-link">
              <i className="fa-solid fa-sort-down"></i> About
            </Link>
            <Link to="/contact" href="#link" className="nav-link">
              <i className="fa-solid fa-sort-down"></i> Contact
            </Link>
            <Link to="/cart" className="nav-link">
              <i className="fa-solid fa-cart-shopping"></i>
              <Badge bg="danger">{selector.length}</Badge>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar_Component;
