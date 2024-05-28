import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);


import person from './data/person';

const App = () => {
    return (
        <ul>
            <li>Title: {person.title}</li>
            <li>First Name: {person.firstName}</li>
            <li>Last Name: {person.lastName}</li>
            <li>Age: {person.age}</li>
        </ul>
    );
};

root.render(<App />);
