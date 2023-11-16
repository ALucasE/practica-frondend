import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand to="/">Front-React</Navbar.Brand>
          <Nav className="me-auto al">
            <ul className="nav nav-tabs text-center">
                <li className="nav-item">
                    <Link className="nav-link" to="/">Clientes</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/products">Productos</Link> 
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/orders">Ordenes</Link>
                </li>
            </ul>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;