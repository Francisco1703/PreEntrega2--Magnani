//1) Voy a importar el Hook useState y createContext que me permíte crear un contexto que va a almacenar toda la lógica en mi carrito de compras

import { useState, createContext } from "react";

//2) Creamos un nuevo contexto
//El valor incial por default es un objeto con la propiedad "carrito" con un array vacío.

export const CarritoContext = createContext({ carrito: [] });

//3)Creamos un componente llamado CarritoProvider.

//También lo puedo encontrar como "proveedor de contexto"

export const CarritoProvider = ({ children }) => {
  //4)Creamos un estado local "carrito" con el hook useState:

  const [carrito, setCarrito] = useState([]);

  //Verificamos por consola:
  console.log(carrito);

  //5)Agregamos algunos métodos al proveedor de contexto para manipular el carrito de compras:

  //Función agregar al carrito:

  const agregarProducto = (item, cantidad) => {
    if (!yaEstaEnCarrito(item.id)) {
      setCarrito((prev) => [...prev, { item, cantidad }]);

      /*
            La sintaxis: prev=> [...prev, {item, cantidad}]
            se utiliza para crear un nuevo array a partir del estado anterior del carrito (prev) y agregar un nuevo objeto que representa el nuevo producto.
            */
    } else {
      console.log("Producto ya agregado");
    }
  };

  //Función para eliminar productos del carrito:

  const eliminarProducto = (id) => {
    const carritoActualizado = carrito.filter((prod) => prod.id !== id);
    setCarrito(carritoActualizado);
  };

  //Función para vaciar el carrito de compras:

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  //Función auxiliar para verificar si ya está el producto en el carrito:

  const yaEstaEnCarrito = (id) => {
    return carrito.some((prod) => prod.id === id);
  };

  //Función para calcualr la cantidad total de productos en el carrito:

  const totalCantidad = carrito.reduce(
    (total, producto) => total + producto.cantidad,
    0
  );

  //6) Usamos el componente CarritoContext.Provider para enviar el valor actual del carrito y los métodos a los componentes de mi aplicación que lo necesiten.

  return (
    <CarritoContext.Provider
      value={{
        carrito,
        totalCantidad,
        agregarProducto,
        eliminarProducto,
        vaciarCarrito,
      }}
    >
      {children}
    </CarritoContext.Provider>
  );

  //7) children: propiedad especial que se utiliza para representar a todos aquellos componentes que puedan necesitar el carrito y sus métodos.
};
