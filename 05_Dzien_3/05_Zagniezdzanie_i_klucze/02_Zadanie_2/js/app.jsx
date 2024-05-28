import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);


import person from './data/person.js';

const App = () => {
    return (
        <>
            <h1>{person.title + person.firstName + person.lastName}</h1>
            <span>{person.age}</span>
        </>
    );
};


root.render(<App/>);
