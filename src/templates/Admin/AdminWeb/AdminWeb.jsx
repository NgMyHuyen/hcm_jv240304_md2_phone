import { Link, Outlet } from "react-router-dom";
import Button from "@mui/material/Button";

export default function AdminWeb() {
  return (
    <>
      <div className="header-admin">
        <h1 style={{ margin: "0 0 0 216px" }}>TINY - Admin</h1>
      </div>

      <div className="adminUser-page">
        <div className="body-admin adminUser-left">
          <div className="sidebar detail-left">
            <Link to={"/"}>TINY</Link>
            <Link to={"/adminweb"}>ADMIN WEB</Link>
            <Link to={"user"}>Manage User</Link>
            <Link to={"product"}>Manage Product</Link>
            <Link to={"order"} className="active">
              Order Manage
            </Link>
          </div>
        </div>

        <div className="adminUser-right">
          <Outlet></Outlet>
        </div>
      </div>
    </>
  );
}
