import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);


const test = (question) => {

    if (["red", "green", "blue"].includes(question)) {
        const styles = {
            width: "100px",
            height: "100px",
            borderWidth: "5px",
            borderStyle: "solid",
            borderColor: `${question}`
        };
        return (
            <div style={styles}></div>
        );
    } else {
        return <div>Nieprawidłowy kolor</div>;
    }
};
const App = () => {
    const question = prompt("Jaki kolor ramki?");
    return test(question);

};

// 2 rozwiązanie
// const question = prompt("Jaki kolor ramki?");
//
// if (["red", "green", "blue"].includes(question)) {
//     const styles = {
//         width: "100px",
//         height: "100px",
//         borderWidth: "5px",
//         borderStyle: "solid",
//         borderColor: `${question}`
//     };
//     return (
//         <div style={styles}></div>
//     );
// } else {
//     return <div>Nieprawidłowy kolor</div>;
// }

root.render(<App />);



// rozwiazanie pawla
// import React from 'react';
// import { createRoot } from 'react-dom/client';
//
// const container = document.getElementById('app');
// const root = createRoot(container);
//
//
// const userInput = prompt('Podaj kolor ramki: (red, green, blue)');
//
// let borderColor;
//
// if(userInput === 'red' || userInput === 'green' || userInput === 'blue') {
//     borderColor = userInput;
// } else {
//     root.render(<div>Nieprawidłowy kolor!</div>)
// }
//
// if(borderColor) {
//     const divStyle = {
//         width: '100px',
//         height: '100px',
//         border: '5px solid ' + borderColor
//     }
//
//     const App = () => {
//         return (
//             <div style={divStyle}></div>
//         )
//     }
//     root.render(<App />);
// }