import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import axios from "axios";

export default function MainAdmin() {
  const [userList, setUserList] = useState([]);
  useEffect(() => {
    const fectchData = async () => {
      const response = await axios.get("http://localhost:3000/userList");
      setUserList(response.data);
    };
    fectchData();
  }, []);

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
            <h2>Manage User</h2>

            <table>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Gender</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Action</th>
              </tr>

              {userList?.map((e) => (
                <tbody key={e.userID}>
                  <tr>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>{e.userName}</td>
                    <td>{e.gender}</td>
                    <td>{e.email}</td>
                    <td>{e.phone}</td>
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
