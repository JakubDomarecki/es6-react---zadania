import React, { Component } from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);


import person from './data/person';


const PersonBox = ({name, surname, jobTitle, phone}) => {
    return (
        <div>
            <h2>{name} {surname}</h2>
            <h5>{jobTitle}</h5>
            <p>tel. {phone}</p>
        </div>
    );
};


root.render( <PersonBox name={person.name} surname={person.surname} jobTitle={person.jobTitle} phone={person.phone}/>);
