import React, { Component } from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);


const Hello = (props) => {
    const {name, surname} = props;

    return <h1>Hello {name} {surname}</h1>;
};

const HelloO = ({name, surname} ) => {

    return <h1>Hello {name} {surname}</h1>;
};


class HelloClass extends Component {
    render() {
        const {name, surname} = this.props;

        return <h1>Hello, {name} {surname}</h1>;
    }
}


root.render(<HelloClass name={"Paweł"} surname={"Strumiński"} />);
