import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
// import { signUp } from "../../../store/Slices/signUpSlice";
import "./style.scss";
// import { deleteUser } from "../../../store/Slices/userSlice";

export default function ManageUser() {
  const dispatch = useDispatch();
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/userList");
        setUserList(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  console.log(userList);

  const handleDeleteUser = async (id) => {
    console.log(id);
    try {
      await axios.delete(`http://localhost:3000/userList/${id}`);
      setUserList(userList.filter((user) => user.userID !== id));
    } catch (error) {
      console.log("Error deleting user", error);
    }
  };

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
          <tbody>
            {userList?.map((user) => (
              <tr key={user.userID}>
                <td>
                  <input type="checkbox" />
                </td>
                <td>{user.userName}</td>
                <td>{user.gender}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td id="td-btn">
                  <span>
                    <Button variant="contained" color="success">
                      Edit
                    </Button>
                    <Button
                      variant="outlined"
                      color="error"
                      onClick={() => {
                        handleDeleteUser(user.userID);
                      }}
                    >
                      Deltele
                    </Button>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
