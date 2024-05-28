import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);


const App = () => {
    const yearOfBirth = parseFloat(prompt('Podaj rok urodzenia'));

    const currentYear = new Date().getFullYear();

    return (
        <h1>Twój wiek to: {currentYear - yearOfBirth}</h1>
    );
};



root.render(<App />);