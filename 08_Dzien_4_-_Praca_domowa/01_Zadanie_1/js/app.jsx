import React, { Component } from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);


const RandomNumbers = (props) => {
    const {min, max, count} = props;
    const array = [];
    for (let i = 0; i < count; i++) {
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        array.push(randomNumber);
    }
    return (
        <>
            <RandomNumbersInfo min={min} max={max} count={count} />
            <RandomNumbersList numbers={array} />
        </>
    );
};
const RandomNumbersInfo = (props) => {
    const {min, max, count} = props;
    return (
        <div>
            Min: {min}, Max: {max}, Count: {count}
        </div>
    );
};

const RandomNumbersList = ({ numbers }) => {
    return (
        <ul>
            {numbers.map((number, index) => (
                <li key={index}>{number}</li>
                ))}
        </ul>
    );
};


const App = () => {
   return (
       <>
           <RandomNumbers min={1} max={10} count={5}/>
       </>

   );
};


root.render(<App />);
