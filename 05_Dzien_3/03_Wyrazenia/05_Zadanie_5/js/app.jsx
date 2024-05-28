import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);

const calc = (A, B, Operation) => {

    let result;
    switch  (Operation) {
        case '+':
            result = <h1>Wynik dodawania: {A + B}</h1>;
            break;
        case '-':
            result = <h2>Wynik odejmowania: {A - B}</h2>;
            break;
        case '*':
            result = <h3>Wynik mnożenia: {A * B}</h3>;
            break;
        case '/':
            result = <h4>Wynik dzielenia: {A / B}</h4>;
            break;
        default:
            result = <p>nieprawidłowa operacja</p>;
    }
    return result;
};

const Calculator = () => {

    const a = parseFloat(prompt('Podaj liczbę A'));
    const operation = prompt("wybierz opracje matematyczną: +, -, *, /");
    const b = parseFloat(prompt('Podaj liczbę B'));

    return (
        <div>
            {calc(a, b, operation)}
        </div>
    );
};

root.render(<Calculator />);




