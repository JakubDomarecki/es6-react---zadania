import React from 'react';
import { createRoot } from 'react-dom/client';

const genNumber = () => Math.round(Math.random() * 9 + 1);

const container = document.getElementById('app');
const root = createRoot(container);


const A = genNumber();
const B = genNumber();

const userMsg = prompt(`Jaka jest suma liczb ${A} i ${B}`);

const answer = parseInt(userMsg) === A + B;

const message = answer ? "Odpowiedź poprawna" : 'Odpowiedź błędna';

const bgColor = answer ? "green" : "red";

const style = {
    backgroundColor: bgColor
};

const App = () => {
    return (
        <div style={style}>
            {message}
        </div>
    );
};

root.render(<App />);