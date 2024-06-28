// import React, { Component } from 'react';
// import { createRoot } from 'react-dom/client';
//
// const container = document.getElementById('app');
// const root = createRoot(container);
//
//
// const ShopItemHeader = ({title, image}) => {
//     return (
//         <header>
//             <h1>{title}</h1>
//             <img src={image} alt="Image" />
//         </header>
//     );
// };
//
// const ShopItemDescription = ({description}) => {
//     return (
//         <article>
//             <p>{description}</p>
//         </article>
//     );
// };
//
// const ShopItemPricing = ({price}) => {
//     return (
//         <footer>
//             Cena: {price}
//             <button>Kup!</button>
//         </footer>
//     );
// };
//
// const Shoplist = ({items}) => {
//     return (
//         <div className="CSS">
//             {items.map((item, index) => (
//                 <ShopItemHeader key={index} title={item.title} image={item.image}/>
//                 //lub krócej: <ShopItem key={index} {...item} />
//             ))}
//         </div>
//     );
// };
//
// const ShopItem = ({title, image, description, price}) => {
//     return (
//         <section>
//             <ShopItemHeader title={title} image={image}/>
//             <ShopItemDescription description={description} />
//             <ShopItemPricing price={price} />
//         </section>
//     );
// };
//
//
// const App = () => {
//     const itemData = {
//         "title": "MacBook Pro",
//         "image": "data:image/jpeg;base64,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",
//         "description": "Moc i mobilność – MacBook Pro wyraźnie podnosi tu poprzeczkę. Teraz możesz jeszcze szybciej realizować swoje pomysły. Pomogą Ci w tym wydajne procesory i układy pamięci, zaawansowana grafika, błyskawicznie działająca pamięć masowa i inne doskonałe rozwiązania.",
//         "price": 9999
//     };
//
//     const items = [
//         {
//             title: 'Mysz komputerowa',
//             image: 'https://upload.wikimedia.org/wikipedia/commons/c/c5/Red_computer_mouse.jpg',
//         },
//         {
//             title: 'Klawiatura',
//             image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Computer_keyboard_Danish_layout.svg/1000px-Computer_keyboard_Danish_layout.svg.png',
//         },
//         {
//             title: 'Laptop programisty',
//             image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Typing_computer_screen_reflection.jpg/640px-Typing_computer_screen_reflection.jpg',
//         },
//     ];
//
//     return (
//         <div>
//             {/*<ShopItem title={itemData.title} image={itemData.image} description={itemData.description} price={itemData.price} />*/}
//             {/*ewentualnie krócej: bo te same nazwy sa w obiekcie co w propsach(jaoks tak mowił)*/}
//             <ShopItem {...itemData} />
//             <Shoplist items={items}/>
//         </div>
//
//     );
// };
//
// root.render(<App />);



//roziązanie klasami pawła
import React, { Component } from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);


class ShopItemHeader extends Component {
    render() {
        const {title, image} = this.props;

        return (
            <header>
                <h1>{title}</h1>
                <img src={image} alt="image" />
            </header>
        );
    }
}

class ShopList extends Component {
    render() {
        const { items } = this.props;

        return (
            <div className='shoplist'>
                {items.map((item, index) => (
                    <ShopItemHeader key={index} title={item.title} image={item.image} />
                ))}

            </div>
        );
    }
}

class App extends Component {
    render() {
        const items = [
            {
                title: 'Mysz komputerowa',
                image: 'https://upload.wikimedia.org/wikipedia/commons/c/c5/Red_computer_mouse.jpg',
            },
            {
                title: 'Klawiatura',
                image:
                    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Computer_keyboard_Danish_layout.svg/1000px-Computer_keyboard_Danish_layout.svg.png',
            },
            {
                title: 'Laptop programisty',
                image:
                    'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Typing_computer_screen_reflection.jpg/640px-Typing_computer_screen_reflection.jpg',
            },
        ];

        return (
            <ShopList items={items} />
        );
    }
}


root.render(<App />);


