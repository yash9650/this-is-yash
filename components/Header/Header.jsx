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

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={`bg-dark ${trans ? 'bg-opacity-75' : "" }`}
      // variant={trans ? "light" : "light"}
      variant="dark"
    >
      <Container className="">
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
              duration={300}
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
              duration={300}
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
              duration={300}
            >
              Projects
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link target="_blank" rel="noopener noreferrer" href="https://github.com/yash9650">Github</Nav.Link>
            <Nav.Link
              eventKey={2}
              target="_blank" rel="noopener noreferrer"
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
