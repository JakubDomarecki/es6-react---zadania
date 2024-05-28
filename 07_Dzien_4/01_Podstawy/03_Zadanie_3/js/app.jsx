import React, { Component } from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);

// const Menu = () => {
//   return (
//           <ul>
//               <li><a href="/">Strona głowna</a></li>
//               <li><a href="/blog">Blog</a></li>
//               <li><a href="/cennik">Cennik</a></li>
//               <li><a href="/kontakt">Kontakt</a></li>
//           </ul>
//   );
// };


class Menu extends Component {
    render() {
        return (
            <ul>
                <li><a href="/">Strona głowna</a></li>
                <li><a href="/blog">Blog</a></li>
                <li><a href="/cennik">Cennik</a></li>
                <li><a href="/kontakt">Kontakt</a></li>
            </ul>
        );
    }
}


root.render(<Menu />);
