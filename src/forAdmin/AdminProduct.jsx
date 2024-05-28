import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import axios from "axios";
import { margin } from "@mui/system";
// import serverData from "./mock-api/server.json";

export default function MainAdmin() {
  // const { productList } = serverData;
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:3000/productList");
      setProductList(response.data);
    };
    fetchData();
  }, []);
  console.log(productList);
  return (
    <>
      <div className="header-admin">
        <h1 style={{ margin: "0 0 0 216px" }}>TINY - Admin</h1>
      </div>

      <div className="adminUser-page">
        <div className="body-admin adminUser-left">
          <div className="sidebar detail-left">
            <a className="active" href="#home">
              Manage User
            </a>
            <a href="#news">Manage Product</a>
          </div>

          <div className="adminUser-right">
            <h2>Manage Product</h2>
            <form className="containerProducts">
              <h3>Product's Information </h3>
              <div className="containerProducts-input">
                <div className="input-product-infor">
                  <input
                    type="text"
                    id="img"
                    name="img"
                    className="input"
                    placeholder="Link image"
                  />
                </div>
                <div className="input-product-infor">
                  <input
                    type="text"
                    id="productName"
                    name="productName"
                    className="input"
                    placeholder="Name's product"
                  />
                </div>
                <div className="input-product-infor">
                  <input
                    type="text"
                    id="price"
                    name="price"
                    className="input"
                    placeholder="Price"
                  />
                </div>

                <div className="input-product-infor">
                  <input
                    type="text"
                    id="quantity"
                    name="quantity"
                    className="input"
                    placeholder="Quantity"
                  />
                </div>
                <button type="button" id="add" onclick="addProducts()">
                  Add
                </button>

                <button
                  id="save"
                  style={{ display: "none" }}
                  type="button"
                  onclick="saveProduct()"
                >
                  <p>Lưu lại</p>
                </button>
              </div>
              <br />
            </form>
            <table>
              <tr>
                <th>Image</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Action</th>
              </tr>

              {productList?.map((product) => (
                <tbody key={product.id}>
                  <tr>
                    <td>
                      <img src={product.img} alt={product.phoneName} />
                    </td>
                    <td>{product.phoneName}</td>
                    <td>{product.price}</td>
                    <td>{product.quantity}</td>
                    <td id="td-btn">
                      <span>
                        <Button variant="contained" color="success">
                          Edit
                        </Button>
                        <Button variant="outlined" color="error">
                          Deltele
                        </Button>
                      </span>
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        </div>
      </div>
    </>
  );
}