import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../src/templates/User/Home";
import Login from "../src/templates/User/Login";
import SignUp from "../src/templates/User/SignUp";
import "./App.scss";
import AdminLogin from "./templates/Admin/AdminLogin/AdminLogin";
import AdminWeb from "./templates/Admin/AdminWeb/AdminWeb";
import ManageUser from "./templates/Admin/ManageUser/ManageUser.jsx";
import ManageProduct from "./templates/Admin/ManageProduct/ManageProduct.jsx";
import ProductsDetail from "./organism/Detail/ProductsDetail.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products-detail" element={<ProductsDetail />}></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        {/* adminLogin -> sua lai: admin-login */}
        <Route path="/admin-login" element={<AdminLogin />}></Route>

        <Route path="/adminweb" element={<AdminWeb />}>
          <Route path="user" element={<ManageUser />}></Route>
          <Route path="product" element={<ManageProduct />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
