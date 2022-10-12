import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function NavbarTop() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Link to="/" className="nav-link active cursor-pointer d-flex gap-3">
          <i className="text-white">{"<h-aln>"}</i>
          <span className="text-success">Coronavirus Dahsboard</span>
        </Link>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto d-flex justify-content-end">
            <Link to="/" className="nav-link active cursor-pointer">
              Home
            </Link>
            <Link to="detail" className="nav-link active cursor-pointer">
              Detail{" "}
            </Link>{" "}
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />{" "}
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>{" "}
            </form>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarTop;
