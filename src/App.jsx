import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./templates/User/Login/Login";
import Home from "./templates/User/Home";
import Header from "./organism/Header/Header";
import SignUp from "./templates/User/SignUp/SignUp";
import "./App.scss";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;

// import React from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Home from "../src/templates/User/Home";
// import Login from "../src/templates/User/Login";
// import SignUp from "../src/templates/User/SignUp";
// import "./App.scss";
// import AdminLogin from "./templates/Admin/AdminLogin/AdminLogin";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<SignUp />} />
//         {/* adminLogin -> sua lai: admin-login */}
//         <Route path="/admin-login" element={<AdminLogin />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

// src/App.jsx
