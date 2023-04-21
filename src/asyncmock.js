const productos = [
  {
    id: "1",
    nombre: "Nike Air Force",
    precio: 150,
    img: "../img/airForce1.png",
    idCat: "1",
    stock: "20",
  },
  {
    nombre: "Nike Air Force",
    precio: 120,
    id: "2",
    img: "../img/airForce2.png",
    idCat: "1",
    stock: "15",
  },
  {
    nombre: "Nike Air Force",
    precio: 100,
    id: "3",
    img: "../img/airForce3.png",
    idCat: "1",
    stock: "10",
  },
  {
    nombre: "Nike Air Force",
    precio: 80,
    id: "4",
    img: "../img/airForce4.png",
    idCat: "1",
    stock: "5",
  },
  {
    nombre: "Remera Nike",
    precio: 40,
    id: "5",
    img: "../img/remera1.png",
    idCat: "2",
    stock: "25",
  },
  {
    nombre: "Remera Nike",
    precio: 20,
    id: "6",
    img: "../img/remera2.png",
    idCat: "2",
    stock: "30",
  },
  {
    nombre: "Remera Nike",
    precio: 50,
    id: "7",
    img: "../img/remera3.png",
    idCat: "2",
    stock: "22",
  },
  {
    nombre: "Remera Nike",
    precio: 35,
    id: "8",
    img: "../img/remera4.png",
    idCat: "2",
    stock: "17",
  },
  {
    nombre: "Gafas deportivas Nike",
    precio: 180,
    id: "9",
    img: "../img/gafasNike.png",
    idCat: "3",
    stock: "19",
  },
  {
    nombre: "Gorra Nike",
    precio: 30,
    id: "10",
    img: "../img/gorraNike.png",
    idCat: "3",
    stock: "37",
  },
  {
    nombre: "Mochila Jordan",
    precio: 230,
    id: "11",
    img: "../img/mochilaJordan.png",
    idCat: "3",
    stock: "24",
  },
  {
    nombre: "Mochila Nike",
    precio: 199,
    id: "12",
    img: "../img/mochilaNike.png",
    idCat: "3",
    stock: "4",
  },
];

export const getProductos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos);
    }, 100);
  });
};

//Función que nos retorne un solo item:

export const getUnProducto = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const producto = productos.find((prod) => prod.id === id);
      resolve(producto);
    }, 100);
  });
};

//Función para retornar toda la categoría:

export const getProductosPorCategoria = (idCategoria) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const productosCategoria = productos.filter(
        (prod) => prod.idCat === idCategoria
      );
      resolve(productosCategoria);
    }, 100);
  });
};
