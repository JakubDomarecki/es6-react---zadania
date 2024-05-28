import React, { Component } from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);



const App = () => {
    const divStyle = {
        width: "500px",
        height: "500px",
        backgroundColor: "blue",
    };

    return (
        <div style={divStyle}></div>
      // <div style={{width: "500px",  height: "500px", backgroundColor: "blue"}}></div>
    );
};




root.render(<App />);
