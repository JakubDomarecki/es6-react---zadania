import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);


const App = () => {
    const A = parseFloat(prompt('Podaj liczbę A'));
    const B = parseFloat(prompt('Podaj liczbę B'));

    return (
        <div>
            <h2>Wynik dodawania: {A + B}</h2>
        </div>
    );
};



root.render(<App />);

