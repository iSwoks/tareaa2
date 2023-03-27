import React from "react";
import { useParams } from "react-router-dom";

const ItemDetail = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Detalle del producto {id}</h1>
      <p>dsaasdsasadasdsasa</p>
    </div>
  );
};

export default ItemDetail;
