import { Link, Outlet } from "react-router-dom";

export default function AdminWeb() {
  return (
    <>
      <div className="header-admin">
        <h1 style={{ margin: "0 0 0 216px" }}>TINY - Admin</h1>
      </div>

      <div className="adminUser-page">
        <div className="body-admin adminUser-left">
          <div className="sidebar detail-left">
            <Link to={"/"} className="active">
              ADMIN WEB
            </Link>
            <Link to={"user"} className="active">
              Manage User
            </Link>
            <Link to={"product"} className="active">
              Manage Product
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
