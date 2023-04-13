import React from "react";
import "./CartWidget.css";

const CartWidget = () => {
  const imgCarrito = "https://cdn-icons-png.flaticon.com/512/107/107831.png";
  return (
    <>
      <img className="imgCarrito " src={imgCarrito} alt={imgCarrito} />
      <strong className="me-4">0</strong>
    </>
  );
};

export default CartWidget;
