import React, { Component } from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);


const LikeBox = () => {
  return (
      <div>
          <p>100 likes</p>
          <button>lubię to</button>
      </div>
  );
};


root.render(<LikeBox/>);
