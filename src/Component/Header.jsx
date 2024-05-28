import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LogoutIcon from "@mui/icons-material/Logout";

import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="header">
        <Navbar bg="light" variant="light" expand="lg">
          <Container>
            {/* <href> */}
            <Link to={"/"}>
              <h1 className="logo">TINY</h1>
            </Link>
            {/* </href> */}
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                {/* <Nav.Link href="#Outstanding">Nổi Bật</Nav.Link> */}
                <Nav.Link href="#Outstanding">Nổi Bật</Nav.Link>

                <NavDropdown title="Smartphone" id="Smartphone-dropdown">
                  <NavDropdown.Item href="/Samsung">Samsung</NavDropdown.Item>
                  <NavDropdown.Item href="/Iphone">iPhone</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Phone Accessories" id="PhonAcc-dropdown">
                  <NavDropdown.Item href="/earphone">Earphone</NavDropdown.Item>
                  <NavDropdown.Item href="/case">Phone Case</NavDropdown.Item>
                </NavDropdown>
                <form action="">
                  <input type="text" placeholder="Search" />
                  <SearchIcon type="submit" id="search-icon" />
                </form>
              </Nav>
            </Navbar.Collapse>
            <div className="group-icon">
              {/* <PersonIcon /> */}
              <NavDropdown
                title={<PersonIcon />}
                id="person-icon-dropdown"
                align="end"
              >
                <NavDropdown.Item>
                  <Link to={"/AdminLogin"}>Admin</Link>
                </NavDropdown.Item>

                <NavDropdown.Item>
                  <Link to={"/Login"}>User</Link>
                </NavDropdown.Item>
              </NavDropdown>
              <ShoppingCartIcon />
              <LogoutIcon />
            </div>
          </Container>
        </Navbar>
      </div>
    </>
  );
}

export default Header;
