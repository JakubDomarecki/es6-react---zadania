import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);

import animals from './data/animals';
const App = () => {
    return (
        <section>
            <p>{animals.length}</p>
            <p> {animals.join(" ")}</p>
        </section>
    );
};

root.render(<App />);
