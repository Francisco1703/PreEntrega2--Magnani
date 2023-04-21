import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";
import { Link } from "react-router-dom";
import { useState } from "react";
//Importamos CarritoContext:
import { CarritoContext } from "../../context/CarritoContext";
//Importo el Hook useContext:
import { useContext } from "react";

const ItemDetail = ({ id, nombre, precio, img, stock }) => {
  const [agregarCantidad, setAgregarCantidad] = useState(0);

  ///////////////////////////// useContext - Clase11

  const { agregarProducto } = useContext(CarritoContext);

  ///////////////////////////// useContext

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);
    // console.log("Productos agregados: " + cantidad);

    //Ahora acá creo un objeto con el item y la cantidad:
    const item = { id, nombre, precio };
    agregarProducto(item, cantidad);
  };

  return (
    <div className="contenedorItem ">
      <div className="card ms-2 ms-md-4">
        <h2 className="name"> {nombre} </h2>
        <h3 className="price"> ${precio} </h3>
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
