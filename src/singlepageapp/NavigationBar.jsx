import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {} from './AnimationMovies'
import { Link } from 'react-router-dom';

function NavigationBar() {
  return (
    <Navbar expand="lg" style={{backgroundColor: "#B8001F"}}>
      <Container>
        <Navbar.Brand href="#home" className='fw-bold'>Watchlist</Navbar.Brand>
        <Nav>
          <Nav.Link>
          <Link style={{textDecoration :"none", color:"black"}} to={"/home"}>Home</Link>
          </Nav.Link>
        </Nav>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">
            <Link style={{textDecoration :"none", color:"black"}} to={"/adventure"}>Adventure</Link>
            </Nav.Link>
            <Nav.Link href="#animation">
            <Link style={{textDecoration :"none", color:"black"}} to={"/animation"}>Animation</Link>
            </Nav.Link>
            <Nav.Link href="#comedy">
            <Link style={{textDecoration :"none", color:"black"}} to={"/comedy"}>Comedy</Link>
              </Nav.Link>            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;