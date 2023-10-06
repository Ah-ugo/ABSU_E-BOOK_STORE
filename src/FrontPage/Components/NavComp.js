import React from "react";
import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas,
} from "react-bootstrap";
import { SearchOutlined, CloseOutlined } from "@ant-design/icons";

export default function NavComp() {
  return (
    <div style={{ background: "#23212A", position: "" }}>
      <Navbar
        key={"lg"}
        bg="light"
        expand={"lg"}
        className="mb-3"
        //
      >
        <Container fluid>
          <Navbar.Brand href="#">
            <img
              src={require("../Assets/logo1.png")}
              style={{ width: "200px" }}
            />
          </Navbar.Brand>
          <div>
            <SearchOutlined
              id="search-icon"
              aria-controls={`offcanvasNavbar-expand-lg`}
              className="d-lg-none"
              style={{
                fontWeight: "900",
                fontSize: "1.25rem",
                color: "rgba(0, 0, 0, 0.6)",
              }}
              onClick={() => {
                let searchForm = document.getElementById("searchForm");

                if (searchForm.className != "d-flex d-lg-none") {
                  searchForm.className = "d-flex d-lg-none align-items-center";
                  document.getElementById("search-icon").className =
                    "d-none d-lg-none";
                } else {
                  searchForm.className = "d-none d-lg-none";
                  document.getElementById("search-icon").className =
                    "d-lg-none d-flex";
                }
              }}
            />
            <Form className="d-none d-lg-none" id="searchForm">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
              <CloseOutlined
                style={{
                  fontWeight: "900",
                  fontSize: "1.25rem",
                  color: "rgba(0, 0, 0, 0.6)",
                }}
                onClick={() => {
                  let searchBox = document.getElementById("searchForm");
                  searchBox.className = "d-none d-lg-none";
                }}
              />
            </Form>
            <Navbar.Toggle
              aria-controls={`offcanvasNavbar-expand-lg`}
              style={{ boxShadow: "none", border: "none" }}
            />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-lg`}
              aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
              placement="end">
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">Link</Nav.Link>
                  <NavDropdown
                    title="Dropdown"
                    id={`offcanvasNavbarDropdown-expand-lg`}>
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Form className="d-none d-lg-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </div>
        </Container>
      </Navbar>
    </div>
  );
}
