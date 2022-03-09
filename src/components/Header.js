import "bootstrap/dist/css/bootstrap.css";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" fixed="top" expand="sm" collapseOnSelect>
        <Link to="/">
          <img src="/images/world.png" className="logo"></img>
        </Link>

        <Navbar.Brand>
          <Link to="/" className="nav-title">
            World countries
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="navbar-nav1">
          <Nav className="navbar-nav">
            <Nav.Link className="inactive" href="/">
              HomePage
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
