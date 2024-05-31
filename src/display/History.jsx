import React from "react";
import "./display.scss";

const OrderHistory = () => {
  const orders = [
    {
      id: "#0163SH22010419009",
      product: "Cáp Micro 1m Xmobile LTM-02 X anh rêu",
      price: "80.000đ",
      date: "10/01/2022",
      status: "Đã nhận hàng",
      image:
        "https://img.lazcdn.com/g/p/52c9138c367cd8a653dc7d26660ea5cc.jpg_720x720q80.jpg", // Add the image URL here
    },
    {
      id: "#0163SH21120415796",
      product: "Chuột Không Dây Rapoo M20 Plus ",
      price: "344.000đ",
      date: "27/12/2021",
      status: "Đã nhận hàng",
      image:
        "https://cdn.tgdd.vn/Products/Images/86/256042/chuot-khong-day-rapoo-m20-plus-thumb3-600x600.jpeg", // Add the image URL here
    },
  ];

  return (
    <div className="order-history">
      <h2>Đơn hàng đã mua gần đây</h2>
      <p>
        Đây là danh sách đơn hàng bạn đã mua từ ngày 16/01/2021 đến 16/01/2022
      </p>
      {orders.map((order, index) => (
        <div className="order" key={index}>
          <div className="order-image">
            <img src={order.image} alt="product" />
          </div>
          <div className="order-content">
            <div className="order-id">
              Đơn hàng: <a href="#">{order.id}</a>
            </div>
            <div className="order-details">
              <div className="product">{order.product}</div>
              <div className="price">{order.price}</div>
              <div className="date">Ngày đặt: {order.date}</div>
              <div className="status">{order.status}</div>
            </div>
            <a href="#" className="view-details">
              Xem chi tiết
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrderHistory;
