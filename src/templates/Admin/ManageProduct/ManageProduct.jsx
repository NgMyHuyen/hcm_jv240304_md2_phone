import Button from "@mui/material/Button";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  updateProduct,
  addProduct,
  deleteProduct,
  fetchProducts,
} from "../../../store/Slices/productSlice";
import { set } from "react-hook-form";

export default function ManageProduct() {
  const dispatch = useDispatch();

  const imgRef = React.useRef();
  const productNameRef = React.useRef();
  const priceRef = React.useRef();
  const quantityRef = React.useRef();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/productList");
        setProductList(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const [productList, setProductList] = useState([]);
  const handleAddProduct = () => {
    const newProduct = {
      img: imgRef.current.value,
      productName: productNameRef.current.value,
      price: priceRef.current.value,
      quantity: quantityRef.current.value,
    };
    dispatch(addProduct(newProduct));
    imgRef.current.value = "";
    productNameRef.current.value = "";
    priceRef.current.value = "";
    quantityRef.current.value = "";
    setProductList([...productList, newProduct]);
  };

  const handleDeleteProduct = (id) => {
    dispatch(deleteProduct(id));
    setProductList(productList.filter((product) => product.id !== id));
  };

  const [editingProduct, setEditingProduct] = useState(null);
  const handleEditProduct = (product) => {
    // Set the product to be edited
    setEditingProduct(product);
    // Fill the form with the product data
    imgRef.current.value = product.img;
    productNameRef.current.value = product.productName;
    priceRef.current.value = product.price;
    quantityRef.current.value = product.quantity;
  };
  const handleUpdateProduct = () => {
    // Create a product object
    const updatedProduct = {
      ...editingProduct,
      img: imgRef.current.value,
      productName: productNameRef.current.value,
      price: priceRef.current.value,
      quantity: quantityRef.current.value,
    };
    dispatch(updateProduct(updatedProduct));
    // Clear the form and the editing product
    imgRef.current.value = "";
    productNameRef.current.value = "";
    priceRef.current.value = "";
    quantityRef.current.value = "";
    setEditingProduct(null);
    setProductList([...productList, updatedProduct]);
  };

  return (
    <>
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
                ref={imgRef}
              />
            </div>
            <div className="input-product-infor">
              <input
                type="text"
                id="productName"
                name="productName"
                className="input"
                placeholder="Name's product"
                ref={productNameRef}
              />
            </div>
            <div className="input-product-infor">
              <input
                type="text"
                id="price"
                name="price"
                className="input"
                placeholder="Price"
                ref={priceRef}
              />
            </div>

            <div className="input-product-infor">
              <input
                type="text"
                id="quantity"
                name="quantity"
                className="input"
                placeholder="Quantity"
                ref={quantityRef}
              />
            </div>
            <button type="button" id="add" onClick={handleAddProduct}>
              Add
            </button>

            <button
              id="save"
              style={{ display: "none" }}
              type="button"
              onClick="saveProduct()"
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
                <td>{product.productName}</td>
                <td>{product.price}</td>
                <td>{product.quantity}</td>
                <td id="td-btn">
                  <span>
                    <Button
                      variant="contained"
                      color="success"
                      onClick={() => {
                        handleEditProduct(product);
                      }}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="outlined"
                      color="error"
                      onClick={() => handleDeleteProduct(product.id)}
                    >
                      Deltele
                    </Button>
                  </span>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </>
  );
}
