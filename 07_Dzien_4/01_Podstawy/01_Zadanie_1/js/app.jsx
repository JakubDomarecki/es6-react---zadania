import React, { Component } from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);


const SearchBar = () => {
    return (
        <div>
            <input type="text" />
            <button>Wyszukaj</button>
        </div>
    );
};

class SearchBarClass extends Component {
    render() {
        return (
            <div>
                <input type="text" />
                <button>Wyszukaj</button>
            </div>
        );
    };
}


root.render(<SearchBarClass />);