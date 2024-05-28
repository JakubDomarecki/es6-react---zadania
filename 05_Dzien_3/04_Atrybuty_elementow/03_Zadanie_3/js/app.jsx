// import React from 'react';
// import { createRoot } from 'react-dom/client';
//
// const red = {
//   height: "100px",
//   backgroundColor: "red"
// };
// const green = {
//   height: "100px",
//   backgroundColor: "green"
// };
// const blue = {
//   height: "100px",
//   backgroundColor: "blue"
// };
//
// const redDiv = <div style={red}/>;
// const greenDiv = <div style={green}/>;
// const blueDiv = <div style={blue}/>;
//
// //2 opcja
// // const getDivStyle = (colorName) => {
// //   const colors = {
// //     red: 'red',
// //     green: 'green',
// //     blue: 'blue'
// //   };
// //   return {
// //     height: "100px",
// //     backgroundColor: colors[colorName]
// //   };
// // };
// //
// // const redDiv = <div style={getDivStyle('red')}/>;
// // const greenDiv = <div style={getDivStyle('green')}/>;
// // const blueDiv = <div style={getDivStyle('blue')}/>;
//
//
// const container = document.getElementById('app');
// const root = createRoot(container);
//
//
// root.render(
//   <>
//     {redDiv}
//     {greenDiv}
//     {blueDiv}
//   </>
// );



// rowiazaine pawła
import React from 'react';
import { createRoot } from 'react-dom/client';


const divStyle = {height: '100px'};
const red = 'red';
const green = 'green';
const blue = 'blue';


const redDiv = <div style={{...divStyle, backgroundColor: red }} />;
const greenDiv = <div style={{...divStyle, backgroundColor: green }}/>;
const blueDiv = <div style={{...divStyle, backgroundColor: blue }}/>;



const container = document.getElementById('app');
const root = createRoot(container);
root.render(
    <>
      {redDiv}
      {greenDiv}
      {blueDiv}
    </>
);
