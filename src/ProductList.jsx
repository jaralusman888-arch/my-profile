import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import CartItem from './CartItem';
import './ProductList.css';

const plantCategories = [
  {
    category: 'Air Purifying Plants',
    plants: [
      { name: 'Snake Plant', price: 18, image: 'https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?w=300' },
      { name: 'Peace Lily', price: 22, image: 'https://images.unsplash.com/photo-1616500163246-3c7d0b1c8b9d?w=300' },
      { name: 'Spider Plant', price: 15, image: 'https://images.unsplash.com/photo-1572688484438-313a6e50c333?w=300' },
      { name: 'Areca Palm', price: 28, image: 'https://images.unsplash.com/photo-1608889175123-8ee362201f81?w=300' },
      { name: 'Boston Fern', price: 17, image: 'https://images.unsplash.com/photo-1597055181300-e3246ee8dbc9?w=300' },
      { name: 'Rubber Plant', price: 25, image: 'https://images.unsplash.com/photo-1593482892290-f54927ae1bb6?w=300' },
    ],
  },
  {
    category: 'Aromatic Fragrant Plants',
    plants: [
      { name: 'Lavender', price: 14, image: 'https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?w=300' },
      { name: 'Jasmine', price: 19, image: 'https://images.unsplash.com/photo-1597848212624-a19eb35e2651?w=300' },
      { name: 'Rosemary', price: 12, image: 'https://images.unsplash.com/photo-1515586000433-45406d8e6662?w=300' },
      { name: 'Mint', price: 10, image: 'https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?w=300' },
      { name: 'Eucalyptus', price: 21, image: 'https://images.unsplash.com/photo-1509587584298-0f3b3a3a1797?w=300' },
      { name: 'Basil', price: 9, image: 'https://images.unsplash.com/photo-1618164435735-413d3b066c9a?w=300' },
    ],
  },
  {
    category: 'Low-Maintenance Succulents',
    plants: [
      { name: 'Aloe Vera', price: 13, image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=300' },
      { name: 'Jade Plant', price: 16, image: 'https://images.unsplash.com/photo-1459156212016-c812468e2115?w=300' },
      { name: 'Echeveria', price: 11, image: 'https://images.unsplash.com/photo-1509937528035-ad76254b0356?w=300' },
      { name: 'Haworthia', price: 12, image: 'https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?w=300' },
      { name: 'Zebra Plant', price: 15, image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=300' },
      { name: 'Barrel Cactus', price: 18, image: 'https://images.unsplash.com/photo-1459156212016-c812468e2115?w=300' },
    ],
  },
];

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const [showCart, setShowCart] = useState(false);

  const totalItemsInCart = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  const isInCart = (name) => cartItems.some(item => item.name === name);

  if (showCart) {
    return <CartItem onContinueShopping={() => setShowCart(false)} />;
  }

  return (
    <div className="product-list-page">
      <nav className="navbar">
        <div className="nav-brand">🌿 Paradise Nursery</div>
        <div className="nav-links">
          <a href="/" className="nav-link">Home</a>
          <a href="#plants" className="nav-link">Plants</a>
          <div className="cart-icon-wrapper" onClick={() => setShowCart(true)}>
            🛒
            <span className="cart-count">{totalItemsInCart}</span>
          </div>
        </div>
      </nav>

      <h1 className="page-title">Our Plant Collection</h1>

      {plantCategories.map((cat) => (
        <div key={cat.category} className="category-section" id="plants">
          <h2 className="category-title">{cat.category}</h2>
          <div className="plant-grid">
            {cat.plants.map((plant) => (
              <div key={plant.name} className="plant-card">
                <img src={plant.image} alt={plant.name} className="plant-thumb" />
                <h3>{plant.name}</h3>
                <p className="plant-price">${plant.price}</p>
                <button
                  className="add-to-cart-btn"
                  disabled={isInCart(plant.name)}
                  onClick={() => handleAddToCart({ name: plant.name, image: plant.image, cost: plant.price })}
                >
                  {isInCart(plant.name) ? 'Added to Cart' : 'Add to Cart'}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;