import React from 'react';
import './Cart.css'

const Cart = ({ cart, handleRemoveFromCart }) => {
  let message;
  if (cart.length === 0) {
    message = <p>Please add some products</p>
  }
  return (
    <div>
      <h2 className={`bold bordered ${cart.length === 3 ? 'red' : 'orange'}`}>Order Summary: {cart.length}</h2>
      {
        cart.map(tShirt =>
          <p key={tShirt._id}>
            {tShirt.name}
            <button
              onClick={() => handleRemoveFromCart(tShirt._id)}
            > Remove </button>
          </p>)
      }
    </div>
  );
};

export default Cart;