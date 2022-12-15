import { Link } from "react-scroll";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useState, useEffect } from "react";

export default function Header() {
  const [trans, setTrans] = useState(false);
  const controlScroll = () => {
    if (window.scrollY > 250) {
      setTrans(true);
    } else {
      setTrans(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlScroll);
    return () => {
      window.removeEventListener("scroll", controlScroll);
    };
  }, []);

  // opacity-75 rounded-pill
  return (
    <Navbar
      sticky="top"
      expand="lg"
      className={trans ? "" : ""}
      bg={trans ? "dark opacity-75" : "dark"}
      variant={trans ? "dark" : "dark"}
    >
      <Container>
        <Navbar.Brand as={Link} to="myhome">
          <img
            alt=""
            src="/logo2.png"
            width="35"
            height="35"
            className="d-inline-block align-center"
          />{" "}
          Yash-Gupta
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              as={Link}
              style={{ cursor: "pointer" }}
              to="myhome"
              spy={true}
              smooth={true}
              offset={-70}
              duration={50}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              style={{ cursor: "pointer" }}
              to="about"
              spy={true}
              smooth={true}
              offset={0}
              duration={50}
            >
              About
            </Nav.Link>
            <Nav.Link
              as={Link}
              style={{ cursor: "pointer" }}
              to="projects"
              spy={true}
              smooth={true}
              offset={0}
              duration={50}
            >
              Projects
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#instagram">@this.is.yash</Nav.Link>
            <Nav.Link
              eventKey={2}
              href="https://www.linkedin.com/in/yash-gupta-985b4718b"
            >
              LinkedIn
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
