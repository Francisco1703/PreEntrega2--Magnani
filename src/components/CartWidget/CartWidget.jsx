import React from "react";
import "./CartWidget.css";
import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const imgCarrito = "https://cdn-icons-png.flaticon.com/512/107/107831.png";

  const { totalCantidad } = useContext(CarritoContext);

  return (
    <Link className="totalCantidad" to="/cart">
      <img className="imgCarrito " src={imgCarrito} alt={imgCarrito} />

      {totalCantidad}
    </Link>
  );
};

export default CartWidget;
