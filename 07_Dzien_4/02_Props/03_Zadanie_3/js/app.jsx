import React, { Component } from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);

// const Sum = (props) => {
//     const {numbers} = props;
//     const sum = numbers.reduce((acc , n) => acc + n, 0);
//
//     return <h1>Suma liczb: {sum} </h1>;
//
// };

//ewentualnie
const Sum = ({numbers}) => {
    const sum = numbers.reduce((acc , n) => acc + n, 0);

    return <h1>Suma liczb: {sum} </h1>;

};


root.render(<Sum numbers={[1, 2, 3, 4]}/>);
