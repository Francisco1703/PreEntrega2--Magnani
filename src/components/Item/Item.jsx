import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({ id, nombre, precio, img }) => {
  return (
    <div className="cardProduct">
      <p className="nombre">Nombre : {nombre} </p>
      <p className="precio">Precio : {precio} </p>
      <p className="fw-bolder">ID : {id} </p>
      <img className="imgProducts" src={img} alt={nombre} />
      <Link className="btnInfo" to={`/item/${id}`}>
        Ver Detalles
      </Link>
    </div>
  );
};

export default Item;
