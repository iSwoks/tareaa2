import React from "react";
import Item from "./Item";

const productList = [
  {
    id: 1,
    title: "Producto 1",
    description: "Descripción del producto 1",
    price: 10.0,
    category: "libros",
  },
  {
    id: 2,
    title: "Producto 2",
    description: "Descripción del producto 2",
    price: 20.0,
    category: "electronica",
  },
  {
    id: 3,
    title: "Producto 3",
    description: "Descripción del producto 3",
    price: 30.0,
    category: "muebles",
  },
];

const ItemListContainer = ({ greeting, category, addToCart }) => {
  const filteredProductList = category
    ? productList.filter((product) => product.category === category)
    : productList;

  return (
    <div className="container">
      <h1 className="text-center">{greeting}</h1>
      <div className="row">
        {filteredProductList.map((product) => (
          <div className="col-md-4 mb-4" key={product.id}>
            <Item
              id={product.id}
              title={product.title}
              description={product.description}
              price={product.price}
              image={product.image}
              category={product.category}
              addToCart={() => addToCart(product)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
