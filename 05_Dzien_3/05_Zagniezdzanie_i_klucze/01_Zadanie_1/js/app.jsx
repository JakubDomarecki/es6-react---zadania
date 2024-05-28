import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);

import people from './data/people';

const App = () => {
    return (
        <>
            {people.map(item => (
                <div key={item.id}>
                    <p>{item.name}</p>
                    <p>{item.surname}</p>
                </div>
            ))}
        </>
    );
};

root.render(<App />);
