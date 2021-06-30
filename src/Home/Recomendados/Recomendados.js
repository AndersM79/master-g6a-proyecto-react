import React, { useState } from "react";

import Producto from "../Producto/Producto";

const listaProductos = [
  {
    isActive: true,
    _id: "5fbc19a65a3f794d72471163",
    product_name: "Awesome Granite Bacon",
    description:
      "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
    price: 962,
    category: "Kids",
    brand: "Osinski - Prosacco",
    sku: "e9cbfac1-301a-42c3-b94a-711a39dc7ed1",
    createdAt: "2020-11-23T20:20:54.245Z",
    updatedAt: "2020-11-23T20:20:54.245Z",
    __v: 0,
    image:
      "https://i.pinimg.com/originals/eb/83/be/eb83be580847bcdc4c8f403c8085d3c8.jpg",
  },
  {
    isActive: true,
    _id: "5fbc19a65a3f794d72471164",
    product_name: "Unbranded Steel Fish",
    description:
      "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
    price: 643,
    category: "Shoes",
    brand: "Kuvalis Inc",
    sku: "0b3c4d2c-2bf6-4410-80f3-890f8fe6f334",
    createdAt: "2020-11-23T20:20:54.246Z",
    updatedAt: "2020-11-23T20:20:54.246Z",
    __v: 0,
    image:
      "https://i.pinimg.com/originals/ee/f3/f4/eef3f4858339074c0bba500abfbf6850.jpg",
  },
  {
    isActive: true,
    _id: "5fbc19a65a3f794d72471165",
    product_name: "Fantastic Steel Fish",
    description:
      "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
    price: 214,
    category: "Computers",
    brand: "Corwin - Herzog",
    sku: "cd03b5a9-47d3-46ad-9845-a01a2a785945",
    createdAt: "2020-11-23T20:20:54.246Z",
    updatedAt: "2020-11-23T20:20:54.246Z",
    __v: 0,
    image:
      "https://i.pinimg.com/originals/c5/a2/63/c5a263ec113f5844df57d1000257992d.jpg",
  },
];

function Recomendados() {
  const [productos, setProductos] = useState(listaProductos);
  return (
    <ul>
      {productos.map((productoIndividual) => {
        return (
          <li key={productoIndividual._id}>
            <Producto producto={productoIndividual} />
          </li>
        );
      })}
    </ul>
  );
}

export default Recomendados;
