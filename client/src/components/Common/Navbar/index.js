import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useNavigate } from "react-router-dom";
import "./style1.css";
import Ieee_img from "../../../Assets/IEEE_white 2.png";
import { useState } from "react";

function HeaderComponent() {
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);

  const handleNavToggle = () => setExpanded(!expanded);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleMouseEnter = () => setShowDropdown(true);
  const handleMouseLeave = () => setShowDropdown(false);
  return (
    <>
      {/* <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" color='$indigo-900' id="topNav" >
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto" >
                            <Nav.Link href="http://www.ieee.org/index.html" style={{ zIndex: '50', color: 'white' }}>IEEE.org</Nav.Link>
                            <Nav.Link href="http://ieeexplore.ieee.org/Xplore/home.jsp" >IEEE xplore Digital Library</Nav.Link>
                            <Nav.Link href="https://www.ieee.org/standards/index.html" >IEEE Standards</Nav.Link>
                            <Nav.Link href="https://spectrum.ieee.org/" >IEEE Spectrum</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar> */}
      <Navbar
        className="navbar-custom"
        sticky="top"
        collapseOnSelect
        expand="lg"
        variant="dark"
      >
        <Container>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={handleNavToggle}
          />
          <Navbar.Collapse id="responsive-navbar-nav" expanded={expanded}>
            <Container>
              <Nav className="me-auto">
                <NavDropdown
                  title="IEEE-org"
                  id="collasible-nav-dropdown"
                  show={showDropdown}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <NavDropdown.Item href="http://www.ieee.org/index.htm">
                    IEEE.org
                  </NavDropdown.Item>
                  <NavDropdown.Item href="http://ieeexplore.ieee.org/Xplore/home.jsp">
                    IEEE xplore Digital Library
                  </NavDropdown.Item>
                  <NavDropdown.Item href="https://www.ieee.org/standards/index.html">
                    IEEE Standards
                  </NavDropdown.Item>
                  <NavDropdown.Item href="https://spectrum.ieee.org/">
                    IEEE Spectrum
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/">HOME</Nav.Link>
                <Nav.Link
                  onClick={() => {
                    navigate("/about");
                  }}
                >
                  ABOUT IEEE
                </Nav.Link>
                <Nav.Link
                  onClick={() => {
                    navigate("/");
                  }}
                  href="#event"
                >
                  EVENTS
                </Nav.Link>
                <Navbar.Brand className="d-none d-lg-block" href="/">
                  <img src={Ieee_img} alt="IEEE-MSIT Logo" />
                </Navbar.Brand>
                <Nav.Link href="/newsletter">NEWSLETTERS</Nav.Link>
                <Nav.Link href="/execom">EXECUTIVE BOARD</Nav.Link>
                <Nav.Link href="/opportunities">OPPORTUNITIES</Nav.Link>
              </Nav>
            </Container>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default HeaderComponent;

{
  /* <Nav.Link onClick={() => { navigate("/") }} href="#about">ABOUT IEEE</Nav.Link> */
}
