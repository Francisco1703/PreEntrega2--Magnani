import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const ItemDetail = ({ id, nombre, precio, img, stock }) => {
  const [agregarCantidad, setAgregarCantidad] = useState(0);

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);
    console.log("Productos agregados: " + cantidad);
  };

  return (
    <div className="contenedorItem ">
      <div className="card ms-2 ms-md-4">
        <h2 className="name">Nombre: {nombre} </h2>
        <h3 className="price">Precio: {precio} </h3>
        <h3 className="id">ID: {id} </h3>
        <p className="description">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit
          doloremque nam assumenda facere eveniet similique consectetur, tempore
          quidem ipsum aut accusamus ipsa illo porro tempora, est at eos,
          sapiente doloribus!
        </p>
      </div>
      <div className="divisor">
        <img className="imgProduct" src={img} alt={nombre} />
        {agregarCantidad > 0 ? (
          <Link className="terminarCompra" to={"/cart"}>
            Terminar Compra
          </Link>
        ) : (
          <ItemCount
            inicial={1}
            stock={stock}
            funcionAgregar={manejadorCantidad}
          />
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
