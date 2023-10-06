import React from "react";
import { useCart } from "../Utils/CartContext";

const ShoppingCart = () => {
  const { cartItems, removeFromCart, calculateTotal } = useCart();
  console.log(cartItems + "fsgsgg");

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.id}>
              <p>{item.name}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Price: ${item.price.toFixed(2)}</p>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}
          <p>Total: ${calculateTotal().toFixed(2)}</p>
        </>
      )}
    </div>
  );
};

export default ShoppingCart;
