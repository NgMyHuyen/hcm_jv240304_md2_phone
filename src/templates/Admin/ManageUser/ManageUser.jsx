import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import axios from "axios";
import "./style.scss";

export default function ManageUser() {
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
    </>
  );
}
