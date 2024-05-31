import React from "react";
import "./display.scss";

const AdminOrderList = () => {
  const orders = [
    {
      id: "#0163SH22010419009",
      product: "Cáp Micro 1m Xmobile LTM-02 X anh rêu",
      price: "80.000đ",
      date: "10/01/2022",
      status: "Pending",
      image:
        "https://img.lazcdn.com/g/p/52c9138c367cd8a653dc7d26660ea5cc.jpg_720x720q80.jpg",
    },
    {
      id: "#0163SH21120415796",
      product: "Chuột Không Dây Rapoo M20 Plus và 3 sản phẩm khác",
      price: "344.000đ",
      date: "27/12/2021",
      status: "Shipped",
      image:
        "https://cdn.tgdd.vn/Products/Images/86/256042/chuot-khong-day-rapoo-m20-plus-thumb3-600x600.jpeg",
    },
  ];

  const handleStatusChange = (id, newStatus) => {
    console.log(`Changing status of order ${id} to ${newStatus}`);
    // Implement the logic to update the status
  };

  const handleDeleteOrder = (id) => {
    console.log(`Deleting order ${id}`);
    // Implement the logic to delete the order
  };

  return (
    <div className="adminUser-right">
      <div className="admin-order-list">
        <h2>Order Management</h2>
        <table>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Product</th>
              <th>Price</th>
              <th>Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>
                  <div className="product-info">
                    <img src={order.image} alt={order.product} />
                    <span>{order.product}</span>
                  </div>
                </td>
                <td>{order.price}</td>
                <td>{order.date}</td>
                <td>
                  <select
                    value={order.status}
                    onChange={(e) =>
                      handleStatusChange(order.id, e.target.value)
                    }
                  >
                    <option value="Pending">Pending</option>
                    <option value="Shipped">Shipped</option>
                    <option value="Delivered">Delivered</option>
                  </select>
                </td>
                <td>
                  <button onClick={() => handleDeleteOrder(order.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminOrderList;
