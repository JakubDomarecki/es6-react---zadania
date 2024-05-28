import React, { Component } from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');

import products from './data/products';

const ProductsList = () => {
  return (
      <div>
          <ul>
              {products.map(product => (
                  <li key={product.code}>{product.name} - {product.price}zł</li>
              ))}
          </ul>
          <button>Do Koszyka</button>
      </div>
  );
};


const root = createRoot(container);
root.render(<ProductsList/>);
