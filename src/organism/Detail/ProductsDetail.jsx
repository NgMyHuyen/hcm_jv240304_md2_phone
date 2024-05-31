import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import axios from "axios";
import "./styles.scss";
import Footer from "../../organism/Footer/Footer";
import * as React from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
];

export default function Detail() {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);
  const [productList, setProductList] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [isCartOpen, setIsCartOpen] = React.useState(false);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(typeof value === "string" ? value.split(",") : value);
  };

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:3000/productList");
      setProductList(response.data);
    };
    fetchData();
  }, []);

  const handleBuyClick = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  const toggleCart = () => {
    setIsCartOpen((prevState) => !prevState);
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
                  <Link to={"/login"}>Login</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to={"/signup"}>Sign Up</Link>
                </NavDropdown.Item>
              </NavDropdown>
              <div className="cart-icon-container" onClick={toggleCart}>
                <ShoppingCartIcon />
                {cartItems.length > 0 && (
                  <span className="cart-count">{cartItems.length}</span>
                )}
              </div>
              <LogoutIcon />
            </div>
          </Container>
        </Navbar>
      </div>

      <div className="detail-page">
        <div className="detail-left">
          <FormControl sx={{ m: 1, width: 300 }}>
            <InputLabel id="demo-multiple-chip-label">Chip</InputLabel>
            <Select
              labelId="demo-multiple-chip-label"
              id="demo-multiple-chip"
              multiple
              value={personName}
              onChange={handleChange}
              input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
              renderValue={(selected) => (
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip key={value} label={value} />
                  ))}
                </Box>
              )}
              MenuProps={MenuProps}
            >
              {names.map((name) => (
                <MenuItem
                  key={name}
                  value={name}
                  style={getStyles(name, personName, theme)}
                >
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>

        <div className="detail-right">
          <div className="div-detail">
            {productList?.map((product) => (
              <div className="div-img-text-detail" key={product.id}>
                <img className="img-detail" src={product.img} alt="product" />
                <div className="div-text-detail">
                  <h5>{product.productName}</h5>
                  <div className="price-btnBuy">
                    <h6>{product.phonePrice}</h6>
                    <button
                      id="btn-buy-detail"
                      onClick={() => handleBuyClick(product)}
                    >
                      Buy
                    </button>
                  </div>
                  <ul>
                    <li>{product.phoneText1}</li>
                    <li>{product.phoneText2}</li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {isCartOpen && (
        <div className="cart-details">
          <h4>Cart Details</h4>
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.img} alt={item.phoneName} />
              <div>
                <h5>{item.phoneName}</h5>
                <p>{item.phonePrice}</p>
              </div>
            </div>
          ))}
        </div>
      )}
      <Footer />
    </>
  );
}
