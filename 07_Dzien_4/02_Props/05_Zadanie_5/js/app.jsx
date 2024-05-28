import React, { Component } from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);


const menuItems = [
    {
        url: '/',
        text: 'Strona główna',
    },
    {
        url: '/blog',
        text: 'Blog',
    },
    {
        url: '/cennik',
        text: 'Cennik',
    },
    {
        url: '/kontakt',
        text: 'Kontakt',
    },
];
const Menu = ({menu}) => {
    return (
            <ul>
                {menu.map((item, index) => (
                    <li key={index}>
                        <a href={item.url}>{item.text}</a>
                    </li>
                ))}
            </ul>
    );
};

root.render(<Menu menu={menuItems}/>);
