import React, { Component } from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);


const colors = ["blue", "green", "pink", "yellow", "black"];

const App = () => {
  return (
      <div>
        <p> {colors.join(" ")}</p>
      </div>
  );
};



root.render(<App />);
