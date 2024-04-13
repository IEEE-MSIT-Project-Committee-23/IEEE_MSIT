import React from "react";
import "./style.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import IeeeImg from "../../../Assets/ieeeWhite.svg";
import ListGroup from "react-bootstrap/ListGroup";
import { Instagram, Facebook, Twitter, Linkedin } from "react-bootstrap-icons";

const FooterComponent = () => {
  return (
    <footer className="footer">
      <Container className="py-5">
        <Row className=" justify-content-md-center ">
          <Col>
            <img className="w-50" src={IeeeImg} alt="logo" />
          </Col>
          <Col>
            <h4 className="text text-white fs-3 fw-bold mb-4 position-relative">
              Quick Links
            </h4>
            <ListGroup>
              <ListGroup.Item
                className=" p-0 px-3 border-0  bg-transparent text text-white"
                action
                href="/about"
              >
                About Us
              </ListGroup.Item>
              <ListGroup.Item
                className="p-0 px-3 border-0  bg-transparent text text-white"
                action
                href="https://www.ieee.org/membership/join/index.html?utm_source=button_text&utm_medium=lp-membership&utm_campaign=join"
              >
                Join IEEE
              </ListGroup.Item>
              <ListGroup.Item
                className="p-0 px-3 border-0  bg-transparent text text-white"
                action
                href="https://www.msit.in/"
              >
                MSIT
              </ListGroup.Item>

              <ListGroup.Item
                className="p-0 px-3 border-0  bg-transparent text text-white"
                action
                href="/opportunities"
              >
                Opportunities
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col>
            <div>
              <h4 className="text p-0 text-white fs-3 fw-bold  mb-4 position-relative">
                Contact Us
              </h4>
              <div className="px-3">
                <p className="m-0 text text-white">anupama@msit.in</p>
                <p className="m-0 text text-white">shubhamsharma@ieee.org</p>
                <p className="m-0 text text-white">ishneet@ieee.org</p>
                <p className="m-0 text text-white">tussharaggarwal@ieee.org</p>
              </div>
            </div>
          </Col>
          <Col className="flex-row ">
            <div className="mb-5">
              <h4 className="text p-0 text-white fs-3 fw-bold mb-4 position-relative">
                Follow Us
              </h4>
              <div className=" px-3 d-flex gap-3 w-75">
                <div>
                  <a href="https://www.instagram.com/ieeemsit/">
                    <Instagram color="white" size="1.5rem" />
                  </a>
                </div>
                <div>
                  <a href="https://m.facebook.com/ieeemsit">
                    <Facebook color="white" size="1.5rem" />
                  </a>
                </div>
                <div>
                  <a href="https://www.linkedin.com/company/ieeemsit/">
                    <Linkedin color="white" size="1.5rem" />
                  </a>
                </div>
                <div>
                  <a href="https://twitter.com/ieeemsit">
                    <Twitter color="white" size="1.5rem" />
                  </a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
export default FooterComponent;
