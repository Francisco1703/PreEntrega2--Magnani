import "./CartItem.css";

const CartItem = ({ item, cantidad }) => {
  return (
    <div className="cartItem">
      <h4 className="nombreCart"> {item.nombre} </h4>
      <p className="cantidadCart"> Cantidad: {cantidad} </p>
      <p className="precioCart"> ${item.precio} </p>
    </div>
  );
};

export default CartItem;
