import React, { Component } from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);



const GrandChildComponent = ({children}) => {
    return <div>{children}</div>;
};

const ChildComponent = ({children}) => {
    return <GrandChildComponent>{children}</GrandChildComponent>;
};

const ParentComponent = ({children}) => {
    return <ChildComponent>{children}</ChildComponent>;
};

const App = () => {
    return(
        <ParentComponent>
            <h1>To działa!</h1>
        </ParentComponent>
    );
};



root.render(<App/>);