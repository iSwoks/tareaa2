import React from "react";
import { Link } from "react-router-dom";

const Item = ({ title, description, price, addToCart, id }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text">{`$${price}`}</p>
        <button className="btn btn-primary" onClick={addToCart}>
          Agregar al carrito
        </button>
        <Link to={`/item/${id}`}>Ver Detalles</Link>
      </div>
    </div>
  );
};

export default Item;
