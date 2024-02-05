import React from 'react';
import { createRoot } from 'react-dom/client';

const genNumber = () => Math.round(Math.random() * 9 + 1);

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);
