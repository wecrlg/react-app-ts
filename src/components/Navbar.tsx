import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import MobileView from "../utils/MobileView";

function StoreNavbar() {
  return (
    <>
      {["sm"].map((expand) => (
        <Navbar
          key={expand}
          bg="white"
          expand={expand}
          sticky="top"
          className="shadow-sm mb-3"
          style={{
            padding: MobileView() ? "1rem 25px" : " 1rem 60px",
          }}
        >
          <Container fluid>
            <Navbar.Brand as={Link} to="/">
              MiniCommerce ♻
            </Navbar.Brand>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              className="w-75"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Nav Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3 me-auto">
                  <Nav.Link as={Link} to="/">
                    Home
                  </Nav.Link>
                  <Nav.Link as={Link} to="/about">
                    About
                  </Nav.Link>
                  <Nav.Link as={Link} to="/store">
                    Store
                  </Nav.Link>
                  <Nav.Link as={Link} to="/contact">
                    Contact
                  </Nav.Link>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success text-center fs-6 d-flex align-items-center justify-content-center">
                    Search
                  </Button>
                </Form>
                <button
                  className="rounded-circle"
                  style={{
                    width: MobileView() ? "2rem" : "3rem",
                    height: MobileView() ? "2rem" : "3rem",
                    border: "1px solid green",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginLeft: "1rem",
                    position: "relative",
                  }}
                >
                  <i
                    className="bx bx-cart-alt"
                    style={{
                      fontSize: MobileView() ? "1rem" : "1.5rem",
                      color: "green",
                    }}
                  />
                  <div
                    className="rounded-circle bg-danger d-flex align-items-center justify-content-center text-white"
                    style={{
                      width: MobileView() ? "1rem" : "1.5rem",
                      height: MobileView() ? "1rem" : "1.5rem",
                      position: "absolute",
                      bottom: 0,
                      right: 0,
                      transform: "translate(25%, 25%)",
                    }}
                  >
                    3
                  </div>
                </button>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default StoreNavbar;
