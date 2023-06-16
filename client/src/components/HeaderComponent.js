import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function HeaderComponent() {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" color='$indigo-900' style={{ height: '1.8rem' }}>
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto" >
                            <Nav.Link href="http://www.ieee.org/index.html" style={{ zIndex: '50', color: 'white' }}>IEEE.org</Nav.Link>
                            <Nav.Link href="http://ieeexplore.ieee.org/Xplore/home.jsp">IEEE xplore Digital Library</Nav.Link>
                            <Nav.Link href="https://www.ieee.org/standards/index.html">IEEE Standards</Nav.Link>
                            <Nav.Link href="https://spectrum.ieee.org/">IEEE Spectrum</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Navbar sticky="top" collapseOnSelect expand="lg" variant="dark" style={{ backgroundColor: "#18122B" }}>
                <Container>
                    <Navbar.Brand href="/">IEEE-MSIT</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/home#about">About Us</Nav.Link>
                            <Nav.Link href="/home#event">Event</Nav.Link> 
                            <Nav.Link href="#executive">Executive Board</Nav.Link>

                        </Nav>
                        {/* <Nav>
                            <Nav.Link href="#deets">Login</Nav.Link>
                            <Nav.Link href="#deets">SignUp</Nav.Link>
                        </Nav> */}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default HeaderComponent;