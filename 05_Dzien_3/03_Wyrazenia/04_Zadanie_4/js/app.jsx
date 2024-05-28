import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);


const Calculator = () => {
    const A = parseFloat(prompt('Podaj liczbę A'));
    const operation = prompt("wybierz opracje matematyczną: +, -, *, /");
    const B = parseFloat(prompt('Podaj liczbę B'));

    let result;
    switch  (operation) {
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

    return (
        <div>
            {result}
        </div>
    );
};

root.render(<Calculator />);


// przez if
// import React from "react";
// import { createRoot } from "react-dom/client";
//
// const container = document.getElementById('app');
// const root = createRoot(container);
//
// const Calculator = () => {
//     const A = parseFloat(prompt('Podaj liczbę A'));
//     const B = parseFloat(prompt('Podaj liczbę B'));
//     const operation = prompt("Podaj operację")
//
//     let result;
//
//     if(operation === "+") {
//         result = <h1>Wynik dodawania {A + B}</h1>
//     } else if (operation === "-") {
//         result = <h2>Wynik odejmowania: {A - B}</h2>
//     } else if (operation === "*") {
//         result = <h3>Wynik mnozenia: {A * B}</h3>
//     } else if(operation === "/") {
//         result = <h4>Wynik dzielenia: {A / B}</h4>
//     } else {
//         result = <p>Nieprawidłowy znak</p>
//     }
//
//
//     return (
//         <div>
//             {result}
//         </div>
//     )
// }
//
// root.render(<Calculator />)


