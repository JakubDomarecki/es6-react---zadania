import React, { Component } from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);


const CurrencyConverter = (props) => {
    const {from, to, value, rate} = props;

    const convertedValue = (value * rate).toFixed(2);

    return (
        <div>
            <strong>{value}</strong> {from} - <strong>{convertedValue}</strong> {to}
        </div>
    );
};

const App = () => {
    return (
        <section>
            <CurrencyConverter from="EUR" to="USD" value={200} rate={1.12275} />
            <CurrencyConverter from="EUR" to="PLN" value={500} rate={4.4} />
            <CurrencyConverter from="EUR" to="USD" value={300} rate={2.12275} />
        </section>
    );
};



root.render(<App />);