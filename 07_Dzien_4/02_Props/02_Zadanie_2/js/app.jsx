import React, { Component } from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);



const AddNumbers = ({numberA, numberB}) => {
    return <h1>Suma liczba {numberA} i {numberB} wynosi: {numberA + numberB}</h1>;
};


class AddNumbersClass extends Component {
    render() {
        const {numberA, numberB} = this.props;

        return <h1>Suma liczba {numberA} i {numberB} wynosi: {numberA + numberB}</h1>;
    }
}


root.render(<AddNumbersClass numberA={7} numberB={7}/>);