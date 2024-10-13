import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const products = [
  { id: 1, name: 'Product 1', price: 10 },
  { id: 2, name: 'Product 2', price: 15 },
  { id: 3, name: 'Product 3', price: 20 },
];

const ProductList = () => {
  const { addItemToCart } = useContext(CartContext);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Products</h2>
      <div className="grid grid-cols-3 gap-4">
        {products.map(product => (
          <div key={product.id} className="border p-4 rounded">
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p>${product.price}</p>
            <button
              onClick={() => addItemToCart(product)}
              className="mt-2 bg-blue-500 text-white py-1 px-3 rounded"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
