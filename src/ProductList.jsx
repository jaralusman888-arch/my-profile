import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "./CartSlice";

const products = [
  {
    id: 1,
    name: "Aloe Vera",
    price: 15,
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
    category: "Indoor Plants",
  },
  {
    id: 2,
    name: "Snake Plant",
    price: 20,
    image:
      "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee",
    category: "Indoor Plants",
  },
  {
    id: 3,
    name: "Peace Lily",
    price: 18,
    image:
      "https://images.unsplash.com/photo-1598880940080-ff9a29891b85",
    category: "Flowering Plants",
  },
  {
    id: 4,
    name: "Monstera",
    price: 25,
    image:
      "https://images.unsplash.com/photo-1614594975525-e45190c55d0b",
    category: "Indoor Plants",
  },
  {
    id: 5,
    name: "Fiddle Leaf Fig",
    price: 30,
    image:
      "https://images.unsplash.com/photo-1509423350716-97f2360af7e4",
    category: "Indoor Plants",
  },
  {
    id: 6,
    name: "Spider Plant",
    price: 16,
    image:
      "https://images.unsplash.com/photo-1572688484438-313a6e50c333",
    category: "Indoor Plants",
  },
];

function ProductList() {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
  };

  return (
    <div className="product-list">
      <h1>Our Plants</h1>

      <div className="products">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.category}</p>
            <p>${product.price}</p>

            <button onClick={() => handleAddToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;