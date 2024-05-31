import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style.scss";
import { useDispatch } from "react-redux";
import { logout } from "../../store/Slices/userSlice";
import { fetchUser } from "../../store/Slices/userSlice";

function Header() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const auth = useSelector((state) => state.auth);

  const status = useSelector((state) => state.auth.status);

  const handleLogout = () => {
    dispatch(logout());
  };

  useEffect(() => {
    if (auth.isAuthenticated) {
      dispatch(fetchUser());
    }
  }, [auth.isAuthenticated, dispatch]);

  {
    auth.isAuthenticated ? auth.name : "";
  }
  return (
    <div className="header">
      <Navbar bg="light" variant="light" expand="lg">
        <Container>
          <Link to="/" className="logo">
            TINY
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/Outstanding">Nổi Bật</Nav.Link>
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
            {/* {userLogin ? userName : "Guest"} */}
            {auth.isAuthenticated ? "Let's log in" : ""}
            <NavDropdown
              title={<PersonIcon />}
              id="person-icon-dropdown"
              align="end"
            >
              <NavDropdown.Item>
                <span>
                  <Link to={"/login"}>Login</Link>
                </span>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/signup">Sign Up</Link>
              </NavDropdown.Item>
            </NavDropdown>
            <div className="cart-icon-container">
              <Link to={"/cart-detail"}>
                <ShoppingCartIcon />
                {cartItems.length > 0 && (
                  <span className="cart-count">{cartItems.length}</span>
                )}
              </Link>
            </div>
            {/* {status == "succeeded" && <LogoutIcon onClick={handleLogout} />} */}
            {auth.isAuthenticated
              ? auth.name
              : "" && <LogoutIcon onClick={handleLogout} />}
          </div>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
