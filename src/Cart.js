import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const Cart = () => {
  const { cartItems, removeItemFromCart } = useContext(CartContext);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between items-center mb-4 border p-2 rounded">
              <div>
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p>${item.price}</p>
              </div>
              <button
                onClick={() => removeItemFromCart(item.id)}
                className="bg-red-500 text-white py-1 px-3 rounded"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
