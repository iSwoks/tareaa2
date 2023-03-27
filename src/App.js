import React, { useState } from "react";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetail from "./components/ItemDetail";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (itemToRemove) => {
    setCartItems(cartItems.filter((item) => item !== itemToRemove));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <BrowserRouter>
      <div>
        <NavBar cartItems={cartItems} clearCart={clearCart} />
        <Routes>
          <Route path="/item/:itemId" element={<ItemDetail />} />
          <Route
            exact
            path="/"
            element={
              <ItemListContainer greeting="Bienvenido" addToCart={addToCart} />
            }
          />
          <Route
            path="/libros"
            element={
              <ItemListContainer category="libros" addToCart={addToCart} />
            }
          />
          <Route
            path="/electronica"
            element={
              <ItemListContainer category="electronica" addToCart={addToCart} />
            }
          />
          <Route
            path="/muebles"
            element={
              <ItemListContainer category="muebles" addToCart={addToCart} />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
