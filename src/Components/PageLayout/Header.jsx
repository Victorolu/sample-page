import { Nav, Navbar, NavDropdown, Button } from "react-bootstrap";
import "./Header.scss";
import { SearchBar } from "../Compound/SearchBar";

export const Header = () => {
  return (
    <header className="sticky-top">
      <Navbar expand="lg">
        <i className="bi-mortarboard"></i>
        <Navbar.Brand href="#home">SAMPLE PAGE</Navbar.Brand>
        <i className="bi-grid"></i>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <NavDropdown title="Features" id="basic-nav-dropdown">
              <NavDropdown.Item href="#feature1">Feature 1</NavDropdown.Item>
              <NavDropdown.Item href="#feature2">Feature 2</NavDropdown.Item>
              <NavDropdown.Item href="#feature3">Feature 3</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="More" id="basic-nav-dropdown">
              <NavDropdown.Item href="#More1">More 1</NavDropdown.Item>
              <NavDropdown.Item href="#More2">More 2</NavDropdown.Item>
              <NavDropdown.Item href="#More3">More 3</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <SearchBar />
          <Button id="login-button">Login</Button>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};
