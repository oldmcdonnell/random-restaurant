import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom"


function MyNavbar() {
    return (
    <Navbar collapseOnSelect expand="lg" className='bg-body-tertiary'>
    <Container>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Link className="text-black-50 px-3 navbar" to="/">Home</Link>
            <Link className="text-black-50 px-3 navbar" to="/Menu">Menu</Link>
            <Link className="text-black-50 px-3 navbar" to="/About">About</Link>
          </Nav>
        </Navbar.Collapse>
    </Container>
    </Navbar>
  );
}

export default MyNavbar;