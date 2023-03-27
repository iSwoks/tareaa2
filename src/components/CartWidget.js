import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const CartWidget = ({ cartItems, clearCart }) => {
  const handleClearCart = () => {
    clearCart();
  };

  return (
    <div className="cart-widget">
      <button className="btn btn-primary" onClick={handleClearCart}>
        Limpiar carrito
      </button>
      <FontAwesomeIcon icon={faShoppingCart} />
      <span className="cart-badge">{cartItems.length}</span>
    </div>
  );
};

export default CartWidget;
