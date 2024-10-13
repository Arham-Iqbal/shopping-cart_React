import React from 'react';
import { CartProvider } from './CartContext';
import ProductList from './ProductList';
import Cart from './Cart';

function App() {
  return (
    <CartProvider>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-8">Shopping Cart App</h1>
        <div className="grid grid-cols-2 gap-8">
          <ProductList />
          <Cart />
        </div>
      </div>
    </CartProvider>
  );
}

export default App;
