import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, updateQuantity } from "./CartSlice";
import "./CartItem.css";

function CartItem({ onContinueShopping }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.cost * item.quantity,
    0
  );

  const increaseQuantity = (item) => {
    dispatch(
      updateQuantity({
        name: item.name,
        quantity: item.quantity + 1,
      })
    );
  };

  const decreaseQuantity = (item) => {
    if (item.quantity > 1) {
      dispatch(
        updateQuantity({
          name: item.name,
          quantity: item.quantity - 1,
        })
      );
    }
  };

  const deleteItem = (item) => {
    dispatch(removeItem(item.name));
  };

  if (cartItems.length === 0) {
    return (
      <div className="cart-page">
        <h1>Shopping Cart</h1>
        <p>Your cart is empty.</p>
        <button onClick={onContinueShopping}>
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <nav className="navbar">
        <div className="nav-brand">🌿 Paradise Nursery</div>
        <button onClick={onContinueShopping}>
          Continue Shopping
        </button>
      </nav>

      <h1>Shopping Cart</h1>

      <div className="cart-items">
        {cartItems.map((item) => (
          <div className="cart-item" key={item.name}>
            <img src={item.image} alt={item.name} />

            <div className="cart-item-details">
              <h2>{item.name}</h2>
              <p>Price: ${item.cost}</p>

              <div className="quantity-controls">
                <button onClick={() => decreaseQuantity(item)}>
                  -
                </button>

                <span>{item.quantity}</span>

                <button onClick={() => increaseQuantity(item)}>
                  +
                </button>
              </div>

              <p>
                Subtotal: ${(item.cost * item.quantity).toFixed(2)}
              </p>

              <button onClick={() => deleteItem(item)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <h2>Total Items: {totalItems}</h2>
        <h2>Total Amount: ${totalAmount.toFixed(2)}</h2>
      </div>

      <button onClick={onContinueShopping}>
        Continue Shopping
      </button>

      <button>Checkout</button>
    </div>
  );
}

export default CartItem;