import LogoutIcon from "@mui/icons-material/Logout";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/auth/authSlice";

function Header() {
  const dispatch = useDispatch();
  // const handleLogout = () => {
  //   dispatch(authActions.logout());
  // };
  const loginStatus = useSelector((state) => state.auth.status); // adjust this selector according to your state structure
  const userLogin = useSelector((state) => state.auth.user);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      <div className="header">
        <Navbar bg="light" variant="light" expand="lg">
          <Container>
            <Link to={"/"}>
              <h1 className="logo">TINY</h1>
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
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
              <NavDropdown
                title={<PersonIcon />}
                id="person-icon-dropdown"
                align="end"
              >
                <NavDropdown.Item>
                  <span>
                    {userLogin ? userLogin.name : "Guest"}
                    <Link to={"/login"}>Login</Link>
                  </span>
                </NavDropdown.Item>

                <NavDropdown.Item>
                  <Link to={"/signup"}>Sign Up</Link>
                </NavDropdown.Item>
              </NavDropdown>
              <ShoppingCartIcon />
              {loginStatus === "succeeded" && (
                <LogoutIcon onClick={handleLogout} />
              )}
              {/* <LogoutIcon onClick={handleLogout} /> */}
            </div>
          </Container>
        </Navbar>
      </div>
    </>
  );
}

export default Header;
