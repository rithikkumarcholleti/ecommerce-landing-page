// src/components/ProductList.jsx
import React from 'react';

const ProductList = () => {
  const products = [
    { id: 1, name: 'Mens Shirt', description: 'Black Shirt for Men', imageUrl: 'shirt1.jpg' },
    { id: 2, name: 'Mens Shirt', description: 'Black Shirt for Men', imageUrl: 'shirt2.jpg' },
    { id: 3, name: 'Mens Shirt', description: 'Black Shirt for Men', imageUrl: 'shirt3.jpg' },
    // Add more products as needed
  ];

  return (
    <div className="product-list">
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          <img src={product.imageUrl} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <button>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
