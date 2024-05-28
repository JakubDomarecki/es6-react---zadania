import React, { Component } from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);

const name = prompt("podaj imię");
const age = prompt("podaj wiek");
const answerName = name;
const answerAge = age;

const App = () =>{
    return (
      <h1>{answerName} is {answerAge} years old</h1>
    );

};

root.render(<App />);
