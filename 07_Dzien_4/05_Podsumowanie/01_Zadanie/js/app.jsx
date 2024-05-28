// import React from 'react';
// import { createRoot } from 'react-dom/client';
//
// const container = document.getElementById('app');
// const root = createRoot(container);
//
// import products from "./data/products.js";
//
// const Recepit = ({items}) => {
//     const totalSum = items.reduce((acc, item) => acc + item.single_price * item.qty, 0).toFixed(2);
//   return (
//         <table className="table">
//             <thead>
//                 <tr>
//                 <th>Nazwa</th>
//                 <th>cena</th>
//                 <th>ilośc</th>
//                 <th>Łączna cena</th>
//                 </tr>
//             </thead>
//             <tbody>
//             {items.map((item) => (
//                 <tr key={item.code}>
//                     <td>{item.name}</td>
//                     <td>{item.single_price}</td>
//                     <td>{item.qty}</td>
//                     <td>{(item.single_price * item.qty).toFixed(2)}</td>
//                 </tr>
//             ))}
//                 <tr>
//                     <td>RAZEM</td>
//                     <td> -</td>
//                     <td> -</td>
//                     <td> {totalSum} </td>
//                 </tr>
//             </tbody>
//         </table>
//   );
// };
//
// const App = () => {
//     return (
//         <Recepit items={products}/>
//     );
// };
//
//
// root.render(<App/>);

//2 czesc
import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);

import products from "./data/products.js";

const ReceiptHeader = () => {
    return (
        <thead>
        <tr>
            <th>Nazwa</th>
            <th>Cena</th>
            <th>Ilość</th>
            <th>Łączna cena</th>
        </tr>
        </thead>
    );
};

const ReceiptItem = (props) => {
    const {name, single_price, qty } = props.item;

    const totalPrice = (single_price * qty).toFixed(2);
    return (
        <tr>
            <td>{name}</td>
            <td>{single_price}</td>
            <td>{qty}</td>
            <td>{totalPrice}</td>
        </tr>
    );
};

const ReceiptItems = (props) => {
    const {items} = props;

    return (
        <tbody>
        {items.map((item, index) => (
            <ReceiptItem key={index} item={item} />
        ))}
        </tbody>
    );
};


const ReceiptFooter = (props) => {
    const { items } = props;

    const total = items.reduce((acc, item) => acc + item.qty * item.single_price, 0).toFixed();

    return  (
        <tfoot>
        <tr>
            <td>Razem</td>
            <td>-</td>
            <td>-</td>
            <td>{total} zł</td>
        </tr>
        </tfoot>
    );
};

const Receipt = (props) => {
    const {items} = props;

    return (
        <table className="table">
            <ReceiptHeader />
            <ReceiptItems items={items} />
            <ReceiptFooter items={items} />
        </table>
    );
};

const App = () => {
    return (
        <Receipt items={products} />
    );
};

root.render(<App/>);

