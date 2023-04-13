import { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({ inicial, stock, funcionAgregar }) => {
  {
    /*
  let inicial = 1;
  let maximo = 10;
  */
  }
  const [contador, setContador] = useState(inicial);

  const decrementar = () => {
    if (contador > inicial) {
      setContador(contador - 1);
    }
  };

  const incrementar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  return (
    <>
      <div className="buttons">
        <button className="btnDecrementar" onClick={decrementar}>
          {" "}
          -{" "}
        </button>
        <p className="contador"> {contador} </p>
        <button className="btnIncrementar" onClick={incrementar}>
          {" "}
          +{" "}
        </button>
      </div>
      <button
        className="btnAgregarAlCarrito"
        onClick={() => funcionAgregar(contador)}
      >
        Agregar al Carrito
      </button>
    </>
  );
};

export default ItemCount;
